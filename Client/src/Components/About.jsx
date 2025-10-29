

// import React, { useEffect, useRef } from "react";

// const AboutUsRajlakshmi = () => {
//   const countersRef = useRef([]);

//   useEffect(() => {
//     const els = countersRef.current;
//     if (!els) return;

//     const animate = (el) => {
//       const target = parseInt(el.getAttribute("data-to"), 10);
//       const duration = parseInt(el.getAttribute("data-duration"), 10) || 2000;
//       const start = 0;
//       const startTime = performance.now();

//       const step = (now) => {
//         const progress = Math.min((now - startTime) / duration, 1);
//         const value = Math.floor(start + (target - start) * progress);
//         el.textContent = value.toLocaleString("en-IN");
//         if (progress < 1) requestAnimationFrame(step);
//       };

//       requestAnimationFrame(step);
//     };

//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             animate(entry.target);
//             io.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     els.forEach((el) => el && io.observe(el));

//     return () => io.disconnect();
//   }, []);

//   return (
//     <main className="aboutus">
//       <style>{css}</style>

//       {/* Hero */}
//       <section className="hero">
//         <div className="hero__overlay" />
//         <div className="container hero__content">
//           <p className="eyebrow">We Make Your Dream True</p>
//           <h1 className="headline">About Infinity</h1>
//           <p className="subtext">
//           A reliable name in real estate, recognized for quality, innovation, and a strong commitment to delivering exceptional experiences across both residential and commercial properties.
//           </p>
//         </div>
//         <svg className="hero__shape" viewBox="0 0 1440 120" preserveAspectRatio="none">
//           <path d="M0,120 L1440,0 L1440,120 Z" />
//         </svg>
//       </section>

//       {/* At a Glance */}
//       <section className="glance container">
//         <div className="glance__grid">
//           <div className="glance__text">
//             <h2 className="section-title">About Us – Infinity Real Estate</h2>
//             <p>
//            Welcome to Infinity Real Estate, your trusted partner in property solutions across Noida and Delhi NCR.
// We specialize in helping individuals, families, and businesses find the perfect property – whether it’s a dream home, a profitable investment, or a strategic commercial space.
// Our forte lies in primary bookings of residential apartments and commercial properties like office spaces and retail shops. Along with new project launches, we also assist clients with resale properties, including ready-to-move-in flats and offices, ensuring a seamless and secure transaction.
// At Infinity Real Estate, we believe in transparency, commitment, and client-first approach. With deep knowledge of the local market and strong relationships with developers, we make the buying process simple, clear, and rewarding for our clients.
// Our goal is not just to sell properties, but to build lasting trust and provide solutions that match your lifestyle, budget, and aspirations.
//             </p>
//           </div>

//           <div className="glance__media">
//             <div className="logo-card" aria-label="Company Logo">
//               <img
//                 src="/Images/infinity.jpg"
//                 alt="Infinity Logo"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//       </section>





//       {/* Achievements / Counters */}
//       <section className="stats">
//         <div className="container">
//           <h2 className="section-title center">Our Achievements</h2>
//           <div className="stats__grid">
//             <StatCard
//               label="Cr. Worth Properties Sold"
//               to={1000}
//               duration={2000}
//               countersRef={countersRef}
//             />
//             <StatCard
//               label="Happy Customers"
//               to={1000}
//               prefix="+"
//               duration={2000}
//               countersRef={countersRef}
//             />
//             <StatCard label="Developers" to={20} prefix="+" duration={1600} countersRef={countersRef} />
//             <StatCard label="Projects" to={50} prefix="+" duration={1600} countersRef={countersRef} />
//             <StatCard label="Offices in India" to={5} prefix="+" duration={1400} countersRef={countersRef} />
//           </div>
//         </div>
//       </section>

//       {/* Visionaries / Team */}
//       <section className="team container">
//         <header className="team__header">
//           <h2 className="section-titles">The Visionaries</h2>
//           <p className="subtext center">
//             Kingpins of the real‑estate industry and luminaries for rising young talent.
//           </p>
//         </header>

