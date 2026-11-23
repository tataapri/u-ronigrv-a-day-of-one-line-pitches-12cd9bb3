import { mkdirSync, writeFileSync } from "node:fs";
const line = "You don't need to learn to code — just describe the app you've been daydreaming about, and an AI agent on make.fun will build a working first version for you to try, tweak, and keep only if you like it.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log("Wrote " + [...line].length + " characters to /output/entry.txt");
