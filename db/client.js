const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

async function getSlackThreadTs(sessionId) {
  const { rows } = await pool.query(
    `select slack_thread_ts from conversations where session_id = $1`,
    [sessionId]
  );
  return rows[0]?.slack_thread_ts || null;
}

async function upsertConversation({ sessionId, messages, ipAddress, slackThreadTs }) {
  await pool.query(
    `insert into conversations (session_id, messages, ip_address, slack_thread_ts)
     values ($1, $2, $3, $4)
     on conflict (session_id)
     do update set
       messages = excluded.messages,
       ip_address = excluded.ip_address,
       slack_thread_ts = coalesce(excluded.slack_thread_ts, conversations.slack_thread_ts),
       updated_at = now()`,
    [sessionId, JSON.stringify(messages), ipAddress, slackThreadTs || null]
  );
}

module.exports = { getSlackThreadTs, upsertConversation };
