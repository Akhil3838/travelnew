'use client'
import React, { useState } from 'react';
import { saveEnquery } from '../services/allApi';
import toast from 'react-hot-toast';

function BookingForm({ packageId }) {
  const [formData, setFormData] = useState({
    package_id: packageId || '',
    name: '',
    email_id: '',
    phone_number: '',
    country: '',
    number_of_persons: 1,
    lead_traveller: '',
    message_box: '',
    booking_slot: '', // changed from booking_date
  });

  const [openMonth, setOpenMonth] = useState(null);

  const months = [
    { month: 'November-2025', slots: ['5th Nov', '15th Nov', '25th Nov'] },
    { month: 'December-2025', slots: ['10th Dec', '20th Dec', '30th Dec'] },
    { month: 'January-2026', slots: ['5th Jan', '15th Jan', '25th Jan'] },
    { month: 'February-2026', slots: ['5th Feb', '15th Feb', '25th Feb'] },
    { month: 'March-2026', slots: ['5th Mar', '15th Mar', '25th Mar'] },
    { month: 'April-2026', slots: ['5th Apr', '15th Apr', '25th Apr'] },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSlotSelect = (month, slot) => {
    setFormData(prev => ({ ...prev, booking_slot: `${slot} (${month})` }));
    toast.success(`Slot selected: ${slot} (${month})`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, value]) => fd.append(key, value));
      const result = await saveEnquery(fd);
      console.log("Enquiry saved:", result);
      toast.success('✅ Booking Successful!');
    } catch (error) {
      console.error('Error saving enquiry:', error);
      toast.error("Failed to submit enquiry");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="mb-3">
        <label className="form-label text-dark">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}
          className="form-control" placeholder="Enter your name" required />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="form-label text-dark">Email ID:</label>
        <input type="email" name="email_id" value={formData.email_id} onChange={handleChange}
          className="form-control" placeholder="Enter your email" required />
      </div>

      {/* Phone */}
      <div className="mb-3">
        <label className="form-label text-dark">Phone Number:</label>
        <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange}
          className="form-control" placeholder="Enter your phone number" required />
      </div>

      {/* Country */}
      <div className="mb-3">
        <label className="form-label text-dark">Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange}
          className="form-control" placeholder="Enter your country" required />
      </div>

      {/* Number of Persons */}
      <div className="mb-3">
        <label className="form-label text-dark">Number of Persons:</label>
        <select name="number_of_persons" value={formData.number_of_persons} onChange={handleChange}
          className="form-select" required>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      {/* Lead Traveller */}
      <div className="mb-3">
        <label className="form-label text-dark">Lead Traveller:</label>
        <input type="text" name="lead_traveller" value={formData.lead_traveller} onChange={handleChange}
          className="form-control" placeholder="Enter lead traveller name" required />
      </div>

      {/* Message */}
      <div className="mb-3">
        <label className="form-label text-dark">Message:</label>
        <textarea name="message_box" value={formData.message_box} onChange={handleChange}
          className="form-control" rows="3" placeholder="Enter your message" required />
      </div>

      {/* Slot Selection */}
      <div className="mb-3">
        <h5 className="text-dark text-center fw-bold mb-3">Fixed Departure Dates</h5>
        {months.map((item, index) => (
          <div key={index} className="mb-2">
            <button
              type="button"
              onClick={() => setOpenMonth(openMonth === index ? null : index)}
              className="btn w-100 text-start fw-semibold text-light rounded-3"
              style={{ backgroundColor: 'grey' }}
            >
              {item.month}
              <span className="float-end">{openMonth === index ? '▲' : '▼'}</span>
            </button>

            {openMonth === index && (
              <div className="border p-3 rounded-bottom bg-light">
                {item.slots.map((slot, i) => (
                  <div
                    key={i}
                    className={`p-2 mb-2 rounded text-center ${formData.booking_slot === `${slot} (${item.month})` ? 'bg-success text-white' : 'bg-white border'}`}
                    onClick={() => handleSlotSelect(item.month, slot)}
                    style={{ cursor: 'pointer' }}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit */}
      <button type="submit" className="btn w-100 fw-bold py-3 rounded-pill shadow-sm text-light"
        style={{ backgroundColor: '#100c2fff' }}>
        Book Now
      </button>
    </form>
  );
}

export default BookingForm;
