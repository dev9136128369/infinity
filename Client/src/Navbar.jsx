import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, faEnvelope, faBars, faTimes, faCaretDown 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, faFacebook, faInstagram, faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";   // 👈 yaha import kare

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);

      setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

    const handleFooterLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div className="navbar-container">
      {/* Top info bar */}
      <div className="top-info-bar">
        <div className="info-content">
          <div className="contact-info">
            <span className="info-item">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              9871967601
            </span>
            <span className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              support@infinityrealestate.estate
            </span>
          </div>
          <div className="social-icons">
            <a href="www.linkedin.com/in/rakesh-kumar-1aba1a57" target="_blank" rel="noopener noreferrer" onClick={handleFooterLinkClick}>
              <FontAwesomeIcon icon={faLinkedin} className="social-iconl" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579222262692" target="_blank" rel="noopener noreferrer" onClick={handleFooterLinkClick}>
              <FontAwesomeIcon icon={faFacebook} className="social-iconf" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" onClick={handleFooterLinkClick}>
              <FontAwesomeIcon icon={faInstagram} className="social-iconi" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" onClick={handleFooterLinkClick}>
              <FontAwesomeIcon icon={faYoutube} className="social-icony" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              {/* <a href="/" onClick={handleFooterLinkClick}>
              </a> */}
              <a href="/">
                 <img 
                  src="/Images/infinity_logo.png" 
                  alt="Infinity" 
                  width="100"
                  onClick={handleFooterLinkClick}
                />
              </a>
            </div>
            
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" onClick={handleFooterLinkClick}>Home</NavLink>
                </li>
                
          <li className="nav-item dropdown">
  <span 
    className="nav-link dropdown-toggle" 
    onClick={() => toggleDropdown('projects')}
  >
    Projects <FontAwesomeIcon icon={faCaretDown} className="dropdown-arrow" />
  </span>
  {activeDropdown === 'projects' && (
    <ul className="dropdown-menu">
      <li>
        <NavLink 
          to="/TopCommirical" 
          onClick={() => setActiveDropdown(null)}   // 👈 dropdown band
        >
          Top Commercial Property
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/ResidentialProperty" 
          onClick={() => setActiveDropdown(null)}   // 👈 dropdown band
        >
          Top Residential Property
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/LeasingPropertiesPage" 
          onClick={() => setActiveDropdown(null)}   // 👈 dropdown band
        >
          Top Leasing Property
        </NavLink>
      </li>
    </ul>
  )}
</li>

                
                <li className="nav-item">
                  <NavLink to="/BlogCards" className="nav-link" onClick={handleFooterLinkClick}>Blogs</NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink to="/Testimonials" className="nav-link" onClick={handleFooterLinkClick}>Testimonials</NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" onClick={handleFooterLinkClick}>About</NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" onClick={handleFooterLinkClick}>Contact</NavLink>
                </li>
              </ul>
            </div>
            
            <div className="menu-toggle" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;









// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faPhone, 
//   faEnvelope, 
//   faBars, 
//   faTimes,
//   faCaretDown
// } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = (dropdown) => {
//     if (activeDropdown === dropdown) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(dropdown);
//     }
//   };

//   return (
//     <div className="navbar-container">
//       {/* Top info bar */}
//       <div className="top-info-bar">
//         <div className="info-content">
//           <div className="contact-info">
//             <span className="info-item">
//               <FontAwesomeIcon icon={faPhone} className="info-icon" />
//               9871967601
//             </span>
//             <span className="info-item">
//               <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
//               support@rajlakshmirealty.com
//             </span>
//           </div>
//           <div className="social-icons">
//             <a href="https://www.linkedin.com/company/rajlakshmirealty" target="_blank" rel="noopener noreferrer">
//               <img src="/Images/linkdin.jpg" alt="LinkedIn" className="social-img" />
//             </a>
//             <a href="https://www.facebook.com/profile.php?id=61550263776288" target="_blank" rel="noopener noreferrer">
//               <img src="/Images/Facebook.jpeg" alt="Facebook" className="social-img" />
//             </a>
//             <a href="https://www.instagram.com/rajlakshmirealty" target="_blank" rel="noopener noreferrer">
//               <img src="/Images/Insta.jpeg" alt="Instagram" className="social-img" />
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <img src="/Images/youTube.jpeg" alt="YouTube" className="social-img" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main navigation bar */}
//       <nav className="main-nav">
//         <div className="container">
//           <div className="nav-content">
//             <div className="logo">
//               <a href="https://rajlakshmirealty.com">
//                 <img 
//                   src="https://rajlakshmirealty.com/wp-content/uploads/2023/08/cropped-Untitled-design-3.png" 
//                   alt="Rajlakshmi Realty" 
//                   width="150"
//                 />
//               </a>
//             </div>
            
//             <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
//               <ul className="nav-list">
//                 <li className="nav-item">
//                   <a href="https://rajlakshmirealty.com/" className="nav-link active">Home</a>
//                 </li>
                
//                 <li className="nav-item dropdown">
//                   <span 
//                     className="nav-link dropdown-toggle" 
//                     onClick={() => toggleDropdown('projects')}
//                   >
//                     Projects <FontAwesomeIcon icon={faCaretDown} className="dropdown-arrow" />
//                   </span>
//                   {activeDropdown === 'projects' && (
//                     <ul className="dropdown-menu">
//                       <li><a href="https://rajlakshmirealty.com/top-commercial-property/">Top Commercial Property</a></li>
//                       <li><a href="https://rajlakshmirealty.com/top-residential-property/">Top Residential Property</a></li>
//                       <li><a href="https://rajlakshmirealty.com/top-leasing-property/">Top Leasing Property</a></li>
//                     </ul>
//                   )}
//                 </li>
                
//                 <li className="nav-item">
//                   <a href="https://rajlakshmirealty.com/blogs/" className="nav-link">Blogs</a>
//                 </li>
                
//                 <li className="nav-item">
//                   <a href="https://rajlakshmirealty.com/testimonials/" className="nav-link">Testimonials</a>
//                 </li>
                
//                 <li className="nav-item">
//                   <a href="https://rajlakshmirealty.com/about/" className="nav-link">About</a>
//                 </li>
                
//                 <li className="nav-item">
//                   <a href="https://rajlakshmirealty.com/contact/" className="nav-link">Contact</a>
//                 </li>
//               </ul>
//             </div>
            
//             <div className="menu-toggle" onClick={toggleMenu}>
//               <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
