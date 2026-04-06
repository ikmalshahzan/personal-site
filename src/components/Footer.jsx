export default function Footer() {
  return (
    <footer>
      <div>Designed & built by <span>Ikmal Shahzan</span> · {new Date().getFullYear()}</div>
      <div style={{ marginTop: '0.4rem' }}>React · Vite · Deployed on Github Pages</div>
    </footer>
  );
}