//         <div className="team__grid">
//           <TeamCard
//  name="Mr. Misra"
//             role="Chief Human Resources Officer"
//             img="/Images/ChifHuman.jpg"

           
//           />
//           <TeamCard
//             name="Varun Singhal"
//             role="Chief Financial Officer"
//             img="/Images/ChiefFinancial.jpg"
//           />
//           <TeamCard
//             name="Rajesh Kumar"
//             role="Chief Executive Officer"
//             img="/Images/ChiefExecutive.jpg"
//           />
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="cta">
//         <div className="container cta__box">
//           <div>
//             <h3 className="cta__title">Looking for your next address?</h3>
//             <p className="cta__text">Talk to our advisors and explore curated projects that fit your goals.</p>
//           </div>
//           <a className="btn" href="/Contact" aria-label="Contact us">
//             Contact Us
//           </a>
//         </div>
//       </section>

    
//     </main>
//   );
// };

// const StatCard = ({ label, to, duration = 2000, prefix = "", countersRef }) => (
//   <article className="stat">
//     <div className="stat__value-wrap">
//       {prefix && <span className="stat__prefix" aria-hidden> {prefix} </span>}
//       <span
//         ref={(el) => countersRef.current.push(el)}
//         className="stat__value"
//         data-to={to}
//         data-duration={duration}
//         aria-label={`${to} ${label}`}
//       >
//         0
//       </span>
//     </div>
//     <p className="stat__label">{label}</p>
//   </article>
// );

// const TeamCard = ({ name, role, img }) => (
//   <article className="teamcard">
//     <div className="teamcard__media">
//       <img src={img} alt={`${name} — ${role}`} loading="lazy" />
//     </div>
//     <div className="teamcard__body">
//       <h3 className="teamcard__name">{name}</h3>
//       <p className="teamcard__role">{role}</p>
//       <div className="teamcard__meta">
//         <Badge>Leadership</Badge>
//         <Badge>Strategy</Badge>
//         <Badge>Growth</Badge>
//       </div>
//     </div>
//   </article>
// );

// const Badge = ({ children }) => <span className="badge">{children}</span>;

// export default AboutUsRajlakshmi;


// const css = `
// :root{
//   --bg:#D1F8EF;         
//   --card:#121a2b;        
//   --ink:#f6f7fb;         
//   --muted:#c8cfda;       
//   --brand:#4cc9f0;      
//   --brand-2:#a8dadc;     
//   --ring: rgba(76, 201, 240, .35);
//   --max:1200px;
//   --radius:20px;
//   --shadow:0 10px 30px rgba(0,0,0,.35);
// }
// *{box-sizing:border-box}
// html,body,#root{height:100%}
// body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial}

// .container{max-width:var(--max);margin:0 auto;padding:0 20px}
// .center{text-align:center}
// .eyebrow{letter-spacing:.12em;text-transform:uppercase;color:var(--brand-2);font-weight:600}
// .section-title{font-size:clamp(1.4rem, 1.2rem + 1vw, 2rem);margin:0 0 14px; color; #2c3e50;}
// .section-titles{font-size:2rem;margin:0 25rem 14px; color:white; font-weight:700}

// .subtext{color:white; font-size:1.3rem}
// .btn{display:inline-flex;align-items:center;gap:.6rem;padding:.85rem 1.1rem;border-radius:999px;background:rgb(212, 175, 55);color:white;text-decoration:none;font-weight:700;box-shadow:0 6px 16px rgba(76,201,240,.25);transition:.2s transform ease, .2s box-shadow ease}
// .btn:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(76,201,240,.35)}

// /* Hero */
// .hero{position:relative;min-height:64vh;display:grid;place-items:center;background:radial-gradient(1200px 500px at 70% 10%, rgba(76,201,240,.15), transparent 60%),
// linear-gradient(180deg, #0b1020 0%, #0d1321 100%)}
// .hero__overlay{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;opacity:.15;mix-blend:screen}
// .hero__content{position:relative;z-index:1;text-align:center}
// .headline{font-size:clamp(2rem, 1.6rem + 2.4vw, 3.4rem);margin:.4rem 0 0}
// .hero .subtext{max-width:720px;margin:10px auto 0}
// .hero__shape{position:absolute;bottom:-1px;left:0;width:100%;height:80px;fill:#00628c;opacity:.9}

// /* Glance */
// .glance{padding:64px 0}
// .glance__grid{display:grid;grid-template-columns:1.15fr .85fr;gap:32px;align-items:center}
// .glance__text p{line-height:1.75; color: Black; font-size:1.2rem; text-align: justify;}
// .bullets{margin:18px 0 0;padding:0 0 0 20px;color:Black; font-size:1.1rem}
// .bullets li{margin:.35rem 0}

