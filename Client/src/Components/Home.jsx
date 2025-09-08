import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronLeft, faChevronRight, faMapMarkerAlt, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import StatsSection from './StatsSection';



import noidaImage from '/Images/noida.jpg';
import greaterNoidaImage from '/Images/GREATERNOIDA.jpg';
import gurgaonImage from '/Images/gurgaon.jpg';
import dubaiImage from '/Images/dubai.jpg';
// import noidaImage from '/Images/noida.png';
const home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Background images array
  const backgroundImages = [
    "/Images/HomeBanner2.jpg",
    "/Images/HomeBanner3.jpg",
    "/Images/heros.jpg",
    "/Images/bildings.jpg",
    // "https://rajlakshmirealty.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-26-at-14.57.00.jpeg"
  ];


  const properties = [
    {
      id: 1,
       title: "County 107",
      location: "SECTOR 107, NOIDA",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/county-107.jpg",
      link: "#"
     
    },
    {
      id: 2,
       title: "Godrej Wood",
      location: "Sector 43, Noida",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/godrej-woods.jpg",
      link: "#"
   
    },
    {
      id: 3,
      title: "THE FLAGSHIP",
      location: "Sector 140A, Noida Expressway",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/CRC1C-1024x576.webp",
      link: "#"
    },
    {
      id: 4,
        title: "CRC JOYOUS",
      location: "Techzone 1V, Greater Noida West",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/joyous-1024x614.jpg",
      link: "#"
    },
    {
      id: 5,
       title: "Tata Eureka",
      location: "Sector 150, Noida, UP",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/tata1.webp",
      link: "#"
    }
  ];



 const locations = [
    {
      id: 1,
       name: "GURGAON",
      image: gurgaonImage,
      description: "Commercial hub with world-class business districts",
      properties: "156+ Properties"
    },
    {
      id: 2,
     name: "DUBAI",
      image: dubaiImage,
      description: "Luxury properties in the global cosmopolitan city",
      properties: "72+ Properties"
    },
    {
      id: 3,
       name: "NOIDA",
      image: noidaImage,
      description: "Premium real estate opportunities in the heart of Noida",
      properties: "125+ Properties"
   
    },
    {
      id: 4,
      name: "GREATER NOIDA",
      image: greaterNoidaImage,
      description: "Expanding horizons with modern infrastructure and connectivity",
      properties: "89+ Properties"
    
    }
  ];

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (e, id) => {
    console.error(`Image failed to load for location ${id}`);
    // Fallback to placeholder image
    const locationName = locations.find(loc => loc.id === id)?.name || 'Location';
    e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=${locationName}`;
    
    // Also remove loading background if image fails
    e.target.parentElement.classList.add('loaded');
  };

  // Check if images exist in public folder
  const checkImageExists = (imagePath) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imagePath;
    });
  };

  const statsData = [
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'TIE-UPS',
      description: 'With a network comprising with channel partners, our organization has gained a reputation for collaborating with credible and highly esteemed business entities.'
    },
    {
      icon: 'fas fa-people-arrows',
      title: 'EXPERTS',
      description: 'Our team comprises of over 50+ highly qualified and extensively trained real estate professionals who are committed to providing exceptional service and delivering optimal results to our valued clients.'
    },
    {
       icon: 'fas fa-handshake',
      title: 'CUSTOMERS',
      description: 'Our real estate agency has earned the satisfaction of 1,000 clients who consistently return, reflecting their unwavering trust in our property services.'
     
    }
  ];


    const partners = [
    {
      id: 1,
     name: "Tata Housing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/08/Screenshot-2023-08-28-120016.png"
    },
    {
      id: 2,
        name: "DLF",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/08/Screenshot-2023-08-28-120037.png"
    },
    {
      id: 3,
          name: "Tata Housing",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/1678530097-e1695713450853.png"
    },
    {
      id: 4,
       name: "M3M",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/08/m3m_230x69.png"
     
    },
    {
      id: 5,
       name: "Signature Global",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/08/Screenshot-2023-08-28-115720.png"
    
    },
    {
      id: 6,
      name: "Sobha Limited",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/08/Screenshot-2023-08-28-120117.png"
    },
    {
      id: 7,
      name: "Godrej Properties",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/08/Screenshot-2023-08-28-115902.png"

    },
    {
      id: 8,
      name: "CRC Group",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/1234-1.png"
    },
    {
      id: 9,
      name: "Eldeco",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/ddd-e1695713109740.jpg"
    }
  ];



    const blogPosts = [
    {
      id: 1,
       title: "How to choose your first Property?",
      description: "There are many things to consider before purchasing your first property.",
      link: "https://rajlakshmirealty.com/1589-2/",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60",
      buttonText: "Click Here",
      date: "Sep 4, 2023",
      readTime: "5 min read"
    
    },
    {
      id: 2,
      title: "Why Invest in Delhi?",
      description: "Delhi is one of the best City to live in India.",
      link: "https://rajlakshmirealty.com/why-invest-in-delhi/",
      image: "/Images/blog2.jpg",
      buttonText: "Click Here",
      date: "Sep 4, 2023",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Benefits of living in Incuspaze Tower?",
      description: "INCUSPAZE TOWER is a project With the luxurious residential development,",
      link: "#",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60",
      buttonText: "Click Here",
      date: "Sep 4, 2023",
      readTime: "3 min read"
    }
  ];
  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / slidesToShow()));
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + Math.ceil(partners.length / slidesToShow())) % Math.ceil(partners.length / slidesToShow()));
  // };

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  const slidesToShow = () => {
    if (window.innerWidth >= 1200) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 480) return 2;
    return 1;
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Reset current slide on resize to prevent empty spaces
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgroundImages.length);
    }, 9000);
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);


 useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);


  return (
    <div>
        <section className="hero-sections">
      {/* Background Slideshow */}
      <div className="hero-background">
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* <h1 className="hero-title">Lets Discover your dream properties</h1> */}
          <h1 className="hero-title">Discover Your Dream Property Today </h1>
          
          {/* Search Form */}
          <form className="hero-search-form" role="search">
            <div className="search-container">
              <label htmlFor="property-search" className="screen-reader-only">Search properties</label>
              <input 
                id="property-search"
                type="search" 
                placeholder="Search by City, Location, Project, Developer" 
                className="search-input"
              />
              <button type="submit" className="search-button" aria-label="Search">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
          
          {/* Property Types */}
          <div className="property-types">
            <p>
              <a href="/ResidentialProperty">RESIDENTIAL</a> / 
              <a href="/TopCommirical">COMMERCIAL</a> / 
              <a href="/LeasingPropertiesPage">LEASING SPACE</a>
            </p>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="hero-buttons">
            <div className="button-wrapper">
              <a href="#" className="cta-button explore-button">
                Explore More Properties
              </a>
            </div>
            <div className="button-wrapper">
              <a href="#Contact" className="cta-button callback-button">
                Get a Call Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
       {/* <section className="exclusive-projects-section">
      <div className="container">
        <div className="exclusive-projects-content">
          <div className="section-header">
            <h2 className="section-title">EXCLUSIVE PROJECTS</h2>
            <h5 className="section-subtitle">Most Acclaimed Properties on Rajlakshmi Realty</h5>
          </div>
        </div>
      </div>
    </section> */}


    <section className="property-slider-section">
      <div className="container">
        <div className="slider-header">
          <h2 className="slider-title">EXCLUSIVE PROJECTS</h2>
          {/* <p className="slider-subtitle">Most Acclaimed Properties on Rajlakshmi Realty</p> */}
          <p className="slider-subtitle">Discover the Finest Developments by Infinity</p>

        </div>

        <div className="property-slider">
          <div className="slider-container">
            <div 
              className="slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {properties.map((property, index) => (
                <div key={property.id} className="slides">
                  <div className="property-card">
                    <div className="property-image">
                      <img src={property.image} alt={property.title} />
                      <div className="property-overlay">
                        <a href={property.link} className="view-details-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                    <div className="property-content">
                      <h3 className="property-title">{property.title}</h3>
                      <div className="property-location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>{property.location}</span>
                      </div>
                      <a href={property.link} className="property-link">
                        SEE DETAILS
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="slider-nav slider-prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="slider-nav slider-next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Pagination Dots */}
          <div className="slider-pagination">
            {properties.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="slider-footer">
          <a href="#all-properties" className="view-all-btn">
            View All Properties
          </a>
        </div>
      </div>
    </section>



  
<section>
      <div className="services-section">
      <div className="slider-header">
          {/* <h2 className="slider-title">TOP RESIDENTIAL PROPERTY</h2> */}
          <h2 className="slider-title">Best Residential Spaces in India</h2>

          {/* <p className="slider-subtitle">Searching for your sweet Home? Have a look at our Top Residential Projects in India</p> */}
          <p className="slider-subtitle">Explore the most acclaimed residential developments across India</p>
        
        </div>

        <div className="services-grids">
          <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/start1.05CR.jpeg')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at 1.05 CR</h3>
                <p className="card-description">
                  Eureka Park, SECTOR 150, Noida
                </p>
                <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/starting59.90Lac.jpg')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at 59.90 Lacs*</h3>
                <p className="card-description">
CRC JOYOUS, Techzone IV, Greater Noida West
                </p>
                  <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/fastProcasing.jpg')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at 3 CR</h3>
                <p className="card-description">
                  ELDECO ACCLAIM, Sohna Gurgaon
                </p>
                  <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/End_to_EndService.jpg')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at ₹ 1.50 CR</h3>
                <p className="card-description">
IVY COUNTY, Sec 75, Noida
                </p>
                  <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>


            <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/supports.webp')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at ₹ 8.50 CR</h3>
                <p className="card-description">
                 MAX STATES, Sec 128, Noida
                </p>
                <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>


            <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/supports.webp')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at ₹ 1.26 CR</h3>
                <p className="card-description">
                  STELLAR ONE PHASE 2, SECTOR 1, NOIDA
                </p>
                <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>



            <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/supports.webp')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at ₹ 1.35 CR</h3>
                <p className="card-description">
                  Godrej Woods, Sec 43, Noida
                </p>
                <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>



            <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/supports.webp')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at ₹ 3.75 CR</h3>
                <p className="card-description">
                  Godrej Tropical Isle, Sec 146, Noida
                </p>
                <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>



            <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/supports.webp')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at ₹ 5.88 CR</h3>
                <p className="card-description">
                 M3M THE CULLINAN, SECTOR 94, NOIDA
                </p>
                <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



<section>
  <div className="new-services-section">
     <div className="slider-header">
          {/* <h2 className="slider-title">TOP COMMERCIAL PROPERTY</h2> */}
          <h2 className="slider-title">Best Commercial Projects in India</h2>

          <p className="slider-subtitle">Find premium commercial properties across India’s top business hubs.</p>
        </div>

    <div className="new-services-grid">
      <div className="new-service-card">
        <div
          className="new-card-image"
          style={{ backgroundImage: "url('/Images/starting18Lac.jpeg')" }}
        >
          <div className="new-card-content">
            <span className="new-card-category">Starting</span>
            <h3 className="new-card-title">Starting at 18 Lacs*</h3>
            <p className="new-card-description">
              THE FLAGSHIP, Sector 140a, Noida Expressway
            </p>
            <button className="new-card-btn">SEE PROPERTY</button>
          </div>
        </div>
      </div>

      <div className="new-service-card">
        <div
          className="new-card-image"
          style={{ backgroundImage: "url('/Images/Affordble.Webp')" }}
        >
          <div className="new-card-content">
            <span className="new-card-category">Starting</span>
            <h3 className="new-card-title">Starting at 1.37 CR</h3>
            <p className="new-card-description">
             M3M MY DEN, SECTOR-67, GURGAON
            </p>
                    <button className="new-card-btn">SEE PROPERTY</button>

          </div>
        </div>
      </div>

      <div className="new-service-card">
        <div
          className="new-card-image"
          style={{ backgroundImage: "url('/Images/fastProcasing.jpg')" }}
        >
          <div className="new-card-content">
            <span className="new-card-category">Starting</span>
            <h3 className="new-card-title">Starting at 1.70 CR</h3>
            <p className="new-card-description">
              SIGNATURE GLOBAL, SECTOR-36, GURGAON
            </p>
            <button className="new-card-btn">SEE PROPERTY</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>




<section>
      <div className="services-section">
      <div className="slider-header">
          {/* <h2 className="slider-title">TOP LEASING PROPERTY</h2> */}
          <h2 className="slider-title">Leasing Properties in Prime Locations</h2>

          {/* <p className="slider-subtitle">Explore our range of leasing properties for comfortable and convenient living options</p> */}
          <p className="slider-subtitle">Smart, affordable, and premium leasing properties – all in one place.</p>
        
        </div>

        <div className="services-grids">
          <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/supports.webp')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at 7000 INR</h3>
                <p className="card-description">
                 INCUSPAZE TOWER, SOHNA ROAD, GURGAON
                </p>
                <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/Affordble.Webp')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at 13,000 INR</h3>
                <p className="card-description">
WORKBEE MEGAPOLIS, SECTOR-48, GURGAON
                </p>
                  <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/fastProcasing.jpg')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at 17,000 INR</h3>
                <p className="card-description">
                 THE OFFICE PASS, SECTOR- 70, GURGAON
                </p>
                  <div className='buttonSttyle'>
<a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>



     <section className="locations-gallery">
      {/* <div className="gallery-container"> */}
        <div className="gallery-header">
          {/* <h2 className="gallery-title">MOST POPULAR PLACES</h2> */}
          <h2 className="gallery-title">Top Trending Locations</h2>

          {/* <p className="gallery-subtitle">Discover premium properties in the most sought-after locations</p> */}
          <p className="gallery-subtitle">Find your dream property in India’s most popular areas</p>
       
        </div>

        <div className="locations-grid">
          {locations.map((location, index) => (
            <div 
              key={location.id} 
              className="location-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`location-image ${loadedImages[location.id] ? 'loaded' : ''}`}>
                <img 
                  src={location.image} 
                  alt={location.name}
                  loading="lazy"
                  onLoad={() => handleImageLoad(location.id)}
                  onError={(e) => handleImageError(e, location.id)}
                />
                <div className="location-badge">
                  <span>{location.properties}</span>
                </div>
                <div className="location-overlay">
                  <div className="location-content">
                    <h3 className="location-name">{location.name}</h3>
                    <p className="location-description">{location.description}</p>
                    <button className="explore-btn">
                      Explore Properties
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="location-footer">
                <h3 className="location-title">{location.name}</h3>
                <span className="location-properties">{location.properties}</span>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="gallery-footer">
          <a href="#all-locations" className="view-all-btn">
            View All Locations
            <span className="btn-arrow">→</span>
          </a>
        </div> */}
      {/* </div> */}
    </section>


<section className="whychoose">
  <div className="why-header">
    {/* <h2>
      Why Choose <span>Rajlakshmi Realty?</span>
    </h2> */}
      <h2>
       The <span>Infinity</span>Advantage
    </h2>
    {/* <p>Your trusted partner for real estate excellence</p> */}
    <p>Delivering trust, transparency, and top-quality properties.</p>

  </div>

  <div className="why-wrapper">
    {/* Block 1 */}
    <div className="why-block">
      <div className="why-img">
        <img
          src="/Images/infinity_logo.png"
          alt="Infinity Realty Logo"
        />
      </div>
      <div className="why-info">
        <h3>Our Legacy of Excellence</h3>
        <p>
          <strong>Infinity Realty</strong> brings years of trusted expertise in
          <strong> Residential</strong>, <strong>Commercial</strong> and
          <strong> Leasing</strong> properties, ensuring every client receives
          unmatched service.
        </p>
      </div>
    </div>

    {/* Block 2 (Real Estate Icon) */}
    <div className="why-block reverse">
      <div className="why-img">
        <img
          src="https://img.icons8.com/color/512/real-estate.png"
          alt="Real Estate Icon"
        />
      </div>
      <div className="why-info">
        <h3>Personalized Expertise</h3>
        <p>
          Our seasoned professionals provide tailored solutions — from dream
          homes to office spaces, warehouses, and retail outlets.
        </p>
      </div>
    </div>

    {/* Block 3 (Trust Icon) */}
    <div className="why-block">
      <div className="why-img">
        <img
          src="https://img.icons8.com/color/512/handshake.png"
          alt="Trust Icon"
        />
      </div>
      <div className="why-info">
        <h3>Transparent & Trusted</h3>
        <p>
          With clear processes, ethical values, and a client-first mindset, we
          make your real estate journey smooth and reliable.
        </p>
      </div>
    </div>
  </div>
</section>


<StatsSection 
  data={statsData}
  title="Our Strengths"
  backgroundColor="#f1faee"
  accentColor="#1d3557"
/>


 {/* Testimonials Section */}
      <section className="testimonial-section">
        <div className="container">
           <div className="gallery-header">
          <h2 className="gallery-title">TESTIMONIALS</h2>
          
        </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Our journey to find the perfect home was made seamless and enjoyable by Infinity Realty. Their team's expertise and dedication to understanding our needs helped us find a property that exceeded our expectations."
                </p>
                <div className="testimonial-author">
                  <span>— Ritik Bansal</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-icon">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "I had the pleasure of working with Infinity Realty to find an apartment that suited both my lifestyle and budget. Their agents were knowledgeable and patient, making the entire process smooth."
                </p>
                <div className="testimonial-author">
                  <span>— Kritika Sharma</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-icon">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Investing in real estate can be daunting, but Infinity Realty made the process remarkably smooth. Their team's ethical values instilled confidence in my investment."
                </p>
                <div className="testimonial-author">
                  <span>— Sanjana Tiwari</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




  <section className="partners-section">
      {/* <div className="container"> */}
        <div className="partners-header">
          <h2 className="partners-title">OUR PARTNERS</h2>
        </div>

        <div className="partners-carousel">
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / slidesToShow())}%)`,
                gridTemplateColumns: `repeat(${partners.length}, calc(${100 / slidesToShow()}% - ${(10 * (slidesToShow() - 1)) / slidesToShow()}px))`
              }}
            >
              {partners.map((partner, index) => (
                <div key={partner.id} className="partner-slide">
                  <div className="partner-logo">
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-nav carousel-prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-nav carousel-next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Pagination Dots */}
          <div className="carousel-pagination">
            {Array.from({ length: Math.ceil(partners.length / slidesToShow()) }).map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        {/* </div> */}
      </div>
    </section>



     <section className="rl-blog-section">
      <div className="rl-container">
        <div className="rl-section-header">
          <h2 className="rl-section-title">Featured Insights</h2>
          <p className="rl-section-subtitle">
            Discover the latest trends and insights in real estate industry
          </p>
        </div>

        <div className="rl-blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="rl-blog-card">
              <div className="rl-card-image">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="rl-card-img"
                />
                <div className="rl-image-overlay"></div>
                <div className="rl-card-badge">
                  <span>Featured</span>
                </div>
              </div>
              
              <div className="rl-card-content">
                <div className="rl-card-meta">
                  <span className="rl-meta-date">{post.date}</span>
                  <span className="rl-meta-dot">•</span>
                  <span className="rl-meta-readtime">{post.readTime}</span>
                </div>
                
                <h3 className="rl-card-title">
                  <a href={post.link}>{post.title}</a>
                </h3>
                
                <p className="rl-card-description">{post.description}</p>
                
                <div className="rl-card-footer">
                  <a href={post.link} className="rl-card-button">
                    {post.buttonText}
                    <svg className="rl-btn-arrow" viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rl-section-footer">
          <a href="/BlogCards" className="rl-view-all-button">
            View All Articles
            <svg className="rl-btn-arrow" viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>


    </div>
  )
}

export default home
