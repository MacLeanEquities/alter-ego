// Predefined libraries for deterministic archetype selection
const mainArchetypes = [
  {
    archetype_name: "The Bridge Builder",
    one_line_essence: "You're the one who connects the dots between people and ideas.",
    visual_metaphor: "A stone bridge over a rushing river, with footprints on both sides",
    strengths: ["Empathetic", "Patient", "Resourceful"],
    shadow_traits: ["Overly cautious", "Avoids conflict"],
    motto_chapter_themeword: "Connect",
    narrative: "You see the gaps in the conversation and fill them with understanding. Your strength is in making others feel heard, but sometimes you hold back to keep the peace.",
    keywords: ["bridge", "connect", "build", "together"]
  },
  {
    archetype_name: "The Quiet Listener",
    one_line_essence: "You're the one who hears the unspoken and responds with gentle insight.",
    visual_metaphor: "A calm pond reflecting the moonlight, with ripples from a single stone",
    strengths: ["Attentive", "Thoughtful", "Supportive"],
    shadow_traits: ["Too quiet", "Holds back too much"],
    motto_chapter_themeword: "Listen",
    narrative: "You notice the subtle shifts in tone and respond with just the right words. Your quiet presence makes others feel safe, but you sometimes miss opportunities to speak up.",
    keywords: ["listen", "quiet", "hear", "reflect"]
  },
  {
    archetype_name: "The Idea Catalyst",
    one_line_essence: "You're the one who sparks new thoughts and turns 'what if' into 'let's do it'.",
    visual_metaphor: "A spark igniting a trail of fireflies in the night",
    strengths: ["Innovative", "Energetic", "Encouraging"],
    shadow_traits: ["Overwhelms with ideas", "Fails to follow through"],
    motto_chapter_themeword: "Spark",
    narrative: "You're the one who brings fresh perspectives to the table. Your energy is contagious, but you sometimes leave others scrambling to catch up.",
    keywords: ["spark", "idea", "catalyst", "innovate"]
  }
];

const friendGroupArchetypes = [
  {
    archetype_name: "The Connector",
    one_line_essence: "You're the one who brings people together and makes the group feel like home.",
    visual_metaphor: "A circle of friends sharing a campfire under a starry sky",
    strengths: ["Warm", "Inclusive", "Organized"],
    shadow_traits: ["Overly focused on group harmony", "Ignores individual needs"],
    motto_chapter_themeword: "Group",
    narrative: "You're the glue that holds the group together, always making sure everyone feels included. Your warmth makes gatherings feel effortless, but you might overlook someone who needs a moment alone.",
    keywords: ["connect", "group", "home", "glue"]
  },
  {
    archetype_name: "The Storyteller",
    one_line_essence: "You're the one who turns ordinary moments into shared memories.",
    visual_metaphor: "A group of friends laughing around a table, with a storybook open in the center",
    strengths: ["Engaging", "Creative", "Memory-maker"],
    shadow_traits: ["Tells the same stories too often", "Overlooks the present moment"],
    motto_chapter_themeword: "Story",
    narrative: "You have a way of making every gathering feel special with your tales. Your stories create a sense of belonging, but you might get stuck in the past.",
    keywords: ["story", "memory", "laugh", "gather"]
  },
  {
    archetype_name: "The Energizer",
    one_line_essence: "You're the one who keeps the group moving and laughing through the tough times.",
    visual_metaphor: "A group of friends dancing in the rain, with umbrellas held high",
    strengths: ["Upbeat", "Resilient", "Fun"],
    shadow_traits: ["Forces fun when it's not needed", "Ignores serious moments"],
    motto_chapter_themeword: "Energize",
    narrative: "You're the one who turns a dull evening into an adventure. Your energy lifts everyone, but you might not notice when someone needs a quiet moment.",
    keywords: ["energize", "fun", "dance", "laugh"]
  }
];

