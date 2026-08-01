// Commits file changes to a new branch and opens a PR, using the GitHub REST
// API directly (no octokit dependency). In GitHub Actions, GITHUB_TOKEN and
// GITHUB_REPOSITORY are provided automatically by the runner.

const API_BASE = 'https://api.github.com';

function getRepo() {
  const repo = process.env.GITHUB_REPOSITORY; // "owner/repo"
  if (!repo) throw new Error('GITHUB_REPOSITORY not set');
  const [owner, name] = repo.split('/');
  return { owner, name };
}

function authHeaders() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  };
}

async function ghFetch(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers: authHeaders() });
  if (!res.ok) {
    throw new Error(`GitHub API ${path} failed: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

async function createBranchWithFileUpdates({ branchName, baseBranch = 'main', files, commitMessage }) {
  const { owner, name } = getRepo();

  const baseRef = await ghFetch(`/repos/${owner}/${name}/git/ref/heads/${baseBranch}`);
  const baseSha = baseRef.object.sha;

  await ghFetch(`/repos/${owner}/${name}/git/refs`, {
    method: 'POST',
    body: JSON.stringify({ ref: `refs/heads/${branchName}`, sha: baseSha }),
  });

  for (const file of files) {
    let existingSha;
    try {
      const existing = await ghFetch(
        `/repos/${owner}/${name}/contents/${encodeURIComponent(file.path)}?ref=${branchName}`
      );
      existingSha = existing.sha;
    } catch {
      existingSha = undefined; // file doesn't exist yet on this branch
    }

    await ghFetch(`/repos/${owner}/${name}/contents/${encodeURIComponent(file.path)}`, {
      method: 'PUT',
      body: JSON.stringify({
        message: commitMessage,
        content: Buffer.from(file.content, 'utf-8').toString('base64'),
        branch: branchName,
        sha: existingSha,
      }),
    });
  }
}

async function openPullRequest({ branchName, baseBranch = 'main', title, body }) {
  const { owner, name } = getRepo();
  const pr = await ghFetch(`/repos/${owner}/${name}/pulls`, {
    method: 'POST',
    body: JSON.stringify({ title, body, head: branchName, base: baseBranch }),
  });
  return pr.html_url;
}

module.exports = { createBranchWithFileUpdates, openPullRequest };
