import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;

    const move = (e) => {
      const mx = e.clientX;
      const my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
      ring.style.left = mx + 'px';
      ring.style.top = my + 'px';
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
}

export function useSkillBars() {
  useEffect(() => {
    const bars = document.querySelectorAll('.skill-bar-fill');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const pct = entry.target.dataset.pct;
          entry.target.style.width = pct + '%';
        }
      });
    }, { threshold: 0.3 });

    bars.forEach((b) => obs.observe(b));
    return () => obs.disconnect();
  }, []);
}
