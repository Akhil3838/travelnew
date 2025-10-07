import React from "react";

function Gallery() {
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
            <img src="https://images.unsplash.com/photo-1571497569639-7bd0fcd36c64?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D" alt="Himalaya" style={{ height: "330px" }}/>
          </div>

          <div className="column">
            <img src="https://img.delicious.com.au/WIXeICQZ/del/2018/12/istanbul-turkey-97382-2.jpg" alt="Monastery" style={{ height: "330px" }} />
            <img src="https://media.istockphoto.com/id/1086145112/photo/young-solo-traveler-woman-in-singapore-street-market-checking-the-map.jpg?s=612x612&w=0&k=20&c=4b4m5BMZg8B2LjaMLsM3G5M1XWe9XTCHwaadEiBLTwM=" alt="Desert" style={{ height: "156px" }} />
          </div>

          <div className="column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0JgydlIxpqAI1sMkapfFCHsohn7AUyAVlg&s" alt="Snow Cabin" style={{ height: "156px" }} />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzNzkU1arhu64C1JWFQ19UbFxfTHBu7zuFw&s" alt="Houseboat"   style={{ height: "330px" }} />
          </div>
           <div className="column">
            <img src="https://img.freepik.com/free-photo/man-standing-rock-near-lake_410324-106.jpg?semt=ais_hybrid&w=740&q=80" alt="Himalaya" style={{ height: "330px" }}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
