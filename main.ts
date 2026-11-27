// Funniest Autocorrect Fail — make.fun one-liner entry.
//
// A text to Mom about therapy, ruined by the most unfortunate word-split
// autocorrect can produce: "therapist" becomes "the rapist", and the
// frantic all-caps correction only makes it read worse. It is a single
// line, under 200 characters, and reads exactly like a real autocorrect
// slip: the wrong word is specific, surprising, and instantly clear on
// first read, with the panicked correction doing the second half of the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Mom, my rapist says I'm doing really well and I should call you more \u2014 I mean my THERAPIST. THERAPIST!!";

// The gate requires 1–199 characters, a single line, and nothing else:
// no trailing newline in the file, so the text is written exactly as-is.

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
