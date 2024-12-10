import { useState, useEffect } from "react";
import axios from "axios";
import Bg1 from "../../assets/Bg1.jpeg";
import Bg2 from "../../assets/Bg6.jpeg";
import Bg3 from "../../assets/Bg7.jpeg";
import Bg4 from "../../assets/Bg8.jpeg";
import Bg5 from "../../assets/Bg9.jpeg";
import Dropdowns from "../../components/header/Dropdowns";

// Static background images to cycle through (in case the news doesn't provide one)
const backgroundImages = [Bg1, Bg2, Bg3, Bg4, Bg5];

const Slider = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [slide, setSlide] = useState(true);
  const [manualControl, setManualControl] = useState(false);

  // Function to fetch news data from the API
  const fetchCryptoNews = async () => {
    try {
      const response = await axios.get(
        "https://crypto-venture-backend.onrender.com/api/news",
        { params: { q: "crypto currency" } }
      );
      const sortedNews = response.data.articles
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, 15);
      setNewsData(sortedNews);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Fetch news when the component mounts
  useEffect(() => {
    fetchCryptoNews();
  }, []);

  // Handle carousel effect
  useEffect(() => {
    if (manualControl) return;

    const interval = setInterval(() => {
      setFade(false);
      setSlide(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
        setSlide(true);
      }, 500); // Match the animation duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [newsData, manualControl]);

  // Handle dot click to navigate to a specific slide
  const handleDotClick = (index) => {
    setManualControl(true);
    setFade(false);
    setSlide(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
      setSlide(true);
    }, 500);
  };

  // Handle Previous and Next buttons
  const handlePrevious = () => {
    setManualControl(true);
    setFade(false);
    setSlide(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
      );
      setFade(true);
      setSlide(true);
    }, 500);
  };

  const handleNext = () => {
    setManualControl(true);
    setFade(false);
    setSlide(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
      setSlide(true);
    }, 500);
  };

  // Return a loading state if the news data isn't ready yet
  if (newsData.length === 0) {
    return <div>Loading...</div>;
  }

  // Get current news and background image
  const currentNews = newsData[currentIndex];
  const backgroundImage =
    backgroundImages[currentIndex % backgroundImages.length];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background transition effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Dropdowns />

      {/* News Content with Slide-in Animation */}
      <div className="relative z-10 px-10 py-20">
        <div
          className={`flex flex-col md:flex-row justify-center items-center gap-6 transition-transform duration-500 ${
            slide ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Display the news headline */}
          <div className="flex flex-col justify-center items-start gap-4">
            <h2 className="text-white text-2xl md:text-4xl font-semibold mb-4">
              {currentNews.title}
            </h2>
            <p className="text-white font-sans">{currentNews.description}</p>
            <a
              href={currentNews.url}
              className="bg-blue-500 text-white p-2 hover:underline rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
          {/* Display the news image (if available, or a default image otherwise) */}
          <img
            src={currentNews.urlToImage || "/images/news1.jpg"}
            alt={currentNews.title}
            className="w-full md:w-1/3 rounded-lg shadow-lg md:h-64 border-4 border-white"
          />
        </div>
      </div>

      {/* Dots for slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {newsData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Previous and Next buttons */}
      <button
        onClick={() => handlePrevious()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
      >
        &#10094; {/* Left arrow */}
      </button>
      <button
        onClick={() => handleNext()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
      >
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Slider;
