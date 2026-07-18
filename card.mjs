export function renderCard(reading, variant = 0) {
  return `
    <div class="alter-ego-card" style="background: linear-gradient(135deg, #e0f7fa, #bbdefb); padding: 25px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #2c3e50; max-width: 600px; margin: 0 auto; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #1a73e8, #3f51b5);"></div>
      <h2 style="text-align: center; margin-bottom: 15px; font-weight: 600; color: #1a73e8; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">${reading.archetype_name}</h2>
      <p style="text-align: center; font-style: italic; margin-bottom: 20px; color: #546e7a; line-height: 1.5;">${reading.one_line_essence}</p>
      <div style="margin-bottom: 15px; padding-left: 10px; border-left: 3px solid #1a73e8;">
        <strong style="color: #1a73e8;">Visual Metaphor:</strong> ${reading.visual_metaphor}
      </div>
      <div style="margin-bottom: 15px; padding-left: 10px; border-left: 3px solid #1a73e8;">
        <strong style="color: #1a73e8;">Strengths:</strong> ${reading.strengths.join(', ')}
      </div>
      <div style="margin-bottom: 15px; padding-left: 10px; border-left: 3px solid #1a73e8;">
        <strong style="color: #1a73e8;">Shadow Traits:</strong> ${reading.shadow_traits.join(', ')}
      </div>
      <div style="margin-bottom: 15px; padding-left: 10px; border-left: 3px solid #1a73e8;">
        <strong style="color: #1a73e8;">Motto:</strong> ${reading.motto_chapter_themeword}
      </div>
      <div style="padding-left: 10px; border-left: 3px solid #1a73e8;">
        <strong style="color: #1a73e8;">Narrative:</strong> ${reading.narrative}
      </div>
    </div>
  `;
}
