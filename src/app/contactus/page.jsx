'use client';
import React, { useState } from "react";
import StickyHeader from "../components/StickyHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactLayout from "../components/contactus/ContactLayout";

function ContactUs() {

  const [saveContactUs, setSaveContactUs] = useState({});


  return (
    <>
    <StickyHeader/>

   <Header/>


      {/* Page Title */}
      {/* Intro Ribbon */}

            <section className="gradient-ribbon text-white" style={{ background: 'linear-gradient(135deg,hsla(260, 60%, 2%, 1.00) 0%,rgba(10, 7, 15, 1) 100%)' }}>
        <div className="container py-5 text-center">
           <h1 className="fw-bold display-5">Contact Us</h1>
        <p >
          Any question or remarks? Just write us a message!
        </p>
        </div>
      </section>
      {/* Main Contact Layout */}
      <ContactLayout/>

                  <div style={{paddingTop:'150px'}}></div>


      <Footer/>
    </>
  );
}

export default ContactUs;
