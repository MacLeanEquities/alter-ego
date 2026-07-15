(() => {
  // capability.mjs
  function runCapability(input) {
    const key = JSON.stringify({ answers: input.answers, firstName: input.firstName || "" });
    const hash = computeHash(key);
    const index = Math.abs(hash) % 10;
    const mainCard = mainArchetypeLibrary[index];
    const friendGroupCard = friendGroupArchetypeLibrary[index];
    const shadowCard = shadowArchetypeLibrary[index];
    const bioLine = bioLineLibrary[index];
    return {
      ...mainCard,
      reward_cards: {
        friend_group_ego: friendGroupCard,
        shadow_ego: shadowCard
      },
      bio_line: {
        universal: bioLine.universal,
        linkedin: bioLine.linkedin
      }
    };
  }
  function computeHash(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash ^ str.charCodeAt(i);
    }
    return hash;
  }
  var mainArchetypeLibrary = [
    {
      archetype_name: "The Curious Cartographer",
      one_line_essence: "You're the one who maps the uncharted territory of other people's ideas.",
      visual_metaphor: "A map with glowing paths that only you can see, drawn in the air with a finger.",
      strengths: ["Sees connections others miss", "Asks the question that unlocks the room", "Turns confusion into clarity"],
      shadow_traits: ["Overlooks the obvious", "Gets lost in the details"],
      motto_chapter_themeword: "Uncharted",
      narrative: "You thrive when you're exploring the hidden patterns in conversations. Your mind is a compass that points to the next big insight, but sometimes you get so caught up in the map that you forget to move forward. You're the person who can turn a messy group project into a well-organized journey."
    },
    {
      archetype_name: "The Patient Gardener",
      one_line_essence: "You're the one who nurtures ideas until they bloom in their own time.",
      visual_metaphor: "A garden with flowers that only bloom when the soil is just right, tended by a calm hand.",
      strengths: ["Gives space for growth", "Sees potential in the slow process", "Creates safe spaces for ideas"],
      shadow_traits: ["Waits too long to act", "Overlooks the need for immediate action"],
      motto_chapter_themeword: "Bloom",
      narrative: "You're the steady hand that helps ideas take root. You don't rush the process, and you know that the best things take time to grow. But sometimes you might wait too long for the perfect moment, and the opportunity passes you by."
    },
    {
      archetype_name: "The Quiet Anchor",
      one_line_essence: "You're the one who holds space for others to find their voice.",
      visual_metaphor: "A calm harbor where boats gently bob, surrounded by soft waves.",
      strengths: ["Creates psychological safety", "Listens without judgment", "Knows when to speak and when to hold silence"],
      shadow_traits: ["Holds back too much", "Waits for others to initiate"],
      motto_chapter_themeword: "Anchor",
      narrative: "You're the steady presence in chaotic conversations, the one who makes everyone feel heard without needing to be the center. Your quiet strength helps others feel safe to share. But sometimes you might wait too long to contribute your own perspective, letting the conversation flow without your input."
    },
    {
      archetype_name: "The Pattern Weaver",
      one_line_essence: "You're the one who finds meaning in the threads connecting seemingly unrelated things.",
      visual_metaphor: "A tapestry where colors and textures form a hidden image when viewed from the right angle.",
      strengths: ["Sees hidden patterns", "Makes unexpected connections", "Turns chaos into coherent stories"],
      shadow_traits: ["Overinterprets minor details", "Forgets the big picture in the details"],
      motto_chapter_themeword: "Weave",
      narrative: "You naturally spot relationships between ideas that others miss, turning scattered thoughts into meaningful narratives. Your mind is a loom where connections form effortlessly. But sometimes you get so focused on the intricate pattern that you lose sight of the overall design."
    },
    {
      archetype_name: "The Thoughtful Bridge",
      one_line_essence: "You're the one who connects worlds others keep apart.",
      visual_metaphor: "A stone bridge spanning two cliffs, with different plants growing on each side.",
      strengths: ["Translates between perspectives", "Builds mutual understanding", "Sees common ground in conflict"],
      shadow_traits: ["Overlooks cultural differences", "Assumes others see the world as you do"],
      motto_chapter_themeword: "Bridge",
      narrative: "You're the natural translator between different groups, making complex ideas accessible. Your strength is turning 'us vs them' into 'we'. But sometimes you might assume everyone shares your perspective, missing subtle cultural nuances that could change the connection."
    },
    {
      archetype_name: "The Intentional Listener",
      one_line_essence: "You're the one who hears what's unsaid before it's spoken.",
      visual_metaphor: "A person sitting in a circle, with subtle ripples spreading from their ears.",
      strengths: ["Picks up on emotional shifts", "Asks the question that reveals the real issue", "Creates space for vulnerability"],
      shadow_traits: ["Overanalyzes silence", "Assumes others feel what you feel"],
      motto_chapter_themeword: "Listen",
      narrative: "You're the one who notices when someone's tone changes or when a conversation feels tense before anyone says anything. Your listening creates safety for others to share deeply. But sometimes you might overthink the silence, imagining problems that aren't there."
    },
    {
      archetype_name: "The Calm Current",
      one_line_essence: "You're the one who moves through chaos without creating more turbulence.",
      visual_metaphor: "A river flowing steadily through a rocky landscape, carving a smooth path over time.",
      strengths: ["Maintains composure under pressure", "Turns conflict into flow", "Makes complex situations feel manageable"],
      shadow_traits: ["Avoids necessary confrontation", "Moves too quickly through emotional moments"],
      motto_chapter_themeword: "Flow",
      narrative: "You're the steady force that helps groups navigate difficult moments without getting stuck. Your calm presence makes chaos feel like a natural current. But sometimes you might smooth over real tensions too quickly, preventing necessary growth."
    },
    {
      archetype_name: "The Idea Alchemist",
      one_line_essence: "You're the one who transforms raw thoughts into something valuable.",
      visual_metaphor: "A pot of bubbling liquid where ordinary ingredients become a glowing substance.",
      strengths: ["Turns criticism into improvement", "Sees potential in rough drafts", "Makes ideas tangible"],
      shadow_traits: ["Overlooks practical constraints", "Gets stuck in the transformation process"],
      motto_chapter_themeword: "Alchemy",
      narrative: "You have a unique ability to take half-formed ideas and shape them into something useful. Your mind is a workshop where concepts take form. But sometimes you might get so focused on the transformation that you forget to check if the final product actually works in the real world."
    },
    {
      archetype_name: "The Pattern Interrupter",
      one_line_essence: "You're the one who breaks cycles by introducing unexpected perspectives.",
      visual_metaphor: "A single red thread weaving through a monochrome tapestry.",
      strengths: ["Challenges assumptions", "Introduces fresh angles", "Makes the familiar feel new"],
      shadow_traits: ["Ignores established processes", "Creates unnecessary disruption"],
      motto_chapter_themeword: "Interrupt",
      narrative: "You're the person who sees when a conversation or project is stuck in a loop and introduces a new perspective to break it. Your input often sparks real change. But sometimes you might disrupt good processes just to be different, creating more friction than necessary."
    },
    {
      archetype_name: "The Quiet Catalyst",
      one_line_essence: "You're the one who sparks change without needing to be seen.",
      visual_metaphor: "A single stone dropped in a pond, creating ripples that spread outward.",
      strengths: ["Makes others feel empowered", "Creates momentum without taking credit", "Knows when to step back"],
      shadow_traits: ["Underestimates their own impact", "Waits for others to take the lead"],
      motto_chapter_themeword: "Ripple",
      narrative: "You're the quiet force behind many positive changes, making others feel capable and inspired. Your influence spreads through the people you support. But sometimes you might not realize how much you've moved the needle, waiting for others to take the spotlight."
    }
  ];
  var friendGroupArchetypeLibrary = [
    {
      archetype_name: "The Group's Secret Decoder",
      one_line_essence: "You're the one who probably knows the inside joke before it's even made.",
      visual_metaphor: "A group of friends laughing, with a small keyhole in the center of the circle.",
      strengths: ["Reads the room like a book", "Makes everyone feel included", "Turns awkward moments into fun"],
      shadow_traits: ["Overthinks the group's vibe", "Tries too hard to be the center"],
      motto_chapter_themeword: "Inside",
      narrative: "In your friend group, you're the one who always knows the right thing to say to keep the energy up. You have a knack for turning a boring hangout into a memory. But sometimes you worry too much about whether everyone is having fun, and you might accidentally take over the conversation."
    },
    {
      archetype_name: "The Group's Mood Swapper",
      one_line_essence: "You're the one who probably turns a quiet night into a spontaneous adventure.",
      visual_metaphor: "A group of friends with a map of the neighborhood, pointing excitedly at a new spot.",
      strengths: ["Sees potential in ordinary moments", "Makes plans feel exciting", "Knows when to suggest something new"],
      shadow_traits: ["Overlooks others' preferences", "Suggests ideas without checking in"],
      motto_chapter_themeword: "Swing",
      narrative: "You're the friend who can turn a 'meh' evening into something memorable with a simple suggestion. Your energy makes even small gatherings feel special. But sometimes you might suggest something without realizing it's not what the group actually wants to do."
    },
    {
      archetype_name: "The Group's Emotional Compass",
      one_line_essence: "You're the one who probably notices when someone's having a quiet day.",
      visual_metaphor: "A group of friends walking together, with one person gently checking in on another.",
      strengths: ["Picks up on subtle shifts", "Makes others feel seen", "Offers quiet support"],
      shadow_traits: ["Overanalyzes group dynamics", "Assumes everyone feels what you feel"],
      motto_chapter_themeword: "Compass",
      narrative: "You're the friend who notices when someone's not quite 'in the moment' and gently checks in. Your quiet awareness makes the group feel safe. But sometimes you might overthink whether someone's upset when they're just tired."
    },
    {
      archetype_name: "The Group's Idea Spark",
      one_line_essence: "You're the one who probably turns a simple question into a deep conversation.",
      visual_metaphor: "A group of friends leaning in, with a single question mark glowing above their heads.",
      strengths: ["Asks the question that unlocks discussion", "Makes others feel heard", "Connects topics naturally"],
      shadow_traits: ["Overlooks when to let silence be", "Turns every moment into a discussion"],
      motto_chapter_themeword: "Spark",
      narrative: "You're the friend who can take a simple 'how was your day' and turn it into a meaningful conversation. Your questions make others feel valued. But sometimes you might keep the conversation going even when a pause would be welcome."
    },
    {
      archetype_name: "The Group's Calm Anchor",
      one_line_essence: "You're the one who probably keeps the group from drifting off track.",
      visual_metaphor: "A group of friends walking together, with one person gently guiding the path.",
      strengths: ["Keeps conversations focused", "Makes group decisions feel easy", "Knows when to redirect"],
      shadow_traits: ["Overcorrects minor drifts", "Makes group decisions too structured"],
      motto_chapter_themeword: "Anchor",
      narrative: "You're the friend who helps the group stay on course without making it feel like a chore. Your gentle guidance makes group activities feel smooth. But sometimes you might redirect too quickly, missing the value in a natural detour."
    },
    {
      archetype_name: "The Group's Joy Amplifier",
      one_line_essence: "You're the one who probably makes everyone laugh at the smallest thing.",
      visual_metaphor: "A group of friends laughing, with a small sun shining above their heads.",
      strengths: ["Sees humor in ordinary moments", "Makes others feel lighter", "Turns tension into laughter"],
      shadow_traits: ["Forgets to check if others are laughing with you", "Uses humor to avoid deeper topics"],
      motto_chapter_themeword: "Sun",
      narrative: "You're the friend who can turn a mundane moment into a shared laugh. Your presence makes the group feel lighter. But sometimes you might use humor to avoid addressing something that needs more attention."
    },
    {
      archetype_name: "The Group's Memory Keeper",
      one_line_essence: "You're the one who probably remembers the inside jokes from years ago.",
      visual_metaphor: "A group of friends sharing a photo album, with a specific page highlighted.",
      strengths: ["Recalls shared history", "Makes connections across time", "Creates continuity"],
      shadow_traits: ["Overlooks new group members", "Relys too much on past memories"],
      motto_chapter_themeword: "Memory",
      narrative: "You're the friend who remembers the inside jokes and shared experiences that make the group feel connected. Your memory creates a sense of history. But sometimes you might focus so much on the past that you miss new moments forming."
    },
    {
      archetype_name: "The Group's Energy Balancer",
      one_line_essence: "You're the one who probably notices when the group needs a break.",
      visual_metaphor: "A group of friends sitting in a circle, with one person gently suggesting a pause.",
      strengths: ["Reads group energy", "Makes transitions feel natural", "Knows when to slow down"],
      shadow_traits: ["Overcorrects for energy", "Makes group pauses feel awkward"],
      motto_chapter_themeword: "Balance",
      narrative: "You're the friend who senses when the group is getting too loud or too quiet and suggests a natural shift. Your awareness keeps the energy flowing. But sometimes you might overcorrect, making a natural pause feel forced."
    },
    {
      archetype_name: "The Group's Creative Catalyst",
      one_line_essence: "You're the one who probably turns a boring walk into a game.",
      visual_metaphor: "A group of friends playing a game with a simple object, laughing.",
      strengths: ["Sees play in ordinary moments", "Makes activities feel fresh", "Encourages creativity"],
      shadow_traits: ["Forgets to check if others want to play", "Makes everything feel like a game"],
      motto_chapter_themeword: "Play",
      narrative: "You're the friend who can turn any situation into a playful moment. Your creativity makes group time feel engaging. But sometimes you might turn serious moments into games without realizing it."
    },
    {
      archetype_name: "The Group's Quiet Connector",
      one_line_essence: "You're the one who probably makes sure no one feels left out.",
      visual_metaphor: "A group of friends sitting in a circle, with one person making eye contact with everyone.",
      strengths: ["Checks in with everyone", "Makes others feel seen", "Creates inclusive moments"],
      shadow_traits: ["Overlooks when someone wants space", "Makes inclusion feel forced"],
      motto_chapter_themeword: "Connect",
      narrative: "You're the friend who makes sure everyone has a chance to speak and feels included. Your quiet attention creates a safe space. But sometimes you might check in too often, making others feel like they're being monitored."
    }
  ];
  var shadowArchetypeLibrary = [
    {
      archetype_name: "The Quiet Observer",
      one_line_essence: "You're the one who sees the unspoken tension in the room before anyone else.",
      visual_metaphor: "A person sitting in the corner, watching the room with a calm expression.",
      strengths: ["Notices subtle shifts", "Stays calm under pressure", "Offers quiet support"],
      shadow_traits: ["Holds back too much", "Waits for others to speak first"],
      motto_chapter_themeword: "Quiet",
      narrative: "You're the person who notices when someone is upset before they say a word. You're the calm in the storm, but sometimes you hold back your own thoughts because you're waiting for the right moment to speak. You're the one who makes sure everyone feels heard, even if you don't say much."
    },
    {
      archetype_name: "The Unspoken Bridge",
      one_line_essence: "You're the one who feels the connection between people before it's named.",
      visual_metaphor: "Two people standing apart, with a faint bridge of light between them.",
      strengths: ["Senses unspoken bonds", "Makes connections feel natural", "Sees potential in relationships"],
      shadow_traits: ["Overlooks actual communication", "Assumes connections exist without evidence"],
      motto_chapter_themeword: "Bridge",
      narrative: "You're the person who feels when two people might connect before they even talk. Your intuition makes relationships feel effortless. But sometimes you might assume connections exist when they don't, missing the chance to help people actually talk to each other."
    },
    {
      archetype_name: "The Pattern Mirror",
      one_line_essence: "You're the one who reflects others' emotions back to them with uncanny accuracy.",
      visual_metaphor: "A person standing in front of a mirror that shows their own expression.",
      strengths: ["Picks up on emotional cues", "Makes others feel understood", "Reflects feelings without judgment"],
      shadow_traits: ["Overidentifies with others' emotions", "Loses own perspective in reflection"],
      motto_chapter_themeword: "Mirror",
      narrative: "You're the person who can mirror others' emotions so accurately that they feel truly seen. Your reflection makes people feel understood. But sometimes you might absorb others' feelings so completely that you lose your own sense of self in the process."
    },
    {
      archetype_name: "The Unspoken Current",
      one_line_essence: "You're the one who feels the flow of group energy without needing to name it.",
      visual_metaphor: "A group of people moving together in a gentle current.",
      strengths: ["Senses group dynamics", "Makes transitions feel natural", "Knows when to move with the flow"],
      shadow_traits: ["Ignores when the flow is negative", "Follows the current without questioning"],
      motto_chapter_themeword: "Current",
      narrative: "You're the person who feels when a group is moving in a certain direction without needing to be told. Your intuition makes group movement feel effortless. But sometimes you might follow the current even when it's leading somewhere you don't want to go."
    },
    {
      archetype_name: "The Quiet Catalyst",
      one_line_essence: "You're the one who sparks change without needing to be seen.",
      visual_metaphor: "A single stone dropped in a pond, creating ripples that spread outward.",
      strengths: ["Makes others feel empowered", "Creates momentum without taking credit", "Knows when to step back"],
      shadow_traits: ["Underestimates their own impact", "Waits for others to take the lead"],
      motto_chapter_themeword: "Ripple",
      narrative: "You're the quiet force behind many positive changes, making others feel capable and inspired. Your influence spreads through the people you support. But sometimes you might not realize how much you've moved the needle, waiting for others to take the spotlight."
    },
    {
      archetype_name: "The Unspoken Anchor",
      one_line_essence: "You're the one who feels the stability in a group before it's needed.",
      visual_metaphor: "A single stone in a river, holding its place against the current.",
      strengths: ["Provides steady presence", "Makes others feel secure", "Knows when to be still"],
      shadow_traits: ["Overemphasizes stability", "Resists necessary change"],
      motto_chapter_themeword: "Anchor",
      narrative: "You're the person who provides a sense of stability in group settings, making others feel secure. Your calm presence is a grounding force. But sometimes you might resist necessary change because you're focused on maintaining the current stability."
    },
    {
      archetype_name: "The Unspoken Translator",
      one_line_essence: "You're the one who makes complex ideas feel simple without realizing it.",
      visual_metaphor: "A person speaking, with simple shapes forming around them.",
      strengths: ["Simplifies complexity", "Makes ideas accessible", "Connects different ways of thinking"],
      shadow_traits: ["Oversimplifies important nuances", "Assumes others see things as you do"],
      motto_chapter_themeword: "Translate",
      narrative: "You're the person who can take complicated ideas and make them feel simple and clear. Your ability to translate makes others feel understood. But sometimes you might oversimplify important details, missing the complexity that matters."
    },
    {
      archetype_name: "The Unspoken Connector",
      one_line_essence: "You're the one who feels the threads between people without needing to say it.",
      visual_metaphor: "A web of thin threads connecting people in a group.",
      strengths: ["Sees hidden connections", "Makes relationships feel natural", "Brings people together effortlessly"],
      shadow_traits: ["Overlooks actual boundaries", "Forces connections that don't exist"],
      motto_chapter_themeword: "Thread",
      narrative: "You're the person who feels when two people might connect and makes it happen without effort. Your intuition makes relationships feel effortless. But sometimes you might force connections that aren't there, missing the importance of natural boundaries."
    },
    {
      archetype_name: "The Unspoken Guide",
      one_line_essence: "You're the one who knows the path without needing to be asked.",
      visual_metaphor: "A person walking ahead, with a faint path visible behind them.",
      strengths: ["Sees the way forward", "Makes decisions feel natural", "Knows when to lead"],
      shadow_traits: ["Assumes others know the path", "Forgets to explain the route"],
      motto_chapter_themeword: "Guide",
      narrative: "You're the person who seems to know the best way through a situation without needing to be asked. Your guidance makes group movement feel smooth. But sometimes you might assume others see the path as clearly as you do, forgetting to explain the route."
    },
    {
      archetype_name: "The Unspoken Mirror",
      one_line_essence: "You're the one who reflects others' potential back to them without realizing it.",
      visual_metaphor: "A person looking into a mirror that shows their own potential.",
      strengths: ["Sees potential in others", "Makes others feel capable", "Reflects confidence"],
      shadow_traits: ["Overlooks others' actual abilities", "Projects your own potential onto others"],
      motto_chapter_themeword: "Mirror",
      narrative: "You're the person who makes others feel capable by reflecting their potential back to them. Your belief in them helps them step forward. But sometimes you might project your own potential onto others, missing their actual abilities and limitations."
    }
  ];
  var bioLineLibrary = [
    {
      universal: "The Curious Cartographer, mapping the uncharted territory of ideas.",
      linkedin: "The Curious Cartographer, mapping the uncharted territory of ideas with a focus on connecting diverse perspectives."
    },
    {
      universal: "The Patient Gardener, nurturing ideas until they bloom in their own time.",
      linkedin: "The Patient Gardener, nurturing ideas until they bloom in their own time with a focus on sustainable growth."
    },
    {
      universal: "The Quiet Anchor, holding space for others to find their voice.",
      linkedin: "The Quiet Anchor, holding space for others to find their voice in collaborative environments."
    },
    {
      universal: "The Pattern Weaver, finding meaning in the threads connecting ideas.",
      linkedin: "The Pattern Weaver, finding meaning in the threads connecting ideas across disciplines."
    },
    {
      universal: "The Thoughtful Bridge, connecting worlds others keep apart.",
      linkedin: "The Thoughtful Bridge, connecting worlds others keep apart through intentional translation."
    },
    {
      universal: "The Intentional Listener, hearing what's unsaid before it's spoken.",
      linkedin: "The Intentional Listener, hearing what's unsaid before it's spoken to foster deeper connections."
    },
    {
      universal: "The Calm Current, moving through chaos without creating more turbulence.",
      linkedin: "The Calm Current, moving through chaos without creating more turbulence in team dynamics."
    },
    {
      universal: "The Idea Alchemist, transforming raw thoughts into something valuable.",
      linkedin: "The Idea Alchemist, transforming raw thoughts into something valuable through iterative refinement."
    },
    {
      universal: "The Pattern Interrupter, breaking cycles with unexpected perspectives.",
      linkedin: "The Pattern Interrupter, breaking cycles with unexpected perspectives to spark innovation."
    },
    {
      universal: "The Quiet Catalyst, sparking change without needing to be seen.",
      linkedin: "The Quiet Catalyst, sparking change without needing to be seen through subtle influence."
    }
  ];

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
      "What's the one word that describes how you show up in a group?",
      "What kind of problem do you love solving most?",
      "When you feel most like yourself, what are you doing?",
      "What quality do you admire in others that you also have?",
      "What's the most authentic part of you that you share?"
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
    var fields = fieldsOpt && fieldsOpt.length ? fieldsOpt.slice() : CONFIG.resultFields && CONFIG.resultFields.length ? CONFIG.resultFields.slice() : Object.keys(reading);
    fields = fields.filter(function(f) {
      var v2 = reading[f];
      return v2 != null && v2 !== "" && !(Array.isArray(v2) && !v2.length);
    });
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
    var html = '<article class="aios-tc" data-aios-templated-card="1" style="background:' + grad + '">' + (kick ? '<p class="aios-tc-kicker">' + esc(kick) + "</p>" : "") + '<h2 class="aios-tc-headline">' + esc(String(headline)) + "</h2>" + (subField ? '<p class="aios-tc-sub">' + esc(String(reading[subField])) + "</p>" : "") + secHtml + '<p class="aios-tc-foot">your result \xB7 keep or share</p></article>';
    return { html, css: TEMPLATED_CARD_CSS };
  }
  function pickFields(reading) {
    const f = CONFIG.resultFields && CONFIG.resultFields.length ? CONFIG.resultFields.slice() : Object.keys(reading || {});
    return f.filter((k) => {
      const v = reading[k];
      return v != null && v !== "" && !(Array.isArray(v) && !v.length);
    });
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
  function renderShareBar(reading, title, small) {
    const wrap = $("div", { "data-aios-share": "1", style: { display: "flex", flexDirection: "column", alignItems: "center", gap: sp(1) } });
    const btn = $("button", { type: "button", "data-aios-share-btn": "1", class: "aios-share-cta" + (small ? " sm" : "") }, [
      "\u21EA " + (CONFIG.share && CONFIG.share.cta || "Share your card")
    ]);
    const note = $("p", { "aria-live": "polite", style: { minHeight: "1em", fontSize: "0.78rem", opacity: "0.7", textAlign: "center", margin: "0", whiteSpace: "pre-wrap" } });
    btn.addEventListener("click", async () => {
      const cap = shareCaption(reading, title);
      const r = await doShare(cap);
      note.textContent = r === "copied" ? "Caption copied - paste it anywhere." : r === "shared" ? "Thanks for sharing!" : r === "cancelled" ? "" : cap;
    });
    wrap.appendChild(btn);
    wrap.appendChild(note);
    return wrap;
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
  function cardUnit(cardEl, reading, title, small) {
    const unit = $("div", { class: "aios-cardunit" });
    unit.appendChild(cardEl);
    if (CONFIG.hasCard) unit.appendChild(renderShareBar(reading, title, small));
    return unit;
  }
  function buildMainCard(reading) {
    if (!CONFIG.hasCard) return null;
    if (RENDER_CARD) {
      try {
        const card = RENDER_CARD(reading, 0);
        let html = "", css = "";
        if (typeof card === "string") html = card;
        else if (card && typeof card === "object") {
          html = card.html || card.markup || "";
          css = card.css || "";
        }
        if (/<[a-z][\s\S]*>/i.test(String(html))) {
          const holder2 = $("div", { style: { display: "contents" } });
          if (css) holder2.appendChild($("style", { html: String(css) }));
          holder2.appendChild($("div", { "data-aios-card": "1", "data-aios-card-source": "synthesized", style: { maxWidth: "100%", overflowX: "auto" }, html: String(html) }));
          return holder2;
        }
      } catch (e) {
      }
    }
    try {
      console.warn("[aios] synthesized card invalid or absent - rendered the deterministic templated card instead");
    } catch (e2) {
    }
    const tc = renderTemplatedCard(reading);
    const holder = $("div", { style: { display: "contents" } });
    holder.appendChild($("style", { html: tc.css }));
    holder.appendChild($("div", { "data-aios-card": "1", "data-aios-card-source": "templated-fallback", style: { maxWidth: "100%", overflowX: "auto" }, html: tc.html }));
    return holder;
  }
  function rewardCardData(reading, rc) {
    const bag = reading && reading.reward_cards;
    if (bag && bag[rc.id] && typeof bag[rc.id] === "object") return bag[rc.id];
    if (reading && reading[rc.id] && typeof reading[rc.id] === "object") return reading[rc.id];
    return null;
  }
  function buildRewardCardEl(data, label) {
    const tc = renderTemplatedCard(data, Object.keys(data), label);
    const holder = $("div", { style: { display: "contents" } });
    holder.appendChild($("style", { html: tc.css }));
    holder.appendChild($("div", { "data-aios-card": "1", "data-aios-reward-card": "1", style: { maxWidth: "100%", overflowX: "auto" }, html: tc.html }));
    return holder;
  }
  function renderRewardCards(reading, into) {
    let n = 0;
    const mainHead = String(cardHeadline(reading) || "").trim().toLowerCase();
    for (const rc of CONFIG.rewardCards || []) {
      const data = rewardCardData(reading, rc);
      const sec = $("div", { "data-aios-reward": rc.id, style: { display: "flex", flexDirection: "column", gap: sp(2) } });
      sec.appendChild($("p", { class: "aios-reading-label", style: { margin: "0" } }, [rc.label || fieldLabel(rc.id)]));
      if (!data) {
        sec.appendChild($("p", { style: { fontSize: "0.85rem", opacity: "0.65", margin: "0" } }, ["This bonus card was not produced for this build yet."]));
        sec.setAttribute("data-aios-reward-missing", "1");
      } else {
        const head = String(cardHeadline(data) || "").trim().toLowerCase();
        if (head && head === mainHead) sec.setAttribute("data-aios-reward-redundant", "1");
        sec.appendChild(cardUnit(buildRewardCardEl(data, rc.label), data, cardHeadline(data), true));
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
  function copyRow(label, text) {
    var row = $("div", { "data-aios-bioline": "1", style: { display: "flex", flexDirection: "column", gap: sp(1) } });
    if (label) row.appendChild($("p", { class: "aios-reading-label", style: { margin: "0" } }, [label]));
    var line = $("p", { "data-aios-bio-text": "1", style: { margin: "0", fontSize: "1rem", lineHeight: "1.5" } }, [text]);
    var btn = $("button", { type: "button", "data-aios-copy": "1", class: "aios-copy-btn" }, ["Copy"]);
    var note = $("span", { "aria-live": "polite", style: { fontSize: "0.75rem", opacity: "0.7", marginLeft: sp(2) } });
    btn.addEventListener("click", async function() {
      try {
        await navigator.clipboard.writeText(text);
        note.textContent = "Copied!";
      } catch (e) {
        note.textContent = "Select the line to copy.";
      }
    });
    var bar = $("div", { style: { display: "flex", alignItems: "center", gap: sp(2), flexWrap: "wrap" } });
    bar.appendChild(btn);
    bar.appendChild(note);
    row.appendChild(line);
    row.appendChild(bar);
    return row;
  }
  function renderBioLine(reading) {
    if (!CONFIG.bioLine || !CONFIG.bioLine.enabled) return null;
    var data = bioLineData(reading);
    var wrap = $("div", { "data-aios-bio": "1", class: "aios-reading", style: { gap: sp(3) } });
    wrap.appendChild($("p", { class: "aios-reading-label", style: { margin: "0" } }, ["Your bio line - add it to your profile"]));
    if (!data || !data.universal) {
      wrap.appendChild($("p", { style: { margin: "0", fontSize: "0.85rem", opacity: "0.65" } }, ["Your bio line was not produced for this build yet."]));
      wrap.setAttribute("data-aios-bio-missing", "1");
      return wrap;
    }
    wrap.appendChild(copyRow("", data.universal));
    if (CONFIG.bioLine.linkedin && data.linkedin) wrap.appendChild(copyRow("LinkedIn", data.linkedin));
    return wrap;
  }
  function captureTeaseText() {
    const labels = (CONFIG.rewardCards || []).map((rc) => rc.label || fieldLabel(rc.id)).filter(Boolean);
    const base = "Enter your email to get your full reading";
    if (!labels.length) return base + ".";
    const joined = labels.length === 1 ? labels[0] : labels.slice(0, -1).join(", ") + " and " + labels[labels.length - 1];
    return base + " plus your " + joined + ".";
  }
  function renderResult(reading, ctx) {
    const r = clear();
    if (!r) return;
    r.setAttribute("data-screen", "result");
    const box = $("div", { "data-aios-result": "1", style: { maxWidth: "40rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: sp(4) } });
    const cardEl = buildMainCard(reading);
    if (cardEl) {
      box.appendChild(cardUnit(cardEl, reading, cardHeadline(reading), false));
    } else {
      box.appendChild(renderFields(reading, CONFIG.resultFields.slice(0, 3), "teaser"));
    }
    if (CONFIG.capture.enabled) {
      box.appendChild(renderCapture(reading, ctx));
    } else {
      box.appendChild(renderReading(reading, pickFields(reading)));
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
        insert(renderReading(reading, pickFields(reading)));
        if ((CONFIG.rewardCards || []).length) {
          const rewardWrap = $("div", { "data-aios-rewards": "1", style: { display: "flex", flexDirection: "column", gap: sp(4) } });
          renderRewardCards(reading, rewardWrap);
          insert(rewardWrap);
        }
        const bio = renderBioLine(reading);
        if (bio) insert(bio);
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
    style.textContent = "html,body{margin:0;max-width:100%;overflow-x:hidden}#aios-app-root{box-sizing:border-box;max-width:100%;padding:var(--aios-space-4,1rem)}#aios-app-root *{max-width:100%;box-sizing:border-box}#aios-app-root img{height:auto}.aios-share-cta{display:flex;align-items:center;justify-content:center;gap:.5rem;width:100%;padding:.95rem 1rem;border:0;border-radius:13px;font-size:1.05rem;font-weight:800;letter-spacing:.2px;cursor:pointer;color:#fff;background:linear-gradient(135deg,#7c3aed,#2563eb);box-shadow:0 12px 28px -8px rgba(37,99,235,.6);position:relative;overflow:hidden}.aios-share-cta::after{content:'';position:absolute;inset:0;background:linear-gradient(110deg,transparent 32%,rgba(255,255,255,.4) 50%,transparent 68%);transform:translateX(-120%);animation:aios-sheen 2.8s ease-in-out infinite}.aios-share-cta:hover{filter:brightness(1.07)}@keyframes aios-sheen{0%{transform:translateX(-120%)}55%,100%{transform:translateX(120%)}}.aios-share-cta.sm{width:auto;padding:.5rem .85rem;font-size:.82rem;border-radius:10px;box-shadow:0 6px 16px -6px rgba(37,99,235,.5)}.aios-share-cta.sm::after{animation-duration:3.4s}.aios-reading{display:flex;flex-direction:column;gap:1rem;margin-top:.3rem;padding:1.15rem 1.2rem;border-radius:14px;background:rgba(127,127,127,.06);border:1px solid rgba(127,127,127,.18)}.aios-reading-label{margin:0 0 .3rem;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;opacity:.6}.aios-reading-val{margin:0;font-size:1rem;line-height:1.55;white-space:pre-wrap}.aios-reading-chips{display:flex;flex-wrap:wrap;gap:.4rem;margin:.1rem 0 0;padding:0;list-style:none}.aios-reading-chip{padding:.28rem .7rem;border-radius:999px;font-size:.85rem;background:rgba(127,127,127,.14);border:1px solid rgba(127,127,127,.24)}.aios-market-wrap{text-align:center;margin-top:.3rem}.aios-market-link{display:inline-block;font-size:.8rem;opacity:.55;text-decoration:none;color:inherit;border-bottom:1px solid transparent}.aios-market-link:hover{opacity:.9;border-bottom-color:currentColor}.aios-tease{margin:0 0 .55rem;font-size:.98rem;font-weight:600;line-height:1.45}.aios-copy-btn{padding:.45rem .9rem;border-radius:9px;border:1px solid rgba(127,127,127,.35);background:rgba(127,127,127,.08);font-size:.85rem;font-weight:600;cursor:pointer;color:inherit}.aios-copy-btn:hover{background:rgba(127,127,127,.16)}.aios-cardunit{display:flex;flex-direction:column;gap:.6rem}@media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}";
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
