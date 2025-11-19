'use client';
import StickyHeader from '@/app/components/StickyHeader';
import Link from 'next/link';
import React from 'react';

export default function Page() {
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
        <div className="container my-5">
    
          {/* Blog Header */}
          <div className="text-center mb-4">
            <h1 className="fw-bold">How to Travel Kumaon on a Budget</h1>
            <p className="text-muted">
              A beautiful, practical guide for backpackers & weekend travellers
            </p>
          </div>
    
          {/* Banner Image */}
          <div className="mb-4">
            <img 
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200" 
              className="img-fluid rounded shadow"
              alt="Blog Banner"
              style={{ height: "400px", width:"100%", objectFit:"cover" }}
            />
          </div>
    
          {/* Blog Content */}
          <div className="mt-4" style={{ lineHeight: "1.7", fontSize: "17px" }}>
    
            <h3 className="fw-bold mb-3">Overview</h3>
            <p>
              Kumaon, located in Uttarakhand, is one of the most beautiful and 
              affordable travel destinations in India. From misty mountains to 
              peaceful lakes, the region offers everything a budget traveller needs.
            </p>
    
            <h4 className="fw-bold mt-4">Best Time to Visit</h4>
            <ul>
              <li>October – February: Cold, perfect for snow lovers</li>
              <li>March – June: Pleasant weather, ideal for sightseeing</li>
            </ul>
    
            <h4 className="fw-bold mt-4">Budget Breakdown</h4>
            <ul>
              <li><b>Stay:</b> ₹500 – ₹800 per night (homestays)</li>
              <li><b>Food:</b> ₹200 – ₹300 per meal</li>
              <li><b>Local Travel:</b> Shared taxi or bus</li>
            </ul>
    
            <h4 className="fw-bold mt-4">Top Places to Visit</h4>
            <p>Make sure you explore these amazing locations:</p>
            <ol>
              <li>Nainital</li>
              <li>Bhimtal</li>
              <li>Kausani</li>
              <li>Mukteshwar</li>
            </ol>
    
            <h4 className="fw-bold mt-4">Travel Tips</h4>
            <p>
              Pack light, carry a power bank, keep cash ready, and book homestays early 
              for the best prices.
            </p>
    
            {/* Author Box */}
            <div className="p-4 mt-5 rounded shadow-sm bg-light d-flex align-items-center">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200"
                alt="Author"
                className="rounded-circle"
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
              />
              <div className="ms-3">
                <h5 className="fw-bold mb-0">Akhil Tv</h5>
                <p className="text-muted mb-0">Travel Blogger</p>
              </div>
            </div>
    
          </div>
    
        </div>
    
</>  );
}
