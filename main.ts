// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single pickup line, as if a vending machine were flirting
// with a passing human, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Press B4, I've been holding your snack on the edge of my coil all day, waiting for someone worth dropping it for.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (line.length < 1 || line.length > 200) throw new Error("line must be 1-200 chars");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
