import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

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
    question: "What is 15 × 2?",
    options: ["25", "30", "20", "35"],
    answer: "30",
  },
  { question: "Find: 49 ÷ 7", options: ["5", "7", "8", "6"], answer: "7" },
  {
    question: "What is 9 × 9?",
    options: ["72", "81", "99", "90"],
    answer: "81",
  },
  {
    question: "Solve: 3² + 4²",
    options: ["9", "25", "16", "10"],
    answer: "25",
  },
  { question: "Find: 64 ÷ 8", options: ["6", "8", "10", "7"], answer: "8" },
  {
    question: "What is 18 + 6?",
    options: ["24", "26", "22", "30"],
    answer: "24",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15);
  const [score, setScore] = useState(null);
  const [previousCorrect, setPreviousCorrect] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(15);
  }, [currentQuestion]);

  const calculateCorrectAnswers = (answers) => {
    return Object.keys(answers).filter(
      (index) => answers[index] === questions[index].answer
    ).length;
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerClick = (option) => {
    const newAnswers = { ...selectedAnswers, [currentQuestion]: option };
    const newCorrectCount = calculateCorrectAnswers(newAnswers);

    setSelectedAnswers(newAnswers);
    setPreviousCorrect(correctCount);
    setCorrectCount(newCorrectCount);
  };

  const handleSubmit = () => {
    setScore(calculateCorrectAnswers(selectedAnswers));
  };

  return (
    <div className="quiz-container">
      <ProgressBar
        answeredQuestions={Object.keys(selectedAnswers).length}
        totalQuestions={questions.length}
        correctCount={correctCount}
        previousCorrect={previousCorrect}
      />

      {score === null ? (
        <>
          <h4 className="text-primary">
            Question {currentQuestion + 1} / {questions.length}
          </h4>
          <h2>{questions[currentQuestion].question}</h2>
          <h5 className="text-danger">Time Left: {timeLeft}s</h5>

          <div className="options mt-3">
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestion] === option;
              return (
                <button
                  key={index}
                  type="button"
                  className={`btn ${
                    isSelected ? "btn-success" : "btn-info"
                  } mx-2`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="quiz-controls mt-3">
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              Prev
            </button>

            {currentQuestion < questions.length - 1 && (
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>

          <div className="submit-section mt-3">
            <button
              type="button"
              className="btn btn-danger mx-2"
              onClick={handleSubmit}
            >
              Submit Quiz
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-success">Quiz Completed!</h2>
          <h3 className="text-primary">
            Your Score: {score} / {questions.length}
          </h3>

          <button
            type="button"
            className="btn btn-warning mt-3"
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
