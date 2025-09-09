

import React, { useEffect, useRef } from "react";

const AboutUsRajlakshmi = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const els = countersRef.current;
    if (!els) return;

    const animate = (el) => {
      const target = parseInt(el.getAttribute("data-to"), 10);
      const duration = parseInt(el.getAttribute("data-duration"), 10) || 2000;
      const start = 0;
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(start + (target - start) * progress);
        el.textContent = value.toLocaleString("en-IN");
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    els.forEach((el) => el && io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <main className="aboutus">
      <style>{css}</style>

      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="eyebrow">We Make Your Dream True</p>
          <h1 className="headline">About Infinity</h1>
          <p className="subtext">
          A reliable name in real estate, recognized for quality, innovation, and a strong commitment to delivering exceptional experiences across both residential and commercial properties.
          </p>
        </div>
        <svg className="hero__shape" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 L1440,0 L1440,120 Z" />
        </svg>
      </section>

      {/* At a Glance */}
      <section className="glance container">
        <div className="glance__grid">
          <div className="glance__text">
            <h2 className="section-title">Infinity at a Glance</h2>
            <p>
            Infinity Realty consistently delivers outstanding properties with clear processes and comprehensive support. Our portfolio includes premium residential spaces and innovative commercial properties, designed to enhance lifestyles and drive business success. We uphold the highest standards through integrity, timely delivery, and thoughtful design.
            </p>
            <ul className="bullets">
              <li>Customer-focused approach with complete transparency</li>
              <li>Design excellence with smart, future-ready planning</li>
              <li>Reliable delivery supported by strong partnerships</li>
            </ul>
          </div>

          <div className="glance__media">
            <div className="logo-card" aria-label="Company Logo">
              <img
                src="/Images/infinity.jpg"
                alt="Infinity Logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements / Counters */}
      <section className="stats">
        <div className="container">
          <h2 className="section-title center">Our Achievements</h2>
          <div className="stats__grid">
            <StatCard
              label="Cr. Worth Properties Sold"
              to={1000}
              duration={2000}
              countersRef={countersRef}
            />
            <StatCard
              label="Happy Customers"
              to={1000}
              prefix="+"
              duration={2000}
              countersRef={countersRef}
            />
            <StatCard label="Developers" to={20} prefix="+" duration={1600} countersRef={countersRef} />
            <StatCard label="Projects" to={50} prefix="+" duration={1600} countersRef={countersRef} />
            <StatCard label="Offices in India" to={5} prefix="+" duration={1400} countersRef={countersRef} />
          </div>
        </div>
      </section>

      {/* Visionaries / Team */}
      <section className="team container">
        <header className="team__header">
          <h2 className="section-titles">The Visionaries</h2>
          <p className="subtext center">
            Kingpins of the real‑estate industry and luminaries for rising young talent.
          </p>
        </header>

        <div className="team__grid">
          <TeamCard
 name="Mr. Misra"
            role="Chief Human Resources Officer"
            img="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop"

           
          />
          <TeamCard
            name="Varun Singhal"
            role="Chief Financial Officer"
            img="https://images.unsplash.com/photo-1546527868-ccb7ee67eabf?q=80&w=800&auto=format&fit=crop"
          />
          <TeamCard
            name="Rajesh Kumar"
            role="Chief Executive Officer"
            img="https://images.unsplash.com/photo-1603415526960-f7e0328d13d1?q=80&w=800&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__box">
          <div>
            <h3 className="cta__title">Looking for your next address?</h3>
            <p className="cta__text">Talk to our advisors and explore curated projects that fit your goals.</p>
          </div>
          <a className="btn" href="/Contact" aria-label="Contact us">
            Contact Us
          </a>
        </div>
      </section>

    
    </main>
  );
};

const StatCard = ({ label, to, duration = 2000, prefix = "", countersRef }) => (
  <article className="stat">
    <div className="stat__value-wrap">
      {prefix && <span className="stat__prefix" aria-hidden> {prefix} </span>}
      <span
        ref={(el) => countersRef.current.push(el)}
        className="stat__value"
        data-to={to}
        data-duration={duration}
        aria-label={`${to} ${label}`}
      >
        0
      </span>
    </div>
    <p className="stat__label">{label}</p>
  </article>
);

const TeamCard = ({ name, role, img }) => (
  <article className="teamcard">
    <div className="teamcard__media">
      <img src={img} alt={`${name} — ${role}`} loading="lazy" />
    </div>
    <div className="teamcard__body">
      <h3 className="teamcard__name">{name}</h3>
      <p className="teamcard__role">{role}</p>
      <div className="teamcard__meta">
        <Badge>Leadership</Badge>
        <Badge>Strategy</Badge>
        <Badge>Growth</Badge>
      </div>
    </div>
  </article>
);

const Badge = ({ children }) => <span className="badge">{children}</span>;

export default AboutUsRajlakshmi;

