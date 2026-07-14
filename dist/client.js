(() => {
  // capability.mjs
  function runCapability(input) {
    const archetypes = [
      {
        archetype_name: "The Curious Cartographer",
        one_line_essence: "You're the one who maps the uncharted with a steady hand.",
        visual_metaphor: "A compass made of starlight",
        strengths: [
          "Maps the unknown",
          "Listens deeply",
          "Connects hidden dots"
        ],
        shadow_traits: [
          "Can get lost in the details",
          "Hesitates to share maps"
        ],
        motto_chapter_themeword: "Charting the Unseen",
        narrative: "You see the world as a series of interconnected paths. Your strength lies in turning the invisible into a clear route. Sometimes, you might get so focused on the map that you forget to share the journey with others."
      },
      {
        archetype_name: "The Quiet Catalyst",
        one_line_essence: "You're the one who sparks change without a sound.",
        visual_metaphor: "A single drop of water creating ripples",
        strengths: [
          "Observes deeply",
          "Acts with precision",
          "Creates calm in chaos"
        ],
        shadow_traits: [
          "Waits too long to act",
          "Fears being overlooked"
        ],
        motto_chapter_themeword: "Ripples of Change",
        narrative: "You notice the subtle shifts in the air and act with quiet confidence. Your ability to see the small changes that lead to big shifts is your superpower. Sometimes, you might hold back too long, waiting for the perfect moment that never comes."
      },
      {
        archetype_name: "The Patient Weaver",
        one_line_essence: "You're the one who weaves connections across time and space.",
        visual_metaphor: "A tapestry of interwoven threads",
        strengths: [
          "Builds lasting relationships",
          "Sees the big picture",
          "Patience in the face of chaos"
        ],
        shadow_traits: [
          "Takes too long to make decisions",
          "Overlooks the immediate"
        ],
        motto_chapter_themeword: "Threads of Time",
        narrative: "You create strong bonds by weaving together the threads of people's stories. Your patience allows you to see the connections others miss. However, you might get stuck in the weaving process and forget to move forward."
      },
      {
        archetype_name: "The Bold Archivist",
        one_line_essence: "You're the one who preserves the past to shape the future.",
        visual_metaphor: "A library of living memories",
        strengths: [
          "Preserves history",
          "Draws wisdom from the past",
          "Organizes with clarity"
        ],
        shadow_traits: [
          "Clings to the past",
          "Resists new ideas"
        ],
        motto_chapter_themeword: "History in Motion",
        narrative: "You believe that the past holds the key to the future. Your strength is in preserving and organizing the stories that matter. But sometimes, you might hold onto old ways too tightly, missing the new opportunities that are unfolding."
      },
      {
        archetype_name: "The Gentle Guide",
        one_line_essence: "You're the one who leads with a soft touch and steady presence.",
        visual_metaphor: "A lantern in the fog",
        strengths: [
          "Offers calm reassurance",
          "Sees the path clearly",
          "Supports without pushing"
        ],
        shadow_traits: [
          "Avoids conflict",
          "Fears being too direct"
        ],
        motto_chapter_themeword: "Guiding Light",
        narrative: "You are the calm in the storm, offering a steady light to those who feel lost. Your gentle guidance helps others find their way. However, you might avoid difficult conversations, hoping to keep the peace."
      },
      {
        archetype_name: "The Resilient Builder",
        one_line_essence: "You're the one who constructs with unwavering strength.",
        visual_metaphor: "A tree growing through stone",
        strengths: [
          "Builds enduring structures",
          "Adapts to challenges",
          "Works tirelessly"
        ],
        shadow_traits: [
          "Takes on too much",
          "Fears failure"
        ],
        motto_chapter_themeword: "Rooted and Rising",
        narrative: "You build things that last, even when the ground is hard. Your resilience is your greatest asset. But you might take on too many projects at once, spreading yourself too thin."
      },
      {
        archetype_name: "The Reflective Listener",
        one_line_essence: "You're the one who hears the unspoken and reflects it back.",
        visual_metaphor: "A mirror reflecting the soul",
        strengths: [
          "Hears deeply",
          "Reflects with empathy",
          "Creates safe space"
        ],
        shadow_traits: [
          "Overthinks",
          "Struggles to speak up"
        ],
        motto_chapter_themeword: "Echoes of Understanding",
        narrative: "You have a gift for hearing what others don't say. Your reflections help others see themselves more clearly. But you might get caught in your own thoughts, making it hard to share your own perspective."
      },
      {
        archetype_name: "The Creative Bridge",
        one_line_essence: "You're the one who connects disparate ideas into something new.",
        visual_metaphor: "A bridge of light between two worlds",
        strengths: [
          "Sees unexpected connections",
          "Fosters collaboration",
          "Innovates with ease"
        ],
        shadow_traits: [
          "Overlooks details",
          "Chases the next idea"
        ],
        motto_chapter_themeword: "Bridging the Gap",
        narrative: "You are the spark that brings together different worlds. Your creativity turns chaos into harmony. However, you might jump from idea to idea without finishing the current project."
      },
      {
        archetype_name: "The Steady Navigator",
        one_line_essence: "You're the one who keeps the course when the winds shift.",
        visual_metaphor: "A ship sailing through stormy seas",
        strengths: [
          "Maintains direction",
          "Adapts to change",
          "Provides stability"
        ],
        shadow_traits: [
          "Resists change",
          "Fears the unknown"
        ],
        motto_chapter_themeword: "Sailing True",
        narrative: "You are the anchor in the storm, keeping everyone on course. Your steady presence is a comfort. But you might resist necessary changes, preferring the known path."
      },
      {
        archetype_name: "The Thoughtful Connector",
        one_line_essence: "You're the one who brings people together with intention.",
        visual_metaphor: "A web of glowing threads",
        strengths: [
          "Builds meaningful connections",
          "Sees the potential in others",
          "Fosters community"
        ],
        shadow_traits: [
          "Takes on too many connections",
          "Neglects self-care"
        ],
        motto_chapter_themeword: "Threads of Community",
        narrative: "You see the threads that bind people together and weave them into a strong community. Your thoughtfulness creates deep bonds. But you might forget to take care of yourself in the process."
      }
    ];
    const totalLength = input.answers.reduce((sum, answer) => sum + answer.length, 0);
    const index = totalLength % archetypes.length;
    return archetypes[index];
  }

  // card.mjs
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

  // client.js
  var CONFIG = {
    "questions": [
      "What's a word that describes your energy when you're at your best?",
      "What's a book or song that feels like it was made for you?",
      "What's a strength you've always had but never got to use?",
      "What's a small moment that makes you feel completely at ease?",
      "What's a value you'd never compromise on?",
      "What's a word that captures how you want to be remembered?",
      "What's a place where you feel most like yourself?",
      "What's a phrase you'd use to describe your ideal day?"
    ],
    "askName": true,
    "hasCard": true,
    "capture": {
      "enabled": true,
      "unlocks": "the full result"
    },
    "resultFields": [
      "archetype_name",
      "one_line_essence",
      "visual_metaphor",
      "strengths",
      "shadow_traits",
      "motto / chapter theme-word",
      "narrative"
    ],
    "productName": "Alter Ego",
    "intro": "FREE, forever. Paste nothing \u2014 just answer ~8 quick, revealing questions. In"
  };
  var RENDER_CARD = renderCard;
  var $ = (t, attrs, kids) => {
    const el = document.createElement(t);
    for (const k in attrs || {}) {
      if (k === "style") Object.assign(el.style, attrs[k]);
      else if (k === "class") el.className = attrs[k];
      else if (k === "html") el.innerHTML = attrs[k];
      else el.setAttribute(k, attrs[k]);
    }
    for (const c of kids || []) el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    return el;
  };
  var sp = (n) => "var(--aios-space-" + n + ", " + n * 0.25 + "rem)";
  function fieldLabel(name) {
    return String(name).replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
  function root() {
    return document.getElementById("aios-app-root");
  }
  function clear() {
    const r = root();
    if (r) r.innerHTML = "";
    return r;
  }
  function renderQuestions() {
    const r = clear();
    if (!r) return;
    r.setAttribute("data-screen", "questions");
    const form = $("form", { "data-aios-form": "1", style: { display: "flex", flexDirection: "column", gap: sp(4), maxWidth: "40rem", margin: "0 auto" } });
    if (CONFIG.intro) form.appendChild($("p", { style: { fontSize: "var(--aios-text-lg, 1.125rem)", opacity: "0.9" } }, [CONFIG.intro]));
    const inputs = [];
    if (CONFIG.askName) {
      const wrap = $("label", { style: { display: "flex", flexDirection: "column", gap: sp(1) } }, ["Your name (optional)"]);
      const inp = $("input", { type: "text", name: "aios-name", "data-aios-name": "1", autocomplete: "given-name", style: { padding: sp(3), fontSize: "1rem", border: "1px solid var(--aios-color-border,#ccc)", borderRadius: "var(--aios-radius-md,6px)", boxSizing: "border-box", width: "100%", maxWidth: "100%" } });
      wrap.appendChild(inp);
      form.appendChild(wrap);
      form._name = inp;
    }
    CONFIG.questions.forEach((q, i) => {
      const wrap = $("label", { style: { display: "flex", flexDirection: "column", gap: sp(1) } }, [i + 1 + ". " + q]);
      const inp = $("input", { type: "text", name: "aios-q" + i, "data-aios-q": String(i), required: "true", style: { padding: sp(3), fontSize: "1rem", border: "1px solid var(--aios-color-border,#ccc)", borderRadius: "var(--aios-radius-md,6px)", boxSizing: "border-box", width: "100%", maxWidth: "100%" } });
      wrap.appendChild(inp);
      form.appendChild(wrap);
      inputs.push(inp);
    });
    const btn = $("button", { type: "submit", "data-aios-submit": "1", style: { padding: sp(3) + " " + sp(4), fontSize: "1rem", border: "0", borderRadius: "var(--aios-radius-md,6px)", background: "var(--aios-color-accent,#2563eb)", color: "var(--aios-color-on-accent,#fff)", cursor: "pointer" } }, ["See my result"]);
    form.appendChild(btn);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const answers = inputs.map((x) => (x.value || "").trim());
      if (answers.some((a) => !a)) {
        return;
      }
      const firstName = form._name ? (form._name.value || "").trim() : "";
      btn.disabled = true;
      btn.textContent = "Reading...";
      try {
        const reading = await runCapability({ answers, firstName, businessName: firstName });
        renderResult(reading, { answers, firstName });
      } catch (err) {
        const r2 = root();
        if (r2) r2.appendChild($("p", { style: { color: "var(--aios-color-warning,#b45309)" } }, ["Something went wrong generating your result."]));
        btn.disabled = false;
        btn.textContent = "See my result";
      }
    });
    r.appendChild(form);
  }
  function renderResult(reading, ctx) {
    const r = clear();
    if (!r) return;
    r.setAttribute("data-screen", "result");
    const box = $("div", { "data-aios-result": "1", style: { maxWidth: "40rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: sp(4) } });
    if (CONFIG.hasCard && RENDER_CARD) {
      try {
        const card = RENDER_CARD(reading, 0);
        let html = "", css = "";
        if (typeof card === "string") html = card;
        else if (card && typeof card === "object") {
          html = card.html || card.markup || "";
          css = card.css || "";
        }
        if (html || css) {
          if (css) box.appendChild($("style", { html: String(css) }));
          box.appendChild($("div", { "data-aios-card": "1", style: { maxWidth: "100%", overflowX: "auto" }, html: String(html) }));
        }
      } catch (e) {
      }
    }
    if (!box.querySelector("[data-aios-card]")) {
      box.appendChild(renderFields(reading, CONFIG.resultFields.slice(0, 3), "teaser"));
    }
    if (CONFIG.capture.enabled) {
      box.appendChild(renderCapture(reading, ctx));
    } else {
      box.appendChild(renderFields(reading, CONFIG.resultFields, "full"));
      box.setAttribute("data-aios-full", "1");
    }
    r.appendChild(box);
  }
  function renderFields(reading, fields, tag) {
    const wrap = $("div", { "data-aios-fields": tag, style: { display: "flex", flexDirection: "column", gap: sp(3) } });
    for (const f of fields) {
      const v = reading[f];
      if (v == null || v === "") continue;
      const val = Array.isArray(v) ? v.join(" \xB7 ") : String(v);
      wrap.appendChild($("div", null, [$("strong", null, [fieldLabel(f) + ": "]), val]));
    }
    return wrap;
  }
  function renderCapture(reading, ctx) {
    const wrap = $("div", { "data-aios-capture": "1", style: { display: "flex", flexDirection: "column", gap: sp(2), padding: sp(4), border: "1px solid var(--aios-color-border,#ccc)", borderRadius: "var(--aios-radius-md,6px)" } });
    wrap.appendChild($("p", null, ["Enter your email to unlock " + (CONFIG.capture.unlocks || "your full result") + "."]));
    const email = $("input", { type: "email", "data-aios-email": "1", placeholder: "you@example.com", required: "true", style: { padding: sp(3), fontSize: "1rem", border: "1px solid var(--aios-color-border,#ccc)", borderRadius: "var(--aios-radius-md,6px)", boxSizing: "border-box", width: "100%", maxWidth: "100%" } });
    const btn = $("button", { type: "button", "data-aios-capture-submit": "1", style: { padding: sp(3), border: "0", borderRadius: "var(--aios-radius-md,6px)", background: "var(--aios-color-accent,#2563eb)", color: "var(--aios-color-on-accent,#fff)", cursor: "pointer" } }, ["Unlock my full result"]);
    const note = $("p", { "aria-live": "polite", style: { minHeight: "1.2em", fontSize: "0.9rem", opacity: "0.8" } });
    btn.addEventListener("click", async () => {
      const addr = (email.value || "").trim();
      if (!/.+@.+\..+/.test(addr)) {
        note.textContent = "Please enter a valid email.";
        return;
      }
      btn.disabled = true;
      note.textContent = "Saving...";
      const archetype = reading.archetype_name || reading.overall_grade || reading.archetype || "result";
      const tags = deriveTags(reading, ctx);
      try {
        const res = await fetch("/capture", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: addr, first_name: ctx && ctx.firstName || "", archetype, tags })
        });
        if (!res.ok) throw new Error("capture failed");
        const box = wrap.parentNode;
        wrap.remove();
        box.appendChild(renderFields(reading, CONFIG.resultFields, "full"));
        box.setAttribute("data-aios-full", "1");
      } catch (e) {
        btn.disabled = false;
        note.textContent = "Could not save right now - try again.";
      }
    });
    wrap.appendChild(email);
    wrap.appendChild(btn);
    wrap.appendChild(note);
    return wrap;
  }
  function deriveTags(reading, ctx) {
    const tags = [];
    const arch = reading.archetype_name || reading.overall_grade || reading.archetype;
    if (arch) tags.push(String(arch).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""));
    const words = (ctx && ctx.answers || []).join(" ").toLowerCase().match(/[a-z]{5,}/g) || [];
    for (const w of [...new Set(words)].slice(0, 3)) tags.push(w);
    return tags;
  }
  function injectResponsiveReset() {
    const style = document.createElement("style");
    style.textContent = "html,body{margin:0;max-width:100%;overflow-x:hidden}#aios-app-root{box-sizing:border-box;max-width:100%;padding:var(--aios-space-4,1rem)}#aios-app-root *{max-width:100%;box-sizing:border-box}#aios-app-root img{height:auto}@media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}";
    document.head.appendChild(style);
  }
  function start() {
    const r = root();
    if (!r) return;
    injectResponsiveReset();
    renderQuestions();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
