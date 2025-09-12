'use client'
import React, { useEffect, useState } from 'react'
import { getPilgrimPkg } from '../services/allApi';

function Pilgrims() {
  const [pilgrmsPackages, setPilgrmsPackages] = useState([]);

  const fetchPilgrimsPackages = async () => {
    try {
      const result = await getPilgrimPkg();
      setPilgrmsPackages(result?.data?.trending_packages || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    fetchPilgrimsPackages();
  }, []);

  return (
    <>
      {pilgrmsPackages.map((pkg) => (
        <div key={pkg.id} className="col-10 col-sm-6 col-lg-4 flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
          <div className="package-card-standard h-100 mx-2">
            <div className="package-img-container">
              <img
                src={pkg?.thumbnails?.[0] || "https://via.placeholder.com/300x180"}
                alt={pkg.package_title}
                className="img-fluid w-100"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="package-tag">
                {pkg.add_badge_status === "yes" ? (pkg.badge?.title || "FEATURED") : "BESTSELLER"}
              </div>
            </div>
            <div className="package-body p-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="badge bg-info">{pkg.days} Days</span>
                <span className="text-warning">★ {pkg.review_stars || 0} ({pkg.total_review_count || 0})</span>
              </div>
              <h3 className="h6">{pkg.package_title}</h3>
              <p className="small mb-2">{pkg.small_description}</p>

              <div className="package-details mb-2">
                {pkg.features && pkg.features.split(",").map((feature, index) => (
                  <div key={index} className="detail-item small">
                    <i className="fas fa-check me-1"></i>
                    <span>{feature.trim()}</span>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {pkg.price && (
                    <span className="text-decoration-line-through text-light me-1 small">
                      ₹{pkg.price}
                    </span>
                  )}
                  <span className="h6 text-primary">
                    ₹{pkg.special_price || pkg.price}
                  </span>
                  {pkg.price && pkg.special_price && (
                    <span className="badge bg-danger ms-1 small">
                      Save {Math.round(((pkg.price - pkg.special_price) / pkg.price) * 100)}%
                    </span>
                  )}
                </div>
                <button className="btn btn-sm btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Pilgrims;
