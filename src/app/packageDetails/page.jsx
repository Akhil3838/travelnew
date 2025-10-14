'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'
import StickyHeader from '../components/StickyHeader'

function Page() {
  const [activeTab, setActiveTab] = useState('info')

  return (
    <>
    <StickyHeader/>
    <div style={{backgroundColor:'#f3f3f3ff'}}>

      {/* Header */}
      <header className="main-header bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link href={'/'} style={{ textDecoration: 'none' }}>
            <div className="logo-container d-flex align-items-center">
              <span className="logo-icon fs-3">✈️</span>
              <span className="logo-text text-dark fw-bold ms-2 fs-5"> Travelogue Pedia</span>
            </div>
          </Link>

          <nav className="main-nav d-none d-md-flex gap-4">
            <a href="#" className="nav-link fw-semibold">About Us</a>
            <a href="#" className="nav-link fw-semibold">Contact Us</a>
            <a href="#" className="nav-link fw-semibold">Blog</a>
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

      {/* Main Content */}
          <div className="container my-5">
            {/* Tabs */}
            <div className="tab-buttons d-flex flex-wrap gap-2 mb-4">
              <button
                className={`btn ${activeTab === 'info' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setActiveTab('info')}
              >
                <i className="bi bi-info-circle me-1"></i> Information
              </button>
              <button
                className={`btn ${activeTab === 'plan' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setActiveTab('plan')}
              >
                <i className="bi bi-calendar-check me-1"></i> Travel Plan
              </button>
              <button
                className={`btn ${activeTab === 'gallery' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setActiveTab('gallery')}
              >
                <i className="bi bi-images me-1"></i> Tour Gallery
              </button>
              <button
                className={`btn ${activeTab === 'location' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setActiveTab('location')}
              >
                <i className="bi bi-geo-alt me-1"></i> Location
              </button>
            </div>
    
            {/* Information Tab */}
            {activeTab === 'info' && (
              <div className="fade-in">
                <h4 className="fw-bold text-success">Kashmir</h4>
                <p className="text-muted">
                  Kashmir, also referred to as “Paradise on Earth,” is an enchanting region that boasts picturesque landscapes,
                  pristine lakes, lush green valleys, and vibrant gardens, making it a perfect destination for nature lovers,
                  adventure enthusiasts, and peace seekers alike.
                </p>
    
                <table className="table table-bordered info-table">
                  <tbody>
                    <tr>
                      <th>Destination</th>
                      <td>Gulmarg, Pahalgam, Srinagar, Dal Lake</td>
                    </tr>
                    <tr>
                      <th>Departure</th>
                      <td>Yes Required</td>
                    </tr>
                    <tr>
                      <th>Duration</th>
                      <td>3 Nights / 4 Days</td>
                    </tr>
                    <tr>
                      <th>Included</th>
                      <td>
                        <ul>
                          <li>Pick-up and drop-off from Airport</li>
                          <li>3-star accommodation with breakfast</li>
                          <li>Guided sightseeing tours</li>
                          <li>One night stay in a houseboat</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>Excluded</th>
                      <td>✖ Flight Charges</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
    
            {/* Travel Plan Tab */}
{activeTab === 'plan' && (
  <div className="fade-in">
    <h4 className="fw-bold text-success mb-4">Travel Plan - 4 Days</h4>
    
    <div className="modern-timeline">
      {[
        {
          day: 'Day 1',
          title: 'Arrival in Srinagar',
          description: 'Meet our representative at the airport and transfer to the hotel. Visit Dal Lake and enjoy a Shikara ride.',
          icon: 'bi bi-airplane-engines'
        },
        {
          day: 'Day 2',
          title: 'Srinagar to Gulmarg',
          description: 'Drive to Gulmarg, enjoy the scenic beauty and cable car ride (Gondola). Return to Srinagar by evening.',
          icon: 'bi bi-mountain'
        },
        {
          day: 'Day 3',
          title: 'Srinagar to Pahalgam',
          description: 'Visit saffron fields and Awantipura ruins en route to Pahalgam. Explore the Lidder River and Betaab Valley.',
          icon: 'bi bi-tree'
        },
        {
          day: 'Day 4',
          title: 'Departure',
          description: 'Check out from hotel and transfer to the airport with sweet memories of Kashmir.',
          icon: 'bi bi-suitcase2'
        }
      ].map((item, i) => (
        <div key={i} className="modern-timeline-item shadow-sm rounded-4 p-4 mb-4 bg-white position-relative">
          <div className="timeline-icon bg-orange text-white rounded-circle d-flex align-items-center justify-content-center">
            <i className={`${item.icon} fs-4`}></i>
          </div>
          <div className="timeline-content ps-4">
            <h6 className="text-uppercase text-orange fw-bold">{item.day}</h6>
            <h5 className="fw-semibold mb-2">{item.title}</h5>
            <p className="text-muted mb-0">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
    
            {/* Tour Gallery Tab */}
            {activeTab === 'gallery' && (
              <div className="fade-in">
                <h4 className="fw-bold text-success mb-3">Tour Gallery</h4>
                <div className="row g-3">
                  {['https://media.cnn.com/api/v1/images/stellar/prod/220407230731-india-kashmir-tourism-boost.jpg?c=original', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/a8/bb/eb/kashmir.jpg?w=400&h=400&s=1', 'https://lp-cms-production.imgix.net/2019-06/384e10f39ebc6fab9b991467541ce8ed-dal-lake.jpg?auto=format,compress&q=72&w=1095&fit=crop&crop=faces,edges', 'https://world.time.com/wp-content/uploads/sites/17/2012/07/600_int_kashmir_0711.jpg?w=600'].map((img, i) => (
                    <div className="col-6 col-md-3" key={i}>
                      <div className="gallery-card shadow-sm rounded overflow-hidden">
                        <img
                          src={`${img}`}
                          alt="Kashmir Tour"
                          className="img-fluid gallery-img"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
    
            {/* Location Tab */}
            {activeTab === 'location' && (
              <div className="fade-in">
                <h4 className="fw-bold text-success mb-3">Location</h4>
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507951.255566565!2d74.6337!3d34.0837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f2cb27c8b41%3A0x6d7f3c13e8ce64b3!2sSrinagar!5e0!3m2!1sen!2sin!4v1707843459312!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
    
          <div style={{paddingTop:'150px'}}></div>
    
    
</div>      <Footer />
    </>
  )
}

export default Page
