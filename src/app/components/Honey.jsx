'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getHonymoonPkgApi } from '../services/allApi'
import Link from 'next/link'

function Honey() {
  const [honeymoonPackages, setHoneymoonPackages] = useState([])
  const [activeMonth, setActiveMonth] = useState("Jan")
  const [reqbody,setReqbody] = useState({
    month:activeMonth
  })

  // ✅ Fetch honeymoon packages based on month
  const fetchHoneymoonPackages = async (month) => {
    try {
       // ✅ Create FormData and append the selected month
      const formData = new FormData();
      formData.append("month", month.toLowerCase()); // send as lowercase if backend expects it
      
      const result = await getHonymoonPkgApi(formData) // send month as lowercase
      console.log(result);
      
      setHoneymoonPackages(result?.data?.honeymoon_packages || [])
    } catch (error) {
      console.error('Error fetching packages:', error)
    }
  }

  useEffect(() => {
    fetchHoneymoonPackages(activeMonth)
  }, [activeMonth])

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]

  return (
    <div className="container pb-5">
      {/* Month Tabs */}
      <div className="month-tabs mb-4 overflow-auto">
        {months.map((month) => (
          <a
            key={month}
            href="#"
            className={activeMonth === month ? "active" : ""}
            onClick={(e) => {
              e.preventDefault()
              setActiveMonth(month)
            }}
          >
            {month}
          </a>
        ))}
      </div>

      {/* Destinations with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMonth}
          className="row g-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* ✅ Show API data */}
          {honeymoonPackages.length > 0 ? (
            honeymoonPackages.map((pkg, idx) => (
              <div className="col-md-3" key={idx}>
                <motion.div
                  className="honey-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                 <Link href={`/package/${pkg.slug}`}>
                    <img
                      src={pkg.packimages?.[0]?.image}
                      alt={pkg.destination}
                    />
                 </Link>
                  <div className="honey-info">
                    <h5>{pkg.destination}</h5>
                    <p>Starting Price ₹{pkg.special_price || pkg.price}</p>
                  </div>
                </motion.div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="text-center text-muted">
                No destinations available for {activeMonth}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Honey
 