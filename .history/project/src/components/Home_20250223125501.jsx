import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div className="home-container flex items-center justify-between px-10">
      {/* Left Side - Welcome Text */}
      <div className="left w-1/3">
        <h1 className="welcome text-3xl font-bold">Welcome to ExamEase</h1>
        <h6 className="stl text-lg">
          <i>
            📚 Learn, Test, Improve!
            <br />
            ExamEase is an interactive and engaging quiz platform <br />
            designed to help you assess your knowledge in real-time. <br />
            With instant feedback and dynamic question navigation, <br />
            learning has never been more fun and efficient!
          </i>
        </h6>
      </div>

      {/* Middle - Spline Scene */}
      <div className="spline-container w-1/2">
        <Spline
          scene="https://prod.spline.design/Z56u1CKEPNJKCqMQ/scene.splinecode"
          style={{ height: "400px" }} // Adjusted Height
        />
      </div>

      {/* Right Side - GIF */}
      <div className="gif-container w-1/4">
        <img
          src="/giphy.gif"
          alt="Quiz Animation"
          className="w-[250px] h-[250px] object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
