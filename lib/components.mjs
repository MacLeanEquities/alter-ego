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
    case "app-flow":
      // The interactive product. The SSR shell is a heading + intro; the mounted
      // client (dist/client.js) renders the real question flow into #aios-app-root,
      // calls the synthesized runCapability, renders the card, and captures email.
      return h(Stack, { gap: 3 },
        h("h1", null, props.product_name || ctx.uiSpec.slug),
        props.intro ? h("p", { style: { fontSize: "var(--aios-text-lg)" } }, props.intro) : null,
        h("noscript", null, "This interactive tool needs JavaScript enabled to run."));
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
  // Templated CSS card with dynamic text over fixed background
  const backgroundVariants = [
    "linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c)",
    "linear-gradient(135deg, #2c3e50, #4a6491, #2c3e50)",
    "linear-gradient(135deg, #2c5282, #4a6491, #2c5282)",
    "linear-gradient(135deg, #1e3a8a, #4a5568, #1e3a8a)"
  ];
  
  const background = backgroundVariants[variant % backgroundVariants.length];
  
  return `
    <div style="
      background: ${background};
      color: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 2rem;
      border-radius: 16px;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      position: relative;
      overflow: hidden;
      text-align: center;
    ">
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><path d="M0 0L100 100M100 0L0 100" stroke="rgba(255,255,255,0.05)" stroke-width="2"/></svg>');
        opacity: 0.1;
      "></div>
      
      <h1 style="
        font-size: 2.2rem;
        margin: 0 0 0.5rem;
        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        letter-spacing: 0.5px;
      ">${reading.archetype_name}</h1>
      
      <p style="
        font-size: 1.2rem;
        margin: 0 0 1.5rem;
        font-style: italic;
        line-height: 1.4;
      ">${reading.one_line_essence}</p>
      
      <div style="
        background: rgba(0,0,0,0.2);
        padding: 1.2rem;
        border-radius: 12px;
        margin: 1.5rem 0;
        font-size: 1.1rem;
      ">
        <p style="margin: 0.5rem 0;">${reading.visual_metaphor}</p>
      </div>
      
      <div style="
        margin: 1.5rem 0;
        font-size: 1.1rem;
      ">
        <p style="margin: 0.5rem 0;"><strong>Strengths:</strong> ${reading.strengths.join(', ')}</p>
        <p style="margin: 0.5rem 0;"><strong>Shadow Traits:</strong> ${reading.shadow_traits.join(', ')}</p>
      </div>
      
      <div style="
        background: rgba(255,255,255,0.15);
        padding: 1rem;
        border-radius: 8px;
        margin: 1.5rem 0;
        font-size: 1.1rem;
      ">
        <p style="margin: 0.5rem 0;"><strong>Motto:</strong> ${reading.motto_chapter_themeword}</p>
        <p style="margin: 0.5rem 0;"><strong>Narrative:</strong> ${reading.narrative}</p>
      </div>
      
      <div style="
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        font-size: 0.8rem;
        opacity: 0.7;
      ">
        Alter Ego Card
      </div>
    </div>
  `;
}
