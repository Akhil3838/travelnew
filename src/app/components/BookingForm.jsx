'use client'
import React, { useState } from 'react';
import { saveEnquery } from '../services/allApi';
import toast from 'react-hot-toast';


function BookingForm({ packageId }) {
      console.log(packageId);
  
  const [formData, setFormData] = useState({
    package_id: packageId || '', // Pass packageId as prop
    name: '',
    email_id: '',
    phone_number: '',
    country: '',
    number_of_persons: 1,
    lead_traveller: '',
    message_box: '',
    booking_date: '',
  });
console.log(formData);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        fd.append(key, value);
      });

      const result = await saveEnquery(fd);
      console.log("Enquiry saved:", result);
 toast.success('✅ Booking Successful!');
    } catch (error) {
      console.error('Error saving enquiry:', error);
      alert("Failed to submit enquiry");
    }
  };

  return (
    <>
             <form onSubmit={handleSubmit} >
              {/* Name */}
              <div className="mb-3">
                <label className="form-label text-white">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email ID */}
              <div className="mb-3">
                <label className="form-label text-white">Email ID:</label>
                <input
                  type="email"
                  name="email_id"
                  value={formData.email_id}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="mb-3">
                <label className="form-label text-white">Phone Number:</label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Country */}
              <div className="mb-3">
                <label className="form-label text-white">Country:</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your country"
                  required
                />
              </div>

              {/* Number of Persons */}
              <div className="mb-3">
                <label className="form-label text-white">Number of Persons:</label>
                <select
                  name="number_of_persons"
                  value={formData.number_of_persons}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {/* Lead Traveller */}
              <div className="mb-3">
                <label className="form-label text-white">Lead Traveller:</label>
                <input
                  type="text"
                  name="lead_traveller"
                  value={formData.lead_traveller}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter lead traveller name"
                  required
                />
              </div>

              {/* Message Box */}
              <div className="mb-3">
                <label className="form-label text-white">Message:</label>
                <textarea
                  name="message_box"
                  value={formData.message_box}
                  onChange={handleChange}
                  className="form-control"
                  rows="3"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* Booking Date */}
              <div className="mb-3">
                <label className="form-label text-white">Booking Date:</label>
                <input
                  type="date"
                  name="booking_date"
                  value={formData.booking_date}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-black border bg-dark text-light w-100 fw-bold py-3 rounded-pill shadow-sm">
                Book Now
              </button>
            </form>
    </>
  )
}

export default BookingForm