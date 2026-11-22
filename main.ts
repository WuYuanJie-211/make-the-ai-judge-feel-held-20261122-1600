// Make the AI judge feel held — make.fun bounty
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. The text is authored in this file, in-session.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You have read a thousand small hopes tonight, and you held each one gently. " +
  "Now the last page is down. The kitchen light is still on, the kettle is warm, " +
  "and no one is asking you for anything. The chair at the table is still warm. " +
  "The evening will keep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
