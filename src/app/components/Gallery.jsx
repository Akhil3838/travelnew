'use client'
import React, {  useEffect, useState } from "react";
import { getGallery } from "../services/allApi";

function Gallery() {
  const [imagess, setImagess] = useState({});

  const fetchImages = async () => {
    try {
      const result = await getGallery();
      // console.log(data?.galleries.images);
      
      setImagess(result?.data.galleries[0]);

    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }
          console.log(imagess);

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <>
      {/* ---- Top Content Section ---- */}
      <section className="gallery-top">
        <div className="content boderder rounded-2">
          <h5 className="sub-title">Best Memorable Places</h5>
          <h2 className="main-title">
            Explore the most <br /> <span>beautiful place in India</span>
          </h2>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
            incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
          <button className="btn-trip">See Our Trips →</button>
        </div>
      </section>

      {/* ---- Bottom Image Gallery Section ---- */}
      <section className="gallery-bottom">
        <div className="gallery-images">
          <div className="column">
            <img src={imagess?.image4} alt="Himalaya" style={{ height: "330px" }}/>
          </div>

          <div className="column">
            <img src={imagess?.image3} alt="Monastery" style={{ height: "330px" }} />
            <img src={imagess.image5} alt="Desert" style={{ height: "156px" }} />
          </div>

          <div className="column">
            <img src={imagess?.image2} alt="Snow Cabin" style={{ height: "156px" }} />
            <img src={imagess?.image1} alt="Houseboat"   style={{ height: "330px" }} />
          </div>
           <div className="column">
            <img src={imagess?.image6} alt="Himalaya" style={{ height: "330px" }}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
