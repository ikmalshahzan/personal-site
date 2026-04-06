import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Expertise from './components/Expertise.jsx';
import Skills from './components/Skills.jsx';
import ContribSection from './components/ContribSection.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useCursor, useFadeUp, useSkillBars } from './hooks.js';
import { expertise, skills } from './data.js';

function App() {
  useCursor();
  useFadeUp();
  useSkillBars();

  return (
    <div className="page-wrapper">
      <Nav />
      <Hero />
      <section id="expertise">
        <div className="section-label fade-up">// what I do</div>
        <h2 className="section-title fade-up">Core Expertise</h2>
        <Expertise expertise={expertise} />
      </section>
      <Skills skills={skills} />
      {/* <ContribSection /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
