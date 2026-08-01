// Drafts the weekly "Work Journal" post from the same evidence bundle
// gather-inputs.js produced, and creates it in HubSpot as a DRAFT — never
// published automatically. Includes a safety check that aborts rather than
// creating the draft if a real customer/account name leaked into the text.

const fs = require('fs');
const path = require('path');
const { synthesize } = require('./lib/anthropic');

const WIDGET_ROOT = path.join(__dirname, '..');
const KB_PATH = path.join(WIDGET_ROOT, 'knowledge_base.md');
const BUNDLE_PATH = path.join(__dirname, '.tmp', 'input-bundle.json');
const BODY_DELIMITER = '---BODY---';

function extractStyleReference(kbContent) {
  const lines = kbContent.split('\n');
  const startIndex = lines.findIndex((l) => l.trim() === '## Role and Purpose');
  const endIndex = lines.findIndex((l) => l.trim() === '## Conversational Rules');
  if (startIndex === -1 || endIndex === -1) return '';
  return lines.slice(startIndex, endIndex).join('\n');
}

function buildSystemPrompt(styleReference) {
  return `You write the "Work Journal" — a weekly blog post on scaleMatters' own
site recapping the top solutions the team delivered for clients that week.

Use this excerpt from scaleMatters' own brand voice guide to match tone —
consultative, concrete, evidence-based, never jargon-heavy:

${styleReference}

Rules for this post specifically:
- Pick the 3 to 10 most interesting/substantive solutions from the fresh
  evidence you're given. Quality over quantity — if only 3 are genuinely
  interesting, write 3, don't pad to hit a higher number.
- NEVER mention a customer name, company name, or any detail specific
  enough to identify a client (industry + company size + unique problem
  combined can be identifying — soften if needed). Describe the problem
  and the solution, not who it was for.
- Write in scaleMatters' voice: consultative, concrete, no fluff.
- Each solution gets a short heading and 2-4 sentences — this is a scan-able
  weekly recap, not a case study.

Respond in exactly this format:

TITLE: <the post title>
${BODY_DELIMITER}
<the full post body as HTML, using <h2> for each solution's heading and
<p> for paragraphs — no other tags, no markdown>`;
}

function parseResponse(raw) {
  const titleMatch = raw.match(/^TITLE:\s*(.+)$/m);
  const bodyIndex = raw.indexOf(BODY_DELIMITER);
  if (!titleMatch || bodyIndex === -1) {
    throw new Error('Model response did not match the expected TITLE/BODY format');
  }
  return {
    title: titleMatch[1].trim(),
    htmlBody: raw.slice(bodyIndex + BODY_DELIMITER.length).trim(),
  };
}

// Structured, reliable check against real Salesforce Account names. Names
// mentioned only inside Drive doc content aren't covered here — extending
// this to flag those too is a reasonable future improvement.
function findLeakedNames({ title, htmlBody }, bundle) {
  const text = `${title}\n${htmlBody}`.toLowerCase();
  const accountNames = bundle.cases.map((c) => c.accountName).filter(Boolean);
  return accountNames.filter((name) => text.includes(name.toLowerCase()));
}

async function createHubSpotDraft({ title, htmlBody }) {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  const blogId = process.env.HUBSPOT_BLOG_ID;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const res = await fetch('https://api.hubapi.com/cms/v3/blogs/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: title,
      contentGroupId: blogId,
      slug,
      postBody: htmlBody,
      state: 'DRAFT',
    }),
  });

  if (!res.ok) {
    throw new Error(`HubSpot draft creation failed: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  return data.id;
}

async function main() {
  const bundle = JSON.parse(fs.readFileSync(BUNDLE_PATH, 'utf-8'));

  if (bundle.cases.length === 0 && bundle.callSummaries.length === 0) {
    console.log('No fresh activity this period — skipping Work Journal post.');
    return;
  }

  const kbContent = fs.readFileSync(KB_PATH, 'utf-8');
  const styleReference = extractStyleReference(kbContent);

  const evidenceText = JSON.stringify(
    {
      cases: bundle.cases,
      callSummaries: bundle.callSummaries,
      agencyDocs: bundle.agencyDocs,
    },
    null,
    2
  );

  const raw = await synthesize({
    system: buildSystemPrompt(styleReference),
    prompt: `FRESH EVIDENCE (last ${bundle.sinceDays} days):\n\n${evidenceText}`,
    maxTokens: 4000,
  });

  const parsed = parseResponse(raw);

  const leakedNames = findLeakedNames(parsed, bundle);
  if (leakedNames.length > 0) {
    console.error(
      `Aborting: draft appears to mention real account name(s): ${leakedNames.join(', ')}`
    );
    process.exit(1);
  }

  const postId = await createHubSpotDraft(parsed);
  console.log(`Created Work Journal draft "${parsed.title}" (HubSpot post ID: ${postId})`);
}

main().catch((err) => {
  console.error('publish-work-journal failed:', err);
  process.exit(1);
});
