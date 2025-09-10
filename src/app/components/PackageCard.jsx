import Link from "next/link";
import React, { useState } from "react";
// import EnquiryForm from "./EnqueryForm";

const PackageCard = ({ pkg = {} }) => {
  // State for controlling modal visibility
//   const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  // Destructure with defaults based on your API response
  const {
    id,
    package_title = "Tour Package",
    small_description = "Explore amazing destinations",
    price = 0,
    special_price = price,
    days = "N/A",
    departure = "N/A",
    transport = "Not specified",
    review_stars = 0,
    total_review_count = 0,
    features = "",
    thumbnails = [],
    add_badge_status = "no",
    badge = null,
    category = {},
    slug = ""
  } = pkg;

  // Process features into highlights
  const highlights = features ? features.split(',') : [
    "Comfortable transportation",
    "Professional guide",
    "Memorable experience"
  ];

  // Get first thumbnail image or use placeholder
  const imageUrl = thumbnails[0]?.image || "https://via.placeholder.com/300x200?text=Tour+Image";

  // Calculate discount percentage if special price exists
  const discountPercent = special_price < price 
    ? Math.round(((price - special_price) / price) * 100)
    : 0;


  return (
    <>
                  <div key={pkg.id} className="card mb-4">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <div className="position-absolute top-0 start-0 m-3 d-flex flex-column gap-2">
                       {add_badge_status === "yes" && badge && (
                        <span className="badge bg-danger text-white">
                          <i className="fas fa-tag me-1"></i> {badge}
                        </span>
                      )}
                     
                       {discountPercent > 0 && (
                <span className="badge bg-dark text-white">
                  {discountPercent}% Off
                </span>
              )}
                    </div>
                    <img
                       src={imageUrl}
              alt={package_title}
                      className="img-fluid rounded-start h-100 object-fit-cover"
                      style={{ minHeight: "250px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body h-100 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title fw-bold mb-0">{package_title}</h5>
                        <div className="d-flex align-items-center bg-warning text-dark px-2 py-1 rounded">
                          <i className="fas fa-star me-1"></i>
                          <span>{review_stars}</span>
                          <span className="ms-1 small">({total_review_count})</span>
                        </div>
                      </div>

                                    {/* Description */}
              <p className="text-muted small mb-3">{small_description}</p>


                      
                      <div className="mb-3">
                        <ul className="list-unstyled mb-0">
                          {highlights.map((highlight, index) => (
                            <li key={index} className="mb-1">
                              <i className="fas fa-check-circle text-dark me-2"></i>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="text-dark">
                            <i className="fas fa-map-marker-alt me-1"></i>
                            <span className="text-dark">From: </span>
                            <strong>{transport}</strong>
                          </div>
                          <div className="text-muted">
                            <i className="fas fa-clock me-1"></i>
                            <span className="text-dark">{days} days</span>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="text-decoration-line-through text-muted me-2">
                                ₹{price.toLocaleString()}
                            </span>
                            <span className="fw-bold text-dark fs-4">
                             ₹{special_price.toLocaleString()}
                            </span>
                            <span className="text-muted ms-2 small">per person</span>
                          </div>
                          <div className="d-flex gap-2">
                           <Link href={`/package/${slug}`}>
                                <button className="btn btn-outline-dark">
                                  <i className="fas fa-eye me-1"></i> View
                                </button>
                           </Link>
                            <button className="btn btn-dark">
                              <i className="fas fa-shopping-cart me-1"></i> Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

    </>
  )
}

export default PackageCard