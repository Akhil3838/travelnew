'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function StickyHeader() {
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ✅ Page content always visible, only header conditionally renders */}
      {showHeader && (
        <header
          className="main-heade position-sticky w-100 top-0 start-0"
          style={{
            zIndex: 1050,
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(240, 233, 233, 0.22)',
            transform: 'translateY(0)',
            opacity: 1,
            transition: 'all 0.4s ease-in-out',
          }}
        >
          <div className="container d-flex justify-content-between align-items-center py-3">
           <Link href="/" style={{ textDecoration: "none" }}>
  <div className="d-flex align-items-center">
    <img
      src="/log.png"
      alt="Logo"
      style={{ width: "250px", height: "55px", objectFit: "contain" }}
    />
  </div>
</Link>

            <nav className="main-nav d-none d-md-flex gap-4">
              <a href="/about" className="nav-link text-dark">About Us</a>
            <a href="/contactus" className="nav-link text-dark">Contact Us</a>
            <a href="/blogs" className="nav-link text-dark">Blog</a>
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
      )}



    </>
  )
}

export default StickyHeader
