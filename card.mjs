export function renderCard(reading, variant = 0) {
  // Templated CSS card with dynamic text over fixed background
  const backgroundVariants = [
    "linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c)",
    "linear-gradient(135deg, #2c3e50, #4a6491, #2c3e50)",
    "linear-gradient(135deg, #2c5282, #4a6491, #2c5282)",
    "linear-gradient(135deg, #1e3a8a, #4a5568, #1e3a8a)"
  ];
  
  const background = backgroundVariants[variant % backgroundVariants.length];
  
  return `
    <div style="
      background: ${background};
      color: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 2rem;
      border-radius: 16px;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      position: relative;
      overflow: hidden;
      text-align: center;
    ">
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><path d="M0 0L100 100M100 0L0 100" stroke="rgba(255,255,255,0.05)" stroke-width="2"/></svg>');
        opacity: 0.1;
      "></div>
      
      <h1 style="
        font-size: 2.2rem;
        margin: 0 0 0.5rem;
        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        letter-spacing: 0.5px;
      ">${reading.archetype_name}</h1>
      
      <p style="
        font-size: 1.2rem;
        margin: 0 0 1.5rem;
        font-style: italic;
        line-height: 1.4;
      ">${reading.one_line_essence}</p>
      
      <div style="
        background: rgba(0,0,0,0.2);
        padding: 1.2rem;
        border-radius: 12px;
        margin: 1.5rem 0;
        font-size: 1.1rem;
      ">
        <p style="margin: 0.5rem 0;">${reading.visual_metaphor}</p>
      </div>
      
      <div style="
        margin: 1.5rem 0;
        font-size: 1.1rem;
      ">
        <p style="margin: 0.5rem 0;"><strong>Strengths:</strong> ${reading.strengths.join(', ')}</p>
        <p style="margin: 0.5rem 0;"><strong>Shadow Traits:</strong> ${reading.shadow_traits.join(', ')}</p>
      </div>
      
      <div style="
        background: rgba(255,255,255,0.15);
        padding: 1rem;
        border-radius: 8px;
        margin: 1.5rem 0;
        font-size: 1.1rem;
      ">
        <p style="margin: 0.5rem 0;"><strong>Motto:</strong> ${reading.motto_chapter_themeword}</p>
        <p style="margin: 0.5rem 0;"><strong>Narrative:</strong> ${reading.narrative}</p>
      </div>
      
      <div style="
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        font-size: 0.8rem;
        opacity: 0.7;
      ">
        Alter Ego Card
      </div>
    </div>
  `;
}
