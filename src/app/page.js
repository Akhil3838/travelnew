'use client';
import React, { useState } from "react";
import Trending from "./components/Trending";
import Topten from "./components/Topten";
import Footer from "./components/Footer";
import ToptenTrek from "./components/ToptenTrek";
import Pilgrims from "./components/Pilgrims";
import Honeymoon from "./components/Honeymoon";
import Link from "next/link";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <main>
      {/* Top Navigation Bar */}



{/* Hero Search Section with Video Background */}
<section className="search-hero position-relative py-5 min-vh-100 d-flex align-items-center">
  {/* Video Background */}
  <div className="video-background position-absolute w-100 h-100 top-0 start-0">
        {/* Fallback Image */}
        {!videoLoaded && (
          <img
            src="/load-min.jpg"
            alt="Fallback"
            className="w-100 h-100 object-fit-cover"
            style={{ objectFit: "cover" }}
          />
        )}

        {/* Video Element */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-100 h-100 object-fit-cover"
          style={{ display: videoLoaded ? "block" : "none" }}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source
            src="https://travelcultz.com/public/images/travelcultz.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div
          className="position-absolute w-100 h-100 top-0 start-0 bg-dark"
          style={{ opacity: 0.5 }}
        ></div>
      </div>  {/* Transparent Header */}
<header className="main-header position-absolute w-100 top-0 start-0" style={{ background: 'transparent' }}>
    <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo with elevation and smooth transition */}
        <div 
            className="logo-container d-flex align-items-center" 
            style={{
                padding: '8px 16px',
                borderRadius: '16px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',

            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 2px 10px rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
        >
            <span 
                className="logo-icon me-2" 
                style={{
                    fontSize: '24px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}
            >
                ✈️
            </span>
            <span 
                className="logo-text text-white" 
                style={{
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    letterSpacing: '0.5px'
                }}
            >
                GoWonder
            </span>
        </div>

        {/* Navigation with material ripple effect */}
        <nav className="main-nav d-none d-md-flex gap-1">
            <a 
                href="#" 
                className="nav-link text-white position-relative overflow-hidden"
                style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor:'rgba(255, 255, 255, 0.1)'
                }}
                // onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                // onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
                About Us
            </a>
            <a 
                href="#" 
                className="nav-link text-white position-relative overflow-hidden"
                style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                     backgroundColor:'rgba(255, 255, 255, 0.1)'

                }}
                // onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                // onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
                Contact Us
            </a>
            <a 
                href="#" 
                className="nav-link text-white position-relative overflow-hidden"
                style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        backgroundColor:'rgba(255, 255, 255, 0.1)'

                }}
                // onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                // onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
                Blog
            </a>
        </nav>

        {/* Mobile menu button with material design */}
        <button
            className="mobile-menu-btn btn d-md-none text-white p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            style={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
            <span style={{ fontSize: '1.5rem' }}>☰</span>
        </button>
    </div>
    
    {/* Divider with subtle gradient */}
    <div 
        className="header-bottom-line" 
        style={{ 
            height: '1px', 
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            margin: '0 16px'
        }}
    ></div>
</header>
  {/* Search Content */}
  <div className="container position-relative z-index-1">
    {/* ... rest of your search content remains the same ... */}
        <div className="row justify-content-center">
      <div className="col-lg-10">
        <h1 className="text-white text-center mt-5 display-4 fw-bold">Where will you wander next?</h1>

