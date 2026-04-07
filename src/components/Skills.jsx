import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rows: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          rows: 3,
        },
      },
    ],
  };

  return (
    <section id="skills">
      <div className="section-label fade-up">// stack & proficiency</div>
      <h2 className="section-title fade-up">Skills</h2>
      <div className="skills-slider fade-up">
        <Slider {...settings}>
          {repeatedSkills.map((skill, index) => (
            <div key={index} className="skill-logo" title={`${skill.name}: ${skill.pct}% proficiency`}>
              <div className="logo">{logos[skill.name] || '🔧'}</div>
              <div className="skill-tooltip">
                <div className="tooltip-name">{skill.name}</div>
                <div className="tooltip-desc">Proficiency: {skill.pct}%</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
