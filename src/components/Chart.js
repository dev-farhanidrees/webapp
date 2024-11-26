import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Chart = ({ data }) => {
  // Chart data structure
  const chartData = {
    labels: data.map((item) => item.name), // All country names
    datasets: [
      {
        label: "Population",
        data: data.map((item) => item.population), // All populations
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Bar colors
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart configuration options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow dynamic height adjustment
    scales: {
      x: {
        title: {
          display: true,
          text: "Countries",
          font: {
            size: 14,
          },
        },
        ticks: {
          font: {
            size: 10,
          },
          maxRotation: 45, // Rotate labels for readability
          minRotation: 45,
        },
        grid: {
          display: false, // Hide vertical grid lines
        },
        barPercentage: 0.5, // Narrower bars
        categoryPercentage: 0.5, // Reduce space between bars
      },
      y: {
        title: {
          display: true,
          text: "Population",
          font: {
            size: 14,
          },
        },
        ticks: {
          beginAtZero: true,
          font: {
            size: 12,
          },
        },
        grid: {
          display: true, // Show horizontal grid lines
          color: "rgba(200, 200, 200, 0.2)", // Light grid color
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) =>
            `${context.raw.toLocaleString()} people`, // Format numbers
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-scroll">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Chart;
