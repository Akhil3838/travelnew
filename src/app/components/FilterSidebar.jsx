'use client'
import React, { useEffect, useState } from "react";
import { PackageFilters } from "../services/allApi";

const FilterSidebar = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({ categories: [], days: [] });

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

  const AllFilters = async () => {
    try {
      const result = await PackageFilters();
      setFilters(result?.data || { categories: [], days: [] });
    } catch (error) {
      console.error("Error fetching filters:", error);
      setFilters({ categories: [], days: [] });
    }
  };

  useEffect(() => {
    AllFilters();
  }, []);

  const handleCategoryChange = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleDayChange = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const applyFilters = () => {
    const filterData = {
      categoryIds: selectedCategories,
      days: selectedDays,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    };

    if (onApplyFilters) {
      onApplyFilters(filterData); // send data to parent
    }
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedDays([]);
    setPriceRange({ min: 0, max: 5000 });
    if (onApplyFilters) {
      onApplyFilters({
        categoryIds: [],
        days: [],
        minPrice: 0,
        maxPrice: 5000,
      });
    }
  };
    
  return (
    <>
              <div className="col-lg-3 mb-4">
                <div className="card border-light shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-3">Refine Your Search</h5>
                    <hr className="my-3" />
                    
        {/* Categories */}
        <div className="mb-4">
          <h6 className="fw-semibold mb-3">Category</h6>
          {filters.categories.map((cat) => (
            <div className="form-check mb-2" key={cat.id}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`cat-${cat.id}`}
                checked={selectedCategories.includes(cat.id)}
                onChange={() => handleCategoryChange(cat.id)}
              />
              <label
                className="form-check-label d-flex align-items-center"
                htmlFor={`cat-${cat.id}`}
              >
                <span className="ms-2 text-dark">{cat.title}</span>
              </label>
            </div>
          ))}
        </div>
    
                          {/* Price Range */}
        <div className="mb-4">
          <h6 className="fw-semibold mb-3">Price Range</h6>
          <div className="range-slider mb-2">
            <input
              type="range"
              className="form-range"
              min="0"
              max="5000"
              step="100"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange((prev) => ({ ...prev, min: +e.target.value }))
              }
            />
            <input
              type="range"
              className="form-range"
              min="0"
              max="5000"
              step="100"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange((prev) => ({ ...prev, max: +e.target.value }))
              }
            />
          </div>
          <div className="d-flex justify-content-between small text-muted">
            <span className="text-dark">₹{priceRange.min}</span>
            <span className="text-dark">₹{priceRange.max}+</span>
          </div>
        </div>

    
                    <div className="mb-4">
                      <h6 className="fw-semibold mb-3">Duration</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {filters.days.map((label, index) => (
                          <div key={index}>
                            <input  type="checkbox"
                  id={`duration-${index}`}
                  className="btn-check"
                  checked={selectedDays.includes(label)}
                  onChange={() => handleDayChange(label)}
                             />
                            <label className="btn btn-outline-dark btn-sm" htmlFor={`duration-${index}`}>
                              {label}D
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
    
                    {/* <div className="mb-4">
                      <h6 className="fw-semibold mb-3">Destinations</h6>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Search destinations..." />
                      </div>
                      <div className="list-group list-group-flush" style={{maxHeight: "200px", overflowY: "auto"}}>
                        {["Hawaii", "Europe", "Caribbean", "Asia", "Australia", "Mexico", "Canada", "Alaska"].map((dest, idx) => (
                          <div className="list-group-item border-0 px-0 py-1" key={idx}>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id={`dest-${idx}`} />
                              <label className="form-check-label" htmlFor={`dest-${idx}`}>
                                <i className="fas fa-globe-americas me-2 text-dark"></i>
                                {dest}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div> */}
    
                    {/* <div className="mb-4">
                      <h6 className="fw-semibold mb-3">Travel Style</h6>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="family" />
                        <label className="form-check-label" htmlFor="family">
                          Family Friendly
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="luxury" />
                        <label className="form-check-label" htmlFor="luxury">
                          Luxury
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="adventure" />
                        <label className="form-check-label" htmlFor="adventure">
                          Adventure
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="romantic" />
                        <label className="form-check-label" htmlFor="romantic">
                          Romantic
                        </label>
                      </div>
                    </div> */}
    
                    <button className="btn btn-dark w-100 mt-3" onClick={applyFilters}>Apply Filters</button>
                    <button className="btn btn-link w-100 mt-2 text-decoration-none"  onClick={resetFilters}>Reset All Filters</button>
                  </div>
                </div>
                
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-3">Need Help?</h5>
                    <p className="card-text small">Our travel experts are available 24/7 to help you plan your perfect trip.</p>
                    <button className="btn btn-outline-light w-100">Contact Us</button>
                  </div>
                </div>
              </div>
    
    </>
  )
}

export default FilterSidebar