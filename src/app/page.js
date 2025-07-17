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
      <span className="logo-text">GoWonder</span>
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
  <div className="offcanvas-header border-bottom">
    <h5 id="mobileMenuLabel" className="fw-bold">GoWonder</h5>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  <div className="offcanvas-body d-flex flex-column">
    <a href="#" className="nav-link py-3 border-bottom">Destinations</a>
    <a href="#" className="nav-link py-3 border-bottom">Experiences</a>
    <a href="#" className="nav-link py-3 border-bottom">Deals</a>
    <a href="#" className="nav-link py-3 border-bottom">About</a>
    <button className="btn btn-primary mt-4">Sign In</button>
  </div>
</div>

{/* Hero Search Section with Video Background */}
<section className="search-hero position-relative py-5 min-vh-100 d-flex align-items-center">
  {/* Video Background */}
  <div className="video-background position-absolute w-100 h-100 top-0 start-0 ">
    <video
      autoPlay
      muted
      loop
      className="w-100 h-100 object-fit-cover"
    >
      <source src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/home/banner/dreams-desktop-2560x1440" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="position-absolute w-100 h-100 top-0 start-0 bg-dark" style={{ opacity: 0.5 }}></div>
  </div>

  {/* Search Content */}
  <div className="container position-relative z-index-1">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <h1 className="text-white text-center mb-4 display-4 fw-bold">Where will you wander next?</h1>

        <div className="search-card bg-white rounded-4 shadow-lg p-4">

          <div className="tab-content" id="search-tabContent">
            {/* Flights Search */}
            <div className="tab-pane fade show active" id="flights" role="tabpanel">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">From</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                    <input type="text" className="form-control" placeholder="From City " />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">To</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                    <input type="text" className="form-control" placeholder="City/Country/Category"/>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Departure</label>
                  <input type="date" className="form-control" />
                </div>
                {/* <div className="col-md-3">
                  <label className="form-label">Return</label>
                  <input type="date" className="form-control" />
                </div> */}
                <div className="col-md-3">
                  <label className="form-label">Travelers</label>
                  <select className="form-select">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>Family (2+2)</option>
                  </select>
                </div>
                <div className="col-md-3 d-flex align-items-end">
                  <button className="btn btn-primar w-100 py-2" style={{backgroundColor:'#0f418eff', color:'white'}}>
                    <i className="fas fa-search me-2"></i> Search package
                  </button>
                </div>
              </form>
            </div>

            {/* Hotels Search */}
            <div className="tab-pane fade" id="hotels" role="tabpanel">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Destination</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                    <input type="text" className="form-control" placeholder="City, Hotel or Area" />
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Check-in</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Check-out</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Rooms & Guests</label>
                  <select className="form-select">
                    <option>1 Room, 2 Adults</option>
                    <option>1 Room, 1 Adult</option>
                    <option>2 Rooms, 4 Adults</option>
                  </select>
                </div>
                <div className="col-md-8 d-flex align-items-end">
                  <button className="btn btn-primary w-100 py-2">
                    <i className="fas fa-search me-2"></i> Search Hotels
                  </button>
                </div>
              </form>
            </div>

            {/* Packages Search */}
            <div className="tab-pane fade" id="packages" role="tabpanel">
              <form className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">From</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                    <input type="text" className="form-control" placeholder="Departure City" />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">To</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                    <input type="text" className="form-control" placeholder="Destination" />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Travel Dates</label>
                  <input type="text" className="form-control" placeholder="Select Dates" id="packageDates" />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Travelers</label>
                  <select className="form-select">
                    <option>2 Adults</option>
                    <option>1 Adult</option>
                    <option>Family (2+2)</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Budget</label>
                  <select className="form-select">
                    <option>Any Budget</option>
                    <option>Economy</option>
                    <option>Luxury</option>
                  </select>
                </div>
                <div className="col-md-6 d-flex align-items-end">
                  <button className="btn btn-primary w-100 py-2">
                    <i className="fas fa-search me-2"></i> Find Packages
                  </button>
                </div>
              </form>
            </div>
          </div>
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

