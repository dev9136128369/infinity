import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faArrowRight, 
  faPhone,
  faStar
} from '@fortawesome/free-solid-svg-icons';

// CSS Styles
const styles = `
  :root {
    --primary: #1a365d;
    --secondary: #2d6a4f;
    --accent: #d4af37;
    --light: #f8f9fa;
    --dark: #343a40;
    --gray: #6c757d;
    --light-gray: #e9ecef;
    --text: #2d3748;
    --background: #f5f7f9;
    --card-bg: #ffffff;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text);
    background-color: var(--background);
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* ================= HERO SECTION ================= */
  .hero {
    background: linear-gradient(rgb(26 54 93 / 49%), rgba(19, 40, 70, 0.85)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 120px 0;
    text-align: center;
    margin-top: 80px;
  }

  .hero h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
    font-weight: 700;
    transform: translateY(30px);
    opacity: 0;
    animation: fadeInUp 1s ease forwards;
  }

  .hero p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 40px;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s ease 0.2s forwards;
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s ease 0.4s forwards;
  }

  .hero-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background-color: var(--accent);
    color: var(--primary);
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: var(--transition);
  }

  .hero-btn:hover {
    background-color: #c69c2b;
    transform: translateY(-3px);
  }

  .hero-btn.outline {
    background-color: transparent;
    border: 2px solid var(--accent);
    color: white;
  }

  .hero-btn.outline:hover {
    background-color: var(--accent);
    color: var(--primary);
  }

  /* ================= SECTION HEADERS ================= */
  .section-header {
    text-align: center;
    margin: 60px 0 40px;
    opacity: 4;
    transform: translateY(30px);
    transition: transform 0.8s ease, opacity 0.8s ease;
  }

  .section-header.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .section-header h2 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 15px;
  }

  .section-header p {
    color: Black;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
    padding-bottom:2rem;
  }

  /* ================= PROPERTY CARDS GRID ================= */
  .properties-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
  }

  /* ================= PROPERTY CARD ================= */
  .property-card {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    opacity: 0;
    transform: translateY(30px);
    transition: transform 0.8s ease, opacity 0.8s ease, box-shadow 0.3s ease;
  }

  .property-card.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .property-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .property-image {
    position: relative;
    height: 220px;
    overflow: hidden;
  }

  .property-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }

  .property-card:hover .property-image img {
    transform: scale(1.05);
  }

  .property-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: var(--accent);
    color: var(--primary);
    padding: 5px 12px;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .property-price {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background-color: rgba(26, 54, 93, 0.85);
    color: white;
    padding: 8px 15px;
    border-radius: 6px;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .property-content {
    padding: 20px;
  }

  .property-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: white;
  }

  .property-location {
    display: flex;
    align-items: center;
    gap: 8px;
    color: white;
    margin-bottom: 15px;
    font-size: 1rem;
  }

  .property-actions {
    display: flex;
    justify-content: space-between;
  }

  .action-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background-color: var(--primary);
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    transition: var(--transition);
    border: none;
    cursor: pointer;
  }

  .action-btn:hover {
    background-color: #2c5282;
    color:red;
  }

  .action-btn.outline {
    background-color: transparent;
    border: 1px solid var(--primary);
    color: white;
  }

  .action-btn.outline:hover {
    background-color: var(--primary);
    color: red;
  }

  /* ================= TESTIMONIALS ================= */
  .testimonials {
    padding: 80px 0;
    background: linear-gradient(to right, var(--primary), #2c5282);
    color: white;
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    transition: transform 1s ease, opacity 1s ease;
  }

  .testimonials.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .testimonials h2 {
    font-size: 2.2rem;
    margin-bottom: 50px;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .testimonial {
    background: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    opacity: 0;
    transform: translateY(30px);
    transition: transform 0.8s ease, opacity 0.8s ease;
  }

  .testimonial.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .testimonial p {
    font-style: italic;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
  }

  .author-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .author-info h4 {
    margin-bottom: 5px;
  }

  .author-info p {
    font-style: normal;
    opacity: 0.8;
    margin: 0;
    font-size: 0.9rem;
  }

  /* ================= NEWSLETTER ================= */
  .newsletter {
        padding: 0px 0 70px 0px; 
    background-color: var(--light);
    text-align: center;
    opacity: 2;
    transform: translateY(30px);
    transition: transform 1s ease, opacity 1s ease;
  }

  .newsletter.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .newsletter h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: var(--primary);
  }

  .newsletter p {
    max-width: 600px;
    margin: 0 auto 30px;
    color: black;
  }

  .newsletter-form {
    display: flex;
    max-width: 500px;
    margin: 0 auto;
    opacity: 2;
    transform: translateY(20px);
    transition: transform 1s ease 0.3s, opacity 1s ease 0.3s;
  }

  .newsletter.animate .newsletter-form {
    opacity: 1;
    transform: translateY(0);
  }

  .newsletter-input {
    flex: 1;
    padding: 15px;
    border: 1px solid #2c52827d;
    border-radius: 6px 0 0 6px;
    font-size: 1rem;
  }

  .newsletter-btn {
    padding: 0 25px;
    background-color: var(--accent);
    color: var(--primary);
    border: none;
    border-radius: 0 6px 6px 0;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
  }

  .newsletter-btn:hover {
    background-color: #c69c2b;
  }

  /* ================= ANIMATIONS ================= */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Animation delays for cards */
  .property-card:nth-child(1) { transition-delay: 0.1s; }
  .property-card:nth-child(2) { transition-delay: 0.2s; }
  .property-card:nth-child(3) { transition-delay: 0.3s; }
  .property-card:nth-child(4) { transition-delay: 0.4s; }
  .property-card:nth-child(5) { transition-delay: 0.5s; }
  .property-card:nth-child(6) { transition-delay: 0.6s; }
  .property-card:nth-child(7) { transition-delay: 0.7s; }
  .property-card:nth-child(8) { transition-delay: 0.8s; }

  .testimonial:nth-child(1) { transition-delay: 0.1s; }
  .testimonial:nth-child(2) { transition-delay: 0.2s; }
  .testimonial:nth-child(3) { transition-delay: 0.3s; }

  /* ================= RESPONSIVE DESIGN ================= */
  @media (max-width: 1024px) {
    .properties-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 80px 0;
    }
    
    .hero h1 {
      font-size: 2.2rem;
    }
    
    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .section-header h2 {
      font-size: 2rem;
    }
    
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
    
    .newsletter-form {
      flex-direction: column;
    }
    
    .newsletter-input {
      border-radius: 6px;
      margin-bottom: 15px;
    }
    
    .newsletter-btn {
      border-radius: 6px;
      padding: 15px;
    }
  }

  @media (max-width: 480px) {
    .hero {
      padding: 60px 0;
    }
    
    .hero h1 {
      font-size: 1.8rem;
    }
    
    .property-actions {
      flex-direction: column;
      gap: 10px;
    }
    
    .action-btn {
      justify-content: center;
    }
    
    .section-header h2 {
      font-size: 1.8rem;
    }
  }
`;

