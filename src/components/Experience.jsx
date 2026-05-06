import { motion } from 'framer-motion';
import { experience } from '../data.js';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const headerVariants = {
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
    <section id="experience">
      <motion.div
        className="section-label"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={headerVariants}
      >
        // career
      </motion.div>
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={headerVariants}
      >
        Experience
      </motion.h2>
      <motion.div
        className="timeline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={containerVariants}
      >
        {experience.map((item, index) => (
          <motion.div key={index} className="timeline-item" variants={itemVariants}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-company">{item.company}</div>
            <div className="timeline-desc">{item.desc}</div>
            <div className="timeline-tags">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
