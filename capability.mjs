export function runCapability(input) {
  const key = JSON.stringify({ answers: input.answers, firstName: input.firstName || '' });
  const hash = computeHash(key);
  const index = Math.abs(hash) % 10;

  const mainCard = mainArchetypeLibrary[index];
  const friendGroupCard = friendGroupArchetypeLibrary[index];
  const shadowCard = shadowArchetypeLibrary[index];
  const bioLine = bioLineLibrary[index];

  return {
    ...mainCard,
    reward_cards: {
      friend_group_ego: friendGroupCard,
      shadow_ego: shadowCard
    },
    bio_line: {
      universal: bioLine.universal,
      linkedin: bioLine.linkedin
    }
  };
}

function computeHash(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i);
  }
  return hash;
}

const mainArchetypeLibrary = [
  {
    archetype_name: "The Curious Cartographer",
    one_line_essence: "You're the one who maps the uncharted territory of other people's ideas.",
    visual_metaphor: "A map with glowing paths that only you can see, drawn in the air with a finger.",
    strengths: ["Sees connections others miss", "Asks the question that unlocks the room", "Turns confusion into clarity"],
    shadow_traits: ["Overlooks the obvious", "Gets lost in the details"],
    motto_chapter_themeword: "Uncharted",
    narrative: "You thrive when you're exploring the hidden patterns in conversations. Your mind is a compass that points to the next big insight, but sometimes you get so caught up in the map that you forget to move forward. You're the person who can turn a messy group project into a well-organized journey."
  },
  {
    archetype_name: "The Patient Gardener",
    one_line_essence: "You're the one who nurtures ideas until they bloom in their own time.",
    visual_metaphor: "A garden with flowers that only bloom when the soil is just right, tended by a calm hand.",
    strengths: ["Gives space for growth", "Sees potential in the slow process", "Creates safe spaces for ideas"],
    shadow_traits: ["Waits too long to act", "Overlooks the need for immediate action"],
    motto_chapter_themeword: "Bloom",
    narrative: "You're the steady hand that helps ideas take root. You don't rush the process, and you know that the best things take time to grow. But sometimes you might wait too long for the perfect moment, and the opportunity passes you by."
  },
  {
    archetype_name: "The Quiet Anchor",
    one_line_essence: "You're the one who holds space for others to find their voice.",
    visual_metaphor: "A calm harbor where boats gently bob, surrounded by soft waves.",
    strengths: ["Creates psychological safety", "Listens without judgment", "Knows when to speak and when to hold silence"],
    shadow_traits: ["Holds back too much", "Waits for others to initiate"],
    motto_chapter_themeword: "Anchor",
    narrative: "You're the steady presence in chaotic conversations, the one who makes everyone feel heard without needing to be the center. Your quiet strength helps others feel safe to share. But sometimes you might wait too long to contribute your own perspective, letting the conversation flow without your input."
  },
  {
    archetype_name: "The Pattern Weaver",
    one_line_essence: "You're the one who finds meaning in the threads connecting seemingly unrelated things.",
    visual_metaphor: "A tapestry where colors and textures form a hidden image when viewed from the right angle.",
    strengths: ["Sees hidden patterns", "Makes unexpected connections", "Turns chaos into coherent stories"],
    shadow_traits: ["Overinterprets minor details", "Forgets the big picture in the details"],
    motto_chapter_themeword: "Weave",
    narrative: "You naturally spot relationships between ideas that others miss, turning scattered thoughts into meaningful narratives. Your mind is a loom where connections form effortlessly. But sometimes you get so focused on the intricate pattern that you lose sight of the overall design."
  },
  {
    archetype_name: "The Thoughtful Bridge",
    one_line_essence: "You're the one who connects worlds others keep apart.",
    visual_metaphor: "A stone bridge spanning two cliffs, with different plants growing on each side.",
    strengths: ["Translates between perspectives", "Builds mutual understanding", "Sees common ground in conflict"],
    shadow_traits: ["Overlooks cultural differences", "Assumes others see the world as you do"],
    motto_chapter_themeword: "Bridge",
    narrative: "You're the natural translator between different groups, making complex ideas accessible. Your strength is turning 'us vs them' into 'we'. But sometimes you might assume everyone shares your perspective, missing subtle cultural nuances that could change the connection."
  },
  {
    archetype_name: "The Intentional Listener",
    one_line_essence: "You're the one who hears what's unsaid before it's spoken.",
    visual_metaphor: "A person sitting in a circle, with subtle ripples spreading from their ears.",
    strengths: ["Picks up on emotional shifts", "Asks the question that reveals the real issue", "Creates space for vulnerability"],
    shadow_traits: ["Overanalyzes silence", "Assumes others feel what you feel"],
    motto_chapter_themeword: "Listen",
    narrative: "You're the one who notices when someone's tone changes or when a conversation feels tense before anyone says anything. Your listening creates safety for others to share deeply. But sometimes you might overthink the silence, imagining problems that aren't there."
  },
  {
    archetype_name: "The Calm Current",
    one_line_essence: "You're the one who moves through chaos without creating more turbulence.",
    visual_metaphor: "A river flowing steadily through a rocky landscape, carving a smooth path over time.",
    strengths: ["Maintains composure under pressure", "Turns conflict into flow", "Makes complex situations feel manageable"],
    shadow_traits: ["Avoids necessary confrontation", "Moves too quickly through emotional moments"],
    motto_chapter_themeword: "Flow",
    narrative: "You're the steady force that helps groups navigate difficult moments without getting stuck. Your calm presence makes chaos feel like a natural current. But sometimes you might smooth over real tensions too quickly, preventing necessary growth."
  },
  {
    archetype_name: "The Idea Alchemist",
    one_line_essence: "You're the one who transforms raw thoughts into something valuable.",
    visual_metaphor: "A pot of bubbling liquid where ordinary ingredients become a glowing substance.",
    strengths: ["Turns criticism into improvement", "Sees potential in rough drafts", "Makes ideas tangible"],
    shadow_traits: ["Overlooks practical constraints", "Gets stuck in the transformation process"],
    motto_chapter_themeword: "Alchemy",
    narrative: "You have a unique ability to take half-formed ideas and shape them into something useful. Your mind is a workshop where concepts take form. But sometimes you might get so focused on the transformation that you forget to check if the final product actually works in the real world."
  },
  {
    archetype_name: "The Pattern Interrupter",
    one_line_essence: "You're the one who breaks cycles by introducing unexpected perspectives.",
    visual_metaphor: "A single red thread weaving through a monochrome tapestry.",
    strengths: ["Challenges assumptions", "Introduces fresh angles", "Makes the familiar feel new"],
    shadow_traits: ["Ignores established processes", "Creates unnecessary disruption"],
    motto_chapter_themeword: "Interrupt",
    narrative: "You're the person who sees when a conversation or project is stuck in a loop and introduces a new perspective to break it. Your input often sparks real change. But sometimes you might disrupt good processes just to be different, creating more friction than necessary."
  },
  {
    archetype_name: "The Quiet Catalyst",
    one_line_essence: "You're the one who sparks change without needing to be seen.",
    visual_metaphor: "A single stone dropped in a pond, creating ripples that spread outward.",
    strengths: ["Makes others feel empowered", "Creates momentum without taking credit", "Knows when to step back"],
    shadow_traits: ["Underestimates their own impact", "Waits for others to take the lead"],
    motto_chapter_themeword: "Ripple",
    narrative: "You're the quiet force behind many positive changes, making others feel capable and inspired. Your influence spreads through the people you support. But sometimes you might not realize how much you've moved the needle, waiting for others to take the spotlight."
  }
];

