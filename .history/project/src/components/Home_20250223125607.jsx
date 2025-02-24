import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left">
        <img
          src="/giphy.gif"
          alt="Loading Animation"
          className="w-[300px] h-[300px]"
        />

        <h1 className="welcome">Welcome to ExamEase </h1>
        <h6 className="stl">
          {" "}
          <i>
            📚 Learn, Test, Improve!
            <br />
            ExamEase is an interactive and engaging quiz platform <br />
            designed to help you assess your knowledge in real-time. <br />
            With instant feedback and dynamic question navigation, <br />
            learning has never been more fun and efficient!
            <br />
          </i>
        </h6>
      </div>

      <Spline
        scene="https://prod.spline.design/Z56u1CKEPNJKCqMQ/scene.splinecode"
        style={{ height: "600px" }}
      />
    </div>
  );
};

export default Home;
