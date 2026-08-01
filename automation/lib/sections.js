// Extracts and splices back a bounded range of a markdown file by heading
// text, so the automation can only ever touch a specific section — never
// the surrounding content — regardless of what a prompt asks the model to do.

function findHeadingLine(lines, headingText, fromIndex = 0) {
  for (let i = fromIndex; i < lines.length; i++) {
    if (lines[i].trim() === headingText) return i;
  }
  return -1;
}

// startHeading is inclusive; endHeading (if given) is exclusive — the
// returned section runs up to, but not including, the endHeading line.
// If endHeading is omitted or not found, the section runs to end of file.
function extractSection(content, { startHeading, endHeading }) {
  const lines = content.split('\n');
  const startIndex = findHeadingLine(lines, startHeading);
  if (startIndex === -1) {
    throw new Error(`Heading not found: "${startHeading}"`);
  }

  let endIndex = lines.length;
  if (endHeading) {
    const found = findHeadingLine(lines, endHeading, startIndex + 1);
    if (found !== -1) endIndex = found;
  }

  return {
    before: lines.slice(0, startIndex).join('\n'),
    section: lines.slice(startIndex, endIndex).join('\n'),
    after: lines.slice(endIndex).join('\n'),
  };
}

function spliceSection({ before, updatedSection, after }) {
  const parts = [before, updatedSection, after].filter((p) => p.length > 0);
  return parts.join('\n');
}

module.exports = { extractSection, spliceSection };
