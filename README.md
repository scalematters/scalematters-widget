# scaleMatters AI Chat Widget

A floating chat widget for scalematters.com that talks to prospects about RevOps
services, backed by a Vercel serverless function that calls Claude and logs every
conversation to Postgres.

This README is written for the parts of setup that need a human — creating
accounts and clicking buttons in dashboards. Everything else (the code) is
already done.

## What you need to do, in order

### 1. Create the GitHub repo

1. Go to [github.com/new](https://github.com/new).
2. Name it `scalematters-widget`.
3. Set visibility to **Private**.
4. Don't initialize with a README, .gitignore, or license (this folder already has them).
5. Click **Create repository**.
6. Come back and tell me the repo is created — I'll push this code to it.

### 2. Connect Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account) with GitHub.
2. Click **Add New → Project**, and import the `scalematters-widget` GitHub repo.
3. Leave the default framework preset (it will detect this as a plain Node project) and click **Deploy**. The first deploy will fail or partially work until the environment variables and Postgres are set up below — that's expected.

### 3. Add Postgres storage

1. In the Vercel project, go to the **Storage** tab.
2. Click **Create Database → Postgres**, and follow the prompts to attach it to this project.
3. This automatically sets a `POSTGRES_URL` environment variable — you don't need to copy/paste anything.
4. Once it's attached, run the contents of [`db/schema.sql`](db/schema.sql) against that database to create the `conversations` table. The Vercel Postgres dashboard has a **Query** tab where you can paste and run it directly.

### 4. Add Upstash (rate limiting)

1. Still in the Vercel project, go to the **Storage** tab (or **Integrations**, depending on Vercel's current layout) and find **Upstash** (Redis).
2. Add it on the free tier and connect it to this project. This sets `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` automatically.

### 5. Set the remaining environment variables

In the Vercel project's **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `ANTHROPIC_API_KEY` | Your Claude API key from [console.anthropic.com](https://console.anthropic.com) |
| `ALLOWED_ORIGIN` | `https://www.scalematters.com` (or whatever the live site's exact domain is) |

Redeploy after adding these (Vercel's dashboard has a **Redeploy** button, or it happens automatically on the next git push).

### 6. Get the embed snippet onto the site

Once deployed, Vercel gives the project a domain like `scalematters-widget.vercel.app`
(or a custom domain if one is set up). The embed snippet is:

```html
<link rel="stylesheet" href="https://YOUR-VERCEL-DOMAIN/widget.css">
<script src="https://YOUR-VERCEL-DOMAIN/widget.js"></script>
```

Actually — the widget script already injects its own stylesheet automatically, so
just the one line is enough:

```html
<script src="https://YOUR-VERCEL-DOMAIN/widget.js"></script>
```

In HubSpot:

1. Go to **Settings → Website → Pages**.
2. Under the relevant domain, open **Footer HTML** (this makes the widget appear site-wide) — or, to try it on one page first, open that page in the content editor and add an **HTML module** with the snippet above.
3. Paste in the script tag with your actual Vercel domain.
4. Publish.

I'll fill in the exact domain for you once the first deploy succeeds — just paste it back to me and I'll confirm it's right, or hand you the exact final snippet.

## Reviewing conversations

All conversations land in the `conversations` table, keyed by `session_id`, and update live as a visitor chats (not just when they finish). Some useful queries to run from the Vercel Postgres **Query** tab:

Most recent conversations:
```sql
select session_id, created_at, updated_at, jsonb_array_length(messages) as turns
from conversations
order by updated_at desc
limit 20;
```

Full transcript of one conversation:
```sql
select messages
from conversations
where session_id = 'PASTE_SESSION_ID_HERE';
```

Conversations from today:
```sql
select session_id, updated_at
from conversations
where created_at >= current_date
order by updated_at desc;
```

## Local development (for me, not you)

```bash
npm install
vercel dev
```

This runs the widget and the `/api/chat` function together locally against a
`.env.local` file (copy `.env.example` to `.env.local` and fill in real values —
never commit `.env.local`).

## Notes

- `knowledge_base.md` in this folder is the system prompt, copied verbatim from
  the parent directory. It should not be hand-edited here — if it needs to
  change, it gets updated at the source and re-copied.
- v1 is non-streaming: the widget shows a typing indicator and then the full
  reply at once, rather than streaming word-by-word. Streaming is a reasonable
  v1.1 upgrade once this is live and validated.
- The booking link (Vinny's calendar) is rendered automatically as a "Book a
  time →" button whenever the assistant's reply contains a URL — no special
  configuration needed.
