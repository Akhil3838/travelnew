'use client';
import React, { useEffect, useState } from 'react';
import { oneWayRoot } from '../services/allApi';
import Link from 'next/link';

function Onewaytaxi() {
  const [data, setData] = useState([]);

  // Fetch Taxi Routes
  const fetchTaxiRoutes = async () => {
    try {
      const result = await oneWayRoot();
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
  }, []);

  return (
    <>
      <div className="container text-center py-4">
        <h2 className="mb-5 fw-bold">🚖 One Way Taxi Routes</h2>

        {/* Cards */}
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
        <Link href={'/all-routes'}>
          <div className="text-center mt-5">
            <button
              className="btn px-4 py-2 fw-semibold"
              style={{
                border: "2px solid #fd790dff",
                borderRadius: "30px",
                color: "#fd790dff",
                backgroundColor: "transparent",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#fd790dff";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#fd790dff";
              }}
            >
              View All One Way Taxi Routes
            </button>
          </div>
        </Link>

      </div>
    </>
  );
}

export default Onewaytaxi;
