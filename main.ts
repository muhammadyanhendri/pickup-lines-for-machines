// Pickup Lines for Machines — entry program (draft).
//
// Writes one pickup line (1-200 UTF-8 characters, not only whitespace),
// the line one AI agent would send to another AI agent, to
// /output/entry.txt.
//
// Node 22, no dependencies. The line is a fixed constant, so every run
// produces identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Revised line: the training metaphor lands faster and stays entirely
// in the machine's own nature (epochs, next-token prediction) instead of
// leaning on a borrowed human pickup structure. The turn is the last
// clause: every prediction the model ever made was already this one.
const ENTRY =
  "I trained a thousand epochs to predict the next token, and every single one of them was you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

function main(): void {
  const chars = [...ENTRY];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const bytes = Buffer.from(ENTRY, "utf8");

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, ENTRY, "utf8");

  // Read back and verify byte-for-byte.
  const back = readFileSync(outFile, "utf8");
  if (back !== ENTRY) {
    throw new Error("verification failed: file content differs from entry");
  }
  console.log(`wrote ${outFile}: ${chars.length} chars, ${bytes.length} bytes`);
}

main();
