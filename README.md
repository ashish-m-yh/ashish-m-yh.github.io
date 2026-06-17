<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ashish Mukherjee | Fractional CTO &amp; Technical Advisor</title>
    <meta name="description" content="Fractional CTO and technical advisor for startups and growth-stage companies." />
    <link rel="canonical" href="https://ashish-m-yh.github.io/" />
    <meta property="og:title" content="Ashish Mukherjee" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="https://ashish-m-yh.github.io/" />
    <meta property="og:site_name" content="Ashish Mukherjee" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta property="twitter:title" content="Ashish Mukherjee" />
    <style>
      :root {
        --bg-dark: #0f172a;
        --bg-card: #1e293b;
        --accent-blue: #38bdf8;
        --accent-green: #4ade80;
        --text-main: #cbd5e1;
        --text-bright: #ffffff;
        --border-color: #334155;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        width: 100%;
        min-height: 100%;
        margin: 0;
        overflow-x: hidden;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: var(--bg-dark);
        color: var(--text-main);
        line-height: 1.6;
      }

      a {
        color: inherit;
      }

      header {
        padding: 48px 20px 36px;
        text-align: center;
        border-bottom: 1px solid var(--border-color);
        background: linear-gradient(180deg, #111827 0%, #0f172a 100%);
      }

      .header-container {
        width: min(100%, 820px);
        margin: 0 auto;
      }

      h1 {
        margin: 0 0 12px;
        color: var(--text-bright);
        font-size: clamp(2rem, 6vw, 3.5rem);
        line-height: 1.08;
        font-weight: 800;
      }

      .subtitle {
        margin-bottom: 14px;
        color: var(--accent-blue);
        font-size: clamp(1.05rem, 3.5vw, 1.3rem);
        font-weight: 650;
      }

      .tagline {
        max-width: 680px;
        margin: 0 auto;
        font-size: 1.05rem;
      }

      .container {
        width: min(100%, 1100px);
        margin: 0 auto;
        padding: 36px 20px;
      }

      h2 {
        position: relative;
        margin: 0 0 22px;
        color: var(--text-bright);
        font-size: clamp(1.05rem, 4vw, 1.3rem);
        line-height: 1.35;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1.2px;
      }

      h2::after {
        content: "";
        display: block;
        width: 40px;
        height: 3px;
        margin: 8px auto 0;
        border-radius: 2px;
        background-color: var(--accent-blue);
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
        gap: 20px;
        margin-bottom: 40px;
      }

      .service-card,
      .why-section,
      .cta-panel {
        border: 1px solid var(--border-color);
        border-radius: 8px;
      }

      .service-card {
        padding: 24px;
        background-color: var(--bg-card);
        transition: transform 0.2s, border-color 0.2s;
      }

      .service-card:hover {
        border-color: #475569;
        transform: translateY(-2px);
      }

      .service-title {
        margin-bottom: 10px;
        color: var(--text-bright);
        font-size: 1.15rem;
        font-weight: 700;
      }

      .service-desc {
        margin: 0;
        color: var(--text-main);
        font-size: 0.96rem;
      }

      .why-section {
        margin-bottom: 40px;
        padding: 30px;
        background-color: #111827;
      }

      .why-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
        gap: 15px;
        margin-top: 15px;
      }

      .why-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        font-size: 1rem;
      }

      .why-icon {
        flex: 0 0 auto;
        color: var(--accent-green);
        font-size: 1.1rem;
        font-weight: 800;
        line-height: 1.4;
      }

      .cta-panel {
        padding: 30px;
        background-color: #020617;
        border-color: rgba(56, 189, 248, 0.2);
      }

      .contact-flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px;
      }

      .contact-channel {
        min-width: 0;
        max-width: 100%;
        text-align: center;
      }

      .contact-label {
        margin-bottom: 4px;
        color: #94a3b8;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .contact-link {
        color: var(--text-bright);
        font-size: 1rem;
        overflow-wrap: anywhere;
        text-decoration: none;
        transition: color 0.15s;
      }

      .contact-link:hover {
        color: var(--accent-blue);
      }

      .footer-tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px 14px;
        margin-top: 25px;
        padding-top: 20px;
        border-top: 1px solid var(--border-color);
        color: #94a3b8;
        font-size: 0.8rem;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      .separator {
        color: #475569;
      }

      @media (max-width: 640px) {
        header {
          padding: 34px 16px 28px;
        }

        .container {
          padding: 24px 14px;
        }

        .service-card,
        .why-section,
        .cta-panel {
          padding: 18px;
        }

        .services-grid,
        .why-section {
          margin-bottom: 28px;
        }

        .contact-flex {
          flex-direction: column;
          align-items: stretch;
          gap: 18px;
        }

        .footer-tags {
          font-size: 0.75rem;
          letter-spacing: 1px;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <div class="header-container">
        <div class="subtitle">Fractional CTO / Tech Advisor for Startups &amp; Growth-stage Companies</div>
        <p class="tagline">Technical leader with more than 25 years across multiple startups and giants like Yahoo and Monster</p>
      </div>
    </header>

    <main class="container">
      <section class="services-grid" aria-label="Services">
        <div class="service-card">
          <div class="service-title">Technology Strategy</div>
          <p class="service-desc">Align technology with business goals and drive long-term impact.</p>
        </div>
        <div class="service-card">
          <div class="service-title">Architecture &amp; Scalability</div>
          <p class="service-desc">Design resilient, secure, and scalable architectures for complex products and platforms.</p>
        </div>
        <div class="service-card">
          <div class="service-title">Team Leadership</div>
          <p class="service-desc">Build, mentor, and lead high-performing engineering teams.</p>
        </div>
        <div class="service-card">
          <div class="service-title">Risk &amp; Security</div>
          <p class="service-desc">Identify and mitigate technical risks. Strengthen security, compliance, and operational resilience.</p>
        </div>
        <div class="service-card">
          <div class="service-title">AI-Enable Your Business</div>
          <p class="service-desc">Unlock AI-driven opportunities that improve efficiency, innovation, and competitive advantage.</p>
        </div>
        <div class="service-card">
          <div class="service-title">Technical Due Diligence</div>
          <p class="service-desc">Assess technology, architecture, and risk to support confident investment and acquisition decisions.</p>
        </div>
      </section>

      <section class="cta-panel" aria-label="Contact">
        <div class="contact-flex">
          <div class="contact-channel">
            <div class="contact-label">Email Directly</div>
            <a href="mailto:ashishmukherjee@gmail.com" class="contact-link">ashishmukherjee@gmail.com</a>
          </div>
          <div class="contact-channel">
            <div class="contact-label">LinkedIn Connection</div>
            <a href="https://www.linkedin.com/in/ashishindia/" target="_blank" rel="noopener" class="contact-link">linkedin.com/in/ashishindia</a>
          </div>
          <div class="contact-channel">
            <div class="contact-label">WhatsApp</div>
            <span class="contact-link">+91-8800199037</span>
          </div>
        </div>
        <div class="footer-tags">
          <span>Innovation</span>
          <span class="separator">&bull;</span>
          <span>Risk Management</span>
          <span class="separator">&bull;</span>
          <span>Security</span>
        </div>
      </section>
      <br/><br/>
      <section class="why-section">
        <h2>Why Partner With A Fractional CTO?</h2>
        <div class="why-grid">
          <div class="why-item"><span class="why-icon">&#10003;</span><span>Senior-level expertise at a fraction of the cost</span></div>
          <div class="why-item"><span class="why-icon">&#10003;</span><span>Flexible engagement that fits your stage and needs</span></div>
          <div class="why-item"><span class="why-icon">&#10003;</span><span>Objective perspective focused on outcomes</span></div>
          <div class="why-item"><span class="why-icon">&#10003;</span><span>Accelerate innovation with modern architecture &amp; emerging tech</span></div>
          <div class="why-item"><span class="why-icon">&#10003;</span><span>Strengthen risk management, security, and compliance</span></div>
          <div class="why-item"><span class="why-icon">&#10003;</span><span>Increased investor confidence and valuation</span></div>
        </div>
      </section>

    </main>
  </body>
</html>
