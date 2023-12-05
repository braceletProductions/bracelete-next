import React, { useState } from "react";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <div
      className="max-w-md mx-auto my-10 bg-gray-200 rounded-lg p-5 "
      style={{ fontFamily: "Arial" }}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Get a Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mobileNo">
            Mobile No <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            placeholder="Your Mobile Number"
            required
            value={formData.mobileNo}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="requirements">
            Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="requirements"
            name="requirements"
            rows="4"
            placeholder="Enter your requirements..."
            required
            value={formData.requirements}
            onChange={handleChange}
            className="border rounded-md p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#c8a465] text-white px-4 py-1 rounded-md hover:bg-[#ebb85f] transition duration-300 flex justify-center  mx-auto border-2 border-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GetQuote;
