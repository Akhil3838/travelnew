'use client'

import Link from "next/link";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";
import { useState, useEffect } from "react";
import { rentACar } from "../services/allApi";

export default function RentVehiclePage() {
  const [vehicles, setVehicles] = useState([]);

  // Fetch vehicles on page load
  const rentCar = async () => {
    try {
      const result = await rentACar();
      setVehicles(result?.data?.rentcars || []);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    rentCar();
  }, []);

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
          <div className="section-kicker text-uppercase small fw-semibold opacity-75">Vehicle Rental</div>
          <h1 className="h1 fw-bold mb-3" style={{ fontSize: '3rem' }}>Rent a Vehicle</h1>
          <p className="mb-0 lead">Find the perfect vehicle for your journey.</p>
        </div>
      </section>



      {/* Vehicle Fleet (DYNAMIC FROM API) */}
      <section className="services-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 section-title">Our Vehicle Fleet</h2>

          <div className="row g-4">

            {vehicles.length === 0 && (
              <p className="text-center text-muted">Loading vehicles...</p>
            )}

            {vehicles.map((vehicle, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="card h-100 shadow-sm service-card border-0"
                  style={{ borderRadius: '15px', overflow: 'hidden' }}
                >
                  <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={vehicle.image}
                      alt={vehicle.title}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{ background: 'rgba(0,0,0,0.3)' }}
                    >
                      <i
                        className="fas fa-car text-white"
                        style={{ fontSize: '3rem' }}
                      ></i>
                    </div>
                  </div>
                  <div className="card-body p-4 text-center">
                    <h3 className="card-title fw-bold">{vehicle.title}</h3>
                    <p className="card-text text-muted">{vehicle.description}</p>
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
                <div
                  className="card h-100 shadow-sm border-0"
                  style={{ borderRadius: '15px', transition: 'transform 0.3s ease' }}
                >
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-1">{route.from}</h5>
                    <i className="fas fa-arrow-down text-primary"></i>
                    <h5 className="fw-bold mt-1">{route.to}</h5>
                    <p className="text-muted small mt-2">{route.distance} • {route.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
            <div style={{paddingTop:'150px'}}></div>


      <Footer />
    </>
  );
}
