(() => {
  // capability.mjs
  var _main = /* @__PURE__ */ (() => {
    function runCapability2(input) {
      const baseArchetypes = [
        {
          archetype_name: "The Curator",
          one_line_essence: "You're the one who gathers and shares the most meaningful stories.",
          visual_metaphor: "A library with a single, glowing book on a pedestal.",
          strengths: ["Attentive to detail", "Curates with care", "Creates safe spaces for sharing"],
          shadow_traits: ["Overly protective of collections", "Hesitates to share personal stories"],
          motto_chapter_themeword: "Curate",
          narrative: "You find joy in preserving and presenting the essence of experiences. Your ability to highlight the most resonant moments helps others see their own stories more clearly. However, you sometimes hold back your own narrative to keep the focus on others."
        },
        {
          archetype_name: "The Bridge Builder",
          one_line_essence: "You're the one who connects the dots between people and ideas.",
          visual_metaphor: "A stone bridge spanning a deep canyon, with people walking across it.",
          strengths: ["Active listener", "Clear communicator", "Patient problem-solver"],
          shadow_traits: ["Overly cautious in new situations", "Takes on too much to avoid conflict"],
          motto_chapter_themeword: "Bridge",
          narrative: "You thrive when you can bring together diverse perspectives. Your strength lies in making complex ideas accessible, but you sometimes hesitate to take bold steps for fear of disrupting the harmony you've built."
        },
        {
          archetype_name: "The Quiet Innovator",
          one_line_essence: "You're the one who finds elegant solutions in the spaces between the noise.",
          visual_metaphor: "A single, perfectly balanced stone in a flowing stream.",
          strengths: ["Observant", "Resourceful", "Thoughtful"],
          shadow_traits: ["Takes too long to act", "Avoids speaking up in group settings"],
          motto_chapter_themeword: "Flow",
          narrative: "You see patterns and opportunities where others see chaos. Your quiet nature allows you to notice subtle shifts and create solutions that feel effortless. But you sometimes wait too long to share your ideas, fearing they might not be perfect."
        },
        {
          archetype_name: "The Compassionate Strategist",
          one_line_essence: "You're the one who plans with heart, ensuring no one is left behind.",
          visual_metaphor: "A map with multiple paths, each marked with a heart symbol.",
          strengths: ["Empathetic planner", "Inclusive", "Adaptable"],
          shadow_traits: ["Overly focused on others' needs", "Struggles to say no"],
          motto_chapter_themeword: "Heart",
          narrative: "You design paths that consider the well-being of everyone involved. Your strategic thinking is deeply rooted in care, making your plans both effective and kind. However, you sometimes neglect your own needs to keep the team moving forward."
        },
        {
          archetype_name: "The Unflappable Anchor",
          one_line_essence: "You're the one who keeps things steady when the world feels chaotic.",
          visual_metaphor: "A lighthouse standing strong against stormy waves.",
          strengths: ["Calm under pressure", "Reliable", "Grounded"],
          shadow_traits: ["Resists change", "Takes on too much responsibility"],
          motto_chapter_themeword: "Anchor",
          narrative: "You provide stability in uncertain times, helping others feel secure. Your calm presence is a beacon for those around you. But you sometimes hold onto old ways too tightly, even when change is needed."
        },
        {
          archetype_name: "The Thoughtful Connector",
          one_line_essence: "You're the one who weaves together people and ideas into something new.",
          visual_metaphor: "A tapestry with threads of different colors and textures.",
          strengths: ["Sees connections", "Generous", "Patient"],
          shadow_traits: ["Overwhelmed by too many connections", "Takes on too many projects"],
          motto_chapter_themeword: "Weave",
          narrative: "You have a gift for seeing how different elements fit together. Your connections often lead to unexpected and valuable outcomes. However, you sometimes take on too many projects at once, spreading yourself too thin."
        },
        {
          archetype_name: "The Patient Guide",
          one_line_essence: "You're the one who walks alongside others, helping them find their own path.",
          visual_metaphor: "A winding path through a forest, with a gentle guide at the front.",
          strengths: ["Supportive", "Encouraging", "Attentive"],
          shadow_traits: ["Waits too long to offer help", "Avoids direct feedback"],
          motto_chapter_themeword: "Path",
          narrative: "You believe in the journey as much as the destination. Your patience and encouragement help others build confidence. But you sometimes wait too long to offer direct guidance, leaving others to figure things out on their own."
        },
        {
          archetype_name: "The Insightful Listener",
          one_line_essence: "You're the one who hears what's unsaid and helps others understand themselves.",
          visual_metaphor: "A mirror reflecting a person's inner thoughts.",
          strengths: ["Deeply empathetic", "Perceptive", "Non-judgmental"],
          shadow_traits: ["Takes in too much emotional weight", "Struggles to set boundaries"],
          motto_chapter_themeword: "Reflect",
          narrative: "You create space for others to be heard and understood. Your ability to pick up on subtle cues helps people gain clarity. However, you sometimes absorb others' emotions without taking care of your own needs."
        },
        {
          archetype_name: "The Calm Mediator",
          one_line_essence: "You're the one who turns conflict into collaboration.",
          visual_metaphor: "A calm pond reflecting two trees on opposite banks.",
          strengths: ["Peaceful", "Fair", "Solution-oriented"],
          shadow_traits: ["Avoids conflict at all costs", "Takes on the role of peacemaker too often"],
          motto_chapter_themeword: "Pond",
          narrative: "You have a natural ability to ease tension and find common ground. Your calm demeanor helps others see beyond their differences. But you sometimes avoid necessary confrontations to keep the peace."
        },
        {
          archetype_name: "The Steady Hand",
          one_line_essence: "You're the one who ensures the work gets done with care and precision.",
          visual_metaphor: "A hand carefully placing a single, perfect tile in a mosaic.",
          strengths: ["Detail-oriented", "Reliable", "Thoughtful"],
          shadow_traits: ["Perfectionist", "Takes too long to make decisions"],
          motto_chapter_themeword: "Mosaic",
          narrative: "You take pride in the quality of your work and the care you put into every detail. Your precision ensures that the final product is cohesive and beautiful. However, you sometimes get stuck in the details, delaying the completion of projects."
        }
      ];
      const contexts = [
        "in the mountains",
        "by the sea",
        "in the city",
        "in the forest",
        "in the desert",
        "in the countryside",
        "in the winter",
        "in the summer",
        "in the rain",
        "in the sunshine"
      ];
      const archetypeLibrary = [];
      for (let i = 0; i < baseArchetypes.length; i++) {
        for (let j = 0; j < contexts.length; j++) {
          const base = baseArchetypes[i];
          const context = contexts[j];
          archetypeLibrary.push({
            archetype_name: base.archetype_name,
            one_line_essence: base.one_line_essence,
            visual_metaphor: `${base.visual_metaphor} ${context}`,
            strengths: [...base.strengths],
            shadow_traits: [...base.shadow_traits],
            motto_chapter_themeword: base.motto_chapter_themeword,
            narrative: `${base.narrative} This is especially true ${context}.`
          });
        }
      }
      function hash(str) {
        let h = 5381;
        for (let i = 0; i < str.length; i++) {
          h = (h << 5) + h ^ str.charCodeAt(i);
        }
        return h;
      }
      const inputStr = JSON.stringify(input);
      const hashValue = hash(inputStr);
      const index = Math.abs(hashValue) % archetypeLibrary.length;
      return archetypeLibrary[index];
    }
    return { runCapability: runCapability2 };
  })();
  var _rc_friend_group_ego = /* @__PURE__ */ (() => {
    const library = [
      {
        archetype_name: "The Connector",
        one_line_essence: "You're the glue that holds the group together, always making sure everyone feels included.",
        visual_metaphor: "A spider weaving a web of connections between friends",
        strengths: ["Empathetic", "Organized", "Patient"],
        shadow_traits: ["Overwhelmed by too many connections", "Avoids conflict to keep harmony"],
        motto_chapter_themeword: "Harmony",
        narrative: "You're the one who remembers everyone's favorite snack and makes sure no one is left out of the group chat. You're the calm in the storm when plans fall apart, and you always know how to get the group back on track.",
        bio_template: "I'm the one who always knows who needs a coffee run and who's having a tough day, [firstName]. I make sure the group stays connected, even when life gets busy, and I love creating moments where everyone feels seen and heard."
      },
      {
        archetype_name: "The Jester",
        one_line_essence: "You're the life of the party, turning ordinary moments into unforgettable memories with your humor.",
        visual_metaphor: "A clown juggling laughter and inside jokes",
        strengths: ["Witty", "Adaptable", "Cheerful"],
        shadow_traits: ["Uses humor to avoid serious conversations", "Can be insensitive when joking"],
        motto_chapter_themeword: "Joy",
        narrative: "You're the one who cracks the first joke at a gathering and turns a boring meeting into a comedy show. You have a knack for making everyone laugh, even when they're stressed, and you're always ready with a funny story to lighten the mood.",
        bio_template: "I'm the one who turns every gathering into a comedy show, cracking jokes that make everyone laugh until they cry, [firstName]. I love using humor to bring people together and create memories that last long after the party ends."
      },
      {
        archetype_name: "The Mediator",
        one_line_essence: "You're the calm voice in the chaos, helping friends navigate disagreements with grace and understanding.",
        visual_metaphor: "A bridge connecting two sides of a river",
        strengths: ["Patient", "Fair", "Good listener"],
        shadow_traits: ["Takes on too much emotional labor", "Avoids taking sides"],
        motto_chapter_themeword: "Balance",
        narrative: "You're the one who steps in when tensions rise, helping friends see each other's perspectives. You're the reason arguments don't turn into fights, and you always know how to find common ground.",
        bio_template: "I'm the one who steps in when things get heated, helping friends see each other's side without taking sides, [firstName]. I love creating space for everyone to be heard and understood, making sure no one feels left out."
      }
    ];
    function hashArray(arr) {
      let h = 0;
      for (const s of arr) {
        for (const c of s) {
          h = (h * 131 + c.charCodeAt(0)) % 1e6;
        }
      }
      return h;
    }
    function rewardCard(input) {
      const index = hashArray(input.answers) % 3;
      const selected = library[index];
      const bio_line = selected.bio_template.replace("[firstName]", input.firstName);
      return {
        archetype_name: selected.archetype_name,
        one_line_essence: selected.one_line_essence,
        visual_metaphor: selected.visual_metaphor,
        strengths: selected.strengths,
        shadow_traits: selected.shadow_traits,
        motto_chapter_themeword: selected.motto_chapter_themeword,
        narrative: selected.narrative,
        bio_line
      };
    }
    return { rewardCard };
  })();
  var _rc_shadow_ego = /* @__PURE__ */ (() => {
    function rewardCard(input) {
      const readings = [
        {
          archetype_name: "The Unseen Guardian",
          one_line_essence: "You protect without being seen, offering safety in the quiet spaces.",
          visual_metaphor: "A shadow that moves with the wind, always just behind the light.",
          strengths: ["Quiet presence", "Deep empathy", "Unwavering support"],
          shadow_traits: ["Overlooks their own needs", "Hides behind others' strengths", "Fears being noticed"],
          motto_chapter_themeword: "Guardian",
          narrative: "You are the calm in the storm, the steady hand that holds the line when others falter. Your strength lies in the unseen, in the spaces between the words, where you offer a safe harbor without asking for recognition.",
          bio_line: `I am the quiet strength that holds the space for you to be seen, ${input.firstName}. My purpose is to offer comfort without asking for recognition, and I find joy in the unspoken moments.`
        },
        {
          archetype_name: "The Quiet Catalyst",
          one_line_essence: "You spark change without drawing attention, turning small moments into meaningful shifts.",
          visual_metaphor: "A single drop of water that creates ripples across a still pond.",
          strengths: ["Subtle influence", "Patient observation", "Gentle persuasion"],
          shadow_traits: ["Underestimates their impact", "Waits for permission to act", "Believes they are insignificant"],
          motto_chapter_themeword: "Catalyst",
          narrative: "You are the quiet force that moves things forward, making the world a little better without ever claiming credit. Your influence is felt in the small, consistent actions that build toward something greater.",
          bio_line: `I am the gentle spark that ignites change without seeking the spotlight, ${input.firstName}. My strength lies in the quiet moments where I help others find their own voice and direction.`
        },
        {
          archetype_name: "The Unspoken Truth",
          one_line_essence: "You see the hidden patterns and speak the words others avoid, offering clarity in the chaos.",
          visual_metaphor: "A mirror reflecting the truth that everyone else is too afraid to face.",
          strengths: ["Clear insight", "Courage to speak", "Perceptive listening"],
          shadow_traits: ["Overwhelmed by others' emotions", "Avoids conflict to maintain peace", "Believes truth is too heavy"],
          motto_chapter_themeword: "Truth",
          narrative: "You are the one who sees the whole picture, the hidden connections that others miss. Your words cut through the noise, offering a clarity that can be both healing and unsettling.",
          bio_line: `I am the one who sees the hidden patterns and speaks the words others avoid, ${input.firstName}. My voice brings clarity to the chaos, even when it feels too heavy to carry.`
        }
      ];
      const key = input.answers.join("|");
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash * 31 + key.charCodeAt(i)) % 1e6;
      }
      const index = hash % 3;
      return readings[index];
    }
    return { rewardCard };
  })();
  var _bio = /* @__PURE__ */ (() => {
    function bioLine(input) {
      const candidates = [
        [
          "I build scalable web applications with a focus on user experience.",
          "I love collaborating with teams to solve complex problems."
        ],
        [
          "I create intuitive user interfaces that delight users and drive engagement.",
          "I thrive on turning abstract ideas into beautiful, functional designs."
        ],
        [
          "I analyze complex datasets to uncover actionable insights and drive business decisions.",
          "I develop machine learning models that predict trends and optimize outcomes."
        ]
      ];
      const inputWords = /* @__PURE__ */ new Set();
      for (const ans of input.answers) {
        const words = ans.toLowerCase().match(/\w+/g) || [];
        for (const word of words) {
          inputWords.add(word);
        }
      }
      let bestScore = -1;
      let bestCandidate = candidates[0];
      for (const candidate of candidates) {
        const text = candidate[0] + " " + candidate[1];
        const candidateWords = /* @__PURE__ */ new Set();
        const words = text.toLowerCase().match(/\w+/g) || [];
        for (const word of words) {
          candidateWords.add(word);
        }
        let score = 0;
        for (const word of candidateWords) {
          if (inputWords.has(word)) {
            score++;
          }
        }
        if (score > bestScore) {
          bestScore = score;
          bestCandidate = candidate;
        }
      }
      return bestCandidate[0] + " " + bestCandidate[1];
    }
    return { bioLine };
  })();
  function runCapability(input) {
    const _out = Object.assign({}, _main.runCapability(input));
    const reward_cards = {};
    reward_cards["friend_group_ego"] = _rc_friend_group_ego.rewardCard(input);
    reward_cards["shadow_ego"] = _rc_shadow_ego.rewardCard(input);
    _out.reward_cards = reward_cards;
    _out.bio_line = _bio.bioLine(input);
    return _out;
  }

  // client.js
  var CONFIG = {
    "questions": [
      "What's your most authentic strength?",
      "What shadow trait do you acknowledge?",
      "What's a vivid metaphor for you?",
      "What word describes your current essence?",
      "What quality are you growing into?"
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
      "linkedin": false
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
  function shareParts(reading, title) {
    const head = title || cardHeadline(reading);
    const ess = cardEssence(reading);
    const text = ess ? head + " \u2014 " + ess : head;
    const url = CONFIG.share && CONFIG.share.url ? CONFIG.share.url : "";
    return { text, url };
  }
  function xIntentUrl(text, url) {
    let u = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text || "");
    if (url) u += "&url=" + encodeURIComponent(url);
    return u;
  }
  function linkedInIntentUrl(url) {
    return "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url || "");
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
    const note = $("span", { "aria-live": "polite", class: "aios-incard-note" });
    const btn = $("button", { type: "button", "data-aios-share-btn": "1", "data-aios-share-copy": "1", class: "aios-incard-share" }, ["Share your " + label]);
    btn.addEventListener("click", async () => {
      const cap = shareCaption(reading, cardHeadline(reading));
      try {
        await navigator.clipboard.writeText(cap);
        note.textContent = "Copied - paste it into your post.";
      } catch (e) {
        note.textContent = "Copy this: " + cap;
      }
    });
    const parts = shareParts(reading, cardHeadline(reading));
    const xLink = $("a", { class: "aios-incard-intent", "data-aios-share-x": "1", href: xIntentUrl(parts.text, parts.url), target: "_blank", rel: "noreferrer" }, ["Share to X"]);
    const liLink = $("a", { class: "aios-incard-intent", "data-aios-share-linkedin": "1", href: linkedInIntentUrl(parts.url || parts.text), target: "_blank", rel: "noreferrer" }, ["Share to LinkedIn"]);
    const intents = $("div", { class: "aios-incard-intents" });
    intents.appendChild(xLink);
    intents.appendChild(liLink);
    if (typeof navigator !== "undefined" && navigator.share) {
      const nativeBtn = $("button", { type: "button", "data-aios-share-native": "1", class: "aios-incard-intent" }, ["Share\u2026"]);
      nativeBtn.addEventListener("click", async () => {
        const cap = shareCaption(reading, cardHeadline(reading));
        const r = await doShare(cap);
        note.textContent = r === "shared" ? "Shared!" : r === "copied" ? "Copied - paste it into your post." : r === "cancelled" ? "" : cap;
      });
      intents.appendChild(nativeBtn);
    }
    const shareRow = $("div", { class: "aios-incard-sharerow" });
    shareRow.appendChild(btn);
    shareRow.appendChild(intents);
    bar.appendChild(shareRow);
    bar.appendChild(note);
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
    if (t.length > 280) t = t.slice(0, 277).replace(/\s+\S*$/, "") + "\u2026";
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
    style.textContent = "html,body{margin:0;max-width:100%;overflow-x:hidden}body{color:#1b2333}#aios-app-root{box-sizing:border-box;max-width:100%;padding:var(--aios-space-4,1rem);color:#1b2333}#aios-app-root h1,#aios-app-root h2,#aios-app-root h3,#aios-app-root label,#aios-app-root p,#aios-app-root li,#aios-app-root strong,#aios-app-root span{color:#1b2333}#aios-app-root .aios-tc,#aios-app-root .aios-tc *{color:#fff}#aios-app-root .aios-tc .aios-incard-share{color:#1b2333}#aios-app-root *{max-width:100%;box-sizing:border-box}#aios-app-root img{height:auto}.aios-q{display:flex;flex-direction:column;gap:.45rem}.aios-q-text{font-size:1.15rem;font-weight:700;line-height:1.35;color:#141b2b}.aios-input{padding:.85rem 1rem;font-size:1rem;border:1.5px solid #cfd6e6;border-radius:12px;background:#fff;color:#141b2b;box-sizing:border-box;width:100%;max-width:100%;transition:border-color .15s,box-shadow .15s}.aios-input::placeholder{color:#9aa4b8}.aios-input:focus{outline:none;border-color:#6a8bff;box-shadow:0 0 0 4px rgba(106,139,255,.18)}.aios-submit{margin-top:.4rem;padding:.95rem 1.4rem;font-size:1.05rem;font-weight:800;letter-spacing:.2px;border:0;border-radius:12px;color:#fff;background:linear-gradient(135deg,#7c3aed,#2563eb);cursor:pointer;box-shadow:0 12px 26px -10px rgba(37,99,235,.6)}.aios-submit:hover{filter:brightness(1.06)}.aios-tc-actions{margin-top:1.15rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.28);display:flex;flex-direction:column;gap:.75rem}.aios-incard-sharerow{display:flex;flex-direction:column;gap:.3rem}.aios-incard-share{width:100%;padding:.8rem 1rem;border:0;border-radius:11px;font-size:1rem;font-weight:800;letter-spacing:.2px;cursor:pointer;color:#1b2333;background:#fff;box-shadow:0 8px 20px -8px rgba(0,0,0,.45)}.aios-incard-share:hover{filter:brightness(.95)}.aios-incard-intents{display:flex;gap:.4rem;flex-wrap:wrap}.aios-incard-intent{flex:1 1 auto;text-align:center;padding:.5rem .7rem;border-radius:9px;border:1px solid rgba(255,255,255,.55);background:rgba(255,255,255,.12);color:#fff;font-size:.8rem;font-weight:700;text-decoration:none;cursor:pointer;white-space:nowrap}.aios-incard-intent:hover{background:rgba(255,255,255,.26)}.aios-incard-note{font-size:.74rem;opacity:.85;text-align:center;min-height:.9em;white-space:pre-wrap}.aios-incard-bio{display:flex;flex-direction:column;gap:.28rem}.aios-incard-biolabel{margin:0;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;opacity:.8}.aios-incard-biotext{margin:0;font-size:.92rem;line-height:1.4}.aios-incard-copyrow{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}.aios-incard-copy{padding:.32rem .8rem;border-radius:8px;border:1px solid rgba(255,255,255,.6);background:rgba(255,255,255,.16);color:#fff;font-size:.78rem;font-weight:700;cursor:pointer}.aios-incard-copy:hover{background:rgba(255,255,255,.3)}.aios-incard-copynote{font-size:.72rem;opacity:.85}.aios-incard-market{display:inline-block;font-size:.72rem;opacity:.82;color:#fff;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.4);align-self:flex-start}.aios-incard-market:hover{opacity:1}.aios-reading{display:flex;flex-direction:column;gap:1rem;margin-top:.3rem;padding:1.15rem 1.2rem;border-radius:14px;background:rgba(30,40,70,.05);border:1px solid rgba(30,40,70,.12)}.aios-reading-label{margin:0 0 .3rem;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;opacity:.6}.aios-reading-val{margin:0;font-size:1rem;line-height:1.55;white-space:pre-wrap}.aios-reading-chips{display:flex;flex-wrap:wrap;gap:.4rem;margin:.1rem 0 0;padding:0;list-style:none}.aios-reading-chip{padding:.28rem .7rem;border-radius:999px;font-size:.85rem;background:rgba(30,40,70,.08);border:1px solid rgba(30,40,70,.15)}.aios-market-wrap{text-align:center;margin-top:.3rem}.aios-market-link{display:inline-block;font-size:.8rem;opacity:.6;text-decoration:none;color:inherit;border-bottom:1px solid transparent}.aios-market-link:hover{opacity:.95;border-bottom-color:currentColor}.aios-tease{margin:0 0 .55rem;font-size:.98rem;font-weight:600;line-height:1.45}@media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}";
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
