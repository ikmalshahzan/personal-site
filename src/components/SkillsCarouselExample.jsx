import React from 'react';
import SkillsCarousel from './SkillsCarousel';
import { skills } from '../data.js';

/**
 * Example usage of SkillsCarousel component
 * 
 * Props:
 * - items: Array of skill objects with shape { name, pct, icon?, description? }
 * - speed: Scroll speed in milliseconds (default: 30, lower = faster)
 */

export default function SkillsCarouselExample() {
  // Logo mapping for skill emojis/icons
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

  // Transform skills data to include icons
  const skillsWithIcons = skills.map((skill) => ({
    ...skill,
    icon: logos[skill.name] || '🔧',
  }));

  return (
    <section id="skills-carousel">
      <SkillsCarousel items={skillsWithIcons} speed={30} />
    </section>
  );
}
