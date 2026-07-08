// Generic product runtime - scaffolded by AI OS Production (Phase 3).
// Serves the quality-gated dist/ + GET /health. Zero npm dependencies.
import { createServer } from "node:http";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const SLUG = "alter-ego";
const NAME = "Alter Ego";
const IS_TEST = false;
const DIST = join(fileURLToPath(new URL(".", import.meta.url)), "dist");
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
