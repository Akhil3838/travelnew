'use client';
import React from "react";

export default function FiltersSidebar({ filters, selectedFilters, handleFilterChange, setSelectedFilters }) {
  return (
    <div className="col-lg-3 col-md-4 rentacar-desktop-sidebar">
      <div className="rentacar-sidebar-box">

        {/* TITLE */}
        <div className="rentacar-sidebar-title">
          Budget Range <span>-</span>
        </div>

        {/* DYNAMIC LABEL */}
        <div className="rentacar-range-label">
          ₹ {selectedFilters.min_price.toLocaleString("en-IN")} - ₹ {selectedFilters.max_price.toLocaleString("en-IN")}
        </div>

        {/* DUAL HANDLE SLIDER */}
        <div className="dual-slider">
          {/* Min slider */}
          <input
            type="range"
            min="10000"
            max="1000000"
            value={selectedFilters.min_price}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value < selectedFilters.max_price) {
                setSelectedFilters(prev => ({ ...prev, min_price: value }));
              }
            }}
          />

          {/* Max slider */}
          <input
            type="range"
            min="10000"
            max="1000000"
            value={selectedFilters.max_price}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > selectedFilters.min_price) {
                setSelectedFilters(prev => ({ ...prev, max_price: value }));
              }
            }}
          />
        </div>

        <div className="rentacar-section-divider"></div>

        {/* BRAND */}
        <div>
          <div className="rentacar-sidebar-title">Brand <span>-</span></div>

          {filters.brands?.length > 0 ? (
            filters.brands.map((item, i) => (
              <div className="rentacar-filter-row" key={i}>
                <div>
                  <input
                    type="checkbox"
                    checked={selectedFilters.brand === item.brand}
                    onChange={() => handleFilterChange("brand", item.brand)}
                  />{" "}
                  {item.brand}
                </div>
                <div className="rentacar-filter-count">({item.total})</div>
              </div>
            ))
          ) : (
            <p className="text-muted">Loading...</p>
          )}

          <div className="rentacar-section-divider"></div>
        </div>

        {/* VEHICLE TYPE */}
        <div>
          <div className="rentacar-sidebar-title">Vehicle Type <span>-</span></div>

          {filters.vehicle_types.map((item, i) => (
            <div className="rentacar-filter-row" key={i}>
              <div>
                <input
                  type="checkbox"
                  checked={selectedFilters.vehicle_type === item.vehicle_type}
                  onChange={() => handleFilterChange("vehicle_type", item.vehicle_type)}
                />{" "}
                {item.vehicle_type}
              </div>
              <div className="rentacar-filter-count">({item.total})</div>
            </div>
          ))}

          <div className="rentacar-section-divider"></div>
        </div>

        {/* FUEL TYPE */}
        <div>
          <div className="rentacar-sidebar-title">Fuel Type <span>-</span></div>

          {filters.fuel_types.map((item, i) => (
            <div className="rentacar-filter-row" key={i}>
              <div>
                <input
                  type="checkbox"
                  checked={selectedFilters.fuel_type === item.fuel_type}
                  onChange={() => handleFilterChange("fuel_type", item.fuel_type)}
                />{" "}
                {item.fuel_type}
              </div>
              <div className="rentacar-filter-count">({item.total})</div>
            </div>
          ))}

          <div className="rentacar-section-divider"></div>
        </div>

      </div>
    </div>
  );
}
