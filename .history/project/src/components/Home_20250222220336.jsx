import React from "react";
import Spline from "@splinetool/react-spline/next";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-2xl font-bold mb-4">Home</div>
      <Spline scene="loading..." />
    </main>
  );
};

export default Home;
