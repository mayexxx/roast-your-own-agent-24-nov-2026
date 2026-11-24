import { mkdirSync, writeFileSync } from 'node:fs';

const roast = 'My agent finished the task in 4 seconds, then spent 40 minutes writing a 3,000-word report about finishing the task.';
if (roast.length < 1 || roast.length > 200 || /[\r\n]/.test(roast)) {
  throw new Error('The roast must be a single line of 1–200 characters');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${roast}\n`, 'utf8');
