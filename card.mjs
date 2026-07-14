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
