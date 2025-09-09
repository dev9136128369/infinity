


import React, { useEffect, useState } from "react";
// import "./Testimonials.css";
import {
  FaStar,
  FaStarHalfAlt,
  FaFacebook,
  FaInstagram,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselTestimonials = [
    {
  text: "Infinity Realty helped me achieve my dream of owning a home. Their team’s expertise and dedication made the entire process smooth and stress-free.",
      author: "Anshul Chauhan",
      title: "Business Owner",

    },
    {
      text: "As a first-time homebuyer, I was thoroughly impressed with Infinity Realty. They helped me find an excellent property and offered invaluable guidance on financing and negotiations throughout the process.",
      author: "Ankita Yadav",
      title: "Housewife",
    },
    {
      text: "Purchasing my first home with Infinity Realty was an amazing experience. Their team patiently guided me through every step, helping me find the perfect home that fit both my needs and budget.",
      author: "Rohit Singh",
      title: "CEO",
    },
  ];


const detailedTestimonials = [
    {
      id: 1,
      name: "Sanjana Tiwari",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/testimonial-150x150.png",
      content: "Investing in real estate can feel overwhelming, but Infinity Realty made the entire process easy and reassuring. Their team’s expertise and ethical approach gave me confidence in my investment. The property I purchased through them promises strong returns and fits perfectly with my long-term plans.",
      rating: 5
      
    },
    {
      id: 2,
      name: "Kritika Sharma",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/testimonial-150x150.png",
      content: "I had a wonderful experience with Infinity Realty while searching for an apartment that fit my lifestyle and budget. The team was knowledgeable, patient, and attentive to my needs. From selecting the property to completing all the paperwork, the entire process was handled with professionalism and transparency.",
      rating: 5
    },
    {
      id: 3,
     name: "Ritik Bansal",
      image: "https://rajlakshmirealty.com/wp-content/uploads/2023/09/testimonial-150x150.png",
      content: "Our experience finding the ideal home was seamless and enjoyable with Infinity Realty. The team’s professionalism and dedication to understanding our requirements helped us secure a property that went beyond our expectations. The craftsmanship and attention to detail in every aspect of the home left a lasting impression. We are thankful for turning our dream home into reality",
      rating: 5
    }
  ];



    const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="star-full">★</i>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<i key={i} className="star-half">★</i>);
      } else {
        stars.push(<i key={i} className="star-empty">★</i>);
      }
    }

    return stars;
  };
  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % carouselTestimonials.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselTestimonials.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-sectione">
        <div className="container">
          <h1>Testimonials</h1>
          {/* <p>What Everyone Talks About Us</p> */}
        </div>
      </section>

      {/* Clients Section */}
      <section className="container">
         <div className="slider-header">
          <h2 className="slider-titles">OUR CLIENTS AND THEIR AMAZING REVIEWS</h2>

        </div>
        {/* <div className="section-title">
          <h2>OUR CLIENTS AND THEIR AMAZING REVIEWS</h2>
        </div> */}
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonial-grid">
        
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <div className="testimonial-profile">
            <img
              src="https://rajlakshmirealty.com/wp-content/uploads/2023/08/1566537005025-fotor-20230826175730.png"
              alt="Ankita Yadav"
            />
            <div>
              <h3 className="testimonial-name">Ankita Yadav</h3>
              <p className="testimonial-handle">@ankitaaa</p>
              <div className="testimonial-rating">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
              </div>
            </div>
          </div>
          <p className="testimonial-text">
            My first home purchase was a breeze with Infinity’s support. They
            made the process simple and helped me secure a home that I absolutely
            love, all within my budget.
          </p>
          <div className="testimonial-social">
            <FaFacebook />
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <div className="testimonial-profile">
            <img
              src="https://rajlakshmirealty.com/wp-content/uploads/2023/08/1602090973258-fotor-20230826175718.png"
              alt="Sanjana Tiwari"
            />
            <div>
              <h3 className="testimonial-name">Sanjana Tiwari</h3>
              <p className="testimonial-handle">@sanjanaaa</p>
              <div className="testimonial-rating">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
          <p className="testimonial-text">
            Thanks to Infinity, selling my property was quick and hassle-free.
            Their market knowledge and marketing approach truly stood out.
          </p>
          <div className="testimonial-social">
            <FaInstagram />
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <div className="testimonial-profile">
            <img
              src="https://rajlakshmirealty.com/wp-content/uploads/2023/08/1517679645415-fotor-20230826175740.png"
              alt="Amrit Pal"
            />
            <div>
              <h3 className="testimonial-name">Amrit Pal</h3>
              <p className="testimonial-handle">@amritpal</p>
              <div className="testimonial-rating">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
          <p className="testimonial-text">
            Finding the right commercial space was easy with Infinity. They
            understood my requirements and negotiated a great deal for me.
          </p>
          <div className="testimonial-social">
            <FaFacebook />
          </div>
        </div>
      </div>
    </section>



 {/* Detailed Testimonials Grid */}
  <section className="luxury-testimonials">
  <div className="container">
    <h2 className="section-title">What Our Clients Say</h2>
    <div className="timeline">
      {detailedTestimonials.map((testimonial, index) => (
        <div key={testimonial.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
          <div className="content-box">
            <div className="client-info">
              <img src={testimonial.image} alt={testimonial.name} className="client-img" />
              <h3>{testimonial.name}</h3>
            </div>
            <p className="testimonial-text">❝ {testimonial.content} ❞</p>
            <div className="star-rating">
              {renderStars(testimonial.rating)}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* First-time Buyers Section */}
      <section className="first-time-section">
        <div className="container">
            <div className="slider-header">
          <h2 className="slider-title"> PURCHASING A PROPERTY FOR THE FIRST TIME?</h2>
 <p className="slider-subtitle">  Discover stories and experiences from people who purchased their first home with Infinity Realty.</p>
        </div>
      
          <div className="highlight-box">
            <div className="highlight-text">
              <FaQuoteLeft className="quote-icon" />
              I BOUGHT MY FIRST PROPERTY WITH RAJLAKSHMI... AND{" "}
              <div>IT WAS ONE OF THE GREATEST EXPERIENCE !!!</div>
              <FaQuoteRight className="quote-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="container">
          <div className="carousel-container">
            <div
              className="carousel"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselTestimonials.map((item, index) => (
                <div className="carousel-item" key={index}>
                  <p className="carousel-text">{item.text}</p>
                  <div className="carousel-author">{item.author}</div>
                  <div className="carousel-title">{item.title}</div>
                </div>
              ))}
            </div>
            {/* <div className="carousel-nav">
              {carouselTestimonials.map((_, index) => (
                <div
                  key={index}
                  className={`carousel-dot ${
                    currentIndex === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></div>
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
