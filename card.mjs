export function renderCard(reading, variant = 0) {
    return `
    <div style="background: linear-gradient(135deg, #e0f7fa, #bbdefb); padding: 2rem; border-radius: 12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #2d3748; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h1 style="font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; color: #1a202c; text-align: center;">${reading.archetype_name}</h1>
        <p style="font-size: 1.25rem; margin-bottom: 1rem; color: #4a5568; text-align: center;">${reading.one_line_essence}</p>
        <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p style="font-style: italic; color: #718096; margin-bottom: 0.5rem; text-align: center;">${reading.visual_metaphor}</p>
            <h2 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: #2d3748; text-align: center;">Strengths</h2>
            <ul style="padding-left: 1.5rem; margin: 0; list-style-type: none; text-align: center;">
                ${reading.strengths.map(s => `<li style="margin-bottom: 0.5rem; display: inline-block; margin-right: 0.5rem;">${s}</li>`).join('')}
            </ul>
            <h2 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; color: #2d3748; text-align: center;">Shadow Traits</h2>
            <ul style="padding-left: 1.5rem; margin: 0; list-style-type: none; text-align: center;">
                ${reading.shadow_traits.map(s => `<li style="margin-bottom: 0.5rem; display: inline-block; margin-right: 0.5rem;">${s}</li>`).join('')}
            </ul>
        </div>
        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p style="font-weight: 700; margin-bottom: 0.5rem; color: #2d3748; text-align: center;">${reading.motto_chapter_themeword}</p>
            <p style="line-height: 1.6; color: #4a5568; text-align: center;">${reading.narrative}</p>
        </div>
    </div>
    `;
}
