/* eslint-disable react/prop-types */
// src/components/HistoricalTable.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const HistoricalTable = ({ crypto }) => {
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart`,
        {
          params: { vs_currency: "usd", days: 30 },
        }
      );
      setHistoricalData(response.data.prices);
    };
    fetchHistoricalData();
  }, [crypto]);

  // Function to extract only one price per day
  const getDailyData = (data) => {
    const dailyData = [];
    const seenDates = new Set();

    // Filter the data by distinct day (ignoring the time)
    for (const entry of data) {
      const date = new Date(entry[0]);
      const day = date.getUTCDate(); // Get the day of the month
      const month = date.getUTCMonth(); // Get the month (0-based)
      const year = date.getUTCFullYear(); // Get the year

      const formattedDate = `${year}-${month}-${day}`;

      if (!seenDates.has(formattedDate)) {
        seenDates.add(formattedDate);
        dailyData.push(entry); // Push only one entry per distinct day
      }
    }

    return dailyData.slice(-10).reverse(); // Get the last 10 distinct days in descending order
  };

  const last10DaysData = getDailyData(historicalData);

  return (
    <div className="bg-black text-white p-6 shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-white">
        Historical Data for {crypto}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto border-collapse border-2 border-solid border-white">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-600">
                Date
              </th>
              <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-600">
                Price (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            {last10DaysData.map((data, index) => {
              const date = new Date(data[0]);
              const formattedDate = `${
                date.getUTCMonth() + 1
              }/${date.getUTCDate()}/${date.getUTCFullYear()}`; // Format to MM/DD/YYYY

              return (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-black" : "bg-black"
                  } `}
                >
                  <td className="px-6 py-4 text-white">{formattedDate}</td>
                  <td className="px-6 py-4 text-white font-medium">
                    ${data[1].toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoricalTable;
