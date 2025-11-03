'use client'
import React, { useState } from 'react';
import { saveEnquery } from '../services/allApi';
import toast from 'react-hot-toast';

function BookingForm({ packageId, basePrice = 0, baseCampPrice = null }) {
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
    transport_option: 'none',
    transport_cost: 0,
    pricing_mode: 'full',
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
    if (name === 'number_of_persons') {
      const parsed = parseInt(value, 10) || 1;
      setFormData(prev => ({ ...prev, [name]: parsed }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const transportOptions = [
    { key: 'none', label: 'No Transport (₹0)', cost: 0 },
    { key: 'shared_bus', label: 'Shared Bus/Coach (₹0)', cost: 0 },
    { key: 'private_car', label: 'Private Car (₹3,000)', cost: 3000 },
    { key: 'suv', label: 'SUV (₹5,000)', cost: 5000 },
    { key: 'traveller', label: 'Tempo Traveller (₹8,000)', cost: 8000 },
  ];

  const handleTransportChange = (e) => {
    const selected = transportOptions.find(opt => opt.key === e.target.value) || transportOptions[0];
    setFormData(prev => ({
      ...prev,
      transport_option: selected.key,
      transport_cost: selected.cost,
    }));
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
      const effectiveBase = formData.pricing_mode === 'base_camp' && baseCampPrice ? Number(baseCampPrice) : Number(basePrice);
      const estimated_total = (effectiveBase * Number(formData.number_of_persons)) + Number(formData.transport_cost);
      fd.append('used_base_price', effectiveBase);
      fd.append('estimated_total', estimated_total);
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
      {/* Pricing Mode */}
      <div className="mb-3">
        <label className="form-label text-dark d-block">Pricing:</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="pricing_mode"
            id="pricing_full"
            value="full"
            checked={formData.pricing_mode === 'full'}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="pricing_full">Full Trip</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="pricing_mode"
            id="pricing_base_camp"
            value="base_camp"
            checked={formData.pricing_mode === 'base_camp'}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="pricing_base_camp">Base camp to Base camp</label>
        </div>
        {formData.pricing_mode === 'base_camp' && !baseCampPrice && (
          <div className="form-text text-danger">Base camp price unavailable; using standard price.</div>
        )}
      </div>
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

      {/* Transport Option */}
      <div className="mb-3">
        <label className="form-label text-dark">Transportation:</label>
        <select
          name="transport_option"
          className="form-select"
          value={formData.transport_option}
          onChange={handleTransportChange}
        >
          {transportOptions.map(opt => (
            <option key={opt.key} value={opt.key}>{opt.label}</option>
          ))}
        </select>
        {formData.transport_cost > 0 && (
          <div className="form-text">Additional cost: ₹{formData.transport_cost}</div>
        )}
      </div>

      {/* Estimated Total */}
      <div className="mb-3 p-3 rounded bg-light border">
        {(() => {
          const effectiveBase = formData.pricing_mode === 'base_camp' && baseCampPrice ? Number(baseCampPrice) : Number(basePrice);
          const persons = Number(formData.number_of_persons);
          const transport = Number(formData.transport_cost);
          const total = (effectiveBase * persons) + transport;
          return (
            <>
              <div className="d-flex justify-content-between">
                <span>Base price ({formData.pricing_mode === 'base_camp' ? 'Base camp' : 'Full'}) × persons</span>
                <span>₹{effectiveBase} × {persons}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Transport add-on</span>
                <span>₹{transport}</span>
              </div>
              <hr className="my-2" />
              <div className="d-flex justify-content-between fw-bold">
                <span>Estimated total</span>
                <span>₹{total}</span>
              </div>
            </>
          );
        })()}
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
