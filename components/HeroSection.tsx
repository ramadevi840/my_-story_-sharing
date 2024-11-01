import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-blue-100">
      <h1 className="text-3xl font-bold">Welcome to My Story Sharing Platform!</h1>
      <p className="mt-4 text-gray-700">Share your stories and explore those of others.</p>
      <div className="mt-6 space-x-4">
        <Link href="/submit-story">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit Story</button>
        </Link>
        <Link href="/explore-stories">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Explore Stories</button>
        </Link>
      </div>
    </section>
  );
}