<div className="search-card glass-bg shadow-lg px-4 py-3">  
   <form className="d-flex flex-wrap align-items-center justify-content-between gap-3">
    
    {/* Type Selector */}
    {/* <div className="d-flex flex-column me-3">
      <small className="text-muted ms-2">Type</small>
      <div className="dropdown">
        <button
          className="btn btn-sm dropdown-toggle border-0 bg-transparent fw-semibold"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          All
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Trending
</a></li>
          <li><a className="dropdown-item" href="#">Top ten Tour 
</a></li>
          <li><a className="dropdown-item" href="#">Top ten Trek
</a></li>
          <li><a className="dropdown-item" href="#">Pilgrims 

</a></li>
          <li><a className="dropdown-item" href="#">Honeymoon Package
</a></li>

        </ul>
      </div>
    </div> */}

    {/* Location */}
    <div className="d-flex flex-column flex-grow-1 me-3">
      {/* <small className="text-muted ms-5">From</small> */}
      <div className="input-group">
        <span className="input-group-text bg-transparent border-0">
          <i className="fas fa-map-marker-alt text-secondary"></i>
        </span>
        <input
          type="text"
          className="form-control border-0 bg-transparent"
          placeholder="From Location"
        />
      </div>
    </div>

    {/* Keyword */}
    <div className="d-flex flex-column flex-grow-1 me-3">
      {/* <small className="text-muted ms-5">To</small> */}
      <div className="input-group">
        <span className="input-group-text bg-transparent border-0">
          <i className="fas fa-map-marker-alt text-secondary"></i>
        </span>
        <input
          type="text"
          className="form-control border-0 bg-transparent"
          placeholder="To Location"
        />
      </div>
    </div>

    {/* Search Advanced */}
<div className="d-flex flex-column flex-grow-1 me-3">
  {/* <small className="text-muted ms-2 mb-1">To Date</small> */}
  <div className="input-group">
    <span className="input-group-text border-0 bg-white">
      <i className="fas fa-calendar-alt text-secondary"></i> {/* Correct icon class */}
    </span>
   <input
  type="text"
  className="form-control border-0"
  placeholder="dd-mm-yyyy"
  onFocus={(e) => (e.target.type = 'date')}
  onBlur={(e) => e.target.value === '' && (e.target.type = 'text')}
/>

  </div>
</div>
    {/* Search Button */}
    <div>
      <button
        type="submit"
        className="btn btn-success rounded-pill px-4 d-flex align-items-center"
      >
        Search <i className="fas fa-search ms-2"></i>
      </button>
    </div>
  </form>
</div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a href="/packages" className="btn btn-outline-light rounded-pill px-4">
            <i className="fas fa-umbrella-beach me-2"></i> Beach Getaways
          </a>
          <a href="/packages" className="btn btn-outline-light rounded-pill px-4">
            <i className="fas fa-mountain me-2"></i> Mountain Retreats
          </a>
          <a href="/packages" className="btn btn-outline-light rounded-pill px-4">
            <i className="fas fa-heart me-2"></i> Romantic Escapes
          </a>
          <a href="/packages" className="btn btn-outline-light rounded-pill px-4">
            <i className="fas fa-hiking me-2"></i> Adventure Trips
          </a>
        </div>
      </div>
    </div>

  </div>
</section>

{/* Offcanvas Menu (keep this outside the video section) */}
<div
  className="offcanvas offcanvas-end bg-dark text-white"
  tabIndex="-1"
  id="mobileMenu"
  aria-labelledby="mobileMenuLabel"
>
  {/* <!-- Header --> */}
  <div className="offcanvas-header border-bottom border-secondary">
    <h5 id="mobileMenuLabel" className="fw-bold fs-4 mb-0">
      <span style={{ color: "#4facfe" }}>Go</span>Wonder
    </h5>
    <button
      type="button"
      className="btn-close btn-close-white"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>

  {/* <!-- Menu Items --> */}
  <div className="offcanvas-body d-flex flex-column pt-3">
    <div className="d-flex flex-column gap-2">
      <a href="#" className="nav-link p-3 rounded hover-item">
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-geo-alt fs-5" style={{ color: "#4facfe" }}></i>
          <span className="fw-medium">Destinations</span>
        </div>
      </a>

      <a href="#" className="nav-link p-3 rounded hover-item">
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-star fs-5" style={{ color: "#f8c291" }}></i>
          <span className="fw-medium">Experiences</span>
        </div>
      </a>

      <a href="#" className="nav-link p-3 rounded hover-item">
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-percent fs-5" style={{ color: "#78e08f" }}></i>
          <span className="fw-medium">Deals</span>
        </div>
      </a>

      <a href="#" className="nav-link p-3 rounded hover-item">
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-info-circle fs-5" style={{ color: "#fd79a8" }}></i>
          <span className="fw-medium">About</span>
        </div>
      </a>
    </div>

    {/* <!-- Auth Section --> */}
    <div className="mt-2">
