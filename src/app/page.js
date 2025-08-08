'use client';
import React, { useState } from "react";

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
            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/home/banner/dreams-desktop-2560x1440"
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
      type="date"
      className="form-control border-0"
      style={{ backgroundColor: '#fff', color: '#000' }}
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
          <a href="#" className="btn btn-outline-light rounded-pill px-4">
            <i className="fas fa-umbrella-beach me-2"></i> Beach Getaways
          </a>
          <a href="#" className="btn btn-outline-light rounded-pill px-4">
            <i className="fas fa-mountain me-2"></i> Mountain Retreats
          </a>
          <a href="#" className="btn btn-outline-light rounded-pill px-4">
            <i className="fas fa-heart me-2"></i> Romantic Escapes
          </a>
          <a href="#" className="btn btn-outline-light rounded-pill px-4">
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
  <div className="container">
    <h2 className="display-5 text-white fw-bold mb-3  text-center">Trending Destinations</h2>
    <p className="lead  text-light text-center">Explore the most popular travel spots this season</p>
    
<div id="locationsCarousel" className="carousel slide"> {/* Removed data-bs-ride="carousel" */}
  <div className="carousel-inner">        {/* Slide 1 - Active (contains 4 cards) */}
        <div className="carousel-item active">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="location-card">
                <div className="location-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Paris" 
                    className="location-image"
                  />
                  <div className="location-badge">30% OFF</div>
                </div>
                <div className="location-info p-3">
                  <h3 className="location-name">Paris, France</h3>
                  <div className="location-meta d-flex justify-content-between align-items-center">
                    <span className="location-price">From ₹799</span>
                    <span className="location-rating">⭐ 4.8</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="location-card">
                <div className="location-image-container">
                  <img 
                    src="https://media.timeout.com/images/106182485/750/562/image.jpg" 
                    alt="Bali" 
                    className="location-image"
                  />
                  <div className="location-badge">Early Bird</div>
                </div>
                <div className="location-info p-3">
                  <h3 className="location-name">Bali, Indonesia</h3>
                  <div className="location-meta d-flex justify-content-between align-items-center">
                    <span className="location-price">From ₹649</span>
                    <span className="location-rating">⭐ 4.9</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="location-card">
                <div className="location-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Tokyo" 
                    className="location-image"
                  />
                </div>
                <div className="location-info p-3">
                  <h3 className="location-name">Tokyo, Japan</h3>
                  <div className="location-meta d-flex justify-content-between align-items-center">
                    <span className="location-price">From ₹1099</span>
                    <span className="location-rating">⭐ 4.7</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="location-card">
                <div className="location-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Maldives" 
                    className="location-image"
                  />
                  <div className="location-badge">Popular</div>
                </div>
                <div className="location-info p-3">
                  <h3 className="location-name">Maldives</h3>
                  <div className="location-meta d-flex justify-content-between align-items-center">
                    <span className="location-price">From ₹1299</span>
                    <span className="location-rating">⭐ 4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide 2 (you would duplicate the above structure with 4 different cards) */}
        <div className="carousel-item">
          <div className="row g-4">
            {/* Card 5 */}
            <div className="col-md-6 col-lg-3">
              <div className="location-card">
                <div className="location-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="New York" 
                    className="location-image"
                  />
                  <div className="location-badge">Special</div>
                </div>
                <div className="location-info p-3">
                  <h3 className="location-name">New York, USA</h3>
                  <div className="location-meta d-flex justify-content-between align-items-center">
                    <span className="location-price">From ₹1499</span>
                    <span className="location-rating">⭐ 4.8</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="col-md-6 col-lg-3">
              <div className="location-card">
                <div className="location-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Rome" 
                    className="location-image"
                  />
                  <div className="location-badge">Limited</div>
                </div>
                <div className="location-info p-3">
                  <h3 className="location-name">Rome, Italy</h3>
                  <div className="location-meta d-flex justify-content-between align-items-center">
                    <span className="location-price">From ₹899</span>
                    <span className="location-rating">⭐ 4.9</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 7 */}
            <div className="col-md-6 col-lg-3">
              <div className="location-card">
                <div className="location-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Sydney" 
                    className="location-image"
                  />
                </div>
                <div className="location-info p-3">
                  <h3 className="location-name">Sydney, Australia</h3>
                  <div className="location-meta d-flex justify-content-between align-items-center">
                    <span className="location-price">From ₹1199</span>
                    <span className="location-rating">⭐ 4.7</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 8 */}
            <div className="col-md-6 col-lg-3">
              <div className="location-card">
                <div className="location-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Dubai" 
                    className="location-image"
                  />
                  <div className="location-badge">Luxury</div>
                </div>
                <div className="location-info p-3">
                  <h3 className="location-name">Dubai, UAE</h3>
                  <div className="location-meta d-flex justify-content-between align-items-center">
                    <span className="location-price">From ₹1599</span>
                    <span className="location-rating">⭐ 4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#locationsCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#locationsCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#locationsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#locationsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
    </div>
    
    <div className="text-center mt-4">
      <button className="btn  view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
        <span >View All Destinations</span>
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
</section>
{/* hot selling packages */}

