'use client';
import React, { useState, useEffect } from "react";

export default function MobileFilters({ filters, selectedFilters, handleFilterChange, setSelectedFilters }) {

  // ----------------------------
  // TEMP PRICE STATES
  // ----------------------------
  const [tempMin, setTempMin] = useState(selectedFilters.min_price);
  const [tempMax, setTempMax] = useState(selectedFilters.max_price);

  useEffect(() => {
    setTempMin(selectedFilters.min_price);
    setTempMax(selectedFilters.max_price);
  }, [selectedFilters]);

  // ----------------------------
  // CLOSE OFFCANVAS
  // ----------------------------
  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById('rentacarSidebarOffcanvas');
    if (offcanvasElement) {
      const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    }
  };

  // ----------------------------
  // HANDLE CHECKBOX CLICK
  // ----------------------------
  const handleCheckboxChange = (filterType, value) => {
    handleFilterChange(filterType, value);
    closeOffcanvas();
  };

  return (
    <div className="offcanvas offcanvas-start" id="rentacarSidebarOffcanvas">
      <div className="offcanvas-header">
        <h5>Filters</h5>
        <button className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>

      <div className="offcanvas-body">
        <div className="rentacar-sidebar-box">

          {/* TITLE */}
          <div className="rentacar-sidebar-title">
            Budget Range <span>-</span>
          </div>

          {/* LABEL + GO BUTTON */}
          <div 
            className="rentacar-range-top" 
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <div className="rentacar-range-label">
              ₹ {tempMin.toLocaleString("en-IN")} - ₹ {tempMax.toLocaleString("en-IN")}
            </div>

            <button
              className="go-btn"
              onClick={() => {
                // APPLY to actual filter state
                setSelectedFilters(prev => ({
                  ...prev,
                  min_price: tempMin,
                  max_price: tempMax
                }));

                // Trigger filter function
                handleFilterChange("price", { min: tempMin, max: tempMax });

                // Close the offcanvas
                closeOffcanvas();
              }}
            >
              Go
            </button>
          </div>

          {/* SLIDERS */}
          <div className="dual-slider">
            <input
              type="range"
              min="10000"
              max="1000000"
              value={tempMin}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (v < tempMax) setTempMin(v);
              }}
            />

            <input
              type="range"
              min="10000"
              max="1000000"
              value={tempMax}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (v > tempMin) setTempMax(v);
              }}
            />
          </div>

          <div className="rentacar-section-divider"></div>

          {/* BRAND */}
          <div className="rentacar-sidebar-title">Brand <span>-</span></div>
          {filters.brands.map((item, i) => (
            <div className="rentacar-filter-row" key={i}>
              <div>
                <input
                  type="checkbox"
                  checked={selectedFilters.brand === item.brand}
                  onChange={() => handleCheckboxChange("brand", item.brand)}
                /> {item.brand}
              </div>
              <div className="rentacar-filter-count">({item.total})</div>
            </div>
          ))}

          <div className="rentacar-section-divider"></div>

          {/* VEHICLE TYPE */}
          <div className="rentacar-sidebar-title">Vehicle Type <span>-</span></div>
          {filters.vehicle_types.map((item, i) => (
            <div className="rentacar-filter-row" key={i}>
              <div>
                <input
                  type="checkbox"
                  checked={selectedFilters.vehicle_type === item.vehicle_type}
                  onChange={() => handleCheckboxChange("vehicle_type", item.vehicle_type)}
                /> {item.vehicle_type}
              </div>
              <div className="rentacar-filter-count">({item.total})</div>
            </div>
          ))}

          <div className="rentacar-section-divider"></div>

          {/* FUEL TYPE */}
          <div className="rentacar-sidebar-title">Fuel Type <span>-</span></div>
          {filters.fuel_types.map((item, i) => (
            <div className="rentacar-filter-row" key={i}>
              <div>
                <input
                  type="checkbox"
                  checked={selectedFilters.fuel_type === item.fuel_type}
                  onChange={() => handleCheckboxChange("fuel_type", item.fuel_type)}
                /> {item.fuel_type}
              </div>
              <div className="rentacar-filter-count">({item.total})</div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
