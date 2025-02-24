import React from "react";

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="my-3">
      {/* Progress Info */}
      <p className="text-center text-primary">
        Progress: {currentQuestion + 1} / {totalQuestions} Questions
      </p>

      {/* Progress Bar */}
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {Math.round(progressPercentage)}%
        </div>
      </div>

      {/* Feedback Message */}
      <p className="text-center mt-2 font-weight-bold">
        {progressPercentage === 100
          ? "🎉 Quiz Completed! Well Done!"
          : "Keep Going! 🚀"}
      </p>
    </div>
  );
};

export default ProgressBar;
