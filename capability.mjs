const archetypeLibrary = [
  {
    archetype_name: "The Bridge Builder",
    one_line_essence: "You're the one who connects people across divides.",
    visual_metaphor: "A stone bridge over a rushing river",
    strengths: ["Active listening", "Finding common ground", "Patience"],
    shadow_traits: ["Overly accommodating", "Avoids conflict"],
    motto_chapter_themeword: "Bridge",
    narrative: "You thrive when you can bring together diverse perspectives. Your patience and active listening help others feel heard, but sometimes you put others' needs before your own, leading to burnout."
  },
  {
    archetype_name: "The Quiet Observer",
    one_line_essence: "You're the one who notices the unspoken details.",
    visual_metaphor: "A still pond reflecting the sky",
    strengths: ["Attentive", "Perceptive", "Thoughtful"],
    shadow_traits: ["Takes time to share personal stories", "Hesitates to speak up in group settings"],
    motto_chapter_themeword: "Stillness",
    narrative: "You see the subtle shifts in a room and understand unspoken emotions. Your quiet presence makes others feel safe, but you sometimes hold back your own voice, missing opportunities to contribute."
  },
  {
    archetype_name: "The Spark Igniter",
    one_line_essence: "You're the one who turns ideas into action.",
    visual_metaphor: "A spark striking flint",
    strengths: ["Energetic", "Innovative", "Encouraging"],
    shadow_traits: ["Rushes to action without planning", "Overlooks details"],
    motto_chapter_themeword: "Spark",
    narrative: "You light the fire for new projects and inspire others to join. Your energy is contagious, but you sometimes skip the planning phase, leading to unexpected challenges."
  },
  {
    archetype_name: "The Calm Anchor",
    one_line_essence: "You're the one who keeps things steady in chaos.",
    visual_metaphor: "A lighthouse in a storm",
    strengths: ["Steadfast", "Reassuring", "Level-headed"],
    shadow_traits: ["Resists change", "Takes too long to adapt"],
    motto_chapter_themeword: "Anchor",
    narrative: "You provide stability when things feel uncertain. Your calm demeanor helps others feel secure, but you may struggle to embrace new approaches when the situation changes."
  },
  {
    archetype_name: "The Pattern Finder",
    one_line_essence: "You're the one who sees connections others miss.",
    visual_metaphor: "A spider weaving a web",
    strengths: ["Analytical", "Creative", "Detail-oriented"],
    shadow_traits: ["Overanalyzes", "Sees patterns where none exist"],
    motto_chapter_themeword: "Pattern",
    narrative: "You spot the hidden links between ideas and events. Your insight helps solve complex problems, but you sometimes get stuck in the details, missing the bigger picture."
  },
  {
    archetype_name: "The Empathic Guide",
    one_line_essence: "You're the one who helps others find their path.",
    visual_metaphor: "A compass in a forest",
    strengths: ["Compassionate", "Supportive", "Patient"],
    shadow_traits: ["Takes on others' problems as their own", "Struggles to set boundaries"],
    motto_chapter_themeword: "Guide",
    narrative: "You help others navigate their challenges with kindness and understanding. Your empathy is a gift, but you may take on too much, leaving little energy for yourself."
  },
  {
    archetype_name: "The Thoughtful Connector",
    one_line_essence: "You're the one who builds meaningful connections.",
    visual_metaphor: "A network of glowing threads",
    strengths: ["Relational", "Inclusive", "Trustworthy"],
    shadow_traits: ["Overlooks their own needs", "Seeks validation from others"],
    motto_chapter_themeword: "Thread",
    narrative: "You create deep bonds by genuinely caring for others. Your inclusivity makes people feel valued, but you sometimes neglect your own well-being to keep the connections strong."
  },
  {
    archetype_name: "The Steady Hand",
    one_line_essence: "You're the one who gets things done reliably.",
    visual_metaphor: "A well-worn tool in a toolbox",
    strengths: ["Reliable", "Practical", "Consistent"],
    shadow_traits: ["Resists new methods", "Prefers routine"],
    motto_chapter_themeword: "Hand",
    narrative: "You are the dependable person who ensures tasks are completed. Your consistency is a strength, but you may be slow to adopt new tools or approaches when they could improve efficiency."
  },
  {
    archetype_name: "The Curious Explorer",
    one_line_essence: "You're the one who seeks new experiences.",
    visual_metaphor: "A compass pointing to unknown lands",
    strengths: ["Inquisitive", "Adaptable", "Open-minded"],
    shadow_traits: ["Gets distracted easily", "Leaves tasks unfinished"],
    motto_chapter_themeword: "Explore",
    narrative: "You are always eager to learn and try new things. Your curiosity drives innovation, but you sometimes lose focus on current projects to chase the next adventure."
  },
  {
    archetype_name: "The Patient Listener",
    one_line_essence: "You're the one who gives space for others to speak.",
    visual_metaphor: "A comfortable chair in a quiet room",
    strengths: ["Attentive", "Supportive", "Non-judgmental"],
    shadow_traits: ["Takes too long to respond", "Avoids direct feedback"],
    motto_chapter_themeword: "Listen",
    narrative: "You create a safe space for others to share. Your patience helps people open up, but you may wait too long to offer your own perspective or address issues directly."
  }
];

function computeHash(answers) {
  let hash = 0;
  for (const answer of answers) {
    for (const char of answer) {
      hash = ((hash << 5) - hash) + char.charCodeAt(0);
      hash = hash & 0xFFFFFFFF;
    }
  }
  return hash;
}

export function runCapability(input) {
  const hash = computeHash(input.answers);
  const index = (hash % 10 + 10) % 10;
  const mainCard = archetypeLibrary[index];
  const friendGroupCard = archetypeLibrary[(index + 1) % 10];
  const shadowCard = archetypeLibrary[(index + 2) % 10];
  
  const reward_cards = {
    friend_group_ego: friendGroupCard,
    shadow_ego: shadowCard
  };
  
  const universalBio = `${mainCard.archetype_name}, the one who ${mainCard.one_line_essence.replace(/^You're the one who /, '')}`;
  const linkedinBio = `${mainCard.archetype_name}, the one who ${mainCard.one_line_essence.replace(/^You're the one who /, '')} in the professional world.`;
  const bio_line = {
    universal: universalBio,
    linkedin: linkedinBio
  };
  
  return {
    ...mainCard,
    reward_cards,
    bio_line
  };
}