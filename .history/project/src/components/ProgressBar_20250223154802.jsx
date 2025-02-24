import React from "react";

const ProgressBar = ({ answeredQuestions, totalQuestions }) => {
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  // Dynamic Feedback
  let feedbackMessage = "Keep Going! 🚀";
  if (progressPercentage === 100) {
    feedbackMessage = "🎉 Quiz Completed! Well Done!";
  } else if (progressPercentage >= 50) {
    feedbackMessage = "Halfway There! Keep It Up! 💪";
  }

  return (
    <div className="my-3">
      {/* Progress Info */}
      <p className="text-center text-primary">
        Submitted: {answeredQuestions} / {totalQuestions} Questions
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
      <p className="text-center mt-2 font-weight-bold">{feedbackMessage}</p>
    </div>
  );
};

export default ProgressBar;