{/* Standard Hot Selling Packages - Mobile Optimized */}
<section className="standard-packages py-4 overflow-hidden">
  <div className="container px-0 px-sm-3">
    <div className="section-header text-center mb-4 px-3">
      <h2 className="display-5 text-white fw-bold mb-3">Top Ten Tour</h2>
      <p className='lead  text-light'>Most popular deals booked by travelers</p>
    </div>

<div className="row g-3 flex-nowrap flex-sm-wrap overflow-x-auto pb-2 px-2 mx-0 scroll-hide" style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}>      {/* Package 1 */}
      <div className="col-10 col-sm-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="package-card-standard h-100 mx-2">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Bali Package" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="package-tag">BESTSELLER</div>
          </div>
          <div className="package-body p-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">7 Days</span>
              <span className="text-warning">★ 4.8 (243)</span>
            </div>
            <h3 className="h6">Bali Premium Vacation</h3>
            <p className="small mb-2">Private villa with pool & daily spa treatments</p>
            
            <div className="package-details mb-2">
              <div className="detail-item small">
                <i className="fas fa-plane me-1"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-hotel me-1"></i>
                <span>5★ Accommodation</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-utensils me-1"></i>
                <span>Breakfast Included</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-decoration-line-through text-light me-1 small">$1,499</span>
                <span className="h6 text-primary">₹1,099</span>
                <span className="badge bg-danger ms-1 small">Save 27%</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Package 2 */}
      <div className="col-10 col-sm-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="package-card-standard h-100 mx-2">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Maldives Package" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="package-tag">LUXURY</div>
          </div>
          <div className="package-body p-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">5 Days</span>
              <span className="text-warning">★ 4.9 (187)</span>
            </div>
            <h3 className="h6">Maldives Paradise</h3>
            <p className="small mb-2">Overwater bungalow with private beach access</p>
            
            <div className="package-details mb-2">
              <div className="detail-item small">
                <i className="fas fa-plane me-1"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-hotel me-1"></i>
                <span>5★ Resort</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-utensils me-1"></i>
                <span>All Inclusive</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-decoration-line-through text-light me-1 small">$2,299</span>
                <span className="h6 text-primary">₹1,799</span>
                <span className="badge bg-danger ms-1 small">Save 22%</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Package 3 */}
      <div className="col-10 col-sm-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="package-card-standard h-100 mx-2">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Japan Package" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="package-tag">SEASONAL</div>
          </div>
          <div className="package-body p-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">10 Days</span>
              <span className="text-warning">★ 4.7 (156)</span>
            </div>
            <h3 className="h6">Japan Cherry Blossom Tour</h3>
            <p className="small mb-2">Tokyo, Kyoto, Osaka with sakura viewing</p>
            
            <div className="package-details mb-2">
              <div className="detail-item small">
                <i className="fas fa-plane me-1"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-hotel me-1"></i>
                <span>4★ Hotels</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-train me-1"></i>
                <span>Bullet Train Pass</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="h6 text-primary">₹2,499</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    </div>  </div>
</section>
{/* hot selling end  */}

