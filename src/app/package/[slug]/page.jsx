'use client';
import BookingForm from "@/app/components/BookingForm";
import Footer from "@/app/components/Footer";
import { getAllPackages, getSinglePackages } from "@/app/services/allApi";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PackageDetails = () => {
  const params = useParams();
  const { slug } = params;

  const [details, setDetails] = useState(null);
  const [travelPackages, setTravelPackages] = useState([]);

  const fetchPackageDetails = async (slug) => {
    try {
      const result = await getSinglePackages(slug);
      setDetails(result?.data?.package || null);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  const fetchAllPackages = async () => {
    try {
      const result = await getAllPackages();
      setTravelPackages(result?.data?.packages || []);
    } catch (error) {
      console.error("Error fetching packages:", error);
      setTravelPackages([]);
    }
  };

  useEffect(() => {
    fetchPackageDetails(slug);
    fetchAllPackages();
  }, [slug]);

  if (!details) {
    return <div className="container py-5 text-center">Loading...</div>;
  }

  const renderHTML = (htmlString) => ({ __html: htmlString });

  return (
    <>
      {/* Header */}
      <header className="main-header bg-white shadow-sm sticky-top">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link href="/" style={{ textDecoration: "none" }}>
            <div className="logo-container d-flex align-items-center">
              <span className="logo-icon fs-3 text-primary">✈️</span>
              <span className="logo-text fw-bold fs-4 text-dark ms-2">
                Travelogue Pedia
              </span>
            </div>
          </Link>

          <nav className="main-nav d-none d-md-flex gap-4">
            <a href="#" className="text-dark fw-semibold hover-blue" style={{textDecoration:'none'}}>
              About Us
            </a>
            <a href="#" className="text-dark fw-semibold hover-blue" style={{textDecoration:'none'}}>
              Contact Us
            </a>
            <a href="#" className="text-dark fw-semibold hover-blue" style={{textDecoration:'none'}}>
              Blog
            </a>
          </nav>

          <button
            className="mobile-menu-btn btn btn-outline-primary d-md-none rounded-circle"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Package Hero Section */}
      <section
        className="text-white py-5"
        style={{
          background: "linear-gradient(90deg,#ff7b00, #ff7b0093)",
        }}
      >
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white-50 text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="text-white-50">{details.category?.title}</span>
              </li>
              <li
                className="breadcrumb-item active text-white"
                aria-current="page"
              >
                {details.package_title}
              </li>
            </ol>
          </nav>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="fw-bold mb-3">{details.package_title}</h1>
              <div className="d-flex flex-wrap gap-3 mb-3">
                <div className="badge bg-white text-primary px-3 py-2">
                  <i className="fas fa-star me-2"></i>
                  {details.review_stars || "4.8"} ({details.total_review_count || "16"} reviews)
                </div>
                {details.is_trending === "yes" && (
                  <div className="badge bg-primary text-white px-3 py-2">
                    <i className="fas fa-fire me-1"></i> Best Seller
                  </div>
                )}
                {details.special_price && (
                  <div className="badge bg-warning text-dark px-3 py-2">
                    {Math.round(
                      ((details.price - details.special_price) / details.price) * 100
                    )}
                    % Off
                  </div>
                )}
              </div>

              <div className="d-flex flex-wrap gap-4">
                <span>
                  <i className="fas fa-map-marker-alt me-2 text-warning"></i>
                  Departure: {details.departure}
                </span>
                <span>
                  <i className="fas fa-clock me-2 text-warning"></i>
                  Duration: {details.duration} days
                </span>
                <span>
                  <i className="fas fa-bus me-2 text-warning"></i>
                  Transport: {details.transport}
                </span>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="bg-white text-dark p-4 rounded-3 shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    {details.special_price && (
                      <span className="text-decoration-line-through text-muted me-2">
                        ₹{details.price}
                      </span>
                    )}
                    <span className="fw-bold text-primary fs-4">
                      ₹{details.special_price || details.price}
                    </span>
                  </div>
                  <small>per person</small>
                </div>
                <button className="btn btn-warning w-100 fw-bold py-3 rounded-pill text-white">
                  <i className="fas fa-shopping-cart me-2"></i> Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <div className="container py-5">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-8">
            {/* Image Gallery */}
            {details.packimages?.length > 0 && (
              <div className="row g-3 mb-5">
                <div className="col-md-8">
                  <img
                    src={details.packimages[0].image}
                    className="img-fluid rounded-3 w-100 shadow-sm"
                    style={{ height: "400px", objectFit: "cover" }}
                    alt=""
                  />
                </div>
                <div className="col-md-4 d-flex flex-column gap-3">
                  {details.packimages.slice(1, 3).map((img, idx) => (
                    <img
                      key={idx}
                      src={img.image}
                      className="img-fluid rounded-3 shadow-sm"
                      style={{ height: "190px", objectFit: "cover" }}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {details.description && (
              <div
                className="mb-5"
                dangerouslySetInnerHTML={renderHTML(details.description)}
              />
            )}

            {/* Itinerary */}
            {details.tourplan?.length > 0 && (
              <div className="mb-5">
                <h3 className="fw-bold mb-4 text-primary">Tour Plan</h3>
                <div className="accordion" id="tourPlanAccordion">
                  {details.tourplan.map((item) => (
                    <div
                      key={item.id}
                      className="accordion-item border-0 shadow-sm mb-3 rounded"
                    >
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed bg-white fw-semibold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.day}`}
                        >
                          Day {item.day}: {item.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.day}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#tourPlanAccordion"
                      >
                        <div className="accordion-body text-muted">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included / Excluded */}
            {(details.inclusions?.length > 0 || details.exclusions?.length > 0) && (
              <div className="my-5">
                <h3 className="fw-bold text-primary mb-4">Included / Excluded</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="text-success">Included</h5>
                    <ul className="list-unstyled">
                      {details.inclusions?.map((i, idx) => (
                        <li key={idx} className="mb-2">
                          ✅ {i.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-danger">Excluded</h5>
                    <ul className="list-unstyled">
                      {details.exclusions?.map((i, idx) => (
                        <li key={idx} className="mb-2">
                          ❌ {i.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm sticky-top" style={{ top: "20px" }}>
              <div className="card-body">
                <h4 className="fw-bold text-primary mb-3">Book This Tour</h4>
                <BookingForm packageId={details?.id} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Packages */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(90deg, #2f00ffff, #1500ffff)",
        }}
      >
        <div className="container text-white">
          <h2 className="fw-bold mb-5 text-center">You May Also Like</h2>
          <div className="row">
            {travelPackages.map((pkg) => (
              <div className="col-md-6 mb-4" key={pkg.id}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <Link href={`/package/${pkg.slug}`}>
                        <img
                          src={pkg.thumbnails?.[0]?.image}
                          className="img-fluid rounded-start h-100"
                          style={{ objectFit: "cover",width:"100%",height:"100%" }}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-primary fw-bold">
                          {pkg.package_title}
                        </h5>
                        <p className="small text-muted mb-2">
                          {pkg.duration} Days | {pkg.departure}
                        </p>
                        <div className="mt-auto">
                          <div className="fw-bold text-dark">
                            ₹{pkg.special_price || pkg.price}
                          </div>
                          <Link
                            href={`/package/${pkg.slug}`}
                            className="btn btn-sm btn-warning text-white mt-2 rounded-pill"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PackageDetails;
