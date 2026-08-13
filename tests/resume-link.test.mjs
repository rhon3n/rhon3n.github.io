import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const versionedResumePath = '/files/resume-2026-08.pdf';
const runtime = fs.readFileSync('static/js/main.2ff76f68.chunk.js', 'utf8');
const sourceMap = JSON.parse(fs.readFileSync('static/js/main.2ff76f68.chunk.js.map', 'utf8'));
const heroSourceIndex = sourceMap.sources.indexOf('components/layout/HeroSection.js');

assert.notEqual(heroSourceIndex, -1, 'HeroSection source must exist in the source map');

test('the visible resume link uses the versioned PDF URL', () => {
  assert.match(runtime, new RegExp(versionedResumePath.replaceAll('/', '\\/').replace('.', '\\.')));
  assert.match(sourceMap.sourcesContent[heroSourceIndex], new RegExp(versionedResumePath.replaceAll('/', '\\/').replace('.', '\\.')));
});

test('the versioned resume asset exists and is non-empty', () => {
  const assetPath = `.${versionedResumePath}`;
  assert.equal(fs.existsSync(assetPath), true);
  assert.ok(fs.statSync(assetPath).size > 10_000);
});
