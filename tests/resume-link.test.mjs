import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import test from 'node:test';

const versionedResumePath = '/files/resume-2026-08.pdf';
const caseStudyPath = '/cal-storm-case-study/';
const index = fs.readFileSync('index.html', 'utf8');
const runtime = fs.readFileSync('static/js/main.2ff76f68.chunk.js', 'utf8');
const precache = fs.readFileSync('precache-manifest.74f6f16c2e35b679e4801c3a34db9dce.js', 'utf8');
const sourceMap = JSON.parse(fs.readFileSync('static/js/main.2ff76f68.chunk.js.map', 'utf8'));
const heroSourceIndex = sourceMap.sources.indexOf('components/layout/HeroSection.js');

assert.notEqual(heroSourceIndex, -1, 'HeroSection source must exist in the source map');

test('the visible resume link uses the versioned PDF URL', () => {
  assert.match(runtime, new RegExp(versionedResumePath.replaceAll('/', '\\/').replace('.', '\\.')));
  assert.match(sourceMap.sourcesContent[heroSourceIndex], new RegExp(versionedResumePath.replaceAll('/', '\\/').replace('.', '\\.')));
});

test('the resume link has an accessible name', () => {
  assert.match(sourceMap.sourcesContent[heroSourceIndex], /aria-label="Download resume"/);
  assert.match(runtime, /"aria-label":"Download resume"/);
});

test('the homepage visibly links to the California Storm case study', () => {
  assert.match(index, new RegExp(`href=["']${caseStudyPath.replaceAll('/', '\\/')}["']`));
  assert.match(index, />California Storm Case Study</);
});

test('the homepage does not request the missing source stylesheet', () => {
  assert.doesNotMatch(index, /href=["'](?:\.\.\/)?src\/dopestyles\.css["']/);
});

test('the service worker revisions match the changed homepage assets', () => {
  const indexRevision = crypto.createHash('md5').update(index).digest('hex');
  const runtimeRevision = crypto.createHash('md5').update(runtime).digest('hex');
  assert.match(precache, new RegExp(`"revision": "${indexRevision}"[\\s\\S]*?"url": "/index\\.html"`));
  assert.match(precache, new RegExp(`"revision": "${runtimeRevision}"[\\s\\S]*?"url": "/static/js/main\\.2ff76f68\\.chunk\\.js"`));
});

test('the versioned resume asset exists and is non-empty', () => {
  const assetPath = `.${versionedResumePath}`;
  assert.equal(fs.existsSync(assetPath), true);
  assert.ok(fs.statSync(assetPath).size > 10_000);
});
