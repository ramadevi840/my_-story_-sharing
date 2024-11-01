// features.tsx
import React from 'react';

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Love or Crush Feeling Box */}
        <div className="bg-red-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Love or Crush Feeling</h2>
          <p>
            Love is a profound feeling of affection and attachment. When you have a crush, it’s that exciting yet nerve-wracking feeling of infatuation that can turn your world upside down.
          </p>
        </div>

        {/* Failures Box */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Failures</h2>
          <p>
            Failure is an essential part of life. It teaches us valuable lessons and pushes us to grow stronger. Embracing failure can lead to greater successes in the future.
          </p>
        </div>

        {/* Motivation Box */}
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Motivation</h2>
          <p>
            Motivation is the drive to achieve goals and push beyond limits. It's what inspires us to get up and take action, even when challenges arise.
          </p>
        </div>

        {/* Inspiration Box */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Inspiration</h2>
          <p>
            Inspiration is the spark that ignites creativity and passion. It's found in everyday moments and can lead to amazing achievements when we let it guide us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
