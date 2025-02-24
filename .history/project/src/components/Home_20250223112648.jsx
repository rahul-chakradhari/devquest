import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <main className="flex items-center justify-between min-h-screen bg-gray-900 text-white px-10">
      {/* Left Section - Text Content */}
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">Welcome to This Site</h1>
        <p className="text-lg text-gray-300">
          Experience interactive 3D models with smooth animations and a stunning
          user experience.
        </p>
      </div>

      {/* Right Section - Spline Model */}
      <div className="w-1/2 flex justify-center">
        <Spline
          scene="https://prod.spline.design/Vc4yaV4bGOpld144/scene.splinecode"
          width={400}
          height={800}
        />
      </div>
    </main>
  );
};

export default Home;
