// contact.tsx
import React from 'react';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to your backend)
    alert('Your message has been sent!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-gray-700 mb-4">
        We would love to hear from you! Please fill out the form below to reach us.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
        <p className="text-gray-600">Email: support@mystorysharing.com</p>
        <p className="text-gray-600">Phone: +123-456-7890</p>
        <p className="text-gray-600">Address: 123 rangampet, chittor City, 575102</p>
      </div>
    </div>
  );
};

export default Contact;