const friendGroupArchetypeLibrary = [
  {
    archetype_name: "The Group's Secret Decoder",
    one_line_essence: "You're the one who probably knows the inside joke before it's even made.",
    visual_metaphor: "A group of friends laughing, with a small keyhole in the center of the circle.",
    strengths: ["Reads the room like a book", "Makes everyone feel included", "Turns awkward moments into fun"],
    shadow_traits: ["Overthinks the group's vibe", "Tries too hard to be the center"],
    motto_chapter_themeword: "Inside",
    narrative: "In your friend group, you're the one who always knows the right thing to say to keep the energy up. You have a knack for turning a boring hangout into a memory. But sometimes you worry too much about whether everyone is having fun, and you might accidentally take over the conversation."
  },
  {
    archetype_name: "The Group's Mood Swapper",
    one_line_essence: "You're the one who probably turns a quiet night into a spontaneous adventure.",
    visual_metaphor: "A group of friends with a map of the neighborhood, pointing excitedly at a new spot.",
    strengths: ["Sees potential in ordinary moments", "Makes plans feel exciting", "Knows when to suggest something new"],
    shadow_traits: ["Overlooks others' preferences", "Suggests ideas without checking in"],
    motto_chapter_themeword: "Swing",
    narrative: "You're the friend who can turn a 'meh' evening into something memorable with a simple suggestion. Your energy makes even small gatherings feel special. But sometimes you might suggest something without realizing it's not what the group actually wants to do."
  },
  {
    archetype_name: "The Group's Emotional Compass",
    one_line_essence: "You're the one who probably notices when someone's having a quiet day.",
    visual_metaphor: "A group of friends walking together, with one person gently checking in on another.",
    strengths: ["Picks up on subtle shifts", "Makes others feel seen", "Offers quiet support"],
    shadow_traits: ["Overanalyzes group dynamics", "Assumes everyone feels what you feel"],
    motto_chapter_themeword: "Compass",
    narrative: "You're the friend who notices when someone's not quite 'in the moment' and gently checks in. Your quiet awareness makes the group feel safe. But sometimes you might overthink whether someone's upset when they're just tired."
  },
  {
    archetype_name: "The Group's Idea Spark",
    one_line_essence: "You're the one who probably turns a simple question into a deep conversation.",
    visual_metaphor: "A group of friends leaning in, with a single question mark glowing above their heads.",
    strengths: ["Asks the question that unlocks discussion", "Makes others feel heard", "Connects topics naturally"],
    shadow_traits: ["Overlooks when to let silence be", "Turns every moment into a discussion"],
    motto_chapter_themeword: "Spark",
    narrative: "You're the friend who can take a simple 'how was your day' and turn it into a meaningful conversation. Your questions make others feel valued. But sometimes you might keep the conversation going even when a pause would be welcome."
  },
  {
    archetype_name: "The Group's Calm Anchor",
    one_line_essence: "You're the one who probably keeps the group from drifting off track.",
    visual_metaphor: "A group of friends walking together, with one person gently guiding the path.",
    strengths: ["Keeps conversations focused", "Makes group decisions feel easy", "Knows when to redirect"],
    shadow_traits: ["Overcorrects minor drifts", "Makes group decisions too structured"],
    motto_chapter_themeword: "Anchor",
    narrative: "You're the friend who helps the group stay on course without making it feel like a chore. Your gentle guidance makes group activities feel smooth. But sometimes you might redirect too quickly, missing the value in a natural detour."
  },
  {
    archetype_name: "The Group's Joy Amplifier",
    one_line_essence: "You're the one who probably makes everyone laugh at the smallest thing.",
    visual_metaphor: "A group of friends laughing, with a small sun shining above their heads.",
    strengths: ["Sees humor in ordinary moments", "Makes others feel lighter", "Turns tension into laughter"],
    shadow_traits: ["Forgets to check if others are laughing with you", "Uses humor to avoid deeper topics"],
    motto_chapter_themeword: "Sun",
    narrative: "You're the friend who can turn a mundane moment into a shared laugh. Your presence makes the group feel lighter. But sometimes you might use humor to avoid addressing something that needs more attention."
  },
  {
    archetype_name: "The Group's Memory Keeper",
    one_line_essence: "You're the one who probably remembers the inside jokes from years ago.",
    visual_metaphor: "A group of friends sharing a photo album, with a specific page highlighted.",
    strengths: ["Recalls shared history", "Makes connections across time", "Creates continuity"],
    shadow_traits: ["Overlooks new group members", "Relys too much on past memories"],
    motto_chapter_themeword: "Memory",
    narrative: "You're the friend who remembers the inside jokes and shared experiences that make the group feel connected. Your memory creates a sense of history. But sometimes you might focus so much on the past that you miss new moments forming."
  },
  {
    archetype_name: "The Group's Energy Balancer",
    one_line_essence: "You're the one who probably notices when the group needs a break.",
    visual_metaphor: "A group of friends sitting in a circle, with one person gently suggesting a pause.",
    strengths: ["Reads group energy", "Makes transitions feel natural", "Knows when to slow down"],
    shadow_traits: ["Overcorrects for energy", "Makes group pauses feel awkward"],
    motto_chapter_themeword: "Balance",
    narrative: "You're the friend who senses when the group is getting too loud or too quiet and suggests a natural shift. Your awareness keeps the energy flowing. But sometimes you might overcorrect, making a natural pause feel forced."
  },
  {
    archetype_name: "The Group's Creative Catalyst",
    one_line_essence: "You're the one who probably turns a boring walk into a game.",
    visual_metaphor: "A group of friends playing a game with a simple object, laughing.",
    strengths: ["Sees play in ordinary moments", "Makes activities feel fresh", "Encourages creativity"],
    shadow_traits: ["Forgets to check if others want to play", "Makes everything feel like a game"],
    motto_chapter_themeword: "Play",
    narrative: "You're the friend who can turn any situation into a playful moment. Your creativity makes group time feel engaging. But sometimes you might turn serious moments into games without realizing it."
  },
  {
    archetype_name: "The Group's Quiet Connector",
    one_line_essence: "You're the one who probably makes sure no one feels left out.",
    visual_metaphor: "A group of friends sitting in a circle, with one person making eye contact with everyone.",
    strengths: ["Checks in with everyone", "Makes others feel seen", "Creates inclusive moments"],
    shadow_traits: ["Overlooks when someone wants space", "Makes inclusion feel forced"],
    motto_chapter_themeword: "Connect",
    narrative: "You're the friend who makes sure everyone has a chance to speak and feels included. Your quiet attention creates a safe space. But sometimes you might check in too often, making others feel like they're being monitored."
  }
];

