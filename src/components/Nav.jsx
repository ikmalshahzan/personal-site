export default function Nav() {
  return (
    <>
      <nav className="desktop-nav">
        <div className="nav-logo">ikmal<span>.</span>dev</div>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <nav className="mobile-nav">
        <a href="#expertise">⚡</a>
        <a href="#skills">📊</a>
        <a href="#experience">💼</a>
        <a href="#contact">📧</a>
      </nav>
    </>
  );
}

