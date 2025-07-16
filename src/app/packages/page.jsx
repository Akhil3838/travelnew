'use client'
import Link from "next/link";
import React, { useState } from "react";

const travelPackages = [
  {
    id: 1,
    title: "4-Day Grand Canyon Adventure Tour from Las Vegas: South Rim, Hoover Dam",
    price: 236.54,
    originalPrice: 295.68,
    duration: "4 days",
    from: "Las Vegas",
    rating: 4.8,
    reviews: 16,
    tag: "Best Seller",
    discount: "20% Off",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/8f/78/23.jpg",
    code: "4239",
    highlights: [
      "Explore Grand Canyon South Rim & Antelope Canyon",
      "See the mighty Hoover Dam & historic Route 66",
      "Small group experience (max 12 travelers)",
      "Expert local guide with insider knowledge"
    ]
  },
  {
    id: 2,
    title: "4-Day Grand Canyon Small Group Tour from Las Vegas: South Rim, Antelope Canyon",
    price: 1074.53,
    originalPrice: 1343.16,
    duration: "4 days",
    from: "Las Vegas",
    rating: 4.8,
    reviews: 5,
    tag: "Small Group",
    discount: "20% Off",
    image: "https://www.reneeroaming.com/wp-content/uploads/2021/04/Ultimate-Yellowstone-To-Grand-Teton-Road-Trip-Itinerary.jpg",
    code: "9369",
    highlights: [
      "Exclusive small group experience (max 8 travelers)",
      "Sunset photography session at Horseshoe Bend",
      "Luxury transportation with panoramic windows",
      "Gourmet picnic lunch with canyon views"
    ]
  },
  {
    id: 3,
    title: "4-Day Grand Canyon Small Group Tour from Las Vegas: South Rim, Antelope Canyon",
    price: 1074.53,
    originalPrice: 1343.16,
    duration: "4 days",
    from: "Las Vegas",
    rating: 4.8,
    reviews: 5,
    tag: "Small Group",
    discount: "20% Off",
    image: "https://www.reneeroaming.com/wp-content/uploads/2021/04/Ultimate-Yellowstone-To-Grand-Teton-Road-Trip-Itinerary.jpg",
    code: "9369",
    highlights: [
      "Exclusive small group experience (max 8 travelers)",
      "Sunset photography session at Horseshoe Bend",
      "Luxury transportation with panoramic windows",
      "Gourmet picnic lunch with canyon views"
    ]
  },
];

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [isDragging, setIsDragging] = useState(false);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= maxPrice - 100) {
      setMinPrice(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= minPrice + 100) {
      setMaxPrice(value);
    }
  };

  const formatPrice = (price) => {
    if (price >= 5000) return '$5000+';
    return `₹${price.toLocaleString()}`;
  };

  const getSliderFillWidth = () => {
    const minPercent = (minPrice / 5000) * 100;
    const maxPercent = (maxPrice / 5000) * 100;
    return `${maxPercent - minPercent}%`;
  };

  const getSliderFillLeft = () => {
    return `${(minPrice / 5000) * 100}%`;
  };

  return (
    <div className="mb-4">
      <h6 className="fw-semibold mb-3 d-flex align-items-center">
        <i className="fas fa-indian-rupee-sign me-2 text-primary"></i>
        Price Range
      </h6>
      
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            <span className="h5 fw-bold text-primary mb-0">
              {formatPrice(minPrice)}
            </span>
            <span className="mx-2 text-muted">—</span>
            <span className="h5 fw-bold text-success mb-0">
              {formatPrice(maxPrice)}
            </span>
          </div>
          <small className="text-muted">
            Range: ₹{(maxPrice - minPrice).toLocaleString()}
          </small>
        </div>
      </div>

      <div className="position-relative mb-4">
        <div className="position-relative" style={{ height: '6px', background: '#e9ecef', borderRadius: '3px' }}>
          <div 
            className="position-absolute h-100 rounded"
            style={{
              left: getSliderFillLeft(),
              width: getSliderFillWidth(),
              background: 'linear-gradient(45deg, #007bff, #28a745)',
              transition: 'all 0.2s ease'
            }}
          />
        </div>

        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          value={minPrice}
          onChange={handleMinChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          className="position-absolute w-100 slider-input"
          style={{ 
            top: '-8px', 
            left: '0',
            height: '20px',
            background: 'transparent',
            appearance: 'none',
            zIndex: 1,
            cursor: 'pointer'
          }}
        />

        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          value={maxPrice}
          onChange={handleMaxChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          className="position-absolute w-100 slider-input"
          style={{ 
            top: '-8px', 
            left: '0',
            height: '20px',
            background: 'transparent',
            appearance: 'none',
            zIndex: 2,
            cursor: 'pointer'
          }}
        />

        {isDragging && (
          <>
            <div 
              className="position-absolute translate-middle-x bg-primary text-white px-2 py-1 rounded shadow-sm"
              style={{ 
                left: getSliderFillLeft(),
                top: '-35px',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                zIndex: 10
              }}
            >
              {formatPrice(minPrice)}
            </div>
            <div 
              className="position-absolute translate-middle-x bg-success text-white px-2 py-1 rounded shadow-sm"
              style={{ 
                left: `calc(${getSliderFillLeft()} + ${getSliderFillWidth()})`,
                top: '-35px',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                zIndex: 10
              }}
            >
              {formatPrice(maxPrice)}
            </div>
          </>
        )}
      </div>

      <div className="d-flex flex-wrap gap-2 mb-3">
        {[
          { label: 'Under ₹500', min: 0, max: 500 },
          { label: '₹500-1500', min: 500, max: 1500 },
          { label: '₹1500+', min: 1500, max: 5000 },
          { label: 'All', min: 0, max: 5000 }
        ].map((preset, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setMinPrice(preset.min);
              setMaxPrice(preset.max);
            }}
            className={`btn btn-sm ${
              minPrice === preset.min && maxPrice === preset.max
                ? 'btn-dark'
                : 'btn-outline-secondary'
            }`}
            style={{ fontSize: '12px' }}
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const Packages = () => {
  return (
    <>
      <header className="main-header">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link href={'/'} style={{textDecoration:'none'}}>
              <div className="logo-container d-flex align-items-center">
                <span className="logo-icon">✈️</span>
                <span className="logo-text">GoWonder</span>
              </div>
          </Link>

          <nav className="main-nav d-none d-md-flex gap-4">
            <a href="#" className="nav-link">About Us</a>
            <a href="#" className="nav-link">Contact Us</a>
            <a href="#" className="nav-link">Blog</a>
          </nav>

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

      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3 text-light">Discover the Grand Canyon</h2>
          <p className="lead text-light">Explore our curated selection of unforgettable adventures</p>
        </div>
        
        <div className="row">
          <div className="col-lg-3 mb-4">
            <div className="border p-4 rounded-3 mb-4 bg-light">
              <h5 className="fw-bold mb-3 text-dark">Refine Your Search</h5>
              <hr className="my-3" />
              
              <div className="mb-4">
                <h6 className="fw-semibold mb-3">Product Type</h6>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="vacation" />
                  <label className="form-check-label d-flex align-items-center" htmlFor="vacation">
                    <span className="ms-2 text-dark">Vacation Packages</span>
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="dayTrips" />
                  <label className="form-check-label d-flex align-items-center" htmlFor="dayTrips">
                    <span className="ms-2 text-dark">Day Trips</span>
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="thingsToDo" />
                  <label className="form-check-label d-flex align-items-center" htmlFor="thingsToDo">
                    <span className="ms-2 text-dark">Things to Do</span>
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="cruises" />
                  <label className="form-check-label d-flex align-items-center" htmlFor="cruises">
                    <span className="ms-2 text-dark">Cruises</span>
                  </label>
                </div>
              </div>

              <PriceRangeSlider />

              <div className="mb-4">
                <h6 className="fw-semibold mb-3">Duration</h6>
                <div className="d-flex flex-wrap gap-2">
                  {["1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D+"].map((label, index) => (
                    <div key={index}>
                      <input type="checkbox" id={`duration-${index}`} className="btn-check" />
                      <label className="btn btn-outline-dark btn-sm" htmlFor={`duration-${index}`}>
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-semibold mb-3">Destinations</h6>
                <div className="search-box mb-3">
                  <input type="text" className="form-control" placeholder="Search destinations..." />
                </div>
                <div className="list-group list-group-flush" style={{maxHeight: "200px", overflowY: "auto"}}>
                  {["Hawaii", "Europe", "Caribbean", "Asia", "Australia", "Mexico", "Canada", "Alaska"].map((dest, idx) => (
                    <div className="list-group-item border-0 px-0 py-1" key={idx}>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id={`dest-${idx}`} />
                        <label className="form-check-label" htmlFor={`dest-${idx}`}>
                          <i className="fas fa-globe-americas me-2" style={{color: 'var(--primary-accent)'}}></i>
                          {dest}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-semibold mb-3">Travel Style</h6>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="family" />
                  <label className="form-check-label" htmlFor="family">
                    Family Friendly
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="luxury" />
                  <label className="form-check-label" htmlFor="luxury">
                    Luxury
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="adventure" />
                  <label className="form-check-label" htmlFor="adventure">
                    Adventure
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="romantic" />
                  <label className="form-check-label" htmlFor="romantic">
                    Romantic
                  </label>
                </div>
              </div>

              <button className="btn btn-primary btngray w-100 mt-3">Apply Filters</button>
              <button className="btn btn-link w-100 mt-2 text-decoration-none" style={{color: 'var(--secondary-accent)'}}>Reset All Filters</button>
            </div>
            
            <div className="border p-4 rounded-3" style={{backgroundColor: 'var(--dark-card)'}}>
              <h5 className="fw-bold mb-3 text-light">Need Help?</h5>
              <p className="small">Our travel experts are available 24/7 to help you plan your perfect trip.</p>
              <button className="btn btn-outline-light w-100 btngray">Contact Us</button>
            </div>
          </div>
          
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="text-light">
                <span className="me-2">Showing</span>
                <strong className="text-light">1-{travelPackages.length}</strong> of {travelPackages.length} tours
              </div>
              <div>
                <select className="form-select form-select-sm bg-black text-light border border-0">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                  <option>Duration</option>
                </select>
              </div>
            </div>
            
            {travelPackages.map((pkg) => (
              <div key={pkg.id} className="card mb-4 border-0 shadow-hover overflow-hidden">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <div className="position-absolute top-0 start-0 m-3 d-flex flex-column">
                      {pkg.tag && (
                        <span className="badge bg-danger mb-2 px-3 py-2 shadow-sm">
                          <i className="fas fa-tag me-1"></i> {pkg.tag}
                        </span>
                      )}
                      <span className="badge bg-success px-3 py-2 shadow-sm">
                        {pkg.discount}
                      </span>
                    </div>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: "cover", minHeight: "250px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body h-100 d-flex flex-column">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title fw-bold mb-2">{pkg.title}</h5>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-warning text-dark px-2 py-1 rounded d-flex align-items-center me-2">
                          <i className="fas fa-star me-1"></i>
                          <span>{pkg.rating}</span>
                        </div>
                        <span className="small text-dark">({pkg.reviews} reviews)</span>
                      </div>
                      
                      <ul className="small ps-3 mb-3">
                        {pkg.highlights.map((highlight, index) => (
                          <li key={index} className="mb-1">{highlight}</li>
                        ))}
                      </ul>
                      
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <span className="me-2 text-dark"><i className="fas fa-map-marker-alt me-1" style={{color: 'black'}}></i>From:</span>
                            <strong>{pkg.from}</strong>
                          </div>
                          <div>
                            <i className="fas fa-calendar-alt me-1" style={{color: 'black'}}></i>
                            <span className="text-dark">{pkg.duration}</span>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="text-decoration-line-through me-2 text-dark">
                              ₹{pkg.originalPrice.toFixed(2)}
                            </span>
                            <span className="fw-bold text-danger fs-4">
                              ₹{pkg.price.toFixed(2)}
                            </span>
                            <span className="small ms-2 text-dark">per person</span>
                          </div>
                          <div className="d-flex gap-2">
                            <button className="btn btn-primary btngray">Quick View</button>
                            <button className="btn btn-primary btngray">Book Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <nav aria-label="Pagination">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link bg-dark border-dark text-white" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-dark border-dark text-white" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link bg-light border-primary text-dark" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-dark border-dark text-white" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-dark border-dark text-white" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-dark border-dark text-white" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;