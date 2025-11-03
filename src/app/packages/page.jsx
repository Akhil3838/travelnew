'use client'
import React, { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import PackageList from "../components/PackageList";
import { getAllPackages } from "../services/allApi";
import Link from "next/link";
import Footer from "../components/Footer";

const Packages = () => {
  const [travelPackages, setTravelPackages] = useState([]);
  const [filters, setFilters] = useState(null);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const Allpackages = async (appliedFilters = null, page = 1) => {
    try {
      const result = await getAllPackages({ ...appliedFilters, page });
      setTotalPage(result?.data?.total || 1);
      setTravelPackages(result?.data?.packages || []);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  useEffect(() => {
    Allpackages(filters, currentPage);
  }, [filters, currentPage]);

  const handleApplyFilters = (filterData) => {
    setFilters(filterData);
    setCurrentPage(1); // reset to first page when applying filters
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <header className="main-header">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link href={'/'} style={{textDecoration:'none'}}>
              <div className="logo-container d-flex align-items-center">
                <span className="logo-icon">✈️</span>
                <span className="logo-text"> Travelogue Pedia</span>
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

            {/* Package Hero Section */}
{/* 🌍 Travelopedia Packages Hero Section */}
{/* Package Hero Section */}
<section
  className="text-white position-relative overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)),
      url(https://static.vecteezy.com/system/resources/thumbnails/008/009/837/small/outdoor-tourism-landscape-luxurious-beach-resort-with-swimming-pool-and-beach-chairs-or-loungers-umbrellas-with-palm-trees-and-blue-sky-sea-horizon-summer-island-relax-travel-and-idyllic-vacation-photo.jpg)
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
  }}
>
  <div className="container py-5">
    {/* Breadcrumb */}
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb bg-transparent p-0 mb-0">
        <li className="breadcrumb-item">
          <Link href="/" className="text-white text-decoration-none">
            <i className="fas fa-home me-1"></i> Home
          </Link>
        </li>
        <li className="breadcrumb-item active text-white" aria-current="page">
          Packages
        </li>
      </ol>
    </nav>

    {/* Hero Content */}
    <div className="row align-items-center">
      <div className="col-lg-8">
        <h1
          className="fw-bold display-4 mb-3"
          style={{
            letterSpacing: "0.5px",
            lineHeight: "1.2",
            textShadow: "0 3px 10px rgba(0,0,0,0.4)",
          }}
        >
          Discover Your Next Adventure
        </h1>
        <p className="lead text-light mb-4" style={{ maxWidth: "600px" }}>
          Explore curated travel experiences across breathtaking destinations —
          find your dream vacation with exclusive offers and handpicked stays.
        </p>

        {/* Info Highlights */}
        <div className="d-flex flex-wrap gap-4 mb-4">
          <div className="d-flex align-items-center">
            <div className="bg-light text-dark rounded-circle d-flex justify-content-center align-items-center me-2" style={{ width: "40px", height: "40px" }}>
              <i className="fas fa-plane-departure"></i>
            </div>
            <span className="text-light">Flight + Stay Packages</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="bg-light text-dark rounded-circle d-flex justify-content-center align-items-center me-2" style={{ width: "40px", height: "40px" }}>
              <i className="fas fa-wallet"></i>
            </div>
            <span className="text-light">Best Price Guarantee</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="bg-light text-dark rounded-circle d-flex justify-content-center align-items-center me-2" style={{ width: "40px", height: "40px" }}>
              <i className="fas fa-star"></i>
            </div>
            <span className="text-light">Top Rated Experiences</span>
          </div>
        </div>
      </div>

      {/* Right-side search area */}
      <div className="col-lg-4 mt-4 mt-lg-0">
        <div
          className="bg-white text-dark rounded-4 shadow p-4"
          style={{ maxWidth: "380px" }}
        >
          <h5 className="fw-semibold mb-3 text-center">
            <i className="fas fa-search me-2 text-primary"></i> Find Your Package
          </h5>
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Destination</label>
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Enter destination"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Travel Month</label>
              <select className="form-select rounded-pill">
                <option>November 2025</option>
                <option>December 2025</option>
                <option>January 2026</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-dark w-100 rounded-pill fw-semibold"
            >
              Search Packages
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative wave bottom */}
  <div
    className="position-absolute bottom-0 start-0 w-100"
    style={{
      height: "100px",
      background: "url(https://i.ytimg.com/vi/GlPw4wyxcG4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBfqx0qgL-a8h2R0RoVD8-Wc_Y6lQ') no-repeat bottom center / cover",
    }}
  ></div>
</section>


      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-dark mb-3">Discover the Grand Canyon</h2>
          <p className="text-dark">Explore our curated selection of unforgettable adventures</p>
        </div>
        
        <div className="row">
          <FilterSidebar onApplyFilters={handleApplyFilters}/>

          <PackageList
          packages={travelPackages}
          totalpage={totalPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}/>
          
        </div>
      </div>

      <div style={{paddingTop:'150px'}}>
        

      </div>

<Footer/>
    </>
  );
};

export default Packages;