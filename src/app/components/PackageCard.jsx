"use client";
import Link from "next/link";
import React from "react";

const PackageCard = ({ pkg = {} }) => {
  const {
    id,
    package_title = "JW Marriott Marquis Hotel Dubai",
    small_description = "Pool",
    price = 92401,
    special_price = 68540,
    review_stars = 9.6,
    total_review_count = 1137,
    thumbnails = [{ image: "https://via.placeholder.com/500x300?text=Hotel+Image" }],
    badge = "100% off flights",
  } = pkg;

  const imageUrl = thumbnails[0]?.image;

  const discountPercent =
    special_price < price ? Math.round(((price - special_price) / price) * 100) : 0;

  return (
    <div
      className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4"
      style={{ transition: "transform 0.2s", cursor: "pointer" }}
    >
      <div className="row g-0">
        {/* Left Image */}
        <div className="col-md-5 position-relative">
          <Link href={`/package/${id}`}>
            <img
              src={imageUrl}
              alt={package_title}
              className="img-fluid w-100 h-100 object-fit-cover"
              style={{ minHeight: "220px" }}
            />
          </Link>
        </div>

        {/* Right Info */}
        <div className="col-md-7 p-3 d-flex flex-column justify-content-between">
          <div>
            <h5 className="fw-bold mb-1">{package_title}</h5>
            <p className="text-secondary mb-2">
              <i className="fas fa-swimming-pool me-1"></i> {small_description}
            </p>

            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge bg-success text-white rounded-pill px-3 py-2 small fw-semibold">
                {badge}
              </span>
              {discountPercent > 0 && (
                <span className="badge bg-light text-dark border rounded-pill px-3 py-2 small fw-semibold">
                  {discountPercent}% off
                </span>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="d-flex align-items-center mb-2">
            <span
              className="badge bg-success text-white fw-bold fs-6 me-2"
              style={{ borderRadius: "8px" }}
            >
              {review_stars}
            </span>
            <div>
              <div className="fw-semibold text-dark">Exceptional</div>
              <small className="text-muted">{total_review_count} reviews</small>
            </div>
          </div>

          {/* Price Section */}
          <div className="mt-2">
            <div className="text-end">
              <div>
                <span className="text-decoration-line-through text-muted me-2">
                  ₹{price.toLocaleString()}
                </span>
                <span className="fw-bold fs-4 text-dark">₹{special_price.toLocaleString()}</span>
              </div>
              <div className="text-muted small">
                per traveller <br /> includes flight + stay <br />
                <span className="fw-semibold text-dark">
                  ₹{(special_price * 2).toLocaleString()} package total
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
