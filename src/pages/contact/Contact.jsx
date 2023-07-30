import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className=" h-screen">
      <div className="container mx-auto p-4 w-[80%] mt-24 mb-60  ">
        <h1 className="text-4xl font-semibold mb-1">Love to hear from you,</h1>
        <h1 className="text-4xl font-semibold mb-[70px] flex items-center">
          Get in touch
          <div className=" ml-6 display: inline-block">
            <AiOutlineMail />
          </div>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="phone">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="message">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-56  hover:bg-gray-500 hover:text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
