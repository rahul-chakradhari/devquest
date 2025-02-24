import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-2xl font-bold mb-4">Home</div>
      <main>
        <Spline scene="https://prod.spline.design/EEkMM-NkMdX8yn6h/scene.splinecode" />
      </main>
    </main>
  );
};

export default Home;
