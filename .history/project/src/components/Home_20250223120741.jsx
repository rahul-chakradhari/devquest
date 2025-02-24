import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left">
        <h1 className="welcome">Welcome to TraffiEase 🚦</h1>
        <h6 className="stl">
          {" "}
          <i>
            TraffiEase – Smarter Routes, Smoother Rides <br />
            Get real-time traffic updates and AI-powered <br />
            route optimization. Report roadblocks, share <br />
            insights, and help reduce congestion. Drive <br />
            smarter, safer,and smoother with TraffiEase!
            <br />
          </i>
        </h6>
        <p></p>
      </div>

      <div className="right">
        <Spline scene="https://prod.spline.design/XhhUjYLS9lGf6X5A/scene.splinecode" />
      </div>
    </div>
  );
};

export default Home;
