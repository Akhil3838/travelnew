'use client'

import Link from "next/link";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";

export default function AboutPage() {
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
 {/* <section className="hero-banner">
        <div className="dark-overlay"></div>
        <div className="container text-center text-white py-5">
          <h1 className="display-4 fw-bold mb-4">Our Travel Story</h1>
          <p className="lead">
            We don't just plan trips — we craft unforgettable adventures that connect you with the world’s beauty.
          </p>
        </div>
      </section> */}

      {/* Who We Are */}
      <section className="container py-5 my-4" >
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-4 section-title">Who We Are</h2>
            <p className="lead">
              We're passionate explorers, local guides, and travel experts dedicated to transformative journeys.
            </p>
            <p>
              Founded in 2010, our team combines deep local knowledge with a genuine love for adventure. We believe travel should enrich both the visitor and the visited, creating meaningful connections with people and places.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
              alt="Our team on a hike"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      {/* <section className="services-section py-5 bg-light" >
        <div className="container">
          <h2 className="text-center fw-bold mb-5 section-title">What We Do</h2>
          <div className="row g-4">
            {[
              { icon: 'bi-signpost-split', title: 'Adventure Treks', text: 'Expertly guided hiking experiences through breathtaking landscapes with our local guides.' },
              { icon: 'bi-bus-front', title: 'Scenic Bus Tours', text: 'Comfortable, well-planned journeys that let you relax while we show you the sights.' },
              { icon: 'bi-suitcase-lg', title: 'Curated Packages', text: 'Tailored experiences combining adventure, culture, and relaxation for your perfect getaway.' },
            ].map((s, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm p-4 text-center">
                  <div className="service-icon mb-3">
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-text">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Values */}
      <section className="container py-5 my-4 px-5  bg-light" >
        <h2 className="text-center fw-bold mb-5 section-title">Our Values</h2>
        <div className="row g-4">
          {[
            { icon: '🛡️', title: 'Safety First', text: 'Your well-being is our top priority on every adventure' },
            { icon: '🧭', title: 'Local Expertise', text: 'Authentic experiences guided by those who know best' },
            { icon: '🌱', title: 'Sustainable Travel', text: 'We protect and respect the places we visit' },
            { icon: '✨', title: 'Unforgettable Moments', text: 'Creating memories that will last a lifetime' },
          ].map((v, i) => (
            <div className="col-sm-6 col-lg-3" key={i}>
              <div className="value-card text-center p-4 h-100">
                <div className="value-icon mb-3">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{paddingTop:'150px'}}></div>

      <Footer/>

      </>
       );
}