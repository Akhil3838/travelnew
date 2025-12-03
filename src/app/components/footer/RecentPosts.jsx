"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getRecentPostsApi } from "@/app/services/allApi";

function RecentPosts() {
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

  return (
    <>
      <div className="col-lg-3 col-md-6">
        <h5 className="fw-bold mb-3 text-light">RECENT POSTS</h5>

        {posts.length === 0 && (
          <p className="text-light small">No recent posts available</p>
        )}

        {posts.map((post) => (
          <Link
            href={`/package/${post.slug}`}
            key={post.id}
            className="text-decoration-none text-light"
          >
            <div className="d-flex mb-3">
              <img
                src={post.thumbnail}
                alt={post.package_title}
                width="60"
                height="60"
                className="me-3 rounded"
                style={{ objectFit: "cover" }}
              />

              <div>
                {/* Date */}
                <small className="text-light">
                  {new Date(post.updated_at).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </small>

                {/* Title */}
                <p className="mb-0 text-light" style={{ fontSize: "14px" }}>
                  {post.package_title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default RecentPosts;
