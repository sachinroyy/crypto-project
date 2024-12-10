import { useState, useEffect } from "react";
import data from "./BillionaireData";
import BillionaireSlider from "./BillionaireSlider";
import BillionaireCard from "./BillionaireCard";
import "./Billionaire.css";

const Billionaire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState(data);

  // console.log(data);

  // Auto-slide the main card every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle the next card transition
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % sliderData.length;
    setCurrentIndex(nextIndex);

    // Rotate the slider data cyclically
    setSliderData((prevData) => {
      const firstItem = prevData.shift();
      return [...prevData, firstItem];
    });
  };

  return (
    <div className="blogListingBgnew relative w-full py-[4rem] flex flex-col items-center justify-center">
      {/* <h2 className="text-white text-[25px] sm:text-[2rem] font-bold font-sans mb-[4rem]">
        The Titans of <span className="text-yellow-600 capitalize">Crypto</span>{" "}
        : 10 Billionaires Shaping the Digital Future
      </h2> */}
      <div className="flex flex-col mg:flex-row-reverse ">

        <h2 className="text-white text-[32px] mg:text-[64px] font-bold leading-[35px] mg:leading-[72px] font-sans mb-[4rem]">
          {/* Crypto Billionaire Club: Top 10{" "}
        <span className="text-yellow-600 capitalize">Crypto</span> Billionaires
        worldwide */}
          Top 10 Crypto <br />
          Billionaires worldwide.
        </h2>

        {/* Featured Card Above the Slider */}
        {/* <div className="mb-10 w-full">
          <BillionaireCard billionaire={sliderData[currentIndex]} isFeatured />
        </div> */}


      </div>

      {/* Horizontal Auto-Sliding Slider */}
      <BillionaireSlider data={sliderData} currentIndex={currentIndex} />
    </div>
  );
};

export default Billionaire;
