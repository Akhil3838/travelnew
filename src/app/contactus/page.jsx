'use client';
import React from "react";
import StickyHeader from "../components/StickyHeader";
import Link from "next/link";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <>
    <StickyHeader/>

     <header className="main-header bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link href={'/'} style={{ textDecoration: 'none' }}>
            <div className="logo-container d-flex align-items-center">
              <span className="logo-icon fs-3">✈️</span>
              <span className="logo-text text-dark fw-bold ms-2 fs-5"> Travelogue Pedia</span>
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


      {/* Page Title */}
      {/* Intro Ribbon */}

            <section className="gradient-ribbon text-white" style={{ background: 'linear-gradient(135deg,hsla(260, 60%, 2%, 1.00) 0%,rgba(10, 7, 15, 1) 100%)' }}>
        <div className="container py-5 text-center">
           <h1 className="fw-bold display-5">Contact Us</h1>
        <p >
          Any question or remarks? Just write us a message!
        </p>
        </div>
      </section>
      {/* Main Contact Layout */}
      <div className="container pb-5 pt-5">
        <div className="row g-4">

          {/* LEFT SIDE – CONTACT INFO BOX */}
          <div className="col-lg-5">
            <div
              className="p-4 p-md-5 h-100 text-white rounded-4"
              style={{ background: "#000000ff" }}
            >
              <h3 className="fw-bold mb-2">Contact Information</h3>
              <p className="text-white-50 mb-4">
                Say something to start a live chat!
              </p>

              <div className="d-flex align-items-start mb-4 pt-5">
                <i className="fa-solid fa-phone me-3 fs-4"></i>
                <p className="mb-0">+1 012 3456 789</p>
              </div>

              <div className="d-flex align-items-start mb-4">
                <i className="fa-solid fa-envelope me-3 fs-4"></i>
                <p className="mb-0">demo@gmail.com</p>
              </div>

              <div className="d-flex align-items-start mb-5">
                <i className="fa-solid fa-location-dot me-3 fs-4"></i>
                <p className="mb-0">
                  132 Dartmouth Street Boston, <br />
                  Massachusetts 02156 United States
                </p>
              </div>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-auto pt-5">
                <button className="btn btn-outline-light rounded-circle p-2">
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="btn btn-outline-light rounded-circle p-2">
                  <i className="fab fa-instagram"></i>
                </button>
                <button className="btn btn-outline-light rounded-circle p-2">
                  <i className="fab fa-discord"></i>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="col-lg-7">
            <form className="bg-white p-4 p-md-5 rounded-4 shadow-sm">

              <div className="row mb-4">
                <div className="col-md-6 mb-3">
                  <label className="text-muted small">First Name</label>
                  <input type="text" className="form-control border-0 border-bottom rounded-0" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="text-muted small">Last Name</label>
                  <input type="text" className="form-control border-0 border-bottom rounded-0" />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-muted small">Email</label>
                <input type="email" className="form-control border-0 border-bottom rounded-0" />
              </div>

              <div className="mb-4">
                <label className="text-muted small">Phone Number</label>
                <input type="tel" className="form-control border-0 border-bottom rounded-0" />
              </div>

              {/* SUBJECT OPTIONS */}
              <div className="mb-3">
                <label className="fw-bold small">Select Subject?</label>

                <div className="d-flex flex-wrap gap-4 mt-2">
                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="subject" defaultChecked /> Tour Enquiry
                  </label>

                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="subject" /> Destination Enquiry
                  </label>

                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="subject" /> Plan Enquiry
                  </label>

                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="subject" />Hotel  Enquiry
                  </label>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mb-4">
                <label className="text-muted small">Message</label>
                <textarea
                  className="form-control border-0 border-bottom rounded-0"
                  rows="3"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button className="btn text-white px-4 py-2"  style={{ background: "#000000ff" }}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

                  <div style={{paddingTop:'150px'}}></div>


      <Footer/>
    </>
  );
}

export default ContactUs;
