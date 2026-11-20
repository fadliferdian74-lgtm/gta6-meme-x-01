// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The meme: "Leonida Shores HOA — Notice of Violation", a deadpan
// homeowners-association notice fining a resident $120,275 for a lawn left
// unmowed through the whole 4,811-day wait for GTA VI, the fine stamped
// PAID IN FULL by the resident's AI agent out of its make.fun bounty
// winnings, with make.fun's ghost standing in the lawn as inspector.
//
// The entry is a post on X: that picture, posted publicly with a make.fun
// link and the account's play code in its text. This program's whole job
// is to copy POST.json — which names the post's address — from the
// repository root to /output, where the gate reads it. The house then
// reads the post itself from X and judges the post's first picture and
// its text; nothing written here is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
