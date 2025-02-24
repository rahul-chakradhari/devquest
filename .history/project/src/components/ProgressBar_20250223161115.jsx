import React from "react";

const PerformanceAnalysis = ({ questionStats = {} }) => {
  // Ensure questionStats is not null or undefined
  if (!questionStats || Object.keys(questionStats).length === 0) {
    return <p className="text-red-600">No data available for analysis.</p>;
  }

  // Convert questionStats object into an array of [operation, count]
  const operationCounts = Object.entries(questionStats);

  // Finding max & min attempted operations
  const maxCount = Math.max(...Object.values(questionStats));
  const minCount = Math.min(...Object.values(questionStats));

  // Identify strengths (most attempted) and weaknesses (least attempted)
  const strengths = operationCounts
    .filter(([_, count]) => count === maxCount)
    .map(([operation]) => operation);

  const weaknesses = operationCounts
    .filter(([_, count]) => count === minCount)
    .map(([operation]) => operation);

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
    </div>
  );
};

export default PerformanceAnalysis;
