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

// Splits a section further into sub-chunks at lines matching headingRegex, so
// each chunk can be sent to the model (and checked for truncation) on its
// own instead of as one oversized request. Content before the first matching
// heading is returned separately as preambleLines and is never sent to the
// model or treated as a chunk.
function splitIntoChunks(sectionText, headingRegex) {
  const lines = sectionText.split('\n');
  const headingIndexes = [];
  for (let i = 0; i < lines.length; i++) {
    if (headingRegex.test(lines[i])) headingIndexes.push(i);
  }

  if (headingIndexes.length === 0) {
    return { preambleLines: lines, chunks: [] };
  }

  const preambleLines = lines.slice(0, headingIndexes[0]);
  const chunks = headingIndexes.map((startIdx, i) => {
    const endIdx = i + 1 < headingIndexes.length ? headingIndexes[i + 1] : lines.length;
    return lines.slice(startIdx, endIdx).join('\n');
  });

  return { preambleLines, chunks };
}

// Inverse of splitIntoChunks: reassembles a section from its (possibly
// updated) chunk strings plus the untouched preamble, preserving exact
// original spacing.
function joinChunks({ preambleLines, chunks }) {
  const parts = preambleLines.length > 0 ? [preambleLines.join('\n'), ...chunks] : [...chunks];
  return parts.join('\n');
}

module.exports = { extractSection, spliceSection, splitIntoChunks, joinChunks };
