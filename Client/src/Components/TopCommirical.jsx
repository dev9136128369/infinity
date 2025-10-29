// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   faSearch,
//   faMapMarkerAlt,
//   faIndianRupeeSign,
//   faBed,
//   faBath,
//   faArrowRight,
//   faPhone,
//   faEnvelope,
//   faShareAlt
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faLinkedin,
//   faWhatsapp
// } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // CSS Styles
// const styles = `
//   :root {
//     --primary: #1a365d;
//     --secondary: #2d6a4f;
//     --accent: #d4af37;
//     --light: #f8f9fa;
//     --dark: #343a40;
//     --gray: #6c757d;
//     --light-gray: #e9ecef;
//     --text: #2d3748;
//     --background: #f5f7f9;
//     --card-bg: #ffffff;
//     --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     --transition: all 0.3s ease;
//   }

//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     line-height: 1.6;
//     color: var(--text);
//     background-color: #D1F8EF;
//   }

//   .commercial-container {
//     max-width: 1400px;
//     margin: 0 auto;
//     padding: 0 20px;
//   }

//   /* ================= HERO SECTION ================= */
// .commercial-hero {
//     // background: linear-gradient(rgb(26 54 93 / 49%), rgba(26, 54, 93, 0.85)), url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80);
//     background-size: cover;
//     background: #1E3E62;
//     background-position: center;
//     color: white;
//     padding: 170px 0;
//     text-align: center;
//     margin-bottom: 60px;
//     margin-top: 7rem;
//     height: 70vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//  .commercial-hero h1 {
//     font-size: 2.8rem;
//     margin-bottom: 20px;
//     font-weight: 700;
//     transform: translateY(30px);
//     opacity: 1;
//     transition: transform 1s ease, opacity 1s ease;
//   }

//   .commercial-hero p {
//     font-size: 1.2rem;
//     max-width: 800px;
//     margin: 0 auto 40px;
//     opacity: 1;
//     transform: translateY(30px);
//     transition: transform 1s ease 0.2s, opacity 1s ease 0.2s;
//   }

//   .hero-buttons {
//     display: flex;
//     justify-content: center;
//     gap: 20px;
//     flex-wrap: wrap;
//     opacity: 0;
//     transform: translateY(30px);
//     transition: transform 1s ease 0.4s, opacity 1s ease 0.4s;
//   }

//   .hero-btn {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     padding: 12px 24px;
//     background-color: var(--accent);
//     color: var(--primary);
//     text-decoration: none;
//     border-radius: 50px;
//     font-weight: 600;
//     transition: var(--transition);
//   }

//   .hero-btn:hover {
//     background-color: #c69c2b;
//     transform: translateY(-3px);
//   }

//   .hero-btn.outline {
//     background-color: transparent;
//     border: 2px solid var(--accent);
//     color: white;
//   }

//   .hero-btn.outline:hover {
//     background-color: var(--accent);
//     color: var(--primary);
//   }

//   /* Animation when hero is in view */
//   .hero-animate .commercial-hero h1,
//   .hero-animate .commercial-hero p,
//   .hero-animate .hero-buttons {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   /* ================= FILTER SECTION ================= */
//   .filter-section {
//     background: white;
//     padding: 30px;
//     border-radius: 12px;
//     box-shadow: var(--shadow);
//     margin-bottom: 40px;
//     opacity: 0;
//     transform: translateY(30px);
//     transition: transform 0.8s ease, opacity 0.8s ease;
//   }

//   .filter-section.animate {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   .filter-section h2 {
//     text-align: center;
//     margin-bottom: 25px;
//     color: var(--primary);
//     font-size: 1.5rem;
//   }

//   .filter-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//     gap: 20px;
//   }

//   .filter-group {
//     display: flex;
//     flex-direction: column;
//   }

//   .filter-group label {
//     margin-bottom: 8px;
//     font-weight: 600;
//     color: var(--dark);
//   }

//   .filter-group select, .filter-group input {
//     padding: 12px 15px;
//     border: 1px solid var(--light-gray);
//     border-radius: 6px;
//     font-size: 1rem;
//   }

//   .filter-actions {
//     display: flex;
//     justify-content: center;
//     margin-top: 25px;
//     gap: 15px;
//   }

//   .filter-btn {
//     padding: 12px 30px;
//     background-color: var(--primary);
//     color: white;
//     border: none;
//     border-radius: 6px;
//     font-weight: 600;
//     cursor: pointer;
//     transition: var(--transition);
//   }

//   .filter-btn:hover {
//     background-color: #2c5282;
//   }

//   .filter-btn.reset {
//     background-color: var(--light-gray);
//     color: var(--dark);
//   }

//   .filter-btn.reset:hover {
//     background-color: #dee2e6;
//   }

