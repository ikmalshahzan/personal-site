import { motion } from 'framer-motion';
import Typewriter from './Typewriter.jsx';

export default function Hero() {
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
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="hero">
      <motion.div
        className="hero-inner"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="hero-tag" variants={itemVariants}>
          Available for new projects
        </motion.div>
        <motion.h1 className="hero-name" variants={itemVariants}>
          <div>WEB</div>
          <div className="line2">
            DEVELOPER<span className="accent">.</span>
          </div>
        </motion.h1>
        <motion.p className="hero-desc" variants={itemVariants}>
          With 5+ years turning digital visitors into business leads.
          I build and maintain systems that <strong>integrate CRMs</strong>, automate campaign workflows,
          and deliver <strong>high-performance websites</strong> that work as hard as you do.
        </motion.p>
        <motion.div className="hero-cta" variants={itemVariants}>
          <a href="#contact" className="btn btn-primary">→ Get in touch</a>
          <a href="#expertise" className="btn btn-ghost">View my work</a>
        </motion.div>
        <motion.div className="hero-stats" variants={itemVariants}>
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
        </motion.div>
      </motion.div>
    </div>
  );
}
