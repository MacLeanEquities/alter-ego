export function runCapability(input) {
  const archetypes = [
    {
      archetype_name: "The Curious Cartographer",
      one_line_essence: "You're the one who maps the uncharted with a steady hand.",
      visual_metaphor: "A compass made of starlight",
      strengths: [
        "Maps the unknown",
        "Listens deeply",
        "Connects hidden dots"
      ],
      shadow_traits: [
        "Can get lost in the details",
        "Hesitates to share maps"
      ],
      motto_chapter_themeword: "Charting the Unseen",
      narrative: "You see the world as a series of interconnected paths. Your strength lies in turning the invisible into a clear route. Sometimes, you might get so focused on the map that you forget to share the journey with others."
    },
    {
      archetype_name: "The Quiet Catalyst",
      one_line_essence: "You're the one who sparks change without a sound.",
      visual_metaphor: "A single drop of water creating ripples",
      strengths: [
        "Observes deeply",
        "Acts with precision",
        "Creates calm in chaos"
      ],
      shadow_traits: [
        "Waits too long to act",
        "Fears being overlooked"
      ],
      motto_chapter_themeword: "Ripples of Change",
      narrative: "You notice the subtle shifts in the air and act with quiet confidence. Your ability to see the small changes that lead to big shifts is your superpower. Sometimes, you might hold back too long, waiting for the perfect moment that never comes."
    },
    {
      archetype_name: "The Patient Weaver",
      one_line_essence: "You're the one who weaves connections across time and space.",
      visual_metaphor: "A tapestry of interwoven threads",
      strengths: [
        "Builds lasting relationships",
        "Sees the big picture",
        "Patience in the face of chaos"
      ],
      shadow_traits: [
        "Takes too long to make decisions",
        "Overlooks the immediate"
      ],
      motto_chapter_themeword: "Threads of Time",
      narrative: "You create strong bonds by weaving together the threads of people's stories. Your patience allows you to see the connections others miss. However, you might get stuck in the weaving process and forget to move forward."
    },
    {
      archetype_name: "The Bold Archivist",
      one_line_essence: "You're the one who preserves the past to shape the future.",
      visual_metaphor: "A library of living memories",
      strengths: [
        "Preserves history",
        "Draws wisdom from the past",
        "Organizes with clarity"
      ],
      shadow_traits: [
        "Clings to the past",
        "Resists new ideas"
      ],
      motto_chapter_themeword: "History in Motion",
      narrative: "You believe that the past holds the key to the future. Your strength is in preserving and organizing the stories that matter. But sometimes, you might hold onto old ways too tightly, missing the new opportunities that are unfolding."
    },
    {
      archetype_name: "The Gentle Guide",
      one_line_essence: "You're the one who leads with a soft touch and steady presence.",
      visual_metaphor: "A lantern in the fog",
      strengths: [
        "Offers calm reassurance",
        "Sees the path clearly",
        "Supports without pushing"
      ],
      shadow_traits: [
        "Avoids conflict",
        "Fears being too direct"
      ],
      motto_chapter_themeword: "Guiding Light",
      narrative: "You are the calm in the storm, offering a steady light to those who feel lost. Your gentle guidance helps others find their way. However, you might avoid difficult conversations, hoping to keep the peace."
    },
    {
      archetype_name: "The Resilient Builder",
      one_line_essence: "You're the one who constructs with unwavering strength.",
      visual_metaphor: "A tree growing through stone",
      strengths: [
        "Builds enduring structures",
        "Adapts to challenges",
        "Works tirelessly"
      ],
      shadow_traits: [
        "Takes on too much",
        "Fears failure"
      ],
      motto_chapter_themeword: "Rooted and Rising",
      narrative: "You build things that last, even when the ground is hard. Your resilience is your greatest asset. But you might take on too many projects at once, spreading yourself too thin."
    },
    {
      archetype_name: "The Reflective Listener",
      one_line_essence: "You're the one who hears the unspoken and reflects it back.",
      visual_metaphor: "A mirror reflecting the soul",
      strengths: [
        "Hears deeply",
        "Reflects with empathy",
        "Creates safe space"
      ],
      shadow_traits: [
        "Overthinks",
        "Struggles to speak up"
      ],
      motto_chapter_themeword: "Echoes of Understanding",
      narrative: "You have a gift for hearing what others don't say. Your reflections help others see themselves more clearly. But you might get caught in your own thoughts, making it hard to share your own perspective."
    },
    {
      archetype_name: "The Creative Bridge",
      one_line_essence: "You're the one who connects disparate ideas into something new.",
      visual_metaphor: "A bridge of light between two worlds",
      strengths: [
        "Sees unexpected connections",
        "Fosters collaboration",
        "Innovates with ease"
      ],
      shadow_traits: [
        "Overlooks details",
        "Chases the next idea"
      ],
      motto_chapter_themeword: "Bridging the Gap",
      narrative: "You are the spark that brings together different worlds. Your creativity turns chaos into harmony. However, you might jump from idea to idea without finishing the current project."
    },
    {
      archetype_name: "The Steady Navigator",
      one_line_essence: "You're the one who keeps the course when the winds shift.",
      visual_metaphor: "A ship sailing through stormy seas",
      strengths: [
        "Maintains direction",
        "Adapts to change",
        "Provides stability"
      ],
      shadow_traits: [
        "Resists change",
        "Fears the unknown"
      ],
      motto_chapter_themeword: "Sailing True",
      narrative: "You are the anchor in the storm, keeping everyone on course. Your steady presence is a comfort. But you might resist necessary changes, preferring the known path."
    },
    {
      archetype_name: "The Thoughtful Connector",
      one_line_essence: "You're the one who brings people together with intention.",
      visual_metaphor: "A web of glowing threads",
      strengths: [
        "Builds meaningful connections",
        "Sees the potential in others",
        "Fosters community"
      ],
      shadow_traits: [
        "Takes on too many connections",
        "Neglects self-care"
      ],
      motto_chapter_themeword: "Threads of Community",
      narrative: "You see the threads that bind people together and weave them into a strong community. Your thoughtfulness creates deep bonds. But you might forget to take care of yourself in the process."
    }
  ];
  
  const totalLength = input.answers.reduce((sum, answer) => sum + answer.length, 0);
  const index = totalLength % archetypes.length;
  return archetypes[index];
}

export function renderCard(reading, variant = 0) {
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