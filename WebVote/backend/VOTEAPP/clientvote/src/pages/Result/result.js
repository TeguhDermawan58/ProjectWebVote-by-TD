import React, { useState, useEffect } from "react";
import "./result.css";
import Chart from "chart.js/auto"; // Import Chart.js

function ResultCandidate() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const [candidates, setCandidates] = useState([]);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/vote-results")
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data);
        createChart(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
     
// diagram batang chart 
const createChart = (data) => {
  const ctx = document.getElementById("voteChart").getContext("2d");
  const labels = data.map((candidate) => candidate.name);
  const voteCounts = data.map((candidate) => candidate.voteCount);
  const totalVotes = voteCounts.reduce((total, count) => total + count, 0);

  if (chart) {
    chart.destroy();
  }

  const votePercentages = voteCounts.map((count) => (count / totalVotes) * 100);

  const newChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Vote Percentage",
          data: votePercentages,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100, // Set maximum value to 100 for percentage
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => {
              const value = context.parsed.y;
              return value.toFixed(2) + "%";
            },
          },
        },
      },
    },
  });

  setChart(newChart);
};

// ...
  }, []);

  return (
    <>
    {isAuthenticated &&(
      <div className="result-container">
      <h2>Hasil Voting</h2>
      <canvas id="voteChart" width="400" height="200"></canvas>
      <ul className="candidate-list">
      {candidates.map((candidate) => (
        <li key={candidate.id}>
            <span className="candidate-name">{candidate.name}</span>
            <span className="vote-count">{candidate.voteCount} Votes</span>
          </li>
        ))}
        </ul>
        </div>
        )}
        {!isAuthenticated && <p>Please log in to view this content.</p>}
        </>
        );
      }

export default ResultCandidate;
