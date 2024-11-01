// about.tsx
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <p className="text-center text-gray-700 mb-4">
        Welcome to My Story Sharing, a platform where everyone can share their stories and experiences with the world.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
      <p className="text-gray-700 mb-4">
        Our mission is to create a safe and supportive space for individuals to express themselves and connect with others through storytelling.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Features</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Share your personal stories and experiences.</li>
        <li>Explore stories shared by others in the community.</li>
        <li>Engage with a variety of story categories including love, inspiration, and more.</li>
        <li>Upload multimedia content to enhance your storytelling.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6">Get Involved</h2>
      <p className="text-gray-700 mb-4">
        Join us in fostering a community of storytellers! Whether you're here to share, learn, or connect, your voice matters.
      </p>
    </div>
  );
};

export default About;
