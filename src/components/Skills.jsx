import { motion } from 'framer-motion';
import { skills } from '../data.js';
import SkillsCarousel from './SkillsCarousel.jsx';

const logos = {
  'WordPress / CMS': '📰',
  'HTML / CSS': '🌐',
  'JavaScript / React': '⚛️',
  'CRM Integration': '🔗',
  'Lead Automation': '🤖',
  'Website Performance': '🚀',
  'Plugin Development': '🔧',
  'SEO / Analytics': '📊',
};

export default function Skills() {
  // Transform skills to include icons for carousel
  const skillsWithIcons = skills.map((skill) => ({
    ...skill,
    icon: logos[skill.name] || '🔧',
  }));

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
    <section id="skills">
      <div className="container-skills">
        <motion.div
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={itemVariants}
        >
          // stack & proficiency
        </motion.div>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={itemVariants}
        >
          Skills
        </motion.h2>
      </div>
        
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={itemVariants}
      >
        <SkillsCarousel items={skillsWithIcons} speed={30} />
      </motion.div>
    </section>
  );
}
