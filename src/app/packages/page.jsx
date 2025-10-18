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