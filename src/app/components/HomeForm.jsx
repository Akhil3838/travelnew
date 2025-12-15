'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function HomeForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    from_location: '',
    to_location: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams({
      from: formData.from_location,
      to: formData.to_location,
    });

    // date is optional
    if (formData.date) {
      params.append('date', formData.date);
    }

    router.push(`/search?${params.toString()}`);
  };

  return (
    <form
      className="d-flex flex-wrap align-items-center justify-content-between gap-3"
      onSubmit={handleSearch}
    >
      {/* From */}
      <div className="d-flex flex-column flex-grow-1 me-3">
        <div className="input-group">
          <span className="input-group-text bg-transparent border-0">
            <i className="fas fa-map-marker-alt text-secondary"></i>
          </span>
          <input
            type="text"
            name="from_location"
            value={formData.from_location}
            onChange={handleChange}
            className="form-control border-0 bg-transparent"
            placeholder="From Location"
            required
          />
        </div>
      </div>

      {/* To */}
      <div className="d-flex flex-column flex-grow-1 me-3">
        <div className="input-group">
          <span className="input-group-text bg-transparent border-0">
            <i className="fas fa-map-marker-alt text-secondary"></i>
          </span>
          <input
            type="text"
            name="to_location"
            value={formData.to_location}
            onChange={handleChange}
            className="form-control border-0 bg-transparent"
            placeholder="To Location"
            required
          />
        </div>
      </div>

      {/* Date (optional) */}
      <div className="d-flex flex-column flex-grow-1 me-3">
        <div className="input-group">
          <span className="input-group-text border-0 bg-white">
            <i className="fas fa-calendar-alt text-secondary"></i>
          </span>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control border-0"
            placeholder="dd-mm-yyyy"
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = 'text';
            }}
          />
        </div>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="btn rounded-pill px-4"
        style={{ backgroundColor: '#305cde', color: 'white' }}
      >
        Search <i className="fas fa-search ms-2"></i>
      </button>
    </form>
  );
}

export default HomeForm;
