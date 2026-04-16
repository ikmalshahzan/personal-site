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

  return (
    <section id="skills">
      <div className="container-skills">
        <div className="section-label fade-up">// stack & proficiency</div>
        <h2 className="section-title fade-up">Skills</h2>
      </div>
        
      <div className="fade-up">
        <SkillsCarousel items={skillsWithIcons} speed={30} />
      </div>
    </section>
  );
}