{/* Trending Locations Section */}
<section className="trending-locations py-5">
  <div className="container">
    <h2 className="display-5 text-white fw-bold mb-3 text-center">Trending Destinations</h2>
    <p className="lead  text-light text-center">Explore the most popular travel spots this season</p>
    
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

{/* Standard Hot Selling Packages */}
<section className="standard-packages py-5">
  <div className="container">
    <div className="section-header text-center mb-5">
      <h2 className="display-5 text-white fw-bold mb-3">Hot Selling Packages</h2>
      <p className='lead  text-light'>Most popular deals booked by travelers</p>
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
                <span className="text-decoration-line-through text-light me-2">$1,499</span>
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
                <span className="text-decoration-line-through text-light me-2">$2,299</span>
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
      <p className="lead  text-light ">Discover heart-pounding experiences in the worlds most exciting destinations</p>
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

{/* Social Stories Section - Dark Theme with Videos */}
<section className="social-stories py-5 bg-dark">
  <div className="container">
    <div className="section-header text-center mb-5">
      <h2 className="display-5 fw-bold mb-3 text-white">#AdventureUnfiltered</h2>
      <p className="lead text-light opacity-75">Raw moments from our global adventures</p>
    </div>

    <div className="row g-4">
      {/* Instagram Story 1 - Video */}
      <div className="col-12 col-md-4 col-lg-3">
        <div className="story-card instagram-story bg-black rounded-4 overflow-hidden position-relative">
          <div className="story-video-container position-relative">
            <iframe 
              src="https://www.youtube.com/embed/F3h7RXhhM9Q?autoplay=1&mute=1&loop=1&playlist=F3h7RXhhM9Q" 
              title="YouTube Shorts"
              className="w-100 h-100 object-fit-cover"
              allow="autoplay; encrypted-media" 
              allowFullScreen
            ></iframe>
            {/* <div className="story-platform position-absolute top-0 start-0 m-3">
              <i className="bi bi-instagram fs-5 text-white"></i>
            </div> */}
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
              src="https://www.youtube.com/embed/uNq0tDQIZwU?autoplay=1&mute=1&loop=1&playlist=uNq0tDQIZwU"
              title="YouTube Shorts"
              className="w-100 h-100 object-fit-cover"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            {/* <div className="story-platform position-absolute top-0 start-0 m-3">
              <i className="bi bi-youtube fs-5 text-white"></i>
            </div> */}
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
              src="https://www.youtube.com/embed/Xnym6AvEWwY?autoplay=1&mute=1&loop=1&playlist=Xnym6AvEWwY"
              title="YouTube video"
              className="w-100 h-100 object-fit-cover"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            {/* <div className="story-platform position-absolute top-0 start-0 m-3">
              <i className="bi bi-instagram fs-5 text-white"></i>
            </div> */}
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
              src="https://www.youtube.com/embed/RdVdfpe_sFE?autoplay=1&mute=1&loop=1&playlist=RdVdfpe_sFE" 
              title="YouTube Shorts"
              className="w-100 h-100 object-fit-cover"
              allow="autoplay; encrypted-media" 
              allowFullScreen
            ></iframe>
            {/* <div className="story-platform position-absolute top-0 start-0 m-3">
              <i className="bi bi-youtube fs-5 text-white"></i>
            </div> */}
            <div className="story-play-btn position-absolute top-50 start-50 translate-middle">
              <i className="bi bi-play-fill fs-3"></i>
            </div>
            <div className="story-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-center">
              <span className="text-white fs-7">856k views</span>
              <span className="text-white-50 fs-8">0:58</span>
            </div>
          </div>
          <div className="story-caption p-3 border-top border-secondary">
            <small className="text-light opacity-75">Coral reef diving 🤿</small>
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


  </main>

    
  );
}