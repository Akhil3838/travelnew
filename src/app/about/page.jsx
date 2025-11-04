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

      {/* Offcanvas Menu (keep this outside the video section) */}
      {/* Offcanvas Menu (keep this outside the video section) */}
<div
  className="offcanvas offcanvas-end bg-white text-dark"
  tabIndex="-1"
  id="mobileMenu"
  aria-labelledby="mobileMenuLabel"
>
  {/* <!-- Header --> */}
  <div className="offcanvas-header border-bottom border-secondary">
    <Link href={'/'} style={{textDecoration:'none'}}>
      <div className="d-flex align-items-center">
        <span className="fs-4 me-2">✈️</span>
        <span className="fw-bold fs-5 text-dark">Travelogue Pedia</span>
      </div>
    </Link>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>

  {/* <!-- Menu Items --> */}
<div className="offcanvas-body d-flex flex-column pt-3">
  <div className="d-flex flex-column gap-2">
    {/* Destinations */}
    <a href="/about" className="nav-link p-3 rounded hover-item">
      <div className="d-flex align-items-center gap-3">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-dark" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        </svg> */}
        <span className="fw-medium text-dark">About</span>
      </div>
    </a>

        {/* Deals */}
    <a href="/blogs" className="nav-link p-3 rounded hover-item">
      <div className="d-flex align-items-center gap-3">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-dark" viewBox="0 0 16 16">
          <path d="M13.442 2.558a1.5 1.5 0 0 0-2.121 0L1.5 12.379V15h2.621l9.821-9.821a1.5 
          1.5 0 0 0 0-2.121zM12 6l-1-1 1-1 1 1-1 1z"/>
        </svg> */}
        <span className="fw-medium text-dark">Blogs</span>
      </div>
    </a>



    {/* Experiences */}
    <a href="/contactus" className="nav-link p-3 rounded hover-item">
      <div className="d-flex align-items-center gap-3">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-dark" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l3.39-1.787 3.389 1.787c.386.198.824-.149.746-.592l-.647-3.73 
          2.713-2.64c.33-.319.158-.888-.282-.95l-3.762-.546L8.465.792a.513.513 0 
          0 0-.927 0L5.354 6.034l-3.762.547c-.44.062-.612.63-.283.949l2.713 
          2.64-.647 3.73z"/>
        </svg> */}
        <span className="fw-medium text-dark">Contact Us</span>
      </div>
    </a>

  </div>

  {/* Auth Section */}
  <div className="mt-2">
    <button
      className="btn w-100 py-3 fw-bold rounded-pill"
      style={{
        background: "rgba(204, 130, 32, 1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(79, 172, 254, 0.3)",
        color: "#050506ff",
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "rgba(166, 181, 195, 0.25)";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(79, 172, 254, 0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "rgba(79, 172, 254, 0.15)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Sign In
    </button>
    <p className="text-center mt-3 mb-0 text-dark">
      Don’t have an account? 
      <a href="#" className="text-decoration-none ms-1" style={{ color: "#4facfe" }}>Sign up</a>
    </p>
  </div>
</div>
</div>

      {/* Intro Ribbon */}
      <section className="gradient-ribbon text-white">
        <div className="container py-4 text-center">
          <div className="section-kicker text-uppercase small fw-semibold opacity-75">About Us</div>
          <h1 className="h2 fw-bold mb-2">Travelogue Pedia</h1>
          <p className="mb-0">Curating meaningful travel with safety, local expertise, and unforgettable moments.</p>
        </div>
      </section>
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
            <ul className="list-unstyled d-grid gap-2 mt-3">
              {[ 
                'Licensed guides and verified partners',
                'Flexible itineraries for every comfort level',
                'Transparent pricing and dependable support',
              ].map((item, i) => (
                <li key={i} className="d-flex align-items-center">
                  <span className="badge bg-success-subtle text-success border me-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <div className="row g-3">
              <div className="col-7">
                <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Mountain trail" className="img-fluid rounded shadow-sm" style={{height: 339, objectFit: 'cover', width: '100%'}} />
              </div>
              <div className="col-5 d-flex flex-column gap-3">
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" alt="Guided group" className="img-fluid rounded shadow-sm" style={{height: 163, objectFit: 'cover', width: '100%'}} />
                <img src="https://media.istockphoto.com/id/2147497907/photo/young-woman-traveler-relaxing-and-enjoying-the-tropical-sea-while-traveling-for-summer.jpg?s=612x612&w=0&k=20&c=iY2aqFsXX9Hzq_KwAZhy3ug74z0y7KHxUc_msPHyKzU=" alt="Scenic view" className="img-fluid rounded shadow-sm" style={{height: 163, objectFit: 'cover', width: '100%'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="services-section py-5 bg-light" >
        <div className="container">
          <h2 className="text-center fw-bold mb-5 section-title">What We Do</h2>
          <div className="row g-4">
            {[
              { icon: 'bi-signpost-split', title: 'Adventure Treks', text: 'Expertly guided hiking experiences through breathtaking landscapes with our local guides.' },
              { icon: 'bi-bus-front', title: 'Scenic Bus Tours', text: 'Comfortable, well-planned journeys that let you relax while we show you the sights.' },
              { icon: 'bi-suitcase-lg', title: 'Curated Packages', text: 'Tailored experiences combining adventure, culture, and relaxation for your perfect getaway.' },
            ].map((s, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm p-4 text-center service-card">
                  <div className="service-icon mb-3 fs-1 text-primary">
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-text">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Scoped styles for this page */}
      <style jsx>{`
        .gradient-ribbon {
          background: linear-gradient(90deg, #101b2bff 0%, #101b2bff 100%);
        }
        .section-kicker { letter-spacing: .08em; }
        .service-card { transition: transform .2s ease, box-shadow .2s ease; }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 .75rem 1.5rem rgba(0,0,0,.08); }
        .value-card { border: 1px solid rgba(0,0,0,0.06); border-radius: .75rem; background: #fff; }
      `}</style>

      <div style={{paddingTop:'150px'}}></div>

      <Footer/>

      </>
       );
}