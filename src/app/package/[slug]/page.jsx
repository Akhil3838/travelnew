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
  const [activeTab, setActiveTab] = useState('info')

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
      <header className="main-header bg-white shadow-sm sticky-top z-3">
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
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url(https://img.freepik.com/free-vector/vector-abstract-moon-relief-map-generated-conceptual-lunar-elevation-map-isolines-landscape-surface-elevation-geographic-map-conceptual-design-elegant-background-presentations_1217-5656.jpg)
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

        <div className="container">
          <nav aria-label="breadcrumb" className="mb-3 ">
            <ol className="breadcrumb bg-transparent p-0">
              <li className="breadcrumb-item ">
                <Link href="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="text-white">{details.category?.title}</span>
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
                <span className="text-white">
                  <i className="fas fa-map-marker-alt me-2 text-warning"></i>
                  Departure: {details.departure}
                </span>
                <span className="text-white">
                  <i className="fas fa-clock me-2 text-warning"></i>
                  Duration: {details.duration} days
                </span>
                <span className="text-white">
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
                <button className="btn btn-sm bg-orange w-100 fw-bold py-3 rounded-pill text-white">
                  <i className="fas fa-shopping-cart me-2"></i> Book Now
                </button>

                 <button className="btn btn-sm  w-100 fw-bold py-3 mt-2 rounded-pill border text-dark shadow">
                  <i className="fas fa-shopping-cart me-2"></i> Private Trip Enquery
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
             {/* {details.tourplan?.length > 0 && (
              <div className="mb-5">
                <h3 className="fw-bold mb-4 text-primary">Tour Plan</h3>
                <div className="accordion" id="tourPlanAccordion">
                  {details.tourplan.map((item) => (
                    <div
                      key={item.id}
                      className="accordion-item border-0 shadow-sm mb-3 rounded"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed bg-white fw-semibold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.day}`}
                        >
                          Day {item.day}: {item.title}
                        </button>
                      </h4>
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
            )}  */}

         <div className="container my-5">
            {/* Tabs */}
            <div className="tab-buttons d-flex flex-wrap gap-2 mb-4">
              <button
                className={`btn ${activeTab === 'info' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setActiveTab('info')}
              >
                <i className="bi bi-info-circle me-1"></i> Information
              </button>
              <button
                className={`btn ${activeTab === 'plan' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setActiveTab('plan')}
              >
                <i className="bi bi-calendar-check me-1"></i> Travel Plan
              </button>
              <button
                className={`btn ${activeTab === 'gallery' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setActiveTab('gallery')}
              >
                <i className="bi bi-images me-1"></i> Tour Gallery
              </button>
              <button
                className={`btn ${activeTab === 'location' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setActiveTab('location')}
              >
                <i className="bi bi-geo-alt me-1"></i> Location
              </button>
            </div>
    
            {/* Information Tab */}
{activeTab === 'info' && (
  <div className="fade-in">
    <h4 className="fw-bold text-success">{details.destinationName || "Kashmir"}</h4>
    <p className="text-muted">
     Kashmir, also referred to as “Paradise on Earth,” is an enchanting region that boasts picturesque landscapes, pristine lakes, lush green valleys, and vibrant gardens, making it a perfect destination for nature lovers, adventure enthusiasts, and peace seekers alike.
    </p>

    <table className="table table-bordered info-table">
      <tbody>
        <tr>
          <th>Destination</th>
          <td>{details.places || "N/A"}</td>
        </tr>
        <tr>
          <th>Departure</th>
          <td>{details.departure || "Yes Required"}</td>
        </tr>
        <tr>
          <th>Duration</th>
          <td>{details.duration || "3 Nights / 4 Days"}</td>
        </tr>

        {/* ✅ Dynamic Included / Excluded Section */}
        {(details.inclusions?.length > 0 || details.exclusions?.length > 0) && (
          <>
            <tr>
              <th>Included</th>
              <td>
                <ul className="list-unstyled mb-0">
                  {details.inclusions?.map((item, index) => (
                    <li key={index}>✅ {item.title}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th>Excluded</th>
              <td>
                <ul className="list-unstyled mb-0">
                  {details.exclusions?.map((item, index) => (
                    <li key={index}>❌ {item.title}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  </div>
)}
    
            {/* Travel Plan Tab */}
{activeTab === 'plan' && (
  <div className="fade-in">
    <h4 className="fw-bold text-success mb-4">Travel Plan - 4 Days</h4>
    
    <div className="modern-timeline">
      {details.tourplan.map((item, i) => (
        <div key={i} className="modern-timeline-item shadow-sm rounded-4 p-4 mb-4 bg-white position-relative">
          <div className="timeline-icon bg-orange text-white rounded-circle d-flex align-items-center justify-content-center">
            <i className={`${item.icon} fs-4`}></i>
          </div>
          <div className="timeline-content ps-4">
            <h6 className="text-uppercase text-orange fw-bold">{item.day} Day</h6>
            <h5 className="fw-semibold mb-2">{item.title}</h5>
            <p className="text-muted mb-0"> {item.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
    
            {/* Tour Gallery Tab */}
            {activeTab === 'gallery' && (
              <div className="fade-in">
                <h4 className="fw-bold text-success mb-3">Tour Gallery</h4>
                <div className="row g-3">
                  {details.packimages.map((img, i) => (
                    <div className="col-6 col-md-3" key={i}>
                      <div className="gallery-card shadow-sm rounded overflow-hidden">
                        <img
                          src={`${img.image}`}
                          alt="Kashmir Tour"
                          className="img-fluid gallery-img"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
    
            {/* Location Tab */}
            {activeTab === 'location' && (
              <div className="fade-in">
                <h4 className="fw-bold text-success mb-3">Location</h4>
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507951.255566565!2d74.6337!3d34.0837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f2cb27c8b41%3A0x6d7f3c13e8ce64b3!2sSrinagar!5e0!3m2!1sen!2sin!4v1707843459312!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            )}
          </div>


          </div>

          {/* Booking Sidebar */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm " style={{ top: "20px" }}>
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
          background: "linear-gradient(90deg, #f4f2f1ff)",
        }}
      >
        <div className="container text-dark">
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
                            className="btn btn-sm bg-orange text-white mt-2 rounded-pill"
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
<div style={{paddingTop:'150px',backgroundColor:'#f4f2f1ff'}}>

</div>
      <Footer />
    </>
  );
};

export default PackageDetails;