//   /* ================= PROPERTY LISTINGS ================= */
//   .listings-header {
//     text-align: center;
//     margin-bottom: 40px;
//     opacity: 0;
//     transform: translateY(30px);
//     transition: transform 0.8s ease, opacity 0.8s ease;
//   }

//   .listings-header.animate {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   .listings-header h2 {
//     font-size: 3rem;
//     color: var(--primary);
//     margin-bottom: 15px;
//   }

//   .listings-header p {
//     color: Black;
//     max-width: 700px;
//     margin: 0 auto;
//     font-size: 1.2rem;
//   }

//   .property-tabs {
//     display: flex;
//     justify-content: center;
//     margin-bottom: 30px;
//     border-bottom: 1px solid var(--light-gray);
//   }

//   .tab-btn {
//     padding: 12px 25px;
//     background: none;
//     border: none;
//     font-size: 1rem;
//     font-weight: 600;
//     color: var(--gray);
//     cursor: pointer;
//     transition: var(--transition);
//     position: relative;
//   }

//   .tab-btn.active {
//     color: var(--primary);
//   }

//   .tab-btn.active:after {
//     content: '';
//     position: absolute;
//     bottom: -1px;
//     left: 0;
//     width: 100%;
//     height: 3px;
//     background-color: var(--accent);
//   }

//   .properties-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//     gap: 30px;
//     margin-bottom: 60px;
//   }

//   /* ================= PROPERTY CARD ================= */
//   .property-card {
//     background: var(--card-bg);
//     border-radius: 12px;
//     overflow: hidden;
//     box-shadow: var(--shadow);
//     transition: var(--transition);
//     opacity: 0;
//     transform: translateY(30px);
//     transition: transform 0.8s ease, opacity 0.8s ease, box-shadow 0.3s ease, transform 0.3s ease;
//   }

//   .property-card.animate {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   .property-card:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
//   }

//   .property-image {
//     position: relative;
//     height: 150px;
//     overflow: hidden;
//   }

//   .property-image img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: var(--transition);
//   }

//   .property-card:hover .property-image img {
//     transform: scale(1.05);
//   }

//   .property-badge {
//     position: absolute;
//     top: 15px;
//     left: 15px;
//     background: #d4af37;
//     color: var(--primary);
//     padding: 5px 12px;
//     border-radius: 30px;
//     font-size: 0.8rem;
//     font-weight: 600;
//   }

//   .property-price {
//     position: absolute;
//     bottom: 15px;
//     left: 15px;
//     background-color: rgba(26, 54, 93, 0.85);
//     color: white;
//     padding: 8px 15px;
//     border-radius: 6px;
//     font-weight: 700;
//     font-size: 1.1rem;
//   }

//   .property-content {
//     padding: 0px;
//   }

//   .property-title {
//     font-size: 1.5rem;
//     margin-bottom: 10px;
//     color: white;
//   }

//   .property-location {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     color: white;
//     margin-bottom: 15px;
//     font-size: 1.1rem;
//   }

//   .property-features {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 20px;
//     padding-bottom: 15px;
//     border-bottom: 1px solid var(--light-gray);
//   }

//   .feature {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 5px;
//   }

//   .feature-icon {
//     color: var(--accent);
//     font-size: 1.1rem;
//   }

//   .feature-text {
//     font-size: 0.85rem;
//     color: var(--gray);
//   }

//   .property-actions {
//     display: flex;
//     justify-content: space-between;
//   }

//   .action-btn {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     padding: 10px 20px;
//     background-color: var(--primary);
//     color: white;
//     text-decoration: none;
//     border-radius: 6px;
//     font-weight: 600;
//     transition: var(--transition);
//   }

//   .action-btn:hover {
//     background-color: #2c5282;
//     color: red;
//   }

//   .action-btn.outline {
//     background-color: transparent;
//     border: 1px solid var(--primary);
//     color: white;
//   }

//   .action-btn.outline:hover {
//     background-color: var(--primary);
//     color: #ff1808;
//   }

//   /* ================= TESTIMONIALS ================= */
//   .testimonials {
//     padding: 80px 0;
//     background: linear-gradient(to right, var(--primary), #2c5282);
//     color: white;
//     text-align: center;
//     opacity: 0;
//     transform: translateY(30px);
//     transition: transform 1s ease, opacity 1s ease;
//   }

//   .testimonials.animate {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   .testimonials h2 {
//     font-size: 2.2rem;
//     margin-bottom: 50px;
//   }

//   .testimonials-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//     gap: 30px;
//     max-width: 1200px;
//     margin: 0 auto;
//   }

//   .testimonial {
//     background: rgba(255, 255, 255, 0.1);
//     padding: 30px;
//     border-radius: 12px;
//     backdrop-filter: blur(10px);
//     opacity: 0;
//     transform: translateY(30px);
//     transition: transform 0.8s ease, opacity 0.8s ease;
//   }

