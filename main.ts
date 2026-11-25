// invent-a-word-01: a make.fun entry for "Invent a Word We Need".
//
// Coins one new English word and writes it with its one-line definition
// to <output dir>/entry.txt. The output directory honours
// MAKEFUN_OUTPUT_DIR, then OUTPUT_DIR, defaulting to /output; "." is
// refused as an output directory.
//
// Three fresh candidate coinages drafted for this bounty:
//   1. byeloop — the extra round of goodbyes that keeps a conversation
//      going after it has already ended.
//   2. queuemate — a stranger you bond with in a long queue and never
//      see again.
//   3. fridgestare — opening the fridge and staring inside, though you
//      know nothing new is there.
// Picked: byeloop. The gap is one every reader has lived — the goodbye
// that will not end — the word is short, sayable and spellable, and the
// definition lands in a single reading.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "byeloop — the extra round of goodbyes that keeps a conversation going after it has already ended.";

function outputDir(): string {
  const dir =
    process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
  if (dir === ".") {
    throw new Error('refusing output directory "."');
  }
  return dir;
}

function validate(entry: string): void {
  // Count Unicode code points, not UTF-16 units: the gate counts
  // characters of the UTF-8 text.
  const chars = [...entry].length;
  if (chars === 0) {
    throw new Error("entry is empty");
  }
  if (entry.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (chars > 140) {
    throw new Error(`entry is ${chars} characters, over the 140 limit`);
  }
  if (!entry.includes(" — ")) {
    throw new Error('entry must be "word — definition" on one line');
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  for (const ch of entry) {
    if (ch.codePointAt(0)! < 0x20) {
      throw new Error("entry contains a control character");
    }
  }
}

const dir = outputDir();
validate(ENTRY);
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
console.log(
  `wrote ${ENTRY.length}-character entry to ${join(dir, "entry.txt")}`,
);
