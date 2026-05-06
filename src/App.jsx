import { motion } from 'framer-motion';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Expertise from './components/Expertise.jsx';
import Skills from './components/Skills.jsx';
import ContribSection from './components/ContribSection.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useCursor, useSkillBars } from './hooks.js';
import { expertise, skills } from './data.js';

function App() {
  useCursor();
  useSkillBars();

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
    <div className="page-wrapper">
      <Nav />
      <Hero />
      <section id="expertise">
        <motion.div
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={headerVariants}
        >
          // what I do
        </motion.div>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={headerVariants}
        >
          Core Expertise
        </motion.h2>
        <Expertise expertise={expertise} />
      </section>
      <Skills />
      {/* <ContribSection /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
