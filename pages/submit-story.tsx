import React, { useState } from 'react';

const SubmitStory = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [storyContent, setStoryContent] = useState('');
  const [description, setDescription] = useState('');
  const [fontSize, setFontSize] = useState('medium');
  const [color, setColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  
  const categories = [
    { value: 'love', label: 'Love' },
    { value: 'crush', label: 'Crush' },
    { value: 'realization', label: 'Realization' },
    { value: 'motivation', label: 'Motivation' },
    { value: 'inspiration', label: 'Inspiration' },
    { value: 'failure', label: 'Failure' },
  ];

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setDescription(getDescription(category));
  };

  const getDescription = (category: string) => {
    switch (category) {
      case 'love':
        return 'Share your beautiful love stories.';
      case 'crush':
        return 'Tell us about your crush and those feelings.';
      case 'realization':
        return 'Describe a moment that changed your perspective.';
      case 'motivation':
        return 'Inspire others with your motivational journey.';
      case 'inspiration':
        return 'What inspires you? Share your story!';
      case 'failure':
        return 'Everyone faces failure. Share how you overcame it.';
      default:
        return '';
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic (e.g., sending data to the server)
    console.log('Story submitted:', { selectedCategory, storyContent });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    console.log('Uploaded image:', file);
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    console.log('Uploaded video:', file);
  };

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    console.log('Uploaded audio:', file);
  };

  const addEmoji = (emoji: string) => {
    setStoryContent(storyContent + emoji);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Submit Your Story</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Category:</label>
          <select 
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="">--Choose a category--</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{description}</h2>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Your Story:</label>
              <textarea
                value={storyContent}
                onChange={(e) => setStoryContent(e.target.value)}
                rows={4}
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Write your story here..."
                style={{ fontSize: fontSize, color: color, backgroundColor: backgroundColor }}
              />
            </div>

            {/* Upload Buttons */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Upload Image:</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-2" />
              <label className="block text-gray-700 mb-2">Upload Video:</label>
              <input type="file" accept="video/*" onChange={handleVideoUpload} className="mb-2" />
              <label className="block text-gray-700 mb-2">Upload Audio:</label>
              <input type="file" accept="audio/*" onChange={handleAudioUpload} className="mb-2" />
            </div>

            {/* Emoji Buttons */}
            <div className="mb-4">
              <button type="button" onClick={() => addEmoji('😊')} className="mr-2">😊</button>
              <button type="button" onClick={() => addEmoji('❤️')} className="mr-2">❤️</button>
              <button type="button" onClick={() => addEmoji('😂')} className="mr-2">😂</button>
            </div>

            {/* Font and Color Options */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Font Size:</label>
              <select 
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full mb-2"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>

              <label className="block text-gray-700 mb-2">Text Color:</label>
              <input 
                type="color" 
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
                className="border border-gray-300 p-2 rounded w-full mb-2"
              />
              <label className="block text-gray-700 mb-2">Background Color:</label>
              <input 
                type="color" 
                value={backgroundColor} 
                onChange={(e) => setBackgroundColor(e.target.value)} 
                className="border border-gray-300 p-2 rounded w-full mb-2"
              />
            </div>
          </>
        )}

        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit Story
        </button>
      </form>
    </div>
  );
};

export default SubmitStory;