// Property Card Component
const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-badge">{property.type}</div>
        <div className="property-price">{property.price}</div>
      </div>
      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        <div className="property-location">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{property.location}</span>
        </div>
        <div className="property-actions">
          <a href={property.link} className="action-btn">
            <span>View Details</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <a href={`tel:+91XXXXXX`} className="action-btn outline">
            <FontAwesomeIcon icon={faPhone} />
            <span>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ title, description, id }) => {
  return (
    <div className="section-header" id={id}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>TOP LEASING PROPERTY</h1>
        <p>Discover top leasing properties that combine affordability, accessibility, and modern amenities for hassle-free living.</p>
        <div className="hero-buttons">
          <a href="/TopCommirical" className="hero-btn">
            TOP COMMERCIAL PROPERTY
          </a>
          <a href="/ResidentialProperty" className="hero-btn outline">
            TOP RESIDENTIAL PROPERTY
          </a>
        </div>
      </div>
    </section>
  );
};

// Testimonial Component
const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial">
      <p>{testimonial.text}</p>
      <div className="testimonial-author">
        <div className="author-info">
          <h4>{testimonial.author}</h4>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

// Newsletter Component
const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="container">
         <h2 className="slider-title">Stay Updated</h2>
          <p className="slider-subtitle">Subscribe to our newsletter to receive updates on new leasing properties and investment opportunities.</p>
      
        {/* <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter to receive updates on new leasing properties and investment opportunities.</p> */}
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

