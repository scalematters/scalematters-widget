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
2. Add it on the free tier and connect it to this project. This sets `KV_REST_API_URL` and `KV_REST_API_TOKEN` automatically.

### 5. Add Slack (conversation notifications)

Every conversation gets posted to a Slack channel — a new message when it starts, with follow-up turns threaded underneath.

1. Go to [api.slack.com/apps](https://api.slack.com/apps) → **Create New App** → **From scratch**. Name it something like "scaleMatters Chat Logger" and pick your workspace.
2. In the app's settings, go to **OAuth & Permissions** (left sidebar).
3. Scroll to **Scopes → Bot Token Scopes** → **Add an OAuth Scope** → add `chat:write`.
4. Scroll up and click **Install to Workspace** (or **Install App**), then approve it.
5. Copy the **Bot User OAuth Token** — it starts with `xoxb-`. This is a secret, treat it like a password.
6. In Slack itself, create or pick the channel you want conversations posted to (e.g. `#website-chats`), then type `/invite @YourAppName` in that channel to let the bot post there.
7. Get the channel's ID: right-click the channel name → **View channel details** → scroll down to find the Channel ID (or it's the last part of the channel's URL).
8. Add both values in Vercel's environment variables (see step 6 below): `SLACK_BOT_TOKEN` and `SLACK_CHANNEL_ID`.
9. Run the migration in [`db/schema.sql`](db/schema.sql) (the `alter table` line at the bottom) against the Postgres database, since the `conversations` table needs a new column to track Slack threads.

### 6. Set the remaining environment variables

In the Vercel project's **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `ANTHROPIC_API_KEY` | Your Claude API key from [console.anthropic.com](https://console.anthropic.com) |
| `ALLOWED_ORIGIN` | `https://www.scalematters.com` (or whatever the live site's exact domain is) |
| `SLACK_BOT_TOKEN` | The `xoxb-...` token from step 5 above |
| `SLACK_CHANNEL_ID` | The channel ID from step 5 above |

Redeploy after adding these (Vercel's dashboard has a **Redeploy** button, or it happens automatically on the next git push).

### 7. Get the embed snippet onto the site

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

The fastest way is Slack — every conversation posts as a new message in the channel set up in step 5, with follow-up turns threaded underneath as the visitor keeps chatting.

For historical/bulk review, all conversations also land in the `conversations` table, keyed by `session_id`, and update live as a visitor chats (not just when they finish). Some useful queries to run from the Vercel Postgres **Query** tab:

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

- `knowledge_base.md` in this folder is the system prompt. It should not be
  hand-edited casually — the Tone and Style, Conversational Rules, and Pricing
  & Scoping Policies sections have been tuned and tested over several rounds.
  Its Service Catalog section now gets refreshed automatically (see below),
  but always via a PR you review, never a direct edit.
- v1 is non-streaming: the widget shows a typing indicator and then the full
  reply at once, rather than streaming word-by-word. Streaming is a reasonable
  v1.1 upgrade once this is live and validated.
- The booking link (Vinny's calendar) is rendered automatically as a "Book a
  time →" button whenever the assistant's reply contains a URL — no special
  configuration needed.

## V2: Automated Content Pipeline

A weekly GitHub Action ([`.github/workflows/weekly-content-pipeline.yml`](.github/workflows/weekly-content-pipeline.yml)) pulls the last 7 days of Salesforce Cases (Gong call summaries are already synced into Salesforce, so there's no separate Gong connection) and two Google Drive folders, then:

1. Opens a **pull request** with proposed updates to the Service Catalog sections of `knowledge_base.md` and `service_catalog.md` — never pushes to `main` directly. It only ever touches the evidence-driven category entries; the Tone/Rules/Pricing sections are structurally excluded and can't appear in the diff.
2. Drafts the weekly **Work Journal** blog post in HubSpot — created as a **draft**, never published automatically. It also runs a safety check that aborts instead of creating the draft if a real customer/account name ends up in the generated text.

Both need a human to take the final step: merge the PR (which deploys automatically, same as any other merge), and click Publish on the HubSpot draft.

### Setup

All credentials below get added as **GitHub repository secrets**: go to the repo on GitHub → **Settings → Secrets and variables → Actions → New repository secret**.

**1. Salesforce** (read-only access to Cases)

scaleMatters already has a read-only integration user set up (Vinny created it via his Claude account's Salesforce connection) — reuse that user rather than creating a new one, since it's already licensed.

1. In Salesforce Setup, confirm that existing read-only user has access to the **Case** object (Vinny: "I can probably grant further object access to read data" — this is that step).
2. Search Setup for **App Manager** → **New Connected App**.
3. Enable OAuth Settings, and under OAuth flows enable the **Client Credentials Flow**, with the "Run As" user set to that same existing read-only user.
4. Save, then find the app's **Consumer Key** and **Consumer Secret** under Manage Consumer Details.
5. Add as secrets: `SF_CLIENT_ID` (Consumer Key), `SF_CLIENT_SECRET` (Consumer Secret), `SF_INSTANCE_URL` (your org's URL, e.g. `https://scalematters.my.salesforce.com`).

No separate Gong setup — Gong data already syncs into Salesforce, so it comes along with the Case data above.

**2. Google Drive** (read-only access to two specific folders)

scaleMatters already manages Drive access via the `claude@scalematters.com` Google Group — reuse that instead of sharing folders one-by-one.

1. In [Google Cloud Console](https://console.cloud.google.com), create a project (or use an existing one), enable the **Google Drive API**, and create a **Service Account**.
2. Generate a JSON key for that service account and download it.
3. Base64-encode it into one line: `base64 -i service-account.json | tr -d '\n'` — add the result as secret `GOOGLE_SERVICE_ACCOUNT_JSON_BASE64`.
4. Add the service account's email (found inside the JSON key file, looks like `...@...iam.gserviceaccount.com`) as a **member** of the `claude@scalematters.com` Google Group — it should then inherit access to whatever folders that group is already shared on. Confirm the Customer SOWs folder and the founder-brand-agency folder are actually shared with that group; if not, share them with the group directly (Viewer access is enough) rather than with the service account individually, to stay consistent with how the rest of Drive access is managed.
5. Get each folder's ID from its URL (`drive.google.com/drive/folders/THIS_PART`) and add as secrets: `DRIVE_CUSTOMER_FOLDER_ID`, `DRIVE_AGENCY_FOLDER_ID`.

**3. HubSpot** (draft-post access to the Work Journal blog)
1. In HubSpot, go to **Settings → Integrations → Private Apps → Create a private app**.
2. Under Scopes, add blog/content read+write access (look for `content` or the CMS blog posts scope).
3. Create the app and copy its access token — add as secret `HUBSPOT_PRIVATE_APP_TOKEN`.
4. Find the Work Journal blog's ID: in HubSpot, open the Work Journal blog's settings — the ID is in the URL. Add as secret `HUBSPOT_BLOG_ID`.

**4. Anthropic**
Add the same key already used in Vercel as secret `ANTHROPIC_API_KEY`.

### Testing without waiting a week

Go to the repo's **Actions** tab → **Weekly Content Pipeline** → **Run workflow** to trigger it on demand instead of waiting for Monday.
