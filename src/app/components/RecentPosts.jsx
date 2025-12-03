'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getRecentPostsApi } from "../services/allApi";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await getRecentPostsApi();
      console.log(response);

      setPosts(response?.data?.recent_packages || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

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
        <Link
          key={index}
          href={`/package/${post?.slug}`}  // ⭐ Your dynamic link here
          style={{ 
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            className="d-flex align-items-center mb-3"
            style={{ cursor: "pointer" }}
          >
            <img
              src={post.thumbnail}
              alt={post.package_title}
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
                {post.package_title}
              </p>

              <p
                className="mb-0 text-muted"
                style={{ fontSize: "13px", display: "flex", alignItems: "center" }}
              >
                <i
                  className="fa-regular fa-calendar-days me-2"
                  style={{ color: "#ffa500" }}
                ></i>
                {post.departuredates[0]?.month}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentPosts;
