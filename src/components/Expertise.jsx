export default function Expertise({ expertise }) {
  return (
    <div className="expertise-grid fade-up">
      {expertise.map((item, index) => (
        <div key={index} className="expertise-card">
          <div className="card-icon">{item.icon}</div>
          <div className="card-title">{item.title}</div>
          <div className="card-desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