{/* adveture destination */}
{/* Adventure Destinations Section */}
<section className="adventure-destinations py-4 overflow-hidden">
  <div className="container px-0 px-sm-3">
    <div className="section-header text-center mb-4 px-3">
 <h2 className="display-5 text-white fw-bold mb-3">Top Ten Trek</h2>
      <p className="lead  text-light ">Discover heart-pounding experiences in the worlds most exciting destinations</p>    </div>

    <div className="row g-3 flex-nowrap flex-sm-wrap overflow-x-auto pb-2 px-2 mx-0 scroll-hide" style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}>
      {/* Destination 1 */}
      <div className="col-10 col-sm-6 col-lg-3 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="adventure-card h-100 mx-2">
          <div className="adventure-img-container">
            <img 
              src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/opinion/DownShutterstock-1673365200.jpg&w=900&height=601" 
              alt="Nepal Trekking" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="adventure-level">EXTREME</div>
          </div>
          <div className="adventure-content p-3">
            <h3 className="h6 mb-2">Everest Base Camp Trek</h3>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-primary fw-bold small">Nepal</span>
              <span className="text-warning small">★ 4.9</span>
            </div>
            <div className="adventure-features mb-3">
              <span className="badge bg-light text-dark me-1 small">🥾 Trekking</span>
              <span className="badge bg-light text-dark me-1 small">⛰️ 5,364m</span>
              <span className="badge bg-light text-dark small">14 Days</span>
            </div>
            <button className="btn btn-sm btn-outline-primary w-100">Explore</button>
          </div>
        </div>
      </div>

      {/* Destination 2 */}
      <div className="col-10 col-sm-6 col-lg-3 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="adventure-card h-100 mx-2">
          <div className="adventure-img-container">
            <img 
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e7/7f/93.jpg" 
              alt="New Zealand Bungee" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="adventure-level">HIGH</div>
          </div>
          <div className="adventure-content p-3">
            <h3 className="h6 mb-2">Queenstown Bungee Jump</h3>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-primary fw-bold small">New Zealand</span>
              <span className="text-warning small">★ 4.8</span>
            </div>
            <div className="adventure-features mb-3">
              <span className="badge bg-light text-dark me-1 small">🪂 134m Jump</span>
              <span className="badge bg-light text-dark small">1 Day</span>
            </div>
            <button className="btn btn-sm btn-outline-primary w-100">Take the Leap</button>
          </div>
        </div>
      </div>

      {/* Destination 3 */}
      <div className="col-10 col-sm-6 col-lg-3 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="adventure-card h-100 mx-2">
          <div className="adventure-img-container">
            <img 
              src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Costa Rica Zipline" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="adventure-level">MODERATE</div>
          </div>
          <div className="adventure-content p-3">
            <h3 className="h6 mb-2">Monteverde Cloud Forest</h3>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-primary fw-bold small">Costa Rica</span>
              <span className="text-warning small">★ 4.7</span>
            </div>
            <div className="adventure-features mb-3">
              <span className="badge bg-light text-dark me-1 small">🌳 Ziplining</span>
              <span className="badge bg-light text-dark me-1 small">🐒 Wildlife</span>
              <span className="badge bg-light text-dark small">3 Days</span>
            </div>
            <button className="btn btn-sm btn-outline-primary w-100">Book Tour</button>
          </div>
        </div>
      </div>

      {/* Destination 4 */}
      <div className="col-10 col-sm-6 col-lg-3 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="adventure-card h-100 mx-2">
          <div className="adventure-img-container">
            <img 
              src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Iceland Glacier Hike" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="adventure-level">CHALLENGING</div>
          </div>
          <div className="adventure-content p-3">
            <h3 className="h6 mb-2">Iceland Glacier Hike</h3>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-primary fw-bold small">Iceland</span>
              <span className="text-warning small">★ 4.9</span>
            </div>
            <div className="adventure-features mb-3">
              <span className="badge bg-light text-dark me-1 small">🧊 Glacier</span>
              <span className="badge bg-light text-dark me-1 small">🥾 Hiking</span>
              <span className="badge bg-light text-dark small">6 Hours</span>
            </div>
            <button className="btn btn-sm btn-outline-primary w-100">Join Expedition</button>
          </div>
        </div>
      </div>
    </div>

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

    </div>  </div>
</section>

{/* Standard Hot Selling Packages - Mobile Optimized */}
<section className="standard-packages py-4 overflow-hidden">
  <div className="container px-0 px-sm-3">
    <div className="section-header text-center mb-4 px-3">
      <h2 className="display-5 text-white fw-bold mb-3">Pilgrims </h2>
      <p className='lead  text-light'>Most popular deals booked by travelers</p>
    </div>

