import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("production portfolio exposes the California Storm case study", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.match(
    html,
    /<a[^>]+href="https:\/\/rhonen\.design\/cal-storm-case-study\/"[^>]*>\s*California Storm case study\s*<\/a>/i,
  );
});