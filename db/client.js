const { sql } = require('@vercel/postgres');

async function upsertConversation({ sessionId, messages, ipAddress }) {
  await sql`
    insert into conversations (session_id, messages, ip_address)
    values (${sessionId}, ${JSON.stringify(messages)}, ${ipAddress})
    on conflict (session_id)
    do update set
      messages = excluded.messages,
      ip_address = excluded.ip_address,
      updated_at = now()
  `;
}

module.exports = { upsertConversation };
