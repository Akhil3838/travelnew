'use client';
import React from 'react';

export default function Home() {
  return (
    <main>
      {/* Top Navigation Bar */}
<header className="main-header">
  <div className="container d-flex justify-content-between align-items-center py-3">
    <div className="logo-container">
      <span className="logo-icon">✈️</span>
      <span className="logo-text">TravelEase</span>
    </div>

    <nav className="main-nav d-none d-md-flex gap-4">
      <a href="#" className="nav-link">About Us</a>
      <a href="#" className="nav-link">Contact Us</a>
      <a href="#" className="nav-link">Blog</a>
    </nav>

    {/* Button to toggle offcanvas */}
    <button
      className="mobile-menu-btn btn d-md-none"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#mobileMenu"
      aria-controls="mobileMenu"
    >
      ☰
    </button>
  </div>
</header>

{/* Offcanvas Menu */}
<div
  className="offcanvas offcanvas-end"
  tabIndex="-1"
  id="mobileMenu"
  aria-labelledby="mobileMenuLabel"
>
  <div className="offcanvas-header">
    <h5 id="mobileMenuLabel">Menu</h5>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  <div className="offcanvas-body d-flex flex-column gap-3">
    <a href="#" className="nav-link">About Us</a>
    <a href="#" className="nav-link">Contact Us</a>
    <a href="#" className="nav-link">Blog</a>
  </div>
</div>

      {/* Category Header with Search */}
      <section className="category-header">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
          {/* Category Navigation */}
          <nav className="category-nav d-flex flex-wrap justify-content-center gap-2 mb-3 mb-md-0">
           <div className="dropdown">
  <button className="btn  text-light category-pill dropdown-toggle international-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    International
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Europe</a></li>
    <li><a className="dropdown-item" href="#">Asia</a></li>
    <li><a className="dropdown-item" href="#">Africa</a></li>
  </ul>
</div>

<div className="dropdown">
  <button className="btn text-light category-pill dropdown-toggle domestic-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Domestic
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Family</a></li>
    <li><a className="dropdown-item" href="#">Adveture</a></li>
    <li><a className="dropdown-item" href="#">Couple</a></li>
  </ul>
</div>

<div className="dropdown text-light">
  <button className="btn text-light category-pill dropdown-toggle weekend-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Weekend Getaway
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Hill Stations</a></li>
    <li><a className="dropdown-item" href="#">Beach Trips</a></li>
  </ul>
</div>

<div className="dropdown">
  <button className="btn text-light category-pill dropdown-toggle honeymoon-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Honeymoon
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Maldives</a></li>
    <li><a className="dropdown-item" href="#">Bali</a></li>
  </ul>
</div>

          </nav>

          {/* Search Bar */}
          <div className="search-container position-relative">
            <input type="text" className="search-input" placeholder="Search destinations, hotels..." />
            <button className="search-btn">Search</button>
            <i className="search-icon fas fa-search"></i>
          </div>
        </div>
      </section>

      {/* Main Content */}
     <section className="main-content" style={{backgroundColor:'black'}}>
  <video
    src="https://travelcultz.com/public/images/travelcultz.mp4"
    height="360"
    
    autoPlay
    muted
    loop
    style={{ width: "100%", objectFit: "cover"  }}
  >
    Your browser does not support the video tag.
  </video>
</section>

{/* Trending Locations Section */}
{/* Trending Locations Section */}
<section className="trending-locations py-5">
  <div className="container">
    <h2 className="section-title mb-4 text-center">Trending Destinations</h2>
    <p className="section-subtitle text-center mb-5">Explore the most popular travel spots this season</p>
    
    <div id="locationsCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 - Active (contains 4 cards) */}
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
                    src="https://images.unsplash.com/photo-1538970272646-f61fabb3bfdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
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
      <button className="btn view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
        <span>View All Destinations</span>
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
</section><div className='pt-1 bg-secondary'></div>
{/* hot selling packages */}

{/* Standard Hot Selling Packages */}
<section className="standard-packages py-5">
  <div className="container">
    <div className="section-header text-center mb-5">
      <h2 className="mb-3 text-primary">Hot Selling Packages</h2>
      <p>Most popular deals booked by travelers</p>
    </div>

    <div className="row g-4">
      {/* Package 1 */}
      <div className="col-md-6 col-lg-4">
        <div className="package-card-standard h-100">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Bali Package" 
              className="img-fluid"
            />
            <div className="package-tag">BESTSELLER</div>
          </div>
          <div className="package-body p-4">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">7 Days</span>
              <span className="text-warning">★ 4.8 (243)</span>
            </div>
            <h3 className="h5">Bali Premium Vacation</h3>
            <p className=" small mb-3">Private villa with pool & daily spa treatments</p>
            
            <div className="package-details mb-3">
              <div className="detail-item">
                <i className="fas fa-plane me-2"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-hotel me-2"></i>
                <span>5★ Accommodation</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-utensils me-2"></i>
                <span>Breakfast Included</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-decoration-line-through text-muted me-2">$1,499</span>
                <span className="h5 text-primary">₹1,099</span>
                <span className="badge bg-danger ms-2">Save 27%</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Package 2 */}
      <div className="col-md-6 col-lg-4">
        <div className="package-card-standard h-100">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Maldives Package" 
              className="img-fluid"
            />
            <div className="package-tag">LUXURY</div>
          </div>
          <div className="package-body p-4">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">5 Days</span>
              <span className="text-warning">★ 4.9 (187)</span>
            </div>
            <h3 className="h5">Maldives Paradise</h3>
            <p className=" small mb-3">Overwater bungalow with private beach access</p>
            
            <div className="package-details mb-3">
              <div className="detail-item">
                <i className="fas fa-plane me-2"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-hotel me-2"></i>
                <span>5★ Resort</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-utensils me-2"></i>
                <span>All Inclusive</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-decoration-line-through text-muted me-2">$2,299</span>
                <span className="h5 text-primary">₹1,799</span>
                <span className="badge bg-danger ms-2">Save 22%</span>
              </div>
              <button className="btn btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Package 3 */}
      <div className="col-md-6 col-lg-4">
        <div className="package-card-standard h-100">
          <div className="package-img-container">
            <img 
              src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Japan Package" 
              className="img-fluid"
            />
            <div className="package-tag">SEASONAL</div>
          </div>
          <div className="package-body p-4">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-info">10 Days</span>
              <span className="text-warning">★ 4.7 (156)</span>
            </div>
            <h3 className="h5">Japan Cherry Blossom Tour</h3>
            <p className=" small mb-3">Tokyo, Kyoto, Osaka with sakura viewing</p>
            
            <div className="package-details mb-3">
              <div className="detail-item">
                <i className="fas fa-plane me-2"></i>
                <span>Flight Included</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-hotel me-2"></i>
                <span>4★ Hotels</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-train me-2"></i>
                <span>Bullet Train Pass</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="h5 text-primary">₹2,499</span>
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

    </div>
  </div>
</section>

{/* hot selling end  */}

{/* adveture destination */}
{/* Adventure Destinations Section */}
<section className="adventure-destinations py-5">
  <div className="container">
    <div className="section-header text-center mb-5">
      <h2 className="display-5 text-white fw-bold mb-3">Thrill Seekers Paradise</h2>
      <p className="lead  text-black ">Discover heart-pounding experiences in the worlds most exciting destinations</p>
    </div>

    <div className="row g-4">
      {/* Destination 1 */}
      <div className="col-md-6 col-lg-3">
        <div className="adventure-card">
          <div className="adventure-img-container">
            <img 
              src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/opinion/DownShutterstock-1673365200.jpg&w=900&height=601" 
              alt="Nepal Trekking" 
              className="img-fluid"
            />
            <div className="adventure-level">EXTREME</div>
          </div>
          <div className="adventure-content p-3">
            <h3 className="h5 mb-2">Everest Base Camp Trek</h3>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-primary fw-bold">Nepal</span>
              <span className="text-warning">★ 4.9</span>
            </div>
            <div className="adventure-features mb-3">
              <span className="badge bg-light text-dark me-2">🥾 Trekking</span>
              <span className="badge bg-light text-dark me-2">⛰️ 5,364m</span>
              <span className="badge bg-light text-dark">14 Days</span>
            </div>
            <button className="btn btn-sm btn-outline-primary w-100">Explore Adventure</button>
          </div>
        </div>
      </div>

      {/* Destination 2 */}
      <div className="col-md-6 col-lg-3">
        <div className="adventure-card">
          <div className="adventure-img-container">
            <img 
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e7/7f/93.jpg" 
              alt="New Zealand Bungee" 
              className="img-fluid"
            />
            <div className="adventure-level">HIGH</div>
          </div>
          <div className="adventure-content p-3">
            <h3 className="h5 mb-2">Queenstown Bungee Jump</h3>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-primary fw-bold">New Zealand</span>
              <span className="text-warning">★ 4.8</span>
            </div>
            <div className="adventure-features mb-3">
              <span className="badge bg-light text-dark me-2">🪂 134m Jump</span>
              <span className="badge bg-light text-dark">1 Day</span>
            </div>
            <button className="btn btn-sm btn-outline-primary w-100">Take the Leap</button>
          </div>
        </div>
      </div>

      {/* Destination 3 */}
      <div className="col-md-6 col-lg-3">
        <div className="adventure-card">
          <div className="adventure-img-container">
            <img 
              src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Costa Rica Zipline" 
              className="img-fluid"
            />
            <div className="adventure-level">MODERATE</div>
          </div>
          <div className="adventure-content p-3">
            <h3 className="h5 mb-2">Monteverde Cloud Forest</h3>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-primary fw-bold">Costa Rica</span>
              <span className="text-warning">★ 4.7</span>
            </div>
            <div className="adventure-features mb-3">
              <span className="badge bg-light text-dark me-2">🌳 Ziplining</span>
              <span className="badge bg-light text-dark me-2">🐒 Wildlife</span>
              <span className="badge bg-light text-dark">3 Days</span>
            </div>
            <button className="btn btn-sm btn-outline-primary w-100">Book Tour</button>
          </div>
        </div>
      </div>

      {/* Destination 4 */}
      <div className="col-md-6 col-lg-3">
        <div className="adventure-card">
          <div className="adventure-img-container">
            <img 
              src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Iceland Glacier Hike" 
              className="img-fluid"
            />
            <div className="adventure-level">CHALLENGING</div>
          </div>
          <div className="adventure-content p-3">
            <h3 className="h5 mb-2">Iceland Glacier Hike</h3>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-primary fw-bold">Iceland</span>
              <span className="text-warning">★ 4.9</span>
            </div>
            <div className="adventure-features mb-3">
              <span className="badge bg-light text-dark me-2">🧊 Glacier</span>
              <span className="badge bg-light text-dark me-2">🥾 Hiking</span>
              <span className="badge bg-light text-dark">6 Hours</span>
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

    </div>
  </div>
</section> 

{/* family destination */}
<section>


</section>

  </main>

    
  );
}