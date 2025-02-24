import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-10">
      {/* Top Section - Welcome Text */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to This Site</h1>
        <p className="text-lg text-gray-300">
          Experience interactive 3D models with smooth animations and a stunning
          user experience.
        </p>
      </div>

      {/* Bottom Section - Spline Model */}
      <div className="flex justify-end w-full max-w-5xl">
        <Spline scene="https://prod.spline.design/Vc4yaV4bGOpld144/scene.splinecode" />
      </div>
    </main>
  );
};

export default Home;
