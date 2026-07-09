// Maps ui_spec component types to shared-kit compositions. Generic by design:
// venture specifics arrive as props/content data, never as code.
import { createElement as h } from "react";
import { Card } from "@aios/ui-primitives/primitives/surfaces";
import { Stack, Container, Divider } from "@aios/ui-primitives/primitives/layout";

function paragraphs(text) {
  return String(text || "").split(/\n\s*\n/).filter(Boolean)
    .map((p, i) => h("p", { key: i }, p.trim()));
}

export function renderComponent(comp, ctx) {
  const { type, props = {}, content_source } = comp;
  const content = content_source ? ctx.content[content_source] : null;
  switch (type) {
    case "hero":
      return h(Stack, { gap: 3 },
        h("h1", null, props.headline || ctx.uiSpec.slug),
        props.subhead ? h("p", { style: { fontSize: "var(--aios-text-lg)" } }, props.subhead) : null);
    case "article":
      return h(Card, { title: content?.title || "Content" },
        h(Stack, { gap: 3 },
          ...paragraphs(content?.body || "(no content)"),
          content?.status === "held" ? h("p", { style: { color: "var(--aios-color-warning)" } },
            "[content held at the substance gate - awaiting revision]") : null));
    case "article-list": {
      const pages = ctx.uiSpec.pages.filter((p) => p.components.some((c) => c.type === "article"));
      return h(Stack, { gap: 3 }, ...pages.map((p) =>
        h(Card, { key: p.id, title: h("a", { href: `./${p.id}.html` }, p.title) }, p.purpose || "")));
    }
    case "prose":
      return h(Stack, { gap: 3 }, ...paragraphs(props.text));
    default:
      // Unknown component type is a build error, not a silent skip: the
      // quality gate's "every page renders" check must see real failures.
      throw new Error(`no kit mapping for ui_spec component type '${type}'`);
  }
}

export function renderPage(page, ctx) {
  return h(Container, { max: "48rem" },
    h(Stack, { gap: 6 },
      h("nav", { className: "aios-row", style: { display: "flex", gap: "var(--aios-space-4)", padding: "var(--aios-space-4) 0" } },
        ...(ctx.uiSpec.navigation || []).map((n, i) => {
          const target = ctx.routeToPage[n.route];
          return h("a", { key: i, href: `./${target}.html` }, n.label);
        })),
      h(Divider),
      ...page.components.map((c, i) => h("div", { key: i }, renderComponent(c, ctx)))));
}

// ---- synthesized card renderer (Logic Synthesizer v0.1.0) ----
export function renderCard(reading, variant = 0) {
  const backgrounds = [
    "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')",
    "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMwMDQwODAiLz48L3N2Zz4=')",
    "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4=')"
  ];
  const bg = backgrounds[variant % backgrounds.length];
  
  return `
    <div style="
      background: ${bg};
      background-size: cover;
      width: 200px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: Arial, sans-serif;
      padding: 20px;
      text-align: center;
      box-sizing: border-box;
    ">
      <h2 style="margin: 0; font-size: 1.2em;">${reading.archetype_name}</h2>
      <p style="margin: 5px 0; font-size: 0.9em;">${reading.one_line_essence}</p>
      <p style="margin: 5px 0; font-size: 0.8em;">${reading.visual_metaphor}</p>
      <div style="margin-top: 10px; font-size: 0.8em;">
        <strong>Strengths:</strong> ${reading.strengths.join(', ')}
      </div>
      <div style="margin-top: 5px; font-size: 0.8em;">
        <strong>Shadow:</strong> ${reading.shadow_traits.join(', ')}
      </div>
      <div style="margin-top: 10px; font-size: 0.8em; border-top: 1px solid rgba(255,255,255,0.5); padding-top: 5px;">
        ${reading.motto_chapter_themeword}
      </div>
    </div>
  `;
}
