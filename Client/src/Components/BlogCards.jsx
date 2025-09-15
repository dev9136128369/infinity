


import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdTrendingUp, MdNewReleases, MdMemory } from "react-icons/md"; // for categories

const testimonials = [
  {
    id: 1,
     name: "Amrita Pal",
    role: "CEO",
    image:
      "https://rajlakshmirealty.com/wp-content/uploads/2023/08/1566537005025-fotor-20230826175730.png",
    quote:
      "Real estate blogs have been a lifesaver during my first home-buying journey. They explained everything in such simple terms that what once felt complicated became easy to understand.",
   
  },
  {
    id: 2,
    name: "Arjun Siggh",
    role: "CEO",
    image:
      "https://rajlakshmirealty.com/wp-content/uploads/2023/08/1517679645415-fotor-20230826175740.png",
    quote:
      "Exploring real estate blogs completely changed my home-buying experience. I came across one that clearly explained the local market dynamics, and it empowered me to make confident and informed decisions.",
  },
  {
    id: 3,
    name: "Sonal Yadav",
    role: "CEO",
    image:
      "https://rajlakshmirealty.com/wp-content/uploads/2023/08/1602090973258-fotor-20230826175718.png",
    quote:
      "I’ve followed real estate blogs for several years, and they’ve been instrumental in guiding my investment journey. From market analysis to practical strategies, the insights helped me grow a profitable portfolio and maximize rental returns.",
  },
];

