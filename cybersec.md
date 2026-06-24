<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>FinGuard Audits | Security Audits for Indian Fintechs</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/lucide@0.344.0/dist/umd/lucide.min.js"></script>

<style>
:root {
    --bg: #0a1220;
    --bg-soft: #111c2d;
    --card: rgba(255,255,255,0.035);
    --border: rgba(148,163,184,0.12);
    --text: #f1f5f9;
    --muted: #94a3b8;
    --accent: #3b82f6;
    --accent-2: #64748b;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    overflow-x: hidden;
}

body {
    font-family: Inter, sans-serif;
    background:
        radial-gradient(circle at top left, rgba(59,130,246,.08), transparent 35%),
        radial-gradient(circle at bottom right, rgba(100,116,139,.06), transparent 30%),
        linear-gradient(180deg, #0a1220 0%, #0f172a 100%);
    color: var(--text);
    line-height: 1.6;
}

.container {
    width: min(1200px, 92%);
    padding: 0 16px;
    margin: auto;
}

header {
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(18px);
    background: rgba(10,18,32,0.82);
    border-bottom: 1px solid var(--border);
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    flex-wrap: wrap;
}

.logo {
    font-size: 1.35rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo span {
    color: var(--accent);
}

nav {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
}

nav a {
    text-decoration: none;
    color: var(--muted);
    font-size: 0.95rem;
}

nav a:hover {
    color: white;
}

.btn {
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: white;
    padding: 13px 20px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 700;
    transition: .25s ease;
    display: inline-block;
}

.btn:hover {
    transform: translateY(-2px);
}

.secondary-btn {
    border: 1px solid var(--border);
    color: white;
    padding: 13px 20px;
    border-radius: 12px;
    text-decoration: none;
}

.hero {
    padding: 70px 0 20px;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 50px;
    align-items: center;
}

.hero h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    line-height: 1.1;
    font-weight: 800;
    margin-bottom: 18px;
}

.hero p {
    color: var(--muted);
    font-size: 1.1rem;
    max-width: 600px;
    margin-bottom: 20px;
}

.hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.hero-actions a {
    flex: 1;
    min-width: 180px;
    text-align: center;
}

.trust-badges {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    flex-wrap: wrap;
}

.badge {
    padding: 7px 12px;
    border: 1px solid rgba(59,130,246,.14);
    border-radius: 999px;
    color: #93c5fd;
    background: rgba(59,130,246,.08);
    font-size: 0.82rem;
}

.hero-card {
    width: 100%;
    background: var(--card);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.35);
}

.metric {
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
}

.metric:last-child {
    border-bottom: none;
}

.metric strong {
    display: block;
    font-size: 1.5rem;
    color: #60a5fa;
}

.section {
    padding: 60px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 32px;
}

.section-title h2 {
    font-size: 1.9rem;
    margin-bottom: 8px;
}

.section-title p {
    color: var(--muted);
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    gap: 20px;
}

.card {
    background: var(--card);
    border: 1px solid var(--border);
    padding: 22px;
    border-radius: 18px;
    backdrop-filter: blur(14px);
    transition: .3s ease;
}

.card:hover {
    transform: translateY(-6px);
    border-color: rgba(59,130,246,0.22);
}

.card-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: rgba(59,130,246,.08);
    margin-bottom: 14px;
    color: var(--accent);
}

.card h3 {
    margin-bottom: 10px;
}

.card p {
    color: var(--muted);
}

.compliance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
    gap: 16px;
}

.compliance {
    background: var(--bg-soft);
    border: 1px solid var(--border);
    padding: 18px;
    border-radius: 16px;
}

.compliance strong {
    display: block;
    margin-bottom: 6px;
    color: #93c5fd;
}

.compliance span {
    color: var(--muted);
    font-size: 0.92rem;
}

.cta {
    text-align: center;
    padding: 60px 0;
}

.cta-box {
    background: linear-gradient(
        135deg,
        rgba(59,130,246,.08),
        rgba(100,116,139,.06)
    );
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 36px;
}

.cta h2 {
    font-size: 2rem;
    margin-bottom: 14px;
}

.cta p {
    color: var(--muted);
    margin-bottom: 20px;
}

footer {
    padding: 20px 0;
    border-top: 1px solid var(--border);
    text-align: center;
    color: var(--muted);
    font-size: 0.88rem;
}

