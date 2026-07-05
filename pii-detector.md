<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PII Detector API</title>

<style>
{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,Helvetica,sans-serif;
}

body{
    background:#f5f7fb;
    color:#333;
    line-height:1.6;
}

header{
    background:#0f172a;
    color:white;
    padding:18px 8%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

header h2{
    font-size:26px;
}

nav a{
    color:white;
    text-decoration:none;
    margin-left:25px;
}

.hero{
    padding:80px 8%;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    background:white;
}

.hero-left{
    max-width:600px;
}

.hero h1{
    font-size:48px;
    margin-bottom:20px;
}

.hero p{
    font-size:20px;
    color:#555;
    margin-bottom:30px;
}

.button{
    display:inline-block;
    background:#2563eb;
    color:white;
    padding:14px 28px;
    text-decoration:none;
    border-radius:8px;
    margin-right:15px;
}

.button.secondary{
    background:#e5e7eb;
    color:#111;
}

.hero-card{
    background:#0f172a;
    color:#fff;
    padding:25px;
    border-radius:10px;
    width:420px;
    overflow:auto;
}

section{
    padding:70px 8%;
}

.section-title{
    text-align:center;
    font-size:34px;
    margin-bottom:40px;
}

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
    gap:25px;
}

.card{
    background:white;
    padding:25px;
    border-radius:10px;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.card h3{
    margin-bottom:10px;
}

.entities{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    justify-content:center;
}

.badge{
    background:#2563eb;
    color:white;
    padding:10px 18px;
    border-radius:25px;
}

pre{
    background:#111827;
    color:#8ef7a5;
    padding:20px;
    border-radius:10px;
    overflow:auto;
}

.pricing{
    display:flex;
    flex-wrap:wrap;
    gap:25px;
    justify-content:center;
}

.price-card{
    background:white;
    width:300px;
    border-radius:12px;
    padding:35px;
    text-align:center;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.price{
    font-size:42px;
    margin:20px 0;
}

footer{
    background:#0f172a;
    color:white;
    text-align:center;
    padding:35px;
}

@media(max-width:900px){

.hero{
    text-align:center;
}

.hero-card{
    width:100%;
    margin-top:40px;
}

}
</style>

</head>
<body>

<header>

<h2>PII Detector API</h2>

<nav>
<a href="#features">Features</a>
<a href="#pricing">Pricing</a>
<a href="#docs">Docs</a>
</nav>

</header>

<section class="hero">

<div class="hero-left">

<h1>Detect & Redact Personal Information</h1>

<p>
A fast REST API for detecting personally identifiable information (PII),
including India-specific identifiers such as Aadhaar, PAN, GSTIN, UPI IDs,
phone numbers, emails, bank accounts, passports and more.
</p>

<a class="button" href="https://YOUR-HUGGINGFACE-SPACE">Try Demo</a>

<a class="button secondary" href="#">API Docs</a>

</div>

<div class="hero-card">

<pre>
POST /pii-check

{
  "text":
  "My PAN is ABCDE1234F.
   Email me at
   john@example.com"
}

↓

{
 "entities":[
   {
    "type":"PAN",
    "value":"ABCDE1234F"
   },
   {
    "type":"EMAIL",
    "value":"john@example.com"
   }
 ]
}
</pre>

</div>

</section>

<section id="features">

<h2 class="section-title">
Why Choose Our API?
</h2>

<div class="grid">

<div class="card">
<h3>Fast REST API</h3>
<p>Standard JSON API with low latency.</p>
</div>

<div class="card">
<h3>🇮🇳 India Focused</h3>
<p>Detect Aadhaar, PAN, GSTIN, UPI IDs and more.</p>
</div>

<div class="card">
<h3>🤖 AI Ready</h3>
<p>Redact PII before sending prompts to LLMs.</p>
</div>

<div class="card">
<h3>🔒 Privacy First</h3>
<p>Designed for compliance and secure applications.</p>
</div>

</div>

</section>

<section>

<h2 class="section-title">
Supported Entities
</h2>

<div class="entities">
<div class="badge">Name</div>
<div class="badge">Email</div>
<div class="badge">Phone</div>
<div class="badge">Aadhaar</div>
<div class="badge">PAN</div>
<div class="badge">Passport</div>
<div class="badge">GSTIN</div>
<div class="badge">IFSC</div>
<div class="badge">UPI ID</div>
<div class="badge">Bank Account</div>
<div class="badge">Credit Card</div>
</div>

</section>

<section id="docs">

<h2 class="section-title">
Example Request
</h2>

<pre>
	curl -X POST   "https://ashish-m-pii-detector.hf.space/pii-check"   -H "Content-Type: application/json"   -d '{"text":"my name is Ashish and reach me at +91-8800199037 and ashish@ybl"}'

"[{\"word\": \"ashish@ybl\", \"entity_group\": \"UPI\"}, {\"entity_group\": \"GIVENNAME\", \"score\": \"0.9991089\", \"word\": \"Ashish\"}, {\"entity_group\": \"TELEPHONENUM\", \"score\": \"0.99990034\", \"word\": \"+91-8800199037\"}]"ashish@ashish-HP-ProBook-440-G2:~/project_code/api-services$ curl -X POST   "https://ashish-m-pii-detector.hf.space/pii-check"   -H "Content-Type: application/json"   -d '{"text":"my name is Ashish and reach me at +91-8800199037 and ashish@yb^C}'

</pre>

</section>

<section id="pricing">

<h2 class="section-title">
Pricing
</h2>

<div class="pricing">

<div class="price-card">

<h3>Free</h3>

<div class="price">$0</div>

<p>1,000 requests/month</p>

<br>

<a class="button" href="#">
Get Started
</a>

</div>

<div class="price-card">

<h3>Developer</h3>

<div class="price">$19</div>

<p>100,000 requests/month</p>

<br>

<a class="button" href="#">
Subscribe
</a>

</div>

<div class="price-card">

<h3>Enterprise</h3>

<div class="price">Custom</div>

<p>Unlimited requests</p>

<br>

<a class="button" href="#">
Contact Sales
</a>

</div>

</div>

</section>

<footer>

<h2>PII Detector API</h2>

<p>
Protect customer data • Enable compliance • Secure AI applications
</p>

<br>

<p>
Demo:
https://YOUR-HUGGINGFACE-SPACE
</p>

<p>
API:
https://YOUR-API-ENDPOINT
</p>

</footer>

</body>
</html>
