// src/components/MetricsExplanation.jsx
// import React from 'react';

const MetricsExplanation = () => {
  const metrics = [
    {
      name: "Volatility",
      description:
        "Volatility refers to the extent of price fluctuations within a given period. High volatility often reflects heightened fear in the market as prices move unpredictably. A significant swing in cryptocurrency prices, either upward or downward, can cause emotional reactions in investors. When volatility is high, it often indicates that traders are nervous and less confident in market stability, which may result in higher levels of fear. In contrast, lower volatility may suggest more stability and less fear.",
    },
    {
      name: "Market Momentum",
      description:
        "Market momentum tracks the volume and velocity of buying and selling activities across the cryptocurrency market. A strong upward momentum, characterized by increased buying volume, is often a signal of greed, as investors are optimistic and rush to buy assets. Conversely, decreasing momentum or selling pressure signifies fear, as investors are pulling out of the market due to pessimistic outlooks. Monitoring momentum helps identify whether the market is likely to continue in a bullish (greed-driven) or bearish (fear-driven) direction.",
    },
    {
      name: "Social Media",
      description:
        "Social media plays a crucial role in shaping sentiment in the cryptocurrency space. This metric analyzes conversations, mentions, and overall sentiment across platforms like Twitter, Reddit, and specialized crypto forums. A spike in positive mentions and discussions often aligns with increased greed, while fear can be seen when there is a rise in negative sentiments or panic-driven posts. Trends in social media engagement offer real-time insights into the collective mood of the market.",
    },
    {
      name: "Bitcoin Dominance",
      description:
        "Bitcoin dominance measures the share of Bitcoin's market capitalization relative to the entire cryptocurrency market. When Bitcoin’s dominance increases, it typically signals fear in the market, as investors flock to what is perceived as a safer, more stable asset during turbulent times. On the other hand, when Bitcoin dominance decreases and investors turn to altcoins, it often signals rising greed, as they seek higher returns through riskier investments.",
    },
    {
      name: "Google Trends",
      description:
        "Google Trends tracks the volume of search queries related to cryptocurrencies, particularly Bitcoin and other major assets. Increased search interest in crypto-related terms usually corresponds with rising market sentiment, which can indicate either fear or greed. For example, a spike in searches for “Bitcoin price crash” could indicate fear, whereas “how to buy Bitcoin” searches could signal growing greed. This metric helps gauge the public’s awareness and interest in the crypto market.",
    },
  ];

  return (
    <div className="bg-black p-4 shadow-md rounded-lg mt-8">
      <h2 className="text-xl font-bold text-white">
        Components of the Fear and Greed Index
      </h2>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <li key={metric.name} className="flex flex-col items-start">
            <span className="font-bold text-lg text-white underline">{metric.name}</span>
            <p className="text-gray-400 mt-2">{metric.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetricsExplanation;
