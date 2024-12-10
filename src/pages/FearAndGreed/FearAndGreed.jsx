/* eslint-disable react/no-unescaped-entities */
// src/components/FearGreedPage.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import LiveScore from "./LiveScore";
import HistoricalChart from "./HistoricalChart";
import MetricsExplanation from "./MetricsExplanation";
import MarketImpact from "./MarketImpact";
import NewsUpdates from "./NewsUpdates";
import UserPoll from "./UserPoll";
import EmailSignUp from "./EmailSignUp";
import Dropdowns from '../../components/header/Dropdowns'

const FearAndGreed = () => {
  const [indexData, setIndexData] = useState(null);

  // Fetch Fear and Greed Index data
  useEffect(() => {
    const fetchIndexData = async () => {
      try {
        const response = await axios.get("https://api.alternative.me/fng/");
        setIndexData(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching the Fear and Greed Index:", error);
      }
    };
    fetchIndexData();
  }, []);

  return (

    <div className="bg-black">
     <Dropdowns />
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-white">Crypto Fear and Greed Index</h1>
      <p className="mb-8 text-gray-400">
        The Crypto Fear and Greed Index is a crucial tool designed to help
        investors understand the current mood of the cryptocurrency market. It
        measures the emotional sentiment of traders and highlights whether the
        market is leaning towards fear or greed. This sentiment can offer
        valuable insights for making informed investment decisions.
      </p>
      <p className="mb-8 text-gray-400">
        When the market is driven by fear, investors may hesitate to invest, and
        prices can drop. Conversely, when the market is fueled by greed, prices
        often rise as traders rush to buy. By paying attention to these signals,
        both beginner and experienced investors can better navigate market
        volatility.
      </p>
      <p className="mb-8 text-gray-400">
        Understanding the market sentiment can also help prevent impulsive
        decisions based solely on emotions. The Fear and Greed Index provides a
        snapshot of how investors feel, which can be particularly useful in the
        unpredictable and fast-moving world of cryptocurrency.
      </p>
      <p className="mb-8 text-gray-400">
        Whether you're a long-term holder or a short-term trader, the index
        allows you to see if it's a time of opportunity or caution. During high
        periods of greed, it may be wise to consider selling or holding, while
        periods of extreme fear could represent a good buying opportunity.
      </p>
      <p className="mb-8 text-gray-400">
        Overall, the Crypto Fear and Greed Index simplifies complex market
        dynamics, making it easier for everyone, from beginners to seasoned
        investors, to stay informed and make strategic decisions based on actual
        market sentiment instead of speculation.
      </p>

      {indexData && (
        <LiveScore
          score={indexData.value}
          sentiment={indexData.value_classification}
        />
      )}
      <HistoricalChart />
      <MetricsExplanation />
      <MarketImpact />
      <NewsUpdates />
      <UserPoll />
      <EmailSignUp />
    </div>

  </div>
  );
};

export default FearAndGreed;