// Main Component
const LeasingPropertiesPage = () => {
  const trendingHeaderRef = useRef(null);
  const affordableHeaderRef = useRef(null);
  const primeHeaderRef = useRef(null);
  const testimonialsRef = useRef(null);
  const newsletterRef = useRef(null);

  // Sample property data
  const trendingProperties = [
    {
      id: 1,
      title: "M3M THE CULLINAN",
      location: "SECTOR-94, NOIDA",
      price: "₹82 Lacs*",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-9-1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "GROUP 108 ONE FNG",
      location: "SECTOR-142, NOIDA",
      price: "₹60 Lacs*",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-8-1.jpg",
      link: "#"
    },
    {
      id: 3,
  title: "FAIRFOX EON",
      location: "SECTOR 140A, NOIDA",
      price: "₹35 Lacs*",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-7-1.jpg",
      link: "#"


    }
  ];

  const affordableProperties = [
    {
      id: 1,
       title: "DASNAC ARC",
      location: "SECTOR-72, NOIDA",
      price: "₹90 Lacs*",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-6-1.jpg",
      link: "#"
    },
    {
      id: 2,
       title: "CENTRAL",
      location: "SECTOR-50, NOIDA",
      price: "₹1.13 CR",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-3-1.jpg",
      link: "#"
    },
    {
      id: 3,
   title: "BHUTANI CYBERTHUM",
      location: "SECTOR 140A, NOIDA",
      price: "₹15 Lacs*",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-5-1.jpg",
      link: "#"

      
    },
     {
      id: 4,
   title: "SIGNATURE GLOBAL",
      location: "SECTOR-36, GURGAON",
      price: "₹1.70 CR",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-6-1.jpg",
      link: "#"
    },
    {
      id: 5,
title: "ORION ONE",
      location: "SECTOR-32, NOIDA",
      price: "₹36 Lacs*",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-3-1.jpg",
      link: "#"

   
    },
    {
      id: 6,
title: "M3M THE LINE",
      location: "SECTOR 72, NOIDA",
      price: "₹65 Lacs*",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-5-1.jpg",
      link: "#"

     
    }
  ];

  const primeProperties = [
    {
      id: 1,
    title: "DASNAC ARC",
      location: "SECTOR-72, NOIDA",
      price: "₹90 Lacs*",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-6-1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "CENTRAL",
      location: "SECTOR-50, NOIDA",
      price: "₹1.13 Cr*",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-3-1.jpg",
      link: "#"
    },
    {
      id: 3,
 title: "BHUTANI CYBERTHUM",
      location: "SECTOR 140A, NOIDA",
      price: "₹15 Lacs*",
      type: "Leasing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2024/01/image-1-compressed-5-1.jpg",
      link: "#"

      
    }
  ];

  const testimonials = [
    {
      id: 1,
     text: "I'm extremely satisfied with the leasing advice provided by Raj Lakshmi Reality. Their knowledge of the commercial real estate market is impressive.",
      author: "Vikram Singh",
      role: "Investor"
    },
    {
      id: 2,
      text: "The team at Raj Lakshmi Reality made the process of leasing commercial property smooth and hassle-free. I would highly recommend their services.",
      author: "Priya Patel",
      role: "Entrepreneur"
    },
    {
      id: 3,
text: "Raj Lakshmi Reality helped me find the perfect leasing property for my business. Their service was exceptional and they understood exactly what I needed.",
      author: "Rahul Sharma",
      role: "Business Owner"

      
    }
  ];

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      // Function to check if element is in viewport
      const checkIfInView = (element, offset = 100) => {
        if (!element) return false;
        const elementPosition = element.getBoundingClientRect();
        return elementPosition.top < window.innerHeight - offset;
      };

      // Check all sections for animation
      const sections = [
        trendingHeaderRef.current,
        affordableHeaderRef.current,
        primeHeaderRef.current,
        testimonialsRef.current,
        newsletterRef.current
      ];

      sections.forEach(section => {
        if (section && checkIfInView(section)) {
          section.classList.add('animate');
        }
      });

      // Animate individual cards when in view
      document.querySelectorAll('.property-card').forEach(card => {
        if (checkIfInView(card, 50)) {
          card.classList.add('animate');
        }
      });

      // Animate individual testimonials when in view
      document.querySelectorAll('.testimonial').forEach(testimonial => {
        if (checkIfInView(testimonial, 50)) {
          testimonial.classList.add('animate');
        }
      });
    };

    // Initial check on load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="leasing-properties-page">
      <style>{styles}</style>
      
      <HeroSection />
      
      <div className="container">
        {/* Trending Properties Section */}
        <section className="property-listings">
               <div className="slider-header">
          <h2 className="slider-titl">MOST TRENDING LEASING PROPERTIES</h2>
          <p className="slider-subtitl">The most in-demand leasing properties are those that offer prime locations, modern amenities, and flexible terms, making them ideal for professionals, families, and students seeking convenience and comfort.</p>
        </div>
          <SectionHeader 
            // title="MOST TRENDING LEASING PROPERTIES"
            // description="The most in-demand leasing properties are those that offer prime locations, modern amenities, and flexible terms, making them ideal for professionals, families, and students seeking convenience and comfort."
            id="trending-header"
            ref={trendingHeaderRef}
          />
          
          <div className="properties-grid">
            {trendingProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Affordable Properties Section */}
        <section className="property-listings">
                   <div className="slider-header">
          <h2 className="slider-titl">MOST AFFORDABLE LEASING PROPERTIES</h2>
          <p className="slider-subtitl">Affordable leasing properties are gaining popularity with their budget-friendly rents and flexible agreements, making them a smart choice for students, working professionals, and families looking for convenient living solutions.</p>
        </div>
          <SectionHeader 
            // title="MOST AFFORDABLE LEASING PROPERTIES"
            // description="Affordable leasing properties are gaining popularity with their budget-friendly rents and flexible agreements, making them a smart choice for students, working professionals, and families looking for convenient living solutions."
            id="affordable-header"
            ref={affordableHeaderRef}
          />
          
          <div className="properties-grid">
            {affordableProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Prime Locations Section */}
        <section className="property-listings">
                     <div className="slider-header">
          <h2 className="slider-titl">PRIME LOCATIONS LEASING PROPERTY</h2>
          <p className="slider-subtitl">Leasing properties in prime locations offer unmatched convenience, seamless connectivity, and modern amenities, making them ideal for families, professionals, and students seeking a vibrant lifestyle.</p>
        </div>
          <SectionHeader 
            // title="PRIME LOCATIONS LEASING PROPERTY"
            // description="Leasing properties in prime locations offer unmatched convenience, seamless connectivity, and modern amenities, making them ideal for families, professionals, and students seeking a vibrant lifestyle."
            id="prime-header"
            ref={primeHeaderRef}
          />
          
          <div className="properties-grid">
            {primeProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      {/* <section className="testimonials" id="testimonials" ref={testimonialsRef}>
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      <Newsletter ref={newsletterRef} />
    </div>
  );
};

export default LeasingPropertiesPage;