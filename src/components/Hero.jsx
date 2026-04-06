import Typewriter from './Typewriter.jsx';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-tag fade-up">Available for new projects</div>
        <h1 className="hero-name fade-up" style={{ transitionDelay: '0.1s' }}>
          <div>IKMAL</div>
          <div className="line2">
            SHAHZAN<span className="accent">.</span>
          </div>
        </h1>
        <p className="hero-desc fade-up" style={{ transitionDelay: '0.2s' }}>
          <strong>Web Solutions Developer</strong> with 5+ years turning digital visitors into business leads.
          I build and maintain systems that <strong>integrate CRMs</strong>, automate campaign workflows,
          and deliver <strong>high-performance websites</strong> that work as hard as you do.
        </p>
        <div className="hero-cta fade-up" style={{ transitionDelay: '0.3s' }}>
          <a href="#contact" className="btn btn-primary">→ Get in touch</a>
          <a href="#expertise" className="btn btn-ghost">View my work</a>
        </div>
        <div className="hero-stats fade-up" style={{ transitionDelay: '0.4s' }}>
          <div>
            <div className="stat-num">5<span>+</span></div>
            <div className="stat-label">Years experience</div>
          </div>
          <div>
            <div className="stat-num"><Typewriter strings={[ 'Leads', 'Growth', 'Results' ]} /></div>
            <div className="stat-label">What I deliver</div>
          </div>
          <div>
            <div className="stat-num">50+</div>
            <div className="stat-label">Integrations built</div>
          </div>
        </div>
      </div>
    </div>
  );
}
