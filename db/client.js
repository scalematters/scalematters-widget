const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

async function upsertConversation({ sessionId, messages, ipAddress }) {
  await pool.query(
    `insert into conversations (session_id, messages, ip_address)
     values ($1, $2, $3)
     on conflict (session_id)
     do update set
       messages = excluded.messages,
       ip_address = excluded.ip_address,
       updated_at = now()`,
    [sessionId, JSON.stringify(messages), ipAddress]
  );
}

module.exports = { upsertConversation };
