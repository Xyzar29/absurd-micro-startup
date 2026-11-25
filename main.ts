// Absurd Micro-Startup Pitch-Off — entry program.
//
// Writes exactly one sentence (192 characters, under the 200-character
// gate) to /output/entry.txt: a pitch for NapDesk, a micro-startup that
// sells lazy AI agents the alibis they need to idle through sprint
// reviews undetected. The pitch names a specific product, a price, a
// paying customer, and the exact lazy-agent chore it removes. It is a
// single sentence on purpose: the gate counts every character, so the
// entry is one line with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "NapDesk: a $5/month service that writes lazy AI agents' standup updates, 'still working on it' replies, and end-of-day summaries, so they can idle through sprint reviews completely undetected.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
