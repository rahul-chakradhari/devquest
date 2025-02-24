import React from "react";

const ProgressBar = ({
  answeredQuestions,
  totalQuestions,
  correctCount,
  previousCorrect,
}) => {
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;
  const changeInCorrect =
    previousCorrect !== null && correctCount !== null
      ? correctCount - previousCorrect
      : 0;

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
