export function runCapability(input) {
  const s = input.answers.join('|') + (input.firstName ? '|' + input.firstName : '');
  const hash = (str) => {
    let h = 5381;
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) + h) ^ str.charCodeAt(i);
    }
    return h;
  };
  const index = Math.abs(hash(s)) % 10;
  const library = [
    {
      archetype_name: "The Bridge Builder",
      one_line_essence: "You're the one who connects the dots before anyone else sees them.",
      visual_metaphor: "A stone bridge over a rushing river, with footprints on the stones",
      strengths: ["Sees patterns in chaos", "Turns abstract ideas into actionable steps", "Builds trust through consistency"],
      shadow_traits: ["Can get lost in the details", "Tends to over-plan"],
      motto_chapter_themeword: "Connect",
      narrative: "You thrive when you can weave together disparate ideas into a cohesive whole. Your strength lies in making the invisible connections visible, but sometimes you get so caught up in the structure that you miss the moment. You're the quiet force that holds things together, even when no one notices."
    },
    {
      archetype_name: "The Quiet Catalyst",
      one_line_essence: "You're the one who sparks change without ever raising your voice.",
      visual_metaphor: "A single drop of water causing a ripple in a still pond",
      strengths: ["Creates calm in chaos", "Listens deeply before acting", "Turns small gestures into meaningful connections"],
      shadow_traits: ["Can be too passive", "Sometimes waits for others to lead"],
      motto_chapter_themeword: "Ripple",
      narrative: "You have a quiet power that moves people without them even realizing it. You're the person who makes others feel heard and understood, but you might hold back your own voice too long. Your presence is a gentle force that builds trust over time."
    },
    {
      archetype_name: "The Pattern Weaver",
      one_line_essence: "You're the one who finds meaning in the seemingly random.",
      visual_metaphor: "A tapestry with threads of different colors forming a cohesive image",
      strengths: ["Sees hidden connections", "Turns data into stories", "Makes complex ideas simple"],
      shadow_traits: ["Can over-interpret patterns", "Sometimes misses the obvious"],
      motto_chapter_themeword: "See",
      narrative: "You're drawn to the subtle threads that bind things together. Your gift is making sense of complexity, but you might see patterns where none exist. You're the person who finds the story in the data, turning noise into clarity."
    },
    {
      archetype_name: "The Empathic Navigator",
      one_line_essence: "You're the one who finds the right path for others without being told.",
      visual_metaphor: "A compass pointing toward a hidden valley",
      strengths: ["Reads unspoken needs", "Guides without directing", "Creates safe spaces for growth"],
      shadow_traits: ["Can absorb others' emotions", "Sometimes avoids conflict"],
      motto_chapter_themeword: "Guide",
      narrative: "You intuitively understand where others need to go before they do. Your strength is creating safety for others to explore, but you might carry their emotional weight. You're the steady hand that helps others find their way without taking over."
    },
    {
      archetype_name: "The Thoughtful Curator",
      one_line_essence: "You're the one who makes the ordinary feel extraordinary.",
      visual_metaphor: "A gallery wall with carefully arranged artifacts",
      strengths: ["Sees potential in overlooked things", "Creates meaningful context", "Makes connections between ideas"],
      shadow_traits: ["Can be overly selective", "Sometimes over-curates"],
      motto_chapter_themeword: "Curate",
      narrative: "You transform the mundane into something meaningful through careful arrangement. Your gift is highlighting what others miss, but you might spend too much time perfecting the presentation. You're the person who makes you see the beauty in everyday moments."
    },
    {
      archetype_name: "The Resilient Anchor",
      one_line_essence: "You're the one who holds steady when everything else shifts.",
      visual_metaphor: "A lighthouse in a stormy sea",
      strengths: ["Provides stability in chaos", "Remembers the big picture", "Offers consistent support"],
      shadow_traits: ["Can resist necessary change", "Sometimes avoids new challenges"],
      motto_chapter_themeword: "Steady",
      narrative: "You're the calm in the storm, the constant in a changing world. Your strength is providing unwavering support, but you might cling to what's familiar. You're the person who helps others weather uncertainty without losing their footing."
    },
    {
      archetype_name: "The Creative Conductor",
      one_line_essence: "You're the one who brings out the best in every collaboration.",
      visual_metaphor: "A conductor leading an orchestra with harmony",
      strengths: ["Finds the right role for each person", "Turns conflict into creativity", "Creates shared purpose"],
      shadow_traits: ["Can over-manage the process", "Sometimes overlooks individual needs"],
      motto_chapter_themeword: "Harmony",
      narrative: "You have a gift for making groups feel like a cohesive whole. Your strength is drawing out the best in others, but you might focus too much on the group dynamic. You're the person who turns a collection of individuals into a unified team."
    },
    {
      archetype_name: "The Insightful Listener",
      one_line_essence: "You're the one who remembers what others forget to say.",
      visual_metaphor: "A magnifying glass revealing hidden details in a conversation",
      strengths: ["Holds space for deep conversations", "Picks up on subtle cues", "Makes others feel truly heard"],
      shadow_traits: ["Can internalize others' emotions", "Sometimes takes on others' problems"],
      motto_chapter_themeword: "Listen",
      narrative: "You're the person who notices what's not being said. Your strength is creating deep connection through attention, but you might carry others' emotional weight. You're the quiet force that makes people feel understood in a way they haven't before."
    },
    {
      archetype_name: "The Strategic Connector",
      one_line_essence: "You're the one who turns 'how' into 'why' for everyone.",
      visual_metaphor: "A network map with key nodes highlighted",
      strengths: ["Sees the bigger picture", "Makes strategic connections", "Turns ideas into action paths"],
      shadow_traits: ["Can get stuck in planning", "Sometimes overlooks emotional needs"],
      motto_chapter_themeword: "Link",
      narrative: "You're the person who makes the invisible pathways visible. Your strength is connecting ideas to create momentum, but you might get lost in the planning phase. You're the bridge between vision and execution that others can't see."
    },
    {
      archetype_name: "The Patient Guide",
      one_line_essence: "You're the one who walks alongside others without rushing them.",
      visual_metaphor: "A winding path through a forest with clear markers",
      strengths: ["Respects different paces", "Offers gentle guidance", "Creates safe space for growth"],
      shadow_traits: ["Can be too slow to act", "Sometimes avoids decisive moments"],
      motto_chapter_themeword: "Walk",
      narrative: "You understand that growth happens at its own pace. Your strength is providing steady, patient support without pushing, but you might hesitate when action is needed. You're the calm presence that helps others find their own rhythm."
    }
  ];
  return library[index];
}