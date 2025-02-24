import React from "react";

const PerformanceAnalysis = ({ questionStats }) => {
  if (!questionStats || Object.keys(questionStats).length === 0) {
    return <p>No data available for analysis.</p>;
  }

  // Convert questionStats object into an array of { operation, correct, incorrect, total, accuracy }
  const operationAnalysis = Object.entries(questionStats).map(
    ([operation, stats]) => ({
      operation,
      correct: stats.correct || 0,
      incorrect: stats.incorrect || 0,
      total: (stats.correct || 0) + (stats.incorrect || 0),
      accuracy: stats.correct
        ? Math.round(
            (stats.correct / ((stats.correct || 0) + (stats.incorrect || 0))) *
              100
          )
        : 0,
    })
  );

  // Finding strengths & weaknesses based on accuracy
  const maxAccuracy = Math.max(...operationAnalysis.map((op) => op.accuracy));
  const minAccuracy = Math.min(...operationAnalysis.map((op) => op.accuracy));

  const strengths = operationAnalysis
    .filter((op) => op.accuracy === maxAccuracy)
    .map((op) => `${op.operation} (Accuracy: ${op.accuracy}%)`);

  const weaknesses = operationAnalysis
    .filter((op) => op.accuracy === minAccuracy)
    .map((op) => `${op.operation} (Accuracy: ${op.accuracy}%)`);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">📊 Performance Analysis</h2>

      <h3 className="mt-4 font-semibold text-green-600">✅ Strengths</h3>
      <ul>
        {strengths.length > 0 ? (
          strengths.map((s, index) => <li key={index}>✅ {s}</li>)
        ) : (
          <li>No strengths identified.</li>
        )}
      </ul>

      <h3 className="mt-4 font-semibold text-red-600">❌ Weaknesses</h3>
      <ul>
        {weaknesses.length > 0 ? (
          weaknesses.map((w, index) => <li key={index}>❌ {w}</li>)
        ) : (
          <li>No weaknesses identified.</li>
        )}
      </ul>

      <h3 className="mt-4 font-semibold text-blue-600">📈 Accuracy Report</h3>
      <ul>
        {operationAnalysis.map((op, index) => (
          <li key={index}>
            🔹 {op.operation}: {op.correct}/{op.total} correct ({op.accuracy}%)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceAnalysis;
