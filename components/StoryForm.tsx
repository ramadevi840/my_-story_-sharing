export default function StoryForm() {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit Your Story</h2>
      <textarea placeholder="Describe your story..." className="w-full p-2 border rounded mb-4" />
      {/* Implement emoji picker, media upload, font, and color options here */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
    </div>
  );
}
