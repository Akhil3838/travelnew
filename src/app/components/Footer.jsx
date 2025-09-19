'use client'
import React, {  useEffect, useState } from 'react'
import { socialLinksApi } from '../services/allApi'
import Link from 'next/link'

function Footer() {
        const[Links,setLinks]=useState([])

    const socialLinks=async () =>{
        const res=await socialLinksApi()
            setLinks(res?.data.data)
        
        console.log(res);
        
    }
    useEffect(() => {
        socialLinks()
    },[])
  return (
    <>
            <footer className="bg-dark text-white pt-5 pb-4">
           <div className="header-bottom-line my-5" style={{ height: '2px', background: 'white', opacity: 0.1 }}></div>
    
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <span className="logo-icon fs-3 me-2">✈️</span>
              <span className="logo-text fs-4 fw-bold">GoWonder</span>
            </div>
            <p className=" mb-4">
             {Links[11]?.value}
            </p>
            <div className="social-icons d-flex gap-3">
              <a href={`${Links[1]?.value}`} className="text-white fs-5"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white fs-5"> <i className="fab fa-youtube"></i></a>
              <a href={`${Links[0]?.value}`} className="text-white fs-5"><i className="fab fa-instagram"></i></a>
              {/* <a href="#" className="text-white fs-5"><i className="fab fa-linkedin-in"></i></a> */}
              {/* <a href="#" className="text-white fs-5"><i className="fab fa-pinterest-p"></i></a> */}
            </div>
          </div>
    
          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Explore</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/packages" className=" text-decoration-none text-light">Destinations</a></li>
              <li className="mb-2"><a href="/packages" className=" text-decoration-none text-light">Tour Packages</a></li>
              <li className="mb-2"><a href="/packages" className=" text-decoration-none text-light">Flight Deals</a></li>
              <li className="mb-2"><a href="/packages" className=" text-decoration-none text-light">Hotel Stays</a></li>
              <li className="mb-2"><a href="/packages" className=" text-decoration-none text-light">Travel Guides</a></li>
            </ul>
          </div>
    
          {/* Support */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Help Center</a></li>
              <li className="mb-2"><a href="#" className=" text-decoration-none text-white">FAQs</a></li>
              <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Contact Us</a></li>
            </ul>
          </div>
    
          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-4">Contact Us</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-3 d-flex align-items-start">
                <i className="fas fa-map-marker-alt me-3 mt-1"></i>
                <span>{Links[9]?.value}</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-phone-alt me-3"></i>
                <span>{Links[10]?.value}</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-envelope me-3"></i>
                <span className='text-white'>{Links[2]?.value}</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="newsletter mt-4">
              <h6 className="fw-bold mb-3">Subscribe to our newsletter</h6>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control bg-black border-dark text-white" 
                  placeholder="Your email" 
                  aria-label="Your email"
                />
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
    
        {/* Copyright */}
        <div className="row mt-5">
          <div className="col-12">
            <hr className="border-secondary"/>
            <div className="d-md-flex justify-content-between text-center text-md-start">
              <p className=" mb-0">© {new Date().getFullYear()} GoWonder. All rights reserved.</p>
              <div className="payment-methods mt-3 mt-md-0">
                <i className="fab fa-cc-visa fs-4 me-2"></i>
                <i className="fab fa-cc-mastercard fs-4 me-2"></i>
                <i className="fab fa-cc-paypal fs-4 me-2"></i>
                <i className="fab fa-cc-amex fs-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer