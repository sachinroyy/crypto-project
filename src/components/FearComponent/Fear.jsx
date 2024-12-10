// import axios from "axios";
// import { useEffect, useState } from "react";
// import LiveScore from "../../pages/FearAndGreed/LiveScore";
// import "./Fear.css";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

// const CACHE_KEY = "marketDataCache";
// const CACHE_EXPIRY_KEY = "marketDataCacheExpiry";
// const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

// const Fear = () => {
//   const [indexData, setIndexData] = useState(null);
//   const [marketData, setMarketData] = useState(null);
//   const [cryptoIcons, setCryptoIcons] = useState({});

//   const formatNumber = (number) => {
//     if (number >= 1_000_000_000_000) {
//       return (number / 1_000_000_000_000).toFixed(1) + "T";
//     } else if (number >= 1_000_000_000) {
//       return (number / 1_000_000_000).toFixed(1) + "B";
//     } else if (number >= 1_000_000) {
//       return (number / 1_000_000).toFixed(1) + "M";
//     }
//     return number.toLocaleString();
//   };

//   const isCacheExpired = () => {
//     const expiryTime = localStorage.getItem(CACHE_EXPIRY_KEY);
//     return !expiryTime || Date.now() > parseInt(expiryTime, 10);
//   };

//   useEffect(() => {
//     const fetchIndexData = async () => {
//       try {
//         const response = await axios.get("https://api.alternative.me/fng/");
//         setIndexData(response.data.data[0]);
//       } catch (error) {
//         console.error("Error fetching the Fear and Greed Index:", error);
//       }
//     };

//     const loadCachedMarketData = () => {
//       const cachedData = localStorage.getItem(CACHE_KEY);
//       if (cachedData && !isCacheExpired()) {
//         const { marketData, cryptoIcons } = JSON.parse(cachedData);
//         setMarketData(marketData);
//         setCryptoIcons(cryptoIcons);
//         return true;
//       }
//       return false;
//     };

//     const fetchMarketData = async () => {
//       try {
//         const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
//           params: {
//             vs_currency: "usd",
//             order: "market_cap_desc",
//             per_page: 50,
//             page: 1,
//           },
//         });

//         const coins = response.data;
//         console.log(response)
//         const totalMarketCap = coins.reduce((acc, coin) => acc + coin.market_cap, 0);

//         const topTwoCoins = coins.slice(0, 2).map((coin) => ({
//           name: coin.name,
//           symbol: coin.symbol,
//           market_cap: coin.market_cap,
//           dominance: ((coin.market_cap / totalMarketCap) * 100).toFixed(2),
//           icon: coin.image, // Assume icon URL is included in the response as coin.image
//         }));

//         const newMarketData = {
//           totalMarketCap,
//           volume24h: coins.reduce((acc, coin) => acc + coin.total_volume, 0),
//           topTwoDominance: topTwoCoins,
//         };

//         const icons = topTwoCoins.reduce((acc, coin) => {
//           acc[coin.name.toLowerCase()] = coin.icon;
//           return acc;
//         }, {});

//         localStorage.setItem(CACHE_KEY, JSON.stringify({ marketData: newMarketData, cryptoIcons: icons }));
//         localStorage.setItem(CACHE_EXPIRY_KEY, Date.now() + CACHE_DURATION);

//         setMarketData(newMarketData);
//         setCryptoIcons(icons);
//       } catch (error) {
//         console.error("Error fetching market data:", error);
//       }
//     };

//     fetchIndexData();

//     if (!loadCachedMarketData()) {
//       fetchMarketData();
//     }
//   }, []);

//   console.log(marketData)

//   return (
//     <div className="flex flex-row gap-[1rem] my-[4rem] mx-[4rem]">
//       <div className="data_cards2">
//         {indexData && (
//           <LiveScore
//             score={40}
//             sentiment={indexData.value_classification}
//           />
//         )}
//       </div>

//       <div>
//         <div className="data_cards">
//           <h2 className="text-xl font-semibold">
//             Market Cap
//             <br />$
//             {marketData
//               ? formatNumber(marketData.totalMarketCap)
//               : "Loading..."}
//           </h2>
//         </div>

//         <div className="data_cards">
//           <h2 className="text-xl font-semibold">
//             Volume
//             <br />
//             $ {marketData ? formatNumber(marketData.volume24h) : "Loading..."}
//           </h2>
//         </div>

//         <div className="data_cards">
//           <h2 className="text-xl font-semibold">Dominance</h2>
//           {marketData && marketData.topTwoDominance ? (
//             <ul className="mt-2">
//               {marketData.topTwoDominance.map((coin) => (
//                 <li key={coin.name} className="text-lg flex items-center font-bold mt-[5px]">
//                   {cryptoIcons[coin.name.toLowerCase()] ? (
//                     <img
//                       src={cryptoIcons[coin.name.toLowerCase()]}
//                       alt={`${coin.name} icon`}
//                       className="w-[30px] h-[30px] mr-2"
//                     />
//                   ) : (
//                     <span className="mr-2">🔄</span> // Placeholder if icon missing
//                   )}
//                   {/* {coin.name}: {coin.dominance}% */}
//                    {coin.dominance}%
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fear;

import LiveScore from "../../pages/FearAndGreed/LiveScore";
import { useEffect, useState } from "react";
import GreedIcon from "../../assets/GreedGreenIcon.png";
import FearIcon from "../../assets/FearRedIcon.png";
import './Fear.css'

