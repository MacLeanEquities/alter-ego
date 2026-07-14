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
    .card {
      background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
      color: white;
      padding: 2rem;
      border-radius: 12px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      position: relative;
      overflow: hidden;
    }
    .card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #ff9a9e, #fad0c4, #a1c4fd);
    }
    .archetype {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      text-align: center;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .essence {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      text-align: center;
      font-style: italic;
    }
    .metaphor {
      font-style: italic;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      text-align: center;
      opacity: 0.9;
    }
    .strengths, .shadows {
      margin: 1rem 0;
    }
    .strengths h3, .shadows h3 {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .strengths ul, .shadows ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    .strengths li, .shadows li {
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      text-align: center;
    }
    .motto {
      font-weight: bold;
      font-size: 1.3rem;
      text-align: center;
      margin: 1.5rem 0;
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }
    .narrative {
      line-height: 1.6;
      font-size: 1.1rem;
      text-align: center;
      margin-top: 1rem;
    }
  `;
}
export {
  renderCard,
  renderComponent,
  renderPage
};
