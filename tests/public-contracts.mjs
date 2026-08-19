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
  'images/projects/shader-studio-mobile-portrait.png',
  'images/projects/measure-coffee-mobile-portrait.png',
  'images/projects/california-storm-mobile-portrait.png',
];

await Promise.all(required.map((path) => access(join('dist', path))));

const resume = await readFile('dist/files/resume.pdf');
const resumeHash = createHash('sha256').update(resume).digest('hex');
if (
  resumeHash !==
  '78930810df432106b0fd14f4483ee9070b0ce2a50877e9c8ea61cfad7a7ba067'
)
  throw new Error('Approved current resume artifact changed');

const pagePaths = required.filter((path) => path.endsWith('.html'));
const pages = await Promise.all(
  pagePaths.map((path) => readFile(join('dist', path), 'utf8')),
);

const scriptedRoutes = new Set([
  'index.html',
  'work/index.html',
  'work/california-storm/index.html',
  'work/measure-coffee/index.html',
  'work/shader-studio/index.html',
  'experience/index.html',
  'about/index.html',
  'contact/index.html',
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
if (!home.includes('aria-label="Page sections"'))
  throw new Error('Homepage section indicator is missing');
for (const id of [
  'home-intro',
  'home-operating-history',
  'home-featured-work',
  'home-experience',
  'home-contact',
]) {
  if (!home.includes(`href="#${id}"`))
    throw new Error(`Homepage section indicator is missing #${id}`);
}
if (!home.includes('I BUILD PRODUCTS WITH THE PEOPLE USING THEM IN MIND.'))
  throw new Error('Homepage hero copy missing');
if (
  !/I build software for real people, because behind every workflow,\s+automation or agent, there is a person needing something done\./.test(
    home,
  )
)
  throw new Error('Homepage hero subhead missing');
if (
  !/Start with the people\. Understand the work\. Build something that\s+people want to use\./.test(
    home,
  )
)
  throw new Error('Homepage people-first principle missing');
if (
  !/Coffee service, wholesale, logistics, and field leadership taught me\s+that every job is a service job\. Every industry is a service industry\. I\s+brought that perspective to engineering roles in integrations,\s+automation, and product systems\./.test(
    home,
  )
)
  throw new Error('Homepage career paragraph missing');
if (home.includes('Operating history') || home.includes('Current role'))
  throw new Error('Homepage metric boxes should be removed');
if (!home.includes('href="/work/"'))
  throw new Error('Homepage work route missing');
if (!home.includes('data-project-rail'))
  throw new Error('Homepage shared project rail wrapper missing');
if (!home.includes('data-project-rail-progress'))
  throw new Error('Homepage project rail progress markup missing');
if (!home.includes('data-project-rail-cue'))
  throw new Error('Homepage project rail cue markup missing');
if (!home.includes('data-project-zone="cta"'))
  throw new Error('Homepage project rail CTA zone markup missing');
if (!home.includes('aria-label="Project rail scroll progress"'))
  throw new Error('Homepage project rail progress semantics missing');
if (pages.some((page) => page.includes('Founder &amp; Founding Engineer')))
  throw new Error('Superseded Measure Coffee title is present');
if (!home.includes('Founding Engineer at measure.coffee'))
  throw new Error('Approved Measure Coffee title is missing');
if (!home.includes('twitter:title') || !home.includes('twitter:description'))
  throw new Error('Twitter metadata is incomplete');
if (/operations-to-software|journey-visual/.test(home))
  throw new Error(
    'Homepage journey visual regression: operations-to-software assets or journey-visual markup remain in built HTML',
  );
if (home.includes('arc-grid') || home.includes('Coffee &amp; service'))
  throw new Error('Homepage operating-history arc grid should be removed');
if (/start with the work/i.test(home))
  throw new Error('Superseded start-with-the-work homepage copy is present');

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
if (!workIndex.includes('data-project-rail'))
  throw new Error('Work index shared project rail wrapper missing');
if (!workIndex.includes('data-project-rail-progress'))
  throw new Error('Work index project rail progress markup missing');
if (!workIndex.includes('data-project-rail-cue'))
  throw new Error('Work index project rail cue markup missing');
if (!workIndex.includes('data-project-zone="media"'))
  throw new Error('Work index project rail media zone markup missing');
if (!workIndex.includes('data-project-zone="caption"'))
  throw new Error('Work index project rail caption zone markup missing');
if (!workIndex.includes('aria-valuenow="0"'))
  throw new Error('Work index project rail progressbar contract missing');
if (!workIndex.includes('UPDATED 16 AUG 2026'))
  throw new Error('Public GitHub ticker snapshot date is missing');
if (!measureCoffee.includes('Measure private repository statistics'))
  throw new Error('Private Measure ticker is missing from its work page');
if (!measureCoffee.includes('Owner-authored commits only'))
  throw new Error('Private Measure ticker provenance is missing');
for (const [pageName, page] of [
  ['homepage', home],
  ['work index', workIndex],
  ['measure.coffee case study', measureCoffee],
  ['California Storm case study', californiaStorm],
]) {
  if (page.includes('↗'))
    throw new Error(`Unicode external-link glyph leaked into ${pageName}`);
}
for (const [pageName, page] of [
  ['work index', workIndex],
  ['measure.coffee case study', measureCoffee],
  ['California Storm case study', californiaStorm],
]) {
  if (!page.includes('media="(max-width: 45rem)"'))
    throw new Error(`${pageName} is missing mobile project art direction`);
  if (!page.includes('mobile-portrait.png'))
    throw new Error(`${pageName} is missing portrait project imagery`);
}
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
  for (const attr of [
    'data-project-zone="description"',
    'data-project-zone="category"',
    'data-project-landmark="description-label"',
    'data-project-landmark="description-body"',
    'data-project-landmark="category-label"',
    'data-project-landmark="category-value"',
    'data-project-landmark="category-link"',
  ]) {
    if (!page.includes(attr))
      throw new Error(`${pageName} is missing project rail hook: ${attr}`);
  }
  for (const text of [
    'Type',
    'Creative tools',
    'Product engineering',
    'Product design',
    'Open Shader Studio',
    'Visit measure.coffee',
    'Open case study',
  ]) {
    if (!page.includes(text))
      throw new Error(`${pageName} is missing project Type-cell text: ${text}`);
  }
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
if (!californiaStorm.includes('four WordPress plugins'))
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
