import { useEffect, useState } from 'react';
import axios from 'axios';
import BubbleChart from './BubbleChart';  // You'll create this

const CryptoBubbles = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [timeframe, setTimeframe] = useState('24h'); // Default to 'Day'

  // Fetching data from CoinGecko API based on the timeframe selected
  const fetchCryptoData = async (timeframe) => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets', 
        {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            price_change_percentage: timeframe,
          },
        }
      );
      setCryptoData(response.data);
    } catch (error) {
      console.error('Error fetching crypto data', error);
    }
  };

  useEffect(() => {
    fetchCryptoData(timeframe);
  }, [timeframe]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold my-6">Crypto Bubbles</h1>

      {/* Timeframe Buttons */}
      <div className="flex space-x-4 mb-8">
        {['1h', '24h', '7d', '30d', '1y'].map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`${
              timeframe === tf ? 'bg-green-500' : 'bg-gray-700'
            } px-4 py-2 rounded-md`}
          >
            {tf === '1h' ? 'Hour' : tf === '24h' ? 'Day' : tf === '7d' ? 'Week' : tf === '30d' ? 'Month' : 'Year'}
          </button>
        ))}
      </div>

      {/* Bubble Chart Component */}
      <BubbleChart cryptoData={cryptoData} />
    </div>
  );
};

export default CryptoBubbles;
