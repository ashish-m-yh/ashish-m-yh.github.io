
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fractional CTO — Ashish Mukherjee</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: system-ui, sans-serif; color: #1e293b; background: #fff; }
  a { color: #60a5fa; text-decoration: none; }

  /* HERO */
  .hero { background: #0a1628; color: #fff; padding: 2.5rem 2rem 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; }
  .hero h1 { font-size: 56px; font-weight: 700; line-height: 1; letter-spacing: -1px; color: #fff; }
  .hero h1 span { color: #2563eb; }
  .laptop { background: #111d35; border-radius: 12px; padding: 1rem; border: 1px solid #1e3a5f; }
  .laptop-screen { background: #0d1b2e; border-radius: 8px; padding: 0.75rem; font-size: 11px; color: #7dd3fc; }
  .screen-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
  .screen-box { background: #0f2440; border-radius: 4px; padding: 0.5rem; }
  .screen-box .label { color: #94a3b8; font-size: 9px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
  .gauge { display: flex; align-items: center; gap: 6px; }
  .gauge-circle { width: 36px; height: 36px; border-radius: 50%; border: 3px solid #1d4ed8; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: #60a5fa; }
  .strong-badge { color: #22c55e; font-weight: 700; font-size: 12px; }
  .roadmap-row { display: flex; align-items: center; gap: 4px; margin: 2px 0; font-size: 8px; color: #94a3b8; }
  .roadmap-bar { height: 3px; border-radius: 2px; }
  .quote-box { background: #1e3a5f; border-radius: 8px; padding: 1rem 1.25rem; margin-top: 1rem; }
  .quote-box p { font-size: 17px; font-weight: 700; color: #fff; line-height: 1.3; }
  .quote-box p span { color: #2563eb; }
  .quote-mark { font-size: 28px; color: #2563eb; line-height: 0.5; display: block; margin-bottom: 4px; }

  /* TWO COLUMN */
  .two-col { display: grid; grid-template-columns: 1fr 1fr; }

  /* WHAT I DO */
  .section-white { background: #fff; padding: 2rem; }
  .what-i-do h2 { font-size: 13px; font-weight: 600; color: #2563eb; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px; margin-bottom: 1.5rem; }
  .service-list { display: grid; gap: 1rem; }
  .service-item { display: flex; align-items: flex-start; gap: 14px; }
  .service-icon { width: 40px; height: 40px; min-width: 40px; background: #eff6ff; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #2563eb; font-size: 20px; }
  .service-item h3 { font-size: 14px; font-weight: 600; margin-bottom: 2px; color: #1e293b; }
  .service-item p { font-size: 13px; color: #64748b; line-height: 1.5; }

  /* WHY SECTION */
  .section-dark { background: #0a1628; padding: 2rem; }
  .section-dark h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 1.5rem; }
  .why-grid { display: grid; gap: 0.75rem; }
  .why-item { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: #cbd5e1; line-height: 1.4; }
  .check { width: 24px; height: 24px; min-width: 24px; background: #1d4ed8; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 13px; }
  .ideal-box { background: #112240; border: 1px solid #1e3a5f; border-radius: 10px; padding: 1rem 1.25rem; margin-top: 1.5rem; display: flex; gap: 14px; align-items: flex-start; }
  .ideal-icon { width: 48px; height: 48px; min-width: 48px; background: #1e3a5f; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #60a5fa; font-size: 22px; }
  .ideal-box h3 { font-size: 13px; font-weight: 700; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.5px; }
  .ideal-box p { font-size: 13px; color: #94a3b8; margin-top: 4px; line-height: 1.4; }

  /* FOOTER */
  .footer { background: #06101f; padding: 1.5rem 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; }
  .footer-left { display: flex; gap: 16px; align-items: flex-start; }
  .avatar { width: 52px; height: 52px; min-width: 52px; background: #1e3a5f; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #60a5fa; font-size: 24px; }
  .footer-left h3 { font-size: 16px; font-weight: 600; color: #fff; }
  .footer-left .role { font-size: 13px; color: #3b82f6; margin-bottom: 4px; }
  .footer-left p { font-size: 12px; color: #94a3b8; line-height: 1.4; }
  .footer-tags { display: flex; gap: 12px; margin-top: 8px; }
  .footer-tag { font-size: 11px; color: #64748b; display: flex; align-items: center; gap: 4px; }
  .footer-right h3 { font-size: 14px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.75rem; }
  .footer-right h3 span { color: #3b82f6; }
  .contact-item { display: flex; align-items: center; gap: 10px; font-size: 13px; color: #94a3b8; margin-bottom: 6px; }
  .contact-item i { color: #3b82f6; font-size: 16px; }
</style>
</head>
<body>

<!-- HERO -->
<div class="hero">
  <div>
    <h1>FRACTIONAL<br><span>CTO</span></h1>
  </div>
  <div>
    <div class="laptop">
      <div class="laptop-screen">
        <div class="screen-grid">
          <div class="screen-box">
            <div class="label">System Architecture</div>
            <div style="display:flex;gap:3px;flex-wrap:wrap;margin-top:4px">
              <div style="background:#1d4ed8;width:18px;height:10px;border-radius:2px"></div>
              <div style="background:#0f2440;width:12px;height:10px;border-radius:2px"></div>
              <div style="background:#1d4ed8;width:14px;height:10px;border-radius:2px"></div>
              <div style="background:#0f2440;width:10px;height:10px;border-radius:2px"></div>
            </div>
          </div>
          <div class="screen-box">
            <div class="label">Risk Overview</div>
            <div class="gauge">
              <div class="gauge-circle">68%</div>
              <span style="color:#94a3b8;font-size:9px">Low risk</span>
            </div>
          </div>
          <div class="screen-box">
            <div class="label">Tech Roadmap</div>
            <div class="roadmap-row">Platform <div class="roadmap-bar" style="width:40px;background:#1d4ed8"></div></div>
            <div class="roadmap-row">Core Svcs <div class="roadmap-bar" style="width:30px;background:#f59e0b"></div></div>
            <div class="roadmap-row">AI Deploy <div class="roadmap-bar" style="width:50px;background:#1d4ed8"></div></div>
          </div>
          <div class="screen-box">
            <div class="label">Security Posture</div>
            <div style="margin-top:4px;text-align:center">
              <i class="ti ti-shield-check" style="font-size:20px;color:#22c55e"></i>
              <div class="strong-badge">STRONG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="quote-box">
      <span class="quote-mark">"</span>
      <p>Strategy today.<br><span>Stronger tomorrow.</span></p>
    </div>
  </div>
</div>

<!-- TWO COLUMN -->
<div class="two-col">

  <!-- WHAT I DO -->
  <div class="section-white">
    <div class="what-i-do">
      <h2><i class="ti ti-target"></i> What I do</h2>
      <div class="service-list">
        <div class="service-item">
          <div class="service-icon"><i class="ti ti-chess-knight"></i></div>
          <div>
            <h3>Technology strategy</h3>
            <p>Align technology with business goals and drive long-term impact.</p>
          </div>
        </div>
        <div class="service-item">
          <div class="service-icon"><i class="ti ti-stack-2"></i></div>
          <div>
            <h3>Architecture &amp; scalability</h3>
            <p>Design resilient, secure, and scalable architectures for complex products and platforms.</p>
          </div>
        </div>
        <div class="service-item">
          <div class="service-icon"><i class="ti ti-users"></i></div>
          <div>
            <h3>Team leadership</h3>
            <p>Build, mentor, and lead high-performing engineering teams.</p>
          </div>
        </div>
        <div class="service-item">
          <div class="service-icon"><i class="ti ti-shield-check"></i></div>
          <div>
            <h3>Risk &amp; security</h3>
            <p>Identify and mitigate technical risks. Strengthen security, compliance, and operational resilience.</p>
          </div>
        </div>
        <div class="service-item">
          <div class="service-icon"><i class="ti ti-cpu"></i></div>
          <div>
            <h3>AI-enable your business</h3>
            <p>Unlock AI-driven opportunities that improve efficiency, innovation, and competitive advantage.</p>
          </div>
        </div>
        <div class="service-item">
          <div class="service-icon"><i class="ti ti-chart-bar"></i></div>
          <div>
            <h3>Technical due diligence</h3>
            <p>Assess technology, architecture, and risk to support confident investment and acquisition decisions.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- WHY FRACTIONAL CTO -->
  <div class="section-dark">
    <h2>Why fractional CTO?</h2>
    <div class="why-grid">
      <div class="why-item"><div class="check"><i class="ti ti-check"></i></div><span>Senior-level expertise at a fraction of the cost</span></div>
      <div class="why-item"><div class="check"><i class="ti ti-check"></i></div><span>Flexible engagement that fits your stage and needs</span></div>
      <div class="why-item"><div class="check"><i class="ti ti-check"></i></div><span>Objective perspective focused on outcomes</span></div>
      <div class="why-item"><div class="check"><i class="ti ti-check"></i></div><span>Accelerate innovation with modern architecture and emerging technologies</span></div>
      <div class="why-item"><div class="check"><i class="ti ti-check"></i></div><span>Strengthen risk management, security, and compliance</span></div>
      <div class="why-item"><div class="check"><i class="ti ti-check"></i></div><span>Increased investor confidence and valuation</span></div>
    </div>
    <div class="ideal-box">
      <div class="ideal-icon"><i class="ti ti-building-skyscraper"></i></div>
      <div>
        <h3>Ideal for startups and growth companies</h3>
        <p>Who need senior technology leadership without the commitment of a full-time hire.</p>
      </div>
    </div>
  </div>

</div>

<!-- FOOTER -->
<div class="footer">
  <div class="footer-left">
    <div class="avatar"><i class="ti ti-user"></i></div>
    <div>
      <h3>Ashish Mukherjee</h3>
      <div class="role">Fractional CTO | Technical Advisor</div>
      <p>Helping startups and scaling companies architect, build, and innovate with confidence and agility.</p>
      <div class="footer-tags">
        <span class="footer-tag"><i class="ti ti-rocket"></i> Innovation</span>
        <span class="footer-tag"><i class="ti ti-shield"></i> Risk management</span>
        <span class="footer-tag"><i class="ti ti-lock"></i> Security</span>
      </div>
    </div>
  </div>
  <div class="footer-right">
    <h3>Let's build <span>the future.</span></h3>
    <div class="contact-item"><i class="ti ti-mail"></i> ashishmukherjee@gmail.com</div>
    <div class="contact-item"><i class="ti ti-phone"></i> +91-8800199037</div>
    <div class="contact-item"><i class="ti ti-brand-linkedin"></i> <a href="https://www.linkedin.com/in/ashishindia/" target="_blank">linkedin.com/in/ashishindia</a></div>
  </div>
</div>

</body>
</html>
