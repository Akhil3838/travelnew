'use client';
import React from "react";

export default function CarCard({ car }) {
  return (
    <div className="rentacar-card-box">
      <div className="rentacar-more-icon">⋮</div>

      <div className="row">
        <div className="col-md-4">
          <img src={car.image} className="rentacar-image" />
        </div>

        <div className="col-md-8">
          <h3 className="rentacar-name">{car.model_name}</h3>
          <div className="rentacar-rating-text">⭐ 4.5</div>
          <p className="rentacar-price-text">₹ {car.price}</p>
          <h6>{car.description}</h6>

          <div className="rentacar-info">
            <small><strong>Brand:</strong> {car.brand}</small>
            <span className="rentacar-divider">|</span>
            <small><strong>Fuel Type:</strong> {car.fuel_type}</small>
            <span className="rentacar-divider">|</span>
            <small><strong>Vehicle Type:</strong> {car.vehicle_type}</small>
            <span className="rentacar-divider">|</span>
            <small><strong>Seat Capacity:</strong> {car.seat_capacity}</small>
          </div>

          <p style={{ fontSize: "12px", color: "#777" }}>
            Added on: {new Date(car.created_at).toLocaleDateString()}
          </p>

          <button className="rentacar-offer-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}
