import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PerformanceAnalysis = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const correctAnswers = location.state?.correctAnswers || [];

  // Define question categories
  const questionCategories = {
    Addition: [1, 3, 6, 8, 9],
    Subtraction: [2, 5, 8],
    Multiplication: [6, 10],
    Division: [4, 7, 9],
  };

  let questionStats = {
    Addition: 0,
    Subtraction: 0,
    Multiplication: 0,
    Division: 0,
  };

  // Count correct answers in each category
  correctAnswers.forEach((q) => {
    for (let category in questionCategories) {
      if (questionCategories[category].includes(q)) {
        questionStats[category]++;
      }
    }
  });

  // Convert to array for processing
  const operationCounts = Object.entries(questionStats);

  // Finding max & min attempted operations
  const maxCount = Math.max(...Object.values(questionStats));

  // Identify strengths
  const strengths = operationCounts
    .filter(([_, count]) => count === maxCount && count > 0)
    .map(([operation]) => operation);

  // Identify weaknesses (All categories not in strengths)
  const allCategories = Object.keys(questionCategories);
  const weaknesses = allCategories.filter(
    (category) => !strengths.includes(category)
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Final Score Summary</h2>

      <h3 className="mt-4 font-semibold text-green-600">Strengths</h3>
      <ul>
        {strengths.length > 0 ? (
          strengths.map((s, index) => <li key={index}>✅ {s}</li>)
        ) : (
          <li>None</li>
        )}
      </ul>

      <h3 className="mt-4 font-semibold text-red-600">Weaknesses</h3>
      <ul>
        {weaknesses.length > 0 ? (
          weaknesses.map((w, index) => <li key={index}>❌ {w}</li>)
        ) : (
          <li>None</li>
        )}
      </ul>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate("/quiz")}
      >
        Try Again
      </button>
    </div>
  );
};

export default PerformanceAnalysis;
