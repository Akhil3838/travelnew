'use client'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function faq() {
  return (
    <>
      <Header/>

      <div className="container py-5">

        {/* HERO BANNER */}
        <div
          className="text-white p-5 rounded mb-5 shadow"
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
          <h1 className="fw-bold">Frequently Asked Questions</h1>
          <p className="mt-2 mb-0">
            Find answers to the most common questions about Travelogue Pedia.
          </p>
        </div>

        <div className="row g-4">

          {/* LEFT: MAIN FAQ */}
          <div className="col-lg-8">

            <div className="card shadow-sm border-0">
              <div className="card-body p-4">

                <h3 className="fw-semibold mb-4">General Questions</h3>

                <div className="accordion" id="faqAccordion">

                  {/* FAQ 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                      >
                        What is Travelogue Pedia?
                      </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Travelogue Pedia is a travel guide and information platform
                        offering destination insights, tips, recommendations, and
                        travel planning support.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                      >
                        Is Travelogue Pedia free to use?
                      </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Yes! Access to all travel guides, FAQs, and resources is
                        completely free.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                      >
                        Do you offer travel booking?
                      </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        We provide travel information and recommendations.
                        Bookings may redirect to trusted third-party travel partners.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                      >
                        How can I plan a trip using your platform?
                      </button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Browse destinations, read guides, check travel tips, and
                        explore our curated itineraries. You can also contact support
                        for personalized help.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                      >
                        How do I contact customer support?
                      </button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        You can email us at <strong>support@traveloguepedia.example</strong>.
                        We respond within 24–48 hours.
                      </div>
                    </div>
                  </div>

                </div>

                {/* OTHER SECTION */}
                <h3 className="fw-semibold mt-5 mb-3">Account & Technical</h3>

                <div className="accordion" id="faqAccount">

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq6"
                      >
                        Do I need an account to use the website?
                      </button>
                    </h2>
                    <div id="faq6" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        No, most features are accessible without an account.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq7"
                      >
                        What if the website is not loading properly?
                      </button>
                    </h2>
                    <div id="faq7" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Try clearing your browser cache, refreshing the page,
                        or opening it in another browser.
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">

            {/* POPULAR TOPICS */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body">
                <h5 className="fw-semibold mb-3">Popular Topics</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">🌍 Travel Destination Guides</li>
                  <li className="mb-2">✈️ Flight & Hotel Tips</li>
                  <li className="mb-2">🧳 Travel Packing Checklist</li>
                  <li className="mb-2">💳 Payment & Booking Help</li>
                </ul>
              </div>
            </div>

            {/* CONTACT SUPPORT */}
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-semibold mb-3">Need More Help?</h5>
                <p>
                  If your question isn’t listed here, feel free to reach out to our
                  support team for assistance.
                </p>
                <a href="/contactus" className="btn btn-primary w-100">
                  Contact Support
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="py-5"></div>
      <Footer/>
    </>
  )
}

export default faq
