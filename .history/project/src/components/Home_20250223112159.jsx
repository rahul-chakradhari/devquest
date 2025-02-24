import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-3xl font-bold mb-6">Welcome to This Site</div>
      <div className="w-[800px] h-[800px] flex items-center justify-center">
        <Spline
          scene="https://prod.spline.design/Vc4yaV4bGOpld144/scene.splinecode"
          width={800}
          height={800}
        />
      </div>
    </main>
  );
};

export default Home;