<button 
  className="btn w-100 py-3 fw-bold rounded-pill"
  style={{
    background: "rgba(79, 172, 254, 0.15)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(79, 172, 254, 0.3)",
    color: "#4facfe",
    transition: "all 0.3s ease"
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.background = "rgba(79, 172, 254, 0.25)";
    e.currentTarget.style.boxShadow = "0 0 15px rgba(79, 172, 254, 0.2)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.background = "rgba(79, 172, 254, 0.15)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  Sign In
</button>      <p className="text-center mt-3 mb-0  text-light">
        Dont have an account? 
        <a href="#" className="text-decoration-none ms-1" style={{ color: "#4facfefb" }}>Sign up</a>
      </p>
    </div>
  </div>
</div>

{/* Trending Locations Section */}
<section className="trending-locations py-5">
  <Trending/>
</section>
{/* hot selling packages */}

{/* about section */}

<section className="about-section container">
  <div className="row align-items-center">
    {/* Left Image */}
    <div className="col-lg-6 mb-4 mb-lg-0">
      <div className="about-img">
        <img
          src="https://media.istockphoto.com/id/2147497907/photo/young-woman-traveler-relaxing-and-enjoying-the-tropical-sea-while-traveling-for-summer.jpg?s=612x612&w=0&k=20&c=iY2aqFsXX9Hzq_KwAZhy3ug74z0y7KHxUc_msPHyKzU="
          alt="About Us"
          className="img-fluid"
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="col-lg-6 about-content">
      <h5>About Us</h5>
      <h3>
        We Extract Pure Cold & Wood Press Edible Oil (100% Pure, No Preservatives,
        No Chemical Process)
      </h3>
      <p>
        In today’s fast-paced world, where health and food choices go hand-in-hand,
        selecting the right cooking oil has become increasingly challenging. With
        endless options available in the market, it’s essential to make an informed
        choice — one that not only meets your daily nutritional needs but also
        supports your long-term health and well-being.
      </p>

      <button className="btn btn-custom">Know more</button>
    </div>
  </div>
</section>



{/* about section end */}




{/* Standard Hot Selling Packages - Mobile Optimized */}
<section className="standard-packages py-4 overflow-hidden">
      <Topten/>
</section>
{/* hot selling end  */}

{/* adveture destination */}
{/* Adventure Destinations Section */}
<section className="adventure-destinations py-4 overflow-hidden">
  <div className="container px-0 px-sm-3">
    <div className="section-header text-center mb-4 px-3">
 <h2 className="display-5  fw-bold mb-3">Top Ten Trek</h2>
      <p className="lead">Discover heart-pounding experiences in the worlds most exciting destinations</p></div>

    <div className="row g-3 flex-nowrap flex-sm-wrap overflow-x-auto pb-2 px-2 mx-0 scroll-hide" style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}>
      {/* Destination 1 */}
        <ToptenTrek/>

      {/* Destination 2 */}
    </div>

  <Link href="/packages" style={{ textDecoration: 'none' }}>
  <div className="text-center mt-4">
         <button className="btn view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
      <span>View All Packages</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-right ms-2"
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
      </svg>
    </button>
  
      </div>
  
</Link>      </div>
</section>

{/* Standard Hot Selling Packages - Mobile Optimized */}
<section className="standard-packages py-4 overflow-hidden">
  <div className="container px-0 px-sm-3">
    <div className="section-header text-center mb-4 px-3">
      <h2 className="display-5  fw-bold mb-3">Pilgrims </h2>
      <p className='lead  '>Most popular deals booked by travelers</p>
    </div>

<div className="row g-3 flex-nowrap flex-sm-wrap overflow-x-auto pb-2 px-2 mx-0 scroll-hide" style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}>      {/* Package 1 */}
   <Pilgrims/>
      {/* Package 2 */}
    </div>

  <Link href="/packages" style={{ textDecoration: 'none' }}>
  <div className="text-center mt-4">
         <button className="btn view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
      <span>View All Packages</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-right ms-2"
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
      </svg>
    </button>
  
      </div> 
  
