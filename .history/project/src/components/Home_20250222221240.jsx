import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-2xl font-bold mb-4">Welcome to this site </div>
      <main>
        <div className="w-[300px] h-[300px] overflow-hidden">
          <Spline scene="https://prod.spline.design/EEkMM-NkMdX8yn6h/scene.splinecode" />
        </div>
      </main>
    </main>
  );
};

export default Home;
