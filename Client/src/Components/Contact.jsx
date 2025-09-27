
import React, { useState } from 'react';
// import './app.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    propertyTypes: [],
    message: ''
  });

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevState => {
      if (checked) {
        return {
          ...prevState,
          propertyTypes: [...prevState.propertyTypes, value]
        };
      } else {
        return {
          ...prevState,
          propertyTypes: prevState.propertyTypes.filter(type => type !== value)
        };
      }
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Basic validation
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
    alert("Please fill in all required fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:8000/api/contact", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.error || 'Request failed');
    }
    
    if (data.success) {
      alert("✅ Thank you! Your message has been sent.");
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        propertyTypes: [],
        message: ''
      });
    } else {
      alert("❌ " + (data.error || "Unknown error occurred"));
    }
  } catch (err) {
    alert("⚠️ Something went wrong. Please try again later.");
    console.error("Submission error:", err);
  }
};



  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="contact-us">
      {/* Header */}
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <i className="fas fa-building logo-icon"></i>
              <div className="logo-text">Infinity Realestate</div>
            </div>
            <a href="/" className="home-btn">
              <i className="fas fa-home"></i> BACK TO HOME
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="heroConatct">
        <div className="container">
          <h1>Contact Us</h1>
          {/* <p>Don't hesitate to reach out to us. We're here to help you with all your real estate needs.</p> */}
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
          <div className="slider-header">
          <h1 className="slider-title"> FEEL FREE TO CONTACT US FOR ANY KIND OF QUERY</h1>
        </div>
        {/* <div className="main-heading">
          <h1>FEEL FREE TO CONTACT US FOR ANY KIND OF QUERY</h1>
        </div> */}

        {/* Contact Section */}
        <div className="contact-container">
          {/* Form Section */}
          <div className="form-section">
            <h3>FILL THE FORM BELOW</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter Your First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter Your Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                 <input
  type="tel"
  id="phone"
  name="phone"
  className="form-control"
  placeholder="+91-00******00"
  value={formData.phone}
  onChange={handleInputChange}
  pattern="[0-9+\s()\-]{7,15}"
  title="Please enter a valid phone number (7-15 digits)"
/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="xyz@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="checkbox-group">
                <label>What are you looking for?</label>
                <div className="checkbox-options">
                  <div className="checkbox-option">
                    <input
                      type="checkbox"
                      id="residential"
                      value="RESIDENTIAL PROPERTY"
                      checked={formData.propertyTypes.includes('RESIDENTIAL PROPERTY')}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="residential">RESIDENTIAL PROPERTY</label>
                  </div>
                  <div className="checkbox-option">
                    <input
                      type="checkbox"
                      id="commercial"
                      value="COMMERCIAL PROPERTY"
                      checked={formData.propertyTypes.includes('COMMERCIAL PROPERTY')}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="commercial">COMMERCIAL PROPERTY</label>
                  </div>
                  <div className="checkbox-option">
                    <input
                      type="checkbox"
                      id="leasing"
                      value="LEASING PROPERTY"
                      checked={formData.propertyTypes.includes('LEASING PROPERTY')}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="leasing">LEASING PROPERTY</label>
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Describe your needs."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
            
            <div style={{marginTop: '2.5rem'}}>
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a   href="https://www.linkedin.com/in/rakesh-kumar-1aba1a57" 
  target="_blank" 
  rel="noopener noreferrer"  className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579222262692" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/rak_eshgupta2/" target="_blank" rel="noopener noreferrer"  className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                 <a href="https://x.com/home" target="_blank" rel="noopener noreferrer"  className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                 {/* <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" onClick={handleFooterLinkClick}>
                              <FontAwesomeIcon icon={faTwitter} className="social-iconi" />
                            </a> */}
                {/* <a href="#" className="social-icon">
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
            </div>
          </div>
          
          {/* Info Section */}
          <div className="info-section">
            <div className="info-card">
              <h3><i className="fas fa-map-marker-alt"></i> Address</h3>
              <div className="contact-info">
                <p><i className="fas fa-building"></i>D -004, Golf City , Plot No -8
