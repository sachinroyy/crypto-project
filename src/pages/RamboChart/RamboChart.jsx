/* eslint-disable react/prop-types */
// src/components/RamboChart.jsx
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,  // Import TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import date-fns adapter
import axios from 'axios';

// Register the required components and scales
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale  // Register the TimeScale
);

const RamboChart = ({ crypto }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart`, {
          params: { vs_currency: 'usd', days: 30 },
        });

        const prices = response?.data?.prices || [];

        if (prices.length > 0) {
          const data = prices.map((price) => ({
            x: new Date(price[0]),
            y: price[1],
          }));

          setChartData({
            labels: data.map((point) => point.x),
            datasets: [
              {
                label: `${crypto} Price`,
                data: data.map((point) => point.y),
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                fill: true,
              },
            ],
          });
        } else {
          setError('No price data available');
        }
      } catch (err) {
        setError(err , 'Error fetching chart data');
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [crypto]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-800 text-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Rambo Chart for {crypto}</h2>
      {chartData ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            scales: {
              x: {
                type: 'time', // Use the registered time scale
                time: {
                  unit: 'day', // Define the unit of time
                },
              },
              y: {
                beginAtZero: false,
              },
            },
          }}
        />
      ) : (
        <p>No data available for {crypto}</p>
      )}
    </div>
  );
};

export default RamboChart;
