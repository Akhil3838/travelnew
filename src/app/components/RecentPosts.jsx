import React from "react";

const RecentPosts = () => {
  const posts = [
    {
      img: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Exploring The Green Spaces Of The Island Maldives",
      date: "22/6/2025",
    },
    {
      img: "https://media.istockphoto.com/id/1190683564/photo/kedarnath-dham-uttrakhand.jpg?s=612x612&w=0&k=20&c=HdKXKCHYSbbT_mpMWPKypMGeqWRfW-n8oizYCG_KKQU=",
      title: "Harmony With Nature Of Belgium Tour And Travle",
      date: "25/6/2025",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeC1vRBCcezKIcvFspoumknZDE8YCg1xmCvfYV1hDLeGVB4P-OwrPA8QTBkWqyN3F3qM&usqp=CAU",
      title: "Exploring The Green Spaces Of Realar Residence",
      date: "27/6/2025",
    },
    
  ];

  return (
    <div
      className="card border-0 shadow-sm rounded-4 mb-4"
      style={{ padding: "20px", backgroundColor: "#fff" }}
    >
      <h5
        className="fw-bold mb-4"
        style={{
          color: "#0b0a09ff",
          borderBottom: "1px solid #e0e0e0",
          paddingBottom: "10px",
          position: "relative",
        }}
      >
        Recent Posts
        <span
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            height: "3px",
            width: "40px",
            backgroundColor: "#ffa500",
          }}
        ></span>
      </h5>

      {posts.map((post, index) => (
        <div
          key={index}
          className="d-flex align-items-center mb-3"
          style={{ cursor: "pointer" }}
        >
          <img
            src={post.img}
            alt={post.title}
            className="rounded-3 me-3"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div>
            <p
              className="mb-1 fw-semibold"
              style={{
                fontSize: "14px",
                color: "#0d0b08ff",
                lineHeight: "1.3",
              }}
            >
              {post.title}
            </p>
            <p
              className="mb-0 text-muted"
              style={{ fontSize: "13px", display: "flex", alignItems: "center" }}
            >
              <i
                className="fa-regular fa-calendar-days me-2"
                style={{ color: "#ffa500" }}
              ></i>
              {post.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