Gate No -1 , Noida -201301</p>
                {/* <p><i className="fas fa-map-pin"></i> Sector 75, Noida- 201301</p> */}
              </div>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-question-circle"></i> Business Query</h3>
              <p>For any Business query, use the following details to contact us</p>
              <div className="contact-info">
                <p><i className="fas fa-phone"></i>9899282878</p>
                <p><i className="fas fa-envelope"></i> support@infinityrealestate.estate</p>
              </div>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-clock"></i> Office Hours</h3>
              <div className="contact-info">
                <p><i className="fas fa-calendar-alt"></i> Monday to Saturday</p>
                <p><i className="fas fa-clock"></i> 9:30 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="map-container">
          {/* <iframe 
            loading="lazy" 
            src="https://maps.google.com/maps?q=RajLakshmi%20Realty%2C%20Plot%20No%208%2C%20Glof%20City%20Sector%C2%A075%2C%C2%A0Noidahttps://maps.app.goo.gl/MhK8W7uPnuoxVj4y9.&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" 
            title="Infinity, Plot No 8, Glof City Sector&nbsp;75,&nbsp;Noida." 
            aria-label="Infinity, Plot No 8, Glof City Sector&nbsp;75,&nbsp;Noida."
          ></iframe> */}

          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1646.6558259217636!2d77.38587386328551!3d28.573696201253274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzIzLjkiTiA3N8KwMjMnMTAuMyJF!5e1!3m2!1sen!2sin!4v1757917840726!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Your Common Concerns</h2>
          <div className="accordion">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
              >
                <div 
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <i className={`fas fa-chevron-${activeAccordion === index ? 'up' : 'down'}`}></i>
                </div>
                <div className="accordion-content">
                  <div className="accordion-content-inner">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Help Section */}
        <div className="help-section">
          <h2>NEED HELP?</h2>
          <div className="help-phone">9899-28-2878</div>
          <div className="help-hours">Monday to Saturday 9:30 AM- 7:00 PM</div>
          <img 
            src="/Images/custemerservice.jpg" 
            alt="Customer Service" 
            width="100" 
            style={{borderRadius: '50%', marginBottom: '1.5rem'}}
          />
          <p>Our customer service team is here to assist you with all your queries</p>
        </div>
      </div>

      
    </div>
  );
};

