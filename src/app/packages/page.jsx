'use client'
import React, { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import PackageList from "../components/PackageList";
import { getAllPackages } from "../services/allApi";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";

const Packages = () => {
  const [travelPackages, setTravelPackages] = useState([]);
  const [filters, setFilters] = useState(null);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const Allpackages = async (appliedFilters = null, page = 1) => {
    try {
      const result = await getAllPackages({ ...appliedFilters, page });
      console.log(result);
      
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
<Header />
<StickyHeader/>
      {/* Offcanvas Menu (keep this outside the video section) */}


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
    minHeight: "20vh",
    display: "flex",
    alignItems: "center",
  }}
>
  <div className="container ">
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