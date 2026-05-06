import { motion } from 'framer-motion';

export default function MotionDiv({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        ease: 'easeOut',
        delay,
      }}
      viewport={{ once: true, amount: 0.12 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
