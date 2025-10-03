'use client'
 import React, { useEffect, useState } from 'react'
  import { socialLinksApi } from '../services/allApi' 
  import Link from 'next/link'
   function Footer() { 
    const[Links,setLinks]=useState([])
     const socialLinks=async () =>{
       const res=await socialLinksApi()
        setLinks(res?.data.data)
         console.log(res); }
          useEffect(() => { socialLinks() },[])


  return (
    <>
      {/* Top Contact Info Bar */}

      {/* Main Footer */}
      <footer className=" text-white pt-5 pb-4 position-relative" style={{ backgroundImage: "url(https://img.freepik.com/free-vector/abstract-modern-dark-black-background-design-with-stripes-lines_84443-2801.jpg)", backgroundSize: "cover" }}>
                  <div className="footer-top pb-3 text-white position-absolute top-0 start-50 translate-middle">
        <div className="containe">
          <div className="row text-center text-md-start">
            <div className="col-md-4 mb-3 bg-warning">
              <div className="p-3 bg-warning text-dark rounded">
                <i className="fas fa-map-marker-alt me-2"></i>
                <strong>Our Address</strong>
                <p className="mb-0 small">RK TRAVELS Near Sri.Shradha Peetham Subhash Street, SRINGERI - 577139</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 bg-dark">
              <div className="p-3 bg-dark rounded">
                <i className="fas fa-envelope me-2 text-warning"></i>
                <strong>Email Address</strong>
                <p className="mb-0 small">gowonder@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4 mb-3  bg-warning">
              <div className="p-3 bg-warning text-dark rounded">
                <i className="fas fa-phone-alt me-2"></i>
                <strong>Phone Number</strong>
                <p className="mb-0 small">+91790771237</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="container pt-md-5 jst">
          <div className="row g-4">
            {/* About Company */}
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-3">ABOUT COMPANY</h5>
              <p>
                Discover the world with GoWonder. We create unforgettable travel experiences tailored just for you
              </p>
              <p className="small ">
                <strong>We Are Available:</strong><br/>
                Mon - Sun: 07:00 am to 9:00 pm
              </p>

              <div className="d-flex pt-2">
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold mb-3">QUICK LINKS</h5>
              <ul className="list-unstyled">
                <li className='mb-2' ><a href="#" className="text-decoration-none text-white ">  → Home</a></li>
                <li className='mb-2'><a href="#" className="text-decoration-none text-white ">  → Temple Tour</a></li>
                <li className='mb-2'><a href="#" className="text-decoration-none text-white ">  → Services</a></li>
                <li className='mb-2'><a href="#" className="text-decoration-none text-white ">  → FAQ</a></li>
                <li className='mb-2'><a href="#" className="text-decoration-none text-white ">  → About Us</a></li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-3">RECENT POSTS</h5>
              <div className="d-flex mb-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAjPXJa5LD3IhnOKG_rA2HTZzYUUZLmHTSw&s" alt="post" width="60" className="me-3 rounded"/>
                <div>
                  <small className="text-light">07 Oct, 2023</small>
                  <p className="mb-0">Exploring The Mystical Temples Of Sringeri</p>
                </div>
              </div>
                            <div className="d-flex mb-3">
                <img src="https://s7ap1.scene7.com/is/image/incredibleindia/1-shivanasamudra-falls-mysuru-karnataka-blog-ntr-hero?qlt=82&ts=1742169746720" alt="post" width="60" className="me-3 rounded"/>
                <div>
                  <small className="text-light">07 Oct, 2023</small>
                  <p className="mb-0">Exploring The Mystical Temples Of Sringeri</p>
                </div>
              </div>

            </div>

            {/* Request Call Back */}
            <div className="col-lg-4 col-md-6">
              <h5 className="fw-bold mb-3">REQUEST A CALL BACK</h5>
              <p>Want to chat? Arrange a callback for prompt assistance.</p>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter Your Contact Details" />
              </div>
                              <button className="btn btn-warning w-100 mt-2">Send Message</button>

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
        <a href="https://wa.me/91790771237" target="_blank" 
           className="btn btn-success rounded-circle position-fixed" 
           style={{ bottom: '20px', right: '20px' }}>
          <i className="fab fa-whatsapp fs-4"></i>
        </a>
        
      </footer>
    </>
  )
}

export default Footer
