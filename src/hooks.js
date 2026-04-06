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

export function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
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
