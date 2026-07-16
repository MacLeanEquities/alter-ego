// lib/components.mjs
import { createElement as h } from "react";

// node_modules/@aios/ui-primitives/src/primitives/surfaces.tsx
import { useId, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function Card({ title, footer, className = "", children, ...rest }) {
  return /* @__PURE__ */ jsxs("div", { className: `aios-card ${className}`, ...rest, children: [
    title ? /* @__PURE__ */ jsx("div", { style: { fontWeight: 600, marginBottom: "var(--aios-space-3)" }, children: title }) : null,
    children,
    footer ? /* @__PURE__ */ jsx("div", { style: { marginTop: "var(--aios-space-4)" }, children: footer }) : null
  ] });
}

// node_modules/@aios/ui-primitives/src/primitives/layout.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var gapVar = (g) => g == null ? void 0 : `var(--aios-space-${g})`;
function Stack({ gap = 4, direction = "column", align, justify, style, className = "", ...rest }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: `aios-stack ${className}`,
      style: { flexDirection: direction, gap: gapVar(gap), alignItems: align, justifyContent: justify, ...style },
      ...rest
    }
  );
}
function Container({ max = "72rem", style, className = "", ...rest }) {
  return /* @__PURE__ */ jsx2("div", { className: `aios-container ${className}`, style: { maxWidth: max, ...style }, ...rest });
}
function Divider(props) {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ jsx2("hr", { className: `aios-divider ${className}`, ...rest });
}

// lib/components.mjs
function paragraphs(text) {
  return String(text || "").split(/\n\s*\n/).filter(Boolean).map((p, i) => h("p", { key: i }, p.trim()));
}
function renderComponent(comp, ctx) {
  const { type, props = {}, content_source } = comp;
  const content = content_source ? ctx.content[content_source] : null;
  switch (type) {
    case "hero":
      return h(
        Stack,
        { gap: 3 },
        h("h1", null, props.headline || ctx.uiSpec.slug),
        props.subhead ? h("p", { style: { fontSize: "var(--aios-text-lg)" } }, props.subhead) : null
      );
    case "article":
      return h(
        Card,
        { title: content?.title || "Content" },
        h(
          Stack,
          { gap: 3 },
          ...paragraphs(content?.body || "(no content)"),
          content?.status === "held" ? h(
            "p",
            { style: { color: "var(--aios-color-warning)" } },
            "[content held at the substance gate - awaiting revision]"
          ) : null
        )
      );
    case "article-list": {
      const pages = ctx.uiSpec.pages.filter((p) => p.components.some((c) => c.type === "article"));
      return h(Stack, { gap: 3 }, ...pages.map((p) => h(Card, { key: p.id, title: h("a", { href: `./${p.id}.html` }, p.title) }, p.purpose || "")));
    }
    case "prose":
      return h(Stack, { gap: 3 }, ...paragraphs(props.text));
    case "app-flow":
      return h(
        Stack,
        { gap: 3 },
        h("h1", null, props.product_name || ctx.uiSpec.slug),
        props.intro ? h("p", { style: { fontSize: "var(--aios-text-lg)" } }, props.intro) : null,
        h("noscript", null, "This interactive tool needs JavaScript enabled to run.")
      );
    default:
      throw new Error(`no kit mapping for ui_spec component type '${type}'`);
  }
}
function renderPage(page, ctx) {
  return h(
    Container,
    { max: "48rem" },
    h(
      Stack,
      { gap: 6 },
      h(
        "nav",
        { className: "aios-row", style: { display: "flex", gap: "var(--aios-space-4)", padding: "var(--aios-space-4) 0" } },
        ...(ctx.uiSpec.navigation || []).map((n, i) => {
          const target = ctx.routeToPage[n.route];
          return h("a", { key: i, href: `./${target}.html` }, n.label);
        })
      ),
      h(Divider),
      ...page.components.map((c, i) => h("div", { key: i }, renderComponent(c, ctx)))
    )
  );
}
function renderCard(reading, variant = 0) {
  return `
    <div class="card" style="background: linear-gradient(135deg, #f0f4f8, #e2e8f0); border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="font-weight: 700; font-size: 24px; margin-bottom: 12px; color: #2d3748; text-align: center;">${reading.archetype_name}</h1>
      <p style="font-style: italic; font-size: 16px; margin-bottom: 16px; color: #4a5568; text-align: center;">${reading.one_line_essence}</p>
      
      <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
        <h2 style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: #2d3748;">Visual Metaphor</h2>
        <p style="color: #4a5568; line-height: 1.5;">${reading.visual_metaphor}</p>
      </div>
      
      <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
        <h2 style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: #2d3748;">Strengths</h2>
        <ul style="padding-left: 20px; margin: 0; color: #4a5568; line-height: 1.5;">
          ${reading.strengths.map((s) => `<li>${s}</li>`).join("")}
        </ul>
      </div>
      
      <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
        <h2 style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: #2d3748;">Shadow Traits</h2>
        <ul style="padding-left: 20px; margin: 0; color: #4a5568; line-height: 1.5;">
          ${reading.shadow_traits.map((s) => `<li>${s}</li>`).join("")}
        </ul>
      </div>
      
      <div style="background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
        <h2 style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: #2d3748;">Motto</h2>
        <p style="color: #4a5568; font-style: italic;">${reading.motto_chapter_themeword}</p>
        <p style="margin-top: 12px; color: #4a5568; line-height: 1.5;">${reading.narrative}</p>
      </div>
    </div>
  `;
}
export {
  renderCard,
  renderComponent,
  renderPage
};
