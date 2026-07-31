const fs = require('fs');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');
const { Ratelimit } = require('@upstash/ratelimit');
const { Redis } = require('@upstash/redis');
const { upsertConversation } = require('../db/client');

const MODEL = 'claude-sonnet-4-6';
const MAX_MESSAGES = 40;
const MAX_MESSAGE_CHARS = 4000;
const MAX_TOKENS = 1024;

// Read once per cold start — this file is large and static, so it's cached
// for the lifetime of the serverless instance rather than re-read per request.
const SYSTEM_PROMPT = fs.readFileSync(
  path.join(process.cwd(), 'knowledge_base.md'),
  'utf-8'
);

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(20, '1 m'),
  prefix: 'scalematters-widget',
});

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.socket?.remoteAddress || 'unknown';
}

function applyCors(req, res) {
  const origin = req.headers.origin;
  const allowed = origin && origin === process.env.ALLOWED_ORIGIN;
  if (allowed) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  return allowed;
}

function validateMessages(messages) {
  if (!Array.isArray(messages) || messages.length === 0) return false;
  if (messages.length > MAX_MESSAGES) return false;
  return messages.every(
    (m) =>
      m &&
      (m.role === 'user' || m.role === 'assistant') &&
      typeof m.content === 'string' &&
      m.content.length > 0 &&
      m.content.length <= MAX_MESSAGE_CHARS
  );
}

module.exports = async function handler(req, res) {
  const corsOk = applyCors(req, res);

  if (req.method === 'OPTIONS') {
    res.status(corsOk ? 204 : 403).end();
    return;
  }

  if (!corsOk) {
    res.status(403).json({ error: 'Origin not allowed' });
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const ip = getClientIp(req);
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    res.status(429).json({ error: 'Rate limit exceeded, please slow down.' });
    return;
  }

  const { session_id, messages } = req.body || {};

  if (typeof session_id !== 'string' || session_id.length === 0 || session_id.length > 128) {
    res.status(400).json({ error: 'Invalid session_id' });
    return;
  }

  if (!validateMessages(messages)) {
    res.status(400).json({ error: 'Invalid messages' });
    return;
  }

  let reply;
  try {
    const completion = await anthropic.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    reply = completion.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n');
  } catch (err) {
    console.error('Anthropic API error', err);
    res.status(502).json({ error: 'Upstream error, please try again.' });
    return;
  }

  const fullTranscript = [...messages, { role: 'assistant', content: reply }];

  try {
    await upsertConversation({ sessionId: session_id, messages: fullTranscript, ipAddress: ip });
  } catch (err) {
    // Logging failure shouldn't block the reply from reaching the visitor.
    console.error('Postgres upsert error', err);
  }

  res.status(200).json({ reply });
};