const shadowArchetypes = [
  {
    archetype_name: "The Hidden Weaver",
    one_line_essence: "You're the one who quietly shapes the group's dynamics from the background.",
    visual_metaphor: "A spider weaving a web in the shadows of a garden",
    strengths: ["Subtle", "Perceptive", "Patient"],
    shadow_traits: ["Too passive", "Fears being noticed"],
    motto_chapter_themeword: "Weave",
    narrative: "You're the one who notices the unspoken tensions and gently guides the group. Your quiet influence is powerful, but you might hold back from speaking up when it's needed.",
    keywords: ["weave", "hidden", "quiet", "background"]
  },
  {
    archetype_name: "The Reflective Observer",
    one_line_essence: "You're the one who sees the deeper meaning in every interaction.",
    visual_metaphor: "A person sitting by a window, watching the world go by",
    strengths: ["Insightful", "Calm", "Introspective"],
    shadow_traits: ["Too detached", "Struggles to act"],
    motto_chapter_themeword: "Observe",
    narrative: "You're the one who understands the unspoken emotions in the room. Your insights are valuable, but you might not step in when action is required.",
    keywords: ["observe", "reflect", "deep", "understand"]
  },
  {
    archetype_name: "The Unspoken Guide",
    one_line_essence: "You're the one who leads without being the loudest voice.",
    visual_metaphor: "A lighthouse guiding ships through fog",
    strengths: ["Guiding", "Steady", "Trustworthy"],
    shadow_traits: ["Too reserved", "Waits for others to lead"],
    motto_chapter_themeword: "Guide",
    narrative: "You're the one who provides steady direction without drawing attention. Your calm presence is a comfort, but you might not speak up when you have a strong opinion.",
    keywords: ["guide", "lighthouse", "steady", "trust"]
  }
];

const bioLineMap = {
  "The Bridge Builder": {
    universal: "I connect people and ideas, building bridges where there were gaps. I thrive on understanding the unspoken.",
    linkedin: "I'm the one who notices the silences in conversations and fills them with understanding. I build connections that last, turning strangers into collaborators."
  },
  "The Quiet Listener": {
    universal: "I hear the unspoken and respond with gentle insight. I make others feel safe to share.",
    linkedin: "I listen deeply to understand, not just to respond. My quiet presence creates a space where people feel heard and valued."
  },
  "The Idea Catalyst": {
    universal: "I spark new thoughts and turn 'what if' into 'let's do it'. I thrive on fresh perspectives.",
    linkedin: "I'm the one who brings innovative ideas to the table and turns them into action. My energy fuels collaboration and creativity."
  }
};

function selectByIndex(library, input) {
  const len = input.answers[0].length;
  const index = len % library.length;
  return library[index];
}

function selectDistinct(library, input, excludedNames) {
  const len = input.answers[0].length;
  const baseIndex = len % library.length;
  let index = baseIndex;
  for (let i = 0; i < library.length; i++) {
    const candidate = library[index];
    if (!excludedNames.includes(candidate.archetype_name)) {
      return candidate;
    }
    index = (index + 1) % library.length;
  }
  return library[0];
}

export function runCapability(input) {
  const mainArchetype = selectByIndex(mainArchetypes, input);
  const friendGroupArchetype = selectDistinct(friendGroupArchetypes, input, [mainArchetype.archetype_name]);
  const shadowArchetype = selectDistinct(shadowArchetypes, input, [
    mainArchetype.archetype_name,
    friendGroupArchetype.archetype_name
  ]);

  const result = {
    archetype_name: mainArchetype.archetype_name,
    one_line_essence: mainArchetype.one_line_essence,
    visual_metaphor: mainArchetype.visual_metaphor,
    strengths: mainArchetype.strengths,
    shadow_traits: mainArchetype.shadow_traits,
    motto_chapter_themeword: mainArchetype.motto_chapter_themeword,
    narrative: mainArchetype.narrative
  };

  const reward_cards = {
    friend_group_ego: {
      archetype_name: friendGroupArchetype.archetype_name,
      one_line_essence: friendGroupArchetype.one_line_essence,
      visual_metaphor: friendGroupArchetype.visual_metaphor,
      strengths: friendGroupArchetype.strengths,
      shadow_traits: friendGroupArchetype.shadow_traits,
      motto_chapter_themeword: friendGroupArchetype.motto_chapter_themeword,
      narrative: friendGroupArchetype.narrative
    },
    shadow_ego: {
      archetype_name: shadowArchetype.archetype_name,
      one_line_essence: shadowArchetype.one_line_essence,
      visual_metaphor: shadowArchetype.visual_metaphor,
      strengths: shadowArchetype.strengths,
      shadow_traits: shadowArchetype.shadow_traits,
      motto_chapter_themeword: shadowArchetype.motto_chapter_themeword,
      narrative: shadowArchetype.narrative
    }
  };

  const bio_line = bioLineMap[mainArchetype.archetype_name];

  return {
    ...result,
    reward_cards,
    bio_line
  };
}