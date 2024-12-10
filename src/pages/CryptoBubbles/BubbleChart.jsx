/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const BubbleChart = ({ cryptoData }) => {
  // Generate bubble size based on price change
  const getBubbleSize = (priceChange) => {
    return Math.max(70, Math.abs(priceChange * 10)); // Scale size to make it visually distinct
  };

  // Generate random x, y for movement
  const getRandomMovement = () => {
    const randomX = Math.floor(Math.random() * 100) - 50; // Random value between -50 and 50
    const randomY = Math.floor(Math.random() * 100) - 50; // Random value between -50 and 50
    return { x: randomX, y: randomY };
  };

  useEffect(() => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble) => {
      const { x, y } = getRandomMovement();
      // Set custom properties for each bubble to animate randomly
      bubble.style.setProperty('--x', `${x}px`);
      bubble.style.setProperty('--y', `${y}px`);
    });
  }, [cryptoData]); // Re-run whenever cryptoData changes

  return (
    <div className="flex flex-wrap justify-center">
      {cryptoData.map((crypto) => {
        const priceChange = crypto.price_change_percentage_24h;
        const bubbleSize = getBubbleSize(priceChange);
        const bubbleStyle = {
          width: `${bubbleSize}px`,
          height: `${bubbleSize}px`,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: priceChange > 0 ? "#39ff14" : "#ff073a", // neon green or neon red
          boxShadow:
            priceChange > 0
              ? `rgb(57, 255, 20) 0px 0px 10px inset, rgb(57, 255, 20) 0px 0px 20px inset, rgb(57, 255, 20) 0px 0px 40px inset` // neon green glow
              : `rgb(255, 7, 58) 0px 0px 10px inset, rgb(255, 7, 58) 0px 0px 20px inset, rgb(255, 7, 58) 0px 0px 40px inset`, // neon red glow
          animation: `randomMove 5s infinite alternate`, // Animation for random movement
          position: "relative",
        };

        return (
          <div
            key={crypto.id}
            className="bubble m-2 flex flex-col items-center justify-center"
            style={bubbleStyle}
          >
            <span className="text-[10px] font-bold">
              {crypto.symbol.toUpperCase()}
            </span>
            <span className="text-xs">
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BubbleChart;
