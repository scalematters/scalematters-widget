const MAX_FIELD_CHARS = 2800;

function truncate(text) {
  if (text.length <= MAX_FIELD_CHARS) return text;
  return text.slice(0, MAX_FIELD_CHARS) + '…';
}

// Posts a new message, or a threaded reply when threadTs is provided.
// Returns the message's ts (used as the thread root for later turns).
async function postToSlack({ threadTs, text }) {
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL_ID;
  if (!token || !channel) {
    throw new Error('SLACK_BOT_TOKEN or SLACK_CHANNEL_ID not configured');
  }

  const body = { channel, text: truncate(text) };
  if (threadTs) body.thread_ts = threadTs;

  const res = await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!data.ok) throw new Error('Slack API error: ' + data.error);
  return data.ts;
}

module.exports = { postToSlack };
