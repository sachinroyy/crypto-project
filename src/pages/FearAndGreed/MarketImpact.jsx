// src/components/MarketImpact.jsx
// import React from 'react';

const MarketImpact = () => {
  return (
    <div className="bg-black p-4 shadow-md rounded-lg mt-8">
      <h2 className="text-xl font-bold text-white">
        How Fear and Greed Affect the Market
      </h2>
      <p className="mt-4 text-gray-400">
        Extreme fear in the market often signals that many investors are selling
        due to uncertainty, which can lead to lower prices. This creates
        potential buying opportunities for those who take a long-term view.
        Conversely, when the market is driven by greed, investors may be overly
        optimistic, pushing prices higher than the asset’s true value. This can
        lead to sudden corrections as the market readjusts. Understanding these
        emotional cycles can help you make more informed decisions, avoiding
        panic-selling during fearful times or buying into market hype during
        periods of greed.
      </p>
    </div>
  );
};

export default MarketImpact;
