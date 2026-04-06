import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label fade-up">// career</div>
      <h2 className="section-title fade-up">Experience</h2>
      <div className="timeline fade-up">
        {experience.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-company">{item.company}</div>
            <div className="timeline-desc">{item.desc}</div>
            <div className="timeline-tags">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
