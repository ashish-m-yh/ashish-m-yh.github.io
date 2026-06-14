
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PostgreSQL Database Consulting | Ashish Mukherjee</title>
    <style>
        :root {
            --bg-main: #f8fafc;
            --bg-card: #ffffff;
            --bg-accent-light: #f1f5f9;
            --text-dark: #0f172a;
            --text-muted: #475569;
            --text-light: #94a3b8;
            --primary: #1e293b;
            --secondary: #334155;
            --accent: #0284c7;
            --accent-hover: #38bdf8;
            --border-color: #e2e8f0;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg-main);
            color: var(--text-muted);
            line-height: 1.6;
            padding-bottom: 60px;
        }

        /* Hero Banner Style */
        header {
            background-color: var(--primary);
            color: #ffffff;
            padding: 60px 20px;
            text-align: center;
            border-bottom: 5px solid var(--accent);
        }

        .header-container {
            max-width: 900px;
            margin: 0 auto;
        }

        header h1 {
            font-size: 2.5rem;
            color: #f8fafc;
            line-height: 1.2;
            font-weight: 800;
            margin-bottom: 15px;
        }

        header p {
            font-size: 1.3rem;
            color: #cbd5e1;
            font-weight: 300;
            max-width: 750px;
            margin: 0 auto;
        }

        /* Main Grid & Content Constraints */
        .container {
            max-width: 940px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        .intro-box {
            font-size: 1.2rem;
            color: var(--secondary);
            background: #ffffff;
            padding: 25px;
            border-radius: 8px;
            border-left: 5px solid var(--accent);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            margin-bottom: 45px;
        }

        h2 {
            font-size: 1.6rem;
            color: var(--text-dark);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 25px;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 8px;
        }

        /* Specialties Section Grid */
        .grid-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        @media (max-width: 600px) {
            .grid-cards {
                grid-template-columns: 1fr;
            }
            header h1 {
                font-size: 1.8rem;
            }
        }

        .card {
            background: var(--bg-card);
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
            border: 1px solid var(--border-color);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }

        .card-title {
            font-weight: 700;
            color: #0369a1;
            font-size: 1.25rem;
            margin-bottom: 10px;
        }

        .card-desc {
            font-size: 1rem;
            color: var(--text-muted);
        }

        /* Focus Banner Row */
        .focus-banner {
            background-color: var(--secondary);
            color: #f8fafc;
            padding: 18px 25px;
            border-radius: 8px;
            margin-bottom: 45px;
            font-size: 1.15rem;
            text-align: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .focus-banner strong {
            color: var(--accent-hover);
        }

        /* Partnership Section Grid */
        .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 20px;
            margin-bottom: 50px;
        }

        @media (max-width: 600px) {
            .why-grid {
                grid-template-columns: 1fr;
            }
        }

        .why-card {
            background: var(--bg-accent-light);
            padding: 20px 25px;
            border-radius: 8px;
            border-left: 4px solid var(--text-light);
        }

        .why-title {
            font-weight: 700;
            color: var(--text-dark);
            font-size: 1.15rem;
            margin-bottom: 6px;
        }

        /* CTA & Footer Contact Widget */
        .cta-container {
            background-color: var(--text-dark);
            color: #ffffff;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .cta-header {
            text-align: center;
            margin-bottom: 35px;
        }

        .cta-title {
            font-size: 1.1rem;
            color: var(--text-light);
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 8px;
            font-weight: 700;
        }

        .cta-subtitle {
            font-size: 1.6rem;
            color: var(--accent-hover);
            font-weight: 700;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            border-top: 1px solid #334155;
            padding-top: 30px;
        }

        @media (max-width: 650px) {
            .contact-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
        }

        .contact-item {
            display: flex;
            flex-direction: column;
        }

        .contact-label {
            font-size: 0.85rem;
            color: var(--text-light);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }

        .contact-value {
            font-size: 1.1rem;
            color: #f1f5f9;
        }

        .contact-value a {
            color: var(--accent-hover);
            text-decoration: none;
            transition: color 0.15s;
        }

        .contact-value a:hover {
            color: #ffffff;
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <header>
        <div class="header-container">
            <h1>Is Your PostgreSQL Database Keeping You Up at Night?</h1>
            <p>Slow queries? Downtime risks? Scaling pains? I fix Postgres so you can build your business.</p>
        </div>
    </header>

    <main class="container">
        <div class="intro-box">
            I specialize in tuning, securing, and scaling PostgreSQL databases for high-growth startups and enterprise architectures. Whether you run on-premise, AWS RDS, GCP Cloud SQL, or Azure, I ensure peak operational health.
        </div>

        <h2>My Core Specialties</h2>
        <div class="grid-cards">
            <div class="card">
                <div class="card-title">Performance Tuning</div>
                <p class="card-desc">Eliminate performance bottlenecks, optimize slow queries, and precisely configure postgresql.conf for maximum hardware utilization.</p>
            </div>
            <div class="card">
                <div class="card-title">High Availability</div>
                <p class="card-desc">Design robust replication models, seamless automated failover clustering, and foolproof write-ahead log (WAL) backup/restore strategies.</p>
            </div>
            <div class="card">
                <div class="card-title">Migrations & Upgrades</div>
                <p class="card-desc">Execute seamless, near-zero-downtime upgrades to modern Postgres versions or smooth structural transitions from legacy Oracle or MySQL.</p>
            </div>
            <div class="card">
                <div class="card-title">Security & Auditing</div>
                <p class="card-desc">Identify hidden indexing gaps, resolve connection pooling constraints (PgBouncer), and secure access controls before production impacts.</p>
            </div>
        </div>

        <div class="focus-banner">
            <strong>100% Postgres Focused:</strong> I do not generalize. I live and breathe PostgreSQL architecture daily.
        </div>

        <h2>Why Partner With Me?</h2>
        <div class="why-grid">
            <div class="why-card">
                <div class="why-title">Proven Track Record</div>
                <p class="card-desc">Trusted by heavily data-driven engineering and architecture squads globally.</p>
            </div>
            <div class="why-card">
                <div class="why-title">Direct Expert Access</div>
                <p class="card-desc">You get direct, uncompromised access to a veteran engineer—no account managers or junior hand-offs.</p>
            </div>
        </div>

        <section class="cta-container">
            <div class="cta-header">
                <div class="cta-title">Don't Wait For A Critical Production Crash</div>
                <div class="cta-subtitle">Get a Free 30-Minute Deep-Dive Database Assessment</div>
            </div>
            
            <div class="contact-grid">
                <div class="contact-item">
                    <span class="contact-label">Explore My GitHub Tools</span>
                    <span class="contact-value"><a href="https://github.com/ashish-m-yh/pgsql-tools" target="_blank" rel="noopener">https://github.com/ashish-m-yh/pgsql-tools</a></span>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Connect On LinkedIn</span>
                    <span class="contact-value"><a href="https://www.linkedin.com/in/ashishindia/" target="_blank" rel="noopener">https://www.linkedin.com/in/ashishindia/</a></span>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Email Me Directly</span>
                    <span class="contact-value"><a href="mailto:ashishmukherjee@gmail.com">ashishmukherjee@gmail.com</a></span>
                </div>
                <div class="contact-item">
                    <span class="contact-label">WhatsApp</span>
                    <span class="contact-value">+91-8800199037</span>
                </div>
            </div>
        </section>
    </main>
</body>
</html>