// .glance__media{display:grid}
// .logo-card{background:linear-gradient(135deg, rgba(76,201,240,.16), rgba(168,218,220,.1));padding:20px;border-radius:var(--radius);box-shadow:var(--shadow);outline:1px solid rgba(255,255,255,.06)}
// .logo-card img{width:100%;height:100%;aspect-ratio:16/9;object-fit:contain;filter:drop-shadow(0 6px 14px rgba(0,0,0,.25))}

// /* Stats */
// .stats{padding:28px 0 64px;background:#D1F8EF;}
// .stats__grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:22px}
// .stat{background:var(--card);padding:20px;border-radius:16px;text-align:center;box-shadow:var(--shadow);outline:1px solid rgba(255,255,255,.05);transition:transform .2s ease}
// .stat:hover{transform:translateY(-3px)}
// .stat__value-wrap{display:flex;justify-content:center;align-items:baseline;gap:.25rem;font-weight:800;font-size:clamp(1.4rem, 1rem + 2.5vw, 2.6rem)}
// .stat__prefix{color:var(--brand);font-weight:900}
// .stat__label{margin:.35rem 0 0;color:var(--muted)}

// /* Team */
// .team{padding:64px 0}
// .team__header{margin-bottom:24px}
// .team__grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:20px}
// .teamcard{background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));border-radius:18px;overflow:hidden;outline:1px solid rgba(255,255,255,.06);box-shadow:var(--shadow);display:flex;flex-direction:column;transition:transform .25s ease, box-shadow .25s ease}
// .teamcard:hover{transform:translateY(-4px);box-shadow:0 16px 36px rgba(0,0,0,.45)}
// .teamcard__media{width:100%;aspect-ratio:3/2;overflow:hidden}
// .teamcard__media img{width:100%;height:100%;object-fit:cover;transform:scale(1.02);transition:transform .5s ease}
// .teamcard:hover .teamcard__media img{transform:scale(1.08)}
// .teamcard__body{padding:16px}
// .teamcard__name{margin:0 0 4px;font-size:1.15rem; color:Black}
// .teamcard__role{margin:0;color:Black; font-size:1.5rem}
// .teamcard__meta{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
// .badge{display:inline-block;padding:.35rem .6rem;border-radius:999px;font-size:.8rem;background:rgba(76,201,240,.12);color:Black;border:1px solid var(--ring)}

// /* CTA */
// .cta{padding:16px 0 80px}
// .cta__box{display:flex;align-items:center;justify-content:space-between;gap:20px;background:linear-gradient(135deg, #00628c, rgba(168,218,220,.12));border:1px solid rgba(76,201,240,.25);box-shadow:var(--shadow);border-radius:24px;padding:22px}
// .cta__title{margin:0 0 6px; font-size:1.3rem}
// .cta__text{margin:0;color:var(--muted)}

// /* Footer note */
// .foot{padding:30px 0 60px;color:var(--muted);text-align:center}

// /* Responsive */
// @media (max-width: 1100px){
//   .stats__grid{grid-template-columns:repeat(3,1fr)}
// }
// @media (max-width: 900px){
//   .glance__grid{grid-template-columns:1fr;gap:20px}
//   .team__grid{grid-template-columns:repeat(2,1fr)}
//   .hero__shape{
//   width: 20rem;
//   }
//   .section-titles{
//       margin: 0 10rem 14px;
//   }
//       .hero__content {
//     position: relative;
//     z-index: 1;
//     text-align: center;
//     margin-top: 8rem;
// }
//     .glance__text{
//    padding-left:20px;
//     }

// }
// @media (max-width: 560px){
//   .stats__grid{grid-template-columns:repeat(2,1fr)}
//   .team__grid{grid-template-columns:1fr}
//   .cta__box{flex-direction:column;align-items:flex-start}
// }
// `;





