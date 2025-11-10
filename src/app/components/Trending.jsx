'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getTrendingPkg } from '../services/allApi';

function Trending() {
  const [locations, setLocations] = useState([]);

  const fetchTrendingPackages = async () => {
    try {
      const result = await getTrendingPkg();
      console.log(result);
      
      setLocations(result?.data?.destinations || []);
    } catch (error) {
      console.error('Error fetching trending destinations:', error);
    }
  };

  useEffect(() => {
    fetchTrendingPackages();
  }, []);

  return (
    <>
      <div className="container trending-section py-4">
        <div className="section-header text-center mb-4 px-3">
          <h2 className="display-5 fw-bold orange">Top Destinations</h2>
          <p className="lead text-dark text-center">
            Discover the world&apos;s most loved travel escapes
          </p>
        </div>

        <div className="destinations-container">
          {locations.length > 0 ? (
            locations.map((item, index) => (
              <div key={index} className="destination-card">
               <Link href={`/`}>
                  <img
                    src={item.destination_image}
                    alt={item.destination}
                    className="destination-image"
                  />
               </Link>
                <div className="destination-name">{item.destination}</div>
                <div className="tour-count">{item.package_count} Tours</div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted my-4">
              Loading trending destinations...
            </p>
          )}
        </div>

        {/* <div className="d-flex justify-content-end mt-4">
          <Link href="/packages" style={{ textDecoration: 'none' }}>
            <button className="btn view-all-btn px-4 py-2 d-flex align-items-center justify-content-center ">
              <span>View All Destinations</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ms-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 0 1 1
                  .708-.708l5 5a.5.5 0 0 1 0
                  .708l-5 5a.5.5 0 1 1-.708-.708L13.293
                  8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </Link>
        </div> */}
      </div>
    </>
  );
}

export default Trending;
