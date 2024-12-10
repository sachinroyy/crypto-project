import { useState, useEffect } from 'react';
import Dropdowns from '../../components/header/Dropdowns';

// Helper function to format numbers
const formatNumber = (num) => {
  if (num >= 1e12) return `${(num / 1e12).toFixed(2)}T`; // Trillions
  if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`; // Billions
  if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`; // Millions
  return num.toLocaleString(); // Less than a million
};

const AllTokens = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    fetch(
      // 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1'
       "https://crypto-venture-backend.onrender.com/api/tokens"
    )
      .then((response) => response.json())
      .then((data) => setTokens(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 bg-black">
      <Dropdowns />
      <h2 className="text-2xl font-bold mb-4 text-white">All Tokens</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left text-gray-700">#</th>
              <th className="py-2 px-4 text-left text-gray-700">Name</th>
              <th className="py-2 px-4 text-right text-gray-700">Price</th>
              <th className="py-2 px-4 text-right text-gray-700">Chg (24H)</th>
              <th className="py-2 px-4 text-right text-gray-700">Market Cap</th>
              <th className="py-2 px-4 text-right text-gray-700">Volume (24H)</th>
              <th className="py-2 px-4 text-right text-gray-700">Circulating Supply</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {tokens.map((token, index) => (
              <tr key={token.id} className="border-t">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4 flex items-center">
                  <img
                    src={token.image}
                    alt={token.name}
                    className="w-6 h-6 mr-2"
                  />
                  {token.name}
                </td>
                <td className="py-2 px-4 text-right">
                  ${token.current_price.toLocaleString()}
                </td>
                <td
                  className={`py-2 px-4 text-right ${
                    token.price_change_percentage_24h < 0
                      ? 'text-red-500'
                      : 'text-green-500'
                  }`}
                >
                  {token.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="py-2 px-4 text-right">
                  ${formatNumber(token.market_cap)}
                </td>
                <td className="py-2 px-4 text-right">
                  ${formatNumber(token.total_volume)}
                </td>
                <td className="py-2 px-4 text-right">
                  {formatNumber(token.circulating_supply)} {token.symbol.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTokens;
