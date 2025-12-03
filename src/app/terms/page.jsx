'use client'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function terms() {
  return (
    <>
      <Header />

      <div className='container py-5'>
        
        {/* HERO SECTION */}
        <div
          className="text-white p-5 rounded mb-4 shadow"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)),
              url('https://static.vecteezy.com/system/resources/thumbnails/008/009/837/small/outdoor-tourism-landscape-luxurious-beach-resort-with-swimming-pool-and-beach-chairs-or-loungers-umbrellas-with-palm-trees-and-blue-sky-sea-horizon-summer-island-relax-travel-and-idyllic-vacation-photo.jpg')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
          }}
        >
          <h1 className="fw-bold">Terms & Conditions</h1>
          <p className="mt-2 mb-0">
            Please read the Terms & Conditions carefully before using Travelogue Pedia.
            By accessing our website, you agree to abide by these terms.
          </p>
        </div>

        <div className="row g-4">

          {/* MAIN CONTENT */}
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">

                <h3 className="fw-semibold mb-3">Introduction</h3>
                <p>
                  Welcome to <strong>Travelogue Pedia</strong>. By accessing or using our website,
                  you agree to comply with and be bound by these Terms and Conditions.
                  If you do not agree, please discontinue using the website.
                </p>

                <h4 className="fw-semibold mt-4">Use of Our Website</h4>
                <p>
                  Travelogue Pedia provides travel guides, informational content, booking 
                  assistance, and other tourism-related services. You agree not to copy, 
                  misuse, or distribute our content without permission.
                </p>

                <h4 className="fw-semibold mt-4">User Responsibilities</h4>
                <ul>
                  <li>Provide accurate information when interacting with the platform.</li>
                  <li>Do not attempt to harm or disrupt the website.</li>
                  <li>Do not use the website for unlawful activities.</li>
                </ul>

                <h4 className="fw-semibold mt-4">Intellectual Property</h4>
                <p>
                  All images, logos, articles, guides, and branding materials are the 
                  property of Travelogue Pedia. Unauthorized usage is prohibited.
                </p>

                <h4 className="fw-semibold mt-4">Third-Party Links</h4>
                <p>
                  We may provide links to third-party websites. Travelogue Pedia is not 
                  responsible for the content or policies of these external sites.
                </p>

                <h4 className="fw-semibold mt-4">Booking & Payments</h4>
                <p>If using our platform to make bookings:</p>
                <ul>
                  <li>Payments must be done through authorized payment partners.</li>
                  <li>Cancellation and refunds depend on the service provider’s rules.</li>
                </ul>

                <h4 className="fw-semibold mt-4">Limitation of Liability</h4>
                <p>
                  Travelogue Pedia is not liable for travel delays, cancellations,
                  weather-related interruptions, losses, or third-party service failures.
                  Users should verify all travel information before booking.
                </p>

                <h4 className="fw-semibold mt-4">Termination of Access</h4>
                <p>
                  We may suspend or terminate user access if any Terms & Conditions 
                  are violated.
                </p>

                <h4 className="fw-semibold mt-4">Changes to Terms</h4>
                <p>
                  Travelogue Pedia may revise these Terms & Conditions at any time.
                  Users are encouraged to review them periodically.
                </p>

                <h4 className="fw-semibold mt-4">Contact Us</h4>
                <p>
                  For inquiries related to these Terms:
                  <br />
                  <strong>support@traveloguepedia.example</strong>
                </p>

              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">

            {/* SUMMARY BOX */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body">
                <h5 className="fw-semibold mb-3">Quick Summary</h5>
                <p><strong>Website Name:</strong> Travelogue Pedia</p>
                {/* <p><strong>Last Updated:</strong> Dec 3, 2025</p> */}
                <p><strong>Contact:</strong> support@traveloguepedia.example</p>
              </div>
            </div>

            {/* FAQ ACCORDION */}
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-semibold mb-3">FAQ</h5>

                <div className="accordion" id="termsFaq">

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#tfaq1"
                      >
                        Can I reuse your content?
                      </button>
                    </h2>
                    <div id="tfaq1" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        No. All content is protected and cannot be copied without permission.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#tfaq2"
                      >
                        Are bookings refundable?
                      </button>
                    </h2>
                    <div id="tfaq2" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Refunds depend on the third-party provider’s policy.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#tfaq3"
                      >
                        How do I contact support?
                      </button>
                    </h2>
                    <div id="tfaq3" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Email us anytime at: support@traveloguepedia.example
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="container py-5"></div>

      <Footer/>
    </>
  )
}

export default terms
