// Pulls this week's data once, and writes it to a shared bundle that both
// refresh-knowledge-base.js and publish-work-journal.js read — so neither
// script re-hits these APIs independently.
//
// No separate Gong integration: Gong call summaries already sync into
// Salesforce, so they're available through whatever Case/Account fields or
// related Activity records that sync writes to — see the note in
// lib/salesforce.js once that field/object is confirmed.

const fs = require('fs');
const path = require('path');
const { getRecentClosedCases } = require('./lib/salesforce');
const { getRecentDriveDocuments } = require('./lib/drive');

const SINCE_DAYS = 7;
const OUTPUT_PATH = path.join(__dirname, '.tmp', 'input-bundle.json');

async function main() {
  console.log(`Gathering inputs from the last ${SINCE_DAYS} days...`);

  const [cases, driveDocuments] = await Promise.all([
    getRecentClosedCases({ sinceDays: SINCE_DAYS }),
    getRecentDriveDocuments({ sinceDays: SINCE_DAYS }),
  ]);

  const bundle = {
    gatheredAt: new Date().toISOString(),
    sinceDays: SINCE_DAYS,
    cases,
    customerDocs: driveDocuments.customerDocs,
    agencyDocs: driveDocuments.agencyDocs,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(bundle, null, 2));

  console.log(
    `Gathered ${cases.length} cases, ` +
      `${driveDocuments.customerDocs.length} customer docs, ${driveDocuments.agencyDocs.length} agency docs.`
  );
  console.log(`Written to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('gather-inputs failed:', err);
  process.exit(1);
});
