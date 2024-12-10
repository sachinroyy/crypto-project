/* eslint-disable react/prop-types */
// import React from "react";
import BillionaireCard from "./BillionaireCard";

const BillionaireSlider = ({ data, currentIndex }) => {
  return (
    <>
    <div className="hidden w-full px-[4rem] py-[2rem] mx-auto overflow-x-scroll scrollbar-hide mg:flex gap-8">
      {data.map((billionaire, index) => (
        <BillionaireCard
          key={billionaire.id}
          billionaire={billionaire}
          isFeatured={false} // Slider cards never show description
          isHighlighted={index === currentIndex}
        />
      ))}
    </div>

    <div className="w-full py-[2rem] px-[1rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2rem] mg:hidden gap-8">
      {data.map((billionaire, index) => (
        <BillionaireCard
          key={billionaire.id}
          billionaire={billionaire}
          isFeatured={false} // Slider cards never show description
          isHighlighted={index === currentIndex}
        />
      ))}
    </div>

    </>
  );
};

export default BillionaireSlider;
