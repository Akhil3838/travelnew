'use client'
import React from "react";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
<>
<Header/>
<StickyHeader/>
        <div className="container py-5">
          {/* Header */}
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
      <h1 className="fw-bold">Privacy Policy</h1>
      <p className="mt-2 mb-0">
        Travelogue Pedia values your privacy. Learn how we collect and use
        your information.
      </p>
    </div>
    
    
          {/* Main Layout */}
          <div className="row g-4">
            {/* Left Section */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h2 className="h4 fw-semibold">Summary</h2>
                  <p className="mt-3">
                    This policy explains how Travelogue Pedia collects personal
                    information, how we use it, and your rights.
                  </p>
    
                  {/* Information We Collect */}
                  <h4 className="h5 mt-4">Information We Collect</h4>
                  <ul>
                    <li>Basic account information (name, email)</li>
                    <li>Content you create (reviews, posts)</li>
                    <li>Analytics & device data</li>
                  </ul>
    
                  {/* Usage */}
                  <h4 className="h5 mt-4">How We Use Information</h4>
                  <p>
                    To improve services, provide personalization, communicate
                    updates, and ensure security.
                  </p>
    
                  {/* Third Parties */}
                  <h4 className="h5 mt-4">Third-Party Sharing</h4>
                  <p>
                    We share limited data with trusted providers like analytics and
                    payment processors. We do <strong>not</strong> sell your personal data.
                  </p>
    
                  {/* Rights */}
                  <h4 className="h5 mt-4">Your Rights</h4>
                  <p>
                    You can request access, correction, or deletion of your data by
                    emailing us at: <strong>support@traveloguepedia.com</strong>
                  </p>
    
                  {/* Buttons */}
                  {/* <div className="mt-4 d-flex gap-2 flex-wrap">
                    <button className="btn btn-primary px-4">Download PDF</button>
                    <button className="btn btn-outline-secondary px-4">
                      Contact Support
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
    
            {/* Right Sidebar */}
            <div className="col-lg-4">
              {/* Quick Facts */}
              <div className="card shadow-sm mb-4 border-0">
                <div className="card-body">
                  <h5 className="fw-semibold mb-3">Quick Facts</h5>
                  <p className="mb-1"><strong>Data Controller:</strong> Travelogue Pedia</p>
                  <p className="mb-1"><strong>Email:</strong> support@traveloguepedia.com</p>
                  {/* <p className="mb-0"><strong>Effective Date:</strong> Dec 3, 2025</p> */}
                </div>
              </div>
    
              {/* FAQ */}
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-semibold mb-3">FAQ</h5>
    
                  <div className="accordion" id="privacyFaq">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqOne"
                        >
                          What information do we collect?
                        </button>
                      </h2>
                      <div id="faqOne" className="accordion-collapse collapse">
                        <div className="accordion-body">
                          We collect account details, device information, and
                          content you submit.
                        </div>
                      </div>
                    </div>
    
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqTwo"
                        >
                          How do we use your info?
                        </button>
                      </h2>
                      <div id="faqTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                          We use it for service improvement, personalization, and
                          platform safety.
                        </div>
                      </div>
                    </div>
    
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqThree"
                        >
                          Do we share data?
                        </button>
                      </h2>
                      <div id="faqThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                          Only with trusted third parties like analytics providers.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Footer */}
          <p className="text-center text-muted mt-4">
            Last updated: Dec 3, 2025 • Travelogue Pedia
          </p>
        </div>

        <Footer />
    
</>  );
}