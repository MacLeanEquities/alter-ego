// Assembled by the Logic Synthesizer v0.1.0 (Wave 2.4 bounded per-piece generation).

// The main engine, each reward card, and the bio were each generated in their OWN

// bounded local call; each is namespaced in an IIFE so helpers cannot collide.

const _main = (() => {
function runCapability(input) {
  // Fixed library of 100 specific, non-generic archetypes
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
      h = ((h << 5) + h) ^ str.charCodeAt(i);
    }
    return h;
  }

  const inputStr = JSON.stringify(input);
  const hashValue = hash(inputStr);
  const index = Math.abs(hashValue) % archetypeLibrary.length;
  return archetypeLibrary[index];
}
return { runCapability };
})();

const _rc_friend_group_ego = (() => {
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
      h = (h * 131 + c.charCodeAt(0)) % 1000000;
    }
  }
  return h;
}

function rewardCard(input) {
  const index = hashArray(input.answers) % 3;
  const selected = library[index];
  const bio_line = selected.bio_template.replace('[firstName]', input.firstName);
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

const _rc_shadow_ego = (() => {
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

    const key = input.answers.join('|');
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash * 31 + key.charCodeAt(i)) % 1000000;
    }
    const index = hash % 3;
    return readings[index];
}
return { rewardCard };
})();

const _bio = (() => {
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

    const inputWords = new Set();
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
        const candidateWords = new Set();
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

export function runCapability(input) {
  const _out = Object.assign({}, _main.runCapability(input));
  const reward_cards = {};
  reward_cards["friend_group_ego"] = _rc_friend_group_ego.rewardCard(input);
  reward_cards["shadow_ego"] = _rc_shadow_ego.rewardCard(input);
  _out.reward_cards = reward_cards;
  _out.bio_line = _bio.bioLine(input);
  return _out;
}
