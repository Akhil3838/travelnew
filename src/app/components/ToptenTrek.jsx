'use client'
import React, { useEffect, useState } from 'react'
import { getTrekPkg } from '../services/allApi';

function ToptenTrek() {
  const [trekPackages, setTrkPackages] = useState([]);

  const fetchTrekPackages = async () => {
    try {
      const result = await getTrekPkg();
      setTrkPackages(result?.data?.trending_packages || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    fetchTrekPackages();
  }, []);

  return (
    <>
      {trekPackages.map((pkg) => (
        <div key={pkg.id} className="col-10 col-sm-6 col-lg-3 flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
          <div className="adventure-card h-100 mx-2">
            <div className="adventure-img-container">
              <img
                src={pkg?.thumbnails?.[0] || "https://via.placeholder.com/300x180"} 
                alt={pkg.package_title}
                className="img-fluid w-100"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="adventure-level">
                {pkg.add_badge_status === "yes" ? pkg.badge?.title : "EXTREME"}
              </div>
            </div>
            <div className="adventure-content p-3">
              <h3 className="h6 mb-2">{pkg.package_title}</h3>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-primary fw-bold small">{pkg.destination || "Unknown"}</span>
                <span className="text-warning small">★ {pkg.review_stars || 0}</span>
              </div>
              <div className="adventure-features mb-3">
                <span className="badge bg-light text-dark me-1 small">🥾 Trekking</span>
                <span className="badge bg-light text-dark me-1 small">{pkg.duration}</span>
                <span className="badge bg-light text-dark small">{pkg.days} Days</span>
              </div>
              <button className="btn btn-sm btn-outline-primary w-100">Explore</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ToptenTrek;