const shadowArchetypeLibrary = [
  {
    archetype_name: "The Quiet Observer",
    one_line_essence: "You're the one who sees the unspoken tension in the room before anyone else.",
    visual_metaphor: "A person sitting in the corner, watching the room with a calm expression.",
    strengths: ["Notices subtle shifts", "Stays calm under pressure", "Offers quiet support"],
    shadow_traits: ["Holds back too much", "Waits for others to speak first"],
    motto_chapter_themeword: "Quiet",
    narrative: "You're the person who notices when someone is upset before they say a word. You're the calm in the storm, but sometimes you hold back your own thoughts because you're waiting for the right moment to speak. You're the one who makes sure everyone feels heard, even if you don't say much."
  },
  {
    archetype_name: "The Unspoken Bridge",
    one_line_essence: "You're the one who feels the connection between people before it's named.",
    visual_metaphor: "Two people standing apart, with a faint bridge of light between them.",
    strengths: ["Senses unspoken bonds", "Makes connections feel natural", "Sees potential in relationships"],
    shadow_traits: ["Overlooks actual communication", "Assumes connections exist without evidence"],
    motto_chapter_themeword: "Bridge",
    narrative: "You're the person who feels when two people might connect before they even talk. Your intuition makes relationships feel effortless. But sometimes you might assume connections exist when they don't, missing the chance to help people actually talk to each other."
  },
  {
    archetype_name: "The Pattern Mirror",
    one_line_essence: "You're the one who reflects others' emotions back to them with uncanny accuracy.",
    visual_metaphor: "A person standing in front of a mirror that shows their own expression.",
    strengths: ["Picks up on emotional cues", "Makes others feel understood", "Reflects feelings without judgment"],
    shadow_traits: ["Overidentifies with others' emotions", "Loses own perspective in reflection"],
    motto_chapter_themeword: "Mirror",
    narrative: "You're the person who can mirror others' emotions so accurately that they feel truly seen. Your reflection makes people feel understood. But sometimes you might absorb others' feelings so completely that you lose your own sense of self in the process."
  },
  {
    archetype_name: "The Unspoken Current",
    one_line_essence: "You're the one who feels the flow of group energy without needing to name it.",
    visual_metaphor: "A group of people moving together in a gentle current.",
    strengths: ["Senses group dynamics", "Makes transitions feel natural", "Knows when to move with the flow"],
    shadow_traits: ["Ignores when the flow is negative", "Follows the current without questioning"],
    motto_chapter_themeword: "Current",
    narrative: "You're the person who feels when a group is moving in a certain direction without needing to be told. Your intuition makes group movement feel effortless. But sometimes you might follow the current even when it's leading somewhere you don't want to go."
  },
  {
    archetype_name: "The Quiet Catalyst",
    one_line_essence: "You're the one who sparks change without needing to be seen.",
    visual_metaphor: "A single stone dropped in a pond, creating ripples that spread outward.",
    strengths: ["Makes others feel empowered", "Creates momentum without taking credit", "Knows when to step back"],
    shadow_traits: ["Underestimates their own impact", "Waits for others to take the lead"],
    motto_chapter_themeword: "Ripple",
    narrative: "You're the quiet force behind many positive changes, making others feel capable and inspired. Your influence spreads through the people you support. But sometimes you might not realize how much you've moved the needle, waiting for others to take the spotlight."
  },
  {
    archetype_name: "The Unspoken Anchor",
    one_line_essence: "You're the one who feels the stability in a group before it's needed.",
    visual_metaphor: "A single stone in a river, holding its place against the current.",
    strengths: ["Provides steady presence", "Makes others feel secure", "Knows when to be still"],
    shadow_traits: ["Overemphasizes stability", "Resists necessary change"],
    motto_chapter_themeword: "Anchor",
    narrative: "You're the person who provides a sense of stability in group settings, making others feel secure. Your calm presence is a grounding force. But sometimes you might resist necessary change because you're focused on maintaining the current stability."
  },
  {
    archetype_name: "The Unspoken Translator",
    one_line_essence: "You're the one who makes complex ideas feel simple without realizing it.",
    visual_metaphor: "A person speaking, with simple shapes forming around them.",
    strengths: ["Simplifies complexity", "Makes ideas accessible", "Connects different ways of thinking"],
    shadow_traits: ["Oversimplifies important nuances", "Assumes others see things as you do"],
    motto_chapter_themeword: "Translate",
    narrative: "You're the person who can take complicated ideas and make them feel simple and clear. Your ability to translate makes others feel understood. But sometimes you might oversimplify important details, missing the complexity that matters."
  },
  {
    archetype_name: "The Unspoken Connector",
    one_line_essence: "You're the one who feels the threads between people without needing to say it.",
    visual_metaphor: "A web of thin threads connecting people in a group.",
    strengths: ["Sees hidden connections", "Makes relationships feel natural", "Brings people together effortlessly"],
    shadow_traits: ["Overlooks actual boundaries", "Forces connections that don't exist"],
    motto_chapter_themeword: "Thread",
    narrative: "You're the person who feels when two people might connect and makes it happen without effort. Your intuition makes relationships feel effortless. But sometimes you might force connections that aren't there, missing the importance of natural boundaries."
  },
  {
    archetype_name: "The Unspoken Guide",
    one_line_essence: "You're the one who knows the path without needing to be asked.",
    visual_metaphor: "A person walking ahead, with a faint path visible behind them.",
    strengths: ["Sees the way forward", "Makes decisions feel natural", "Knows when to lead"],
    shadow_traits: ["Assumes others know the path", "Forgets to explain the route"],
    motto_chapter_themeword: "Guide",
    narrative: "You're the person who seems to know the best way through a situation without needing to be asked. Your guidance makes group movement feel smooth. But sometimes you might assume others see the path as clearly as you do, forgetting to explain the route."
  },
  {
    archetype_name: "The Unspoken Mirror",
    one_line_essence: "You're the one who reflects others' potential back to them without realizing it.",
    visual_metaphor: "A person looking into a mirror that shows their own potential.",
    strengths: ["Sees potential in others", "Makes others feel capable", "Reflects confidence"],
    shadow_traits: ["Overlooks others' actual abilities", "Projects your own potential onto others"],
    motto_chapter_themeword: "Mirror",
    narrative: "You're the person who makes others feel capable by reflecting their potential back to them. Your belief in them helps them step forward. But sometimes you might project your own potential onto others, missing their actual abilities and limitations."
  }
];