//   .testimonial.animate {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   .testimonial p {
//     font-style: italic;
//     margin-bottom: 20px;
//     line-height: 1.6;
//   }

//   .testimonial-author {
//     display: flex;
//     align-items: center;
//     gap: 15px;
//     justify-content: center;
//   }

//   .author-img {
//     width: 60px;
//     height: 60px;
//     border-radius: 50%;
//     object-fit: cover;
//   }

//   .author-info h4 {
//     margin-bottom: 5px;
//   }

//   .author-info p {
//     font-style: normal;
//     opacity: 0.8;
//     margin: 0;
//     font-size: 0.9rem;
//   }

//   /* ================= NEWSLETTER ================= */
//   .newsletter {
//        padding: 0px 0 70px 0px; 
//     background-color: var(--light);
//     text-align: center;
//     opacity: 0;
//     transform: translateY(30px);
//     transition: transform 1s ease, opacity 1s ease;
//   }

//   .newsletter.animate {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   .newsletter h2 {
//     font-size: 2rem;
//     margin-bottom: 20px;
//     color: var(--primary);
//   }

//   .newsletter p {
//     max-width: 600px;
//     margin: 0 auto 30px;
//     color: Black;
//     font-size: 1.2rem
//   }

//   .newsletter-form {
//     display: flex;
//     max-width: 500px;
//     margin: 0 auto;
//     opacity: 0;
//     transform: translateY(20px);
//     transition: transform 1s ease 0.3s, opacity 1s ease 0.3s;
//   }

//   .newsletter.animate .newsletter-form {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   .newsletter-input {
//     flex: 1;
//     padding: 15px;
//     border: 1px solid #2c52827d;
//     border-radius: 6px 0 0 6px;
//     font-size: 1rem;
//   }

//   .newsletter-btn {
//     padding: 0 25px;
//     background-color: var(--accent);
//     color: var(--primary);
//     border: none;
//     border-radius: 0 6px 6px 0;
//     font-weight: 600;
//     cursor: pointer;
//     transition: var(--transition);
//   }

//   .newsletter-btn:hover {
//     background-color: #c69c2b;
//   }

//   /* ================= RESPONSIVE DESIGN ================= */
//   @media (max-width: 1024px) {
//     .properties-grid {
//       grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     }
//   }

//   @media (max-width: 768px) {
//     .commercial-hero h1 {
//       font-size: 2.2rem;
//     }
    
//     .hero-buttons {
//       flex-direction: column;
//       align-items: center;
//     }
    
//     .filter-grid {
//       grid-template-columns: 1fr;
//     }
    
//     .property-tabs {
//       flex-wrap: wrap;
//     }
    
//     .testimonials-grid {
//       grid-template-columns: 1fr;
//     }
    
//     .newsletter-form {
//       flex-direction: column;
//     }
    
//     .newsletter-input {
//       border-radius: 6px;
//       margin-bottom: 15px;
//     }
    
//     .newsletter-btn {
//       border-radius: 6px;
//       padding: 15px;
//     }
//   }

//   @media (max-width: 480px) {
//     .commercial-hero {
//       padding: 60px 0;
//     }
    
//     .commercial-hero h1 {
//       font-size: 1.8rem;
//     }
    
//     .property-features {
//       flex-wrap: wrap;
//       gap: 15px;
//     }
    
//     .feature {
//       flex: 1 0 40%;
//     }
    
//     .property-actions {
//       flex-direction: column;
//       gap: 10px;
//     }
    
//     .action-btn {
//       justify-content: center;
//     }
//   }

//   /* Animation delays for cards */
//   .property-card:nth-child(1) { transition-delay: 0.1s; }
//   .property-card:nth-child(2) { transition-delay: 0.2s; }
//   .property-card:nth-child(3) { transition-delay: 0.3s; }
//   .property-card:nth-child(4) { transition-delay: 0.4s; }
//   .property-card:nth-child(5) { transition-delay: 0.5s; }
//   .property-card:nth-child(6) { transition-delay: 0.6s; }
//   .property-card:nth-child(7) { transition-delay: 0.7s; }
//   .property-card:nth-child(8) { transition-delay: 0.8s; }

//   .testimonial:nth-child(1) { transition-delay: 0.1s; }
//   .testimonial:nth-child(2) { transition-delay: 0.2s; }
//   .testimonial:nth-child(3) { transition-delay: 0.3s; }
// `;

