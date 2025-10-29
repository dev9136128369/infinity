
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faMobileAlt, 
//   faEnvelope,
//   faMapMarkerAlt,
//   faPaperPlane
// } from '@fortawesome/free-solid-svg-icons';
// import { 
//   faLinkedin, 
//   faFacebook, 
//   faInstagram, 
//   faYoutube,
//   faTwitter
// } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//     const handleFooterLinkClick = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth' 
//     });
//   };
//   return (
//     <footer className="rr-footer">
//       {/* Main Footer Content */}
//       <div className="rr-footer-main">
//         <div className="rr-footer-container">
//           {/* Company Info Column */}
//           <div className="rr-footer-column">
//             <div className="rr-footer-logo">
//               <img 
//                 src="/Images/infinity_logo.png" 
//                 alt="Infinity logo" 
//               />
//               {/* Infinity */}
//             </div>
//             <p className="rr-footer-description">
//               Your pathway to real estate success. Unmatched expertise, personalized solutions, and your dream property, all in one place.
//             </p>
            
//             <div className="rr-social-links">
//               <a href="www.linkedin.com/in/rakesh-kumar-1aba1a57" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faLinkedin} />
//               </a>
//               <a href="https://www.instagram.com/rajlakshmirealty" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faInstagram} />
//               </a>
//               <a href="https://www.facebook.com/profile.php?id=61579222262692" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faFacebook} />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faYoutube} />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faTwitter} />
//               </a>
//             </div>
//           </div>
          
//           {/* Quick Links Column */}
//           <div className="rr-footer-column">
//             <h3>Quick Links</h3>
//             <ul className="rr-footer-links">
//               <li><Link to="/Termcondation" onClick={handleFooterLinkClick}>Terms & Conditions</Link></li>
//               <li><Link to="/Privacy" onClick={handleFooterLinkClick}>Privacy Policy</Link></li>
//               <li><Link to="/Disclaimer" onClick={handleFooterLinkClick}>Disclaimer</Link></li>
//               <li><Link to="/About" onClick={handleFooterLinkClick}>About Us</Link></li>
//               <li><Link to="/Contact" onClick={handleFooterLinkClick}>Contact Us</Link></li>
//             </ul>
//           </div>
          
//           {/* Latest Listings Column */}
//           <div className="rr-footer-column">
//             <h3>Latest Listings</h3>
//             <div className="rr-listing-item">
//               <div className="rr-listing-image">
//                 <img src="/Images/EurekaPark.jpg" alt="Eureka Park" />
//               </div>
//               <div className="rr-listing-info">
//                 <h4>EUREKA PARK</h4>
//                 <p>INR 1.05 Cr*</p>
//               </div>
//             </div>
            
//             <div className="rr-listing-item">
//               <div className="rr-listing-image">
//                 <img src="/Images/CRCJOYOUS.jpg" alt="CRC Joyous" />
//               </div>
//               <div className="rr-listing-info">
//                 <h4>CRC JOYOUS</h4>
//                 <p>INR 59.90 Lacs*</p>
//               </div>
//             </div>
            
//             <div className="rr-listing-item">
//               <div className="rr-listing-image">
//                 <img src="/Images/THEFLAGSHIP.jpg" alt="The Flagship" />
//               </div>
//               <div className="rr-listing-info">
//                 <h4>THE FLAGSHIP</h4>
//                 <p>INR 18 Lacs*</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Info & Newsletter Column */}
//           <div className="rr-footer-column">
//             <h3>Contact Info</h3>
//             <div className="rr-contact-info">
//               <p>
//                 <FontAwesomeIcon icon={faMapMarkerAlt} />
//                 <span>G004, Tower D, Golf City, Plot No 8, Sector 75, Noida- 201301</span>
//               </p>
//               <p>
//                 <FontAwesomeIcon icon={faMobileAlt} />
//                 <span>+91-9871967601</span>
//               </p>
//               <p>
//                 <FontAwesomeIcon icon={faEnvelope} />
//                 <span>support@Infinityrealty.com</span>
//               </p>
//             </div>
            
//             <div className="rr-newsletter">
//               <h3>Subscribe to our Newsletter</h3>
//               <p>Get the latest updates on new properties and offers</p>
//               <form className="rr-newsletter-form">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email address" 
//                   required 
//                 />
//                 <button type="submit">
//                   <FontAwesomeIcon icon={faPaperPlane} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Copyright Section */}
//       <div className="rr-footer-bottom">
//         <div className="rr-footer-container">
          
//           <p>&copy; 2025 All rights reserved By: Ciphershield technologies.
//              {/* <Link to="/Policy"  onClick={handleFooterLinkClick}> Privacy-Policy <b>|</b></Link>
//           <Link to="/ReturnPolicy"  onClick={handleFooterLinkClick}> Return-Policy <b>|</b></Link> */}
//           </p>
//         </div>
//       </div>
//     </footer> 
//   );
// };

// export default Footer;








