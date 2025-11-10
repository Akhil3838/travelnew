'use client';
import React, { useEffect, useState } from 'react';
import { oneWayRoot } from '../services/allApi';

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
  }, []); // added dependency array to prevent infinite loop

  return (
    <>
      <div className="container text-center">
        <h2 className="mb-5 fw-bold">🚖 One Way Taxi Routes</h2>

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
      </div>
    </>
  );
}

export default Onewaytaxi;
