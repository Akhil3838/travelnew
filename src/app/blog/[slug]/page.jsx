'use client';
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import StickyHeader from "@/app/components/StickyHeader";
import { getBlogDetails } from "@/app/services/allApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function BlogDetails() {

    const params = useParams();
    const { slug } = params;
  
   const [blogDetails, setBlogDetails] = useState(null);
   const [ relatedBlogs, setRelatedBlogs] = useState([]);
  const BlogDetails =async(slug)=>{
    const res= await getBlogDetails(slug)
    setBlogDetails(res?.data?.blog || null);
    setRelatedBlogs(res?.data?.related_blog || []);
    console.log(res);
    
  }

  
console.log(relatedBlogs);


 useEffect(() => {
    BlogDetails(slug);
  }, [slug]);

  return (
<>
<StickyHeader/>
<Header/>
      <div className="container py-5" style={{ maxWidth: "1200px" }}>
        <div className="row g-4">
  
          {/* ================= MAIN CONTENT ================= */}
          <div className="col-lg-8">
  
            {/* Hero Image */}
            <div className="rounded overflow-hidden shadow-sm">
              <img
                src={ blogDetails?.thumbnail}
                className="w-100"
                style={{ height: "380px", objectFit: "cover" }}
              />
            </div>
  
            {/* Date & Read time */}
             <div className="mt-3 text-muted small">
              {new Date(blogDetails?.blog_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })} 
            </div>
  
            {/* Title */}
            <h1 className="fw-bold mt-3" style={{ fontSize: "2.2rem" }}>
              {blogDetails?.title}
            </h1>
  
            <p className="text-secondary mb-4">
             {blogDetails?.small_description}
            </p>
  
            {/* Author */}
            <div className="d-flex align-items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop"
                className="rounded-circle me-3"
                style={{ width: "55px", height: "55px", objectFit: "cover" }}
              />
              <div>
                <div className="fw-semibold">{blogDetails?.author}</div>
                <div className="text-muted small">Author</div>
              </div>
            </div>
  
            {/* Blog Content */}
            {/* <div className="mt-4" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
              <h4 className="fw-bold mt-4">Introduction</h4>
              <p>
                Kumaon is a beautiful and affordable region to explore if you know
                where to save and where to spend. In this post you'll find a compact
                itinerary, budgeting tips, and what to pack.
              </p>
  
              <h4 className="fw-bold mt-4">1. Getting there</h4>
              <p>
                Take a sleeper bus or shared taxi from major hubs. Trains to nearby
                junctions plus a short taxi are often cheapest.
              </p>
  
              <blockquote
                className="p-3 border-start border-4 rounded bg-light"
                style={{ borderColor: "#198754" }}
              >
                <em>“Travel doesn't have to be expensive to be memorable.”</em>
              </blockquote>
  
              <h4 className="fw-bold mt-4">2. Where to stay</h4>
              <p>
                Look for homestays and guesthouses in small towns — they are way
                cheaper than hotels and often include breakfast.
              </p>
  
              <h4 className="fw-bold mt-4">3. Sample 3-day budget itinerary</h4>
              <ul>
                <li>Day 1: Arrive, local market, short trek.</li>
                <li>Day 2: Full-day trek or sightseeing.</li>
                <li>Day 3: Return via scenic route.</li>
              </ul>
  
              <h4 className="fw-bold mt-4">4. Packing list</h4>
              <p>Bring layers, a light rain jacket, and comfortable footwear.</p>
  
              <h4 className="fw-bold mt-4">Final tips</h4>
              <p>
                Negotiate shared rides, eat where locals eat, and always carry small
                change for local transport.
              </p>
            </div> */}
             {/* Blog Content (HTML) */}
             <hr />
            <div
              className="mt-4"
              style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
              dangerouslySetInnerHTML={{ __html: blogDetails?.content }}
            />

  
            {/* Tags */}
            <div className="mt-4 d-flex flex-wrap gap-2">
              {["Kumaon", "Budget Travel", "Itinerary", "India"].map((tag) => (
                <span
                  key={tag}
                  className="badge bg-light text-dark border"
                  style={{ padding: "8px 12px", borderRadius: "25px" }}
                >
                  #{tag}
                </span>
              ))}
            </div>
  
            {/* Share Buttons */}
            <div className="mt-4 d-flex align-items-center gap-2">
              <span className="text-muted small">Share:</span>
              <button className="btn btn-outline-secondary btn-sm">Twitter</button>
              <button className="btn btn-outline-secondary btn-sm">Facebook</button>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => navigator.clipboard.writeText(window.location.href)}
              >
                Copy Link
              </button>
            </div>
  
            {/* Comments */}
            <div className="mt-5">
              <h4 className="fw-semibold mb-3">Comments</h4>
  
              <div className="p-3 border rounded mb-3">
                <div className="d-flex gap-3">
                  <div
                    className="rounded-circle bg-light"
                    style={{ width: "45px", height: "45px" }}
                  ></div>
                  <div>
                    <div className="fw-semibold small">Rohit</div>
                    <div className="text-muted small mb-2">Nov 12, 2025</div>
                    <p className="mb-0 small">Great tips — saved this for my trip!</p>
                  </div>
                </div>
              </div>
  
              <textarea
                className="form-control"
                rows={3}
                placeholder="Write a comment..."
              ></textarea>
              <div className="text-end mt-2">
                <button className="btn btn-success btn-sm">Post comment</button>
              </div>
            </div>
          </div>
  
          {/* ================= SIDEBAR ================= */}
          <div className="col-lg-4">
  
            {/* Related Posts */}
            <div className="p-3 border rounded shadow-sm mb-4 bg-white">
              <h5 className="fw-semibold mb-3">Related Posts</h5>
  
              {relatedBlogs.map((item) => (
                <a
                  key={item.title}
                  href={`/blog/${item.slug}`}
                  className="d-flex align-items-center mb-3 text-decoration-none text-dark"
                >
                  <img
                    src={item.thumbnail}
                    className="rounded"
                    style={{ width: "80px", height: "55px", objectFit: "cover" }}
                  />
                  <div className="ms-3 small fw-semibold">{item.title}</div>
                </a>
              ))}
            </div>
  
            {/* Subscribe */}
            <div className="p-3 border rounded shadow-sm mb-4 bg-white">
              <h5 className="fw-semibold">Subscribe</h5>
              <p className="text-muted small">
                Get weekly travel tips in your inbox.
              </p>
              <input
                className="form-control mb-2"
                placeholder="Email address"
              />
              <button className="btn btn-primary w-100">Subscribe</button>
            </div>
  
            {/* About Author */}
            <div className="p-3 border rounded shadow-sm bg-white">
              <h5 className="fw-semibold mb-3">About Author</h5>
              <div className="d-flex align-items-center">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop"
                  className="rounded-circle"
                  style={{ width: "55px", height: "55px", objectFit: "cover" }}
                />
                <div className="ms-3">
                  <div className="fw-semibold small">Akhil Tv</div>
                  <div className="text-muted small">Traveller & Developer</div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
                        <div style={{paddingTop:'150px'}}></div>
<Footer/>
  
</>  );
}
