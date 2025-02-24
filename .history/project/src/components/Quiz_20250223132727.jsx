import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  { question: "What is 5 + 3?", options: ["5", "8", "12", "15"], answer: "8" },
  { question: "What is 10 - 6?", options: ["2", "4", "6", "8"], answer: "4" },
  { question: "Solve: 2 × 3", options: ["5", "6", "7", "8"], answer: "6" },
  { question: "What is 9 ÷ 3?", options: ["2", "3", "4", "5"], answer: "3" },
  {
    question: "Solve: 7 + 2 × 3",
    options: ["15", "13", "12", "18"],
    answer: "13",
  },
  {
    question: "What is 16 - 4 ÷ 2?",
    options: ["14", "10", "12", "8"],
    answer: "14",
  },
  {
    question: "Solve: 3 × 4 + 2",
    options: ["12", "14", "10", "16"],
    answer: "14",
  },
  {
    question: "What is 18 ÷ 2 - 5?",
    options: ["3", "4", "6", "9"],
    answer: "4",
  },
  {
    question: "Solve: (8 + 4) ÷ 2",
    options: ["4", "5", "6", "7"],
    answer: "6",
  },
  {
    question: "What is 5 × (2 + 3)?",
    options: ["20", "25", "30", "15"],
    answer: "25",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
    }
    const timer = setInterval(
      () => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)),
      1000
    );
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleNext = () => {
    if (selectedAnswer) {
      if (selectedAnswer === questions[currentQuestion].answer)
        setScore(score + 1);
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1)
        setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Select an answer before proceeding!");
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    navigate("/result", { state: { score, total: questions.length } });
  };

  return (
    <div className="quiz-container">
      <h2>
        Question {currentQuestion + 1} / {questions.length}
      </h2>
      <p className="question-text mx-2">
        {questions[currentQuestion].question}
      </p>
      <div className="options mx-2">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            type="button"
            className={`btn ${
              selectedAnswer === option ? "btn-success" : "btn-info"
            }`}
            onClick={() => setSelectedAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <br />
      <div className="quiz-controls">
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
      <br />
      <div className="submit-section">
        <button type="button" className="btn btn-danger" onClick={handleSubmit}>
          Submit Quiz
        </button>
      </div>
      <br /> <br /> <br />
      <p className="timer">⏳ Time Left: {timeLeft}s</p>
    </div>
  );
};

export default Quiz;
