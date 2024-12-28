import { globSync, readFileSync, writeFileSync } from 'node:fs';
import pkg from '../package.json' with { type: 'json' };

const match = pkg.version.match(/^(\d+)\.(\d+)\.(\d+)$/);
if (!match) throw new Error('Expected x.y.z version format.');

const [, major, minor] = match;
const version = major === '0' ? `0.${minor}` : major;

const pattern = new RegExp(`(?<=${pkg.name}@)[\\d.]+`, 'g');

for (const path of globSync('**/*.md')) {
	writeFileSync(
		path, //
		readFileSync(path, { encoding: 'utf8' }) //
			.replace(pattern, version),
	);
}
