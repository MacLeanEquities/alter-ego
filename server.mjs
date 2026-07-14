// Generic product runtime - scaffolded by AI OS Production (Phase 3).
// Serves the quality-gated dist/ + GET /health. Zero npm dependencies.
import { createServer } from "node:http";
import { readFileSync, existsSync, readdirSync, appendFileSync } from "node:fs";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const SLUG = "alter-ego";
const NAME = "Alter Ego";
const IS_TEST = false;
const ROOT = fileURLToPath(new URL(".", import.meta.url));
const DIST = join(ROOT, "dist");
// The owned-audience CRM seam ($0, local): captures are appended here as JSONL.
// A hosted deploy points CRM_WEBHOOK at the real CRM; absent -> local file only.
const CAPTURES = join(ROOT, "captures.jsonl");
const PORT = Number(process.env.PORT || 3000);
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".mjs": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon" };

function homePage() {
  const files = readdirSync(DIST).filter((f) => f.endsWith(".html"));
  return files.includes("home.html") ? "home.html" : files.includes("index.html") ? "index.html" : files[0];
}

createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (url.pathname === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify({ ok: true, slug: SLUG, name: NAME, is_test: IS_TEST }));
  }
  // CRM capture: record the contact + archetype + answer-derived tags BEFORE the
  // full result is revealed to the user. Append-only JSONL is the local CRM seam.
  if (url.pathname === "/capture" && req.method === "POST") {
    let body = "";
    req.on("data", (c) => { body += c; if (body.length > 1e5) req.destroy(); });
    req.on("end", () => {
      let rec;
      try { rec = JSON.parse(body || "{}"); } catch { res.writeHead(400, { "content-type": "application/json" }); return res.end('{"ok":false,"error":"bad json"}'); }
      if (!rec.email || !/.+@.+\..+/.test(String(rec.email))) { res.writeHead(422, { "content-type": "application/json" }); return res.end('{"ok":false,"error":"email required"}'); }
      const row = { at: new Date().toISOString(), slug: SLUG, email: String(rec.email), first_name: String(rec.first_name || ""), archetype: String(rec.archetype || ""), tags: Array.isArray(rec.tags) ? rec.tags.map(String) : [] };
      try { appendFileSync(CAPTURES, JSON.stringify(row) + "\n", "utf8"); }
      catch (e) { res.writeHead(500, { "content-type": "application/json" }); return res.end('{"ok":false,"error":"store"}'); }
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ ok: true }));
    });
    return;
  }
  let rel = url.pathname === "/" ? homePage() : url.pathname.slice(1);
  rel = normalize(rel).replace(/^([.\\/])+/, ""); // no traversal
  const file = join(DIST, rel);
  if (!file.startsWith(DIST) || !existsSync(file)) {
    res.writeHead(404, { "content-type": "text/plain" });
    return res.end("not found");
  }
  res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
}).listen(PORT, "0.0.0.0", () => console.log(`${SLUG} runtime on :${PORT}`));
