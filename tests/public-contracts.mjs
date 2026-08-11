import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const required = [
  'index.html',
  'work/index.html',
  'work/measure-coffee/index.html',
  'work/shader-studio/index.html',
  'experience/index.html',
  'about/index.html',
  'contact/index.html',
  '404.html',
  'favicon.svg',
  'files/resume.pdf',
];

await Promise.all(required.map((path) => access(join('dist', path))));

const pages = await Promise.all(
  required
    .filter((path) => path.endsWith('.html'))
    .map((path) => readFile(join('dist', path), 'utf8')),
);

for (const [index, page] of pages.entries()) {
  if (!page.includes('id="main-content"'))
    throw new Error(`Missing main landmark in ${required[index]}`);
  if (/script[^>]+_astro/i.test(page))
    throw new Error(
      `Unexpected client JavaScript bundle in ${required[index]}`,
    );
}

const home = await readFile('dist/index.html', 'utf8');
if (!home.includes('I build products people can actually operate.'))
  throw new Error('Homepage hero copy missing');
if (!home.includes('href="/work/"'))
  throw new Error('Homepage work route missing');
const internalLinks = new Set(
  pages.flatMap((page) =>
    [...page.matchAll(/href="(\/[^"]*)"/g)].map(
      (match) => match[1].split(/[?#]/)[0],
    ),
  ),
);

for (const href of internalLinks) {
  if (href === '/') continue;
  const target = href.endsWith('/')
    ? join('dist', href, 'index.html')
    : join('dist', href);
  await access(target);
}

console.log(
  `public contracts: ${required.length} assets, ${pages.length} pages, and ${internalLinks.size} internal links verified`,
);
