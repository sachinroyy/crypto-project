/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const BannerMain = ({setShowPopup , showPopup}) => {
  // State for managing popup visibility
//   const [showPopup, setShowPopup] = useState(false);

  // State for managing the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of tiger images
  const tigerImages = [
    "https://image.cnbcfm.com/api/v1/image/106928219-1629130755312-gettyimages-1234311531-sindeyev-notitle210729_np12K.jpeg?v=1709840389&w=1858&h=1045&vtcrop=y", // Placeholder with a tiger-like kitten
    "https://www.investopedia.com/thmb/jfOCxEqNsd2QxvgOFbd_Dsp0PvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cryptocurrency-f6026a2012a14aaa9ef8a1c277fde0f7.jpg", // Tiger in the wild
    "https://cdn.prod.website-files.com/634054c00f602044abb3060d/63b7341cb1f6a6a8fae62bc5_best-crypto-indicators-for-trading-analysis.png", // Tiger resting
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRC533oMWubtUuH74AU_P1pPvZMX2nyVmn_A&s", // Close-up of tiger face
  ];

  // Show popup on window load if it's not already shown (check sessionStorage)
  useEffect(() => {
    const isPopupShown = sessionStorage.getItem("popupShown");

    if (!isPopupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true"); // Store that the popup has been shown
      }, 0); // Show popup immediately

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, []);

  // Automatically slide the tiger images every 4 seconds
  useEffect(() => {
    if (showPopup) {
      const slideInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % tigerImages.length);
      }, 4000); // 4 seconds

      return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }
  }, [showPopup]);

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Popup Window */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg mx-auto p-6">
            {/* Tiger Image Slider */}
            <img
              src={tigerImages[currentImageIndex]} // Dynamic image based on index
              alt="Tiger"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-center mb-4">Welcome!</h2>
            <p className="text-center text-gray-700">
              Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network.
            </p>
            <button
              onClick={closePopup}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mx-auto block"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerMain;