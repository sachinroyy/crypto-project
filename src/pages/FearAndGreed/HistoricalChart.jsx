// src/components/HistoricalChart.jsx
// import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoricalChart = () => {
  const data = {
    labels: ['1 week', '2 weeks', '1 month', '3 months', '6 months', '1 year'],
    datasets: [
      {
        label: 'Fear and Greed Index',
        data: [45, 35, 25, 50, 60, 70], // Example data, replace with API data
        borderColor: '#fabc2c',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-gray-800 text-white p-4 shadow-md rounded-lg mt-8">
      <h2 className="text-xl font-bold">Historical Fear and Greed Index</h2>
      <div className="w-full h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default HistoricalChart;
