'use client'
import React, { useEffect, useState } from 'react'
import { getHonymoonPkg } from '../services/allApi';
import Link from 'next/link';

function Honeymoon() {
              
         const [honeymoonPackages, setHoneymoonPackages] = useState([]);
         

            
         const fetchHoneymoonPackages = async () => {
                try {
                  const result = await getHonymoonPkg();
                  setHoneymoonPackages(result?.data?.trending_packages || []);
                } catch (error) {
                  console.error('Error fetching packages:', error);
                }
              };
            
              useEffect(() => {
                fetchHoneymoonPackages();
              }, []);
            console.log(honeymoonPackages);
        
    
  return (
    <>
          {honeymoonPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="col-10 col-sm-6 col-lg-4 flex-shrink-0"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="package-card-standard h-100 mx-2">
                {/* Image Section */}
<Link href={`/package/${pkg.slug}`}>
                  <div className="package-img-container position-relative">
                    <img
                      src={pkg.packimages?.[0]?.image || '/default-image.jpg'}
                      alt={pkg.package_title}
                      className="img-fluid w-100"
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                    {pkg.add_badge_status === 'yes' && (
                      <div className="package-tag">
                        {pkg.badge?.title || 'FEATURED'}
                      </div>
                    )}
                  </div>
  
</Link>
                {/* Body Section */}
                <div className="package-body p-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-info">{pkg.days} Days</span>
                    <span className="text-warning">
                      ★ {pkg.review_stars} ({pkg.total_review_count})
                    </span>
                  </div>
                  <h3 className="h6">{pkg.package_title}</h3>
                  <p className="small mb-2">{pkg.small_description}</p>

                  {/* Inclusions */}
                  <div className="package-details mb-2">
                    {pkg.inclusions?.slice(0, 3).map((inc) => (
                      <div className="detail-item small" key={inc.id}>
                        <i className="fas fa-check me-1"></i>
                        <span>{inc.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {pkg.special_price && pkg.special_price < pkg.price ? (
                        <>
                          <span className="text-decoration-line-through text-light me-1 small">
                            ${pkg.price}
                          </span>
                          <span className="h6 text-primary">
                            ₹{pkg.special_price}
                          </span>
                          <span className="badge bg-danger ms-1 small">
                            Save {Math.round(((pkg.price - pkg.special_price) / pkg.price) * 100)}%
                          </span>
                        </>
                      ) : (
                        <span className="h6 text-primary">₹{pkg.price}</span>
                      )}
                    </div>
<Link href={`/package/${pkg.slug}`}>
                        <button className="btn btn-sm btn-primary">Book Now</button>
  
</Link>                  </div>
                </div>
              </div>
            </div>
          ))}
    
    </>
  )
}

export default Honeymoon