// // Property Card Component
// const PropertyCard = ({ property }) => {
//   return (
//     <div className="property-card">
//       <div className="property-image">
//         <img src={property.image} alt={property.title} />
//         {/* <div className="property-badge">{property.type}</div> */}
//         <div className="property-badge">{property.price}</div>
//       </div>
//       <div className="property-content">
//         <h3 className="property-title">{property.title}</h3>
//         <div className="property-location">
//           <FontAwesomeIcon icon={faMapMarkerAlt} />
//           <span>{property.location}</span>
//         </div>
//         {/* <div className="property-actions">
//           <a href={property.link} className="action-btn">
//             <span>View Details</span>
//             <FontAwesomeIcon icon={faArrowRight} />
//           </a>
//           <a href={`tel:+91XXXXXX`} className="action-btn outline">
//             <FontAwesomeIcon icon={faPhone} />
//             <span>Call</span>
//           </a>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// // Main Component
// const CommercialPropertiesPage = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [heroAnimated, setHeroAnimated] = useState(false);
//   const heroRef = useRef(null);
//   const filterRef = useRef(null);
//   const listingsRef1 = useRef(null);
//   const listingsRef2 = useRef(null);
//   const listingsRef3 = useRef(null);
//   const testimonialsRef = useRef(null);
//   const newsletterRef = useRef(null);

//   // Sample property data
//   const commercialProperties = [
//     {
//       id: 1,
//       title: "M3M MY DEN",
//       location: "SECTOR-67, GURGAON",
//       price: "₹1.37 Cr*",
//       size: "800-1500 Sq.Ft.",
//       units: "5+",
//       status: "Ready to Move",
//       // type: "Office Space",
//       image: "/Images/TopCommirecal1.jpeg",
//       link: "#"
//     },
//     {
//       id: 2,
//        title: "SIGNATURE GLOBAL",
//       location: "SECTOR-36, GURGAON",
//       price: "₹1.70 CR",
//       size: "400-900 Sq.Ft.",
//       units: "12+",
//       status: "Under Construction",
//       // type: "Retail",
//         image: "/Images/TopCommirecal2.jpeg",
//       link: "#"
//     },
//     {
//       id: 3,
//       title: "M3M The Cullinan",
//       location: "Sector-94, Noida",
//       price: "₹82 Lacs*",
//       size: "500-1200 Sq.Ft.",
//       units: "10+",
//       status: "Ready to Move",
//       // type: "Office Space",
//        image: "/Images/TopCommirecal3.jpeg",
//       link: "#"
//     },
//     {
//       id: 4,
//       title: "THE FLAGSHIP",
//       location: "Sector 140A, Noida Expressway",
//       price: "₹18 Lacs*",
//       size: "150-400 Sq.Ft.",
//       units: "30+",
//       status: "Under Construction",
//       // type: "Retail",
//        image: "/Images/TopCommirecal4.jpeg",
//       link: "#"
//     },
//     {
//       id: 5,
// title: "Fairfox EON",
//       location: "Sector 140A, Noida",
//       price: "₹35 Lacs*",
//       size: "200-500 Sq.Ft.",
//       units: "25+",
//       status: "Ready to Move",
//       // type: "Office Space",
//       image: "/Images/TopCommirecal5.jpeg",
//       link: "#"

     
//     },
//     {
//       id: 6,
// title: "Group 108 ONE FNG",
//       location: "Sector-142, Noida",
//       price: "₹60 Lacs*",
//       size: "300-800 Sq.Ft.",
//       units: "15+",
//       status: "Under Construction",
//       // type: "Retail",
//      image: "/Images/TopCommirecal6.jpeg",
//       link: "#"

     
//     }
//   ];

//   const commercialProperties1 = [
//     {
//       id: 1,


//      title: "SPECTRUM PHASE-2",
//       location: "SECTOR-75, NOIDA",
//       price: "₹53 Lacs*",
//       size: "400-900 Sq.Ft.",
//       units: "12+",
//       status: "Under Construction",
//       // type: "Retail",
//            image: "/Images/TopCommir1.jpeg",

//       link: "#"
//     },
//     {
//       id: 2,
//     title: "SPECTRUM PHASE 1",
//       location: "SEC-75, NOIDA",
//       price: "₹46.75 Lacs*",
//       size: "800-1500 Sq.Ft.",
//       units: "5+",
//       status: "Ready to Move",
//       // type: "Office Space",
//                image: "/Images/TopCommir2.jpeg",

//       link: "#"
//     },
//     {
//       id: 3,
//      title: "ELDECO ACCLAIM",
//       location: "Sohna Gurgaon",
//       price: "₹3 CR",
//       size: "400-900 Sq.Ft.",
//       units: "12+",
//       status: "Under Construction",
//       // type: "Retail",
//                image: "/Images/TopCommir3.jpeg",

//       link: "#"
//     },
//     {
//       id: 4,
//       title: "BIRLA NAVYA",
//       location: "SECTOR 63 A, GURGAON",
//       price: "₹1.3 CR*",
//       size: "150-400 Sq.Ft.",
//       units: "30+",
//       status: "Under Construction",
//       // type: "Retail",
//                 image: "/Images/TopCommir4.jpeg",

