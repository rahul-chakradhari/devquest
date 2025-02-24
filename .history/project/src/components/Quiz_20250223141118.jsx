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

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(10);
  }, [currentQuestion]);

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
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setShowFeedback(true);
  };

  const getFeedback = () => {
    if (score >= 8)
      return { message: "🎉 Excellent! Keep it up!", color: "text-success" };
    if (score >= 5)
      return {
        message: "🙂 Average scorer! You can do better!",
        color: "text-warning",
      };
    return {
      message: "😟 Low grade! Please improve yourself.",
      color: "text-danger",
    };
  };

  return (
    <div className="quiz-container text-center">
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

            {/* Next Button - Hidden on Last Question */}
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
        </>
      ) : (
        <>
          <h2 className="text-success">Quiz Completed!</h2>
          <h3 className="text-primary">
            Your Score: {score} / {questions.length}
          </h3>
          <h4 className={getFeedback().color}>{getFeedback().message}</h4>

          <div className="feedback mt-3">
            {questions.map((q, index) => (
              <p
                key={index}
                className={`text-${
                  selectedAnswers[index] === q.answer ? "success" : "danger"
                }`}
              >
                {index + 1}. {q.question} -
                {selectedAnswers[index] === q.answer
                  ? " ✅ Correct"
                  : ` ❌ Incorrect (Correct: ${q.answer})`}
              </p>
            ))}
          </div>

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
