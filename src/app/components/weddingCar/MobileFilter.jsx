'use client';
import React from "react";

export default function MobileFilters({ filters, selectedFilters, handleFilterChange, setSelectedFilters }) {
  
  const closeOffcanvas = () => {
    // Get the offcanvas element and hide it
    const offcanvasElement = document.getElementById('rentacarSidebarOffcanvas');
    if (offcanvasElement) {
      const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    }
  };

  const handleCheckboxChange = (filterType, value) => {
    // First update the filter
    handleFilterChange(filterType, value);
    // Then close the offcanvas
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