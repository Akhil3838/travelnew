import React, { useEffect, useState } from "react";
import { getTestimonialsApi } from "../services/allApi";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    try {
      const res = await getTestimonialsApi();
      console.log("API RESPONSE:", res);

      // Auto-detect correct structure
      const list =
        res?.data?.testimonials ||   // case 1: { data: { testimonials: [] } }
        res?.data ||                 // case 2: { data: [] }
        res?.testimonials ||         // case 3: { testimonials: [] }
        [];

      setTestimonials(list);
    } catch (error) {
      console.log("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return (
      <p className="text-center mt-5 fs-5 fw-bold text-danger">
        No testimonials found
      </p>
    );
  }

  // Split testimonials into chunks of 3 per slide
  const chunkedSlides = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    chunkedSlides.push(testimonials.slice(i, i + 3));
  }

  return (
    <>
      <div
        id="reviewsCarousel"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          {chunkedSlides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row">
                {slide.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="review-card">
                      <div className="review-text">"{item.description}"</div>
                      <img
                        src={item.profile}
                        alt={item.name}
                        className="reviewer-avatar"
                      />
                    </div>

                    <div className="reviewer-info">
                      <div className="star-rating">
                        {"★".repeat(item.rating)}
                        {"☆".repeat(5 - item.rating)}
                      </div>

                      <div className="location">{item.location}</div>
                      <div className="reviewer-name">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#reviewsCarousel"
          data-bs-slide="prev"
        >
          <i
            className="fa-solid fa-arrow-left fa-xl"
            style={{ color: "black" }}
          ></i>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#reviewsCarousel"
          data-bs-slide="next"
        >
          <i
            className="fa-solid fa-arrow-right fa-xl"
            style={{ color: "black" }}
          ></i>
        </button>
      </div>
    </>
  );
}

export default Testimonial;
