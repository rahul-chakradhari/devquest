import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Mars", "Earth", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "12", "15"],
    answer: "8",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Swift"],
    answer: "JavaScript",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Newton", "Einstein", "Tesla", "Darwin"],
    answer: "Einstein",
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Ganges"],
    answer: "Nile",
  },
  {
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Which programming language is used for AI?",
    options: ["Java", "C", "Python", "Go"],
    answer: "Python",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Hemingway", "Tolstoy", "Poe"],
    answer: "Shakespeare",
  },
];

const Quiz = ({ onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // Timer in seconds

  useEffect(() => {
    if (timeLeft === 0) {
      onFinish(score); // When time runs out, finish quiz
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onFinish, score]);

  const handleNext = () => {
    if (selectedAnswer) {
      if (selectedAnswer === questions[currentQuestion].answer) {
        setScore((prev) => prev + 1);
      }
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        onFinish(score + 1); // Final score when last question is reached
      }
    } else {
      alert("Please select an answer before proceeding!");
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return (
    <div className="quiz-container">
      <h2>
        Question {currentQuestion + 1} / {questions.length}
      </h2>
      <p className="question-text">{questions[currentQuestion].question}</p>

      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            class="btn btn-info"
            key={index}
            className={`option-btn ${
              selectedAnswer === option ? "selected" : ""
            }`}
            onClick={() => setSelectedAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="quiz-controls">
        <button onClick={handlePrev} disabled={currentQuestion === 0}>
          Prev
        </button>
        <button onClick={handleNext}>
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>

      <p className="timer">⏳ Time Left: {timeLeft}s</p>
    </div>
  );
};

export default Quiz;
