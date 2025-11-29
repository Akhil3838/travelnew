'use client';
import React, { useState, useEffect } from "react";

export default function FiltersSidebar({
  filters,
  selectedFilters,
  handleFilterChange,
  setSelectedFilters,
}) {
  // Temporary states for price range (only for UI)
  const [tempMin, setTempMin] = useState(selectedFilters.min_price);
  const [tempMax, setTempMax] = useState(selectedFilters.max_price);

  // Sync temp values if filters get updated externally
  useEffect(() => {
    setTempMin(selectedFilters.min_price);
    setTempMax(selectedFilters.max_price);
  }, [selectedFilters]);

  return (
    <div className="col-lg-3 col-md-4 rentacar-desktop-sidebar">
      <div className="rentacar-sidebar-box">
        {/* TITLE */}
        <div className="rentacar-sidebar-title">
          Budget Range <span>-</span>
        </div>

        {/* LABEL + GO BUTTON */}
        <div
          className="rentacar-range-top"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="rentacar-range-label">
            ₹ {tempMin.toLocaleString("en-IN")} - ₹{" "}
            {tempMax.toLocaleString("en-IN")}
          </div>

          <button
            className="go-btn"
            onClick={() => {
              // APPLY temporary slider values to original filter state
              setSelectedFilters((prev) => ({
                ...prev,
                min_price: tempMin,
                max_price: tempMax,
              }));

              // Tell parent that price has been updated
              handleFilterChange("price", { min: tempMin, max: tempMax });
            }}
          >
            Go
          </button>
        </div>

        {/* DUAL SLIDER */}
        <div className="dual-slider">
          {/* Min Slider */}
          <input
            type="range"
            min="10000"
            max="1000000"
            value={tempMin}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value < tempMax) {
                setTempMin(value); // only update temp
              }
            }}
          />

          {/* Max Slider */}
          <input
            type="range"
            min="10000"
            max="1000000"
            value={tempMax}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > tempMin) {
                setTempMax(value); // only update temp
              }
            }}
          />
        </div>

        <div className="rentacar-section-divider"></div>

        {/* BRAND */}
        <div>
          <div className="rentacar-sidebar-title">
            Brand <span>-</span>
          </div>

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
          <div className="rentacar-sidebar-title">
            Vehicle Type <span>-</span>
          </div>

          {filters.vehicle_types.map((item, i) => (
            <div className="rentacar-filter-row" key={i}>
              <div>
                <input
                  type="checkbox"
                  checked={selectedFilters.vehicle_type === item.vehicle_type}
                  onChange={() =>
                    handleFilterChange("vehicle_type", item.vehicle_type)
                  }
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
          <div className="rentacar-sidebar-title">
            Fuel Type <span>-</span>
          </div>

          {filters.fuel_types.map((item, i) => (
            <div className="rentacar-filter-row" key={i}>
              <div>
                <input
                  type="checkbox"
                  checked={selectedFilters.fuel_type === item.fuel_type}
                  onChange={() =>
                    handleFilterChange("fuel_type", item.fuel_type)
                  }
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
