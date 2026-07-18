// Generic product runtime - scaffolded by AI OS Production (Phase 3).
// Serves the quality-gated dist/ + GET /health. Zero npm dependencies.
import { createServer } from "node:http";
import { readFileSync, writeFileSync, existsSync, readdirSync, appendFileSync } from "node:fs";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const SLUG = "alter-ego";
const NAME = "Alter Ego";
const IS_TEST = false;
const ROOT = fileURLToPath(new URL(".", import.meta.url));
const DIST = join(ROOT, "dist");
// The owned-audience CRM seam. captures.jsonl is a container-local BUFFER, not
// the store: this file dies with the container, so it must never be the only
// copy of the one asset a free product has. CRM_WEBHOOK points at the horizontal
// capture endpoint (distribution/crm/capture_server.mjs), which writes to the
// sovereign database off-box.
//
// Order matters: buffer FIRST, then forward. If the webhook is unreachable the
// capture is already on disk and gets drained on the next successful forward, so
// a network blip loses nothing.
const CAPTURES = join(ROOT, "captures.jsonl");
const CRM_WEBHOOK = process.env.CRM_WEBHOOK || "";
const CRM_KEY = process.env.CRM_WEBHOOK_KEY || "";
const PENDING = join(ROOT, "captures.pending.jsonl");
const PORT = Number(process.env.PORT || 3000);

/** POST one record to the CRM. Returns true only on a confirmed 2xx. */
async function forward(path, rec) {
  if (!CRM_WEBHOOK) return false;
  try {
    const r = await fetch(CRM_WEBHOOK.replace(/\/+$/, "") + path, {
      method: "POST",
      headers: { "content-type": "application/json", ...(CRM_KEY ? { "x-aios-capture-key": CRM_KEY } : {}) },
      body: JSON.stringify(rec),
      signal: AbortSignal.timeout(8000),
    });
    return r.ok;
  } catch { return false; }
}

/** Anything the webhook could not take, retried after the next success. */
function buffer(rec) {
  try { appendFileSync(PENDING, JSON.stringify(rec) + "\n", "utf8"); } catch { /* buffer is best effort */ }
}
async function drain() {
  if (!CRM_WEBHOOK || !existsSync(PENDING)) return;
  let lines;
  try { lines = readFileSync(PENDING, "utf8").split("\n").filter(Boolean); } catch { return; }
  const stuck = [];
  for (const l of lines) {
    let rec; try { rec = JSON.parse(l); } catch { continue; }
    if (!(await forward("/capture", rec))) stuck.push(l);
  }
  try { writeFileSync(PENDING, stuck.length ? stuck.join("\n") + "\n" : "", "utf8"); } catch { /* keep trying next time */ }
}
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
      // The durable copy. The user is answered as soon as the local buffer has
      // it: the CRM is our problem, never a reason to make them wait or fail.
      const wire = { vertical: SLUG, email: row.email, source: "product",
        consent_status: "captured",
        payload: { first_name: row.first_name, archetype: row.archetype, tags: row.tags, captured_at: row.at } };
      forward("/capture", wire).then((ok) => { if (ok) drain(); else buffer(wire); })
        .catch(() => buffer(wire));
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ ok: true }));
    });
    return;
  }
  // Funnel events, anonymous. The browser sends a random session token, never an
  // address, so the event stream carries no PII by construction. Fire and forget:
  // analytics must never slow down or break the product.
  if (url.pathname === "/event" && req.method === "POST") {
    let body = "";
    req.on("data", (c) => { body += c; if (body.length > 1e4) req.destroy(); });
    req.on("end", () => {
      let rec; try { rec = JSON.parse(body || "{}"); } catch { rec = null; }
      if (rec && rec.event) {
        forward("/event", { vertical: SLUG, session_id: String(rec.session_id || ""), event: String(rec.event), meta: rec.meta && typeof rec.meta === "object" ? rec.meta : {} }).catch(() => {});
      }
      res.writeHead(204).end();
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
