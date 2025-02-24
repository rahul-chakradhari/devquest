import React from "react";

const rewards = [
  {
    title: "Vedic maths tricks (Addition Tricks)",
    video:
      "https://www.youtube.com/watch?v=Z4J9kf9Z0h0&list=PLVLoWQFkZbhttps://www.youtube.com/embed/Z4J9kf9Z0h0hUFSIAjbWPVv_mlAAX8BBD1&index=2&ab_channel=MagnetBrains",
    description: "Premium quality cotton t-shirt.",
  },
  {
    title: "Lightweight Helmet",
    img: "/Helmet.jpg",
    description: "Safe and lightweight helmet for driving.",
  },
  {
    title: "A Small Plant",
    img: "/tree.jpg",
    description: "Grow this plant at home for fresh oxygen.",
  },
  {
    title: "Branded Kurti (All Sizes)",
    img: "/kurti.jpg",
    description: "Premium cotton kurti for comfort.",
  },
  {
    title: "Happy Stickers",
    img: "/happy.jpg",
    description: "Decorate your accessories with these stickers.",
  },
  {
    title: "1L Water Bottle",
    img: "/bottle.jpg",
    description: "Stay hydrated with this travel-friendly bottle.",
  },
];

const Resources = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-center mb-6">
        🏆 Available Rewards
      </h2>

      {/* ✅ Grid for 3 Cards Per Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="bg-white p-4 w-80 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={reward.img}
              alt={reward.title}
              className="w-40 h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2 text-center">
              {reward.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">
              {reward.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
