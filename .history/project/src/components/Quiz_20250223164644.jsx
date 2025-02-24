import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import PerformanceAnalysis from "./PerformanceAnalysis";

const questions = [
  { question: "5 + 3", options: ["7", "8", "9", "10"], answer: "8" },
  { question: "10 - 6", options: ["2", "3", "4", "5"], answer: "4" },
  { question: "3 × 4", options: ["9", "10", "11", "12"], answer: "12" },
  { question: "16 ÷ 4", options: ["2", "3", "4", "5"], answer: "4" },
];

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [score, setScore] = useState(null);
  const [history, setHistory] = useState({});

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    let questionStats = {};

    questions.forEach((q, index) => {
      const userAnswer = selectedAnswers[index];
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) calculatedScore += 1;

      const operationType = q.question.includes("+")
        ? "Addition"
        : q.question.includes("-")
        ? "Subtraction"
        : q.question.includes("×")
        ? "Multiplication"
        : q.question.includes("÷")
        ? "Division"
        : "Other";

      if (!questionStats[operationType]) {
        questionStats[operationType] = { correct: 0, incorrect: 0 };
      }

      questionStats[operationType][isCorrect ? "correct" : "incorrect"] += 1;
    });

    setScore(calculatedScore);
    setHistory(questionStats);
  };

  return (
    <div className="quiz-container">
      <h2>Math Quiz</h2>
      {score === null ? (
        <>
          {questions.map((q, index) => (
            <div key={index} className="question">
              <p>
                {index + 1}. {q.question}
              </p>
              {q.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={selectedAnswers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit} className="submit-btn">
            Submit Quiz
          </button>
        </>
      ) : (
        <>
          <h3>
            Your Score: {score} / {questions.length}
          </h3>
          <ProgressBar
            answeredQuestions={questions.length}
            totalQuestions={questions.length}
            correctCount={score}
          />
          <PerformanceAnalysis questionStats={history} />
          <div className="feedback">
            {questions.map((q, index) => (
              <p
                key={index}
                className={
                  selectedAnswers[index] === q.answer ? "correct" : "incorrect"
                }
              >
                {index + 1}. {q.question} -{" "}
                {selectedAnswers[index] === q.answer
                  ? "✅ Correct"
                  : `❌ Incorrect (Correct: ${q.answer})`}
              </p>
            ))}
          </div>
          <button
            onClick={() => window.location.reload()}
            className="restart-btn"
          >
            Restart Quiz
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