// =====================================================
// ✅ CSS (inline for preview). Copy to aboutus.css if needed.
// =====================================================
const css = `
:root{
  --bg:#D1F8EF;         
  --card:#121a2b;        
  --ink:#f6f7fb;         
  --muted:#c8cfda;       
  --brand:#4cc9f0;      
  --brand-2:#a8dadc;     
  --ring: rgba(76, 201, 240, .35);
  --max:1200px;
  --radius:20px;
  --shadow:0 10px 30px rgba(0,0,0,.35);
}
*{box-sizing:border-box}
html,body,#root{height:100%}
body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial}

.container{max-width:var(--max);margin:0 auto;padding:0 20px}
.center{text-align:center}
.eyebrow{letter-spacing:.12em;text-transform:uppercase;color:var(--brand-2);font-weight:600}
.section-title{font-size:clamp(1.4rem, 1.2rem + 1vw, 2rem);margin:0 0 14px;}
.section-titles{font-size:2rem;margin:0 25rem 14px; color:white; font-weight:700}

.subtext{color:white; font-size:1.3rem}
.btn{display:inline-flex;align-items:center;gap:.6rem;padding:.85rem 1.1rem;border-radius:999px;background:var(--brand);color:#081018;text-decoration:none;font-weight:700;box-shadow:0 6px 16px rgba(76,201,240,.25);transition:.2s transform ease, .2s box-shadow ease}
.btn:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(76,201,240,.35)}

/* Hero */
.hero{position:relative;min-height:64vh;display:grid;place-items:center;background:radial-gradient(1200px 500px at 70% 10%, rgba(76,201,240,.15), transparent 60%),
linear-gradient(180deg, #0b1020 0%, #0d1321 100%)}
.hero__overlay{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;opacity:.15;mix-blend:screen}
.hero__content{position:relative;z-index:1;text-align:center}
.headline{font-size:clamp(2rem, 1.6rem + 2.4vw, 3.4rem);margin:.4rem 0 0}
.hero .subtext{max-width:720px;margin:10px auto 0}
.hero__shape{position:absolute;bottom:-1px;left:0;width:100%;height:80px;fill:#00628c;opacity:.9}

/* Glance */
.glance{padding:64px 0}
.glance__grid{display:grid;grid-template-columns:1.15fr .85fr;gap:32px;align-items:center}
.glance__text p{line-height:1.75; color: Black; font-size:1.2rem;}
.bullets{margin:18px 0 0;padding:0 0 0 20px;color:Black; font-size:1.1rem}
.bullets li{margin:.35rem 0}

.glance__media{display:grid}
.logo-card{background:linear-gradient(135deg, rgba(76,201,240,.16), rgba(168,218,220,.1));padding:20px;border-radius:var(--radius);box-shadow:var(--shadow);outline:1px solid rgba(255,255,255,.06)}
.logo-card img{width:100%;height:100%;aspect-ratio:16/9;object-fit:contain;filter:drop-shadow(0 6px 14px rgba(0,0,0,.25))}

/* Stats */
.stats{padding:28px 0 64px;background:#D1F8EF;}
.stats__grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:22px}
.stat{background:var(--card);padding:20px;border-radius:16px;text-align:center;box-shadow:var(--shadow);outline:1px solid rgba(255,255,255,.05);transition:transform .2s ease}
.stat:hover{transform:translateY(-3px)}
.stat__value-wrap{display:flex;justify-content:center;align-items:baseline;gap:.25rem;font-weight:800;font-size:clamp(1.4rem, 1rem + 2.5vw, 2.6rem)}
.stat__prefix{color:var(--brand);font-weight:900}
.stat__label{margin:.35rem 0 0;color:var(--muted)}

/* Team */
.team{padding:64px 0}
.team__header{margin-bottom:24px}
.team__grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:20px}
.teamcard{background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));border-radius:18px;overflow:hidden;outline:1px solid rgba(255,255,255,.06);box-shadow:var(--shadow);display:flex;flex-direction:column;transition:transform .25s ease, box-shadow .25s ease}
.teamcard:hover{transform:translateY(-4px);box-shadow:0 16px 36px rgba(0,0,0,.45)}
.teamcard__media{width:100%;aspect-ratio:3/2;overflow:hidden}
.teamcard__media img{width:100%;height:100%;object-fit:cover;transform:scale(1.02);transition:transform .5s ease}
.teamcard:hover .teamcard__media img{transform:scale(1.08)}
.teamcard__body{padding:16px}
.teamcard__name{margin:0 0 4px;font-size:1.15rem; color:Black}
.teamcard__role{margin:0;color:Black; font-size:1.5rem}
.teamcard__meta{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.badge{display:inline-block;padding:.35rem .6rem;border-radius:999px;font-size:.8rem;background:rgba(76,201,240,.12);color:Black;border:1px solid var(--ring)}

/* CTA */
.cta{padding:16px 0 80px}
.cta__box{display:flex;align-items:center;justify-content:space-between;gap:20px;background:linear-gradient(135deg, #00628c, rgba(168,218,220,.12));border:1px solid rgba(76,201,240,.25);box-shadow:var(--shadow);border-radius:24px;padding:22px}
.cta__title{margin:0 0 6px; font-size:1.3rem}
.cta__text{margin:0;color:var(--muted)}

/* Footer note */
.foot{padding:30px 0 60px;color:var(--muted);text-align:center}

/* Responsive */
@media (max-width: 1100px){
  .stats__grid{grid-template-columns:repeat(3,1fr)}
}
@media (max-width: 900px){
  .glance__grid{grid-template-columns:1fr;gap:20px}
  .team__grid{grid-template-columns:repeat(2,1fr)}
}
@media (max-width: 560px){
  .stats__grid{grid-template-columns:repeat(2,1fr)}
  .team__grid{grid-template-columns:1fr}
  .cta__box{flex-direction:column;align-items:flex-start}
}
`;

/* =====================================================
   If you want a separate CSS file, create `aboutus.css` with the
   same content as `css` above and import it in your component file:

   import './aboutus.css'

   Then remove the <style>{css}</style> line in the component.
   ===================================================== */
