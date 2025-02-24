import React from "react";

const rewards = [
  {
    title: "Branded T-Shirt (All Sizes)",
    img: "/shirt.webp",
    description: "Redeem our premium quality cotton t-shirt.",
    points: 1000,
  },
  {
    title: "Lightweight Helmet",
    img: "/Helmet.jpg",
    description: "Stay safe while driving with this lightweight helmet.",
    points: 800,
  },
  {
    title: "A Small Plant",
    img: "/tree.jpg",
    description: "Grow this plant at home for fresh oxygen & greenery.",
    points: 200,
  },
  {
    title: "Branded Kurti (All Sizes)",
    img: "/kurti.jpg",
    description: "Get a premium cotton kurti in your preferred size.",
    points: 1000,
  },
  {
    title: "Happy Stickers",
    img: "/happy.jpg",
    description: "Decorate your accessories with these joyful stickers.",
    points: 300,
  },
  {
    title: "1L Water Bottle",
    img: "/bottle.jpg",
    description: "Stay hydrated with this travel-friendly bottle.",
    points: 250,
  },
];

const videos = [
  {
    title: "Quick Math Tricks",
    url: "https://www.youtube.com/embed/kZ8_fCFtx-8",
  },
  {
    title: "Memory Hacks for Exams",
    url: "https://www.youtube.com/embed/w-HYZv6HzAs",
  },
  {
    title: "Time Management in Quizzes",
    url: "https://www.youtube.com/embed/3YJ2f8h08Ik",
  },
  {
    title: "MCQ Solving Strategies",
    url: "https://www.youtube.com/embed/5g0Fx49wHwg",
  },
];

const Resources = () => {
  return (
    <div className="p-6">
      {/* Points & Orders Section */}
      <div className="text-center mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          How to Earn Points
        </button>
        <p className="mt-2 text-gray-600 italic">
          Report issues in your locality, our team will verify and reward
          points.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2">
          View Your Orders
        </button>
      </div>

      {/* Learning Videos */}
      <h2 className="text-xl font-semibold mb-4 text-center">
        🎥 Learning Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              className="w-full h-40 rounded-lg"
              src={video.url}
              title={video.title}
              allowFullScreen
            ></iframe>
            <h4 className="text-md font-semibold mt-2">{video.title}</h4>
          </div>
        ))}
      </div>

      {/* Rewards Section */}
      <h2 className="text-xl font-semibold mt-6 text-center">
        🏆 Redeemable Rewards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {rewards.map((reward, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={reward.img}
              alt={reward.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{reward.title}</h3>
            <p className="text-gray-600 text-sm">{reward.description}</p>
            <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg mt-2 w-full">
              {reward.points} 🪙 Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
