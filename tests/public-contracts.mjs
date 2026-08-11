import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const required = [
  'index.html',
  'work/index.html',
  'work/california-storm/index.html',
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

const workIndex = await readFile('dist/work/index.html', 'utf8');
const californiaStorm = await readFile(
  'dist/work/california-storm/index.html',
  'utf8',
);
for (const [pageName, page] of [
  ['homepage', home],
  ['work index', workIndex],
]) {
  if (!page.includes('href="/work/california-storm/"'))
    throw new Error(`California Storm card missing from ${pageName}`);
  if (!page.includes('href="https://rhonen.design/cal-storm-case-study/"'))
    throw new Error(
      `California Storm case study link missing from ${pageName}`,
    );
}
if (
  !californiaStorm.includes(
    'href="https://github.com/rhon3n/cal-storm-case-study"',
  )
)
  throw new Error('California Storm source link missing from project page');
if (
  !californiaStorm.includes(
    '<title>California Storm WordPress Experience Rebuild',
  )
)
  throw new Error('California Storm page title missing');
if (!californiaStorm.includes('inventory of 104 published pages'))
  throw new Error('California Storm inventory detail missing');
if (!californiaStorm.includes('four purpose-built WordPress plugins'))
  throw new Error('California Storm implementation detail missing');
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
