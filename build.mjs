// Static build: render every ui_spec page to dist/<id>.html on the shared kit.
// Stage 1: esbuild bundles lib/components.mjs (which imports the kit's
// TypeScript source) with jsx: automatic; react stays EXTERNAL so the bundle
// and this script share one React instance. Stage 2: render each page.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import esbuild from "esbuild";

await esbuild.build({
  entryPoints: [fileURLToPath(new URL("./lib/components.mjs", import.meta.url))],
  bundle: true,
  platform: "node",
  format: "esm",
  jsx: "automatic",
  external: ["react", "react-dom"],
  outfile: fileURLToPath(new URL("./dist/_render.mjs", import.meta.url)),
  logLevel: "warning",
});
const { renderPage } = await import(new URL("./dist/_render.mjs", import.meta.url).href);

const uiSpec = JSON.parse(readFileSync(new URL("./ui_spec.json", import.meta.url), "utf8"));
const content = {};
for (const f of readdirSync(new URL("./content", import.meta.url))) {
  if (!f.endsWith(".json")) continue;
  const doc = JSON.parse(readFileSync(new URL(`./content/${f}`, import.meta.url), "utf8"));
  content[`content-engine:${doc.brief_id}`] = doc;
}
const routeToPage = Object.fromEntries(uiSpec.pages.map((p) => [p.route, p.id]));
const ctx = { uiSpec, content, routeToPage };

mkdirSync(new URL("./dist", import.meta.url), { recursive: true });
const require = createRequire(import.meta.url);
const tokensCss = readFileSync(require.resolve("@aios/ui-primitives/tokens.css"), "utf8");
writeFileSync(new URL("./dist/tokens.css", import.meta.url), tokensCss, "utf8");

// APP lane: copy the primary-interaction client into dist and mount it on every
// page. A static site leaves APP false and renders exactly as before.
const APP = true;
if (APP) {
  writeFileSync(new URL("./dist/client.js", import.meta.url),
    readFileSync(new URL("./client.js", import.meta.url), "utf8"), "utf8");
}
const appMount = APP ? '<div id="aios-app-root"></div><script src="./client.js"></script>' : "";

for (const page of uiSpec.pages) {
  const body = renderToStaticMarkup(renderPage(page, ctx));
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title><link rel="stylesheet" href="./tokens.css"></head>
<body style="background:var(--aios-color-bg);color:var(--aios-color-fg);font-family:var(--aios-font-body)">${body}${appMount}</body></html>
`;
  writeFileSync(new URL(`./dist/${page.id}.html`, import.meta.url), html, "utf8");
  console.log(`rendered ${page.id}.html (${html.length} bytes)`);
}
console.log(`build complete: ${uiSpec.pages.length} pages`);
