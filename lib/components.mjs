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
  return `
    <div class="alter-ego-card" style="background: linear-gradient(135deg, #e0f7fa, #bbdefb); padding: 25px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #2c3e50; max-width: 600px; margin: 0 auto; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #1a73e8, #3f51b5);"></div>
      <h2 style="text-align: center; margin-bottom: 15px; font-weight: 600; color: #1a73e8; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">${reading.archetype_name}</h2>
      <p style="text-align: center; font-style: italic; margin-bottom: 20px; color: #546e7a; line-height: 1.5;">${reading.one_line_essence}</p>
      <div style="margin-bottom: 15px; padding-left: 10px; border-left: 3px solid #1a73e8;">
        <strong style="color: #1a73e8;">Visual Metaphor:</strong> ${reading.visual_metaphor}
      </div>
      <div style="margin-bottom: 15px; padding-left: 10px; border-left: 3px solid #1a73e8;">
        <strong style="color: #1a73e8;">Strengths:</strong> ${reading.strengths.join(', ')}
      </div>
      <div style="margin-bottom: 15px; padding-left: 10px; border-left: 3px solid #1a73e8;">
        <strong style="color: #1a73e8;">Shadow Traits:</strong> ${reading.shadow_traits.join(', ')}
      </div>
      <div style="margin-bottom: 15px; padding-left: 10px; border-left: 3px solid #1a73e8;">
        <strong style="color: #1a73e8;">Motto:</strong> ${reading.motto_chapter_themeword}
      </div>
      <div style="padding-left: 10px; border-left: 3px solid #1a73e8;">
        <strong style="color: #1a73e8;">Narrative:</strong> ${reading.narrative}
      </div>
    </div>
  `;
}
