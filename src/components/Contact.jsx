export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-box fade-up">
        <div>
          <div className="section-label" style={{ marginBottom: '0.8rem' }}>// let's work</div>
          <div className="contact-title">
            Got a project<br />in mind<span style={{ color: 'var(--green)' }}>?</span>
          </div>
          <p className="contact-sub">
            I'm open to freelance opportunities and consulting engagements. Let's talk about how I can help your website convert better.
          </p>
        </div>
        <div className="contact-links">
          <a href="mailto:ikmalshahzann@gmail.com" className="contact-link">
            <span className="contact-link-icon">✉</span>
            <div>
              <div className="contact-link-text">ikmalshahzann@gmail.com</div>
              <div className="contact-link-label">Primary contact</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ikmal-shahzan-salehan-94735a196/" className="contact-link">
            <span className="contact-link-icon">💼</span>
            <div>
              <div className="contact-link-text">LinkedIn</div>
              <div className="contact-link-label">https://www.linkedin.com/in/ikmal-shahzan-salehan-94735a196/</div>
            </div>
          </a>
          <a href="https://github.com/ikmalshahzan" className="contact-link">
            <span className="contact-link-icon">🐙</span>
            <div>
              <div className="contact-link-text">GitHub</div>
              <div className="contact-link-label">https://github.com/ikmalshahzan</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