const CACHE_KEY = "marketDataCache";
const CACHE_EXPIRY_KEY = "marketDataCacheExpiry";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const Fear = () => {
  const [marketStatus, setMarketStatus] = useState(null); // "Greed" or "Fear"
  const [value, setValue] = useState(null); // Numeric value from API
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state
  const [completeData, setCompleteData] = useState();
  const [marketData, setMarketData] = useState(null); // Market data for total market cap and dominance
  const [cryptoIcons, setCryptoIcons] = useState({});

  // Helper to format numbers
  const formatNumber = (number) => {
    if (number >= 1_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(1) + "T";
    } else if (number >= 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(1) + "B";
    } else if (number >= 1_000_000) {
      return (number / 1_000_000).toFixed(1) + "M";
    }
    return number.toLocaleString();
  };

  // Check if cache is expired
  const isCacheExpired = () => {
    const expiryTime = localStorage.getItem(CACHE_EXPIRY_KEY);
    return !expiryTime || Date.now() > parseInt(expiryTime, 10);
  };

  // Fetch data for Fear and Greed index
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.alternative.me/fng/");
        const data = await response.json();
        setCompleteData(data);
        const numericValue = parseInt(data.data[0].value, 10);
        setValue(numericValue);
        setMarketStatus(numericValue > 50 ? "greed" : "fear");
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch market data (total market cap and dominance)
  useEffect(() => {
    const loadCachedMarketData = () => {
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData && !isCacheExpired()) {
        const { marketData, cryptoIcons } = JSON.parse(cachedData);
        setMarketData(marketData);
        setCryptoIcons(cryptoIcons);
        return true;
      }
      return false;
    };

    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1"
        );
        const coins = await response.json();

        const totalMarketCap = coins.reduce(
          (acc, coin) => acc + coin.market_cap,
          0
        );
        const topTwoCoins = coins.slice(0, 2).map((coin) => ({
          name: coin.name,
          symbol: coin.symbol,
          market_cap: coin.market_cap,
          dominance: ((coin.market_cap / totalMarketCap) * 100).toFixed(2),
          icon: coin.image,
        }));

        const newMarketData = {
          totalMarketCap,
          topTwoDominance: topTwoCoins,
        };

        const icons = topTwoCoins.reduce((acc, coin) => {
          acc[coin.name.toLowerCase()] = coin.icon;
          return acc;
        }, {});

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ marketData: newMarketData, cryptoIcons: icons })
        );
        localStorage.setItem(CACHE_EXPIRY_KEY, Date.now() + CACHE_DURATION);

        setMarketData(newMarketData);
        setCryptoIcons(icons);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    if (!loadCachedMarketData()) {
      fetchMarketData();
    }
  }, []);

  // Determine if it's extreme greed/fear based on the value
  const isExtreme = () => {
    if (value > 75) return "extreme greed";
    if (value < 25) return "extreme fear";
    return null;
  };

  const extremeStatus = isExtreme();

  // Styles for hover text
  const hoverTextStyles = `
    absolute top-[-15px] left-1/2 transform -translate-x-1/2 -translate-y-full text-center font-bold text-[12px]
  `;

  return (
    <div className="fixed top-[50%] left-4 z-[9999] bg-white rounded-[50%] p-[10px]">
      {marketStatus && value !== null && (
        <div className="relative group">
          <img
            src={marketStatus === "greed" ? GreedIcon : FearIcon}
            alt={marketStatus}
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          />

          <div
            className={`${hoverTextStyles} ${
              marketStatus === "greed" ? "text-green-500" : "text-red-500"
            } hidden group-hover:block`}
          >
            {(extremeStatus || marketStatus).toUpperCase().split("").join("\n")}
          </div>
        </div>
      )}

      {/* Drawer */}


      <div
        className={`fixed top-0 left-0 h-screen w-full max-w-[400px] bg-gradient-to-b from-white to-gray-100 shadow-2xl z-[99] transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          {/* Close Button */}
          <button
            className="self-end mb-4 text-red-500 hover:text-red-700 transition-colors"
            onClick={() => setIsDrawerOpen(false)}
          >
            ✕
          </button>

          {/* Live Score Section */}
          {value && (
            <div className="mb-6 rounded-xl cardBoxShadow bg-white text-center">
              <LiveScore
                score={value}
                sentiment={completeData.data[0].value_classification}
              />
            </div>
          )}

          {/* Market Data Section */}
          {marketData && (
            <div className="space-y-6">
              {/* Market Cap */}
              <div className="p-4 rounded-xl cardBoxShadow bg-white">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Total Market Cap
                </h2>
                <p className="text-2xl font-bold text-gray-900">
                  ${formatNumber(marketData.totalMarketCap)}
                </p>
              </div>

              {/* Dominance Section */}
              <div className="p-4 rounded-xl cardBoxShadow bg-white">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Dominance
                </h2>
                <ul className="space-y-4">
                  {marketData.topTwoDominance.map((coin) => (
                    <li
                      key={coin.name}
                      className="flex items-center justify-between text-gray-700"
                    >
                      <div className="flex items-center text-black">
                        <img
                          src={cryptoIcons[coin.name.toLowerCase()]}
                          alt={`${coin.name} icon`}
                          className="w-10 h-10 mr-3 rounded-full border border-gray-300"
                        />
                        <p className="font-medium">{coin.name}</p>
                      </div>
                      <p className="font-bold text-gray-900">
                        {coin.dominance}%
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fear;
