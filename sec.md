<html lang="en-US">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>FinGuard | Security Audits for Indian Fintechs</title>

<style>
:root {
  --bg-dark: #0b1220;
  --bg-card: #162133;
  --bg-soft: #111827;
  --accent-blue: #38bdf8;
  --accent-green: #4ade80;
  --text-main: #cbd5e1;
  --text-bright: #ffffff;
  --border-color: #263244;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: var(--bg-dark);
  color: var(--text-main);
  line-height: 1.6;
}
.container { width: min(1100px, 92%); margin: auto; }
nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(11, 18, 32, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
}
.nav-wrap {
  display: flex; justify-content: space-between;
  align-items: center; padding: 18px 0;
}
.logo { font-size: 1.1rem; font-weight: 700; color: white; }
.nav-cta { text-decoration: none; color: var(--accent-blue); font-weight: 600; }
header {
  padding: 90px 0 70px;
  text-align: center;
  background: linear-gradient(180deg, #111827 0%, #0b1220 100%);
  border-bottom: 1px solid var(--border-color);
}
.subtitle {
  color: var(--accent-blue);
  font-weight: 700; font-size: 0.95rem;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 20px;
  color: white;
  font-weight: 800;
  line-height: 1.15;
}
.hero-text { max-width: 720px; margin: auto; font-size: 1.1rem; }
.cta-buttons {
  margin-top: 32px;
  display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;
}
.btn {
  padding: 14px 22px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.2s ease;
}
.btn-primary { background: var(--accent-blue); color: #08111d; }
.btn-primary:hover { transform: translateY(-2px); }
.btn-secondary { border: 1px solid var(--border-color); color: white; }
.btn-secondary:hover { border-color: var(--accent-blue); }
section { padding: 70px 0; }
h2 { text-align: center; color: white; margin-bottom: 35px; font-size: 1.8rem; }
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 24px;
  border-radius: 14px;
}
.service-title {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.why-section {
  background: var(--bg-soft);
  padding: 40px;
  border: 1px solid var(--border-color);
  border-radius: 16px;
}
.why-grid { display: grid; gap: 18px; }
.why-item { display: flex; gap: 12px; }
.why-icon { color: var(--accent-green); font-weight: bold; }
.bottom-cta {
  text-align: center;
  padding: 40px;
  background: #08111d;
  border: 1px solid rgba(56, 189, 248, 0.15);
  border-radius: 16px;
}
.bottom-cta h3 { color: white; margin-bottom: 16px; font-size: 1.8rem; }
footer {
  padding: 30px;
  text-align: center;
  color: #64748b;
  border-top: 1px solid var(--border-color);
}
@media (max-width: 900px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .nav-wrap { flex-direction: column; gap: 10px; }
  .services-grid { grid-template-columns: 1fr; }
  .cta-buttons { flex-direction: column; width: 100%; }
  .btn { width: 100%; text-align: center; }
}
</style>
</head>
<body>
<nav>
  <div class="container nav-wrap">
    <div class="logo">FinGuard</div>
    <a href="mailto:ashishmukherjee@gmail.com" class="nav-cta">Contact</a>
  </div>
</nav>

<header>
  <div class="container">
    <div class="subtitle">Security Audits for Indian Fintechs</div>
    <h1>Secure Your Fintech Before Compliance Becomes a Risk</h1>
    <div class="hero-text">
      Rigorous audits for RBI, NPCI, CERT-In, PCI-DSS, SOC 2, ISO 27001, and DPDP compliance.
    </div>
    <div class="cta-buttons">
      <a href="mailto:ashishmukherjee@gmail.com" class="btn btn-primary">Book a Security Review</a>
      <a href="#services" class="btn btn-secondary">View Services</a>
    </div>
  </div>
</header>

<main class="container">
<section id="services">
  <h2>What We Audit</h2>
  <div class="services-grid">
    <div class="service-card"><div class="service-title">Application & API VAPT</div>Comprehensive testing for fintech applications and APIs.</div>
    <div class="service-card"><div class="service-title">Cloud Security Review</div>IAM, misconfigurations, exposed assets, and architecture weaknesses.</div>
    <div class="service-card"><div class="service-title">RBI Compliance Audits</div>Audit readiness aligned with RBI governance.</div>
    <div class="service-card"><div class="service-title">PCI-DSS Assessments</div>Payment security audits for merchants and processors.</div>
    <div class="service-card"><div class="service-title">SOC 2 Readiness</div>Controls mapping and gap analysis.</div>
    <div class="service-card"><div class="service-title">DPDP Compliance Review</div>Privacy and data handling controls aligned with India's DPDP Act.</div>
  </div>
</section>

<section class="why-section">
  <h2>Why FinGuard</h2>
  <div class="why-grid">
    <div class="why-item"><span class="why-icon">✓</span> Specialized in Indian fintech regulations</div>
    <div class="why-item"><span class="why-icon">✓</span> Faster audits for startups and NBFCs</div>
    <div class="why-item"><span class="why-icon">✓</span> Cloud-native and API-first expertise</div>
    <div class="why-item"><span class="why-icon">✓</span> Compliance-focused testing</div>
  </div>
</section>
</main>

<footer>© 2026 FinGuard Security. Built for Indian fintech compliance.</footer>
</body>
</html>