//       link: "#"
//     },
//     {
//       id: 5,
//       title: "EMAAR DIGI HOMES",
//       location: "SECTOR 62, GURGAON",
//       price: "₹ 1.7 CR*",
//       size: "800-1500 Sq.Ft.",
//       units: "5+",
//       status: "Ready to Move",
//       // type: "Office Space",
//                 image: "/Images/TopCommir5.jpeg",

//       link: "#"
//     },
//     {
//       id: 6,
// title: "Dasnac Arc",
//       location: "Sector-72, Noida",
//       price: "₹90 Lacs*",
//       size: "400-900 Sq.Ft.",
//       units: "12+",
//       status: "Under Construction",
//       // type: "Retail",
//                  image: "/Images/TopCommir6.jpeg",

//       link: "#"

      
//     },
//     {
//       id: 7,
//  title: "Central",
//       location: "Sector-50, Noida",
//       price: "₹1.13 Cr*",
//       size: "800-1500 Sq.Ft.",
//       units: "5+",
//       status: "Ready to Move",
//       // type: "Office Space",
//                 image: "/Images/TopCommir7.jpeg",

//       link: "#"

      
//     },
//     {
//       id: 8,
// title: "Bhutani Cyberthum",
//       location: "Sector 140A, Noida",
//       price: "₹15 Lacs*",
//       size: "150-400 Sq.Ft.",
//       units: "30+",
//       status: "Under Construction",
//       // type: "Retail",
//                  image: "/Images/TopCommir8.jpeg",

//       link: "#"

     
//     }
//   ];

//   const commercialProperties2 = [
//     {
//       id: 1,
//       title: "SIGNATURE GLOBAL",
//       location: "SECTOR-36, GURGAON",
//       price: "₹1.70 CR",
//       size: "400-900 Sq.Ft.",
//       units: "12+",
//       status: "Under Construction",
//       // type: "Retail",
//                       image: "/Images/TopCom1.jpeg",

//       link: "#"
//     },
//     {
//       id: 2,
//       title: "M3M MY DEN",
//       location: "SECTOR-67, GURGAON",
//       price: "₹1.37 CR",
//       size: "800-1500 Sq.Ft.",
//       units: "5+",
//       status: "Ready to Move",
//       // type: "Office Space",
//                             image: "/Images/TopCom2.jpeg",

//       link: "#"
//     },
//     {
//       id: 3,
//       title: "SIGNATURE GLOBAL",
//       location: "SECTOR-36, GURGAON",
//       price: "₹1.70 CR*",
//       size: "400-900 Sq.Ft.",
//       units: "12+",
//       status: "Under Construction",
//       // type: "Retail",
//                            image: "/Images/TopCom3.jpeg",

//       link: "#"
//     },
//     {
//       id: 4,
//       title: "BESTECH CENTRA",
//       location: "SECTOR-88 , GURGAON",
//       price: "₹2.77 CR*",
//       size: "150-400 Sq.Ft.",
//       units: "30+",
//       status: "Under Construction",
//       // type: "Retail",
//                             image: "/Images/TopCom4.jpeg",

//       link: "#"
//     },
//     {
//       id: 5,
// title: "ORION ONE",
//       location: "SECTOR-32, NOIDA",
//       price: "₹36 Lacs*",
//       size: "800-1500 Sq.Ft.",
//       units: "5+",
//       status: "Ready to Move",
//       // type: "Office Space",
//                             image: "/Images/TopCom5.jpeg",

//       link: "#"

     
//     },
//     {
//       id: 6,
// title: "M3M THE LINE",
//       location: "SECTOR 72, NOIDA",
//       price: "₹65 Lacs*",
//       size: "150-400 Sq.Ft.",
//       units: "30+",
//       status: "Under Construction",
//       // type: "Retail",
//                             image: "/Images/TopCom6.jpeg",

//       link: "#"

      
//     }
//   ];

//   // Scroll animation effect
//   useEffect(() => {
//     const handleScroll = () => {
//       // Hero animation
//       if (heroRef.current && !heroAnimated) {
//         const heroPosition = heroRef.current.getBoundingClientRect();
//         if (heroPosition.top < window.innerHeight - 100) {
//           setHeroAnimated(true);
//         }
//       }

//       // Function to check if element is in viewport
//       const checkIfInView = (element, offset = 100) => {
//         if (!element) return false;
//         const elementPosition = element.getBoundingClientRect();
//         return elementPosition.top < window.innerHeight - offset;
//       };

//       // Check all sections for animation
//       if (filterRef.current && checkIfInView(filterRef.current)) {
//         filterRef.current.classList.add('animate');
//       }

