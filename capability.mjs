// Assembled by the Logic Synthesizer v0.1.0 (Wave 2.4 bounded per-piece generation).

// The main engine, each reward card, and the bio were each generated in their OWN

// bounded local call; each is namespaced in an IIFE so helpers cannot collide.

const _main = (() => {
function runCapability(input) {
    const archetypes = [
        {
            archetype_name: "The Curious Cartographer",
            one_line_essence: "You're the one who turns a single question into a map of possibilities.",
            visual_metaphor: "A compass pointing to a hidden valley",
            strengths: [
                "Asks the right questions",
                "Sees patterns in chaos",
                "Listens without judgment"
            ],
            shadow_traits: [
                "Tends to overthink the map before setting out",
                "Can get lost in the details of the journey"
            ],
            motto_chapter_themeword: "Mapmaker's Resolve",
            narrative: "You navigate the uncharted with a quiet confidence. Your strength lies in turning the abstract into a clear path, but sometimes you hesitate to share your map until it's perfect. You're the one who helps others find their way without leading them."
        },
        {
            archetype_name: "The Quiet Catalyst",
            one_line_essence: "You're the one who sparks change without raising a voice.",
            visual_metaphor: "A single drop of water causing ripples in a still pond",
            strengths: [
                "Creates calm in tense moments",
                "Sees potential in the unspoken",
                "Acts with quiet intention"
            ],
            shadow_traits: [
                "Sometimes waits too long to speak up",
                "Can be too reserved when action is needed"
            ],
            motto_chapter_themeword: "Ripple Effect",
            narrative: "You are the calm center that transforms the energy around you. Your strength is in your ability to listen deeply and act with purpose, but you may hold back when you feel the need to be heard. You're the one who turns a whisper into a movement."
        },
        {
            archetype_name: "The Patient Weaver",
            one_line_essence: "You're the one who weaves connections from the threads of everyday moments.",
            visual_metaphor: "A tapestry of interwoven threads, each with its own color and texture",
            strengths: [
                "Builds deep, lasting relationships",
                "Sees the beauty in small details",
                "Creates harmony from diverse elements"
            ],
            shadow_traits: [
                "May take too long to make a decision",
                "Can become overwhelmed by too many connections"
            ],
            motto_chapter_themeword: "Thread by Thread",
            narrative: "You find meaning in the connections between people and ideas. Your strength is in your patience and attention to detail, but you might get caught in the complexity of the weave. You're the one who turns a simple thread into a tapestry of belonging."
        },
        {
            archetype_name: "The Clear-Sighted Guide",
            one_line_essence: "You're the one who cuts through confusion to reveal the path forward.",
            visual_metaphor: "A lighthouse beam cutting through fog",
            strengths: [
                "Clarifies complex situations",
                "Sees the big picture without losing detail",
                "Provides direction with calm certainty"
            ],
            shadow_traits: [
                "Can be too direct, overlooking feelings",
                "May rush to solve without fully listening"
            ],
            motto_chapter_themeword: "Clear Path",
            narrative: "You are the beacon in the fog, helping others see the way. Your strength is in your clarity and ability to simplify, but you might overlook the emotional landscape. You're the one who turns confusion into confidence."
        },
        {
            archetype_name: "The Thoughtful Bridge",
            one_line_essence: "You're the one who connects disparate ideas into a cohesive whole.",
            visual_metaphor: "A bridge spanning a river, with different landscapes on each side",
            strengths: [
                "Sees connections others miss",
                "Facilitates understanding between groups",
                "Builds consensus with empathy"
            ],
            shadow_traits: [
                "May avoid conflict by smoothing over differences",
                "Can become a bottleneck when too many rely on you"
            ],
            motto_chapter_themeword: "Bridge Builder",
            narrative: "You are the connective tissue between ideas and people. Your strength is in your ability to find common ground, but you might avoid necessary friction. You're the one who turns a divide into a shared journey."
        },
        {
            archetype_name: "The Steady Current",
            one_line_essence: "You're the one who moves forward with consistent, gentle persistence.",
            visual_metaphor: "A river flowing steadily through a forest",
            strengths: [
                "Maintains momentum through challenges",
                "Provides reliable support",
                "Adapts without losing direction"
            ],
            shadow_traits: [
                "May resist change that disrupts the flow",
                "Can be too passive in moments requiring action"
            ],
            motto_chapter_themeword: "Flowing Forward",
            narrative: "You are the steady force that carries others along. Your strength is in your consistency and calm, but you might not always be the one to initiate change. You're the one who turns a slow journey into a reliable path."
        },
        {
            archetype_name: "The Reflective Anchor",
            one_line_essence: "You're the one who grounds the moment in deep reflection.",
            visual_metaphor: "An anchor holding a ship steady in a calm sea",
            strengths: [
                "Provides stability in uncertainty",
                "Thinks deeply before acting",
                "Creates space for others to reflect"
            ],
            shadow_traits: [
                "May get stuck in reflection without moving forward",
                "Can be perceived as indecisive"
            ],
            motto_chapter_themeword: "Anchor Point",
            narrative: "You are the calm in the storm, providing a steady presence. Your strength is in your depth of thought, but you might need to balance reflection with action. You're the one who turns a moment of stillness into a foundation for growth."
        },
        {
            archetype_name: "The Open-Handed Connector",
            one_line_essence: "You're the one who brings people together with generosity of spirit.",
            visual_metaphor: "A hand open in welcome, with a circle of people around it",
            strengths: [
                "Makes others feel seen and valued",
                "Shares resources without hesitation",
                "Fosters a sense of community"
            ],
            shadow_traits: [
                "May overextend yourself to help others",
                "Can be too trusting of others' intentions"
            ],
            motto_chapter_themeword: "Open Hand",
            narrative: "You are the heart of the gathering, making everyone feel welcome. Your strength is in your generosity, but you might need to set boundaries. You're the one who turns a group into a family."
        },
        {
            archetype_name: "The Gentle Innovator",
            one_line_essence: "You're the one who brings new ideas with kindness and care.",
            visual_metaphor: "A seedling growing through a crack in concrete",
            strengths: [
                "Implements change with empathy",
                "Sees potential in the overlooked",
                "Creates solutions that feel natural"
            ],
            shadow_traits: [
                "May avoid conflict to keep harmony",
                "Can be too cautious in taking risks"
            ],
            motto_chapter_themeword: "Gentle Growth",
            narrative: "You are the quiet force that brings new ideas to life with care. Your strength is in your ability to innovate without disruption, but you might hold back when boldness is needed. You're the one who turns a small idea into a thriving garden."
        },
        {
            archetype_name: "The Calm Navigator",
            one_line_essence: "You're the one who guides through uncertainty with unwavering calm.",
            visual_metaphor: "A ship sailing smoothly through a calm sea at dawn",
            strengths: [
                "Remains composed in chaos",
                "Makes complex decisions with clarity",
                "Provides reassurance without overpromising"
            ],
            shadow_traits: [
                "May downplay the need for emotional support",
                "Can be too focused on the path to notice the journey"
            ],
            motto_chapter_themeword: "Calm Horizon",
            narrative: "You are the steady hand on the wheel, guiding through the unknown. Your strength is in your calm and clarity, but you might miss the emotional currents. You're the one who turns a stormy sea into a peaceful voyage."
        }
    ];

    let hash = 0;
    for (const a of input.answers) {
        for (const c of a) {
            hash = (hash * 131 + c.charCodeAt(0)) % 1000000;
        }
    }
    const index = hash % archetypes.length;
    return archetypes[index];
}
return { runCapability };
})();

