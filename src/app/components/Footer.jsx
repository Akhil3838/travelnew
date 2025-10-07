'use client'
import React, { useEffect, useState } from 'react'
import { socialLinksApi } from '../services/allApi'
import Link from 'next/link'

function Footer() {
  const [Links, setLinks] = useState([])

  const socialLinks = async () => {
    const res = await socialLinksApi()
    setLinks(res?.data.data || [])
  }

  useEffect(() => {
    socialLinks()
  }, [])

  // Helper function to get value by label
  const getValue = (label) => {
    const item = Links.find(link => link.label === label)
    return item ? item.value : ''
  }

  // Extract values
  const instagram = getValue('INSTAGRAM_URL') || '#'
  const facebook = getValue('FACEBOOK_URL') || '#'
  const email = getValue('CONTACT_US_EMAIL') || 'example@email.com'
  const phone = getValue('phone') || '+91 0000000000'
  const address = getValue('Address') || 'Your company address'
  const desc = getValue('Footer_Description') || 'Discover the world with GoWonder.'
  const firstColor = getValue('FOOTER_SECTION_FIRST_COLOR') || '#F9F1DE'
  const secondColor = getValue('FOOTER_SECTION_SECOND_COLOR') || '#FCF6EA'
  const thirdColor = getValue('FOOTER_SECTION_THIRD_COLOR') || '#F2ECE0'
  const headerColor = getValue('HEADER_TOP_COLOR') || '#032243'
  const bodyColor = getValue('PAGES_BODY_COLOR') || '#FAF9F5'

  return (
    <>
      <footer
        className="text-white pt-5 pb-4 position-relative"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/abstract-modern-dark-black-background-design-with-stripes-lines_84443-2801.jpg)",
          backgroundSize: "cover"
        }}
      >

        {/* Top Info Section */}
                         <div className="footer-top pb-3 text-white position-absolute top-0 start-50 translate-middle">
        <div className="containe">
          <div className="row text-center text-md-start">
            <div className="col-md-4 mb-3"  style={{ backgroundColor: 'orange' }}>
              <div className="p-3  text-dark rounded">
                <i className="fas fa-map-marker-alt me-2"></i>
                <strong>Our Address</strong>
                <p className="mb-0 small">{address}
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3 bg-dark">
              <div className="p-3 bg-dark rounded">
                <i className="fas fa-envelope me-2" style={{ color: 'orange' }}></i>
                <strong>Email Address</strong>
                <p className="mb-0 small">{email}</p>
              </div>
            </div>
            <div className="col-md-4 mb-3"  style={{ backgroundColor: 'orange' }}>
              <div className="p-3  text-dark rounded">
                <i className="fas fa-mobile-alt me-2"></i>
                <strong>Phone Number</strong>
                <p className="mb-0 small">{phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>


        {/* Main Footer */}
        <div className="container pt-md-5 jst">
          <div className="row g-4">
            {/* About Company */}
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-3">ABOUT COMPANY</h5>
              <p>{desc}</p>
              <p className="small">
                <strong>We Are Available:</strong><br />
                Mon - Sun: 07:00 am to 9:00 pm
              </p>

              <div className="d-flex pt-2">
                <a href={facebook} target="_blank" className="btn btn-outline-light btn-floating m-1">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={instagram} target="_blank" className="btn btn-outline-light btn-floating m-1">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold mb-3">QUICK LINKS</h5>
              <ul className="list-unstyled">
                <li className='mb-2'><a href="#" className="text-decoration-none text-white">→ Home</a></li>
                <li className='mb-2'><a href="#" className="text-decoration-none text-white">→ Temple Tour</a></li>
                <li className='mb-2'><a href="#" className="text-decoration-none text-white">→ Services</a></li>
                <li className='mb-2'><a href="#" className="text-decoration-none text-white">→ FAQ</a></li>
                <li className='mb-2'><a href="#" className="text-decoration-none text-white">→ About Us</a></li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-3">RECENT POSTS</h5>
              <div className="d-flex mb-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAjPXJa5LD3IhnOKG_rA2HTZzYUUZLmHTSw&s" alt="post" width="60" className="me-3 rounded" />
                <div>
                  <small className="text-light">07 Oct, 2023</small>
                  <p className="mb-0">Exploring The Mystical Temples Of Sringeri</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <img src="https://s7ap1.scene7.com/is/image/incredibleindia/1-shivanasamudra-falls-mysuru-karnataka-blog-ntr-hero?qlt=82&ts=1742169746720" alt="post" width="60" className="me-3 rounded" />
                <div>
                  <small className="text-light">07 Oct, 2023</small>
                  <p className="mb-0">Exploring The Mystical Temples Of Sringeri</p>
                </div>
              </div>
            </div>

            {/* Request Callback */}
            <div className="col-lg-4 col-md-6">
              <h5 className="fw-bold mb-3">REQUEST A CALL BACK</h5>
              <p>Want to chat? Arrange a callback for prompt assistance.</p>
              <div className="input-group">
                <input type="number" className="form-control" placeholder="Enter Your Contact Details"
                  onInput={(e) => {
        // Allow only 10 digits
        if (e.target.value.length > 10) {
          e.target.value = e.target.value.slice(0, 10);
        }
      }} />
              </div>
              <button className="btn  w-100 mt-2"  style={{ backgroundColor: 'orange' }}>Send Message</button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="row mt-5">
            <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center">
              <p className="mb-0">© 2023 All Rights Reserved.</p>
              <div className="footer-links mt-3 mt-md-0">
                <a href="#" className="text-white me-3" style={{ textDecoration: 'none' }}>Terms</a>
                <a href="#" className="text-white me-3" style={{ textDecoration: 'none' }}>Privacy Policy</a>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Contact</a>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <a href={`https://wa.me/${phone}`} target="_blank"
          className="btn btn-success rounded-circle position-fixed"
          style={{ bottom: '20px', right: '20px' }}>
          <i className="fab fa-whatsapp fs-4"></i>
        </a>

      </footer>
    </>
  )
}

export default Footer
