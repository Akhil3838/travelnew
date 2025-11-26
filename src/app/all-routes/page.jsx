'use client';
import React, { useEffect, useState } from 'react';
import { allOneWayRootsApi } from '../services/allApi';
import Link from 'next/link';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
      <Header/>
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
                  className={`card border-0 overflow-hidden shadow-sm w-100 d-flex flex-column flex-md-row ${
                    index % 2 !== 0 ? "flex-md-row-reverse" : ""
                  }`}
                  style={{
                    maxWidth: "650px",
                    borderRadius: "15px",
                    backgroundColor: "#f8f9fa",
                    color: "#001f3f",
                  }}
                >

                  {/* Image Section (Reduced Height) */}
                  <div className="col-12 col-md-6 p-0">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="img-fluid w-100 object-fit-cover"
                      style={{ height: "260px" }}   // ⬅ Reduced image height
                    />
                  </div>

                  {/* Description */}
                  <div className="col-12 col-md-6 p-3 text-start"> {/* ⬅ reduced padding */}
                    <h5 className="fw-bold mb-2">{route.title}</h5>
                    <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
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
