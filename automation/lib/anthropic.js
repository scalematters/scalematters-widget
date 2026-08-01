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

  return completion.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('\n');
}

module.exports = { synthesize };
