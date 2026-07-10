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
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; border-radius: 16px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><path d="M0 0L100 100M100 0L0 100" stroke="rgba(255,255,255,0.1)" stroke-width="2"/></svg>'); background-size: 100px 100px; opacity: 0.2;"></div>
      <h1 style="font-size: 2.5rem; font-weight: 700; margin: 0 0 10px; letter-spacing: 0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">${reading.archetype_name}</h1>
      <p style="font-size: 1.2rem; line-height: 1.5; margin: 0 0 20px; font-style: italic; opacity: 0.9;">${reading.one_line_essence}</p>
      <div style="margin-bottom: 20px;">
        <div style="font-weight: 600; margin-bottom: 5px; font-size: 1.1rem;">Visual Metaphor</div>
        <div style="font-style: italic; opacity: 0.8;">${reading.visual_metaphor}</div>
      </div>
      <div style="margin-bottom: 20px;">
        <div style="font-weight: 600; margin-bottom: 5px; font-size: 1.1rem;">Strengths</div>
        <ul style="padding-left: 20px; margin: 0; list-style-type: none;">
          ${reading.strengths.map(s => `<li style="margin: 5px 0; line-height: 1.4;">${s}</li>`).join('')}
        </ul>
      </div>
      <div style="margin-bottom: 20px;">
        <div style="font-weight: 600; margin-bottom: 5px; font-size: 1.1rem;">Shadow Traits</div>
        <ul style="padding-left: 20px; margin: 0; list-style-type: none;">
          ${reading.shadow_traits.map(s => `<li style="margin: 5px 0; line-height: 1.4;">${s}</li>`).join('')}
        </ul>
      </div>
      <div style="text-align: center; margin-top: 20px; font-style: italic; opacity: 0.8; font-size: 0.9rem;">
        ${reading.motto_chapter_themeword}
      </div>
    </div>
  `;
}
