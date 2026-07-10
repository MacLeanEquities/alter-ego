const archetypes = [
  {
    archetype_name: "The Quiet Weaver",
    one_line_essence: "You're the one who weaves connections from the quietest threads, ${name}.",
    visual_metaphor: "A tapestry of moonlight and starlight, each thread a shared moment",
    strengths: ["Active listening", "Patience", "Intuitive empathy"],
    shadow_traits: ["Overlooks their own needs", "Avoids conflict"],
    motto_chapter_themeword: "Threads",
    narrative: "You find magic in the spaces between words. Your presence turns ordinary moments into intimate conversations, and you have a rare gift for making others feel truly seen. In your quiet strength, you build bridges where others see walls."
  },
  {
    archetype_name: "The Bold Catalyst",
    one_line_essence: "You're the one who ignites change with a single spark, ${name}.",
    visual_metaphor: "A single match striking in a dark room, lighting a path for others",
    strengths: ["Courage", "Vision", "Decisiveness"],
    shadow_traits: ["Impatience", "Overlooks details"],
    motto_chapter_themeword: "Spark",
    narrative: "You are the spark that lights the way when others hesitate. Your boldness turns 'what if' into 'let's do it now'. You inspire action, but remember to pause and let the fire breathe."
  },
  {
    archetype_name: "The Thoughtful Architect",
    one_line_essence: "You're the one who designs spaces where ideas take root, ${name}.",
    visual_metaphor: "A blueprint of interconnected pathways, glowing softly in the dark",
    strengths: ["Strategic thinking", "Clarity", "Patience"],
    shadow_traits: ["Over-engineers", "Hesitates to act"],
    motto_chapter_themeword: "Blueprint",
    narrative: "You see the hidden structure in chaos and build frameworks that make the complex feel simple. Your designs are not just functional, but deeply human. Remember to trust your instincts when the blueprint feels too rigid."
  },
  {
    archetype_name: "The Compassionate Guide",
    one_line_essence: "You're the one who lights the way with kindness, ${name}.",
    visual_metaphor: "A lantern carried through a misty forest, casting a warm circle of light",
    strengths: ["Empathy", "Supportiveness", "Resilience"],
    shadow_traits: ["Takes on too much", "Struggles to say no"],
    motto_chapter_themeword: "Lantern",
    narrative: "You are the steady hand that helps others navigate uncertainty. Your kindness is not passive, but a powerful force that creates safety. In your care, others find the courage to move forward."
  },
  {
    archetype_name: "The Curious Explorer",
    one_line_essence: "You're the one who finds wonder in the uncharted, ${name}.",
    visual_metaphor: "A compass pointing toward a horizon of unknown stars",
    strengths: ["Curiosity", "Adaptability", "Open-mindedness"],
    shadow_traits: ["Distracted by new ideas", "Overlooks the obvious"],
    motto_chapter_themeword: "Horizon",
    narrative: "You are driven by the thrill of discovery, always seeking the next horizon. Your curiosity opens doors to new perspectives, but remember to ground yourself in the present to fully appreciate the journey."
  },
  {
    archetype_name: "The Steadfast Guardian",
    one_line_essence: "You're the one who stands firm when the world trembles, ${name}.",
    visual_metaphor: "A lighthouse weathering a storm, its beam cutting through the dark",
    strengths: ["Loyalty", "Steadfastness", "Protection"],
    shadow_traits: ["Rigid", "Fears vulnerability"],
    motto_chapter_themeword: "Lighthouse",
    narrative: "You are the unwavering anchor in times of chaos. Your strength lies in your ability to protect and provide stability. But remember, even lighthouses need to rest and let the storm pass."
  },
  {
    archetype_name: "The Creative Alchemist",
    one_line_essence: "You're the one who turns ordinary moments into gold, ${name}.",
    visual_metaphor: "A pot of bubbling liquid, transforming base metals into shimmering gold",
    strengths: ["Creativity", "Resourcefulness", "Transformation"],
    shadow_traits: ["Overlooks practicality", "Seeks constant change"],
    motto_chapter_themeword: "Alchemy",
    narrative: "You see potential where others see limitations. Your creativity turns the mundane into the magical. But remember, even gold needs a solid foundation to shine."
  },
  {
    archetype_name: "The Harmonious Mediator",
    one_line_essence: "You're the one who finds the melody in the chaos, ${name}.",
    visual_metaphor: "A conductor's baton weaving together a symphony of diverse instruments",
    strengths: ["Conflict resolution", "Listening", "Balance"],
    shadow_traits: ["Avoids necessary confrontation", "Seeks harmony at all costs"],
    motto_chapter_themeword: "Symphony",
    narrative: "You are the bridge between opposing forces, finding harmony in the midst of discord. Your gift is making the whole greater than the sum of its parts. But remember, true harmony sometimes requires a little dissonance to grow."
  },
  {
    archetype_name: "The Resilient Pioneer",
    one_line_essence: "You're the one who plants seeds in uncharted soil, ${name}.",
    visual_metaphor: "A single sapling growing through cracked concrete, reaching for the sky",
    strengths: ["Resilience", "Courage", "Innovation"],
    shadow_traits: ["Overlooks support", "Burns out quickly"],
    motto_chapter_themeword: "Sapling",
    narrative: "You are the first to step into the unknown, planting the seeds of what's next. Your resilience turns obstacles into stepping stones. But remember to nurture yourself as you nurture the future."
  },
  {
    archetype_name: "The Insightful Observer",
    one_line_essence: "You're the one who sees the hidden patterns, ${name}.",
    visual_metaphor: "A magnifying glass revealing intricate details in a leaf's vein",
    strengths: ["Perception", "Analysis", "Patience"],
    shadow_traits: ["Overthinks", "Withholds judgment"],
    motto_chapter_themeword: "Vein",
    narrative: "You see the world in layers, uncovering the hidden stories beneath the surface. Your insights guide others to see more deeply. But remember, sometimes the most important patterns are found in the spaces between the lines."
  }
];

export function runCapability(input) {
  const s = input.answers.join("|||");
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  const index = h % 10;
  const archetype = archetypes[index];
  const oneLine = archetype.one_line_essence.replace(/\${name}/g, input.firstName || "friend");
  return {
    archetype_name: archetype.archetype_name,
    one_line_essence: oneLine,
    visual_metaphor: archetype.visual_metaphor,
    strengths: archetype.strengths,
    shadow_traits: archetype.shadow_traits,
    motto_chapter_themeword: archetype.motto_chapter_themeword,
    narrative: archetype.narrative
  };
}