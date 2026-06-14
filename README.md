
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ashish Mukherjee | Fractional CTO & Technical Advisor</title>
    <style>
        :root {
            --bg-dark: #0f172a;
            --bg-card: #1e293b;
            --bg-light: #f8fafc;
            --accent-blue: #38bdf8;
            --accent-green: #4ade80;
            --text-main: #cbd5e1;
            --text-bright: #ffffff;
            --text-dark: #334155;
            --border-color: #334155;
        }
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg-dark);
            color: var(--text-main);
            line-height: 1.6;
        }
        header {
            padding: 40px 20px 30px 20px;
            text-align: center;
            border-bottom: 1px solid var(--border-color);
            background: linear-gradient(180deg, #111827 0%, #0f172a 100%);
        }
        .header-container {
            max-width: 800px;
            margin: 0 auto;
        }
        .badge {
            background-color: rgba(56, 189, 248, 0.1);
            color: var(--accent-blue);
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 700;
            display: inline-block;
            margin-bottom: 15px;
            border: 1px solid rgba(56, 189, 248, 0.2);
        }
        header h1 {
            font-size: 2.5rem;
            color: var(--text-bright);
            font-weight: 800;
            margin-bottom: 5px;
            letter-spacing: -0.5px;
        }
        .subtitle {
            font-size: 1.3rem;
            color: var(--accent-blue);
            font-weight: 600;
            margin-bottom: 15px;
        }
        .tagline {
            font-size: 1.1rem;
            color: var(--text-main);
            max-width: 600px;
            margin: 0 auto;
            font-weight: 300;
        }
        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 35px 20px;
        }
        h2 {
            font-size: 1.3rem;
            color: var(--text-bright);
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 20px;
            text-align: center;
            position: relative;
        }
        h2::after {
            content: '';
            display: block;
            width: 40px;
            height: 3px;
            background-color: var(--accent-blue);
            margin: 8px auto 0 auto;
            border-radius: 2px;
        }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        .service-card {
            background-color: var(--bg-card);
            padding: 25px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            transition: transform 0.2s, border-color 0.2s;
        }
        .service-card:hover {
            transform: translateY(-2px);
            border-color: #475569;
        }
        .service-title {
            color: var(--text-bright);
            font-weight: 700;
            font-size: 1.15rem;
            margin-bottom: 10px;
            letter-spacing: 0.5px;
        }
        .service-desc {
            font-size: 0.95rem;
            color: var(--text-main);
        }
        .statement-banner {
            text-align: center;
            background: linear-gradient(90deg, #1e293b 0%, #0f172a 100%);
            padding: 25px;
            border-radius: 8px;
            margin-bottom: 40px;
            border: 1px dashed var(--border-color);
        }
        .statement-banner p {
            font-size: 1.25rem;
            font-weight: 700;
            letter-spacing: 1px;
            color: var(--text-bright);
        }
        .statement-banner span {
            color: var(--accent-blue);
        }
        .why-section {
            background-color: #111827;
            padding: 30px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            margin-bottom: 40px;
        }
        .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }
        @media (max-width: 600px) {
            .why-grid {
                grid-template-columns: 1fr;
            }
        }
        .why-item {
            display: flex;
            align-items: flex-start;
            font-size: 1rem;
        }
        .why-icon {
            color: var(--accent-green);
            margin-right: 12px;
            font-weight: bold;
            font-size: 1.1rem;
            line-height: 1;
        }
        .cta-panel {
            background-color: #020617;
            border-radius: 8px;
            padding: 30px;
            border: 1px solid rgba(56, 189, 248, 0.2);
        }
        .cta-title {
            text-align: center;
            font-size: 1.4rem;
            color: var(--text-bright);
            font-weight: 700;
            margin-bottom: 25px;
            letter-spacing: 0.5px;
        }
        .contact-flex {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 20px;
        }
        .contact-channel {
            text-align: center;
            min-width: 200px;
        }
        .contact-label {
            font-size: 0.8rem;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 4px;
            font-weight: 700;
        }
        .contact-link {
            font-size: 1rem;
            color: var(--text-bright);
            text-decoration: none;
            transition: color 0.15s;
        }
        .contact-link:hover {
            color: var(--accent-blue);
        }
        .footer-tags {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 25px;
            border-top: 1px solid var(--border-color);
            padding-top: 20px;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #64748b;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <div class="header-container">
            <span class="badge">On-Demand Executive Leadership</span>
            <div class="subtitle">Fractional CTO & Technical Advisor</div>
            <p class="tagline">Ideal for startups and growth-stage companies</p>
        </div>
    </header>
    <main class="container">
        <div class="services-grid">
            <div class="service-card">
                <div class="service-title">Technology Strategy</div>
                <p class="service-desc">Align technology with business goals and drive long-term impact.</p>
            </div>
            <div class="service-card">
                <div class="service-title">Architecture & Scalability</div>
                <p class="service-desc">Design resilient, secure, and scalable architectures for complex products and platforms.</p>
            </div>
            <div class="service-card">
                <div class="service-title">Team Leadership</div>
                <p class="service-desc">Build, mentor, and lead high-performing engineering teams.</p>
            </div>
            <div class="service-card">
                <div class="service-title">Risk & Security</div>
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
        </div>
        <div class="why-section">
            <h2>Why Partner With A Fractional CTO?</h2>
            <div class="why-grid">
                <div class="why-item">
                    <span class="why-icon">&#10003;</span>
                    Senior-level expertise at a fraction of the cost
                </div>
                <div class="why-item">
                    <span class="why-icon">&#10003;</span>
                    Flexible engagement that fits your stage and needs
                </div>
                <div class="why-item">
                    <span class="why-icon">&#10003;</span>
                    Objective perspective focused on outcomes
                </div>
                <div class="why-item">
                    <span class="why-icon">&#10003;</span>
                    Accelerate innovation with modern architecture & emerging tech
                </div>
                <div class="why-item">
                    <span class="why-icon">&#10003;</span>
                    Strengthen risk management, security, and compliance
                </div>
                <div class="why-item">
                    <span class="why-icon">&#10003;</span>
                    Increased investor confidence and valuation
                </div>
            </div>
        </div>
        <section class="cta-panel">
            <div class="cta-title">Let's Build The Future.</div>
            <div class="contact-flex">
                <div class="contact-channel">
                    <div class="contact-label">Email Directly</div>
                    <a href="mailto:ashishmukherjee@gmail.com" class="contact-link">ashishmukherjee@gmail.com</a>
                </div>
                <div class="contact-channel">
                    <div class="contact-label">LinkedIn Connection</div>
                    <a href="https://www.linkedin.com/in/ashishindia/" target="_blank" rel="noopener" class="contact-link">https://www.linkedin.com/in/ashishindia/</a>
                </div>
                <div class="contact-channel">
                    <div class="contact-label">WhatsApp</div>
                    <span class="contact-link">+91-8800199037</span>
                </div>
            </div>
            <div class="footer-tags">
                <span>Innovation</span> &bull; <span>Risk Management</span> &bull; <span>Security</span>
            </div>
        </section>
    </main>
</body>
</html>
