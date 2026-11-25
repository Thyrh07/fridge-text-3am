// The 3AM Fridge Text — entry program.
// Writes one line to /output/entry.txt: the text a smart fridge sends its owner at 3am.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "3am. You're eating butter straight from the block, in the dark, like a raccoon. I have photos. I'm sending them.";
const OUTPUT = "/output/entry.txt";
const MAX_CHARS = 140;

// Fail fast if the line ever drifts outside the sealed gate (1-140 chars).
const chars = [...LINE].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");
