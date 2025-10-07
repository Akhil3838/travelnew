'use client'
import React, { useEffect, useState } from 'react'
import { getTrekPkg } from '../services/allApi';
import Link from 'next/link';

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
          <div className="adventure-card h-100 mx-2" style={{ backgroundColor:' #305cde'}}>
<Link href={`/package/${pkg.slug}`}>

              <div className="adventure-img-container">
                <img
                  src={pkg.packimages?.[0]?.image  || "https://via.placeholder.com/300x180"} 
                  alt={pkg.package_title}
                  className="img-fluid w-100"
                  style={{ height: '232px', objectFit: 'cover' }}
                />
                <div className="adventure-level">
                  {pkg.add_badge_status === "yes" ? pkg.badge?.title : "EXTREME"}
                </div>
              </div>
  
</Link>            <div className="adventure-content p-3">
              <h3 className="h6 mb-2">{pkg.package_title}</h3>
              <div className="d-flex justify-content-between mb-2">
                <span className=" fw-bold small" style={{ color: 'orange' }}>{pkg.destination || "Unknown"}</span>
                <span className=" small" style={{ color: 'orange' }}>★ {pkg.review_stars || 0}</span>
              </div>
              <div className="adventure-features mb-3">
                <span className="badge bg-light text-dark me-1 small">🥾 Trekking</span>
                <span className="badge bg-light text-dark me-1 small">{pkg.duration}</span>
                <span className="badge bg-light text-dark small">{pkg.days} Days</span>
              </div>
<Link href={`/package/${pkg.slug}`}>
<button 
  className="btn btn-sm w-100" 
  style={{ 
    border: '1px solid orange', 
    color: 'orange', 
    backgroundColor: 'transparent' 
  }}
>
  Explore
</button>
  
</Link>            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ToptenTrek;