import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handleFooterLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const styles = {
    footer: {
      background: "#00628c",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
      marginTop: "80px",
      clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
    },
    container: {
      maxWidth: "1500px",
      margin: "auto",
      padding: "60px 20px 30px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "40px",
    },
    column: {
      flex: "1 1 250px",
      minWidth: "250px",
      fontSize: "1.7rem",
marginTop: "2rem",
textAlign: "start"
    }, 
    icon: {
marginTop: "5rem",
    },

    logoImg: { maxWidth: "160px", marginBottom: "20px" },
    desc: {
      fontSize: "1.2rem",
      color: "#ddddddff",
      lineHeight: "1.6",
      marginBottom: "20px",
    },
    socials: {
      display: "flex",
      gap: "12px",
      marginLeft: "6rem",
    },
    socialCircle: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#fff",
      color: "#f97316",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      transition: "0.3s",
      cursor: "pointer",
    
    },
    link: {
      display: "block",
      color: "#fff",
      textDecoration: "none",
      fontSize: "1.2rem",
      marginBottom: "10px",
      transition: "0.3s",
    },
    listingCard: {
      background: "#222",
      borderRadius: "10px",
      overflow: "hidden",
      width: "180px",
      boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
      marginBottom: "15px",
    },
    listingImg: { width: "100%", height: "100px", objectFit: "cover" },
    listingInfo: { padding: "10px 12px" },
    listingTitle: { fontSize: "15px", fontWeight: "600", margin: 0 },
    listingPrice: { fontSize: "13px", color: "#aaa", marginTop: "4px" },
    contact: {
      fontSize: "1.2rem",
      marginBottom: "10px",
      display: "flex",
      // alignItems: "center",
      gap: "8px",
    },
    newsletterForm: {
      display: "flex",
      background: "#fff",
      borderRadius: "40px",
      overflow: "hidden",
      marginTop: "12px",
    },
    input: {
      flex: 1,
      padding: "12px 15px",
      border: "none",
      outline: "none",
      fontSize: "14px",
      color: "#333",
    },
    button: {
      background: "rgb(212, 175, 55)",
      border: "none",
      padding: "0 20px",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
    },
    bottom: {
      marginTop: "20px",
      padding: "10px",
      fontSize: ".8rem",
      borderTop: "1px solid rgba(255,255,255,0.2)",
      textAlign: "center",
      background: "black"
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Column 1: Logo & Socials */}
        <div style={styles.column}>
          <img src="/Images/infinity_logo.png" alt="Infinity Logo" style={styles.logoImg} />
          <p style={styles.desc}>
            Your pathway to real estate success. Unmatched expertise, personalized
            solutions, and your dream property, all in one place.
          </p>
          {/* <div style={styles.socials}>
            <div style={styles.socialCircle}><FontAwesomeIcon icon={faLinkedin} /></div>
            <div style={styles.socialCircle}><FontAwesomeIcon icon={faInstagram} /></div>
            <div style={styles.socialCircle}><FontAwesomeIcon icon={faFacebook} /></div>
            <div style={styles.socialCircle}><FontAwesomeIcon icon={faYoutube} /></div>
            <div style={styles.socialCircle}><FontAwesomeIcon icon={faTwitter} /></div>
          </div> */}
        </div>

        {/* Column 2: Quick Links */}
        <div style={styles.column}>
          <h3>Quick Links</h3>
          <Link to="/Termcondation" onClick={handleFooterLinkClick} style={styles.link}>Terms & Conditions</Link>
          <Link to="/Privacy" onClick={handleFooterLinkClick} style={styles.link}>Privacy Policy</Link>
          <Link to="/Disclaimer" onClick={handleFooterLinkClick} style={styles.link}>Disclaimer</Link>
          <Link to="/About" onClick={handleFooterLinkClick} style={styles.link}>About Us</Link>
          <Link to="/Contact" onClick={handleFooterLinkClick} style={styles.link}>Contact Us</Link>
        </div>

        {/* Column 3: Featured Listings */}
        {/* <div style={styles.column}>
          <h3>Featured Listings</h3>
          <div style={styles.listingCard}>
            <img src="/Images/EurekaPark.jpg" alt="Eureka Park" style={styles.listingImg} />
            <div style={styles.listingInfo}>
              <h4 style={styles.listingTitle}>EUREKA PARK</h4>
              <p style={styles.listingPrice}>INR 1.05 Cr*</p>
            </div>
          </div>
          <div style={styles.listingCard}>
            <img src="/Images/CRCJOYOUS.jpg" alt="CRC Joyous" style={styles.listingImg} />
            <div style={styles.listingInfo}>
              <h4 style={styles.listingTitle}>CRC JOYOUS</h4>
              <p style={styles.listingPrice}>INR 59.90 Lacs*</p>
            </div>
          </div>
        </div> */}

        {/* Column 4: Contact & Newsletter */}
        <div style={styles.column}>
          <h3>Contact Info</h3>
          <p style={styles.contact}><FontAwesomeIcon icon={faMapMarkerAlt} /> D -004, Golf City , Plot No -8
<br/> Gate No -1, Noida -201301</p>
          <p style={styles.contact}><FontAwesomeIcon icon={faMobileAlt} /> +91-9899282878</p>
          <p style={styles.contact}><FontAwesomeIcon icon={faEnvelope} /> support@infinityrealestate.estate </p>

          <h3 style={{ marginTop: "20px" }}>Newsletter</h3>
          <form style={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required style={styles.input} />
            <button type="submit" style={styles.button}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        <p>&copy; 2025 All rights reserved By: <a href="https://www.ciphershieldtech.com/" className="links"><b>Ciphershield Technologies.</b></a></p>
      </div>
    </footer>
  );
};

export default Footer;
