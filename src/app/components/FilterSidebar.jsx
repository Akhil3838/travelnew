'use client'
import React, { useEffect, useState } from "react";
import { PackageFilters } from "../services/allApi";
import RecentPosts from "./RecentPosts";

const FilterSidebar = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    categories: [],
    days: [],
    destinations: []
  });

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

  const AllFilters = async () => {
    try {
      const result = await PackageFilters();
      console.log(result);

      setFilters(result?.data || { categories: [], days: [], destinations: [] });
    } catch (error) {
      console.error("Error fetching filters:", error);
      setFilters({ categories: [], days: [], destinations: [] });
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

  const handleDestinationChange = (destinationName) => {
    setSelectedDestinations((prev) =>
      prev.includes(destinationName)
        ? prev.filter((d) => d !== destinationName)
        : [...prev, destinationName]
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
      destinations: selectedDestinations,
      days: selectedDays,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    };

    onApplyFilters?.(filterData);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedDestinations([]);
    setSelectedDays([]);
    setPriceRange({ min: 0, max: 5000 });

    onApplyFilters?.({
      categoryIds: [],
      destinations: [],
      days: [],
      minPrice: 0,
      maxPrice: 5000,
    });
  };

  return (
    <>
      <div className="col-lg-3 mb-4">
        <div className="card border-light shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title fw-bold mb-3">Refine Your Search</h5>
            <hr className="my-3" />

            {/* DESTINATIONS */}
            <div className="mb-4">
              <h6 className="fw-semibold mb-3">Destination</h6>

              {filters.destinations.map((item, index) => (
                <div className="form-check mb-2" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`dest-${index}`}
                    checked={selectedDestinations.includes(item.destination)}
                    onChange={() => handleDestinationChange(item.destination)}
                  />
                  <label className="form-check-label ms-2" htmlFor={`dest-${index}`}>
                    {item.destination}
                  </label>
                </div>
              ))}
            </div>

            {/* CATEGORIES */}
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
                  <label className="form-check-label ms-2" htmlFor={`cat-${cat.id}`}>
                    {cat.title}
                  </label>
                </div>
              ))}
            </div>

            {/* PRICE RANGE */}
            <div className="mb-4">
              <h6 className="fw-semibold mb-3">Price Range</h6>

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
                className="form-range mt-2"
                min="0"
                max="5000"
                step="100"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange((prev) => ({ ...prev, max: +e.target.value }))
                }
              />

              <div className="d-flex justify-content-between small text-muted">
                <span className="text-dark">₹{priceRange.min}</span>
                <span className="text-dark">₹{priceRange.max}+</span>
              </div>
            </div>

            {/* DAYS */}
            <div className="mb-4">
              <h6 className="fw-semibold mb-3">Duration</h6>
              <div className="d-flex flex-wrap gap-2">
                {filters.days.map((day, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={`duration-${index}`}
                      className="btn-check"
                      checked={selectedDays.includes(day)}
                      onChange={() => handleDayChange(day)}
                    />
                    <label
                      className="btn btn-outline-dark btn-sm"
                      htmlFor={`duration-${index}`}
                    >
                      {day}D
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn btn-dark bg-orange w-100 mt-3" onClick={applyFilters}>
              Apply Filters
            </button>

            <button
              className="btn btn-link w-100 mt-2 text-decoration-none"
              onClick={resetFilters}
            >
              Reset All Filters
            </button>
          </div>
        </div>

        <RecentPosts />

        <div className="card boreder border-1 text-dark">
          <div className="card-body">
            <h5 className="card-title fw-bold mb-3">Need Help?</h5>
            <p className="card-text small">Our travel experts are available 24/7 to help you plan your perfect trip.</p>
            <button className="btn btn-outline-primary w-100">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
