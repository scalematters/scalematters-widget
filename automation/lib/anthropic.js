const Anthropic = require('@anthropic-ai/sdk');

const MODEL = 'claude-sonnet-4-6';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function synthesize({ system, prompt, maxTokens = 8000 }) {
  const completion = await client.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    system,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = completion.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('\n');

  // stop_reason === 'max_tokens' means the response was cut off mid-output —
  // using it would silently delete whatever came after the cut.
  return { text, truncated: completion.stop_reason === 'max_tokens' };
}

module.exports = { synthesize };
