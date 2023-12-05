import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div
      className=" my-20 flex flex-col md:flex-row px-10 gap-8 py-5  bg-gray-300 "
      id="contact"
      style={{ fontFamily: "Arial" }}
    >
      {/* Contact Form */}
      <div className="w-full md:w-1/2 bg-black rounded-lg text-white sm:px-16 py-3 px-4 ">
        <h2 className="text-2xl font-bold mb-4 flex justify-center">
          Contact Us
        </h2>
        <form className="space-y-2">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="border rounded-md p-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="border rounded-md p-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here..."
              className="border rounded-md p-1"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#c8a465] text-white px-4 py-1 rounded-md hover:bg-[#ebb85f] transition duration-300 flex justify-center  mx-auto border-2 border-black"
          >
            Send a Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="w-full md:w-1/2 ">
        <h2 className="text-3xl font-bold mb-4 flex justify-center text-[#c8a465] ">
          Find Us At
        </h2>
        <p className=" text-2xl text-center text-[#23A8F6]">
          82, DDA Mini Market, Behind Sahyog Building,
        </p>
        <p className="text-2xl text-center text-[#23A8F6]">
          Nehru Place, Delhi 110019
        </p>
        <div className="flex justify-center mt-10 sm:text-7xl text-2xl text-[#c84565]">
          <FaMapMarkerAlt />
        </div>
        <br />
        <p className="text-[#c8a465] font-semibold text-center">OR CALL US:</p>
        <p className="text-[#c8a465] font-semibold text-center">
          +91-7011031017
        </p>
      </div>
    </div>
  );
};

export default Contact;
