import './Features.css'

export default function Features() {
  const features = [
    {
      icon: '🌡️',
      title: 'Advanced Cooling',
      description: 'State-of-the-art thermal management technology'
    },
    {
      icon: '⚙️',
      title: 'Easy Installation',
      description: 'Simple plug-and-play setup for any system'
    },
    {
      icon: '🔇',
      title: 'Whisper Quiet',
      description: 'Ultra-silent operation under 25dB'
    },
    {
      icon: '💪',
      title: 'Heavy-Duty Build',
      description: 'Premium materials for long-lasting performance'
    }
  ]

  return (
    <section id="catalog" className="features">
      <div className="features-container">
        <div className="section-header">
          <h2>Innovative Cooling Solutions</h2>
          <p>Why Choose TechCool</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