// FAQ Data (simplified for example)
const faqData = [
  {
    title: "Home Loan",
    content: (
      <>
        <p>A home loan is a financial product designed to help you buy, construct, or renovate a residential property. Home loans are typically offered by banks and registered housing finance companies. These loans are secured against the property, which means the lender can claim the property if the borrower fails to repay the loan.</p>
      <ul className='mb-2'>
        <li>A standard loan for buying a ready-to-move-in or under-construction home.</li>
        <li>Funds provided for repairing, renovating, or upgrading your existing home.</li>
        <li>A loan to construct a new home on a plot of land.</li>
        <li>For expanding an existing home, such as adding an extra room or floor.</li>
        <li>A loan sanctioned for purchasing land, either for building a home or as an investment.</li>
        <li>Allows you to switch your current home loan to another lender offering a lower interest rate.</li>
        <li>Used to repay debts taken from private sources like friends or relatives for buying your home.</li>
        <li>Specially designed for Non-Resident Indians looking to buy or construct a home in India.</li>

      </ul>


      <h3>Q2. What is an EMI?</h3>
      <p>EMI (Equated Monthly Installment) is the fixed amount you pay every month to the lender until your loan is fully repaid. Each EMI includes a portion of the principal amount as well as the interest on the loan.</p>
     
     <h3>Q3. What are the eligibility conditions for a home loan?</h3>
      <p>To be eligible for a home loan in India, most lenders require that you:</p>
      <ul className='mb-2'>
        <li>Are an Indian resident or NRI</li>
        <li>Are above 24 years of age when the loan starts</li>
        <li>Are below 60 years (or retirement age) when the loan ends</li>
        <li>Are either salaried or self-employed</li>

      </ul>

      <h3>Q4. What are the interest rates offered for home loans? What do Daily Reducing, Monthly Reducing, and Yearly Reducing mean?</h3>
     <ul className='mb-2'>
      <li><b>Interest rates: </b>Vary between lenders, typically ranging from 8.75% to 12%.</li>
      <li><b>Calculation methods: </b>Interest is generally calculated on daily, monthly, or yearly reducing balance.</li>

     </ul>
     <p><b>Yearly Reducing: </b>The principal on which interest is calculated reduces at the end of the year. You pay interest only on the remaining principal. EMIs are usually higher compared to monthly reducing systems.</p>
     <p><b>Monthly Reducing: </b>The principal reduces every month as you pay your EMI. Interest is calculated on the remaining principal each month, making EMIs lower than the yearly reducing method.</p>
     <p><b>Daily Reducing: </b>The principal reduces daily as EMIs are paid. This results in the lowest EMI among all three methods since interest is charged on the remaining principal from day one.</p>
     
     <h3>Q5. What is a fixed rate of interest?</h3>
     <p>Some lenders offer a fixed interest rate, which means the rate remains unchanged throughout the loan tenure. This ensures stability in your EMIs, but you won’t benefit if market interest rates decrease during the loan period.</p>
     
     <h3>Q6. What is a floating rate of interest? </h3>
     <p>A floating interest rate changes according to market lending rates. This means your EMIs may increase or decrease over time, and there is a risk of paying more than initially expected if the lending rate rises.</p>
     
     <h3>Q7. What are the additional costs associated with a home loan?</h3>
     <p>Home loans often come with some extra charges, such as:</p>
     <ul className='mb-2'>
      <li><b>Processing Fee: </b>A fee charged by the lender for processing your loan application. This can be a fixed amount or a percentage of the loan.</li>
      <li><b>Pre-payment Penalty: </b>If you repay your loan before the agreed tenure, some lenders may charge a penalty, usually around 2% of the prepaid amount.</li>
      <li><b>Miscellaneous Costs: </b>These can include documentation fees, consultant charges, or other administrative costs.</li>

     </ul>
     
<h3>Q8. How do housing finance companies determine the eligible loan amount?</h3>
<p>Typically, lenders offer up to 85% of the property’s cost as a home loan. The remaining 15% (often called the “own contribution” or “seed money”) must be provided by the applicant.</p>
<p>The exact loan amount an applicant is eligible for depends on several factors:</p>
<ul className='mb-2'>
  <li>Age of the applicant</li>
  <li>Income level</li>
  <li>Number of dependents</li>
  <li>Monthly expenses/outgoings</li>
  <li>Repayment capacity</li>

</ul>
<p>Eligibility can vary from case to case depending on the applicant’s financial profile.</p>

<h3>Q9. Are securities required for home loans?</h3>
<p>In most cases, the property being purchased serves as the primary security for the loan and is mortgaged to the lender until the loan is fully repaid.</p>
<p>Some lenders may also require additional securities, which can include:</p>
<ul className='mb-2'>
  <li>Life insurance policies</li>
  <li>Fixed Deposit (FD) receipts</li>
  <li>Share certificates or savings certificates</li>

</ul>
<p>These additional securities act as extra assurance for the lending institution.</p>


<h3>Q10. What is the time required for loan disbursement?</h3>
<p>On average, home loans are disbursed within 3 to 15 days after the lender receives all required documents and completes the necessary procedures. This includes verification that the borrower has paid the initial 15% of the property cost upfront to the seller.</p>

<h3>Q11. What are the tax benefits of home loans?</h3>
<p>Home loans offer tax benefits on both principal repayment and interest paid.</p>
<ul className='mb-2'>
  <li><b>Principal repayment: </b>Under Section 80C of the Income Tax Act, the principal amount repaid (along with other eligible savings like PF, PPF, life insurance, etc.) can be claimed for deduction up to ₹1,50,000 per year.</li>
  <li><b>Interest paid: </b>Interest on a home loan is eligible for deduction under Section 24(b). For a completed property, the deduction on interest paid can be claimed up to ₹2,00,000 per year from income under the head “Income from House Property.”</li>

</ul>

<p>These benefits help reduce the overall taxable income and make home loans more affordable.</p>

      </>
    )
  },
  {
    title: "Home Loan Documents",
    content: (
      <>
        <p>To process a home loan, financial institutions require certain documents. While the exact requirements may vary slightly between banks or lenders, the general documents needed are as follows:</p>
        <h4>Common Documents (All Applicants)</h4>
        <ul className='mb-2'>
          <li>Proof of age (e.g., birth certificate, passport, or Aadhar card)</li>
          <li>Proof of address (e.g., utility bills, passport, or rent agreement)</li>
          <li>Proof of income for applicant and co-applicant</li>
          <li>Bank statements for the last 6 months</li>
          <li>Passport-sized photographs of applicant and co-applicant</li>
        </ul>

         <h4>Additional Documents for Salaried Individuals</h4>
        <ul className='mb-2'>
          <li>Latest salary slips or Form 16</li>
          <li>PAN card or first and last pages of the ration card, or utility bills (telephone/electricity)</li>
          <li>Investment proofs (FD certificates, shares, or any other assets)</li>
          <li>LIC policies and latest premium receipts (if applicable)</li>
          <li>Bank statements of the last 6 months</li>
        </ul>


<h4>Additional Documents for Self-Employed / Business Owners</h4>
        <ul className='mb-2'>
          <li>Brief description of business/profession</li>
          <li>Balance sheets, profit & loss statements, and income tax returns for the last 3 years (certified by a CA)</li>
          <li>Advance tax payment receipts (if applicable)</li>
          <li>Registration certificates under Shops & Establishments Act / Factories Act</li>
          <li>Profession tax registration certificate (if applicable)</li>
        
        <li>Bank statements of current and savings accounts for the last 6 months</li>
          <li>Certificate of practice (if applicable)</li>
          <li>Loan statements (if any existing loans)</li>
          <li>PAN card, ration card, or utility bills</li>
          <li>LIC policy documents (if applicable)</li>
        </ul>



<h4>If Purchasing a Flat from a Builder</h4>
        <ul className='mb-2'>
          <li>Original agreement with the builder</li>
          <li>Land documents (7/12 extract or property register card)</li>
          <li>Index II extract of agreement with the builder</li>
          <li>N.A. permission for the land from the collector</li>
          <li>Search and title report (covering last 30 years)</li>
        
        <li>Development agreement between landowner and builder</li>
          <li>Urban Land Ceiling Act orders (if applicable)</li>
          <li>Sanctioned building plans and commencement certificate</li>
          <li>Building completion certificate (if available)</li>
          <li>Latest property tax receipts</li>
          <li>Partnership deed or memorandum of association of the builder’s firm</li>

        </ul>




<h4>If Purchasing Property in a Cooperative Society</h4>
        <ul className='mb-2'>
          <li>Original share certificate of the society</li>
          <li>Allotment letter in borrower’s name</li>
          <li>Lease deed (if executed)</li>
          <li>Certificate of registration of the society</li>
          <li>Copy of society byelaws</li>
        
        <li>No Objection Certificate from the society</li>
          <li>Land documents (7/12 extract or property register card)</li>
          <li>N.A. permission for the land from the collector</li>
          <li>Search and title report (last 30 years)</li>
          <li>Urban Land Ceiling Act orders (if applicable)</li>
          <li>Sanctioned building plans and commencement certificate</li>
          <li>Latest property tax receipts</li>
          <li>Original agreement to assign / deed of assignment</li>

        </ul>


<h4>If Constructing on Own Land</h4>
        <ul className='mb-2'>
          <li>Original sale deed of land and Index II extract</li>
          <li>Land documents in borrower’s name</li>
          <li>N.A. permission from the collector</li>
          <li>Search and title report (last 30 years)</li>
          <li>Urban Land Ceiling Act orders (if applicable)</li>
        
        <li>Sanctioned building plans and building permission</li>
          <li>Latest property tax receipts</li>
          <li>Cost estimate of construction certified by an architect</li>
         

        </ul>





      </>
    )
  },
  {
    title: "Vaastu Tips",
    content: (
      <>
        <h3>Vaastu for Home</h3>
        <p>Vaastu is an ancient set of principles that guides the design and layout of homes and buildings to promote happiness, peace, and positive energy. These guidelines can be applied to homes, offices, temples, and other structures. Keeping Vaastu in mind while designing or buying a property can enhance overall well-being.</p>
      
      <h4>General Tips</h4>
      <ul className='mb-2'>
        <li>The main entrance should face east and be well-maintained and attractively decorated.</li>
        <li>Keep the north direction unobstructed as it symbolizes prosperity.</li>
        <li>Avoid growing cactus plants indoors.</li>
        <li>Ensure door hinges function smoothly without noise.</li>
        <li>If the house has a slope, it should run from south to north or west to east.</li>
        <li>Avoid artwork or pictures that depict violence or sorrow.</li>

      </ul>
      
         <h4>General Tips</h4>
      <ul className='mb-2'>
        <li>The main entrance should face east and be well-maintained and attractively decorated.</li>
        <li>Keep the north direction unobstructed as it symbolizes prosperity.</li>
        <li>Avoid growing cactus plants indoors.</li>
        <li>Ensure door hinges function smoothly without noise.</li>
        <li>If the house has a slope, it should run from south to north or west to east.</li>
        <li>Avoid artwork or pictures that depict violence or sorrow.</li>

      </ul>

   <h4>Bedrooms</h4>
      <ul className='mb-2'>
        <li>Master bedrooms should be in the south-west corner. Avoid north-facing master bedrooms.</li>
        <li>Sleep with your head towards the south.</li>
        <li>Do not place the bed directly under a beam.</li>
        <li>Keep the bedroom clutter-free, especially around the sleeping area.</li>
       

      </ul>


     <h4>Children’s Room</h4>
      <ul className='mb-2'>
        <li>Children’s rooms should be in the north-west corner of the house.</li>
        <li>Avoid placing furniture directly against the walls to allow free flow of energy.</li>
        <li>Use mild and cheerful colors for the walls.</li>
        <li>Position the study table so the child faces east, north, or north-east. Computers should be placed in the southwest corner.</li>
      </ul>

    <h4>Living Room</h4>
      <ul className='mb-2'>
        <li>The living room should ideally be in the north direction.</li>
        <li>Air-conditioners should be placed in the west, avoiding the southeast.</li>
        <li>Dining chairs should be in even numbers.</li>
        <li>Place furniture in the south and west corners for optimal energy flow.</li>
      </ul>

    <h4>Kitchen</h4>
      <ul className='mb-2'>
        <li>The kitchen is best located in the southeast; the northwest is also acceptable</li>
        <li>Cooking should be done facing east or north.</li>
        <li>Place the refrigerator in south, west, southeast, or northwest corners.</li>
        <li>Appliances like mixers, microwaves, and toasters should be in the southeast corner.</li>
        <li>Ensure good cross-ventilation in the kitchen.</li>

      </ul>


   <h4>Bathroom</h4>
      <ul className='mb-2'>
        <li>Bathrooms should be in the northwest direction.</li>
        <li>Ensure bathrooms have proper ventilation and natural light.</li>
        <li>Use high-quality sanitary fittings and maintain them regularly.</li>
        <li>Keep toilet and bath areas clean and tidy at all times.</li>

      </ul>



      </>
    )
  },
  {
    title: "NRI Services",
    content: (
      <>
        <h3>NRI Services – Property Purchase Guide</h3>
        <h4>General</h4>
        <h3>Q1. Who is considered an NRI (Non-Resident Indian)?</h3>
        <p>Under the Foreign Exchange Regulation Act of 1973, Non-Resident Indians include:</p>
        <ul className='mb-2'>
          <li>Indian citizens residing abroad for employment, business, or other purposes for an indefinite period.</li>
          <li>Government employees posted abroad with Indian missions or agencies, drawing salaries from Indian government resources.</li>
          <li>Government employees on foreign assignments with international organizations like the World Bank, IMF, WHO, or ESCAP.</li>
          <li>Officials from State Governments or Public Sector Undertakings temporarily assigned abroad or posted to foreign offices.</li>
        </ul>

          <h3>Q2. Who is a foreign citizen of Indian origin (PIO)?</h3>
        <p>A foreign citizen is deemed of Indian origin if:</p>
        <ul className='mb-2'>
          <li>They held an Indian passport at any point, or</li>
          <li>They, or their father or paternal grandfather, were Indian citizens under the Constitution or Citizenship Act, 1955.
(Note: This does not apply to citizens of Pakistan, Bangladesh, Afghanistan, Bhutan, Sri Lanka, or Nepal.)</li>
        </ul>
        <h4>Buying a Property</h4>
        <h3>Q3. Key factors to consider while purchasing a flat:</h3>
        <ul className='mb-2'>
          <li>Locality: transport, schools, hospitals, markets, business districts, entertainment, hotels, restaurants, pollution.</li>
          <li>Quoted area: carpet, built-up, and super built-up area.</li>
          <li>Car parking availability.</li>
          <li>Quality of construction.</li>
          <li>Reputation of the builder or seller.</li>
          <li>Utilities: water, electricity, and other services.</li>
          <li>Costs: property price, stamp duty, registration charges, transfer fees, monthly maintenance.</li>
          <li>Potential for resale or rental income.</li>
    <li>Other unique features or advantages.</li>
        </ul>




           <h3>Q4. Checklist for buying residential property:</h3>
        <ul className='mb-2'>
          <li>Study market trends and prevailing property rates.</li>
          <li>Examine all title deeds, preferably with legal assistance. Check survey number, village, registration district, and ensure previous loans or encumbrances are cleared.</li>
          <li>Verify approved layout plans and building plans.</li>
          <li>Obtain clearances from municipal, electricity, water, pollution, and lift authorities.</li>
          <li>Check compliance with building by-laws: setbacks, height restrictions, etc.</li>
          <li>Confirm transfer fees, stamp duty, registration charges, and ongoing property costs.</li>
          
        </ul>




           <h3>Q5. Do NRIs require RBI consent to buy property?</h3>
        <ul className='mb-2'>
          <li>No. NRIs can buy immovable property freely, except agricultural land, plantation property, or farmhouses.</li>

        </ul>


  <h3>Q6. How should purchase consideration be paid?</h3>
        <ul className='mb-2'>
          <li>Through inward remittances in foreign exchange via banking channels or funds from non-resident accounts in India.</li>

        </ul>


<h3>Q7. Limit on number of properties:</h3>
        <ul className='mb-2'>
          <li>No limit on the number of residential properties NRIs may buy.</li>
          <li>Repatriation of sale proceeds is allowed only for two properties.</li>

        </ul>


             <h3>Q8. Guidelines for purchasing agricultural land, plantation property, or farmhouses:</h3>
        <ul className='mb-2'>
          <li>Requests must be made to:
Chief General Manager, Reserve Bank of India, Central Office, Exchange Control Department, Foreign Investment Division (III), Mumbai 400001.</li>
        </ul>

<h4>Selling a Property</h4>
<h3>Q9. Can property be sold without RBI permission?</h3>
 <ul className='mb-2'>
          <li>Yes, general permission exists. Funds must be remitted to India or from NRE/NRO accounts when sold to another PIO.</li>

        </ul>

   <h3>Q10. Can sale proceeds be repatriated abroad?</h3>
        <ul className='mb-2'>
          <li>Sale proceeds of non-agricultural property can be repatriated if:</li>
          <li>The property was acquired legally under current or past regulations.</li>
          <li>Repatriation is limited to two properties purchased from NRE accounts.</li>
          <li>Amount remitted abroad does not exceed the foreign exchange used for purchase.</li>

        </ul>


<h4>Loans for NRIs</h4>
 <h3>Q11. RBI guidelines for housing loans to NRIs/PIOs:</h3>
        <ul className='mb-2'>
          <li>Loan amount up to 85% of property cost.</li>
          <li>Own contribution must come from foreign remittances via NRE/NR (O) or NRSR accounts.</li>
          <li>Loan repayment including interest and charges must be from foreign remittances or non-resident accounts.</li>

        </ul>


<h3>Q12. Can authorized dealers grant loans for residential property?</h3>
 <ul className='mb-2'>
          <li>Yes, for self-occupation upon return to India. Repayment period: max 15 years via inward remittances or non-resident accounts.</li>

        </ul>


<h3>Q13. Loans with co-applicants or joint property ownership:</h3>
 <ul className='mb-2'>
          <li>Loans in rupees can be repaid by close resident relatives of the borrower.</li>

        </ul>


    <h3>Q14. Documents required for loan application:</h3>
        <ul className='mb-2'>
          <li>Labor contract and English translation.</li>
          <li>Latest salary certificate with passport details, designation, salary, and perquisites.</li>
          <li>Labor card or identity card.</li>
          <li>Resident visa copy.</li>
          <li>Monthly bank statements for the last 4 months.</li>
          <li>Property-related documents.</li>
          
        </ul>

   <h3>Q15. Loan against immovable property:</h3>
        <ul className='mb-2'>
          <li>Permitted for personal use or business purposes only.</li>
          <li>Cannot be used for prohibited activities: chit funds, agriculture, farmhouses, TDR trading, or real estate trading.</li>
          <li>Loan amount cannot be remitted abroad.</li>
          <li>Repayment via foreign remittance or non-resident accounts.</li>

        </ul>


<h4>Investment Incentives</h4>
 <h3>Q16. Incentives for NRIs, PIOs, and foreigners:</h3>
        <ul className='mb-2'>
          <li>FDI relaxation in construction development allows equal opportunity with Indian investors.</li>
          <li>Investments allowed in land, development, or constructed buildings for sale.</li>
          <li>Automatic route permits investment in housing, townships, commercial areas, and infrastructure.</li>
          <li>Minimum area and unit restrictions removed.</li>
          <li>Minimum constructed area: 50, designated area: 25 acres.</li>
          
        </ul>


 <h3>Q17. Deadline for construction development:</h3>
        <ul className='mb-2'>
          <li>Five years to complete at least 50% of the project from date of clearance.</li>
          <li>Projects typically complete in three years.</li>
  
        </ul>

<h3>Q18. Automatic route advantages:</h3>
        <ul className='mb-2'>
          <li>No RBI or Foreign Investment Promotion Board approval required.</li>
          <li>Simplified paperwork encourages overseas investment.</li>
  
        </ul>


 <h3>Q19. Key considerations for overseas investors:</h3>
        <ul className='mb-2'>
          <li>Identify target segment: residential, retail, or office space.</li>
          <li>Consult legal and real estate professionals.</li>
          <li>Assess returns (8–12% for office space, 4–6% residential).</li>
          <li>Evaluate local demand, utilities, infrastructure, and connectivity.</li>
          
        </ul>

<h3>Q20. Steps for hassle-free clearances:</h3>
        <ul className='mb-2'>
          <li>Engage consultants for city-specific advice.</li>
          <li>Define investment size and expected returns.</li>
          <li>Check infrastructure, power, connectivity, security, and long-term plans.</li>
          
        </ul>

<h3>Q21. Single-window clearance:</h3>
        <ul className='mb-2'>
          <li>Difficult due to multiple authorities involved: town planning, elevators, firefighting, etc. Efforts are ongoing to simplify the process.</li>
          
        </ul>

<h3>Q22. Sanctioning vs. monitoring authority:</h3>
        <ul className='mb-2'>
          <li>Municipal authority often serves as final approval in urban areas.</li>
          <li>Town planning corporations may monitor construction in smaller or rural areas.</li>
          <li>Utility clearances also coordinated through these authorities.</li>
          
        </ul>

<h3>Q23. FDI minimum investment requirements:</h3>
        <ul className='mb-2'>
          <li>Wholly owned subsidiary: minimum capitalization USD 10 million.</li>
          <li>Joint venture: minimum capitalization USD 5 million.</li>
          <li>Foreign exchange must be brought into India within six months of commencing business.</li>
          
        </ul>


      </>
    )
  }
];

export default ContactUs;



