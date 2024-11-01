// explore-stories.tsx
import React from 'react';

const ExploreStories = () => {
  // Sample data for stories; replace this with actual data from your database.
  const stories = [
    {
      id: 1,
      title: 'Overcoming Failure',
      content: 'I learned that failure is just a stepping stone to success...',
      author: 'John Doe',
      image: 'path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'Inspiration from Nature',
      content: 'The beauty of nature inspires me every day...',
      author: 'Jane Smith',
      image: 'path/to/image2.jpg',
    },
    {
      id: 3,
      title: 'Love and Loss',
      content: 'Losing someone you love is never easy...',
      author: 'Alice Johnson',
      image: 'path/to/image3.jpg',
    },
    // Add more story objects here...
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">{story.title}</h2>
            <p className="text-gray-600 mt-2">{story.content.slice(0, 100)}...</p>
            <p className="text-gray-500 mt-1">By {story.author}</p>
            <button className="mt-4 bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreStories;
