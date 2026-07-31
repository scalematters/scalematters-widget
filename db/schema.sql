create table if not exists conversations (
  session_id text primary key,
  messages jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  ip_address text,
  slack_thread_ts text
);

-- Run this if the table already exists from before Slack logging was added:
-- alter table conversations add column if not exists slack_thread_ts text;
