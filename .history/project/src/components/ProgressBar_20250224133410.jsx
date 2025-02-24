import React, { useState } from "react";

const ProgressBar = ({
  answeredQuestions,
  totalQuestions,
  correctCount,
  previousCorrect,
  showFinalResult,
  correctHistory,
}) => {
  const [showHistory, setShowHistory] = useState(false);

  const progressPercentage = (answeredQuestions / totalQuestions) * 100;
  const changeInCorrect =
    previousCorrect !== null && correctCount !== null
      ? correctCount - previousCorrect
      : 0;

  return (
    <div className="progress-container mb-3">
      <div
        className="progress"
        onClick={() => setShowHistory(!showHistory)}
        style={{ cursor: "pointer" }}
      >
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
        >
          {answeredQuestions} / {totalQuestions} Answered
        </div>
      </div>

      {/* ✅ Show correct answers only when quiz is completed */}
      {showFinalResult && (
        <h5 className="text-primary mt-2">
          ✅ Correct Answers: {correctCount} / {totalQuestions}
        </h5>
      )}

      {/* ✅ Show previous history on click */}
      {showHistory && correctHistory.length > 0 && (
        <div className="history mt-2">
          <h6 className="text-info">📜 Previous Scores:</h6>
          <ul>
            {correctHistory.map((score, index) => (
              <li key={index} className="text-success">
                Attempt {index + 1}: {score} / {totalQuestions}
              </li>
            ))}
          </ul>
        </div>
      )}

      {answeredQuestions > 0 && changeInCorrect !== 0 && (
        <h6 className={changeInCorrect > 0 ? "text-success" : "text-danger"}>
          {changeInCorrect > 0
            ? `⬆️ +${changeInCorrect} improvement`
            : `⬇️ ${changeInCorrect} decrease`}
        </h6>
      )}
    </div>
  );
};

export default ProgressBar;
