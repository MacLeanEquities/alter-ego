export function renderCard(reading, variant = 0) {
  return `
    <div class="card" style="background: linear-gradient(135deg, #f0f4f8, #e2e8f0); border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="font-weight: 700; font-size: 24px; margin-bottom: 12px; color: #2d3748; text-align: center;">${reading.archetype_name}</h1>
      <p style="font-style: italic; font-size: 16px; margin-bottom: 16px; color: #4a5568; text-align: center;">${reading.one_line_essence}</p>
      
      <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
        <h2 style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: #2d3748;">Visual Metaphor</h2>
        <p style="color: #4a5568; line-height: 1.5;">${reading.visual_metaphor}</p>
      </div>
      
      <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
        <h2 style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: #2d3748;">Strengths</h2>
        <ul style="padding-left: 20px; margin: 0; color: #4a5568; line-height: 1.5;">
          ${reading.strengths.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
      
      <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
        <h2 style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: #2d3748;">Shadow Traits</h2>
        <ul style="padding-left: 20px; margin: 0; color: #4a5568; line-height: 1.5;">
          ${reading.shadow_traits.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
      
      <div style="background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
        <h2 style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: #2d3748;">Motto</h2>
        <p style="color: #4a5568; font-style: italic;">${reading.motto_chapter_themeword}</p>
        <p style="margin-top: 12px; color: #4a5568; line-height: 1.5;">${reading.narrative}</p>
      </div>
    </div>
  `;
}