const _rc_friend_group_ego = (() => {
function rewardCard(input) {
    const answers = input.answers;
    let hash = 0;
    for (const answer of answers) {
        for (const char of answer) {
            hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
        }
    }
    const index = hash % 3;
    const readings = [
        {
            archetype_name: "The Connector",
            one_line_essence: "Bringing people together with a smile and a story.",
            visual_metaphor: "A spider weaving a web of laughter and shared moments.",
            strengths: ["Creates instant comfort", "Remembers everyone's favorite snack", "Turns strangers into friends"],
            shadow_traits: ["Can get overwhelmed by too many connections", "Sometimes avoids deep conversations to keep the peace"],
            motto_chapter_themeword: "Together We Bloom",
            narrative: "You're the one who always knows how to get the group to laugh at the same time, and you have a knack for remembering the little things that make each person feel seen. Your presence is the glue that holds the group together, even when the conversation gets quiet.",
            bio_line: "I'm the friend who probably knows the best coffee shop for a group hangout, and I'm the one who always remembers to bring extra snacks for the ones who forgot. I love how I can make a room feel like home just by being there."
        },
        {
            archetype_name: "The Jester",
            one_line_essence: "Turning every gathering into a spontaneous adventure.",
            visual_metaphor: "A playful spark that ignites a chain reaction of giggles.",
            strengths: ["Makes the mundane magical", "Eases tension with a well-timed joke", "Encourages everyone to let loose"],
            shadow_traits: ["Can be too focused on the fun to notice when someone's struggling", "Sometimes uses humor to deflect from serious topics"],
            motto_chapter_themeword: "Laugh Until You Cry",
            narrative: "You're the one who always has a silly story to share or a game to start, turning even a quiet Tuesday into a memory. Your energy is contagious, and you have a way of making everyone feel like they can be their most playful selves.",
            bio_line: "I'm the friend who probably starts a spontaneous dance party in the living room, and I'm the one who always has a ridiculous meme to share. I love how I can turn a boring day into an adventure with just a few words."
        },
        {
            archetype_name: "The Anchor",
            one_line_essence: "Providing steady calm in the midst of chaos.",
            visual_metaphor: "A lighthouse guiding the group through stormy seas.",
            strengths: ["Stays calm under pressure", "Offers practical solutions", "Listens without judgment"],
            shadow_traits: ["Can be too reserved to share their own feelings", "May avoid conflict to maintain harmony"],
            motto_chapter_themeword: "Steady as She Goes",
            narrative: "You're the one who knows exactly when to step in and help, whether it's mediating a disagreement or just being the calm voice in a loud room. Your reliability makes the group feel safe to be themselves.",
            bio_line: "I'm the friend who probably knows the best way to handle a group conflict, and I'm the one who always has a quiet word for someone who's feeling overwhelmed. I love how I can be the steady presence that everyone turns to."
        }
    ];
    return readings[index];
}
return { rewardCard };
})();