</Link>    
 </div>
</section>


{/* why choose us */}

<section className="why">
  <div className="container py-5">
    <h2 className="text-center section-title">Reason To Choose Us</h2>
    <div className="row g-4">
  
      <div className="col-md-3 col-sm-6">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/guarantee.png" alt="Since 1995" />
          <h6>Since 1995</h6>
        </div>
      </div>
  
      <div className="col-md-3 col-sm-6">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/map.png" alt="Itineraries" />
          <h6>Well Planned Itineraries</h6>
        </div>
      </div>
  
      <div className="col-md-3 col-sm-6">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/secured-letter--v1.png" alt="Payment" />
          <h6>Safe and Secure Payment</h6>
        </div>
      </div>
  
      <div className="col-md-3 col-sm-6">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/bus.png" alt="Transfers" />
          <h6>Comfortable Transfers</h6>
        </div>
      </div>
  
      <div className="col-md-3 col-sm-6">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/cheap-2.png" alt="Lowest Rates" />
          <h6>Lowest Rates Challenge</h6>
        </div>
      </div>
  
      <div className="col-md-3 col-sm-6">
        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/128/6924/6924580.png" alt="Safe for Women" />
          <h6>Safe For Solo Travellers and Women</h6>
        </div>
      </div>
  
      <div className="col-md-3 col-sm-6">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/conference.png" alt="Coordinators" />
          <h6>Experienced Tour Coordinators</h6>
        </div>
      </div>
  
      <div className="col-md-3 col-sm-6">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/phone.png" alt="Support" />
          <h6>24/7 Tele Customer Support</h6>
        </div>
      </div>
  
    </div>
  </div>
  
</section>

{/* why choose end */}

