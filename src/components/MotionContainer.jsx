import { motion } from 'framer-motion';

export default function MotionContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
