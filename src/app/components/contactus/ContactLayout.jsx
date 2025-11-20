import React from 'react'
import ContactForm from './ContactForm'

function ContactLayout() {
  return (
    <>
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
         <ContactForm/>

        </div>
      </div>


    </>
  )
}

export default ContactLayout