//       if (listingsRef1.current && checkIfInView(listingsRef1.current)) {
//         listingsRef1.current.classList.add('animate');
//       }

//       if (listingsRef2.current && checkIfInView(listingsRef2.current)) {
//         listingsRef2.current.classList.add('animate');
//       }

//       if (listingsRef3.current && checkIfInView(listingsRef3.current)) {
//         listingsRef3.current.classList.add('animate');
//       }

//       if (testimonialsRef.current && checkIfInView(testimonialsRef.current)) {
//         testimonialsRef.current.classList.add('animate');
//       }

//       if (newsletterRef.current && checkIfInView(newsletterRef.current)) {
//         newsletterRef.current.classList.add('animate');
//       }

//       // Animate individual cards when in view
//       document.querySelectorAll('.property-card').forEach(card => {
//         if (checkIfInView(card, 50)) {
//           card.classList.add('animate');
//         }
//       });

//       // Animate individual testimonials when in view
//       document.querySelectorAll('.testimonial').forEach(testimonial => {
//         if (checkIfInView(testimonial, 50)) {
//           testimonial.classList.add('animate');
//         }
//       });
//     };

//     // Initial check on mount
//     handleScroll();

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);
    
//     // Clean up
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [heroAnimated]);

//   return (
//     <div className="commercial-properties-page">
//       <style>{styles}</style>
      
//       {/* Hero Section */}
//       <section 
//         className={`commercial-hero ${heroAnimated ? 'hero-animate' : ''}`} 
//         ref={heroRef}
//       >
//         <div className="commercial-container">
          
//           <h1>TOP COMMERCIAL PROPERTY</h1>
//           <p>Looking for a perfect home/apartment or any other residential property in India? Have a look at our amazing residential properties.</p>
//           <div className="hero-buttons">
//             {/* <a href="/LeasingPropertiesPage" className="hero-btn">
//               TOP LEASING PROPERTY
//             </a> */}
//             <Link to="/ResidentialProperty" className="hero-btn outline">
//               TOP RESIDENTIAL PROPERTY
//             </Link>
//           </div>
//         </div>
//       </section>

//       <div className="commercial-container">
//         {/* Property Listings */}
//         <section className="property-listings">
//               <div className="slider-header">
//           <h2 className="slider-title">MOST TRENDING COMMERCIAL PROPERTIES</h2>
//           <p className="slider-subtitle">The most popular residential properties boast prime locations, modern amenities, and vibrant communities, attracting a diverse range of families and individuals.</p>
//         </div>
//           {/* <div className="listings-header" ref={listingsRef1}>
//             <h2>MOST TRENDING COMMERCIAL PROPERTIES</h2>
//             <p>The most popular residential properties boast prime locations, modern amenities, and vibrant communities, attracting a diverse range of families and individuals.</p>
//           </div> */}

//           <div className="properties-grid">
//             {commercialProperties.map(property => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </section>
//       </div>

//       <div className="commercial-container">
//         {/* Property Listings */}
//         <section className="property-listings">
//                     <div className="slider-header">
//           <h2 className="slider-title">MOST AFFORDABLE COMMERCIAL PROPERTIES</h2>
//           <p className="slider-subtitle">Affordable residential properties are gaining attention with their budget-friendly pricing and essential amenities, making them ideal choices for first-time homebuyers and growing families.</p>
//         </div>
//           {/* <div className="listings-header" ref={listingsRef2}>
//             <h2>MOST AFFORDABLE COMMERCIAL PROPERTIES</h2>
//             <p>Affordable residential properties are gaining attention with their budget-friendly pricing and essential amenities, making them ideal choices for first-time homebuyers and growing families.</p>
//           </div> */}

//           <div className="properties-grid">
//             {commercialProperties1.map(property => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </section>
//       </div>

//       <div className="commercial-container">
//         {/* Property Listings */}
//         <section className="property-listings">
//             <div className="slider-header">
//           <h2 className="slider-title">PRIME LOCATIONS COMMERCIAL PROPERTY</h2>
//           <p className="slider-subtitle">Prime location residential properties offer families unparalleled connectivity and convenience, serving as ideal hubs for modern urban living.</p>
//         </div>

//           {/* <div className="listings-header" ref={listingsRef3}>
//             <h2>PRIME LOCATIONS COMMERCIAL PROPERTY</h2>
//             <p>Prime location residential properties offer families unparalleled connectivity and convenience, serving as ideal hubs for modern urban living.</p>
//           </div> */}

//           <div className="properties-grid">
//             {commercialProperties2.map(property => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </section>
//       </div>

    

//       {/* Newsletter Section */}
//       <section className="newsletter" ref={newsletterRef}>
//         <div className="commercial-container">
        
