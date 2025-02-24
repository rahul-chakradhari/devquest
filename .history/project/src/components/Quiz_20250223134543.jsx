import React, { useState, useEffect } from "react";

const questions = [
  { question: "What is 5 + 3?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "What is 12 - 4?", options: ["6", "7", "8", "9"], answer: "8" },
  {
    question: "Solve: (2 + 3) × 4",
    options: ["20", "10", "25", "30"],
    answer: "20",
  },
  { question: "What is 9 ÷ 3?", options: ["1", "3", "9", "6"], answer: "3" },
  {
    question: "Solve: 15 - (4 + 3)",
    options: ["6", "8", "9", "12"],
    answer: "8",
  },
  {
    question: "What is 7 × 2?",
    options: ["10", "12", "14", "16"],
    answer: "14",
  },
  {
    question: "Solve: (8 + 2) ÷ 2",
    options: ["2", "4", "5", "6"],
    answer: "5",
  },
  {
    question: "What is 4 × 3 - 2?",
    options: ["10", "11", "12", "14"],
    answer: "10",
  },
  { question: "Solve: 6 + 4 ÷ 2", options: ["3", "5", "8", "10"], answer: "8" },
  { question: "What is 3²?", options: ["6", "9", "12", "15"], answer: "9" },
];

const Quiz = ({ onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10); // 10-second timer

  // Timer Effect
  useEffect(() => {
    if (timeLeft === 0) {
      handleNext(); // Auto-move to next question when time expires
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Reset Timer on Question Change
  useEffect(() => {
    setTimeLeft(10); // Reset to 10 seconds for each new question
  }, [currentQuestion]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset selection
    } else {
      onSubmit(); // Redirect to result component
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="quiz-container text-center">
      <h2>{questions[currentQuestion].question}</h2>

      {/* Timer Display */}
      <h5 className="text-danger">Time Left: {timeLeft}s</h5>

      {/* Options */}
      <div className="options mt-3">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            type="button"
            className={`btn ${
              selectedAnswer === option ? "btn-success" : "btn-info"
            } mx-2`}
            onClick={() => setSelectedAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="quiz-controls mt-3">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handlePrev}
          disabled={currentQuestion === 0}
        >
          Prev
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      {/* Always Available Submit Button */}
      <div className="submit-section mt-3">
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={handleSubmit}
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
