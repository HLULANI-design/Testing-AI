import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";
Chart.register(BarElement, CategoryScale, LinearScale);

const StatusChart = ({ runs }) => {
  const data = {
    labels: ["Passed", "Failed", "Running"],
    datasets: [
      {
        label: "Runs",
        data: [
          runs.filter(r => r.status === "PASSED").length,
          runs.filter(r => r.status === "FAILED").length,
          runs.filter(r => r.status === "RUNNING").length,
        ],
        backgroundColor: ["#198754", "#dc3545", "#ffc107"],
      },
    ],
  };
  return <Bar data={data} />;
};

export default StatusChart;