//         <h2 className="slider-title">Stay Updated</h2>
//           <p className="slider-subtitle">Subscribe to our newsletter to receive updates on new commercial properties and investment opportunities.</p>
//           {/* <h2>Stay Updated</h2>
//           <p>Subscribe to our newsletter to receive updates on new commercial properties and investment opportunities.</p> */}
//           <div className="newsletter-form">
//             <input type="email" placeholder="Your email address" className="newsletter-input" />
//             <button className="newsletter-btn">Subscribe</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CommercialPropertiesPage;






import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    background-color: #D1F8EF;
  }

  .commercial-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* ================= HERO SECTION ================= */
  .commercial-hero {
    background: #1E3E62;
    background-position: center;
    color: white;
    padding: 170px 0;
    text-align: center;
    margin-bottom: 60px;
    margin-top: 7rem;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .commercial-hero h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  
  .commercial-hero p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 40px;
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
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

  /* ================= SLIDER HEADER ================= */
  .slider-header {
    text-align: center;
    margin-bottom: 50px;
    padding: 0 20px;
  }

  .slider-title {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 15px;
    font-weight: 700;
  }

  .slider-subtitle {
    font-size: 1.2rem;
    color: var(--text);
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* ================= PROPERTY CARD ================= */
  .property-card {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    height: 100%;
  }

  .property-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .property-image {
    position: relative;
    height: 250px;
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
    background: var(--accent);
    color: var(--primary);
    padding: 8px 15px;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 2;
  }

  .property-details {
    padding: 20px;
    background: #17313E;
  }

  .property-details h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: white;
    line-height: 1.3;
  }

  .property-price {
    font-size: 1.4rem;
    font-weight: 700;
    color: rgb(212, 175, 55);
    margin-bottom: 10px;
    float: right;
    margin-top: -2rem;
  }

  .property-location {
    display: flex;
    align-items: center;
    gap: 8px;
    color: white;
    margin-bottom: 15px;
    font-size: 0.9rem;
  }

  .properties-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
  }

  /* ================= LOAD MORE BUTTON ================= */
  .load-more-container {
    text-align: center;
    margin: 40px 0 80px 0;
  }

  .load-more-btn {
    padding: 15px 40px;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(26, 54, 93, 0.3);
  }

  .load-more-btn:hover {
    background-color: #2c5282;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(26, 54, 93, 0.4);
  }

  .load-more-btn:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

