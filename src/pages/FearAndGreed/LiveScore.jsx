/* eslint-disable react/prop-types */
// import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const LiveScore = ({ score, sentiment }) => {
  // const maxScore = 100; // Max value for the index

  return (
    <div className="w-fit p-4 text-center m-auto">
      {/* <h2 className="text-xl font-bold text-white">Live Fear and Greed Score</h2> */}

      {/* Display the score and sentiment */}
      <div className="flex items-center justify-center mt-4">
        {/* <div className="text-6xl font-bold text-yellow-500">{score}</div> */}
        <div className="ml-4 text-xl text-yellow-600 font-bold">{sentiment}</div>
      </div>

      {/* Speedometer Gauge for Fear and Greed */}
      <div className="mt-8 flex justify-center flex-col">
        <ReactSpeedometer
          maxValue={100}
          minValue={0}
          value={score}
          needleColor="gray"
          startColor="red"
          segments={10}
          endColor="green"
          needleTransition="easeQuadIn"
          currentValueText="Current Index: ${value}"
          needleTransitionDuration={2000}
          height={180}
        />

        {/* <h2 className="text-[2rem] mt-[2rem]">Fear and Greed Index</h2> */}
      </div>
    </div>
  );
};

export default LiveScore;
