// Pulls this week's data from all four sources once, and writes it to a
// shared bundle that both refresh-knowledge-base.js and
// publish-work-journal.js read — so neither script re-hits these APIs
// independently.

const fs = require('fs');
const path = require('path');
const { getRecentClosedCases } = require('./lib/salesforce');
const { getRecentCallSummaries } = require('./lib/gong');
const { getRecentDriveDocuments } = require('./lib/drive');

const SINCE_DAYS = 7;
const OUTPUT_PATH = path.join(__dirname, '.tmp', 'input-bundle.json');

async function main() {
  console.log(`Gathering inputs from the last ${SINCE_DAYS} days...`);

  const [cases, callSummaries, driveDocuments] = await Promise.all([
    getRecentClosedCases({ sinceDays: SINCE_DAYS }),
    getRecentCallSummaries({ sinceDays: SINCE_DAYS }),
    getRecentDriveDocuments({ sinceDays: SINCE_DAYS }),
  ]);

  const bundle = {
    gatheredAt: new Date().toISOString(),
    sinceDays: SINCE_DAYS,
    cases,
    callSummaries,
    customerDocs: driveDocuments.customerDocs,
    agencyDocs: driveDocuments.agencyDocs,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(bundle, null, 2));

  console.log(
    `Gathered ${cases.length} cases, ${callSummaries.length} call summaries, ` +
      `${driveDocuments.customerDocs.length} customer docs, ${driveDocuments.agencyDocs.length} agency docs.`
  );
  console.log(`Written to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('gather-inputs failed:', err);
  process.exit(1);
});
