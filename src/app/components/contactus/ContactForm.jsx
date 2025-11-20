import { ContactUsApi } from "@/app/services/allApi";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    subject: "Tour Enquiry",
    message: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("email", formData.email);
    data.append("contact", formData.contact);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    const res = await ContactUsApi(data);
    console.log("Response:", res);
     if (res?.status) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 2000,
        });

        setFormData({
          first_name: "",
    last_name: "",
    email: "",
    contact: "",
    subject: "Tour Enquiry",
    message: "",
        });
      } else {
        toast.error("Something went wrong!");
      }
  };

  return (
    <>
      <div className="col-lg-7">
              <ToastContainer />

        <form
          className="bg-white p-4 p-md-5 rounded-4 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <label className="text-muted small">First Name</label>
              <input
                type="text"
                name="first_name"
                className="form-control border-0 border-bottom rounded-0"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="text-muted small">Last Name</label>
              <input
                type="text"
                name="last_name"
                className="form-control border-0 border-bottom rounded-0"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-muted small">Email</label>
            <input
              type="email"
              name="email"
              className="form-control border-0 border-bottom rounded-0"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="text-muted small">Phone Number</label>
            <input
              type="tel"
              name="contact"
              className="form-control border-0 border-bottom rounded-0"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          {/* SUBJECT OPTIONS */}
          <div className="mb-3">
            <label className="fw-bold small">Select Subject?</label>

            <div className="d-flex flex-wrap gap-4 mt-2">
              {["Tour Enquiry", "Destination Enquiry", "Plan Enquiry", "Hotel Enquiry"].map(
                (item) => (
                  <label key={item} className="d-flex align-items-center gap-2">
                    <input
                      type="radio"
                      name="subject"
                      value={item}
                      checked={formData.subject === item}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                )
              )}
            </div>
          </div>

          {/* MESSAGE */}
          <div className="mb-4">
            <label className="text-muted small">Message</label>
            <textarea
              name="message"
              className="form-control border-0 border-bottom rounded-0"
              rows="3"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn text-white px-4 py-2"
            style={{ background: "#000000ff" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
