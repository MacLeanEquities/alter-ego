export function runCapability(input) {
  const library = [
    {
      archetype_name: "The Curious Cartographer",
      one_line_essence: "You're the one who maps the uncharted territory of other people's stories.",
      visual_metaphor: "A hand-drawn map with a compass pointing to a hidden valley",
      strengths: ["Active listening", "Pattern recognition", "Empathetic questioning"],
      shadow_traits: ["Over-analyzes", "Avoids conflict"],
      motto_chapter_themeword: "Uncharted",
      narrative: "You thrive when you're exploring the hidden layers of human connection. Your curiosity draws people in, but sometimes you get so caught up in the details that you miss the bigger picture. Embrace the journey, not just the destination."
    },
    {
      archetype_name: "The Patient Gardener",
      one_line_essence: "You're the one who nurtures growth in the quiet moments, tending to the roots before the blooms.",
      visual_metaphor: "A garden with delicate seedlings under a soft morning sun",
      strengths: ["Consistent support", "Long-term vision", "Gentle encouragement"],
      shadow_traits: ["Takes too long to act", "Hesitates to share"],
      motto_chapter_themeword: "Nurture",
      narrative: "You find joy in the slow, steady growth of relationships and projects. Your patience creates a safe space for others to flourish, but you sometimes wait too long to take action. Trust your timing, and share your vision when it's ready."
    },
    {
      archetype_name: "The Bold Navigator",
      one_line_essence: "You're the one who charts a course through uncertainty, leading with confidence and clarity.",
      visual_metaphor: "A ship sailing through a stormy sea with a clear compass",
      strengths: ["Decisive action", "Clear direction", "Courage in ambiguity"],
      shadow_traits: ["Rushes to decisions", "Ignores small details"],
      motto_chapter_themeword: "Navigate",
      narrative: "You excel at turning confusion into a clear path. Your confidence inspires others, but you sometimes skip over the small details that could prevent future detours. Balance your boldness with a moment to check the map."
    },
    {
      archetype_name: "The Quiet Weaver",
      one_line_essence: "You're the one who connects people and ideas with subtle threads of understanding.",
      visual_metaphor: "A tapestry with intricate patterns woven from many threads",
      strengths: ["Subtle connection", "Deep listening", "Creative synthesis"],
      shadow_traits: ["Holds back too much", "Overlooks the obvious"],
      motto_chapter_themeword: "Weave",
      narrative: "You have a gift for seeing how things fit together, creating harmony from diverse elements. Your quiet presence makes others feel understood, but you sometimes hold back your own voice. Share your insights when they matter most."
    },
    {
      archetype_name: "The Resilient Builder",
      one_line_essence: "You're the one who constructs lasting foundations, brick by brick, through every challenge.",
      visual_metaphor: "A sturdy bridge being built over a river, with workers focused on each piece",
      strengths: ["Reliable execution", "Problem-solving", "Enduring commitment"],
      shadow_traits: ["Fixates on structure", "Resists change"],
      motto_chapter_themeword: "Build",
      narrative: "You create stability and trust through your consistent effort. Your ability to build strong foundations is unmatched, but you sometimes get stuck in the details of the structure. Remember that flexibility can strengthen your foundation even more."
    },
    {
      archetype_name: "The Thoughtful Bridge",
      one_line_essence: "You're the one who connects disparate worlds with empathy and insight.",
      visual_metaphor: "A stone bridge spanning a deep canyon, with two different landscapes on either side",
      strengths: ["Cultural sensitivity", "Mediating conflict", "Seeing multiple perspectives"],
      shadow_traits: ["Takes on too much", "Overlooks self-care"],
      motto_chapter_themeword: "Bridge",
      narrative: "You excel at bringing people together and finding common ground. Your ability to see both sides is a gift, but you sometimes take on too much responsibility. Remember to step back and care for yourself too."
    },
    {
      archetype_name: "The Steady Anchor",
      one_line_essence: "You're the one who provides unwavering stability in the midst of change.",
      visual_metaphor: "A lighthouse standing strong against the waves",
      strengths: ["Reliability", "Calm presence", "Consistent support"],
      shadow_traits: ["Resists change", "Avoids taking risks"],
      motto_chapter_themeword: "Anchor",
      narrative: "You are the calm in the storm, providing a safe harbor for others. Your reliability is a gift, but you sometimes hold back from new opportunities. Trust that your stability can also be a foundation for growth."
    },
    {
      archetype_name: "The Creative Spark",
      one_line_essence: "You're the one who ignites new ideas with a spark of inspiration.",
      visual_metaphor: "A single spark rising from a dark background, illuminating the path",
      strengths: ["Innovative thinking", "Energy", "Inspiring others"],
      shadow_traits: ["Overwhelms with ideas", "Ignores practical steps"],
      motto_chapter_themeword: "Spark",
      narrative: "You have a unique ability to see possibilities where others see obstacles. Your energy is contagious, but you sometimes get lost in the idea without a plan. Ground your spark with a step-by-step approach."
    },
    {
      archetype_name: "The Empathic Listener",
      one_line_essence: "You're the one who hears the unspoken words and responds with deep understanding.",
      visual_metaphor: "A pair of hands gently holding a heart-shaped stone",
      strengths: ["Deep empathy", "Non-judgmental space", "Intuitive insight"],
      shadow_traits: ["Takes on others' emotions", "Struggles to set boundaries"],
      motto_chapter_themeword: "Listen",
      narrative: "You create a safe space for others to be heard and understood. Your empathy is a gift, but you sometimes absorb others' emotions as your own. Remember to set boundaries to protect your own energy."
    },
    {
      archetype_name: "The Intuitive Guide",
      one_line_essence: "You're the one who follows the inner compass to lead with quiet certainty.",
      visual_metaphor: "A compass pointing to a mountain peak in the mist",
      strengths: ["Inner knowing", "Trust in process", "Gentle guidance"],
      shadow_traits: ["Ignores external feedback", "Over-relies on intuition"],
      motto_chapter_themeword: "Guide",
      narrative: "You trust your inner voice to navigate life's complexities. Your quiet confidence helps others find their way, but you sometimes overlook practical advice. Balance your intuition with a little external perspective."
    }
  ];

  function hash(s) {
    let h = 5381;
    for (let i = 0; i < s.length; i++) {
      h = ((h << 5) + h) ^ s.charCodeAt(i);
    }
    return h;
  }

  const inputString = input.answers.join('|');
  const index = Math.abs(hash(inputString)) % library.length;
  return library[index];
}

