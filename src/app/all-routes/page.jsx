'use client';
import React, { useEffect, useState } from 'react';
import { allOneWayRootsApi } from '../services/allApi';
import Link from 'next/link';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';

function Onewaytaxi() {
  const [data, setData] = useState([]);

  // Fetch Taxi Routes
  const fetchTaxiRoutes = async () => {
    try {
      const result = await allOneWayRootsApi();
      console.log(result);
      if (result?.status && Array.isArray(result.data.taxi_routes)) {
        setData(result.data.taxi_routes);
      }
    } catch (error) {
      console.error("Error fetching taxi routes:", error);
    }
  };

  useEffect(() => {
    fetchTaxiRoutes();
  }, []); // added dependency array to prevent infinite loop

  return (
    <>
          <StickyHeader />

      {/* Header */}
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
          >
            ☰
          </button>
        </div>
      </header>

      {/* Intro Ribbon */}

            <section className="gradient-ribbon text-white" style={{ background: 'linear-gradient(135deg,rgb(32, 11, 86) 0%,rgb(28, 3, 67) 100%)' }}>
        <div className="container py-5 text-center">
          <div className="section-kicker text-uppercase small fw-semibold opacity-75">All Taxi Routes</div>
          <h1 className="h1 fw-bold mb-3" style={{ fontSize: '3rem' }}>One way taxi routes</h1>
          <p className="mb-0 lead">Find the perfect vehicle for your journey.</p>
        </div>
      </section>



      <div className="container text-center my-5">
        {/* <h2 className="mb-5 fw-bold">🚖 One Way Taxi Routes</h2> */}

        {/* Two cards per row */}
        <div className="row g-4 justify-content-center">
          {data.length > 0 ? (
            data.map((route, index) => (
              <div key={route.id} className="col-12 col-md-6 d-flex justify-content-center">
                <div
                  className={`card border-0 overflow-hidden shadow-sm d-flex align-items-center flex-md-row ${
                    index % 2 !== 0 ? "flex-md-row-reverse" : ""
                  }`}
                  style={{
                    width: "100%",
                    maxWidth: "650px",
                    borderRadius: "15px",
                    backgroundColor: "#f8f9fa",
                    color: "#001f3f",
                    minHeight: "220px",
                  }}
                >
                  {/* Image Section */}
                  <img
                    src={route.image}
                    alt={route.title}
                    style={{
                      width: "50%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Description Section */}
                  <div className="card-body text-start p-4">
                    <h4 className="fw-bold mb-2">{route.title}</h4>
                    <p className="text-muted mb-0" style={{ fontSize: "1rem" }}>
                      {route.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted mt-3">Loading taxi routes...</p>
          )}
        </div>

        {/* View All Button */}
      </div>

            <div style={{paddingTop:'150px'}}></div>

      <Footer/>
    </>
  );
}

export default Onewaytaxi;
