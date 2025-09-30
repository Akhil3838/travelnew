'use client';
import BookingForm from "@/app/components/BookingForm";
import Footer from "@/app/components/Footer";
import { getAllPackages, getSinglePackages } from "@/app/services/allApi";
import Link from "next/link";
// import EnqueryForm from "@/components/EnqueryForm";
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
      console.log(result);
      
      setDetails(result?.data?.package || null);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  const fetchAllPackages = async () => {
    try {
      const result = await getAllPackages();
      setTravelPackages(result?.data?.packages || []); // ensure array
    } catch (error) {
      console.error("Error fetching packages:", error);
      setTravelPackages([]); // prevent map crash
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
      <header className="main-header">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link href={'/'} style={{textDecoration:'none'}}>
              <div className="logo-container d-flex align-items-center">
                <span className="logo-icon">✈️</span>
                <span className="logo-text">GoWonder</span>
              </div>
          </Link>

          <nav className="main-nav d-none d-md-flex gap-4">
            <a href="#" className="nav-link">About Us</a>
            <a href="#" className="nav-link">Contact Us</a>
            <a href="#" className="nav-link">Blog</a>
          </nav>

          <button
            className="mobile-menu-btn btn d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            ☰
          </button>
        </div>
      </header>

        <div className="package-details bg-white text-dark">
          {/* Hero Section */}
          <div className="bg-black text-white py-5">
            <div className="container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-arrow bg-transparent p-0 m-0">
                  <li className="breadcrumb-item">
                    <a href="#" className="text-dark-50">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#" className="text-dark-50">{details.category?.title}</a>
                  </li>
                  <li className="breadcrumb-item active text-dark" aria-current="page">
                   {details.package_title}
                  </li>
                </ol>
              </nav>
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h1 className="display-5 fw-bold mb-3">{details.package_title}</h1>
                  <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                    <div className="bg-dark text-dark px-3 py-1 rounded d-flex align-items-center">
                      <i className="fas fa-star me-2"></i>
                      <span>{details.review_stars || '4.8'}</span>
                      <span className="ms-2">({details.total_review_count || '16'} reviews)</span>
                    </div>
                      {details.is_trending === 'yes' && (
                    <div className="badge bg-white text-dark px-3 py-2">
                      <i className="fas fa-tag me-1"></i> Best Seller
                    </div>
                  )}
                    {details.special_price && (
                    <div className="badge bg-dark text-white px-3 py-2">
                      {Math.round(((details.price - details.special_price) / details.price) * 100)}% Off
    
                    </div>
                  )}
                  </div>
                  <div className="d-flex flex-wrap gap-4">
                    <div>
                      <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                      <span>Departure: {details.departure}</span>
                    </div>
                    <div>
                      <i className="fas fa-clock me-2 text-primary"></i>
                      <span>Duration:{details.duration} days</span>
                    </div>
                    <div>
                      <i className="fas fa-calendar-alt me-2 text-primary"></i>
                      <span>Product Code:{details.transport}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="bg-dark text-white p-4 rounded-3 border border-secondary">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                         {details.special_price && (
                        <span className="text-decoration-line-through text-white me-2">
                         ₹{details.price}
                        </span>
                      )}
                        <span className="fw-bold text-warning fs-4">
                         ₹{details.special_price || details.price}
                        </span>
                      </div>
                      <span className="text-white small">per person</span>
                    </div>
                    <button className="btn btn-warning w-100 mb-3 py-3 fw-bold rounded-pill">
                      <i className="fas fa-shopping-cart me-2"></i> Book Now
                    </button>
                    <div className="text-center small text-white">
                      <i className="fas fa-lock me-1"></i> Secure booking
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Main Content */}
          <div className="container py-5">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-8">
                {/* Image Gallery */}
                <div className="mb-5">
                  <div className="row g-3">
                     {details.packimages?.length > 0 && (
    <>
                        <div className="col-md-8">
                          <img 
                            src={details.packimages[0].image} 
                            alt={details.package_title} 
                            className="img-fluid rounded-3 w-100" 
                            style={{ height: "400px", objectFit: "cover" }}
                          />
                        </div>
        
                        <div className="col-md-4">
                          <div className="d-flex flex-column h-100 gap-3">
                            {details.packimages.slice(1, 3).map((image, index) => (
                              <img 
                                key={index}
                                src={image.image} 
                                alt={details.package_title} 
                                className="img-fluid rounded-3" 
                                style={{ height: "190px", objectFit: "cover" }}
                              />
                            ))}
                          </div>
                        </div>
                    </>     
     )}   
    
                  </div>
    {details.packimages?.length > 0 && (
      <div className="d-flex mt-3 gap-2 flex-wrap">
        {details.packimages.slice(0, 6).map((image, index) => (
          <img 
            key={index}
            src={image.image} 
            alt={`Tour ${index + 1}`} 
            className="img-fluid rounded-3 d-none d-sm-block" // hide on xs
            style={{ width: "120px", height: "80px", objectFit: "cover" }}
          />
        ))}
    
        {/* Show only 3 on mobile (xs) */}
        {details.packimages.slice(0, 3).map((image, index) => (
          <img 
            key={`mobile-${index}`}
            src={image.image} 
            alt={`Tour Mobile ${index + 1}`} 
            className="img-fluid rounded-3 d-block d-sm-none" // visible only on xs
            style={{ width: "120px", height: "80px", objectFit: "cover" }}
          />
        ))}
      </div>
    )}
                </div>
    
    <div className="mb-5 description-containe">
      {details.description && (
        <div  dangerouslySetInnerHTML={renderHTML(details.description)} />
      )}
    </div>
    
                {/* Itinerary */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4">Tour Plan</h2>
                  <p className=" mb-4">
                       {details?.plan_description}
                   </p>
    
      <div className="accordion" id="itineraryAccordion">
        {details?.tourplan?.map((item, index) => (
          <div
            className="accordion-item border-0 rounded shadow-sm mb-3 bg-light"
            key={item.id}
          >
            <h3 className="accordion-header" id={`heading${item.day}`}>
              <button
                className="accordion-button collapsed bg-light py-3 px-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.day}`}
                aria-expanded="false"
                aria-controls={`collapse${item.day}`}
              >
                <span className="badge text-dark bg-light me-3">
                  Day-{item.day}
                </span>
                <strong>{item.title}</strong>
              </button>
            </h3>
            <div
              id={`collapse${item.day}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${item.day}`}
              data-bs-parent="#itineraryAccordion"
            >
              <div className="accordion-body px-4 pt-0 pb-3">
                <p className="mb-0 text-muted py-2">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
                </div>
    
    
    
                            {(details.inclusions?.length > 0 || details.exclusions?.length > 0) && (
                  <div className="included-exclude-section my-5">
                    <h4 className="fw-bold mb-4">Included/Exclude</h4>
                    <div className="row">
                      {details.inclusions?.length > 0 && (
                        <div className="col-md-6">
                          <h5>Included</h5>
                          <ul className="list-unstyled">
                            {details.inclusions.map((item, index) => (
                              <li key={`inc-${index}`} className="mb-2 d-flex align-items-center">
                                <i className="fas fa-check-circle text-success me-2"></i>
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {details.exclusions?.length > 0 && (
                        <div className="col-md-6">
                          <h5>Excluded</h5>
                          <ul className="list-unstyled">
                            {details.exclusions.map((item, index) => (
                              <li key={`exc-${index}`} className="mb-2 d-flex align-items-center">
                                <i className="fas fa-times-circle text-danger me-2"></i>
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
    
    
    
    
    
    
                {/* Reviews */}
                {/* <div className="mb-5">
                  <h2 className="fw-bold mb-4">Customer Reviews</h2>
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-warning text-dark px-3 py-2 rounded d-flex align-items-center me-3">
                      <i className="fas fa-star me-1"></i>
                      <span className="fs-4 fw-bold">4.8</span>
                    </div>
                    <div>
                      <h5 className=" text-white mb-1">Excellent</h5>
                      <p className=" mb-0">Based on 16 reviews</p>
                    </div>
                  </div>
    
                  <div className="card border-secondary bg-gray-800 mb-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-2">
                        <h5 className="mb-0 text-dark">Amazing Experience!</h5>
                        <div className="text-warning">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                      <p className=" small">Reviewed by Michael J. • April 15, 2023</p>
                      <p className=" text-dark">"This tour exceeded all expectations. Our guide was incredibly knowledgeable and made sure we saw all the best spots. The small group size made it feel very personal. Highly recommend!"</p>
                    </div>
                  </div>
    
                  <div className="card border-secondary bg-gray-800">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-2">
                        <h5 className="mb-0 ">Best Grand Canyon Tour</h5>
                        <div className="text-warning">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                      <p className=" small">Reviewed by Sarah L. • March 28, 2023</p>
                      <p className=" text-dark">"The itinerary was perfect - we saw everything we wanted and more. Antelope Canyon was breathtaking. The hotels were comfortable and well-located. Worth every penny!"</p>
                    </div>
                  </div>
    
                  <button className="btn btn-outline-warning mt-4 rounded-pill px-4 py-2">
                    <i className="fas fa-plus me-2"></i> Load More Reviews
                  </button>
                </div> */}
              </div>
    
              {/* Right Column - Booking Widget */}
              <div className="col-lg-4">
                <div className="sticky-top" style={{ top: "20px" }}>
                  <div className="card border-secondary bg-dark mb-2">
              <div className="card-body">
                <h4 className="fw-bold mb-3 text-white">Book This Tour</h4>
    
              <BookingForm packageId={details?.id}/>
    
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Similar Tours */}
    <div className="bg-black py-5">
      <div className="container">
        <h2 className="fw-bold mb-5 text-center">You May Also Like</h2>
        <div className="row">
          {travelPackages.map((pkg) => (
            <div className="col-md-6 mb-4" key={pkg.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0 h-100">
                  <div className="col-md-5">
                   <Link href={`/package/${pkg.slug}`}>
                      <img
                        src={
                          pkg.thumbnails?.[0]?.image ??
                          "https://via.placeholder.com/300x200"
                        }
                        alt={pkg.package_title}
                        className="img-fluid rounded-start h-100"
                        style={{ objectFit: "cover" }}
                      />
                   </Link>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body d-flex flex-column h-100">
                      <div className="d-flex justify-content-between mb-2">
                        {pkg.add_badge_status === "yes" && (
                          <span className="badge bg-primary">
                            {pkg.badge || "Featured"}
                          </span>
                        )}
                        {pkg.price > pkg.special_price && (
                          <span className="badge bg-success">
                            {Math.round(
                              ((pkg.price - pkg.special_price) / pkg.price) * 100
                            )}
                            % Off
                          </span>
                        )}
                      </div>
                      <h5 className="card-title">{pkg.package_title}</h5>
                      <div className="d-flex align-items-center mb-2">
                        <div className="bg-warning text-white px-2 py-1 rounded d-flex align-items-center me-2">
                          <i className="fas fa-star me-1"></i>
                          <span>{pkg.review_stars}</span>
                        </div>
                        <span className="text-muted small">
                          ({pkg.total_review_count} reviews)
                        </span>
                      </div>
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            {pkg.price > pkg.special_price && (
                              <span className="text-decoration-line-through text-muted me-2">
                                ₹{pkg.price}
                              </span>
                            )}
                            <span className="fw-bold text-danger">
                              ₹{pkg.special_price}
                            </span>
                          </div>
                          <a
                            href={`/package/${pkg.slug}`}
                            className="btn btn-sm btn-gradient-outline-primary rounded-pill px-3"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>

<Footer/>
    
</>  );
};

export default PackageDetails;