// src/components/UserPoll.jsx
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserPoll = () => {
  const [vote, setVote] = useState(null);
  
  // Dummy data for the poll results (can be fetched from an API in a real-world scenario)
  const dummyData = {
    fear: 45, // percentage of users who voted "Fear"
    greed: 55, // percentage of users who voted "Greed"
  };

  const handleVote = (option) => {
    setVote(option);
  };

  // Chart.js data structure
  const chartData = {
    labels: ['Fear', 'Greed'], // Labels for the bar categories
    datasets: [
      {
        label: 'Market Sentiment Votes',
        data: [dummyData.fear, dummyData.greed], // The values for fear and greed
        backgroundColor: ['#f87171', '#4ade80'], // Red for Fear, Green for Greed
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Assuming percentages, set the max to 100
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend since we only have one dataset
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 shadow-md rounded-lg mt-8">
      <h2 className="text-xl font-bold text-white">What’s your market sentiment?</h2>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => handleVote('fear')}
          className={`px-4 py-2 ${vote === 'fear' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        >
          Fear
        </button>
        <button
          onClick={() => handleVote('greed')}
          className={`px-4 py-2 ${vote === 'greed' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          Greed
        </button>
      </div>

      {vote && (
        <>
          <p className="mt-4 text-white">You voted for: {vote}</p>

          {/* Bar chart showing dummy vote distribution */}
          <div className="mt-8">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </>
      )}
    </div>
  );
};

export default UserPoll;
