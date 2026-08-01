// Reads recently-closed Cases via Salesforce's OAuth 2.0 Client Credentials flow.
// Requires a Connected App configured for Client Credentials with a read-only
// "Run As" integration user — see README for setup steps.
//
// The exact field names below (Type, Account.Name) are a reasonable default;
// scaleMatters' org may use custom fields (e.g. a Category__c picklist) for
// how Cases get classified. Adjust the SOQL in getRecentClosedCases() to match
// the org's actual schema once this is wired up against production data.

async function getAccessToken() {
  const instanceUrl = process.env.SF_INSTANCE_URL;
  const clientId = process.env.SF_CLIENT_ID;
  const clientSecret = process.env.SF_CLIENT_SECRET;

  const res = await fetch(`${instanceUrl}/services/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!res.ok) {
    throw new Error(`Salesforce auth failed: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  return { accessToken: data.access_token, instanceUrl: data.instance_url };
}

async function getRecentClosedCases({ sinceDays = 7 } = {}) {
  const { accessToken, instanceUrl } = await getAccessToken();

  const soql = `
    SELECT Id, CaseNumber, Subject, Description, Status, Type, ClosedDate,
           Account.Name
    FROM Case
    WHERE IsClosed = true
    AND ClosedDate = LAST_N_DAYS:${sinceDays}
    ORDER BY ClosedDate DESC
    LIMIT 500
  `.trim();

  const res = await fetch(
    `${instanceUrl}/services/data/v60.0/query?q=${encodeURIComponent(soql)}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  if (!res.ok) {
    throw new Error(`Salesforce query failed: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  return data.records.map((r) => ({
    caseNumber: r.CaseNumber,
    subject: r.Subject,
    description: r.Description,
    status: r.Status,
    type: r.Type,
    closedDate: r.ClosedDate,
    accountName: r.Account?.Name || null,
  }));
}

module.exports = { getRecentClosedCases };
