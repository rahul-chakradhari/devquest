import React from "react";

const ProgressBar = ({ answeredQuestions, totalQuestions, correctCount }) => {
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="progress-container mb-3">
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
        >
          {answeredQuestions} / {totalQuestions} Answered
        </div>
      </div>
      <h5 className="text-primary mt-2">
        ✅ Correct Answers: {correctCount} / {answeredQuestions}
      </h5>
    </div>
  );
};

export default ProgressBar;