/* Tablet */
@media (max-width: 900px) {
    .hero-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .hero {
        padding: 50px 0 20px;
    }

    .section {
        padding: 50px 0;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
    }

    nav {
        width: 100%;
        gap: 12px;
    }

    .hero h1 {
        font-size: 2.2rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .cta-box {
        padding: 24px;
    }

    .cta h2 {
        font-size: 1.5rem;
    }
}

/* Small mobile */
@media (max-width: 480px) {
    .container {
        width: 100%;
        padding: 0 14px;
    }

    .hero {
        padding: 35px 0 10px;
    }

    .hero h1 {
        font-size: 1.9rem;
    }

    .hero p {
        font-size: 0.95rem;
    }

    .btn,
    .secondary-btn {
        width: 100%;
        text-align: center;
    }

    .hero-actions {
        flex-direction: column;
    }

    .badge {
        font-size: 0.75rem;
        padding: 6px 10px;
    }

    .card {
        padding: 18px;
    }

    .section-title h2 {
        font-size: 1.4rem;
    }
}
</style>
</head>

<body>

<header>
    <div class="container nav">
        <div class="logo">
            <i data-lucide="shield-check"></i>
            Fin<span>Guard</span>
        </div>

        <nav>
            <a href="#services">Audit Services</a>
            <a href="#compliance">Compliance</a>
            <a href="mailto:audit@finguard.example.com" class="btn">Book Security Audit</a>
        </nav>
    </div>
</header>

<section class="hero">
    <div class="container hero-grid">

        <div>
            <h1>Bulletproof Security Audits for Indian Fintechs</h1>
            <p>
                Delivering rigorous audits for RBI, NPCI, CERT-In, DPDP, PCI-DSS, and SOC 2 compliance.
                Secure your APIs, cloud infrastructure, and payment systems with expert assessments.
            </p>

            <div class="hero-actions">
                <a href="mailto:audit@finguard.example.com" class="btn">Book Security Audit</a>
                <a href="#services" class="secondary-btn">See What We Audit</a>
            </div>

            <div class="trust-badges">
                <div class="badge">CERT-In Ready</div>
                <div class="badge">RBI Aligned</div>
                <div class="badge">OWASP Top 10</div>
                <div class="badge">ISO 27001</div>
            </div>
        </div>

        <div class="hero-card">
            <div class="metric">
                <strong>30+</strong>
                Security audits completed
            </div>
            <div class="metric">
                <strong>10+</strong>
                Fintech clients assessed
            </div>
            <div class="metric">
                <strong>99%</strong>
                Compliance readiness success
            </div>
        </div>

    </div>
</section>

<section class="section" id="services">
    <div class="container">
        <div class="section-title">
            <h2>What We Audit</h2>
            <p>Focused security audits designed for high-risk fintech environments.</p>
        </div>

        <div class="grid">
            <div class="card">
                <div class="card-icon"><i data-lucide="code-2"></i></div>
                <h3>Application & API VAPT</h3>
                <p>Comprehensive vulnerability assessments and penetration testing for mobile applications and APIs powering financial systems.</p>
            </div>

            <div class="card">
                <div class="card-icon"><i data-lucide="cloud"></i></div>
                <h3>Cloud Security Review</h3>
                <p>Security configuration audits across AWS, Azure, and GCP to identify exposure, privilege risks, and architecture flaws.</p>
            </div>

            <div class="card">
                <div class="card-icon"><i data-lucide="file-text"></i></div>
                <h3>RBI Compliance Audits</h3>
                <p>End-to-end audits aligned with RBI Master Directions for digital payments, IT governance, and operational security.</p>
            </div>
        </div>
    </div>
</section>

<section class="section" id="compliance">
    <div class="container">
        <div class="section-title">
            <h2>Regulatory Frameworks Covered</h2>
            <p>Mapped to the most critical fintech compliance mandates in India.</p>
        </div>

        <div class="compliance-grid">
            <div class="compliance">
                <strong>RBI / MD-ITB</strong>
                <span>IT governance and cybersecurity controls</span>
            </div>

            <div class="compliance">
                <strong>NPCI / UPI</strong>
                <span>UPI circulars, security mandates, and data localization</span>
            </div>

            <div class="compliance">
                <strong>CERT-In</strong>
                <span>6-hour incident reporting readiness and log retention</span>
            </div>

            <div class="compliance">
                <strong>DPDP Act 2023</strong>
                <span>Privacy architecture, consent workflows, and data governance</span>
            </div>

            <div class="compliance">
                <strong>PCI-DSS</strong>
                <span>Cardholder data protection and secure payment flow compliance</span>
            </div>

            <div class="compliance">
                <strong>SOC 2</strong>
                <span>Trust service controls for fintech infrastructure and operations</span>
            </div>
        </div>
    </div>
</section>

<section class="cta">
    <div class="container">
        <div class="cta-box">
            <h2>Get Audit-Ready Before Your Next Compliance Review</h2>
            <p>
                Whether you're launching UPI, lending, wallets, or payments infrastructure,
                we help you secure faster and stay compliant.
            </p>
            <a href="mailto:audit@finguard.example.com" class="btn">Request an Audit Consultation</a>
        </div>
    </div>
</section>

<footer>
    ©2026 NayakFin Audits. All rights reserved.
</footer>

<script>
lucide.createIcons();
</script>

</body>
</html>