export function renderCard(reading, variant = 0) {
  return `
  <div style="background: linear-gradient(to bottom, #e0f7fa, #bbdefb); padding: 20px; border-radius: 12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #2c3e50; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <h1 style="font-size: 28px; margin: 0 0 10px 0; text-align: center; color: #1e88e5;">${reading.archetype_name}</h1>
    <p style="font-size: 18px; margin: 0 0 15px 0; text-align: center; color: #37474f;">${reading.one_line_essence}</p>
    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <p style="margin: 0 0 5px 0; font-weight: bold; color: #1e88e5;">Visual Metaphor:</p>
      <p style="margin: 0; color: #546e7a;">${reading.visual_metaphor}</p>
    </div>
    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <p style="margin: 0 0 5px 0; font-weight: bold; color: #1e88e5;">Strengths:</p>
      <p style="margin: 0; color: #546e7a;">${reading.strengths.join(', ')}</p>
    </div>
    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <p style="margin: 0 0 5px 0; font-weight: bold; color: #1e88e5;">Shadow Traits:</p>
      <p style="margin: 0; color: #546e7a;">${reading.shadow_traits.join(', ')}</p>
    </div>
    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <p style="margin: 0 0 5px 0; font-weight: bold; color: #1e88e5;">Motto:</p>
      <p style="margin: 0; color: #546e7a; font-style: italic;">${reading.motto_chapter_themeword}</p>
    </div>
    <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #37474f;">${reading.narrative}</p>
  </div>
  `;
}