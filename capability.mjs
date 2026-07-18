// Assembled by the Logic Synthesizer v0.1.0 (Wave 2.4 bounded per-piece generation).

// The main engine, each reward card, and the bio were each generated in their OWN

// bounded local call; each is namespaced in an IIFE so helpers cannot collide.

const _main = (() => {
function runCapability(input) {
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
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash = hash & 0xFFFFFFFF;
    }
    return Math.abs(hash) % archetypeList.length;
  }

  const inputString = input.answers.join('|');
  const index = hashString(inputString);
  return archetypeList[index];
}
return { runCapability };
})();

const _rc_friend_group_ego = (() => {
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
      signature: ['connect', 'together', 'group', 'gather', 'network']
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
      signature: ['laugh', 'fun', 'joke', 'play', 'light']
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
      signature: ['steady', 'reliable', 'calm', 'support', 'grounded']
    }
  ];

  const text = input.answers.join(' ').toLowerCase();
  const words = text.split(/\W+/).filter(w => w.length > 0);
  const wordSet = new Set(words);

  let bestCandidate = candidates[0];
  let bestScore = -1;

  for (const candidate of candidates) {
    const score = candidate.signature.filter(word => wordSet.has(word)).length;
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

const _rc_shadow_ego = (() => {
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
      hash = (hash * 131 + str.charCodeAt(i)) % 1000000;
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

const _bio = (() => {
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

export function runCapability(input) {
  const _out = Object.assign({}, _main.runCapability(input));
  const reward_cards = {};
  reward_cards["friend_group_ego"] = _rc_friend_group_ego.rewardCard(input);
  reward_cards["shadow_ego"] = _rc_shadow_ego.rewardCard(input);
  _out.reward_cards = reward_cards;
  _out.bio_line = _bio.bioLine(input);
  return _out;
}
