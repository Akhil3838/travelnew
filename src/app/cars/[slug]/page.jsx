'use client';
import Header from '@/app/components/Header';
import StickyHeader from '@/app/components/StickyHeader';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
<>
  <StickyHeader/>
<Header/>
        <div className="container my-5">
    
          {/* Blog Header */}
          <div className="text-center mb-4">
            <h1 className="fw-bold">How to Travel Kumaon on a Budget</h1>
            <p className="text-muted">
              A beautiful, practical guide for backpackers & weekend travellers
            </p>
          </div>
    
          {/* Banner Image */}
          <div className="mb-4">
            <img 
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200" 
              className="img-fluid rounded shadow"
              alt="Blog Banner"
              style={{ height: "400px", width:"100%", objectFit:"cover" }}
            />
          </div>
    
          {/* Blog Content */}
          <div className="mt-4" style={{ lineHeight: "1.7", fontSize: "17px" }}>
    
            <h3 className="fw-bold mb-3">Overview</h3>
            <p>
              Kumaon, located in Uttarakhand, is one of the most beautiful and 
              affordable travel destinations in India. From misty mountains to 
              peaceful lakes, the region offers everything a budget traveller needs.
            </p>
    
            <h4 className="fw-bold mt-4">Best Time to Visit</h4>
            <ul>
              <li>October – February: Cold, perfect for snow lovers</li>
              <li>March – June: Pleasant weather, ideal for sightseeing</li>
            </ul>
    
            <h4 className="fw-bold mt-4">Budget Breakdown</h4>
            <ul>
              <li><b>Stay:</b> ₹500 – ₹800 per night (homestays)</li>
              <li><b>Food:</b> ₹200 – ₹300 per meal</li>
              <li><b>Local Travel:</b> Shared taxi or bus</li>
            </ul>
    
            <h4 className="fw-bold mt-4">Top Places to Visit</h4>
            <p>Make sure you explore these amazing locations:</p>
            <ol>
              <li>Nainital</li>
              <li>Bhimtal</li>
              <li>Kausani</li>
              <li>Mukteshwar</li>
            </ol>
    
            <h4 className="fw-bold mt-4">Travel Tips</h4>
            <p>
              Pack light, carry a power bank, keep cash ready, and book homestays early 
              for the best prices.
            </p>
    
            {/* Author Box */}
            <div className="p-4 mt-5 rounded shadow-sm bg-light d-flex align-items-center">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200"
                alt="Author"
                className="rounded-circle"
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
              />
              <div className="ms-3">
                <h5 className="fw-bold mb-0">Akhil Tv</h5>
                <p className="text-muted mb-0">Travel Blogger</p>
              </div>
            </div>
    
          </div>
    
        </div>
    
</> 
 );
}
