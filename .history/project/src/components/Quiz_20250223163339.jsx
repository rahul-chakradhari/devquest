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
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(10);
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
    let count = 0;
    Object.keys(answers).forEach((index) => {
      if (answers[index] === questions[index].answer) {
        count += 1;
      }
    });
    return count;
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
    let calculatedScore = calculateCorrectAnswers(selectedAnswers);
    setScore(calculatedScore);
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