{/* Social Stories Section - Dark Theme with Videos */}
{/* <section className="social-stories py-5 bg-dark">
  <div className="container">
    <div className="section-header text-center mb-5">
      <h2 className="display-5 fw-bold mb-3 text-white">#Adveture</h2>
      <p className="lead text-light opacity-75">Raw moments from our global adventures</p>
    </div>

    <div className="d-block d-md-none">
      <div className="scrolling-wrapper pb-3 scroll-hide" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
        <div className="d-inline-block mx-2" style={{width: '75vw'}}>
          <div className="story-card instagram-story bg-black rounded-4 overflow-hidden position-relative h-100">
            <div className="story-video-container position-relative" style={{paddingTop: '133%'}}>
              <iframe 
                src="https://www.youtube.com/embed/F3h7RXhhM9Q?autoplay=1&mute=1&loop=1&playlist=F3h7RXhhM9Q" 
                title="YouTube Shorts"
                className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
              <div className="story-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-center">
                <span className="text-white fs-7">24.5k views</span>
                <span className="text-white-50 fs-8">2:15</span>
              </div>
            </div>
            <div className="story-caption p-3 border-top border-secondary">
              <small className="text-light opacity-75">Sunrise summit push 🏔️</small>
            </div>
          </div>
        </div>

        <div className="d-inline-block mx-2" style={{width: '75vw'}}>
          <div className="story-card youtube-story bg-black rounded-4 overflow-hidden position-relative h-100">
            <div className="story-video-container position-relative" style={{paddingTop: '133%'}}>
              <iframe
                src="https://www.youtube.com/embed/uNq0tDQIZwU?autoplay=1&mute=1&loop=1&playlist=uNq0tDQIZwU"
                title="YouTube Shorts"
                className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <div className="story-play-btn position-absolute top-50 start-50 translate-middle">
                <i className="bi bi-play-fill fs-3"></i>
              </div>
              <div className="story-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-center">
                <span className="text-white fs-7">1.2M views</span>
                <span className="text-white-50 fs-8">0:45</span>
              </div>
            </div>
            <div className="story-caption p-3 border-top border-secondary">
              <small className="text-light opacity-75">El Capitan free climb</small>
            </div>
          </div>
        </div>

        <div className="d-inline-block mx-2" style={{width: '75vw'}}>
          <div className="story-card instagram-story bg-black rounded-4 overflow-hidden position-relative h-100">
            <div className="story-video-container position-relative" style={{paddingTop: '133%'}}>
              <iframe 
                src="https://www.youtube.com/embed/Xnym6AvEWwY?autoplay=1&mute=1&loop=1&playlist=Xnym6AvEWwY"
                title="YouTube video"
                className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <div className="story-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-center">
                <span className="text-white fs-7">42.3k views</span>
                <span className="text-white-50 fs-8">1:30</span>
              </div>
            </div>
            <div className="story-caption p-3 border-top border-secondary">
              <small className="text-light opacity-75">Northern lights magic ✨</small>
            </div>
          </div>
        </div>

        <div className="d-inline-block mx-2" style={{width: '75vw'}}>
          <div className="story-card youtube-story bg-black rounded-4 overflow-hidden position-relative h-100">
            <div className="story-video-container position-relative" style={{paddingTop: '133%'}}>
              <iframe 
                src="https://www.youtube.com/embed/RdVdfpe_sFE?autoplay=1&mute=1&loop=1&playlist=RdVdfpe_sFE" 
                title="YouTube Shorts"
                className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
              <div className="story-play-btn position-absolute top-50 start-50 translate-middle">
                <i className="bi bi-play-fill fs-3"></i>
              </div>
              <div className="story-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-center">
                <span className="text-light fs-7">856k views</span>
                <span className="text-white-50 fs-8">0:58</span>
              </div>
            </div>
            <div className="story-caption p-3 border-top border-secondary">
              <small className="text-light opacity-75">Coral reef diving 🤿</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="d-none d-md-block">
      <div className="row g-4">
        <div className="col-12 col-md-4 col-lg-3">
          <div className="story-card instagram-story bg-black rounded-4 overflow-hidden position-relative">
            <div className="story-video-container position-relative">
              <iframe 
                src="https://www.youtube.com/embed/F3h7RXhhM9Q?&mute=1&loop=1&playlist=F3h7RXhhM9Q" 
                title="YouTube Shorts"
                className="w-100 h-100 object-fit-cover"
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
              <div className="story-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-center">
                <span className="text-white fs-7">24.5k views</span>
                <span className="text-white-50 fs-8">2:15</span>
              </div>
            </div>
            <div className="story-caption p-3 border-top border-secondary">
              <small className="text-light opacity-75">Sunrise summit push 🏔️</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div className="story-card youtube-story bg-black rounded-4 overflow-hidden position-relative">
            <div className="story-video-container position-relative">
              <iframe
                src="https://www.youtube.com/embed/uNq0tDQIZwU?&mute=1&loop=1&playlist=uNq0tDQIZwU"
                title="YouTube Shorts"
                className="w-100 h-100 object-fit-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <div className="story-play-btn position-absolute top-50 start-50 translate-middle">
                <i className="bi bi-play-fill fs-3"></i>
              </div>
              <div className="story-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-center">
                <span className="text-white fs-7">1.2M views</span>
                <span className="text-white-50 fs-8">0:45</span>
              </div>
            </div>
            <div className="story-caption p-3 border-top border-secondary">
              <small className="text-light opacity-75">El Capitan free climb</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div className="story-card instagram-story bg-black rounded-4 overflow-hidden position-relative">
            <div className="story-video-container position-relative">
              <iframe 
                src="https://www.youtube.com/embed/Xnym6AvEWwY?&mute=1&loop=1&playlist=Xnym6AvEWwY"
                title="YouTube video"
                className="w-100 h-100 object-fit-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <div className="story-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-center">
                <span className="text-white fs-7">42.3k views</span>
                <span className="text-white-50 fs-8">1:30</span>
              </div>
            </div>
            <div className="story-caption p-3 border-top border-secondary">
              <small className="text-light opacity-75">Northern lights magic ✨</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div className="story-card youtube-story bg-black rounded-4 overflow-hidden position-relative">
            <div className="story-video-container position-relative">
              <iframe 
                src="https://www.youtube.com/embed/RdVdfpe_sFE?&mute=1&loop=1&playlist=RdVdfpe_sFE" 
                title="YouTube Shorts"
                className="w-100 h-100 object-fit-cover"
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
              <div className="story-play-btn position-absolute top-50 start-50 translate-middle">
                <i className="bi bi-play-fill fs-3"></i>
              </div>
              <div className="story-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-center">
                <span className="text-light fs-7">856k views</span>
                <span className="text-white-50 fs-8">0:58</span>
              </div>
            </div>
            <div className="story-caption p-3 border-top border-secondary">
              <small className="text-light opacity-75">Coral reef diving 🤿</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-5">
      <button className="btn btn-outline-light px-4 py-2 d-flex align-items-center justify-content-center mx-auto rounded-pill border-2 fw-medium">
        <span>Follow Our Journey</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right ms-2"
          viewBox="0 0 16 16"
        >
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      </button>
    </div>
  </div>
</section> */}
{/* Standard Hot Selling Packages - Mobile Optimized */}
<section className="standard-packages py-4 overflow-hidden">
  <div className="container px-0 px-sm-3">
    <div className="section-header text-center mb-4 px-3">
      <h2 className="display-5  fw-bold mb-3">Honeymoon Packages</h2>
      <p className='lead  '>Most popular deals booked by travelers</p>
    </div>

    <div className="container pb-5">
  {/* <h2 className="section-title">BEST HONEYMOON DESTINATIONS</h2> */}

  {/* Month Tabs */}
  <div className="month-tabs mb-4 overflow-auto">
    <a href="#" className="active">Jan</a>
    <a href="#">Feb</a>
    <a href="#">Mar</a>
    <a href="#">April</a>
    <a href="#">May</a>
    <a href="#">June</a>
    <a href="#">July</a>
    <a href="#">Aug</a>
    <a href="#">Sep</a>
    <a href="#">Oct</a>
    <a href="#">Nov</a>
    <a href="#">Dec</a>
  </div>

  {/* Destinations */}
  <div className="row g-4">
    <div className="col-md-3">
      <div className="honey-card">
        <img 
          src="https://aaochalo.com/wp-content/uploads/2025/06/stopover-in-dubai_dubai-by-night.jpg" 
          alt="Dubai" 
        />
        <div className="honey-info">
          <h5>Dubai</h5>
          <p>Starting Price 25,300</p>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="honey-card">
        <img 
          src="https://mediaim.expedia.com/destination/1/134beaf20a6cad7d8d144a2844549cc6.jpg" 
          alt="Shimla" 
        />
        <div className="honey-info">
          <h5>Shimla</h5>
          <p>Starting Price 22,950</p>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="honey-card">
        <img 
          src="https://www.pelago.com/img/products/IN-India/kashmir-paradise-on-earth-tour-06-night-07-days/cd44565d-3ce0-442c-836b-76efb3eb25ad_kashmir-paradise-on-earth-tour-06-night-07-days-xlarge.jpg" 
          alt="Kashmir" 
        />
        <div className="honey-info">
          <h5>Kashmir</h5>
          <p>Starting Price 19,850</p>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="honey-card">
        <img 
          src="https://www.shutterstock.com/image-photo/pura-ulun-danu-bratan-night-600nw-689858809.jpg" 
          alt="Bali" 
        />
        <div className="honey-info">
          <h5>Bali</h5>
          <p>Starting Price 18,950</p>
        </div>
      </div>
    </div>
  </div>
