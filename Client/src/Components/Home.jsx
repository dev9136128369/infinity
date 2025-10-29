import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronLeft, faChevronRight, faMapMarkerAlt, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import StatsSection from './StatsSection';

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import noidaImage from '/Images/noida.jpg';
import greaterNoidaImage from '/Images/GREATERNOIDA.jpg';
import gurgaonImage from '/Images/gurgaon.jpg';
import dubaiImage from '/Images/dubai.jpg';
// import noidaImage from '/Images/noida.png';
const home = () => {
    const width = useWindowWidth();
    const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Background images array
  const backgroundImages = [
    "/Images/HomeBanner2.jpg",
    "/Images/HomeBanner3.jpg",
    "/Images/heros.jpg",
    "/Images/bildings.jpg",
    "/Images/herose.jpg"
  ];


  const properties = [
    {
      id: 1,
      title: "County 107",
      location: "SECTOR 107, NOIDA",
      image: "/Images/County107.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Godrej Wood",
      location: "Sector 43, Noida",
      image: "/Images/GodrejWood.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "THE FLAGSHIP",
      location: "Sector 140A, Noida Expressway",
      image: "/Images/THEFLAGSHIP.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "CRC JOYOUS",
      location: "Techzone 1V, Greater Noida West",
      image: "/Images/CRCJOYOUS.jpg",
      link: "#"
    },
    {
      id: 5,
      title: "Tata Eureka",
      location: "Sector 150, Noida, UP",
      image: "/Images/TataEureka.jpg",
      link: "#"
    },
       {
      id: 6,
      title: "CRC JOYOUS",
      location: "Greater Noida West",
      image: "/Images/crcpark.jpg",
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
      link: "/",
      image: "/Images/home.jpeg",
      buttonText: "Click Here",
      date: "Sep 4, 2023",
      readTime: "5 min read"
    
    },
    {
      id: 2,
      title: "Why Invest in Delhi?",
      description: "Delhi is one of the best City to live in India.",
      link: "/",
      image: "/Images/Invester.jpeg",
      buttonText: "Click Here",
      date: "Sep 4, 2023",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Benefits of living in Incuspaze Tower?",
      description: "INCUSPAZE TOWER is a project With the luxurious residential development,",
      link: "/",
      image: "/Images/livingTower.jpeg",
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
    }, 9000);
    
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


 const heroSlides = [
  {
    title: "Smart Living, Trusted Real Estate",
    description:
      "Infinity Real Estate connects investors with prime commercial spaces and high-return opportunities.",
    features: [
  " Premium Business & Investment Properties",
  " Data-Driven Market Insights",
  " End-to-End Transaction Expertise",

],
    image: "/Images/BlueBildings.jpeg",
  },
  {
  title: " Modern Apartments for Every Lifestyle",
description: "From budget-friendly 2BHKs to luxury penthouses, Infinity delivers homes built for comfort and value.",
features: [
  " Prime Locations Near Business Hubs",
  " Flexible Ownership & Loan Support",
  " Transparent & Verified Projects",
],
       image: "/Images/Homaes.jpg",

  },
  {
  title: " Luxury Residences, Smart Returns",
  description:
    "Invest in premium apartments designed for lifestyle and value.",
  features: [
    " Modern Amenities & Architecture",
    " High Appreciation Potential",
    " Flexible Ownership Options",
  ],
    image:
      "/Images/HomeBanner2.jpg",
  },
];


const propertiesr = [
    {
      id: 1,
      title: "M3M THE CULLINAN",
      location: "Sector 94, Noida",
      price: "₹ 5.88 CR",
      image: "/Images/M3M.jpeg",
      specs: [""],
      link: "/"

    },
    {
      id: 2,
      title: "STELLAR ONE PHASE 2",
      location: "Sector 1, Noida",
      price: "₹ 1.26 CR",
      image: "/Images/Signater.jpeg",
      specs: [""],
      link: "/"

    },
    {
      id: 3,
      title: "GODREJ TROPICAL ISLE",
      location: "Sector 146, Noida",
      price: "₹ 3.75 CR",
      image: "/Images/Trapical.jpeg",
      specs: [""],
      link: "/"

    },
    {
      id: 4,
      title: "IVY COUNTY",
      location: "Sector 75, Noida",
      price: "₹ 1.50 CR",
      image: "/Images/IVY.jpeg",
      specs: [""],
      link: "/"

    },
    {
      id: 5,
      title: "MAX STATES",
      location: "Sector 128, Noida",
      price: "₹ 8.50 CR",
      image: "/Images/MAX.jpeg",
      specs: [""],
      link: "/"

    },
    {
      id: 6,
      title: "ELDECO ACCLAIM",
      location: "Sohna Gurgaon",
      price: "₹ 3.00 CR",
      image: "/Images/Eldeco.jpeg",
      specs: [""],
      link: "/"

    },
    {
      id: 7,
      title: "GODREJ WOODS",
      location: "Sector 43, Noida",
      price: "₹ 1.35 CR",
      image: "/Images/Wood.jpeg",
      specs: [""],
      link: "/"

    },
    {
      id: 8,
      title: "CRC JOYOUS",
      location: "Techzone IV, Greater Noida West",
      price: "₹ 59.90 Lacs",
      image: "/Images/CRC.jpeg",
      specs: [""],
      link: "/"

    },
    {
      id: 9,
      title: "EUREKA PARK",
      location: "Sector 150, Noida",
      price: "₹ 1.05 CR",
      image: "/Images/Erukapark.jpeg",
      specs: [""],
      link: "/"

    }
  ];







//  Custom Hook for window width
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}







  return (
    <div>
        <section className="hero-sectionr">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: width < 768 ? "70vh" : "100vh",
                width: "100%",
                position: "relative",
              }}
            >
              {/* Overlay */}
              <div
                style={{
                  background: "rgba(0,0,0,0.5)",
                  position: "absolute",
                  inset: 0,
                }}
              ></div>

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: width < 768 ? "20px" : "80px",
                  paddingTop: width < 768 ? "13rem" : "9rem",
                  marginTop: "2.5rem"
                }}
              >
                <h1
                  style={{
                    color: "#fff",
                    fontSize: width < 768 ? "2rem" : "4rem",
                    fontWeight: "700",
                    lineHeight: 1.2,
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  style={{
                    color: "#ddd",
                    maxWidth: "600px",
                    fontSize: width < 768 ? "1rem" : "2rem",
                    fontWeight: "600",
                    marginTop: "1rem",
                  }}
                >
                  {slide.description}
                </p>
                <ul
                  style={{
                    color: "#fff",
                    paddingTop: "1rem",
                    fontSize: width < 768 ? "1rem" : "1.2rem",
                    lineHeight: 1.6,
                  }}
                >
                  {slide.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>
                <Link
                  to="/Contact"
                  style={{
                    display: "inline-block",
                    padding: width < 768 ? "10px 18px" : "12px 24px",
                    background: "#d4af37",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "6px",
                    marginTop: "20px",
                    fontSize: width < 768 ? "0.9rem" : "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#b8962d")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#d4af37")
                  }
                >
                  Get started
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <div className="spacer-y">
            <div className="row g-4 justify-content-between">
              
            </div>
            <div className="col-lg-12 text-align-center">
                <h2>5+ Years <span className="fw-normal">of Experience in Delivering Luxury With Excellence</span></h2>
              </div>
              <div className="col-lg-12 text-align-center">
                <p className="mb-4">
                 Infinity Realty delivers strategic opportunities, expert market insights, and seamless transactions to maximize returns and business growth. With proven expertise, we help clients secure premium properties with precision and confidence.
                </p>
              
              </div>
          </div>
          
     
        </div>
      </section>
  
     <section className="property-slider-section">
      {/* <div className="container"> */}
        <div className="slider-header">
          <h2 className="slider-title">EXCLUSIVE PROJECTS</h2>
          <p className="slider-subtitle">Discover the Finest Developments by Infinity</p>
        </div>

        <div className="property-slider">
          <div className="slider-container">
            <div 
              className="slider-track"
              style={{ transform: `translateX(-${currentSlide * (100 / properties.length)}%)` }}
            >
              {properties.map((property) => (
                <div key={property.id} className="slides">
                  <div className="property-card">
                    <div className="property-image">
                      <img src={property.image} alt={property.title} />
                      <div className="property-overlay">
                        <Link to={property.link} className="view-details-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="property-content">
                      <h3 className="property-title">{property.title}</h3>
                      <div className="property-location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>{property.location}</span>
                      </div>
                      <Link to={property.link} className="property-link">
                        SEE DETAILS
                      </Link>
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
      {/* </div> */}
    </section>


  
 <section className="residential-properties-new">
      <div className="contain">
        <div className="section-header-new">
          <h2 className="section-title-new">Premium Residential Spaces</h2>
          <p className="section-subtitle-new">Discover India's most exquisite residential properties</p>
          <div className="title-decoration"></div>
        </div>
{/* 
        <div className="properties-filter">
          <button className="filter-btn active">All Projects</button>
          <button className="filter-btn">Ready to Move</button>
          <button className="filter-btn">Under Construction</button>
          <button className="filter-btn">New Launch</button>
        </div> */}

        <div className="properties-grid-new">
          {propertiesr.map(property => (
            <div key={property.id} className="property-card-new">
              <div className="property-image-new">
                <img src={property.image} alt={property.title} />
                <div className="property-badge">Featured</div>
                <button className="wishlist-btn">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
              
              <div className="property-content-new">
                <div className="property-header">
                  <h3 className="property-title-new">{property.title}</h3>
                  <p className="property-location-new">
                    <i className="fas fa-map-marker-alt"></i>
                    {property.location}
                  </p>
                </div>
                
                {/* <div className="property-specs">
                  {property.specs.map((spec, index) => (
                    <span key={index} className="spec-tag">{spec}</span>
                  ))}
                </div> */}
                
                <div className="property-footer-new">
                  <div className="price-container">
                    <span className="price-label">Starting Price</span>
                    <span className="property-price-new">{property.price}</span>
                  </div>
                    <a href={property.link} className="cta-btn-new">
                          View Details
                        </a>
                  {/* <button className="cta-btn-new">View Details</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="view-all-container-new">
          <button className="view-all-btn-new">
            Explore All Properties
            <i className="fas fa-arrow-right"></i>
          </button>
        </div> */}
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
          style={{ backgroundImage: "url('/Images/M3M_DEN.jpeg')" }}
        >
          <div className="new-card-content">
            <span className="new-card-category">Starting</span>
            <h3 className="new-card-title">Starting at 1.37 CR</h3>
            <p className="new-card-description">
             M3M MY DEN, SECTOR-67, GURGAON
            </p>
                    {/* <button className="new-card-btn">SEE PROPERTY</button> */}

          </div>
        </div>
      </div>

      <div className="new-service-card">
        <div
          className="new-card-image"
          style={{ backgroundImage: "url('/Images/Signater.jpeg')" }}
        >
          <div className="new-card-content">
            <span className="new-card-category">Starting</span>
            <h3 className="new-card-title">Starting at 1.70 CR</h3>
            <p className="new-card-description">
              SIGNATURE GLOBAL, SECTOR-36, GURGAON
            </p>
            {/* <button className="new-card-btn">SEE PROPERTY</button> */}
          </div>
        </div>
      </div>



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
            {/* <button className="new-card-btn">SEE PROPERTY</button> */}
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
              style={{ backgroundImage: "url('/Images/Workbase.jpeg')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at 13,000 INR</h3>
                <p className="card-description">
WORKBEE MEGAPOLIS, SECTOR-48, GURGAON
                </p>
                  <div className='buttonSttyle'>
{/* <a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/TheOffice.jpeg')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at 17,000 INR</h3>
                <p className="card-description">
                 THE OFFICE PASS, SECTOR- 70, GURGAON
                </p>
                  <div className='buttonSttyle'>
{/* <a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a> */}
                </div>
              </div>
            </div>
          </div>
           <div className="service-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/Images/Tower.jpeg')" }}
            >
              <div className="card-overlay">
                <span className="card-category">Starting</span>
                <h3 className="card-title">Starting at 7000 INR</h3>
                <p className="card-description">
                 INCUSPAZE TOWER, SOHNA ROAD, GURGAON
                </p>
                <div className='buttonSttyle'>
{/* <a href='/' className="cta-btn secondary-btn">SEE PROPERTY</a> */}
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
  backgroundColor="#00628c"
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



{/* 
  <section className="partners-section">
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

          <button className="carousel-nav carousel-prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-nav carousel-next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

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
      </div>
    </section> */}



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
          <Link to="/BlogCards" className="rl-view-all-button">
            View All Articles
            <svg className="rl-btn-arrow" viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>

     {/* Partner Logos Slider */}
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

    </div>
  )
}

export default home
