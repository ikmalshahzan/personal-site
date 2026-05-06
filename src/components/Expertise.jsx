import { motion } from 'framer-motion';

export default function Expertise({ expertise }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <motion.div
      className="expertise-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={containerVariants}
    >
      {expertise.map((item, index) => (
        <motion.div key={index} className="expertise-card" variants={itemVariants}>
          <div className="card-icon">{item.icon}</div>
          <div className="card-title">{item.title}</div>
          <div className="card-desc">{item.desc}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
