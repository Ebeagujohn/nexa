function Header() {
  return (
    <nav className="main-navbar">
      <div className="logo">Tusky<span className="dot">.</span></div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
      </div>
      <button className="nav-cta-btn">Let's Talk &rarr;</button>
    </nav>
  )
}

export default Header
