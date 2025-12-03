'use client'

import Link from "next/link";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <>
    <Header/>
    <StickyHeader/>




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