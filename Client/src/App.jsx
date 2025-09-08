import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// Lazy loading Navbar
const Navbar = lazy(() => import('./Navbar.jsx'));
const Footer = lazy(() => import('./Footer.jsx'));
const Home = lazy(() => import('./Components/Home.jsx'));
const About = lazy(() => import('./Components/About.jsx'));

const BlogCards = lazy(() => import('./Components/BlogCards.jsx'));
const Testimonials = lazy(() => import('./Components/testimonials.jsx'));
const Termcondation = lazy(() => import('./Components/Termcondation.jsx'));
const Contact = lazy(() => import('./Components/Contact.jsx'));
const Privacy = lazy(() => import('./Components/Privacy.jsx'));
const Disclaimer = lazy(() => import('./Components/Disclaimer.jsx'));
const TopCommirical = lazy(() => import('./Components/TopCommirical.jsx'));
const ResidentialProperty = lazy(() => import('./Components/ResidentialProperty.jsx'));
const LeasingPropertiesPage = lazy(() => import('./Components/LeasingPropertiesPage.jsx'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/BlogCards" element={<BlogCards />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Termcondation" element={<Termcondation />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/TopCommirical" element={<TopCommirical />} />
        <Route path="/ResidentialProperty" element={<ResidentialProperty />} />
        <Route path="/LeasingPropertiesPage" element={<LeasingPropertiesPage />} />

        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
