// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faPhone, faEnvelope, faBars, faTimes, faCaretDown 
// } from '@fortawesome/free-solid-svg-icons';
// import { 
//   faLinkedin, faFacebook, faInstagram, faYoutube, faTwitter
// } from '@fortawesome/free-brands-svg-icons';
// import { NavLink } from "react-router-dom";   

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const toggleDropdown = (dropdown) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);

//       setTimeout(() => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     }, 100);
//   };

//     const handleFooterLinkClick = () => {
//         setActiveDropdown(null);
//     setIsMenuOpen(false);

//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth' 
//     });
//   };

//   const handleDropdownLinkClick = () => {
//     // Close dropdown and menu when dropdown link is clicked
//     setActiveDropdown(null);
//     setIsMenuOpen(false);
    
//     // Scroll to top
//     setTimeout(() => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     }, 100);
//   };

//   return (
//     <div className="navbar-container">
//       {/* Top info bar */}
//       <div className="top-info-bar">
//         <div className="info-content">
//           <div className="contact-info">
//             <span className="info-item">
//               <FontAwesomeIcon icon={faPhone} className="info-icon" />
//              9899282878
//             </span>
//             <span className="info-item">
//               <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
//               support@infinityrealestate.estate
//             </span>
//           </div>
//           <div className="social-icons">
//           <a 
//   href="https://www.linkedin.com/in/rakesh-kumar-1aba1a57" 
//   target="_blank" 
//   rel="noopener noreferrer" 
//   onClick={handleFooterLinkClick}
// >
//   <FontAwesomeIcon icon={faLinkedin} className="social-iconl" />
// </a>
//             <a href="https://www.facebook.com/profile.php?id=61579222262692" target="_blank" rel="noopener noreferrer" onClick={handleFooterLinkClick}>
//               <FontAwesomeIcon icon={faFacebook} className="social-iconf" />
//             </a>
//             <a href="https://www.instagram.com/rak_eshgupta2/" target="_blank" rel="noopener noreferrer" onClick={handleFooterLinkClick}>
//               <FontAwesomeIcon icon={faInstagram} className="social-iconi" />
//             </a>


//             <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" onClick={handleFooterLinkClick}>
//               <FontAwesomeIcon icon={faTwitter} className="social-iconi" />
//             </a>
       
//             {/* <a href="#" target="_blank" rel="noopener noreferrer" onClick={handleFooterLinkClick}>
//               <FontAwesomeIcon icon={faYoutube} className="social-icony" />
//             </a> */}
//           </div>
//         </div>
//       </div>

//       {/* Main navigation bar */}
//       <nav className="main-nav">
//         <div className="container">
//           <div className="nav-content">
//             <div className="logo">
//               {/* <a href="/" onClick={handleFooterLinkClick}>
//               </a> */}
//               <a href="/">
//                  <img 
//                   src="/Images/infinity_logo.png" 
//                   alt="Infinity" 
//                   width="100"
//                   onClick={handleFooterLinkClick}
//                 />
//               </a>
//             </div>
            
//             <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
//               <ul className="nav-list">
//                 <li className="nav-item">
//                   <NavLink to="/" className="nav-link" onClick={handleFooterLinkClick}>Home</NavLink>
//                 </li>
                
//           <li className="nav-item dropdown">
//   <span 
//     className="nav-link dropdown-toggle" 
//     onClick={() => toggleDropdown('projects')}
//   >
//     Projects <FontAwesomeIcon icon={faCaretDown} className="dropdown-arrow" />
//   </span>
//   {activeDropdown === 'projects' && (
//     <ul className="dropdown-menu">
//       <li>
//         <NavLink 
//           to="/TopCommirical" 
//           onClick={() => setActiveDropdown(null)} 
            
//         >
//           Top Commercial Property
//         </NavLink>
//       </li>
//       <li>
//         <NavLink 
//           to="/ResidentialProperty" 
//           onClick={() => setActiveDropdown(null)}  
//         >
//           Top Residential Property
//         </NavLink>
//       </li>
//       {/* <li>
//         <NavLink 
//           to="/LeasingPropertiesPage" 
//           onClick={() => setActiveDropdown(null)}   // 👈 dropdown band
//         >
//           Top Leasing Property
//         </NavLink>
//       </li> */}
//     </ul>
//   )}
// </li>

                
//                 <li className="nav-item">
//                   <NavLink to="/BlogCards" className="nav-link" onClick={handleFooterLinkClick}>Blogs</NavLink>
//                 </li>
                
//                 <li className="nav-item">
//                   <NavLink to="/Testimonials" className="nav-link" onClick={handleFooterLinkClick}>Testimonials</NavLink>
//                 </li>
                
//                 <li className="nav-item">
//                   <NavLink to="/about" className="nav-link" onClick={handleFooterLinkClick}>About</NavLink>
//                 </li>
                
//                 <li className="nav-item">
//                   <NavLink to="/contact" className="nav-link" onClick={handleFooterLinkClick}>Contact</NavLink>
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








import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, faEnvelope, faBars, faTimes, faCaretDown 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, faFacebook, faInstagram, faYoutube, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleLinkClick = () => {
    // Close dropdown and menu
    setActiveDropdown(null);
    setIsMenuOpen(false);
    
    // Scroll to top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const handleDropdownLinkClick = () => {
    // Close dropdown and menu when dropdown link is clicked
    setActiveDropdown(null);
    setIsMenuOpen(false);
    
    // Scroll to top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className="navbar-container">
      {/* Top info bar */}
      <div className="top-info-bar">
        <div className="info-content">
          <div className="contact-info">
            <span className="info-item">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              9899282878
            </span>
            <span className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              support@infinityrealestate.estate
            </span>
          </div>
          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/in/rakesh-kumar-1aba1a57" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-iconl" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579222262692" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faFacebook} className="social-iconf" />
            </a>
            <a href="https://www.instagram.com/rak_eshgupta2/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faInstagram} className="social-iconi" />
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faTwitter} className="social-iconi" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <a href="/" onClick={handleLinkClick}>
                <img 
                  src="/Images/infinity_logo.png" 
                  alt="Infinity" 
                  width="100"
                />
              </a>
            </div>
            
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" onClick={handleLinkClick}>
                    Home
                  </NavLink>
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
                          className="dropdown-link"
                          onClick={handleDropdownLinkClick}
                        >
                          Top Commercial Property
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          to="/ResidentialProperty" 
                          className="dropdown-link"
                          onClick={handleDropdownLinkClick}
                        >
                          Top Residential Property
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                
                <li className="nav-item">
                  <NavLink to="/BlogCards" className="nav-link" onClick={handleLinkClick}>
                    Blogs
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink to="/Testimonials" className="nav-link" onClick={handleLinkClick}>
                    Testimonials
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" onClick={handleLinkClick}>
                    About
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" onClick={handleLinkClick}>
                    Contact
                  </NavLink>
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