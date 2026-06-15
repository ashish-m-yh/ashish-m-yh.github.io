
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PgSQL Consulting | Expert PostgreSQL Solutions</title>
    <style>
        /* --- RESET & BASE STYLES --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* --- HEADER & NAVIGATION --- */
        header {
            background-color: #002244; /* PgSQL Dark Blue */
            color: #fff;
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        /* Flexbox for Navbar alignment on PC */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #336791; /* PgSQL Light Blue */
            text-decoration: none;
        }
        .logo span { color: #fff; }

        .nav-links {
            list-style: none;
            display: flex;
            gap: 20px;
        }

        .nav-links a {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #336791;
        }

        /* --- HERO SECTION --- */
        .hero {
            background: linear-gradient(135deg, #002244 0%, #336791 100%);
            color: #fff;
            padding: 80px 0;
            text-align: center;
        }

        .hero h1 {
            font-size: 2.8rem;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
            opacity: 0.9;
        }

        .btn {
            display: inline-block;
            background-color: #ff6f61;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background 0.3s;
        }

        .btn:hover {
            background-color: #e65c50;
        }

        /* --- SERVICES SECTION (CSS GRID) --- */
        .services {
            padding: 60px 0;
        }

        .section-title {
            text-align: center;
            margin-bottom: 40px;
            font-size: 2rem;
            color: #002244;
        }

        /* CSS Grid automatically creates columns on desktop */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .service-card {
            background: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            text-align: center;
            border-top: 4px solid #336791;
        }

        .service-card h3 {
            margin-bottom: 15px;
            color: #002244;
        }

        /* --- FOOTER --- */
        footer {
            background-color: #111;
            color: #ccc;
            text-align: center;
            padding: 20px 0;
            margin-top: 40px;
            font-size: 14px;
        }


        /* ==========================================================================
           MEDIA QUERIES: This handles the responsiveness for Tablets and Mobile
           ========================================================================== */
        
        /* For screens 768px wide or less (Mobile/Tablets) */
        @media screen and (max-width: 768px) {
            
            /* Stack navbar items vertically */
            .navbar {
                flex-direction: column;
                gap: 15px;
            }

            .nav-links {
                width: 100%;
                justify-content: center;
                flex-wrap: wrap; /* Allows wrap if links are too many */
                gap: 15px;
            }

            /* Adjust text scaling so it doesn't overflow mobile screens */
            .hero h1 {
                font-size: 2rem;
            }

            .hero p {
                font-size: 1rem;
            }

            .section-title {
                font-size: 1.6rem;
            }
        }

        /* For ultra-small screens (under 480px) */
        @media screen and (max-width: 480px) {
            .nav-links {
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }
            
            .hero {
                padding: 50px 0;
            }
            
            .btn {
                width: 100%; /* Make the button full-width on tiny screens */
                text-align: center;
            }
        }
    </style>
</head>
<body>

    <header>
        <div class="container navbar">
            <a href="#" class="logo">PgSQL<span>Consulting</span></a>
            <ul class="nav-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Expert PostgreSQL Performance & Scaling</h1>
            <p>We optimize your databases, eliminate bottlenecks, and ensure 24/7 high availability for enterprise PostgreSQL clusters.</p>
            <a href="#contact" class="btn">Get a Free Audit</a>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Our Consulting Services</h2>
            <div class="services-grid">
                
                <div class="service-card">
                    <h3>Performance Tuning</h3>
                    <p>Optimizing slow queries, memory parameters, indexing strategies, and autovacuum configurations.</p>
                </div>

                <div class="service-card">
                    <h3>High Availability</h3>
                    <p>Designing seamless failover and replication architectures using Patroni, pgBackRest, and PgBouncer.</p>
                </div>

                <div class="service-card">
                    <h3>Cloud Migrations</h3>
                    <p>Safely migrating on-premise infrastructure to AWS RDS, Aurora, Azure PostgreSQL, or GCP Cloud SQL.</p>
                </div>

            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2026 PgSQL Consulting. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>
