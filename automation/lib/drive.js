// Reads new/changed documents from two Google Drive folders using a service
// account: the Customer folder (SOWs/scoping docs) and the founder-brand
// agency folder (recordings/transcripts). Both folders must be explicitly
// shared with the service account's email address (Viewer access) — no
// domain-wide delegation required.
//
// Google Docs get their text exported directly. Other file types (PDFs,
// audio files, etc.) are returned as metadata only for now — full-text
// extraction for those is a reasonable future improvement, not implemented
// here to keep this first version simple.

const { google } = require('googleapis');

function getAuth() {
  const credsJson = Buffer.from(
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64,
    'base64'
  ).toString('utf-8');
  const credentials = JSON.parse(credsJson);

  return new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });
}

async function getRecentFilesFromFolder({ drive, folderId, sinceDays }) {
  const sinceIso = new Date(Date.now() - sinceDays * 24 * 60 * 60 * 1000).toISOString();

  const { data } = await drive.files.list({
    q: `'${folderId}' in parents and modifiedTime > '${sinceIso}' and trashed = false`,
    fields: 'files(id, name, mimeType, modifiedTime)',
    pageSize: 100,
  });

  const files = data.files || [];
  const results = [];

  for (const file of files) {
    if (file.mimeType === 'application/vnd.google-apps.document') {
      const exported = await drive.files.export(
        { fileId: file.id, mimeType: 'text/plain' },
        { responseType: 'text' }
      );
      results.push({
        name: file.name,
        modifiedTime: file.modifiedTime,
        type: 'text',
        content: exported.data,
      });
    } else {
      results.push({
        name: file.name,
        modifiedTime: file.modifiedTime,
        type: 'metadata-only',
        mimeType: file.mimeType,
      });
    }
  }

  return results;
}

async function getRecentDriveDocuments({ sinceDays = 7 } = {}) {
  const auth = getAuth();
  const drive = google.drive({ version: 'v3', auth });

  const [customerDocs, agencyDocs] = await Promise.all([
    getRecentFilesFromFolder({
      drive,
      folderId: process.env.DRIVE_CUSTOMER_FOLDER_ID,
      sinceDays,
    }),
    getRecentFilesFromFolder({
      drive,
      folderId: process.env.DRIVE_AGENCY_FOLDER_ID,
      sinceDays,
    }),
  ]);

  return { customerDocs, agencyDocs };
}

module.exports = { getRecentDriveDocuments };