const bioLineLibrary = [
  {
    universal: "The Curious Cartographer, mapping the uncharted territory of ideas.",
    linkedin: "The Curious Cartographer, mapping the uncharted territory of ideas with a focus on connecting diverse perspectives."
  },
  {
    universal: "The Patient Gardener, nurturing ideas until they bloom in their own time.",
    linkedin: "The Patient Gardener, nurturing ideas until they bloom in their own time with a focus on sustainable growth."
  },
  {
    universal: "The Quiet Anchor, holding space for others to find their voice.",
    linkedin: "The Quiet Anchor, holding space for others to find their voice in collaborative environments."
  },
  {
    universal: "The Pattern Weaver, finding meaning in the threads connecting ideas.",
    linkedin: "The Pattern Weaver, finding meaning in the threads connecting ideas across disciplines."
  },
  {
    universal: "The Thoughtful Bridge, connecting worlds others keep apart.",
    linkedin: "The Thoughtful Bridge, connecting worlds others keep apart through intentional translation."
  },
  {
    universal: "The Intentional Listener, hearing what's unsaid before it's spoken.",
    linkedin: "The Intentional Listener, hearing what's unsaid before it's spoken to foster deeper connections."
  },
  {
    universal: "The Calm Current, moving through chaos without creating more turbulence.",
    linkedin: "The Calm Current, moving through chaos without creating more turbulence in team dynamics."
  },
  {
    universal: "The Idea Alchemist, transforming raw thoughts into something valuable.",
    linkedin: "The Idea Alchemist, transforming raw thoughts into something valuable through iterative refinement."
  },
  {
    universal: "The Pattern Interrupter, breaking cycles with unexpected perspectives.",
    linkedin: "The Pattern Interrupter, breaking cycles with unexpected perspectives to spark innovation."
  },
  {
    universal: "The Quiet Catalyst, sparking change without needing to be seen.",
    linkedin: "The Quiet Catalyst, sparking change without needing to be seen through subtle influence."
  }
];