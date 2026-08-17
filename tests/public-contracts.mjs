import { access, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
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
  'images/operations-to-software-desktop.avif',
  'images/operations-to-software-desktop.webp',
  'images/operations-to-software-desktop.jpg',
  'images/operations-to-software-mobile.avif',
  'images/operations-to-software-mobile.webp',
  'images/operations-to-software-mobile.jpg',
];

await Promise.all(required.map((path) => access(join('dist', path))));

const resume = await readFile('dist/files/resume.pdf');
const resumeHash = createHash('sha256').update(resume).digest('hex');
if (
  resumeHash !==
  '4b4f9b0bc447e0529bfa31c03082bc2fa12c1b2bdf6c577ae8b359472d816a20'
)
  throw new Error('Approved current resume artifact changed');

const pagePaths = required.filter((path) => path.endsWith('.html'));
const pages = await Promise.all(
  pagePaths.map((path) => readFile(join('dist', path), 'utf8')),
);

const scriptedRoutes = new Set([
  'work/index.html',
  'work/measure-coffee/index.html',
]);

for (const [index, page] of pages.entries()) {
  if (!page.includes('id="main-content"'))
    throw new Error(`Missing main landmark in ${pagePaths[index]}`);
  if (/script[^>]+_astro/i.test(page) && !scriptedRoutes.has(pagePaths[index]))
    throw new Error(
      `Unexpected client JavaScript bundle in ${pagePaths[index]}`,
    );
}

const home = await readFile('dist/index.html', 'utf8');
if (!home.includes('I build products people can actually operate.'))
  throw new Error('Homepage hero copy missing');
if (!home.includes('href="/work/"'))
  throw new Error('Homepage work route missing');
if (pages.some((page) => page.includes('Founder &amp; Founding Engineer')))
  throw new Error('Superseded Measure Coffee title is present');
if (!home.includes('Founding Engineer at measure.coffee'))
  throw new Error('Approved Measure Coffee title is missing');
if (!home.includes('twitter:title') || !home.includes('twitter:description'))
  throw new Error('Twitter metadata is incomplete');
if (!home.includes('<picture class="journey-visual-media">'))
  throw new Error(
    'Homepage journey visual is missing responsive picture markup',
  );
if (!home.includes('media="(max-width: 48rem)"'))
  throw new Error(
    'Homepage journey visual is missing its mobile art direction',
  );
if (!home.includes('width="1920" height="1080"'))
  throw new Error('Homepage journey visual lacks intrinsic desktop dimensions');
if (!home.includes('alt="" loading="lazy" decoding="async"'))
  throw new Error(
    'Homepage journey visual accessibility/loading contract failed',
  );
if (
  !/Field service, operations, and software are parts of the same working\s+system\./.test(
    home,
  )
)
  throw new Error('Homepage journey visual caption is missing');

const experience = await readFile('dist/experience/index.html', 'utf8');
if (!experience.includes('<h2>Founding Engineer</h2>'))
  throw new Error('Experience timeline heading hierarchy is incorrect');

const workIndex = await readFile('dist/work/index.html', 'utf8');
const measureCoffee = await readFile(
  'dist/work/measure-coffee/index.html',
  'utf8',
);
const californiaStorm = await readFile(
  'dist/work/california-storm/index.html',
  'utf8',
);
if (!workIndex.includes('Public GitHub contribution statistics'))
  throw new Error('Public GitHub ticker is missing from the work index');
if (!workIndex.includes('UPDATED 16 AUG 2026'))
  throw new Error('Public GitHub ticker snapshot date is missing');
if (!measureCoffee.includes('Measure private repository statistics'))
  throw new Error('Private Measure ticker is missing from its work page');
if (!measureCoffee.includes('Owner-authored commits only'))
  throw new Error('Private Measure ticker provenance is missing');
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
  californiaStorm.includes(
    'href="https://github.com/rhon3n/cal-storm-case-study"',
  )
)
  throw new Error('California Storm source link should not be published');
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
if (!californiaStorm.includes('<span>2026</span>'))
  throw new Error('California Storm publication year is incorrect');
if (!californiaStorm.includes('target="_blank" rel="noopener noreferrer"'))
  throw new Error('External project links must open safely in a new tab');
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
