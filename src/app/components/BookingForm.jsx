'use client';
import React, { useState } from 'react';
import { saveEnquery } from '../services/allApi';
import toast from 'react-hot-toast';

function BookingForm({ packageId, basePrice = 0, baseCampPrice = null, transportation, departuredates }) {
  const [formData, setFormData] = useState({
    package_id: packageId || '',
    name: '',
    email_id: '',
    phone_number: '',
    country: '',
    number_of_persons: 1,
    lead_traveller: '',
    message_box: '',
    booking_date: '', // now matches backend
    transport_id: '',
    month: '',
    slot: ''
  });

  const [openMonth, setOpenMonth] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'number_of_persons') {
      const parsed = parseInt(value, 10) || 1;
      setFormData((prev) => ({ ...prev, [name]: parsed }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSlotSelect = (month, slot) => {
    setFormData((prev) => ({
      ...prev,
      month,
      slot,
      booking_date: slot // matching backend key
    }));
    toast.success(`Slot selected: ${slot} (${month})`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();

      // Append fields exactly as backend expects (Postman reference)
      fd.append('package_id', formData.package_id);
      fd.append('name', formData.name);
      fd.append('email_id', formData.email_id);
      fd.append('phone_number', formData.phone_number);
      fd.append('country', formData.country);
      fd.append('number_of_persons', formData.number_of_persons);
      fd.append('lead_traveller', formData.lead_traveller);
      fd.append('message_box', formData.message_box);
      // fd.append('booking_date', formData.booking_date);
      fd.append('transport_id', formData.transport_id);
      fd.append('month', formData.month);
      fd.append('slot', formData.slot);

      // Optional — calculate estimated total if you want
      // const effectiveBase = Number(basePrice);
      // const estimated_total = effectiveBase * Number(formData.number_of_persons);
      // fd.append('estimated_total', estimated_total);
console.log(fd);

      const result = await saveEnquery(fd);
      console.log('Booking saved:', result);

      toast.success('✅ Booking Successful!');
      setFormData({
        package_id: packageId || '',
        name: '',
        email_id: '',
        phone_number: '',
        country: '',
        number_of_persons: 1,
        lead_traveller: '',
        message_box: '',
        booking_date: '',
        transport_id: '',
        month: '',
        slot: ''
      });
    } catch (error) {
      console.error('Error saving booking:', error);
      toast.error('❌ Failed to submit booking');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="mb-3">
        <label className="form-label text-dark">Name:</label>
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

      {/* Email */}
      <div className="mb-3">
        <label className="form-label text-dark">Email ID:</label>
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

      {/* Phone */}
      <div className="mb-3">
        <label className="form-label text-dark">Phone Number:</label>
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
        <label className="form-label text-dark">Country:</label>
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
        <label className="form-label text-dark">Number of Persons:</label>
        <select
          name="number_of_persons"
          value={formData.number_of_persons}
          onChange={handleChange}
          className="form-select"
          required
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Lead Traveller */}
      <div className="mb-3">
        <label className="form-label text-dark">Lead Traveller:</label>
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

      {/* Message */}
      <div className="mb-3">
        <label className="form-label text-dark">Message:</label>
        <textarea
          name="message_box"
          value={formData.message_box}
          onChange={handleChange}
          className="form-control"
          rows="3"
          placeholder="Enter your message"
        />
      </div>

      {/* Slot Selection */}
      <div className="mb-3">
        <h5 className="text-dark text-center fw-bold mb-3">Fixed Departure Dates</h5>
        {departuredates.map((item, index) => (
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
                    className={`p-2 mb-2 rounded text-center ${
                      formData.slot === slot && formData.month === item.month
                        ? 'bg-success text-white'
                        : 'bg-white border'
                    }`}
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

      {/* Transport Option */}
      <div className="mb-3">
        <label className="form-label text-dark">Transportation:</label>
        <select
          name="transport_id"
          className="form-select"
          value={formData.transport_id}
          onChange={handleChange}
        >
          <option value="">Select transport option</option>
          {transportation.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.transport} ₹{opt.transport_price}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn w-100 fw-bold py-3 rounded-pill shadow-sm text-light"
        style={{ backgroundColor: '#100c2fff' }}
      >
        Book Now
      </button>
    </form>
  );
}

export default BookingForm;
