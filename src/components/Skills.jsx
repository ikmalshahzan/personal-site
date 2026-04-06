export default function Skills({ skills }) {
  return (
    <section id="skills">
      <div className="section-label fade-up">// stack & proficiency</div>
      <h2 className="section-title fade-up">Skills</h2>
      <div className="skills-container fade-up">
        {skills.map((skill, index) => (
          <div key={index} className="skill-row">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" data-pct={skill.pct} />
            </div>
            <div className="skill-pct">{skill.pct}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}
