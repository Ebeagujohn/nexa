function Services() {
  const serviceItems = [
    { 
      icon: "✦", 
      title: "Web Development", 
      desc: "Fast, responsive and beautiful websites that turn visitors into customers." 
    },
    { 
      icon: "⌘", 
      title: "Software Solutions", 
      desc: "Smart digital tools that simplify your work and solve real business problems." 
    },
    { 
      icon: "✧", 
      title: "UI/UX Design", 
      desc: "Thoughtful user-friendly designs that make every digital interaction look sleek." 
    }
  ];

  return (
    <section className="services-section" id="services">
      <span className="section-mini-label">WHAT WE DO</span>
      <div className="section-intro">
        <h2>Good ideas deserve <br /><span className="gradient-text">great execution.</span></h2>
        <p className="intro-side-text">From the first sketch to the final product, we help you bring your vision to life.</p>
      </div>
      
      <div className="services-grid">
        {serviceItems.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="card-top-header">
              <div className="service-icon-box">{service.icon}</div>
              <span className="card-number">0{index + 1}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="card-footer-action">
              <a href="#contact" className="card-link">Explore service</a>
              <span className="action-arrow">&#x2197;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
