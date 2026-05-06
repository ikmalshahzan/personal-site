import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="contact">
      <motion.div
        className="contact-box"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="section-label" style={{ marginBottom: '0.8rem' }}>// let's work</div>
          <div className="contact-title">
            Got a project<br />in mind<span style={{ color: 'var(--green)' }}>?</span>
          </div>
          <p className="contact-sub">
            I'm open to freelance opportunities and consulting engagements. Let's talk about how I can help your website convert better.
          </p>
        </motion.div>
        <motion.div className="contact-links" variants={containerVariants}>
          <motion.a href="mailto:ikmalshahzann@gmail.com" className="contact-link" variants={itemVariants}>
            <span className="contact-link-icon">✉</span>
            <div>
              <div className="contact-link-text">ikmalshahzann@gmail.com</div>
              <div className="contact-link-label">Primary contact</div>
            </div>
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/ikmal-shahzan-salehan-94735a196/" className="contact-link" variants={itemVariants}>
            <span className="contact-link-icon">💼</span>
            <div>
              <div className="contact-link-text">LinkedIn</div>
              <div className="contact-link-label">https://www.linkedin.com/in/ikmal-shahzan-salehan-94735a196/</div>
            </div>
          </motion.a>
          <motion.a href="https://github.com/ikmalshahzan" className="contact-link" variants={itemVariants}>
            <span className="contact-link-icon">🐙</span>
            <div>
              <div className="contact-link-text">GitHub</div>
              <div className="contact-link-label">https://github.com/ikmalshahzan</div>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
