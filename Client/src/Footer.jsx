
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMobileAlt, 
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faFacebook, 
  faInstagram, 
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const handleFooterLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  return (
    <footer className="rr-footer">
      {/* Main Footer Content */}
      <div className="rr-footer-main">
        <div className="rr-footer-container">
          {/* Company Info Column */}
          <div className="rr-footer-column">
            <div className="rr-footer-logo">
              <img 
                src="/Images/infinity_logo.png" 
                alt="Infinity logo" 
              />
              {/* Infinity */}
            </div>
            <p className="rr-footer-description">
              Your pathway to real estate success. Unmatched expertise, personalized solutions, and your dream property, all in one place.
            </p>
            
            <div className="rr-social-links">
              <a href="www.linkedin.com/in/rakesh-kumar-1aba1a57" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/rajlakshmirealty" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579222262692" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div className="rr-footer-column">
            <h3>Quick Links</h3>
            <ul className="rr-footer-links">
              <li><Link to="/Termcondation" onClick={handleFooterLinkClick}>Terms & Conditions</Link></li>
              <li><Link to="/Privacy" onClick={handleFooterLinkClick}>Privacy Policy</Link></li>
              <li><Link to="/Disclaimer" onClick={handleFooterLinkClick}>Disclaimer</Link></li>
              <li><Link to="/About" onClick={handleFooterLinkClick}>About Us</Link></li>
              <li><Link to="/Contact" onClick={handleFooterLinkClick}>Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Latest Listings Column */}
          <div className="rr-footer-column">
            <h3>Latest Listings</h3>
            <div className="rr-listing-item">
              <div className="rr-listing-image">
                <img src="https://rajlakshmirealty.com/wp-content/uploads/2023/09/tata1.webp" alt="Eureka Park" />
              </div>
              <div className="rr-listing-info">
                <h4>EUREKA PARK</h4>
                <p>INR 1.05 Cr*</p>
              </div>
            </div>
            
            <div className="rr-listing-item">
              <div className="rr-listing-image">
                <img src="https://rajlakshmirealty.com/wp-content/uploads/2023/09/joyous-300x180.jpg" alt="CRC Joyous" />
              </div>
              <div className="rr-listing-info">
                <h4>CRC JOYOUS</h4>
                <p>INR 59.90 Lacs*</p>
              </div>
            </div>
            
            <div className="rr-listing-item">
              <div className="rr-listing-image">
                <img src="https://rajlakshmirealty.com/wp-content/uploads/2023/09/CRC1C-300x169.webp" alt="The Flagship" />
              </div>
              <div className="rr-listing-info">
                <h4>THE FLAGSHIP</h4>
                <p>INR 18 Lacs*</p>
              </div>
            </div>
          </div>
          
          {/* Contact Info & Newsletter Column */}
          <div className="rr-footer-column">
            <h3>Contact Info</h3>
            <div className="rr-contact-info">
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>G004, Tower D, Golf City, Plot No 8, Sector 75, Noida- 201301</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faMobileAlt} />
                <span>+91-9871967601</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>support@Infinityrealty.com</span>
              </p>
            </div>
            
            <div className="rr-newsletter">
              <h3>Subscribe to our Newsletter</h3>
              <p>Get the latest updates on new properties and offers</p>
              <form className="rr-newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required 
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="rr-footer-bottom">
        <div className="rr-footer-container">
          
          <p>&copy; 2025 All rights reserved By: Ciphershield technologies.
             {/* <Link to="/Policy"  onClick={handleFooterLinkClick}> Privacy-Policy <b>|</b></Link>
          <Link to="/ReturnPolicy"  onClick={handleFooterLinkClick}> Return-Policy <b>|</b></Link> */}
          </p>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;