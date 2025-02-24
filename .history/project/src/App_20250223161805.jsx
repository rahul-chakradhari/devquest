import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Quiz from "./components/Quiz";
import ProgressBar from "./components/ProgressBar";
import PerformanceAnalysis from "./components/PerformanceAnalysis";

function App() {
  const [count, setCount] = useState(0);
  const [questionStats, setQuestionStats] = useState({});
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/bar" element={<ProgressBar />} />
          <Route
            path="/ana"
            element={
              <PerformanceAnalysis questionStats={questionStats || {}} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