<div className="row g-3 flex-nowrap flex-sm-wrap overflow-x-auto pb-2 px-2 mx-0 scroll-hide" style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}>      {/* Package 1 */}
      <div className="col-10 col-sm-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="package-card-standard h-100 mx-2">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Bali Package" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="package-tag">BESTSELLER</div>
          </div>
          <div className="package-body p-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">7 Days</span>
              <span className="text-warning">★ 4.8 (243)</span>
            </div>
            <h3 className="h6">Bali Premium Vacation</h3>
            <p className="small mb-2">Private villa with pool & daily spa treatments</p>
            
            <div className="package-details mb-2">
              <div className="detail-item small">
                <i className="fas fa-plane me-1"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-hotel me-1"></i>
                <span>5★ Accommodation</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-utensils me-1"></i>
                <span>Breakfast Included</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-decoration-line-through text-light me-1 small">$1,499</span>
                <span className="h6 text-primary">₹1,099</span>
                <span className="badge bg-danger ms-1 small">Save 27%</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Package 2 */}
      <div className="col-10 col-sm-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="package-card-standard h-100 mx-2">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Maldives Package" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="package-tag">LUXURY</div>
          </div>
          <div className="package-body p-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">5 Days</span>
              <span className="text-warning">★ 4.9 (187)</span>
            </div>
            <h3 className="h6">Maldives Paradise</h3>
            <p className="small mb-2">Overwater bungalow with private beach access</p>
            
            <div className="package-details mb-2">
              <div className="detail-item small">
                <i className="fas fa-plane me-1"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-hotel me-1"></i>
                <span>5★ Resort</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-utensils me-1"></i>
                <span>All Inclusive</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-decoration-line-through text-light me-1 small">$2,299</span>
                <span className="h6 text-primary">₹1,799</span>
                <span className="badge bg-danger ms-1 small">Save 22%</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Package 3 */}
      <div className="col-10 col-sm-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="package-card-standard h-100 mx-2">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Japan Package" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="package-tag">SEASONAL</div>
          </div>
          <div className="package-body p-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">10 Days</span>
              <span className="text-warning">★ 4.7 (156)</span>
            </div>
            <h3 className="h6">Japan Cherry Blossom Tour</h3>
            <p className="small mb-2">Tokyo, Kyoto, Osaka with sakura viewing</p>
            
            <div className="package-details mb-2">
              <div className="detail-item small">
                <i className="fas fa-plane me-1"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-hotel me-1"></i>
                <span>4★ Hotels</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-train me-1"></i>
                <span>Bullet Train Pass</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="h6 text-primary">₹2,499</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    </div>  </div>
</section>

{/* Social Stories Section - Dark Theme with Videos */}
<section className="social-stories py-5 bg-dark">
  <div className="container">
    <div className="section-header text-center mb-5">
      <h2 className="display-5 fw-bold mb-3 text-white">#Adveture</h2>
      <p className="lead text-light opacity-75">Raw moments from our global adventures</p>
    </div>

    {/* Mobile scrollable container */}
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

    {/* Desktop grid layout (hidden on mobile) */}
    <div className="d-none d-md-block">
      <div className="row g-4">
        {/* Instagram Story 1 - Video */}
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

        {/* YouTube Story 1 - Video */}
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

        {/* Instagram Story 2 - Video */}
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

        {/* YouTube Story 2 - Video */}
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
</section>
{/* Standard Hot Selling Packages - Mobile Optimized */}
<section className="standard-packages py-4 overflow-hidden">
  <div className="container px-0 px-sm-3">
    <div className="section-header text-center mb-4 px-3">
      <h2 className="display-5 text-white fw-bold mb-3">Honeymoon Packages</h2>
      <p className='lead  text-light'>Most popular deals booked by travelers</p>
    </div>

