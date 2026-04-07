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
  return (
    <section id="skills">
      <div className="section-label fade-up">// stack & proficiency</div>
      <h2 className="section-title fade-up">Skills</h2>
      <div className="skills-loop fade-up">
        <div className="logo-container">
          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            return (
              <div
                key={index}
                className="skill-logo"
                style={{
                  transform: `rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`,
                }}
                title={`${skill.name}: ${skill.pct}% proficiency`}
              >
                <div className="logo">{logos[skill.name] || '🔧'}</div>
                <div className="skill-tooltip">
                  <div className="tooltip-name">{skill.name}</div>
                  <div className="tooltip-desc">Proficiency: {skill.pct}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