@keyframes cardFadeIn {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Base state (hidden) */
.property-card {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* Animate when in view */
.property-card.animate {
  animation: cardFadeIn 0.8s forwards;
}

/* Hover animation */
.property-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}


.property-card:nth-child(1) { animation-delay: 0.1s; }
.property-card:nth-child(2) { animation-delay: 0.2s; }
.property-card:nth-child(3) { animation-delay: 0.3s; }
.property-card:nth-child(4) { animation-delay: 0.4s; }
.property-card:nth-child(5) { animation-delay: 0.5s; }
.property-card:nth-child(6) { animation-delay: 0.6s; }
.property-card:nth-child(7) { animation-delay: 0.7s; }
.property-card:nth-child(8) { animation-delay: 0.8s; }

  /* ================= NEWSLETTER ================= */
  .newsletter {
    padding: 80px 0;
    background-color: var(--light);
    text-align: center;
    margin-top: 60px;
  }

  .newsletter-form {
    display: flex;
    max-width: 500px;
    margin: 30px auto 0;
    gap: 10px;
  }

  .newsletter-input {
    flex: 1;
    padding: 15px;
    border: 1px solid var(--light-gray);
    border-radius: 6px;
    font-size: 1rem;
  }

  .newsletter-btn {
    padding: 15px 30px;
    background-color: var(--accent);
    color: var(--primary);
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
  }

  .newsletter-btn:hover {
    background-color: #c69c2b;
  }

  /* ================= RESPONSIVE DESIGN ================= */
  @media (max-width: 1024px) {
    .properties-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .commercial-hero {
      padding: 100px 0;
      height: auto;
      margin-top: 5rem;
    }
    
    .commercial-hero h1 {
      font-size: 2.2rem;
    }
    
    .slider-title {
      font-size: 2rem;
    }
    
    .slider-subtitle {
      font-size: 1.1rem;
    }
    
    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .properties-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .newsletter-form {
      flex-direction: column;
    }
       .commercial-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    margin-top: 2.5rem;
  }
  }

  @media (max-width: 480px) {
    .commercial-hero h1 {
      font-size: 1.8rem;
    }
    
    .slider-title {
      font-size: 1.6rem;
    }
    
    .property-image {
      height: 200px;
    }
    
    .property-details {
      padding: 15px;
    }
    
    .load-more-btn {
      padding: 12px 30px;
      font-size: 1rem;
    }
  }

  /* Loading and Error States */
  .loading-container, .error-container {
    text-align: center;
    padding: 60px 20px;
  }

  .loading-text {
    font-size: 1.2rem;
    color: var(--gray);
  }

  .error-text {
    font-size: 1.2rem;
    color: #e74c3c;
  }

  .retry-btn {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* No Properties Message */
  .no-properties {
    text-align: center;
    padding: 60px 20px;
    color: var(--gray);
    font-size: 1.1rem;
  }

  /* Properties Count */
  .properties-count {
    text-align: center;
    color: var(--gray);
    margin-bottom: 30px;
    font-size: 1.1rem;
  }
`;

// Property Card Component
const PropertyCard = ({ property }) => {
  const [animate, setAnimate] = useState(false);
    useEffect(() => {
    // chhoti delay ke baad animate class add hogi
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div  className={`property-card ${animate ? "animate" : ""}`}>
      <div className="property-image">
        <img 
          src={property.bannerImage} 
          alt={property.title}
          onError={(e) => {
            e.target.src = '/Images/placeholder-property.jpg';
          }}
        />
        <div className="property-badge">{property.category}</div>
      </div>
      <div className="property-details">
        <h3>{property.title}</h3>
        <div className="property-price">
          ₹{property.price} {property.priceUnit}
        </div>
        <div className="property-location">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>
            {property.description && property.description.length > 60 
              ? `${property.description.substring(0, 60)}...` 
              : property.description || 'Commercial Property'
            }
          </span>
        </div>
      </div>
    </div>
  );
};

// Main Component
const CommercialPropertiesPage = () => {
  const API_URL = "http://localhost:8000";
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12); 


  
  // Fetch all products from backend
  const fetchProperties = async () => {

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_URL}/api/admin/products`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch properties: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setProperties(data.products || []);
      } else {
        throw new Error(data.message || 'Failed to fetch properties');
      }
    } catch (err) {
      console.error('Error fetching properties:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // Filter only commercial properties
  const commercialProperties = properties.filter(prop => 
    prop.category === 'COMMERCIAL PROPERTY'
  );

  // Load more function - loads 12 more cards each time
  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  // Check if there are more properties to load
  const hasMoreProperties = visibleCount < commercialProperties.length;

  if (loading) {
    return (
      <div className="commercial-properties-page">
        <style>{styles}</style>
        <div className="loading-container">
          <div className="loading-text">Loading commercial properties...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="commercial-properties-page">
        <style>{styles}</style>
        <div className="error-container">
          <div className="error-text">Error loading properties: {error}</div>
          <button className="retry-btn" onClick={fetchProperties}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="commercial-properties-page">
      <style>{styles}</style>
      
      {/* Hero Section */}
      <section className="commercial-hero">
        <div className="commercial-container">
          <h1>TOP COMMERCIAL PROPERTY</h1>
          <p>Discover premium commercial properties perfect for your business needs. From office spaces to retail shops, find the ideal commercial investment.</p>
          <div className="hero-buttons">
            <Link to="/ResidentialProperty" className="hero-btn outline">
              TOP RESIDENTIAL PROPERTY
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN COMMERCIAL PROPERTIES SECTION */}
      <div className="commercial-container">
        <section className="property-listings">
          <div className="slider-header">
            <h2 className="slider-title">MOST TRENDING COMMERCIAL PROPERTIES</h2>
            <p className="slider-subtitle">
The most popular residential properties boast prime locations, modern amenities, and vibrant communities, attracting a diverse range of families and individuals.
            </p>
          </div>

          {/* Properties Count */}
          <div className="properties-count">
            Showing {Math.min(visibleCount, commercialProperties.length)} of {commercialProperties.length} commercial properties
          </div>

          {commercialProperties.length === 0 ? (
            <div className="no-properties">
              No commercial properties found. Check back later for new listings.
            </div>
          ) : (
            <>
              <div className="properties-grid">
                {commercialProperties.slice(0, visibleCount).map(property => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>
              
              {/* Load More Button */}
              {hasMoreProperties && (
                <div className="load-more-container">
                  <button onClick={loadMore} className="load-more-btn">
                    Load More Properties ({commercialProperties.length - visibleCount} remaining)
                  </button>
                </div>
              )}

              {/* Show message when all properties are loaded */}
              {!hasMoreProperties && commercialProperties.length > 0 && (
                <div className="load-more-container">
                  <p style={{color: 'var(--gray)', fontSize: '1.1rem'}}>
                     All {commercialProperties.length} commercial properties loaded!
                  </p>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="commercial-container">
          <h2 className="slider-title">Stay Updated</h2>
          <p className="slider-subtitle">
            Subscribe to our newsletter to receive updates on new commercial properties and investment opportunities.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" className="newsletter-input" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialPropertiesPage;