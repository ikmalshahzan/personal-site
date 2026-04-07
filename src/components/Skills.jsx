import { skills } from '../data.js';

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
  // Create 21 items by repeating skills
  const repeatedSkills = [];
  while (repeatedSkills.length < 21) {
    repeatedSkills.push(...skills);
  }
  repeatedSkills.splice(21);

  // Duplicate for seamless loop
  const allSkills = [...repeatedSkills, ...repeatedSkills];

  return (
    <section id="skills">
      <div className="section-label fade-up">// stack & proficiency</div>
      <h2 className="section-title fade-up">Skills</h2>
      <div className="skills-slider fade-up">
        <div className="skills-track">
          <div className="skills-grid">
            {allSkills.map((skill, index) => (
              <div key={index} className="skill-logo" title={`${skill.name}: ${skill.pct}% proficiency`}>
                <div className="logo">{logos[skill.name] || '🔧'}</div>
                <div className="skill-tooltip">
                  <div className="tooltip-name">{skill.name}</div>
                  <div className="tooltip-desc">Proficiency: {skill.pct}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