import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const combineStyles = (...styles) => Object.assign({}, ...styles);
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



    useEffect(() => {
        const els = countersRef.current.filter(el => el); // Filter out null elements
        if (els.length === 0) return;

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

        els.forEach((el) => io.observe(el));

        return () => io.disconnect();
    }, []);

    const services = [
        {
            id: 1,
            title: "Residential Properties",
            icon: (
                <svg style={styles.cardIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            items: [
                "Primary bookings in leading residential projects",
                "Assistance with under-construction & upcoming projects",
                "Resale and ready-to-move-in flats in premium societies",
                "End-to-end support in documentation & home loan guidance"
            ],
            borderColor: 'rgb(212, 175, 55)',
            iconColor: 'rgb(212, 175, 55)'
        },
        {
            id: 2,
            title: "Commercial Properties",
            icon: (
                 <svg style={styles.cardIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M9 3h6a2 2 0 012 2v16a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z" />
                </svg>
            ),
            items: [
                "Office space bookings in prime business hubs",
                "Retail shop investments in high-footfall locations",
                "Co-working and flexible workspace solutions",
                "Advisory for investors seeking rental income properties"
            ],
            borderColor: '#00628c',
            iconColor: '#00628c'
        },
        {
            id: 3,
            title: "Resale & Ready-to-Move",
            icon: (
                <svg style={styles.cardIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 016-6h4a6 6 0 016 6z" />
                </svg>
            ),
            items: [
                "Verified resale options for both homes & offices",
                "Ready-to-move flats in established societies",
                "Quick transaction support with legal/financial guidance"
            ],
            borderColor: 'rgb(212, 175, 55)',
            iconColor: 'rgb(212, 175, 55)'
        },
        {
            id: 4,
            title: "Client Support & Advisory",
            icon: (
                <svg style={styles.cardIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            items: [
                "Property market insights & investment advisory",
                "Guidance on property documentation & compliance",
                "Personalized recommendations based on client needs",
                "Transparent deal management from start to finish"
            ],
            borderColor: '#00628c',
            iconColor: '#00628c'
        }
    ];


const handleFooterLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <h2 className="section-title">About Us – Infinity Real Estate</h2>
            <p>
           Welcome to Infinity Real Estate, your trusted partner in property solutions across Noida and Delhi NCR.
We specialize in helping individuals, families, and businesses find the perfect property – whether it's a dream home, a profitable investment, or a strategic commercial space.
Our forte lies in primary bookings of residential apartments and commercial properties like office spaces and retail shops. Along with new project launches, we also assist clients with resale properties, including ready-to-move-in flats and offices, ensuring a seamless and secure transaction.
At Infinity Real Estate, we believe in transparency, commitment, and client-first approach. With deep knowledge of the local market and strong relationships with developers, we make the buying process simple, clear, and rewarding for our clients.
Our goal is not just to sell properties, but to build lasting trust and provide solutions that match your lifestyle, budget, and aspirations.
            </p>
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





  <main className="aboutus">
          
            <section style={styles.servicesSection}>
                <div className="container">
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>Our Services</h2>
                        <p style={styles.sectionSubtitle}>
                            We offer a complete suite of real estate services to meet all your property needs.
                        </p>
                        <div style={styles.divider}></div>
                    </div>

                    <div style={styles.servicesGrid}>
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

        </main>



    

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
            img="/Images/ChifHuman.jpg"
          />
          <TeamCard
            name="Varun Singhal"
            role="Chief Financial Officer"
            img="/Images/ChiefFinancial.jpg"
          />
          <TeamCard
            name="Rajesh Kumar"
            role="Chief Executive Officer"
            img="/Images/ChiefExecutive.jpg"
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
          <Link className="btn" to="/Contact" onClick={handleFooterLinkClick} aria-label="Contact us">
            Contact Us
          </Link>
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
const ServiceCard = ({ service }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = isHovered 
        ? combineStyles(styles.serviceCard, styles.serviceCardHover, { borderLeftColor: service.borderColor })
        : combineStyles(styles.serviceCard, { borderLeftColor: service.borderColor });

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.cardContent}>
                <div style={styles.cardHeader}>
                    <div style={{...styles.iconContainer, color: service.iconColor }}>
                        {service.icon}
                    </div>
                    <h3 style={styles.cardTitle}>{service.title}</h3>
                </div>
                <ul style={styles.serviceList}>
                    {service.items.map((item, index) => (
                        <li key={index} style={styles.serviceListItem}>
                            <span style={{...styles.checkmark, color: service.iconColor }}>&#10003;</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};



export default AboutUsRajlakshmi;

// CSS में services section के लिए classes add करें
const css = `
/* Services Section CSS - ADD THESE STYLES */
.services-section {
  padding: 3rem 0;
  background: #D1F8EF;
}

@media (min-width: 768px) {
  .services-section {
    padding: 5rem 0;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .section-header {
    margin-bottom: 4rem;
  }
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937 !important;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.25rem;
  }
}

.section-subtitle {
  margin-top: 0.75rem;
  font-size: 1.125rem;
  color: #131313ff !important;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

.divider {
  margin-top: 1rem;
  width: 6rem;
  height: 0.25rem;
  background-color: #6366f1;
  margin-left: auto;
  margin-right: auto;
  border-radius: 9999px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.service-card {
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-left-width: 4px;
  transition: all 0.3s ease-in-out;
}

.service-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-0.25rem);
}

.card-content {
  padding: 2rem;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.icon-container {
  flex-shrink: 0;
}

.card-icon {
  width: 2.5rem;
  height: 2.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937 !important;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.service-list-item {
  display: flex;
  align-items: flex-start;
  color: #4b5563 !important;
  font-size: 1rem;
  line-height: 1.5;
}

.checkmark {
  font-weight: 700;
  margin-right: 0.75rem;
  margin-top: 0.25rem;
}

.border-indigo { border-color: #6366f1; }
.icon-indigo { color: #6366f1; }
.checkmark-indigo { color: #6366f1; }

.border-blue { border-color: #3b82f6; }
.icon-blue { color: #3b82f6; }
.checkmark-blue { color: #3b82f6; }

.border-green { border-color: #22c55e; }
.icon-green { color: #22c55e; }
.checkmark-green { color: #22c55e; }

.border-purple { border-color: #8b5cf6; }
.icon-purple { color: #8b5cf6; }
.checkmark-purple { color: #8b5cf6; }

/* Rest of your existing CSS */
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
.section-title{font-size:clamp(1.4rem, 1.2rem + 1vw, 2rem);margin:0 0 14px; color: #2c3e50 !important;}
.section-titles{font-size:2rem;margin:0 25rem 14px; color:white; font-weight:700}

.subtext{color:white; font-size:1.3rem}
.btn{display:inline-flex;align-items:center;gap:.6rem;padding:.85rem 1.1rem;border-radius:999px;background:rgb(212, 175, 55);color:white;text-decoration:none;font-weight:700;box-shadow:0 6px 16px rgba(76,201,240,.25);transition:.2s transform ease, .2s box-shadow ease}
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
.glance__text p{line-height:1.75; color: Black; font-size:1.2rem; text-align: justify;}
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
  .hero__shape{
  width: 20rem;
  }
  .section-titles{
      margin: 0 10rem 14px;
  }
      .hero__content {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-top: 8rem;
}
    .glance__text{
   padding-left:20px;
    }

}
@media (max-width: 560px){
  .stats__grid{grid-template-columns:repeat(2,1fr)}
  .team__grid{grid-template-columns:1fr}
  .cta__box{flex-direction:column;align-items:flex-start}
}
  .glance{padding:0px 0}
  .cta{padding:16px 0 0px}
`;



// All styles are now defined as JS objects
const styles = {
    servicesSection: {
        padding: '3rem 0',
        background: '#D1F8EF',
    },
    sectionHeader: {
        textAlign: 'center',
        marginBottom: '2.5rem',
    },
    sectionTitle: {
        fontSize: '1.875rem',
        fontWeight: '700',
        color: '#1f2937',
    },
    sectionSubtitle: {
        marginTop: '0.75rem',
        fontSize: '1.25rem',
        color: '#0c0c0cff',
        maxWidth: '42rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    divider: {
        marginTop: '1rem',
        width: '6rem',
        height: '0.25rem',
        backgroundColor: '#6366f1',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '9999px',
    },
    servicesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: '2rem',
    },
    serviceCard: {
        backgroundColor: '#ffffff',
        borderRadius: '0.75rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        borderLeftWidth: '4px',
        transition: 'all 0.3s ease-in-out',
        borderLeftStyle: 'solid',
    },
    serviceCardHover: {
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transform: 'translateY(-0.25rem)',
    },
    cardContent: {
        padding: '1rem',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.25rem',
    },
    iconContainer: {
        flexShrink: 0,
    },
    cardIcon: {
        width: '2.5rem',
        height: '2.5rem',
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1f2937',
        margin: 0,
    },
    serviceList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
    },
    serviceListItem: {
        display: 'flex',
        alignItems: 'flex-start',
        color: '#111111ff',
        fontSize: '1rem',
        lineHeight: 1.5,
    },
    checkmark: {
        fontWeight: '700',
        marginRight: '0.75rem',
        marginTop: '0.25rem',
    }
};

// Media queries would need a more advanced solution (like a library or window event listeners)
// For now, let's apply the desktop grid layout as default.
styles.servicesGrid['@media (min-width: 768px)'] = {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
};
// This media query part won't work directly in inline styles.
// A simple approach for this example is to set the desktop layout directly.
styles.servicesGrid.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';











