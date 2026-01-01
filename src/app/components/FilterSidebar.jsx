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

  // ✅ PRICE RANGE: 1000 – 200000
  const [priceRange, setPriceRange] = useState({ min: 1000, max: 200000 });

  // ✅ SEE MORE / LESS STATE
  const [showAllDestinations, setShowAllDestinations] = useState(false);

  // Fetch all filters
  const AllFilters = async () => {
    try {
      const result = await PackageFilters();
      setFilters(result?.data || { categories: [], days: [], destinations: [] });
    } catch (error) {
      console.error("Error fetching filters:", error);
      setFilters({ categories: [], days: [], destinations: [] });
    }
  };

  useEffect(() => {
    AllFilters();
  }, []);

  // Category toggle
  const handleCategoryChange = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // Destination toggle
  const handleDestinationChange = (destinationName) => {
    setSelectedDestinations((prev) =>
      prev.includes(destinationName)
        ? prev.filter((d) => d !== destinationName)
        : [...prev, destinationName]
    );
  };

  // Day toggle
  const handleDayChange = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // Apply filters
  const applyFilters = () => {
    onApplyFilters?.({
      categoryIds: selectedCategories,
      destinations: selectedDestinations,
      days: selectedDays,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    });
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedDestinations([]);
    setSelectedDays([]);
    setPriceRange({ min: 1000, max: 200000 });
    setShowAllDestinations(false);

    onApplyFilters?.({
      categoryIds: [],
      destinations: [],
      days: [],
      minPrice: 1000,
      maxPrice: 200000,
    });
  };

  // Show only 6 destinations initially
  const visibleDestinations = showAllDestinations
    ? filters.destinations
    : filters.destinations.slice(0, 6);

  return (
    <div className="col-lg-3 mb-4">
      <div className="card border-light shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title fw-bold mb-3">Refine Your Search</h5>
          <hr className="my-3" />

          {/* DESTINATIONS */}
          <div className="mb-4">
            <h6 className="fw-semibold mb-3">Destination</h6>

            {visibleDestinations.map((item, index) => (
              <div className="form-check mb-2" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`dest-${index}`}
                  checked={selectedDestinations.includes(item.destination)}
                  onChange={() =>
                    handleDestinationChange(item.destination)
                  }
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor={`dest-${index}`}
                >
                  {item.destination}
                </label>
              </div>
            ))}

            {/* SEE MORE / SEE LESS */}
            {filters.destinations.length > 6 && (
              <button
                type="button"
                className="btn btn-link p-2 mt-2 text-decoration-none"
                onClick={() => setShowAllDestinations(!showAllDestinations)}
              >
                {showAllDestinations ? "See Less →" : "See More →"}
              </button>
            )}
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
                <label
                  className="form-check-label ms-2"
                  htmlFor={`cat-${cat.id}`}
                >
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
              min="1000"
              max="200000"
              step="500"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange((prev) => ({
                  ...prev,
                  min: +e.target.value,
                }))
              }
            />

            <input
              type="range"
              className="form-range mt-2"
              min="1000"
              max="200000"
              step="500"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange((prev) => ({
                  ...prev,
                  max: +e.target.value,
                }))
              }
            />

            <div className="d-flex justify-content-between small text-muted">
              <span className="text-dark">₹{priceRange.min}</span>
              <span className="text-dark">₹{priceRange.max}</span>
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

          <button
            className="btn btn-dark bg-orange w-100 mt-3"
            onClick={applyFilters}
          >
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

      <div className="card border border-1 text-dark">
        <div className="card-body">
          <h5 className="card-title fw-bold mb-3">Need Help?</h5>
          <p className="card-text small">
            Our travel experts are available 24/7 to help you plan your perfect
            trip.
          </p>
          <button className="btn btn-outline-primary w-100">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
