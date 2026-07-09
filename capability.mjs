const archetypes = [
  {
    archetype_name: "The Builder",
    one_line_essence: "You're the one who turns ideas into reality with steady hands and a clear plan.",
    visual_metaphor: "A master carpenter shaping a table from raw wood",
    strengths: ["Precision", "Reliability", "Patience"],
    shadow_traits: ["Rigidity", "Over-planning"],
    motto_chapter_themeword: "Foundation",
    narrative: "Your strength lies in your ability to build enduring structures, both physical and metaphorical. You are the quiet force that holds things together, but sometimes you may overlook the need for flexibility in the face of unexpected change."
  },
  {
    archetype_name: "The Seeker",
    one_line_essence: "You're the one who follows the path less traveled, guided by curiosity and a thirst for discovery.",
    visual_metaphor: "A traveler with a compass, walking through a misty forest",
    strengths: ["Curiosity", "Adaptability", "Open-mindedness"],
    shadow_traits: ["Restlessness", "Avoidance of commitment"],
    motto_chapter_themeword: "Horizon",
    narrative: "You are driven by the unknown, always seeking the next horizon. Your journey is marked by a series of discoveries, but you may sometimes struggle to settle in one place or commit to a single path."
  },
  {
    archetype_name: "The Hidden Light",
    one_line_essence: "You're the one who illuminates the unseen, bringing clarity to the shadows with gentle wisdom.",
    visual_metaphor: "A candle in a dark room, casting soft light on a book",
    strengths: ["Empathy", "Clarity", "Intuition"],
    shadow_traits: ["Self-doubt", "Over-idealism"],
    motto_chapter_themeword: "Glow",
    narrative: "You have a unique ability to see the potential in others and in situations that others overlook. Your quiet presence can transform confusion into understanding, but you may sometimes question your own worth."
  },
  {
    archetype_name: "The Driven Heart",
    one_line_essence: "You're the one who moves with passion, guided by deep emotions and a desire to connect.",
    visual_metaphor: "A dancer moving with grace and emotion in a spotlight",
    strengths: ["Passion", "Compassion", "Authenticity"],
    shadow_traits: ["Emotional volatility", "Over-sensitivity"],
    motto_chapter_themeword: "Heartbeat",
    narrative: "Your life is a rhythm of deep feeling and connection. You are moved by the world and move others with your authenticity, but you may sometimes be overwhelmed by the intensity of your emotions."
  },
  {
    archetype_name: "The Quiet Mind",
    one_line_essence: "You're the one who finds clarity in stillness, solving complex problems with calm focus.",
    visual_metaphor: "A person meditating by a calm lake, reflecting the sky",
    strengths: ["Focus", "Analytical", "Calmness"],
    shadow_traits: ["Detachment", "Indecisiveness"],
    motto_chapter_themeword: "Stillness",
    narrative: "You are the calm in the storm, able to see the big picture and solve problems with a clear mind. Your stillness is a strength, but it can sometimes lead to hesitation when action is needed."
  }
];

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h = h & 0xFFFFFFFF;
  }
  return h;
}

export function runCapability(input) {
  const key = input.firstName ? `${input.firstName}|||${input.answers.join("|||")}` : input.answers.join("|||");
  const hashValue = hash(key);
  const index = Math.abs(hashValue) % archetypes.length;
  return archetypes[index];
}