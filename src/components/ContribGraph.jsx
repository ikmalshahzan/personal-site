export default function ContribGraph() {
  const weeks = 52;
  const levels = [0, 0, 0, 1, 1, 2, 2, 3, 4];
  const cols = Array.from({ length: weeks }, (_, w) => (
    <div key={w} className="contrib-col">
      {Array.from({ length: 7 }, (_, d) => {
        const lvl = levels[Math.floor(Math.random() * levels.length)];
        return <div key={d} className={`contrib-cell${lvl > 0 ? ' l' + lvl : ''}`} />;
      })}
    </div>
  ));

  return <div className="contrib-grid">{cols}</div>;
}
