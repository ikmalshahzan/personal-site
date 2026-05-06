import { useState } from 'react';
import { motion } from 'framer-motion';

const dockItems = [
  { href: '#expertise', icon: '⚡', label: 'Expertise' },
  { href: '#skills', icon: '📊', label: 'Skills' },
  { href: '#experience', icon: '💼', label: 'Experience' },
  { href: '#contact', icon: '📧', label: 'Contact' },
];

export default function Nav() {
  const [activeIndex, setActiveIndex] = useState(null);

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

      <div className="mobile-dock">
        <div className="dock-panel">
          {dockItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={`dock-item ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              animate={{
                scale: activeIndex === index ? 1.25 : 1,
                y: activeIndex === index ? -6 : 0,
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            >
              <span className="dock-icon">{item.icon}</span>
              <span className="dock-label">{item.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
}