export default function BlogPage() {
  // subtle mount animation
  useEffect(() => {
    const cards = document.querySelectorAll(".bp-card");
    cards.forEach((c, idx) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(12px)";
      setTimeout(() => {
        c.style.transition = "opacity .45s ease, transform .45s cubic-bezier(.2,.9,.2,1)";
        c.style.opacity = "1";
        c.style.transform = "translateY(0)";
      }, 80 * idx);
    });
  }, []);

  return (
    <main className="bp-root">
      {/* HERO */}
      <header className="bp-hero">
        <div className="bp-hero__overlay" />
        <div className="bp-hero__content">
          <p className="bp-eyebrow">We Make Your Dream True</p>
          <h1 className="bp-title">Blogs</h1>
          <p className="bp-sub">
           At Infinity Realty, we help you find the perfect property that matches your aspirations and lifestyle. Your dream home or investment is just a step away.
          </p>
        </div>
        <svg className="bp-hero__shape" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 L1440,0 L1440,120 Z" />
        </svg>
      </header>


    <section className="side-section">
      <div className="side-content">
        <h2>Benefits of living in Incuspaze Tower</h2>
        <p>
          In the past 18 months, the COVID-19 pandemic has significantly reshaped the entire coworking sector, bringing about new ways of working and collaborating. This transformation has also led to the emergence of strategic partnerships between real estate developers and coworking operators, aiming to cater to the evolving needs of businesses and professionals. Industry reports highlight that coworking operators have been actively expanding their portfolios, strengthening their presence across key markets, and positioning themselves as a vital part of the modern real estate ecosystem.
        </p>

        <button className="side-btn">Learn More</button>
      </div>

      <div className="side-image">
        <img src="/Images/BlogTower.jpeg" alt="Real Estate" />
      </div>
    </section>









 <section className="side-section">
      <div className="side-image">
        <img src="/Images/BlogProperty.jpeg" alt="Real Estate" />
      </div>
      <div className="side-content">
        <h2>How to choose your first property?</h2>
        <p>
         When planning to purchase your first investment property, one of the most important factors to evaluate is the location and the strength of the rental market in that area. A good property should ideally be positioned in a neighborhood that offers reputed schools, abundant employment opportunities, and a strong community environment. In addition, seamless connectivity and transportation access—such as proximity to highways, metro stations, or other transit systems—play a key role in ensuring convenience for both residents and potential tenants. Choosing such a location not only enhances the property’s rental demand but also secures its long-term appreciation potential.  </p>

        <button className="side-btn">Learn More</button>
      </div>

    
    </section>






<section className="side-section">
      
      <div className="side-content">
        <h2>Why invest in Delhi?</h2>
        <p>
        India is expected to witness a significant boost in road infrastructure investment, with Transport Minister Kamal Nath highlighting that nearly US$10 billion is projected to flow into the sector over the next two years. The country already has one of the largest road networks globally, stretching over 3.34 million kilometers, and continues to expand rapidly. To further strengthen connectivity and logistics efficiency, India is actively progressing with the National Highways Development Project (NHDP), which aims to modernize and upgrade critical routes across the nation.    </p>

        <button className="side-btn">Learn More</button>
      </div>
  <div className="side-image">
        <img src="/Images/BlogDelhi.jpeg" alt="Real Estate" />
      </div>
  
    </section>

  <section className="side-section">
        <div className="side-image">
        <img src="/Images/helloWorld.jpg" alt="Real Estate" />
      </div>
      <div className="side-content">
        <h2>Hello world!</h2>
        <p>
         This is your very first post. You can edit it, delete it, or add fresh content to begin your journey. Start creating, sharing your ideas, and building something amazing today! </p>

        <button className="side-btn">Learn More</button>
      </div>

  
    </section>


      {/* POSTS GRID */}
      <section className="bp-container">
       

        {/* ABOUT / CATEGORIES / FOLLOW US strip */}
       <section className="bp-info-strip" aria-label="Blog information">
  {/* About */}
  <div className="bp-info">
    <h3>About the blog</h3>
    <p>
      Discover insightful articles that highlight the latest market trends in the real estate industry. Stay updated with valuable knowledge and don’t forget to subscribe to our newsletter for regular updates.
    </p>
  </div>

  {/* Categories */}
  <div className="bp-info">
    <h3>Categories</h3>
    <ul className="bp-cats">
      <li><MdTrendingUp size={18} style={{ marginRight: "6px" }} /> MARKET TRENDS</li>
      <li><MdNewReleases size={18} style={{ marginRight: "6px" }} /> NEW PROJECTS</li>
      <li><MdMemory size={18} style={{ marginRight: "6px" }} /> TECHNOLOGY</li>
    </ul>
  </div>

  {/* Follow Us */}
  <div className="bp-info">
    <h3>Follow us</h3>
    <p className="bp-follow-text">Connect with us on social media</p>
    <div className="bp-socials" role="navigation" aria-label="social links">
      <a href="https://www.linkedin.com/in/rakesh-kumar-1aba1a57" target="_blank" rel="noopener noreferrer"   className="bp-social" aria-label="LinkedIn">
        <FaLinkedinIn size={16} /> LinkedIn
      </a>
      <a href="https://www.facebook.com/profile.php?id=61579222262692" target="_blank" rel="noopener noreferrer"  className="bp-social" aria-label="Facebook">
        <FaFacebookF size={16} /> Facebook
      </a>
      <a href="https://www.instagram.com/rak_eshgupta2/" target="_blank" rel="noopener noreferrer" className="bp-social" aria-label="Instagram">
        <FaInstagram size={16} /> Instagram
      </a>
      {/* <a href="#" className="bp-social" aria-label="Twitter">
        <FaTwitter size={16} /> Twitter
      </a> */}
    </div>
  </div>
</section>


        {/* TESTIMONIALS */}
        <section className="bp-testimonials" aria-label="Testimonials">
          {/* <h3 className="bp-section-title">What readers say</h3> */}
           <div className="slider-header">
          <h3 className="slider-title">What readers say</h3>
          {/* <p className="slider-subtitle">Discover the Finest Developments by Infinity</p> */}

        </div>
          <div className="bp-test-grid">
            {testimonials.map((t) => (
              <figure className="bp-test-card" key={t.id}>
                <blockquote className="bp-quote">“{t.quote}”</blockquote>
                <figcaption className="bp-author">
                  <img src={t.image} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <div className="bp-author-role">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </section>

      {/* CTA / SUBSCRIBE */}
      <section className="bp-cta">
        <div className="bp-cta__box">
          <div>
            <h3 className="bp-cta__title">Don’t miss updates</h3>
            <p className="bp-cta__text">Subscribe to our newsletter for the latest posts and market news.</p>
          </div>
          <a className="bp-cta__btn" href="/contact">
            Subscribe
          </a>
        </div>
      </section>
    </main>
  );
}
