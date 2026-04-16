import React, { useState, useEffect, useRef } from 'react';
import '../styles/SkillsCarousel.css';

const SkillsCarousel = ({ items = [], speed = 40 }) => {
  const [tooltipActive, setTooltipActive] = useState(null);
  const scrollContainerRef = useRef(null);

  // Auto-scroll effect - continuously loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || items.length === 0) return;

    let scrollInterval = setInterval(() => {
      container.scrollLeft += 1;
    }, speed);

    // Listen for when we reach the end of first set and reset
    const checkScroll = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth / 3.5) {
        container.scrollLeft = 0;
      }
    }, 100);

    return () => {
      clearInterval(scrollInterval);
      clearInterval(checkScroll);
    };
  }, [speed, items.length]);

  const handleMouseEnter = (index) => {
    setTooltipActive(index);
  };

  const handleMouseLeave = () => {
    setTooltipActive(null);
  };

  return (
    <div className="skills-carousel-wrapper">
      {/* Left fade overlay */}
      <div className="carousel-fade carousel-fade-left"></div>

      {/* Scroll container */}
      <div className="carousel-scroll-container" ref={scrollContainerRef}>
        <div className="carousel-content">
          {/* Triple items for seamless infinite looping */}
          {[...items, ...items, ...items].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="carousel-item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="skill-card">
                <div className="skill-logo">
                  {item.icon || item.logo || '🔧'}
                </div>
                {tooltipActive === index && (
                  <div className="carousel-tooltip">
                    <div className="tooltip-name">{item.name}</div>
                    {item.pct && (
                      <div className="tooltip-proficiency">
                        {item.pct}% proficiency
                      </div>
                    )}
                    {item.description && (
                      <div className="tooltip-description">
                        {item.description}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right fade overlay */}
      <div className="carousel-fade carousel-fade-right"></div>
    </div>
  );
};

export default SkillsCarousel;
