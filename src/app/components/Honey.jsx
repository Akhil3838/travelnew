'use client'
import React, { useState } from 'react'

function Honey() {
  // ✅ Data for each month
  const honeyData = {
    Jan: [
      { name: "Dubai", price: "25,300", img: "https://aaochalo.com/wp-content/uploads/2025/06/stopover-in-dubai_dubai-by-night.jpg" },
      { name: "Shimla", price: "22,950", img: "https://mediaim.expedia.com/destination/1/134beaf20a6cad7d8d144a2844549cc6.jpg" },
      { name: "Kashmir", price: "19,850", img: "https://www.pelago.com/img/products/IN-India/kashmir-paradise-on-earth-tour-06-night-07-days/cd44565d-3ce0-442c-836b-76efb3eb25ad_kashmir-paradise-on-earth-tour-06-night-07-days-xlarge.jpg" },
      { name: "Bali", price: "18,950", img: "https://www.shutterstock.com/image-photo/pura-ulun-danu-bratan-night-600nw-689858809.jpg" }
    ],
    Feb: [
      { name: "Maldives", price: "32,500", img: "https://media1.thrillophilia.com/filestore/x4hn9m7uhrm35dumwpzn5optp9zb_Maldives-Vertical-6.jpg?w=400&dpr=2" },
      { name: "Goa", price: "15,600", img: "https://imgmediagumlet.lbb.in/media/2022/12/6392d66eb869c97ea869e863_1670567534943.jpg" },
      { name: "Kerala", price: "20,200", img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fhow-to-reach-kerala-1714482038_cb60e0764814d4d36904.webp&w=1080&q=75" },
      { name: "Paris", price: "45,000", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/TourEiffelLC.JPG/250px-TourEiffelLC.JPG" }
    ],
    Mar: [
      { name: "Singapore", price: "28,300", img: "https://www.qatarairways.com/content/dam/images/renditions/vertical-hd/destinations/singapore/v-hd-singapore.jpg" },
      { name: "Darjeeling", price: "17,500", img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-the-land-of-the-thunderbolt-darjeeling-west-bengal-city-ff?qlt=82&ts=1726643758623" },
      { name: "Switzerland", price: "65,000", img: "https://www.safetravelskit.com/cdn/shop/articles/cover_blog_a1169bfe-7801-4ab9-9393-de6f195fbcba_820x1024.jpg?v=1707133212" },
      { name: "Andaman", price: "21,500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBdjEFdCo6eYGY_fkaZV0MQW_kYD0IAJ8JYveF5kM9Qo476sZYF7BWY3gjElZi-d9P30&usqp=CAU" }
    ]
  }

  const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const [activeMonth, setActiveMonth] = useState("Jan")

  return (
    <>
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

        {/* Destinations */}
        <div className="row g-4">
          {honeyData[activeMonth]?.map((place, idx) => (
            <div className="col-md-3" key={idx}>
              <div className="honey-card">
                <img src={place.img} alt={place.name} />
                <div className="honey-info">
                  <h5>{place.name}</h5>
                  <p>Starting Price {place.price}</p>
                </div>
              </div>
            </div>
          ))}

          {/* If month has no data */}
          {!honeyData[activeMonth] && (
            <div className="col-12">
              <p className="text-center text-muted">No destinations available for {activeMonth}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Honey
