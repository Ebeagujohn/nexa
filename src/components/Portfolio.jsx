function Portfolio() {
  return (
    <section className="portfolio-section" id="projects">
      <span className="section-mini-label">SELECTED WORK</span>
      <div className="section-intro">
        <h2>Small details. <br /><span className="gradient-text">Big impact.</span></h2>
        <p className="intro-side-text">A few concept projects showing how thoughtful design and technology can work together.</p>
      </div>

      <div className="portfolio-grid">
        {/* Project One */}
        <div className="project-card purple-theme">
          <div className="project-visual">
            <span className="project-serial-tag">01</span>
            <div className="abstract-wireframe-circle"></div>
            <h1 className="visual-logo-letter">NH.</h1>
          </div>
          <div className="project-meta-info">
            <div>
              <span className="project-category">WEB APPLICATION</span>
              <h3>NoHaSub</h3>
              <p>A cleaner way to manage your finances.</p>
            </div>
            <button className="project-arrow-btn">&#x2197;</button>
          </div>
        </div>

        {/* Project Two */}
        <div className="project-card green-theme">
          <div className="project-visual">
            <span className="project-serial-tag">02 </span>
            <div className="abstract-wireframe-circle"></div>
            <h1 className="visual-logo-letter">EVS</h1>
          </div>
          <div className="project-meta-info">
            <div>
              <span className="project-category">DIGITAL VOTING SOLUTION</span>
              <h3>E-VOTING SYSTEM</h3>
              <p>A secure system to vote</p>
            </div>
            <button className="project-arrow-btn">&#x2197;</button>
          </div>
        </div>
      </div>
      
      <p className="portfolio-disclaimer">• This block contains concept products intended for demonstration.</p>
    </section>
  )
}

export default Portfolio
