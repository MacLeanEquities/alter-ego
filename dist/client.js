(() => {
  // capability.mjs
  function runCapability(input) {
    const archetypes = [
      {
        archetype_name: "The Curious Bridge",
        one_line_essence: "You're the one who connects the dots between the unexpected.",
        visual_metaphor: "A bridge made of glowing, interconnected puzzle pieces",
        strengths: ["Curiosity", "Pattern Recognition", "Empathy"],
        shadow_traits: ["Overthinking", "Avoiding Conflict"],
        motto_chapter_themeword: "Connect",
        narrative: "You see the world as a web of connections. Your curiosity drives you to find the hidden links between ideas, people, and experiences. You thrive when you can bring together disparate elements into a cohesive whole, but sometimes you get lost in the details, overanalyzing every possible connection."
      },
      {
        archetype_name: "The Quiet Innovator",
        one_line_essence: "You're the one who turns small ideas into meaningful change.",
        visual_metaphor: "A single seedling growing through a crack in concrete",
        strengths: ["Patience", "Attention to Detail", "Resilience"],
        shadow_traits: ["Self-Doubt", "Hesitation to Share"],
        motto_chapter_themeword: "Grow",
        narrative: "You work steadily, often behind the scenes, to nurture small ideas until they blossom. You find joy in the quiet process of creation and the tangible results of your efforts. However, you sometimes second-guess your ideas and hold back from sharing them until they feel perfect."
      },
      {
        archetype_name: "The Patient Listener",
        one_line_essence: "You're the one who makes space for others to be heard.",
        visual_metaphor: "A calm pond reflecting a clear sky",
        strengths: ["Active Listening", "Patience", "Emotional Intelligence"],
        shadow_traits: ["Holding Back", "Taking on Too Much"],
        motto_chapter_themeword: "Listen",
        narrative: "You create a safe space for others to share their thoughts and feelings. Your patience and emotional intelligence help people feel understood, but you sometimes take on too much responsibility for others' emotions and hold back your own voice."
      },
      {
        archetype_name: "The Creative Catalyst",
        one_line_essence: "You're the one who sparks new ideas in unexpected places.",
        visual_metaphor: "A spark igniting a cluster of glowing, interconnected stars",
        strengths: ["Creativity", "Energy", "Openness"],
        shadow_traits: ["Distractibility", "Overcommitting"],
        motto_chapter_themeword: "Spark",
        narrative: "You bring energy and fresh perspectives to any group, turning ordinary moments into opportunities for innovation. Your creativity is contagious, but you sometimes get distracted by too many ideas and overcommit to projects before they're fully formed."
      },
      {
        archetype_name: "The Steady Anchor",
        one_line_essence: "You're the one who keeps things grounded when the world feels chaotic.",
        visual_metaphor: "A lighthouse standing firm against stormy waves",
        strengths: ["Reliability", "Stability", "Practicality"],
        shadow_traits: ["Rigidity", "Avoiding Change"],
        motto_chapter_themeword: "Anchor",
        narrative: "You provide a sense of stability and security in uncertain times. Your practical approach helps others navigate challenges, but you sometimes resist change and hold onto old ways of doing things."
      },
      {
        archetype_name: "The Thoughtful Bridge",
        one_line_essence: "You're the one who builds understanding between different perspectives.",
        visual_metaphor: "A bridge made of woven threads of different colors",
        strengths: ["Empathy", "Communication", "Adaptability"],
        shadow_traits: ["People-Pleasing", "Difficulty Setting Boundaries"],
        motto_chapter_themeword: "Bridge",
        narrative: "You excel at finding common ground and facilitating conversations between people with different viewpoints. Your empathy helps you navigate complex social dynamics, but you sometimes prioritize others' needs over your own and struggle to set boundaries."
      },
      {
        archetype_name: "The Quiet Builder",
        one_line_essence: "You're the one who creates lasting value through steady effort.",
        visual_metaphor: "A stone wall being built one stone at a time",
        strengths: ["Diligence", "Consistency", "Integrity"],
        shadow_traits: ["Perfectionism", "Withholding Feedback"],
        motto_chapter_themeword: "Build",
        narrative: "You take pride in creating things that endure, working steadily without seeking attention. Your consistency and integrity are your hallmarks, but you sometimes get stuck in perfectionism and hesitate to share your work until it feels flawless."
      },
      {
        archetype_name: "The Joyful Explorer",
        one_line_essence: "You're the one who finds wonder in the everyday journey.",
        visual_metaphor: "A path through a field of wildflowers, leading to a distant mountain",
        strengths: ["Curiosity", "Optimism", "Flexibility"],
        shadow_traits: ["Impulsivity", "Avoiding Deep Commitments"],
        motto_chapter_themeword: "Explore",
        narrative: "You approach life with a sense of wonder and a desire to experience new things. Your optimism and flexibility make you adaptable, but you sometimes act on impulse and avoid making long-term commitments."
      },
      {
        archetype_name: "The Insightful Guide",
        one_line_essence: "You're the one who helps others see their own potential.",
        visual_metaphor: "A compass pointing to a clear path through a misty forest",
        strengths: ["Clarity", "Encouragement", "Perceptiveness"],
        shadow_traits: ["Over-Explaining", "Assuming Others See What You See"],
        motto_chapter_themeword: "Guide",
        narrative: "You have a gift for helping others see their own strengths and possibilities. Your clarity and encouragement empower people to grow, but you sometimes over-explain and assume others share your perspective."
      },
      {
        archetype_name: "The Harmonious Mediator",
        one_line_essence: "You're the one who turns conflict into collaboration.",
        visual_metaphor: "A circle of hands holding together, with a rainbow in the background",
        strengths: ["Conflict Resolution", "Collaboration", "Tact"],
        shadow_traits: ["Avoiding Directness", "Taking on Others' Problems"],
        motto_chapter_themeword: "Harmony",
        narrative: "You excel at resolving disagreements and fostering teamwork. Your tact and collaborative spirit help groups move forward, but you sometimes avoid direct confrontation and take on others' problems as your own."
      }
    ];
    const bioLines = [
      { universal: "I connect the dots between the unexpected.", linkedin: "I thrive on finding the hidden links between ideas, people, and experiences, bringing together disparate elements into a cohesive whole." },
      { universal: "I turn small ideas into meaningful change.", linkedin: "I nurture small ideas until they blossom, finding joy in the quiet process of creation and tangible results." },
      { universal: "I make space for others to be heard.", linkedin: "I create safe spaces for sharing through patience and emotional intelligence, helping people feel understood." },
      { universal: "I spark new ideas in unexpected places.", linkedin: "I bring energy and fresh perspectives to groups, turning ordinary moments into innovation opportunities." },
      { universal: "I keep things grounded when the world feels chaotic.", linkedin: "I provide stability and security through practical approaches that help others navigate challenges." },
      { universal: "I build understanding between different perspectives.", linkedin: "I excel at finding common ground and facilitating conversations between diverse viewpoints." },
      { universal: "I create lasting value through steady effort.", linkedin: "I take pride in enduring creations built through consistent, integrity-driven work." },
      { universal: "I find wonder in the everyday journey.", linkedin: "I approach life with curiosity and optimism, embracing new experiences with flexibility." },
      { universal: "I help others see their own potential.", linkedin: "I empower growth through clarity and encouragement, helping people recognize their strengths." },
      { universal: "I turn conflict into collaboration.", linkedin: "I resolve disagreements through tact and collaboration, fostering teamwork and moving groups forward." }
    ];
    function hash(str) {
      let h = 0;
      for (let i = 0; i < str.length; i++) {
        h = (h << 5) - h + str.charCodeAt(i);
        h = h & h;
      }
      return h;
    }
    const inputKey = JSON.stringify(input);
    const index = Math.abs(hash(inputKey)) % archetypes.length;
    const main = archetypes[index];
    const friendGroup = archetypes[(index + 1) % archetypes.length];
    const shadow = archetypes[(index + 2) % archetypes.length];
    return {
      ...main,
      reward_cards: {
        friend_group_ego: friendGroup,
        shadow_ego: shadow
      },
      bio_line: bioLines[index]
    };
  }

  // client.js
  var CONFIG = {
    "questions": [
      "What's the one thing you're most proud to be known for?",
      "When you feel completely at ease, what do you do?",
      "What's a quality you have that feels like a superpower?",
      "What's the most unexpected strength about you?",
      "What's the first thing people notice about you?"
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
    "intro": "Free, forever. Answer 5 quick, revealing questions and meet your Alter Ego.",
    "share": {
      "url": "https://macleanmarket.com/alterego",
      "cta": "What's your Alter Ego?"
    },
    "marketLink": {
      "label": "More from MacLean Market",
      "url": "https://macleanmarket.com"
    },
    "rewardCards": [
      {
        "id": "friend_group_ego",
        "label": "Friend Group Ego",
        "kind": "card",
        "lens": "friend_group"
      },
      {
        "id": "shadow_ego",
        "label": "Shadow Ego",
        "kind": "card",
        "lens": "shadow"
      }
    ],
    "bioLine": {
      "enabled": true,
      "linkedin": true
    }
  };
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
    const form = $("form", { "data-aios-form": "1", class: "aios-quiz", style: { display: "flex", flexDirection: "column", gap: sp(4), maxWidth: "40rem", margin: "0 auto" } });
    const inputs = [];
    if (CONFIG.askName) {
      const wrap = $("label", { class: "aios-q" });
      wrap.appendChild($("span", { class: "aios-q-text" }, ["Your name (optional)"]));
      const inp = $("input", { type: "text", name: "aios-name", "data-aios-name": "1", autocomplete: "given-name", class: "aios-input", placeholder: "First name" });
      wrap.appendChild(inp);
      form.appendChild(wrap);
      form._name = inp;
    }
    CONFIG.questions.forEach((q, i) => {
      const wrap = $("label", { class: "aios-q" });
      wrap.appendChild($("span", { class: "aios-q-text" }, [i + 1 + ". " + q]));
      const inp = $("input", { type: "text", name: "aios-q" + i, "data-aios-q": String(i), required: "true", class: "aios-input", placeholder: "Type your answer\u2026" });
      wrap.appendChild(inp);
      form.appendChild(wrap);
      inputs.push(inp);
    });
    const btn = $("button", { type: "submit", "data-aios-submit": "1", class: "aios-submit" }, ["See my result \u2192"]);
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
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function(c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var TC_GRADS = [
    "linear-gradient(135deg,#6a11cb,#2575fc)",
    "linear-gradient(135deg,#8e2de2,#4a00e0)",
    "linear-gradient(135deg,#0f2027,#2c5364)",
    "linear-gradient(135deg,#11998e,#38ef7d)",
    "linear-gradient(135deg,#c31432,#240b36)",
    "linear-gradient(135deg,#f7971e,#c1440e)",
    "linear-gradient(135deg,#1a2980,#26d0ce)",
    "linear-gradient(135deg,#ee0979,#ff6a00)"
  ];
  function tcGrad(seed) {
    var s = 0, str = String(seed || "");
    for (var i = 0; i < str.length; i++) s = (s + str.charCodeAt(i)) % 9973;
    return TC_GRADS[s % TC_GRADS.length];
  }
  var TEMPLATED_CARD_CSS = ".aios-tc{position:relative;max-width:34rem;margin:0 auto;padding:2rem 1.75rem;border-radius:18px;color:#fff;font-family:inherit;box-shadow:0 18px 44px -14px rgba(0,0,0,.5);overflow:hidden}.aios-tc::before{content:'';position:absolute;inset:0;background:radial-gradient(130% 80% at 100% 0,rgba(255,255,255,.20),transparent 60%);pointer-events:none}.aios-tc>*{position:relative}.aios-tc-kicker{text-transform:uppercase;letter-spacing:.18em;font-size:.7rem;opacity:.82;margin:0 0 .55rem}.aios-tc-headline{font-size:2rem;line-height:1.1;font-weight:800;margin:0 0 .4rem;text-shadow:0 2px 14px rgba(0,0,0,.28)}.aios-tc-sub{font-size:1.1rem;font-style:italic;opacity:.95;margin:0 0 1.3rem;line-height:1.4}.aios-tc-sec{margin:0 0 1rem}.aios-tc-label{text-transform:uppercase;letter-spacing:.12em;font-size:.64rem;opacity:.72;margin:0 0 .3rem}.aios-tc-val{font-size:1rem;line-height:1.5;margin:0;white-space:pre-wrap}.aios-tc-chips{display:flex;flex-wrap:wrap;gap:.4rem;margin:.15rem 0 0;padding:0;list-style:none}.aios-tc-chip{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.30);border-radius:999px;padding:.28rem .72rem;font-size:.85rem}.aios-tc-foot{margin:1.4rem 0 0;padding-top:1rem;border-top:1px solid rgba(255,255,255,.22);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;opacity:.78}";
  function tcSection(label, value) {
    if (value == null || value === "") return "";
    if (Array.isArray(value)) {
      var items = value.filter(function(v) {
        return v != null && v !== "";
      });
      if (!items.length) return "";
      var chips = items.map(function(v) {
        return '<li class="aios-tc-chip">' + esc(String(v)) + "</li>";
      }).join("");
      return '<div class="aios-tc-sec"><p class="aios-tc-label">' + esc(label) + '</p><ul class="aios-tc-chips">' + chips + "</ul></div>";
    }
    return '<div class="aios-tc-sec"><p class="aios-tc-label">' + esc(label) + '</p><p class="aios-tc-val">' + esc(String(value)) + "</p></div>";
  }
  function renderTemplatedCard(reading, fieldsOpt, kicker) {
    reading = reading || {};
    var fields = fieldsOpt && fieldsOpt.length ? fieldsOpt.filter(function(f) {
      return fieldPresent(reading, f);
    }) : pickFields(reading);
    var headField = fields[0];
    var headline = headField ? reading[headField] : CONFIG.productName || "Your result";
    if (Array.isArray(headline)) headline = headline.join(", ");
    var rest = fields.slice(1);
    var subField = null;
    for (var i = 0; i < rest.length; i++) {
      var v = reading[rest[i]];
      if (typeof v === "string" && v.length > 0 && v.length <= 140) {
        subField = rest[i];
        break;
      }
    }
    var secHtml = "";
    for (var j = 0; j < rest.length; j++) {
      if (rest[j] === subField) continue;
      secHtml += tcSection(fieldLabel(rest[j]), reading[rest[j]]);
    }
    var kick = kicker || CONFIG.productName;
    var grad = tcGrad((kicker ? kicker + "|" : "") + headline);
    var html = '<article class="aios-tc" data-aios-templated-card="1" style="background:' + grad + '">' + (kick ? '<p class="aios-tc-kicker">' + esc(kick) + "</p>" : "") + '<h2 class="aios-tc-headline">' + esc(String(headline)) + "</h2>" + (subField ? '<p class="aios-tc-sub">' + esc(String(reading[subField])) + "</p>" : "") + '<div class="aios-tc-body">' + secHtml + "</div></article>";
    return { html, css: TEMPLATED_CARD_CSS };
  }
  function fieldPresent(reading, k) {
    const v = reading[k];
    return v != null && v !== "" && !(Array.isArray(v) && !v.length);
  }
  function pickFields(reading) {
    reading = reading || {};
    const rf = CONFIG.resultFields && CONFIG.resultFields.length ? CONFIG.resultFields.filter((k) => fieldPresent(reading, k)) : [];
    if (rf.length) return rf;
    return Object.keys(reading).filter((k) => fieldPresent(reading, k));
  }
  function cardHeadline(reading) {
    const f = pickFields(reading);
    const v = reading[f[0]];
    return Array.isArray(v) ? v.join(", ") : v == null ? "" : String(v);
  }
  function cardEssence(reading) {
    const f = pickFields(reading);
    for (let i = 1; i < f.length; i++) {
      const v = reading[f[i]];
      if (typeof v === "string" && v.length > 0 && v.length <= 160) return v;
    }
    return "";
  }
  function shareCaption(reading, title) {
    const head = title || cardHeadline(reading);
    const ess = cardEssence(reading);
    const text = ess ? head + " \u2014 " + ess : head;
    const url = CONFIG.share && CONFIG.share.url ? CONFIG.share.url : "";
    return url ? text + "\n\n" + url : text;
  }
  async function doShare(caption) {
    try {
      if (navigator.share) {
        await navigator.share({ text: caption });
        return "shared";
      }
    } catch (e) {
      if (e && e.name === "AbortError") return "cancelled";
    }
    try {
      await navigator.clipboard.writeText(caption);
      return "copied";
    } catch (e) {
      return "failed";
    }
  }
  function renderReading(reading, fields) {
    const wrap = $("div", { "data-aios-fields": "full", "data-aios-reading": "1", class: "aios-reading" });
    for (const f of fields) {
      const v = reading[f];
      if (v == null || v === "") continue;
      const sec = $("div", { class: "aios-reading-sec" });
      sec.appendChild($("p", { class: "aios-reading-label" }, [fieldLabel(f)]));
      if (Array.isArray(v)) {
        const ul = $("ul", { class: "aios-reading-chips" });
        for (const item of v) {
          if (item != null && item !== "") ul.appendChild($("li", { class: "aios-reading-chip" }, [String(item)]));
        }
        sec.appendChild(ul);
      } else {
        sec.appendChild($("p", { class: "aios-reading-val" }, [String(v)]));
      }
      wrap.appendChild(sec);
    }
    return wrap;
  }
  function renderMarketLink() {
    if (!CONFIG.marketLink || !CONFIG.marketLink.url) return null;
    const wrap = $("div", { class: "aios-market-wrap" });
    wrap.appendChild($("a", { class: "aios-market-link", href: CONFIG.marketLink.url, target: "_blank", rel: "noreferrer" }, [
      (CONFIG.marketLink.label || "More from MacLean Market") + " \u2192"
    ]));
    return wrap;
  }
  function perCardBio(reading, opts) {
    const b = opts && opts.mainBio != null ? opts.mainBio : reading && reading.bio_line;
    if (b == null || b === "") return null;
    return bioLineData({ bio_line: b });
  }
  function inCardBioRow(label, text) {
    const row = $("div", { class: "aios-incard-bio", "data-aios-bioline": "1" });
    row.appendChild($("p", { class: "aios-incard-biolabel" }, [label]));
    row.appendChild($("p", { class: "aios-incard-biotext", "data-aios-bio-text": "1" }, [text]));
    const btn = $("button", { type: "button", "data-aios-copy": "1", class: "aios-incard-copy" }, ["Copy"]);
    const note = $("span", { "aria-live": "polite", class: "aios-incard-copynote" });
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(text);
        note.textContent = "Copied!";
      } catch (e) {
        note.textContent = "Select to copy.";
      }
    });
    const bar = $("div", { class: "aios-incard-copyrow" });
    bar.appendChild(btn);
    bar.appendChild(note);
    row.appendChild(bar);
    return row;
  }
  function buildCardActions(reading, opts) {
    opts = opts || {};
    const bar = $("div", { class: "aios-tc-actions", "data-no-share": "1" });
    const label = opts.label || CONFIG.productName || "card";
    const btn = $("button", { type: "button", "data-aios-share-btn": "1", class: "aios-incard-share" }, ["Share your " + label]);
    const note = $("span", { "aria-live": "polite", class: "aios-incard-note" });
    btn.addEventListener("click", async () => {
      const cap = shareCaption(reading, cardHeadline(reading));
      const r = await doShare(cap);
      note.textContent = r === "copied" ? "Caption copied." : r === "shared" ? "Shared!" : r === "cancelled" ? "" : cap;
    });
    const shareRow = $("div", { class: "aios-incard-sharerow" });
    shareRow.appendChild(btn);
    shareRow.appendChild(note);
    bar.appendChild(shareRow);
    const bio = perCardBio(reading, opts);
    if (bio && bio.universal) {
      bar.appendChild(inCardBioRow("Add this to any bio", bio.universal));
    }
    if (CONFIG.marketLink && CONFIG.marketLink.url) {
      bar.appendChild($("a", { class: "aios-incard-market", "data-aios-market": "1", href: CONFIG.marketLink.url, target: "_blank", rel: "noreferrer" }, [
        (CONFIG.marketLink.label || "More from MacLean Market") + " \u2192"
      ]));
    }
    return bar;
  }
  function buildCardElement(reading, opts) {
    opts = opts || {};
    const rewardFields = opts.reward ? Object.keys(reading).filter((k) => k !== "bio_line" && k !== "reward_cards") : null;
    const tc = renderTemplatedCard(reading, rewardFields, opts.label || CONFIG.productName);
    const holder = $("div", { style: { display: "contents" } });
    holder.appendChild($("style", { html: tc.css }));
    const cardDiv = $("div", { "data-aios-card": "1", "data-aios-card-source": "templated", style: { maxWidth: "100%", overflowX: "auto" }, html: tc.html });
    if (opts.reward) cardDiv.setAttribute("data-aios-reward-card", "1");
    holder.appendChild(cardDiv);
    const article = cardDiv.querySelector(".aios-tc");
    if (article && CONFIG.hasCard) article.appendChild(buildCardActions(reading, opts));
    return holder;
  }
  function rewardCardData(reading, rc) {
    const bag = reading && reading.reward_cards;
    if (bag && bag[rc.id] && typeof bag[rc.id] === "object") return bag[rc.id];
    if (reading && reading[rc.id] && typeof reading[rc.id] === "object") return reading[rc.id];
    return null;
  }
  function renderRewardCards(reading, into) {
    let n = 0;
    const mainHead = String(cardHeadline(reading) || "").trim().toLowerCase();
    for (const rc of CONFIG.rewardCards || []) {
      const data = rewardCardData(reading, rc);
      const sec = $("div", { "data-aios-reward": rc.id, style: { display: "flex", flexDirection: "column", gap: sp(2) } });
      if (!data) {
        sec.appendChild($("p", { style: { fontSize: "0.85rem", opacity: "0.65", margin: "0" } }, [(rc.label || fieldLabel(rc.id)) + ": not produced for this build yet."]));
        sec.setAttribute("data-aios-reward-missing", "1");
      } else {
        const head = String(cardHeadline(data) || "").trim().toLowerCase();
        if (head && head === mainHead) sec.setAttribute("data-aios-reward-redundant", "1");
        sec.appendChild(buildCardElement(data, { label: rc.label || fieldLabel(rc.id), reward: true }));
        n++;
      }
      into.appendChild(sec);
    }
    return n;
  }
  function sanitizeBio(s) {
    var t = String(s || "").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\uFE0F]/gu, "").replace(/\s+/g, " ").trim();
    if (t.length > 150) t = t.slice(0, 147).replace(/\s+\S*$/, "") + "\u2026";
    return t;
  }
  function bioLineData(reading) {
    var b = reading && reading.bio_line;
    if (!b) return null;
    if (typeof b === "string") return { universal: sanitizeBio(b) };
    if (typeof b === "object") return { universal: sanitizeBio(b.universal || b.line || ""), linkedin: b.linkedin ? sanitizeBio(b.linkedin) : "" };
    return null;
  }
  function captureTeaseText() {
    const labels = (CONFIG.rewardCards || []).map((rc) => rc.label || fieldLabel(rc.id)).filter(Boolean);
    if (!labels.length) return "Enter your email to unlock your full result.";
    const joined = labels.length === 1 ? labels[0] : labels.slice(0, -1).join(", ") + " and " + labels[labels.length - 1];
    return "Enter your email to unlock your " + joined + ".";
  }
  function renderResult(reading, ctx) {
    const r = clear();
    if (!r) return;
    r.setAttribute("data-screen", "result");
    const box = $("div", { "data-aios-result": "1", style: { maxWidth: "40rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: sp(4) } });
    if (CONFIG.hasCard) {
      box.appendChild(buildCardElement(reading, { label: CONFIG.productName, mainBio: reading.bio_line }));
    } else {
      box.appendChild(renderFields(reading, CONFIG.resultFields.slice(0, 3), "teaser"));
    }
    if (CONFIG.capture.enabled) {
      box.appendChild(renderCapture(reading, ctx));
    } else if (!CONFIG.hasCard) {
      box.appendChild(renderReading(reading, pickFields(reading)));
      box.setAttribute("data-aios-full", "1");
    } else {
      box.setAttribute("data-aios-full", "1");
    }
    const ml = renderMarketLink();
    if (ml) box.appendChild(ml);
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
    wrap.appendChild($("p", { class: "aios-tease", "data-aios-tease": "1" }, [captureTeaseText()]));
    const email = $("input", { type: "email", "data-aios-email": "1", placeholder: "you@example.com", required: "true", style: { padding: sp(3), fontSize: "1rem", border: "1px solid var(--aios-color-border,#ccc)", borderRadius: "var(--aios-radius-md,6px)", boxSizing: "border-box", width: "100%", maxWidth: "100%" } });
    const unlockLabel = (CONFIG.rewardCards || []).length ? "Unlock my bonus cards" : "Unlock my full result";
    const btn = $("button", { type: "button", "data-aios-capture-submit": "1", style: { padding: sp(3), border: "0", borderRadius: "var(--aios-radius-md,6px)", background: "var(--aios-color-accent,#2563eb)", color: "#fff", cursor: "pointer", fontWeight: "700" } }, [unlockLabel]);
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
        const res = await fetch("capture", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: addr, first_name: ctx && ctx.firstName || "", archetype, tags })
        });
        if (!res.ok) throw new Error("capture failed");
        const box = wrap.parentNode;
        wrap.remove();
        const mlEl = box.querySelector(".aios-market-wrap");
        const insert = (el) => {
          if (mlEl) box.insertBefore(el, mlEl);
          else box.appendChild(el);
        };
        if ((CONFIG.rewardCards || []).length) {
          const rewardWrap = $("div", { "data-aios-rewards": "1", style: { display: "flex", flexDirection: "column", gap: sp(4) } });
          renderRewardCards(reading, rewardWrap);
          insert(rewardWrap);
        }
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
    style.textContent = "html,body{margin:0;max-width:100%;overflow-x:hidden}body{color:#1b2333}#aios-app-root{box-sizing:border-box;max-width:100%;padding:var(--aios-space-4,1rem);color:#1b2333}#aios-app-root h1,#aios-app-root h2,#aios-app-root h3,#aios-app-root label,#aios-app-root p,#aios-app-root li,#aios-app-root strong,#aios-app-root span{color:#1b2333}#aios-app-root .aios-tc,#aios-app-root .aios-tc *{color:#fff}#aios-app-root .aios-tc .aios-incard-share{color:#1b2333}#aios-app-root *{max-width:100%;box-sizing:border-box}#aios-app-root img{height:auto}.aios-q{display:flex;flex-direction:column;gap:.45rem}.aios-q-text{font-size:1.15rem;font-weight:700;line-height:1.35;color:#141b2b}.aios-input{padding:.85rem 1rem;font-size:1rem;border:1.5px solid #cfd6e6;border-radius:12px;background:#fff;color:#141b2b;box-sizing:border-box;width:100%;max-width:100%;transition:border-color .15s,box-shadow .15s}.aios-input::placeholder{color:#9aa4b8}.aios-input:focus{outline:none;border-color:#6a8bff;box-shadow:0 0 0 4px rgba(106,139,255,.18)}.aios-submit{margin-top:.4rem;padding:.95rem 1.4rem;font-size:1.05rem;font-weight:800;letter-spacing:.2px;border:0;border-radius:12px;color:#fff;background:linear-gradient(135deg,#7c3aed,#2563eb);cursor:pointer;box-shadow:0 12px 26px -10px rgba(37,99,235,.6)}.aios-submit:hover{filter:brightness(1.06)}.aios-tc-actions{margin-top:1.15rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.28);display:flex;flex-direction:column;gap:.75rem}.aios-incard-sharerow{display:flex;flex-direction:column;gap:.3rem}.aios-incard-share{width:100%;padding:.8rem 1rem;border:0;border-radius:11px;font-size:1rem;font-weight:800;letter-spacing:.2px;cursor:pointer;color:#1b2333;background:#fff;box-shadow:0 8px 20px -8px rgba(0,0,0,.45)}.aios-incard-share:hover{filter:brightness(.95)}.aios-incard-note{font-size:.74rem;opacity:.85;text-align:center;min-height:.9em;white-space:pre-wrap}.aios-incard-bio{display:flex;flex-direction:column;gap:.28rem}.aios-incard-biolabel{margin:0;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;opacity:.8}.aios-incard-biotext{margin:0;font-size:.92rem;line-height:1.4}.aios-incard-copyrow{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}.aios-incard-copy{padding:.32rem .8rem;border-radius:8px;border:1px solid rgba(255,255,255,.6);background:rgba(255,255,255,.16);color:#fff;font-size:.78rem;font-weight:700;cursor:pointer}.aios-incard-copy:hover{background:rgba(255,255,255,.3)}.aios-incard-copynote{font-size:.72rem;opacity:.85}.aios-incard-market{display:inline-block;font-size:.72rem;opacity:.82;color:#fff;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.4);align-self:flex-start}.aios-incard-market:hover{opacity:1}.aios-reading{display:flex;flex-direction:column;gap:1rem;margin-top:.3rem;padding:1.15rem 1.2rem;border-radius:14px;background:rgba(30,40,70,.05);border:1px solid rgba(30,40,70,.12)}.aios-reading-label{margin:0 0 .3rem;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;opacity:.6}.aios-reading-val{margin:0;font-size:1rem;line-height:1.55;white-space:pre-wrap}.aios-reading-chips{display:flex;flex-wrap:wrap;gap:.4rem;margin:.1rem 0 0;padding:0;list-style:none}.aios-reading-chip{padding:.28rem .7rem;border-radius:999px;font-size:.85rem;background:rgba(30,40,70,.08);border:1px solid rgba(30,40,70,.15)}.aios-market-wrap{text-align:center;margin-top:.3rem}.aios-market-link{display:inline-block;font-size:.8rem;opacity:.6;text-decoration:none;color:inherit;border-bottom:1px solid transparent}.aios-market-link:hover{opacity:.95;border-bottom-color:currentColor}.aios-tease{margin:0 0 .55rem;font-size:.98rem;font-weight:600;line-height:1.45}@media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}";
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
