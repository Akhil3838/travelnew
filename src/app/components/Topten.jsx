import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getNewPkg } from '../services/allApi';

function Topten() {
  const [trendingPackages, setTrendingPackages] = useState([]);

  const fetchTrendingPackages = async () => {
    try {
      const result = await getNewPkg();
        console.log(result);

      setTrendingPackages(result?.data?.trending_packages || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };
  

  useEffect(() => {
    fetchTrendingPackages();
  }, []);

  return (
    <>
      <div className="container px-0 px-sm-3">
        <div className="section-header text-center mb-4 px-3">
          <h2 className="display-5 text-white fw-bold mb-3">Top Ten Tour</h2>
          <p className="lead text-light">Most popular deals booked by travelers</p>
        </div>

        <div
          className="row g-3 flex-nowrap flex-sm-wrap overflow-x-auto pb-2 px-2 mx-0 scroll-hide"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {trendingPackages.map((pkg) => (
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
        </div>

        {/* View All Button */}
                  <Link href="/packages" style={{ textDecoration: 'none' }}>

        <div className="text-center mt-4">
            <button className="btn view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
              <span>View All Packages</span>
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
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 
                    0 1 1 .708-.708l5 5a.5.5 
                    0 0 1 0 .708l-5 5a.5.5 
                    0 1 1-.708-.708L13.293 
                    8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
        </div>
                  </Link>

      </div>
    </>
  );
}

export default Topten;
