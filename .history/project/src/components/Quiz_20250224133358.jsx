import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15);
  const [score, setScore] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctHistory, setCorrectHistory] = useState([]); // ✅ Store previous scores

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

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
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
      const userAnswer = selectedAnswers[index];
      if (userAnswer === q.answer) calculatedScore += 1;
    });

    setScore(calculatedScore);
    setShowFeedback(true);
  };

  const handleRestart = () => {
    if (score !== null) {
      setCorrectHistory([...correctHistory, score]); // ✅ Store score before restarting
    }
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setScore(null);
    setShowFeedback(false);
    setTimeLeft(15);
  };

  return (
    <div className="quiz-container">
      <ProgressBar
        answeredQuestions={Object.keys(selectedAnswers).length}
        totalQuestions={questions.length}
        correctCount={score ?? 0}
        previousCorrect={0}
        showFinalResult={showFeedback}
        correctHistory={correctHistory} // ✅ Pass history
      />

      {showFeedback ? (
        <>
          <h2 className="text-success">Quiz Completed!</h2>
          <h3 className="text-primary">
            Your Score: {score} / {questions.length}
          </h3>

          <button
            type="button"
            className="btn btn-warning mt-3"
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
        </>
      ) : (
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
      )}
    </div>
  );
};

export default Quiz;
