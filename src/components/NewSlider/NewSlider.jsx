// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
// } from "chart.js";
// import "./NewSlider.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip
// );

// const Slider = () => {
//   const [tokens, setTokens] = useState([]);

//   const fetchTokens = async () => {
//     const response = await axios.get(
//       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1"
//     );
//     setTokens(response.data);
//   };

//   useEffect(() => {
//     fetchTokens();
//   }, []);

//   const createGraphData = (percentage) => {
//     const points = Array.from({ length: 10 }, () =>
//       percentage >= 0 ? Math.random() * percentage : Math.random() * -percentage
//     );

//     return {
//       labels: Array.from({ length: points.length }, (_, i) => i),
//       datasets: [
//         {
//           data: points,
//           borderColor: percentage >= 0 ? "green" : "red",
//           borderWidth: 1.5,
//           pointRadius: 0,
//           fill: false,
//           tension: 0.3,
//         },
//       ],
//     };
//   };

//   const chartOptions = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         display: false,
//       },
//       y: {
//         display: false,
//       },
//     },
//     elements: {
//       line: {
//         borderJoinStyle: "round",
//       },
//     },
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider">
//         {tokens.map((token, index) => (
//           <div key={index} className="token-card">
//             <div className="flex flex-row">
//               <img src={token.image} alt={token.name} className="token-image" />
//               <div>
//                 <p className="token-name">{token.name}</p>
//                 <p className="token-symbol">{token.symbol.toUpperCase()}</p>
//               </div>
//             </div>

//             <div className="token-info">
//               <p className="token-price">
//                 $USD {token.current_price.toFixed(2)}
//               </p>
//               <p
//                 className={`token-change ${
//                   token.price_change_percentage_24h >= 0
//                     ? "positive"
//                     : "negative"
//                 }`}
//               >
//                 {token.price_change_percentage_24h.toFixed(2)}%
//               </p>
//             </div>

//             <div className="token-graph">
//               <Line
//                 data={createGraphData(token.price_change_percentage_24h)}
//                 options={chartOptions}
//                 width={100}
//                 height={50}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
// } from "chart.js";
// import "./NewSlider.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip
// );

// const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

// const Slider = () => {
//   const [tokens, setTokens] = useState([]);

//   const fetchTokens = async () => {
//     const cachedData = localStorage.getItem("tokensData");
//     const cachedTime = localStorage.getItem("tokensDataTimestamp");

//     // Check if we have cached data and it’s still valid
//     if (cachedData && cachedTime && Date.now() - cachedTime < CACHE_DURATION) {
//       setTokens(JSON.parse(cachedData));
//       return;
//     }

//     try {
//       const response = await axios.get(
//         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1"
//       );
//       setTokens(response.data);
//       // Cache the data and timestamp in local storage
//       localStorage.setItem("tokensData", JSON.stringify(response.data));
//       localStorage.setItem("tokensDataTimestamp", Date.now());
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       // Optional: Show a message to the user if an error occurs
//     }
//   };

//   useEffect(() => {
//     fetchTokens();
//   }, []);

//   const createGraphData = (percentage) => {
//     const points = Array.from({ length: 10 }, () =>
//       percentage >= 0 ? Math.random() * percentage : Math.random() * -percentage
//     );

//     return {
//       labels: Array.from({ length: points.length }, (_, i) => i),
//       datasets: [
//         {
//           data: points,
//           borderColor: percentage >= 0 ? "green" : "red",
//           borderWidth: 1.5,
//           pointRadius: 0,
//           fill: false,
//           tension: 0.3,
//         },
//       ],
//     };
//   };

//   const chartOptions = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         display: false,
//       },
//       y: {
//         display: false,
//       },
//     },
//     elements: {
//       line: {
//         borderJoinStyle: "round",
//       },
//     },
//   };

//   console.log(tokens);
//   return (
//     <div className="slider-container">
//       <div className="slider">
//         {tokens.map((token, index) => (
//           <div key={index} className="token-card">
//             <div className="flex flex-row">
//               <img src={token.image} alt={token.name} className="token-image" />
//               <div>
//                 <p className="token-name">{token.name}</p>
//                 <p className="token-symbol">{token.symbol.toUpperCase()}</p>
//               </div>
//             </div>

//             <div className="token-info">
//               <p className="token-price">$ {token.current_price.toFixed(2)}</p>
//               <p
//                 className={`token-change ${
//                   token.price_change_percentage_24h >= 0
//                     ? "positive"
//                     : "negative"
//                 }`}
//               >
//                 {token.price_change_percentage_24h.toFixed(2)}%
//               </p>
//             </div>

//             <div className="token-graph">
//               <Line
//                 data={createGraphData(token.price_change_percentage_24h)}
//                 options={chartOptions}
//                 width={100}
//                 height={50}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;




import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import "./NewSlider.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

const Slider = () => {
  const [tokens, setTokens] = useState([]);

  const fetchTokens = async () => {
    const cachedData = localStorage.getItem("tokensData");
    const cachedTime = localStorage.getItem("tokensDataTimestamp");

    if (cachedData && cachedTime && Date.now() - cachedTime < CACHE_DURATION) {
      setTokens(JSON.parse(cachedData));
      return;
    }

    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1"
      );
      setTokens(response.data);
      localStorage.setItem("tokensData", JSON.stringify(response.data));
      localStorage.setItem("tokensDataTimestamp", Date.now());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTokens();
  }, []);

  const createGraphData = (percentage) => {
    const points = Array.from({ length: 10 }, () =>
      percentage >= 0 ? Math.random() * percentage : Math.random() * -percentage
    );

    return {
      labels: Array.from({ length: points.length }, (_, i) => i),
      datasets: [
        {
          data: points,
          borderColor: percentage >= 0 ? "green" : "red",
          borderWidth: 1.5,
          pointRadius: 0,
          fill: false,
          tension: 0.3,
        },
      ],
    };
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderJoinStyle: "round",
      },
    },
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {tokens.map((token, index) => (
          <div key={index} className="token-card">
            <div className="flex flex-row">
              <img src={token.image} alt={token.name} className="token-image" />
              <div>
                {/* <p className="token-name">{token.name}</p> */}
                <p className="token-symbol">{token.symbol.toUpperCase()}</p>
              </div>
            </div>

            <div className="token-info">
              <p className="token-price">$ {token.current_price.toFixed(2)}</p>
              <p
                className={`token-change ${
                  token.price_change_percentage_24h >= 0
                    ? "positive"
                    : "negative"
                }`}
              >
                {token.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>

            <div className="token-graph">
              <Line
                data={createGraphData(token.price_change_percentage_24h)}
                options={chartOptions}
                width={100}
                height={50}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