<div className="row g-3 flex-nowrap flex-sm-wrap overflow-x-auto pb-2 px-2 mx-0 scroll-hide" style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}>      {/* Package 1 */}
      <div className="col-10 col-sm-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="package-card-standard h-100 mx-2">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Bali Package" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="package-tag">BESTSELLER</div>
          </div>
          <div className="package-body p-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">7 Days</span>
              <span className="text-warning">★ 4.8 (243)</span>
            </div>
            <h3 className="h6">Bali Premium Vacation</h3>
            <p className="small mb-2">Private villa with pool & daily spa treatments</p>
            
            <div className="package-details mb-2">
              <div className="detail-item small">
                <i className="fas fa-plane me-1"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-hotel me-1"></i>
                <span>5★ Accommodation</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-utensils me-1"></i>
                <span>Breakfast Included</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-decoration-line-through text-light me-1 small">$1,499</span>
                <span className="h6 text-primary">₹1,099</span>
                <span className="badge bg-danger ms-1 small">Save 27%</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Package 2 */}
      <div className="col-10 col-sm-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="package-card-standard h-100 mx-2">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Maldives Package" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="package-tag">LUXURY</div>
          </div>
          <div className="package-body p-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">5 Days</span>
              <span className="text-warning">★ 4.9 (187)</span>
            </div>
            <h3 className="h6">Maldives Paradise</h3>
            <p className="small mb-2">Overwater bungalow with private beach access</p>
            
            <div className="package-details mb-2">
              <div className="detail-item small">
                <i className="fas fa-plane me-1"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-hotel me-1"></i>
                <span>5★ Resort</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-utensils me-1"></i>
                <span>All Inclusive</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-decoration-line-through text-light me-1 small">$2,299</span>
                <span className="h6 text-primary">₹1,799</span>
                <span className="badge bg-danger ms-1 small">Save 22%</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Package 3 */}
      <div className="col-10 col-sm-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
        <div className="package-card-standard h-100 mx-2">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Japan Package" 
              className="img-fluid w-100"
              style={{height: '180px', objectFit: 'cover'}}
            />
            <div className="package-tag">SEASONAL</div>
          </div>
          <div className="package-body p-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">10 Days</span>
              <span className="text-warning">★ 4.7 (156)</span>
            </div>
            <h3 className="h6">Japan Cherry Blossom Tour</h3>
            <p className="small mb-2">Tokyo, Kyoto, Osaka with sakura viewing</p>
            
            <div className="package-details mb-2">
              <div className="detail-item small">
                <i className="fas fa-plane me-1"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-hotel me-1"></i>
                <span>4★ Hotels</span>
              </div>
              <div className="detail-item small">
                <i className="fas fa-train me-1"></i>
                <span>Bullet Train Pass</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="h6 text-primary">₹2,499</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    </div>  </div>
</section>

{/* footer */}
<footer className="bg-dark text-white pt-5 pb-4">
       <div className="header-bottom-line my-5" style={{ height: '2px', background: 'white', opacity: 0.1 }}></div>

  <div className="container">
    <div className="row g-4">
      {/* Company Info */}
      <div className="col-lg-4 col-md-6">
        <div className="d-flex align-items-center mb-3">
          <span className="logo-icon fs-3 me-2">✈️</span>
          <span className="logo-text fs-4 fw-bold">GoWonder</span>
        </div>
        <p className=" mb-4">
          Discover the world with GoWonder. We create unforgettable travel experiences tailored just for you.
        </p>
        <div className="social-icons d-flex gap-3">
          <a href="#" className="text-white fs-5"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-pinterest-p"></i></a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="col-lg-2 col-md-6">
        <h5 className="fw-bold mb-4">Explore</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="#" className=" text-decoration-none text-light">Destinations</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-light">Tour Packages</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-light">Flight Deals</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-light">Hotel Stays</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-light">Travel Guides</a></li>
        </ul>
      </div>

      {/* Support */}
      <div className="col-lg-2 col-md-6">
        <h5 className="fw-bold mb-4">Support</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Help Center</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">FAQs</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Privacy Policy</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Terms of Service</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-lg-4 col-md-6">
        <h5 className="fw-bold mb-4">Contact Us</h5>
        <ul className="list-unstyled text-muted">
          <li className="mb-3 d-flex align-items-start">
            <i className="fas fa-map-marker-alt me-3 mt-1"></i>
            <span>123 Travel Street, Wanderlust City, WC 12345</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="fas fa-phone-alt me-3"></i>
            <span>+1 (555) 123-4567</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="fas fa-envelope me-3"></i>
            <span>hello@gowonder.com</span>
          </li>
        </ul>
        
        {/* Newsletter */}
        <div className="newsletter mt-4">
          <h6 className="fw-bold mb-3">Subscribe to our newsletter</h6>
          <div className="input-group">
            <input 
              type="email" 
              className="form-control bg-black border-dark text-white" 
              placeholder="Your email" 
              aria-label="Your email"
            />
            <button className="btn btn-primary" type="button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="row mt-5">
      <div className="col-12">
        <hr className="border-secondary"/>
        <div className="d-md-flex justify-content-between text-center text-md-start">
          <p className=" mb-0">© {new Date().getFullYear()} GoWonder. All rights reserved.</p>
          <div className="payment-methods mt-3 mt-md-0">
            <i className="fab fa-cc-visa fs-4 me-2"></i>
            <i className="fab fa-cc-mastercard fs-4 me-2"></i>
            <i className="fab fa-cc-paypal fs-4 me-2"></i>
            <i className="fab fa-cc-amex fs-4"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  </main>

    
  );
}