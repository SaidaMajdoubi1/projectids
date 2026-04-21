import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Effortless Cooling</h1>
            <p className="hero-subtitle">Cutting-edge cooler designs</p>
            <button className="btn btn-primary">
              <span className="btn-text">Explore Catalog</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>

          <div className="hero-visual">
            <div className="cooler-visual">
              <div className="cooler-glow"></div>
              <div className="cooler-item">💨</div>
            </div>
          </div>
        </div>

        <div className="hero-features">
          <div className="feature-badge">
            <span className="feature-icon">🔌</span>
            <div>
              <h3>4-Pin/PWM</h3>
              <p>Smart Control</p>
            </div>
          </div>
          <div className="feature-badge">
            <span className="feature-icon">⚡</span>
            <div>
              <h3>Reinforced</h3>
              <p>Connectors</p>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <h2>Explore Rapid Cooling Technology</h2>
          <button className="btn btn-secondary">DISCOVER NOW</button>
        </div>
      </div>
    </section>
  )
}
