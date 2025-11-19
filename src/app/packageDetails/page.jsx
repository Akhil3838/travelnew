'use client';

import Link from "next/link";
import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import StickyHeader from "../components/StickyHeader";

export default function Page() {

  // Enable Bootstrap JS for offcanvas

  return (
    <>
      <style>{`
        /* Sidebar Box */
        .sidebar-box {
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          padding: 20px;
          background: #fff;
        }
        .sidebar-title {
          font-size: 20px;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        .sidebar-title span {
          font-size: 24px;
          cursor: pointer;
          color: #555;
        }
        .range-label {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .range-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        .range-circle {
          width: 20px;
          height: 20px;
          border: 2px solid #ff5722;
          border-radius: 50%;
        }
        .filter-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          font-size: 15px;
        }
        .filter-row input {
          transform: scale(1.2);
          margin-right: 8px;
        }
        .filter-count {
          color: #777;
          font-size: 14px;
        }
        .section-divider {
          border-top: 1px solid #ddd;
          margin: 25px 0;
        }
        .brand-search {
          border-radius: 8px;
          font-size: 15px;
        }
        .capacity-icon {
          width: 40px;
          height: auto;
          object-fit: contain;
        }

        /* CARD STYLES */
        .car-card-box {
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 25px;
          background: #fff;
          position: relative;
          transition: 0.3s;
        }
        .car-card-box:hover {
          box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
        }
        .more-icon {
          position: absolute;
          top: 18px;
          right: 18px;
          font-size: 20px;
          cursor: pointer;
          color: #777;
        }
        .car-image {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          object-fit: cover;
        }
        .car-name {
          font-size: 24px;
          font-weight: 600;
        }
        .rating-text {
          font-size: 16px;
          font-weight: 500;
          margin-top: 5px;
        }
        .price-text {
          font-size: 20px;
          font-weight: 600;
          margin-top: 8px;
        }
        .offer-btn {
          background: #ff5a1f;
          color: white;
          padding: 10px 22px;
          border-radius: 8px;
          border: none;
          margin-top: 15px;
          font-size: 16px;
        }

        /* Mobile Filter Button */
        .mobile-filter-btn {
          display: none;
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1050;
          background: #ff5a1f;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        @media (max-width: 1024px) {
          .mobile-filter-btn { display: block; }
          .desktop-sidebar { display: none !important; }
          .car-cards-container { width: 100%; }
        }
        @media (min-width: 1025px) {
          .mobile-filter-btn { display: none !important; }
          .desktop-sidebar { display: block !important; }
        }
      `}
      </style>

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
      <div className="d-flex align-items-center">
        <span className="fs-4 me-2">✈️</span>
        <span className="fw-bold fs-5 text-dark">Travelogue Pedia</span>
      </div>
    </Link>
    <button
      type="button"
      className="btn-close"
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

      <div className="container mt-3">

        {/* Banner */}
        {/* <div className="position-relative d-flex justify-content-center">
          <img 
            src="https://www.shutterstock.com/image-vector/modern-dark-blue-gradient-abstract-600nw-2493387771.jpg"
            className="w-100"
            style={{ height: "100px", objectFit: "cover" }}
          />
          <button className="btn btn-light filter-btn">Enquiry</button>
        </div> */}

        {/* Mobile Filter Button */}
        <button className="mobile-filter-btn" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas">
          <i className="fas fa-filter me-2"></i> Filter
        </button>

        <div className="row mt-3">

          {/* LEFT SIDEBAR */}
          <div className="col-lg-3 col-md-4 desktop-sidebar">
            <div className="sidebar-box">
              <div className="sidebar-title">
                Budget Range <span>-</span>
              </div>

              <div className="range-label">₹ 1 Lakh - 50 Crore</div>

              <div className="range-wrapper">
                <div className="range-circle"></div>
                <input type="range" className="form-range mx-2" min="1" max="100" />
                <div className="range-circle"></div>
              </div>

              <div className="filter-row"><div><input type="checkbox" /> 1 - 5 Lakh</div><div className="filter-count">(13)</div></div>
              <div className="filter-row"><div><input type="checkbox" /> 5 - 10 Lakh</div><div className="filter-count">(56)</div></div>

              <div className="section-divider"></div>

{/* brand */}

             <div>
                <div className="sidebar-title">
                  Brand <span>-</span>
                </div>
  
                {/* <div className="range-label">₹ 1 Lakh - 50 Crore</div> */}
  
               
  
                <div className="filter-row"><div><input type="checkbox" /> Maruthi</div><div className="filter-count">(13)</div></div>
                <div className="filter-row"><div><input type="checkbox" /> Tata </div><div className="filter-count">(56)</div></div>
                <div className="filter-row"><div><input type="checkbox" /> Kia </div><div className="filter-count">(56)</div></div>

  
                <div className="section-divider"></div>
             </div>


             {/* Vehicle Type*/}

             <div>
                <div className="sidebar-title">
                  Vehicle Type <span>-</span>
                </div>
  
                {/* <div className="range-label">₹ 1 Lakh - 50 Crore</div> */}
  
               
  
                <div className="filter-row"><div><input type="checkbox" /> Sedan</div><div className="filter-count">(13)</div></div>
                <div className="filter-row"><div><input type="checkbox" /> SUV </div><div className="filter-count">(56)</div></div>
                <div className="filter-row"><div><input type="checkbox" /> Luxury </div><div className="filter-count">(56)</div></div>

  
                <div className="section-divider"></div>
             </div>

                          {/* Fuel Type*/}

             <div>
                <div className="sidebar-title">
                  Fuel Type <span>-</span>
                </div>
  
                {/* <div className="range-label">₹ 1 Lakh - 50 Crore</div> */}
  
               
  
                <div className="filter-row"><div><input type="checkbox" /> Diesel </div><div className="filter-count">(13)</div></div>
                <div className="filter-row"><div><input type="checkbox" /> Petrol  </div><div className="filter-count">(56)</div></div>
                <div className="filter-row"><div><input type="checkbox" /> CNG </div><div className="filter-count">(56)</div></div>

  
                <div className="section-divider"></div>
             </div>


            </div>

            


          </div>

          {/* RIGHT CAR LIST */}
          <div className="col-lg-9 col-md-8 col-12 car-cards-container">

            <h3 className="mb-4">273 Cars in India With Search Options</h3>

            {/* CARD 1 */}
            <div className="car-card-box">
              <div className="more-icon">⋮</div>
              <div className="row">
                <div className="col-md-4">
                  <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/186613/hyundai-venue-right-rear-three-quarter2.jpeg?isig=0" className="car-image" />
                </div>
                <div className="col-md-8">
                  <h3 className="car-name">Hyundai Venue</h3>
                  <div className="rating-text">⭐ 4.7 <span className="text-muted">(27 Reviews)</span></div>
                  <p className="price-text">₹7.90 - 15.69 Lakh *</p>
                  <p className="text-muted">*Ex-Showroom Price in New Delhi</p>
                  <p><span>20.99 kmpl</span> • <span>1493 cc</span> • <span>5 seater</span></p>
                  <button className="offer-btn">Book Now</button>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="car-card-box">
              <div className="more-icon">⋮</div>
              <div className="row">
                <div className="col-md-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxc1ozvEB6nWh4zFQ_U3AKEegFsSNPHThveA&s" className="car-image" />
                </div>
                <div className="col-md-8">
                  <h3 className="car-name">Defender</h3>
                  <div className="rating-text">⭐ 4.5 <span className="text-muted">(316 Reviews)</span></div>
                  <p className="price-text">₹98 Lakh - 2.60 Cr *</p>
                  <p className="text-muted">*Ex-Showroom Price in New Delhi</p>
                  <p><span>14.01 kmpl</span> • <span>5000 cc</span> • <span>7 seater</span></p>
                  <button className="offer-btn">Book Now</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-start" id="sidebarOffcanvas">
        <div className="offcanvas-header">
          <h5>Filters</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <div className="sidebar-box">
            <div className="sidebar-title">
              Budget Range <span>-</span>
            </div>
            <div className="range-label">₹ 1 Lakh - 50 Crore</div>
            <input type="range" className="form-range" />
          </div>
        </div>
      </div>
    </>
  );
}
