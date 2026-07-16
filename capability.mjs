export function runCapability(input) {
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
      h = ((h << 5) - h) + str.charCodeAt(i);
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