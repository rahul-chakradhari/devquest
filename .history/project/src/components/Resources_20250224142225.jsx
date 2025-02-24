import React from "react";

const rewards = [
  {
    title: "Branded T-Shirt (All Sizes)",
    img: "/shirt.webp",
    description: "Premium quality cotton t-shirt.",
    points: 1000,
  },
  {
    title: "Lightweight Helmet",
    img: "/Helmet.jpg",
    description: "Safe and lightweight helmet for driving.",
    points: 800,
  },
  {
    title: "A Small Plant",
    img: "/tree.jpg",
    description: "Grow this plant at home for fresh oxygen.",
    points: 200,
  },
  {
    title: "Branded Kurti (All Sizes)",
    img: "/kurti.jpg",
    description: "Premium cotton kurti for comfort.",
    points: 1000,
  },
  {
    title: "Happy Stickers",
    img: "/happy.jpg",
    description: "Decorate your accessories with these stickers.",
    points: 300,
  },
  {
    title: "1L Water Bottle",
    img: "/bottle.jpg",
    description: "Stay hydrated with this travel-friendly bottle.",
    points: 250,
  },
];

const Resources = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        🏆 Available Rewards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rewards.map((reward, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={reward.img}
              alt={reward.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{reward.title}</h3>
            <p className="text-gray-600 text-sm">{reward.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
