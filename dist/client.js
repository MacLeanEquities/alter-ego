(() => {
  // capability.mjs
  var _main = /* @__PURE__ */ (() => {
    function runCapability2(input) {
      const archetypes = [
        {
          archetype_name: "The Curious Cartographer",
          one_line_essence: "You're the one who turns a single question into a map of possibilities.",
          visual_metaphor: "A compass pointing to a hidden valley",
          strengths: [
            "Asks the right questions",
            "Sees patterns in chaos",
            "Listens without judgment"
          ],
          shadow_traits: [
            "Tends to overthink the map before setting out",
            "Can get lost in the details of the journey"
          ],
          motto_chapter_themeword: "Mapmaker's Resolve",
          narrative: "You navigate the uncharted with a quiet confidence. Your strength lies in turning the abstract into a clear path, but sometimes you hesitate to share your map until it's perfect. You're the one who helps others find their way without leading them."
        },
        {
          archetype_name: "The Quiet Catalyst",
          one_line_essence: "You're the one who sparks change without raising a voice.",
          visual_metaphor: "A single drop of water causing ripples in a still pond",
          strengths: [
            "Creates calm in tense moments",
            "Sees potential in the unspoken",
            "Acts with quiet intention"
          ],
          shadow_traits: [
            "Sometimes waits too long to speak up",
            "Can be too reserved when action is needed"
          ],
          motto_chapter_themeword: "Ripple Effect",
          narrative: "You are the calm center that transforms the energy around you. Your strength is in your ability to listen deeply and act with purpose, but you may hold back when you feel the need to be heard. You're the one who turns a whisper into a movement."
        },
        {
          archetype_name: "The Patient Weaver",
          one_line_essence: "You're the one who weaves connections from the threads of everyday moments.",
          visual_metaphor: "A tapestry of interwoven threads, each with its own color and texture",
          strengths: [
            "Builds deep, lasting relationships",
            "Sees the beauty in small details",
            "Creates harmony from diverse elements"
          ],
          shadow_traits: [
            "May take too long to make a decision",
            "Can become overwhelmed by too many connections"
          ],
          motto_chapter_themeword: "Thread by Thread",
          narrative: "You find meaning in the connections between people and ideas. Your strength is in your patience and attention to detail, but you might get caught in the complexity of the weave. You're the one who turns a simple thread into a tapestry of belonging."
        },
        {
          archetype_name: "The Clear-Sighted Guide",
          one_line_essence: "You're the one who cuts through confusion to reveal the path forward.",
          visual_metaphor: "A lighthouse beam cutting through fog",
          strengths: [
            "Clarifies complex situations",
            "Sees the big picture without losing detail",
            "Provides direction with calm certainty"
          ],
          shadow_traits: [
            "Can be too direct, overlooking feelings",
            "May rush to solve without fully listening"
          ],
          motto_chapter_themeword: "Clear Path",
          narrative: "You are the beacon in the fog, helping others see the way. Your strength is in your clarity and ability to simplify, but you might overlook the emotional landscape. You're the one who turns confusion into confidence."
        },
        {
          archetype_name: "The Thoughtful Bridge",
          one_line_essence: "You're the one who connects disparate ideas into a cohesive whole.",
          visual_metaphor: "A bridge spanning a river, with different landscapes on each side",
          strengths: [
            "Sees connections others miss",
            "Facilitates understanding between groups",
            "Builds consensus with empathy"
          ],
          shadow_traits: [
            "May avoid conflict by smoothing over differences",
            "Can become a bottleneck when too many rely on you"
          ],
          motto_chapter_themeword: "Bridge Builder",
          narrative: "You are the connective tissue between ideas and people. Your strength is in your ability to find common ground, but you might avoid necessary friction. You're the one who turns a divide into a shared journey."
        },
        {
          archetype_name: "The Steady Current",
          one_line_essence: "You're the one who moves forward with consistent, gentle persistence.",
          visual_metaphor: "A river flowing steadily through a forest",
          strengths: [
            "Maintains momentum through challenges",
            "Provides reliable support",
            "Adapts without losing direction"
          ],
          shadow_traits: [
            "May resist change that disrupts the flow",
            "Can be too passive in moments requiring action"
          ],
          motto_chapter_themeword: "Flowing Forward",
          narrative: "You are the steady force that carries others along. Your strength is in your consistency and calm, but you might not always be the one to initiate change. You're the one who turns a slow journey into a reliable path."
        },
        {
          archetype_name: "The Reflective Anchor",
          one_line_essence: "You're the one who grounds the moment in deep reflection.",
          visual_metaphor: "An anchor holding a ship steady in a calm sea",
          strengths: [
            "Provides stability in uncertainty",
            "Thinks deeply before acting",
            "Creates space for others to reflect"
          ],
          shadow_traits: [
            "May get stuck in reflection without moving forward",
            "Can be perceived as indecisive"
          ],
          motto_chapter_themeword: "Anchor Point",
          narrative: "You are the calm in the storm, providing a steady presence. Your strength is in your depth of thought, but you might need to balance reflection with action. You're the one who turns a moment of stillness into a foundation for growth."
        },
        {
          archetype_name: "The Open-Handed Connector",
          one_line_essence: "You're the one who brings people together with generosity of spirit.",
          visual_metaphor: "A hand open in welcome, with a circle of people around it",
          strengths: [
            "Makes others feel seen and valued",
            "Shares resources without hesitation",
            "Fosters a sense of community"
          ],
          shadow_traits: [
            "May overextend yourself to help others",
            "Can be too trusting of others' intentions"
          ],
          motto_chapter_themeword: "Open Hand",
          narrative: "You are the heart of the gathering, making everyone feel welcome. Your strength is in your generosity, but you might need to set boundaries. You're the one who turns a group into a family."
        },
        {
          archetype_name: "The Gentle Innovator",
          one_line_essence: "You're the one who brings new ideas with kindness and care.",
          visual_metaphor: "A seedling growing through a crack in concrete",
          strengths: [
            "Implements change with empathy",
            "Sees potential in the overlooked",
            "Creates solutions that feel natural"
          ],
          shadow_traits: [
            "May avoid conflict to keep harmony",
            "Can be too cautious in taking risks"
          ],
          motto_chapter_themeword: "Gentle Growth",
          narrative: "You are the quiet force that brings new ideas to life with care. Your strength is in your ability to innovate without disruption, but you might hold back when boldness is needed. You're the one who turns a small idea into a thriving garden."
        },
        {
          archetype_name: "The Calm Navigator",
          one_line_essence: "You're the one who guides through uncertainty with unwavering calm.",
          visual_metaphor: "A ship sailing smoothly through a calm sea at dawn",
          strengths: [
            "Remains composed in chaos",
            "Makes complex decisions with clarity",
            "Provides reassurance without overpromising"
          ],
          shadow_traits: [
            "May downplay the need for emotional support",
            "Can be too focused on the path to notice the journey"
          ],
          motto_chapter_themeword: "Calm Horizon",
          narrative: "You are the steady hand on the wheel, guiding through the unknown. Your strength is in your calm and clarity, but you might miss the emotional currents. You're the one who turns a stormy sea into a peaceful voyage."
        }
      ];
      let hash = 0;
      for (const a of input.answers) {
        for (const c of a) {
          hash = (hash * 131 + c.charCodeAt(0)) % 1e6;
        }
      }
      const index = hash % archetypes.length;
      return archetypes[index];
    }
    return { runCapability: runCapability2 };
  })();
  var _rc_friend_group_ego = /* @__PURE__ */ (() => {
    function rewardCard(input) {
      const answers = input.answers;
      let hash = 0;
      for (const answer of answers) {
        for (const char of answer) {
          hash = hash * 31 + char.charCodeAt(0) >>> 0;
        }
      }
      const index = hash % 3;
      const readings = [
        {
          archetype_name: "The Connector",
          one_line_essence: "Bringing people together with a smile and a story.",
          visual_metaphor: "A spider weaving a web of laughter and shared moments.",
          strengths: ["Creates instant comfort", "Remembers everyone's favorite snack", "Turns strangers into friends"],
          shadow_traits: ["Can get overwhelmed by too many connections", "Sometimes avoids deep conversations to keep the peace"],
          motto_chapter_themeword: "Together We Bloom",
          narrative: "You're the one who always knows how to get the group to laugh at the same time, and you have a knack for remembering the little things that make each person feel seen. Your presence is the glue that holds the group together, even when the conversation gets quiet.",
          bio_line: "I'm the friend who probably knows the best coffee shop for a group hangout, and I'm the one who always remembers to bring extra snacks for the ones who forgot. I love how I can make a room feel like home just by being there."
        },
        {
          archetype_name: "The Jester",
          one_line_essence: "Turning every gathering into a spontaneous adventure.",
          visual_metaphor: "A playful spark that ignites a chain reaction of giggles.",
          strengths: ["Makes the mundane magical", "Eases tension with a well-timed joke", "Encourages everyone to let loose"],
          shadow_traits: ["Can be too focused on the fun to notice when someone's struggling", "Sometimes uses humor to deflect from serious topics"],
          motto_chapter_themeword: "Laugh Until You Cry",
          narrative: "You're the one who always has a silly story to share or a game to start, turning even a quiet Tuesday into a memory. Your energy is contagious, and you have a way of making everyone feel like they can be their most playful selves.",
          bio_line: "I'm the friend who probably starts a spontaneous dance party in the living room, and I'm the one who always has a ridiculous meme to share. I love how I can turn a boring day into an adventure with just a few words."
        },
        {
          archetype_name: "The Anchor",
          one_line_essence: "Providing steady calm in the midst of chaos.",
          visual_metaphor: "A lighthouse guiding the group through stormy seas.",
          strengths: ["Stays calm under pressure", "Offers practical solutions", "Listens without judgment"],
          shadow_traits: ["Can be too reserved to share their own feelings", "May avoid conflict to maintain harmony"],
          motto_chapter_themeword: "Steady as She Goes",
          narrative: "You're the one who knows exactly when to step in and help, whether it's mediating a disagreement or just being the calm voice in a loud room. Your reliability makes the group feel safe to be themselves.",
          bio_line: "I'm the friend who probably knows the best way to handle a group conflict, and I'm the one who always has a quiet word for someone who's feeling overwhelmed. I love how I can be the steady presence that everyone turns to."
        }
      ];
      return readings[index];
    }
    return { rewardCard };
  })();
  var _rc_shadow_ego = /* @__PURE__ */ (() => {
    function rewardCard(input) {
      const readings = [
        {
          archetype_name: "The Quiet Observer",
          one_line_essence: "You see the world without needing to be seen.",
          visual_metaphor: "A shadow that moves with the light, never casting one of its own.",
          strengths: ["Perceptive", "Patient", "Unobtrusive"],
          shadow_traits: ["Secretive", "Overly cautious", "Tends to withdraw"],
          motto_chapter_themeword: "In the quiet, the truth is heard.",
          narrative: "You are the one who notices the small details others miss, the subtle shifts in the room. You don't need to speak to be heard; your presence is a calm that settles the chaos. You are the shadow that helps others see their own shadows, without ever stepping into the light itself.",
          bio_line: "I am the one who watches the edges of the room, noticing the unspoken words and the subtle shifts in the air. My presence is a quiet comfort, a steady hand that doesn't need to be seen to be felt."
        },
        {
          archetype_name: "The Unseen Guardian",
          one_line_essence: "You protect without being noticed, your strength in the background.",
          visual_metaphor: "A wall that stands firm, yet is never seen as a barrier.",
          strengths: ["Loyal", "Resilient", "Selfless"],
          shadow_traits: ["Overprotective", "Takes on too much", "Fears being replaced"],
          motto_chapter_themeword: "Strength in the unseen.",
          narrative: "You are the shield that others don't know they have. You stand behind the scenes, ensuring safety and stability without seeking credit. Your strength is in your ability to be there without being noticed, a constant presence that makes the world feel secure.",
          bio_line: "I am the steady hand that holds the door open for others without being noticed, the quiet strength that ensures the path is clear. My purpose is to protect, to be the foundation that others lean on without ever knowing they do."
        },
        {
          archetype_name: "The Hidden Catalyst",
          one_line_essence: "You spark change without being the center of attention.",
          visual_metaphor: "A spark that ignites a fire, then fades into the night.",
          strengths: ["Innovative", "Inspiring", "Subtle"],
          shadow_traits: ["Impatient for change", "Takes risks without warning", "Fears being overlooked"],
          motto_chapter_themeword: "The spark that lights the way.",
          narrative: "You are the quiet force that moves things forward. You don't need to be the one to speak; your ideas and actions create ripples that lead to transformation. You are the catalyst that sets the stage for others to shine, then steps back into the shadows.",
          bio_line: "I am the spark that ignites the fire, the quiet idea that changes the course of events. I don't seek the spotlight, but I know that my presence can shift the entire landscape without a single word."
        }
      ];
      let hash = 0;
      for (const answer of input.answers) {
        for (const char of answer) {
          hash = hash * 31 + char.charCodeAt(0) >>> 0;
        }
      }
      const index = hash % 3;
      return readings[index];
    }
    return { rewardCard };
  })();
  var _bio = /* @__PURE__ */ (() => {
    function bioLine(input) {
      const templates = [
        {
          text: "I build software that solves real problems for businesses and startups. I love collaborating with teams to create impactful products that change the world.",
          keywords: ["build", "software", "solve", "problems", "collaborate", "team", "impactful", "product", "change"]
        },
        {
          text: "I design user experiences that are intuitive and delightful for everyone. I'm passionate about making technology accessible and inclusive for all users.",
          keywords: ["design", "user", "experience", "intuitive", "delightful", "accessible", "inclusive", "technology"]
        },
        {
          text: "I write clean and efficient code that is easy to maintain and scalable. I enjoy learning new technologies and sharing knowledge with others to grow together and innovate.",
          keywords: ["write", "clean", "efficient", "code", "maintain", "learn", "technology", "share", "knowledge"]
        }
      ];
      const allWords = /* @__PURE__ */ new Set();
      for (const answer of input.answers) {
        const words = answer.toLowerCase().split(/\s+/);
        for (const word of words) {
          const cleanWord = word.replace(/[^a-z0-9]/g, "");
          if (cleanWord) {
            allWords.add(cleanWord);
          }
        }
      }
      let bestIndex = 0;
      let bestScore = -1;
      for (let i = 0; i < templates.length; i++) {
        const template = templates[i];
        let score = 0;
        for (const keyword of template.keywords) {
          if (allWords.has(keyword)) {
            score++;
          }
        }
        if (score > bestScore) {
          bestScore = score;
          bestIndex = i;
        }
      }
      return templates[bestIndex].text;
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
      "What shadow trait do you carry quietly?",
      "What vivid metaphor describes your true self?",
      "What strength do you lean on when things get hard?",
      "What phrase feels like your everyday reality?",
      "What name would fit your true self?"
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
