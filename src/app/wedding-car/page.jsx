'use client'

import Link from "next/link";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";
import { weddingCar } from "../services/allApi";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function WeddingCarPage() {

  const [vehicles, setVehicles] = useState([]);

  const fetchWeddingCars = async () => {
    try {
      const result = await weddingCar();
      setVehicles(result?.data?.weddingcars || []);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    fetchWeddingCars();
  }, []);

  return (
    <>
      <StickyHeader />

    <Header/>
      {/* Intro Ribbon */}
      <section
        className="gradient-ribbon text-white"
        style={{
          background: 'linear-gradient(135deg,rgb(32, 11, 86) 0%,rgb(28, 3, 67) 100%)',
        }}
      >
        <div className="container py-5 text-center">
          <div className="section-kicker text-uppercase small fw-semibold opacity-75">
            Wedding Car Rental
          </div>
          <h1 className="h1 fw-bold mb-3" style={{ fontSize: '3rem' }}>
            💒 Make Your Special Day Unforgettable
          </h1>
          <p className="mb-0 lead">
            Luxury wedding cars to make your wedding journey as beautiful as your love story
          </p>
        </div>
      </section>

      {/* Wedding Car Showcase Section */}
      <section className="services-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 section-title">Our Wedding Car Collection</h2>
          <p className="text-center text-muted mb-5">
            Choose from our exquisite collection of luxury vehicles, perfect for your special day
          </p>

          <div className="row g-4">
            {vehicles.length > 0 &&
              vehicles.map((car) => (
                <div className="col-md-4" key={car.id}>
                  <div
                    className="card h-100 shadow-lg service-card border-0"
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '2px solid #f0f0f0',
                    }}
                  >
                    <div
                      className="position-relative"
                      style={{ height: '250px', overflow: 'hidden' }}
                    >
                      <img
                        src={car.image}
                        alt={car.title}
                        className="img-fluid w-100 h-100"
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                      />

                      <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(15, 65, 142, 0.7) 0%, rgba(242, 125, 1, 0.7) 100%)',
                        }}
                      >
                        <i
                          className={`fas fa-car text-white`}
                          style={{ fontSize: '3.5rem' }}
                        ></i>
                      </div>

                      <div className="position-absolute bottom-0 end-0 m-3">
                        <span
                          className="badge px-3 py-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            color: '#f27d01',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                          }}
                        >
                          Starting from ₹{car.price}
                        </span>
                      </div>
                    </div>

                    <div className="card-body p-4 text-center">
                      <h3
                        className="card-title fw-bold mb-3"
                        style={{ color: '#0f418e', fontSize: '1.5rem' }}
                      >
                        {car.title}
                      </h3>
                      <p className="card-text text-muted mb-3">{car.description}</p>

                      <button
                        className="btn w-100"
                        style={{
                          background: 'linear-gradient(135deg,#f27d01 0%, #f27d01 100%)',
                          color: '#fff',
                          fontWeight: '600',
                          borderRadius: '10px',
                          border: 'none',
                        }}
                      >
                        <i className="fas fa-calendar-check me-2"></i>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div style={{ paddingTop: '150px' }}></div>

      <Footer />
    </>
  );
}
