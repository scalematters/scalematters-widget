create table if not exists conversations (
  session_id text primary key,
  messages jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  ip_address text
);
