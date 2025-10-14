'use client'
import Link from 'next/link';
import React from 'react';
import StickyHeader from '../components/StickyHeader';

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message! Our Travelogue Pedia experts will get back to you soon.');
  };

  return (
    <div className="contact-page">
        <StickyHeader/>
              <header className="main-header">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link href={'/'} style={{textDecoration:'none'}}>
              <div className="logo-container d-flex align-items-center">
                <span className="logo-icon">✈️</span>
                <span className="logo-text text-dark"> Travelogue Pedia</span>
              </div>
          </Link>

          <nav className="main-nav d-none d-md-flex gap-4">
             <a href="/about" className="nav-link">About Us</a>
            <a href="/contactus" className="nav-link">Contact Us</a>
            <a href="/blogs" className="nav-link">Blog</a>
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

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              {/* <div className="brand-logo mb-3">
                <i className="fas fa-compass me-2"></i>
                <span className="h3 fw-bold text-white">Travelogue Pedia</span>
              </div> */}
              <h1 className="display-4 fw-bold text-white mb-4">Your Journey Begins Here</h1>
              <p className="lead text-white">
                Let the Travelogue Pedia experts craft your perfect adventure. Share your story with us!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-main py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form-card p-4 p-lg-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="form-icon me-3">
                    <i className="fas fa-edit"></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-1">Write Your Travelogue</h3>
                    <p className="text-muted mb-0">Start planning your next chapter with us</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="First Name"
                          required
                        />
                        <label htmlFor="firstName">First Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder="Last Name"
                          required
                        />
                        <label htmlFor="lastName">Last Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email Address"
                          required
                        />
                        <label htmlFor="email">Email Address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Phone Number"
                        />
                        <label htmlFor="phone">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="inquiryType" required>
                          <option value="">Travel Purpose</option>
                          <option value="vacation">Leisure Vacation</option>
                          <option value="adventure">Adventure Trip</option>
                          <option value="business">Business Travel</option>
                          <option value="honeymoon">Honeymoon</option>
                          <option value="family">Family Holiday</option>
                          <option value="other">Other</option>
                        </select>
                        <label htmlFor="inquiryType">Travel Purpose</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="destination">
                          <option value="">Dream Destination</option>
                          <option value="europe">European Explorer</option>
                          <option value="asia">Asian Adventures</option>
                          <option value="americas">American Journey</option>
                          <option value="africa">African Safari</option>
                          <option value="oceania">Oceanic Escape</option>
                        </select>
                        <label htmlFor="destination">Dream Destination</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Tell us about your dream adventure..."
                          style={{ height: '150px' }}
                          required
                        ></textarea>
                        <label htmlFor="message">Your Travel Story Begins...</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="newsletter" />
                        <label className="form-check-label" htmlFor="newsletter">
                          Subscribe to Travelogue Pedia newsletter for exclusive travel insights
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg w-100">
                        <i className="fas fa-book-open me-2"></i>
                        Begin Your Journey
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="contact-info">
                <div className="text-center mb-4">
                  <div className="brand-icon mb-2">
                    <i className="fas fa-compass"></i>
                  </div>
                  <h4 className="fw-bold">Travelogue Pedia</h4>
                  <p className="text-muted">Your Ultimate Travel Companion</p>
                </div>
                
                <div className="contact-item d-flex mb-4">
                  <div className="contact-icon me-3">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold">Adventure Headquarters</h6>
                    <p className="text-muted mb-0">
                      123 Explorer's Way<br />
                      Journey City, JC 12345
                    </p>
                  </div>
                </div>

                <div className="contact-item d-flex mb-4">
                  <div className="contact-icon me-3">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold">Travel Helpline</h6>
                    <p className="text-muted mb-0">+1 (555) 123-TRAVEL</p>
                    <small className="text-orange">24/7 Travel Support</small>
                  </div>
                </div>

                <div className="contact-item d-flex mb-4">
                  <div className="contact-icon me-3">
                    <i className="fas fa-envelope-open-text"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold">Email Us</h6>
                    <p className="text-muted mb-0">journeys@traveloguepedia.com</p>
                    <small className="text-orange">Expert response within 2 hours</small>
                  </div>
                </div>

                <div className="contact-item d-flex mb-4">
                  <div className="contact-icon me-3">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold">Storytelling Hours</h6>
                    <p className="text-muted mb-0">
                      Mon - Fri: 8:00 AM - 8:00 PM<br />
                      Sat - Sun: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="emergency-contact mt-4 p-3 rounded">
                  <div className="d-flex align-items-center">
                    <div className="emergency-icon me-3">
                      <i className="fas fa-life-ring"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Global Emergency Support</h6>
                      <p className="mb-0">+1 (555) 911-TRAVEL</p>
                      <small>For urgent travel assistance worldwide</small>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="features mt-4">
                  <h6 className="fw-bold mb-3">Why Travelogue Pedia?</h6>
                  <div className="feature-item d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-orange me-2"></i>
                    <small>Expert Travel Curators</small>
                  </div>
                  <div className="feature-item d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-orange me-2"></i>
                    <small>Personalized Journey Planning</small>
                  </div>
                  <div className="feature-item d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-orange me-2"></i>
                    <small>24/7 Global Support</small>
                  </div>
                  <div className="feature-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-orange me-2"></i>
                    <small>Authentic Travel Experiences</small>
                  </div>
                </div>

                {/* Social Media */}
                <div className="social-links mt-5">
                  <h6 className="fw-bold mb-3">Follow Our Travelogues</h6>
                  <div className="d-flex gap-3 justify-content-center">
                    <a href="#" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-placeholder">
            <div className="map-overlay text-center">
              <h5 className="text-white mb-2">
                <i className="fas fa-compass me-2"></i>
                Visit Travelogue Pedia
              </h5>
              <p className="text-white mb-0">Let's plan your next chapter together!</p>
            </div>
            <div className="map-container">
              <div className="map-content">
                <i className="fas fa-globe-americas map-icon"></i>
                <h5 className="text-white">Your Adventure Awaits</h5>
                <p className="text-white">Start your travelogue with us today</p>
                <button className="btn btn-outline-light mt-3">
                  <i className="fas fa-directions me-2"></i>
                  Get Directions to Our Office
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-badges py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center">
                <h6 className="fw-bold mb-3">Trusted by Travelers Worldwide</h6>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  <div className="badge-item">
                    <i className="fas fa-award text-orange me-2"></i>
                    <span className='text-dark'>Best Travel Service 2024</span>
                  </div>
                  <div className="badge-item">
                    <i className="fas fa-shield-alt text-orange me-2"></i>
                    <span className='text-dark'>Verified Travel Experts</span>
                  </div>
                  <div className="badge-item">
                    <i className="fas fa-heart text-orange me-2"></i>
                    <span className='text-dark'>10,000+ Happy Travelers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;