const _rc_shadow_ego = (() => {
function rewardCard(input) {
  const readings = [
    {
      archetype_name: "The Quiet Observer",
      one_line_essence: "You see the world without needing to be seen.",
      visual_metaphor: "A shadow that moves with the light, never casting one of its own.",
      strengths: ["Perceptive", "Patient", "Unobtrusive"],
      shadow_traits: ["Secretive", "Overly cautious", "Tends to withdraw"],
      motto_chapter_themeword: "In the quiet, the truth is heard.",
      narrative: "You are the one who notices the small details others miss, the subtle shifts in the room. You don't need to speak to be heard; your presence is a calm that settles the chaos. You are the shadow that helps others see their own shadows, without ever stepping into the light itself.",
      bio_line: "I am the one who watches the edges of the room, noticing the unspoken words and the subtle shifts in the air. My presence is a quiet comfort, a steady hand that doesn't need to be seen to be felt."
    },
    {
      archetype_name: "The Unseen Guardian",
      one_line_essence: "You protect without being noticed, your strength in the background.",
      visual_metaphor: "A wall that stands firm, yet is never seen as a barrier.",
      strengths: ["Loyal", "Resilient", "Selfless"],
      shadow_traits: ["Overprotective", "Takes on too much", "Fears being replaced"],
      motto_chapter_themeword: "Strength in the unseen.",
      narrative: "You are the shield that others don't know they have. You stand behind the scenes, ensuring safety and stability without seeking credit. Your strength is in your ability to be there without being noticed, a constant presence that makes the world feel secure.",
      bio_line: "I am the steady hand that holds the door open for others without being noticed, the quiet strength that ensures the path is clear. My purpose is to protect, to be the foundation that others lean on without ever knowing they do."
    },
    {
      archetype_name: "The Hidden Catalyst",
      one_line_essence: "You spark change without being the center of attention.",
      visual_metaphor: "A spark that ignites a fire, then fades into the night.",
      strengths: ["Innovative", "Inspiring", "Subtle"],
      shadow_traits: ["Impatient for change", "Takes risks without warning", "Fears being overlooked"],
      motto_chapter_themeword: "The spark that lights the way.",
      narrative: "You are the quiet force that moves things forward. You don't need to be the one to speak; your ideas and actions create ripples that lead to transformation. You are the catalyst that sets the stage for others to shine, then steps back into the shadows.",
      bio_line: "I am the spark that ignites the fire, the quiet idea that changes the course of events. I don't seek the spotlight, but I know that my presence can shift the entire landscape without a single word."
    }
  ];

  let hash = 0;
  for (const answer of input.answers) {
    for (const char of answer) {
      hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
    }
  }
  const index = hash % 3;
  return readings[index];
}
return { rewardCard };
})();

const _bio = (() => {
function bioLine(input) {
    const templates = [
        {
            text: "I build software that solves real problems for businesses and startups. I love collaborating with teams to create impactful products that change the world.",
            keywords: ['build', 'software', 'solve', 'problems', 'collaborate', 'team', 'impactful', 'product', 'change']
        },
        {
            text: "I design user experiences that are intuitive and delightful for everyone. I'm passionate about making technology accessible and inclusive for all users.",
            keywords: ['design', 'user', 'experience', 'intuitive', 'delightful', 'accessible', 'inclusive', 'technology']
        },
        {
            text: "I write clean and efficient code that is easy to maintain and scalable. I enjoy learning new technologies and sharing knowledge with others to grow together and innovate.",
            keywords: ['write', 'clean', 'efficient', 'code', 'maintain', 'learn', 'technology', 'share', 'knowledge']
        }
    ];

    const allWords = new Set();
    for (const answer of input.answers) {
        const words = answer.toLowerCase().split(/\s+/);
        for (const word of words) {
            const cleanWord = word.replace(/[^a-z0-9]/g, '');
            if (cleanWord) {
                allWords.add(cleanWord);
            }
        }
    }

    let bestIndex = 0;
    let bestScore = -1;
    for (let i = 0; i < templates.length; i++) {
        const template = templates[i];
        let score = 0;
        for (const keyword of template.keywords) {
            if (allWords.has(keyword)) {
                score++;
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestIndex = i;
        }
    }

    return templates[bestIndex].text;
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
