// Refreshes only the evidence-driven sections of knowledge_base.md and
// service_catalog.md — never the behavioral/tone sections — using the last
// 7 days of closed Cases (which already include synced Gong call context)
// and Drive documents. Opens a PR instead of touching main directly; a
// human reviews and merges it.

const fs = require('fs');
const path = require('path');
const { extractSection, spliceSection } = require('./lib/sections');
const { synthesize } = require('./lib/anthropic');
const { createBranchWithFileUpdates, openPullRequest } = require('./lib/github-pr');

// WIDGET_ROOT is the repo root — service_catalog.md is a git-tracked copy
// kept here specifically so this automation has somewhere to open a PR
// against. The parent scaleMatters/ folder deliberately isn't a git repo
// (it holds confidential raw source material out of this project's scope),
// so the automation can never touch anything there.
const WIDGET_ROOT = path.join(__dirname, '..');
const KB_PATH = path.join(WIDGET_ROOT, 'knowledge_base.md');
const CATALOG_PATH = path.join(WIDGET_ROOT, 'service_catalog.md');
const BUNDLE_PATH = path.join(__dirname, '.tmp', 'input-bundle.json');

const SYSTEM_PROMPT = `You keep scaleMatters' AI chat widget's Service Catalog accurate and current.

You'll be given the CURRENT content of a Service Catalog section, plus FRESH
evidence from the last 7 days: newly closed support cases (which include
synced Gong call context where relevant) and internal documents. Produce an
UPDATED version of that section that:

- Preserves the exact existing structure for each entry (category_key,
  ticket_volume, keywords, common_triggers, sample_user_phrases,
  typical_process, escalation_note where present).
- Increments ticket_volume by the count of fresh cases that clearly belong
  to each existing category, based on subject/description matching.
- Enriches keywords and sample_user_phrases with new, real phrasing drawn
  from the fresh evidence, only when it adds genuine variety.
- Refines a typical_process description only if the fresh evidence reveals
  something meaningfully different about how the work is actually
  delivered — never invent a capability or change a scope claim.
- Adds a new category only if the evidence shows a clearly recurring
  pattern that doesn't fit any existing one. If you do, end your response
  with a line starting "NEW CATEGORY ADDED:" explaining why, so a human
  reviewer can evaluate it specifically.
- Never fabricates a specific dollar figure, capability, or client outcome
  that isn't grounded in the evidence provided.

Return ONLY the updated section in the same markdown format you were given
— no preamble, no commentary outside an optional trailing "NEW CATEGORY
ADDED:" note.`;

function summarizeBundle(bundle) {
  const caseLines = bundle.cases
    .map((c) => `- [${c.type || 'Case'}] ${c.subject}: ${c.description || '(no description)'}`)
    .join('\n');

  const agencyDocLines = bundle.agencyDocs
    .map((d) => `- ${d.name}${d.content ? `: ${d.content.slice(0, 2000)}` : ' (metadata only)'}`)
    .join('\n');

  const customerDocLines = bundle.customerDocs
    .map((d) => `- ${d.name}${d.content ? `: ${d.content.slice(0, 2000)}` : ' (metadata only)'}`)
    .join('\n');

  return [
    `## Newly closed cases (${bundle.cases.length})`,
    caseLines || '(none)',
    `\n## New/updated customer scoping documents (${bundle.customerDocs.length})`,
    customerDocLines || '(none)',
    `\n## New/updated founder-agency documents (${bundle.agencyDocs.length})`,
    agencyDocLines || '(none)',
  ].join('\n');
}

async function refreshSection({ filePath, startHeading, endHeading, evidenceText }) {
  const original = fs.readFileSync(filePath, 'utf-8');
  const { before, section, after } = extractSection(original, { startHeading, endHeading });

  const updatedSection = await synthesize({
    system: SYSTEM_PROMPT,
    prompt: `CURRENT SECTION:\n\n${section}\n\n---\n\nFRESH EVIDENCE (last 7 days):\n\n${evidenceText}`,
    maxTokens: 16000,
  });

  const newFileContent = spliceSection({ before, updatedSection, after });
  return { newFileContent, changed: newFileContent !== original };
}

async function main() {
  const bundle = JSON.parse(fs.readFileSync(BUNDLE_PATH, 'utf-8'));

  if (bundle.cases.length === 0) {
    console.log('No fresh closed cases this period — skipping knowledge base refresh.');
    return;
  }

  const evidenceText = summarizeBundle(bundle);

  const kbResult = await refreshSection({
    filePath: KB_PATH,
    startHeading: '## Knowledge Base: Service Catalog & Evidence',
    endHeading: null,
    evidenceText,
  });

  const catalogResult = await refreshSection({
    filePath: CATALOG_PATH,
    startHeading: '## Salesforce (SFDC)',
    endHeading: '## Side-by-Side Competitor Comparison',
    evidenceText,
  });

  if (!kbResult.changed && !catalogResult.changed) {
    console.log('Synthesis produced no material changes — skipping PR.');
    return;
  }

  const branchName = `kb-refresh-${new Date().toISOString().slice(0, 10)}`;
  const files = [];
  if (kbResult.changed) {
    files.push({ path: 'knowledge_base.md', content: kbResult.newFileContent });
  }
  if (catalogResult.changed) {
    files.push({ path: 'service_catalog.md', content: catalogResult.newFileContent });
  }

  await createBranchWithFileUpdates({
    branchName,
    files,
    commitMessage: `Weekly knowledge base refresh (${bundle.gatheredAt.slice(0, 10)})`,
  });

  const prUrl = await openPullRequest({
    branchName,
    title: `Weekly knowledge base refresh — ${bundle.gatheredAt.slice(0, 10)}`,
    body: [
      `Automated refresh based on the last ${bundle.sinceDays} days of activity:`,
      `- ${bundle.cases.length} closed cases`,
      `- ${bundle.customerDocs.length} customer documents`,
      `- ${bundle.agencyDocs.length} founder-agency documents`,
      '',
      'This PR only touches the evidence-driven Service Catalog sections — the',
      'Tone and Style, Conversational Rules, Pricing & Scoping Policies, and',
      'Role and Purpose sections of knowledge_base.md are never sent to the',
      'model and cannot appear in this diff.',
      '',
      'Please review before merging — merging deploys automatically.',
    ].join('\n'),
  });

  console.log(`Opened PR: ${prUrl}`);
}

main().catch((err) => {
  console.error('refresh-knowledge-base failed:', err);
  process.exit(1);
});
