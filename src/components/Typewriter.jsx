import { useEffect, useState } from 'react';

export default function Typewriter({ strings }) {
  const [text, setText] = useState('');
  const [si, setSi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[si];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, ci + 1));
        if (ci + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCi((c) => c + 1);
        }
      } else {
        setText(current.slice(0, ci - 1));
        if (ci - 1 === 0) {
          setDeleting(false);
          setSi((s) => (s + 1) % strings.length);
          setCi(0);
        } else {
          setCi((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [ci, deleting, si, strings]);

  return (
    <span>
      {text}
      <span style={{ color: 'var(--green)', animation: 'blink 1s infinite' }}>|</span>
    </span>
  );
}