</div>




 <Link href="/packages" style={{ textDecoration: 'none' }}>
  <div className="text-center mt-4">
         <button className="btn view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
      <span>View All Packages</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-right ms-2"
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
      </svg>
    </button>
  
      </div> 
  
</Link>     </div>
</section>

{/* google review */}
<div className="reviews-section">
  <div className="container">
    <h2 className="section-title">Guest Reviews</h2>

    <div id="reviewsCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="review-card">
                <div className="review-text">
                  "Dear Swan Tours We are indeed grateful to you for having arranged our fantastic tour to Jodhpur and Jasalmer...Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours.Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours."
                </div>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  alt="Reviewer"
                  className="reviewer-avatar"
                />
              </div>
              <div className="reviewer-info">
                <div className="star-rating">★★★★★</div>
                <div className="location">Jodhpur Jasalmer Tour</div>
                <div className="reviewer-name">Mr. Sudhakaran</div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="review-card">
                <div className="review-text">
                  "It was such a delightful experience! Everything was organized perfectly. Stress-free trip thanks to your team.Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours.Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours."
                </div>
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
                  alt="Reviewer"
                  className="reviewer-avatar"
                />
              </div>
              <div className="reviewer-info">
                <div className="star-rating">★★★★★</div>
                <div className="location">Rajasthan Tour</div>
                <div className="reviewer-name">Ms. Priya Sharma</div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="review-card">
                <div className="review-text">
                  "One of the best travel experiences we have had. The service was excellent and we look forward to booking again!vOur family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours.Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours."
                </div>
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=150&h=150&fit=crop&crop=face"
                  alt="Reviewer"
                  className="reviewer-avatar"
                />
              </div>
              <div className="reviewer-info">
                <div className="star-rating">★★★★★</div>
                <div className="location">Kerala Tour</div>
                <div className="reviewer-name">Mr. Anil Kumar</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="review-card">
                <div className="review-text">
                  "Our honeymoon trip was magical! Swan Tours planned everything seamlessly. Thank you for the beautiful memories.Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours.Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours."
                </div>
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face"
                  alt="Reviewer"
                  className="reviewer-avatar"
                />
              </div>
              <div className="reviewer-info">
                <div className="star-rating">★★★★★</div>
                <div className="location">Maldives Tour</div>
                <div className="reviewer-name">Mr. & Mrs. Ramesh</div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="review-card">
                <div className="review-text">
                  "Professional team, timely responses, and a wonderful itinerary. Truly satisfied with Swan Tours service.Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours.Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours."
                </div>
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face"
                  alt="Reviewer"
                  className="reviewer-avatar"
                />
              </div>
              <div className="reviewer-info">
                <div className="star-rating">★★★★★</div>
                <div className="location">Europe Tour</div>
                <div className="reviewer-name">Mrs. Kavita Nair</div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="review-card">
                <div className="review-text">
                  "Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours.Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours.Our family trip was well managed, kids had fun, and we could relax. Would highly recommend Swan Tours."
                </div>
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face"
                  alt="Reviewer"
                  className="reviewer-avatar"
                />
              </div>
              <div className="reviewer-info">
                <div className="star-rating">★★★★★</div>
                <div className="location">Shimla-Manali Tour</div>
                <div className="reviewer-name">Mr. Sharma Family</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev "
        type="button"
        data-bs-target="#reviewsCarousel"
        data-bs-slide="prev"
      >
        <i className="fa-solid fa-arrow-left fa-xl" style={{color:"black"}}></i>
      </button>
      <button
        className="carousel-control-next  "
        type="button"
        data-bs-target="#reviewsCarousel"
        data-bs-slide="next"
       >
        {/* <span className="carousel-control-next-icon"></span> */}
        <i className="fa-solid fa-arrow-right fa-xl" style={{color:"black"}}></i>
      </button>
    </div>
  </div>
</div>


{/* google review end */}



{/* footer */}
<Footer/>

  </main>

    
  );
}