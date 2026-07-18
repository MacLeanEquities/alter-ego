(() => {
  // capability.mjs
  var _main = /* @__PURE__ */ (() => {
    function runCapability2(input) {
      const archetypeList = [
        {
          archetype_name: "The Curator",
          one_line_essence: "You're the one who finds the perfect artifact to spark a conversation.",
          visual_metaphor: "A library shelf glowing with a single book that hums with light",
          strengths: [
            "Curates meaningful connections",
            "Sees the story behind the object",
            "Creates safe spaces for sharing"
          ],
          shadow_traits: [
            "Can get lost in the details",
            "Overlooks the obvious"
          ],
          motto_chapter_themeword: "Curate",
          narrative: "You have a knack for uncovering hidden gems in the mundane. Your strength lies in transforming ordinary moments into meaningful exchanges. But sometimes, you get so caught up in the perfect detail that you miss the bigger picture."
        },
        {
          archetype_name: "The Bridge-Builder",
          one_line_essence: "You're the one who connects disparate ideas into a shared path forward.",
          visual_metaphor: "A wooden bridge spanning a river, with footprints of many different sizes on it",
          strengths: [
            "Builds bridges between conflicting perspectives",
            "Sees the common ground in disagreements",
            "Turns tension into collaboration"
          ],
          shadow_traits: [
            "Takes on too much as the mediator",
            "Forgets to take care of their own needs"
          ],
          motto_chapter_themeword: "Bridge",
          narrative: "You excel at bringing people together, especially when they feel at odds. Your ability to find common ground is a gift. However, you sometimes neglect your own well-being while holding space for others."
        },
        {
          archetype_name: "The Pattern-Seeker",
          one_line_essence: "You're the one who spots the hidden pattern in the chaos and makes it clear.",
          visual_metaphor: "A kaleidoscope revealing a clear, repeating geometric pattern",
          strengths: [
            "Identifies hidden connections",
            "Simplifies complex information",
            "Sees the bigger picture in details"
          ],
          shadow_traits: [
            "Overlooks the human element in patterns",
            "Assumes patterns always apply"
          ],
          motto_chapter_themeword: "Pattern",
          narrative: "You have a natural talent for making sense of complexity. Your insights often lead to breakthroughs. But be mindful that not every situation fits a neat pattern, and the human element can be overlooked."
        },
        {
          archetype_name: "The Quiet Catalyst",
          one_line_essence: "You're the one who sparks change without needing to be the loudest voice.",
          visual_metaphor: "A single drop of water causing ripples in a still pond",
          strengths: [
            "Creates change through subtle influence",
            "Listens deeply before acting",
            "Empowers others to lead"
          ],
          shadow_traits: [
            "Hesitates to speak up when needed",
            "Waits for others to initiate"
          ],
          motto_chapter_themeword: "Ripple",
          narrative: "You often spark meaningful change without drawing attention to yourself. Your quiet presence encourages others to step up. However, you might hold back from speaking your mind when it's necessary."
        },
        {
          archetype_name: "The Story-Weaver",
          one_line_essence: "You're the one who turns everyday moments into meaningful narratives.",
          visual_metaphor: "A tapestry woven from threads of different colors and textures",
          strengths: [
            "Creates compelling narratives from ordinary events",
            "Helps others see their own stories",
            "Connects personal experiences to universal themes"
          ],
          shadow_traits: [
            "Can get caught up in the story and lose sight of the facts",
            "Overlooks the need for practical action"
          ],
          motto_chapter_themeword: "Weave",
          narrative: "You have a gift for turning the mundane into something meaningful. Your stories help others see their own journeys. But remember to balance storytelling with actionable steps."
        },
        {
          archetype_name: "The Compassionate Analyst",
          one_line_essence: "You're the one who combines deep understanding with genuine care.",
          visual_metaphor: "A magnifying glass held over a heart-shaped leaf",
          strengths: [
            "Analyzes with empathy",
            "Sees the human impact of data",
            "Offers solutions that consider people"
          ],
          shadow_traits: [
            "Spends too much time analyzing to avoid action",
            "Can be overly cautious"
          ],
          motto_chapter_themeword: "Analyze",
          narrative: "You bring a unique blend of insight and compassion to every situation. Your ability to understand both the data and the people behind it is rare. However, you might sometimes delay action while seeking the perfect analysis."
        },
        {
          archetype_name: "The Unlikely Connector",
          one_line_essence: "You're the one who finds unexpected connections between people and ideas.",
          visual_metaphor: "A map with dotted lines connecting random points across a city",
          strengths: [
            "Makes surprising connections",
            "Sees potential in unlikely places",
            "Brings together diverse groups"
          ],
          shadow_traits: [
            "Can be distracted by the next connection",
            "Forgets to follow up on the initial connection"
          ],
          motto_chapter_themeword: "Connect",
          narrative: "You have a knack for seeing how things are linked in ways others miss. Your connections often lead to new opportunities. But be mindful to nurture the connections you make, not just move on to the next one."
        },
        {
          archetype_name: "The Thoughtful Listener",
          one_line_essence: "You're the one who hears what's unsaid and responds with care.",
          visual_metaphor: "A pair of ears with a gentle glow, surrounded by floating thought bubbles",
          strengths: [
            "Listens deeply without judgment",
            "Picks up on subtle cues",
            "Creates space for others to be heard"
          ],
          shadow_traits: [
            "Takes on others' emotions as their own",
            "Struggles to set boundaries"
          ],
          motto_chapter_themeword: "Listen",
          narrative: "Your ability to truly hear others is a gift. You make people feel understood and safe. However, you might absorb others' emotions and find it hard to step back."
        },
        {
          archetype_name: "The Patient Guide",
          one_line_essence: "You're the one who walks alongside others, step by step, without rushing.",
          visual_metaphor: "A winding path through a forest, with a steady footstep in the center",
          strengths: [
            "Guides with patience and consistency",
            "Adapts to the pace of others",
            "Provides steady support"
          ],
          shadow_traits: [
            "Can be too slow to act when speed is needed",
            "Avoids conflict to maintain harmony"
          ],
          motto_chapter_themeword: "Guide",
          narrative: "You are a steady presence for those navigating uncertainty. Your patience helps others feel safe to move at their own pace. But remember that sometimes, a quicker response is needed."
        },
        {
          archetype_name: "The Insightful Questioner",
          one_line_essence: "You're the one who asks the question that unlocks the next level of understanding.",
          visual_metaphor: "A key turning in a lock that reveals a bright light",
          strengths: [
            "Asks the right questions at the right time",
            "Challenges assumptions gently",
            "Helps others see blind spots"
          ],
          shadow_traits: [
            "Can be perceived as challenging",
            "May ask too many questions without giving space"
          ],
          motto_chapter_themeword: "Question",
          narrative: "Your questions often lead to breakthroughs. You help others see beyond their current perspective. However, be mindful that not every question needs an immediate answer, and sometimes silence is more powerful."
        }
      ];
      function hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = (hash << 5) - hash + str.charCodeAt(i);
          hash = hash & 4294967295;
        }
        return Math.abs(hash) % archetypeList.length;
      }
      const inputString = input.answers.join("|");
      const index = hashString(inputString);
      return archetypeList[index];
    }
    return { runCapability: runCapability2 };
  })();
  var _rc_friend_group_ego = /* @__PURE__ */ (() => {
    function rewardCard(input) {
      const candidates = [
        {
          archetype_name: "The Connector",
          one_line_essence: "Bringing people together with ease and warmth.",
          visual_metaphor: "A spider weaving a web of connections between friends.",
          strengths: ["Active listener", "Creates inclusive spaces", "Facilitates group harmony"],
          shadow_traits: ["May overcommit to others' needs", "Avoids conflict to keep the peace"],
          motto_chapter_themeword: "Together",
          narrative: "You're the one who always knows how to get the group to laugh together, whether it's a spontaneous game night or a quiet coffee chat. Your presence makes everyone feel seen and included, and you have a knack for turning strangers into friends.",
          bio_line: "I'm the one who always makes sure everyone gets a chance to speak in group chats, and I'm the first to suggest a group activity when I notice someone seems lonely. My friends say I have a way of making even the quietest moments feel like a celebration.",
          signature: ["connect", "together", "group", "gather", "network"]
        },
        {
          archetype_name: "The Jester",
          one_line_essence: "Turning ordinary moments into shared laughter and joy.",
          visual_metaphor: "A clown juggling laughter and light-hearted moments in a crowd.",
          strengths: ["Brings humor to tense situations", "Makes people feel at ease", "Encourages spontaneity"],
          shadow_traits: ["May use humor to deflect serious issues", "Can be overly playful when others need support"],
          motto_chapter_themeword: "Joy",
          narrative: "You're the friend who always has the perfect joke to lighten the mood, whether it's during a stressful week or a quiet dinner. Your energy is contagious, and you have a gift for turning everyday moments into something to laugh about.",
          bio_line: "I'm the one who cracks the funniest jokes at the most unexpected times, and I'm always ready to turn a boring meeting into a mini comedy show. My friends say I have a way of making even the most mundane tasks feel like an adventure.",
          signature: ["laugh", "fun", "joke", "play", "light"]
        },
        {
          archetype_name: "The Anchor",
          one_line_essence: "Providing steady support and calm in the midst of chaos.",
          visual_metaphor: "A lighthouse guiding friends through stormy seas.",
          strengths: ["Emotionally stable", "Good at giving practical help", "Consistent and reliable"],
          shadow_traits: ["May be too rigid in their approach", "Struggles to express their own emotions"],
          motto_chapter_themeword: "Steady",
          narrative: "You're the friend who's always there to listen without judgment, offering a calm presence during tough times. Your reliability makes others feel safe to be vulnerable, and you have a quiet strength that holds the group together.",
          bio_line: "I'm the one who always knows when to step in with a calm word during a crisis, and I'm the friend who shows up without being asked when someone is struggling. My friends say I have a way of making them feel grounded in the middle of life's storms.",
          signature: ["steady", "reliable", "calm", "support", "grounded"]
        }
      ];
      const text = input.answers.join(" ").toLowerCase();
      const words = text.split(/\W+/).filter((w) => w.length > 0);
      const wordSet = new Set(words);
      let bestCandidate = candidates[0];
      let bestScore = -1;
      for (const candidate of candidates) {
        const score = candidate.signature.filter((word) => wordSet.has(word)).length;
        if (score > bestScore) {
          bestScore = score;
          bestCandidate = candidate;
        }
      }
      const { signature, ...result } = bestCandidate;
      return result;
    }
    return { rewardCard };
  })();
  var _rc_shadow_ego = /* @__PURE__ */ (() => {
    function rewardCard(input) {
      const library = [
        {
          archetype_name: "The Unspoken",
          one_line_essence: "You are the quiet strength that holds the space for others to be heard.",
          visual_metaphor: "A deep river flowing beneath the surface of a calm lake.",
          strengths: ["Deep listening", "Unwavering presence", "Emotional intelligence"],
          shadow_traits: ["Holds back to avoid conflict", "Overthinks before speaking", "Feels responsible for others' emotions"],
          motto_chapter_themeword: "Listen to the silence",
          narrative: "You are the calm in the storm, the steady hand that guides without speaking. Your shadow is the part of you that fears being heard, that worries about saying the wrong thing, and that takes on the weight of others' feelings. But in your quiet strength, you create a safe space for others to express themselves fully.",
          bio_line: "I am the quiet presence that holds space for you to be heard, [firstName]. I often feel the weight of others' emotions, but I know my silence is a gift that allows them to find their own voice."
        },
        {
          archetype_name: "The Quiet One",
          one_line_essence: "Your voice is soft, but your presence is a powerful anchor in the chaos.",
          visual_metaphor: "A sturdy oak tree standing tall in a gentle breeze.",
          strengths: ["Steadfastness", "Patience", "Groundedness"],
          shadow_traits: ["Avoids confrontation", "Takes on too much responsibility", "Struggles to set boundaries"],
          motto_chapter_themeword: "Stand firm in your calm",
          narrative: "You are the steady anchor in the midst of life's storms. Your shadow is the part of you that takes on too much, that avoids conflict at all costs, and that feels responsible for keeping everyone else safe. But your quiet strength is a gift that helps others feel secure and grounded.",
          bio_line: "I am the steady presence that others lean on in times of uncertainty, [firstName]. I often take on more than I can handle to keep the peace, but I am learning to set boundaries without losing my calm."
        },
        {
          archetype_name: "The Hidden Current",
          one_line_essence: "You move with a gentle but unstoppable force, guiding others without them realizing it.",
          visual_metaphor: "A gentle stream carving a path through stone over time.",
          strengths: ["Subtle influence", "Resilience", "Adaptability"],
          shadow_traits: ["Fears being overlooked", "Takes on hidden burdens", "Struggles to assert needs"],
          motto_chapter_themeword: "Flow with purpose",
          narrative: "You are the gentle force that shapes the world around you without drawing attention. Your shadow is the part of you that fears being overlooked, that takes on hidden burdens, and that struggles to assert your own needs. But your quiet influence is a powerful force that helps others move forward without them even noticing.",
          bio_line: "I am the gentle force that guides others without them realizing it, [firstName]. I often take on hidden burdens to keep things moving, but I am learning to let my own needs be seen."
        }
      ];
      function computeHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = (hash * 131 + str.charCodeAt(i)) % 1e6;
        }
        return hash;
      }
      const key = input.answers.join("|||");
      const index = computeHash(key) % library.length;
      const card = library[index];
      const bioLine = card.bio_line.replace(/\[firstName\]/g, input.firstName);
      return {
        archetype_name: card.archetype_name,
        one_line_essence: card.one_line_essence,
        visual_metaphor: card.visual_metaphor,
        strengths: [...card.strengths],
        shadow_traits: [...card.shadow_traits],
        motto_chapter_themeword: card.motto_chapter_themeword,
        narrative: card.narrative,
        bio_line: bioLine
      };
    }
    return { rewardCard };
  })();
  var _bio = /* @__PURE__ */ (() => {
    function bioLine(input) {
      const templates = [
        {
          sentences: [
            "I build responsive web applications using modern frameworks.",
            "I enjoy collaborating with diverse teams to solve complex problems."
          ]
        },
        {
          sentences: [
            "I create engaging user experiences through thoughtful design and development.",
            "I am passionate about writing clean, maintainable code and sharing knowledge."
          ]
        },
        {
          sentences: [
            "I develop scalable backend systems that power high-traffic applications.",
            "I love mentoring junior developers and fostering a culture of continuous learning."
          ]
        }
      ];
      function scoreTemplate(template, answers) {
        let score = 0;
        for (const answer of answers) {
          for (const sentence of template.sentences) {
            if (sentence.includes(answer)) {
              score++;
              break;
            }
          }
        }
        return score;
      }
      let maxScore = -1;
      let selected = templates[0];
      for (const template of templates) {
        const score = scoreTemplate(template, input.answers);
        if (score > maxScore) {
          maxScore = score;
          selected = template;
        }
      }
      return selected.sentences[0] + " " + selected.sentences[1];
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
      "What animal or object feels like your true self?",
      "What do you do without even thinking about it?",
      "What's a habit you'd like to let go of?",
      "What would a stranger say about your energy?",
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
  var SESSION = function() {
    try {
      var k = "aios_sid";
      var s = sessionStorage.getItem(k);
      if (!s) {
        s = crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now().toString(36);
        sessionStorage.setItem(k, s);
      }
      return s;
    } catch (e) {
      return "anon";
    }
  }();
  function track(event, meta) {
    try {
      fetch("event", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ session_id: SESSION, event, meta: meta || {} }),
        keepalive: true
      }).catch(function() {
      });
    } catch (e) {
    }
  }
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
      track("start", {});
      const firstName = form._name ? (form._name.value || "").trim() : "";
      btn.disabled = true;
      btn.textContent = "Reading...";
      try {
        const reading = await runCapability({ answers, firstName, businessName: firstName });
        track("complete", {});
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
    const a = $("a", { class: "aios-market-link", href: CONFIG.marketLink.url, target: "_blank", rel: "noreferrer" }, [
      (CONFIG.marketLink.label || "More from MacLean Market") + " \u2192"
    ]);
    a.addEventListener("click", () => track("market_link", { url: CONFIG.marketLink.url }));
    wrap.appendChild(a);
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
      track("share", { how: "copy" });
    });
    const parts = shareParts(reading, cardHeadline(reading));
    const xLink = $("a", { class: "aios-incard-intent", "data-aios-share-x": "1", href: xIntentUrl(parts.text, parts.url), target: "_blank", rel: "noreferrer" }, ["Share to X"]);
    const liLink = $("a", { class: "aios-incard-intent", "data-aios-share-linkedin": "1", href: linkedInIntentUrl(parts.url || parts.text), target: "_blank", rel: "noreferrer" }, ["Share to LinkedIn"]);
    xLink.addEventListener("click", () => track("share", { how: "x" }));
    liLink.addEventListener("click", () => track("share", { how: "linkedin" }));
    const intents = $("div", { class: "aios-incard-intents" });
    intents.appendChild(xLink);
    intents.appendChild(liLink);
    if (typeof navigator !== "undefined" && navigator.share) {
      const nativeBtn = $("button", { type: "button", "data-aios-share-native": "1", class: "aios-incard-intent" }, ["Share\u2026"]);
      nativeBtn.addEventListener("click", async () => {
        const cap = shareCaption(reading, cardHeadline(reading));
        const r = await doShare(cap);
        track("share", { how: "native", outcome: r });
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
        track("capture", {});
        track("reveal", { cards: (CONFIG.rewardCards || []).length });
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
    track("page_view", { questions: (CONFIG.questions || []).length });
    renderQuestions();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
