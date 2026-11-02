function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="hero-badge">✦ YOUR DIGITAL GROWTH PARTNER</span>
        <h1>We turn big ideas into <span className="gradient-text">digital reality.</span></h1>
        <p>We design beautiful websites, build powerful software, and create digital experiences that help businesses grow.</p>
        
        <div className="hero-buttons">
          <button className="primary-btn">Explore our work &nbsp; &rarr;</button>
          <button className="secondary-btn">What we do</button>
        </div>

        {/* Small icon badge seen underneath the primary buttons */}
        <div className="hero-sub-client">
          <div className="star-icon">✦</div>
          <div>
            <h4>We meet innovation.</h4>
            <p>Trusted by global consumers.</p>
          </div>
        </div>
      </div>

      {/* Modern Layered Floating Interface Mockups */}
      <div className="hero-graphic-container">
        <div className="main-floating-card">
          <div className="card-top-row">
            <span className="pill-tag">✦ Nexa Labs</span>
            <span className="status-dot-active">• Creative ideas</span>
          </div>
          <div className="glowing-neon-orb">
            <div className="inner-avatar-circle">N</div>
          </div>
          <h3>Built for the future.</h3>
          <p>Seamless design. Smart software.</p>
          <div className="card-bottom-bar">
            <span>Dashboard</span>
            <span>78%</span>
          </div>
        </div>
        
        {/* Layered background decorations peaking out behind the main frame */}
        <div className="bg-card-layer layer-one"></div>
        <div className="bg-card-layer layer-two">
          <span className="pill-tag-mini">✦ Digital solutions</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
