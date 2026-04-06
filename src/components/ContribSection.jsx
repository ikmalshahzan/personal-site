import ContribGraph from './ContribGraph.jsx';

export default function ContribSection() {
  return (
    <section className="contrib-section">
      <div className="section-label fade-up">// activity</div>
      <h2 className="section-title fade-up">Contribution Activity</h2>
      <div className="contrib-graph fade-up">
        <ContribGraph />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', justifyContent: 'flex-end' }}>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>Less</span>
          {['var(--bg3)', '#0e4429', '#006d32', '#26a641', '#39d353'].map((color, index) => (
            <div key={index} style={{ width: 12, height: 12, borderRadius: 2, background: color }} />
          ))}
          <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>More</span>
        </div>
      </div>
    </section>
  );
}
