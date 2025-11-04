'use client'

import Link from "next/link";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";

export default function RentVehiclePage() {
  return (
    <>
      <StickyHeader/>

      <header className="main-header bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link href={'/'} style={{ textDecoration: 'none' }}>
            <div className="logo-container d-flex align-items-center">
              <span className="logo-icon fs-3">✈️</span>
              <span className="logo-text text-dark fw-bold ms-2 fs-5"> Travelogue Pedia</span>
            </div>
          </Link>

          <nav className="main-nav d-none d-md-flex gap-4">
            <a href="/about" className="nav-link">About Us</a>
            <a href="/contactus" className="nav-link">Contact Us</a>
            <a href="/blogs" className="nav-link">Blog</a>
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

      {/* Offcanvas Menu (keep this outside the video section) */}
<div
  className="offcanvas offcanvas-end bg-white text-dark"
  tabIndex="-1"
  id="mobileMenu"
  aria-labelledby="mobileMenuLabel"
>
  {/* <!-- Header --> */}
  <div className="offcanvas-header border-bottom border-secondary">
   <Link href={'/'} style={{textDecoration:'none'}}>
      <h5 id="mobileMenuLabel" className="fw-bold fs-4 mb-0">
        <span style={{ color: "#fe984fff" }}> Travelogue</span> Pedia
      </h5>
   </Link>
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
    {/* Destinations */}
    <a href="/about" className="nav-link p-3 rounded hover-item">
      <div className="d-flex align-items-center gap-3">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-dark" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        </svg> */}
        <span className="fw-medium text-dark">About</span>
      </div>
    </a>

        {/* Deals */}
    <a href="/blogs" className="nav-link p-3 rounded hover-item">
      <div className="d-flex align-items-center gap-3">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-dark" viewBox="0 0 16 16">
          <path d="M13.442 2.558a1.5 1.5 0 0 0-2.121 0L1.5 12.379V15h2.621l9.821-9.821a1.5 
          1.5 0 0 0 0-2.121zM12 6l-1-1 1-1 1 1-1 1z"/>
        </svg> */}
        <span className="fw-medium text-dark">Blogs</span>
      </div>
    </a>



    {/* Experiences */}
    <a href="/contactus" className="nav-link p-3 rounded hover-item">
      <div className="d-flex align-items-center gap-3">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-dark" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l3.39-1.787 3.389 1.787c.386.198.824-.149.746-.592l-.647-3.73 
          2.713-2.64c.33-.319.158-.888-.282-.95l-3.762-.546L8.465.792a.513.513 0 
          0 0-.927 0L5.354 6.034l-3.762.547c-.44.062-.612.63-.283.949l2.713 
          2.64-.647 3.73z"/>
        </svg> */}
        <span className="fw-medium text-dark">Contact Us</span>
      </div>
    </a>

  </div>

  {/* Auth Section */}
  <div className="mt-2">
    <button
      className="btn w-100 py-3 fw-bold rounded-pill"
      style={{
        background: "rgba(204, 130, 32, 1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(79, 172, 254, 0.3)",
        color: "#050506ff",
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "rgba(166, 181, 195, 0.25)";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(79, 172, 254, 0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "rgba(79, 172, 254, 0.15)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Sign In
    </button>
    <p className="text-center mt-3 mb-0 text-dark">
      Don’t have an account? 
      <a href="#" className="text-decoration-none ms-1" style={{ color: "#4facfe" }}>Sign up</a>
    </p>
  </div>
</div>
</div>


      {/* Intro Ribbon */}
      <section className="gradient-ribbon text-white">
        <div className="container py-4 text-center">
          <div className="section-kicker text-uppercase small fw-semibold opacity-75">Vehicle Rental</div>
          <h1 className="h2 fw-bold mb-2">Rent a Vehicle</h1>
          <p className="mb-0">Find the perfect vehicle for your journey. From economy cars to luxury SUVs, we have it all.</p>
        </div>
      </section>

      {/* Search/Booking Form Section */}
      {/* <section className="container py-5 my-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0" style={{ borderRadius: '20px' }}>
              <div className="card-body p-4 p-lg-5">
                <h2 className="text-center fw-bold mb-4 section-title">Book Your Vehicle</h2>
                
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-map-marker-alt me-2 text-primary"></i>Pickup Location
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white">
                          <i className="fas fa-map-marker-alt text-secondary"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter pickup location"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-map-marker-alt me-2 text-primary"></i>Drop-off Location
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white">
                          <i className="fas fa-map-marker-alt text-secondary"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter drop-off location"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-calendar-alt me-2 text-primary"></i>Pickup Date
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white">
                          <i className="fas fa-calendar-alt text-secondary"></i>
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-clock me-2 text-primary"></i>Pickup Time
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white">
                          <i className="fas fa-clock text-secondary"></i>
                        </span>
                        <input
                          type="time"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-calendar-alt me-2 text-primary"></i>Return Date
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white">
                          <i className="fas fa-calendar-alt text-secondary"></i>
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-car me-2 text-primary"></i>Vehicle Type
                      </label>
                      <select className="form-select" required>
                        <option value="">Select vehicle type</option>
                        <option value="economy">Economy Car</option>
                        <option value="compact">Compact Car</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="luxury">Luxury Car</option>
                        <option value="muv">MUV</option>
                        <option value="bike">Bike/Motorcycle</option>
                        <option value="bus">Bus</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-users me-2 text-primary"></i>Passengers
                      </label>
                      <select className="form-select" required>
                        <option value="">Select passengers</option>
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3">3 Passengers</option>
                        <option value="4">4 Passengers</option>
                        <option value="5">5 Passengers</option>
                        <option value="6+">6+ Passengers</option>
                      </select>
                    </div>

                    <div className="col-12 mt-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-3 fw-semibold"
                        style={{ 
                          background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                          border: 'none',
                          borderRadius: '12px',
                          fontSize: '1.1rem'
                        }}
                      >
                        <i className="fas fa-search me-2"></i>
                        Search Vehicles
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="services-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 section-title">Our Vehicle Fleet</h2>
          <div className="row g-4">
            {[
              { 
                icon: 'fas fa-car', 
                title: 'Economy Cars', 
                text: 'Fuel-efficient and budget-friendly options perfect for city commutes and short trips.',
                image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800'
              },
              { 
                icon: 'fas fa-car-side', 
                title: 'SUVs & MUVs', 
                text: 'Spacious and comfortable vehicles ideal for family trips and long journeys.',
                image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800'
              },
              { 
                icon: 'fas fa-motorcycle', 
                title: 'Bikes & Motorcycles', 
                text: 'Perfect for solo travelers and adventure enthusiasts exploring the open road.',
                image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800'
              },
              { 
                icon: 'fas fa-bus', 
                title: 'Buses', 
                text: 'Large capacity vehicles for group travel, corporate trips, and tour packages.',
                image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800'
              },
              { 
                icon: 'fas fa-gem', 
                title: 'Luxury Vehicles', 
                text: 'Premium cars with top-notch features for those special occasions and business travel.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pd3x8eJ_PcYbtae3OICO_HJLGBnFsg-sk4PPXoPSF9fwOTZ7mgFQgoXwm0Q1C_8rhWA&usqp=CAU'
              },
              { 
                icon: 'fas fa-car', 
                title: 'Sedans', 
                text: 'Comfortable and stylish mid-size cars perfect for business and leisure travel.',
                image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'
              },
            ].map((vehicle, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm service-card border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.title}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
                         style={{ background: 'rgba(0,0,0,0.3)' }}>
                      <i className={`${vehicle.icon} text-white`} style={{ fontSize: '3rem' }}></i>
                    </div>
                  </div>
                  <div className="card-body p-4 text-center">
                    <h3 className="card-title fw-bold">{vehicle.title}</h3>
                    <p className="card-text text-muted">{vehicle.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Popular Rental Routes */}
      <section className="services-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 section-title">Popular Rental Routes</h2>
          <div className="row g-4">
            {[
              { from: 'Bangalore', to: 'Mysore', distance: '150 km', duration: '3 hrs' },
              { from: 'Delhi', to: 'Agra', distance: '230 km', duration: '4 hrs' },
              { from: 'Mumbai', to: 'Pune', distance: '150 km', duration: '3 hrs' },
              { from: 'Bangalore', to: 'Coorg', distance: '250 km', duration: '5 hrs' },
              { from: 'Chennai', to: 'Pondicherry', distance: '160 km', duration: '3.5 hrs' },
              { from: 'Goa', to: 'Mumbai', distance: '590 km', duration: '10 hrs' },
            ].map((route, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '15px', transition: 'transform 0.3s ease' }}
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <h5 className="fw-bold mb-1">{route.from}</h5>
                        <i className="fas fa-arrow-down text-primary"></i>
                        <h5 className="fw-bold mt-1">{route.to}</h5>
                      </div>
                      <i className="fas fa-route text-primary" style={{ fontSize: '2rem' }}></i>
                    </div>
                    <div className="d-flex justify-content-between text-muted">
                      <span><i className="fas fa-road me-2"></i>{route.distance}</span>
                      <span><i className="fas fa-clock me-2"></i>{route.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped styles for this page */}
      <style jsx>{`
        .gradient-ribbon {
          background: linear-gradient(90deg, #101b2bff 0%, #101b2bff 100%);
        }
        .section-kicker { letter-spacing: .08em; }
        .service-card { transition: transform .2s ease, box-shadow .2s ease; }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 .75rem 1.5rem rgba(0,0,0,.08); }
        .value-card { 
          border: 1px solid rgba(0,0,0,0.06); 
          border-radius: .75rem; 
          background: #fff;
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .section-title {
          color: #f27d01;
        }
      `}</style>

      <div style={{paddingTop:'150px'}}></div>

      <Footer/>
    </>
  );
}

