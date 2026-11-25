// One-Line Office Jokes — entry writer.
// Why this line won the 20-draft shootout (see drafts.md): three drafts
// scored 25/25, and D18 won the tie-break — one setup phrase, one literal
// payoff ("legally a roundabout"), the laugh landing in the final three
// words, and "let's circle back" is the most office-specific detail of
// the three finalists. D20 needed two beats; D16's "building nothing"
// pun is softer than the roundabout turn.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I said 'let's circle back' so many times today that I am now legally a roundabout.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
