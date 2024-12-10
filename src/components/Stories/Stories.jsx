/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react"; // Import useState and useEffect for managing state and effects
import "./Stories.css"; // Import the updated CSS
import Img1 from "../../assets/slider_1.png";
import Img2 from "../../assets/slider_2.png";
import Img3 from "../../assets/slider_3.png";
import Img4 from "../../assets/slider_4.png";
import Img5 from "../../assets/slider_5.png";
import Img6 from "../../assets/slider_6.png";
import Img7 from "../../assets/slider_7.png";
import Img8 from "../../assets/slider_8.png";
import Img9 from "../../assets/slider_9.png";
import Img10 from "../../assets/slider_10.png";

const Stories = () => {
  // State to manage the current active section (editorsChoice or hotStories)
  const [isEditorsChoice, setIsEditorsChoice] = useState(true);

  // State to track the current index for the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Editors' Choice data
  const EditorChoice = [
    {
      news: "Bitget predicts TON ‘de-Telegramization’ in the next 2 years",
      img: Img1,
    },
    {
      news: "Bitcoin price target rises to $78K after Chinese stimulus package",
      img: Img2,
    },
    {
      news: "​​Bankroll Network DeFi hacked, $50M phisher moves crypto on CoW: Crypto-Sec",
      img: Img3,
    },
    {
      news: "RSI hints at classic BTC price breakout — 5 things to know in Bitcoin this week",
      img: Img5,
    },
    {
      news: "Mango Markets mull $500K CFTC settlement amid ‘ongoing’ investigation",
      img: Img6,
    },
  ];

  // Hot Stories data
  const HotStories = [
    {
      news: "Diamond hands Ethereum holder makes $131.7M in 2 years",
      views: "112135",
      img: Img7,
    },
    {
      news: "BlackRock Bitcoin ETF demands 12-hour BTC withdrawals from Coinbase",
      views: "112135",
      img: Img8,
    },
    {
      news: "Bitcoin weekly RSI sparks 'intermediate' $85K BTC price target",
      views: "112135",
      img: Img9,
    },
    {
      news: "Only 43% of users qualified for Hamster Kombat’s season 1 airdrop",
      views: "112135",
      img: Img10,
    },
    {
      news: "Kamala Harris finally breaks silence on crypto: Report",
      views: "112135",
      img: Img4,
    },
  ];

  // Auto-play logic: This effect changes the slider index every 3 seconds
  useEffect(() => {
    const data = isEditorsChoice ? EditorChoice : HotStories;

    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1 < data.length ? prevIndex + 1 : 0) // Reset to 0 when the end of the array is reached
      );
    }, 3000); // Change the image and news every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [isEditorsChoice, currentIndex]); // Re-run effect when the section or index changes

  // Auto-switch from Editors Choice to Hot Stories once the Editors' Choice cycle is complete
  useEffect(() => {
    if (currentIndex === EditorChoice.length - 1 && isEditorsChoice) {
      setTimeout(() => {
        setIsEditorsChoice(false); // Switch to Hot Stories after Editors' Choice finishes
        setCurrentIndex(0); // Reset index when switching
      }, 3000); // Wait for 3 seconds before switching
    } else if (currentIndex === HotStories.length - 1 && HotStories) {
      setTimeout(() => {
        setIsEditorsChoice(true); // Switch to Hot Stories after Editors' Choice finishes
        setCurrentIndex(0); // Reset index when switching
      }, 3000); // Wait for 3 seconds before switching
    }
  }, [currentIndex, isEditorsChoice]);

  return (
    <div className="complete_stories">
      {/* Buttons to switch manually between Editors Choice and Hot Stories */}

      {/* Slider with image on the left and news points on the right */}
      <div className="slider-container">
        {/* Image on the left side */}
        <div className="slider-image-container">
          <img
            src={
              isEditorsChoice
                ? EditorChoice[currentIndex].img
                : HotStories[currentIndex].img
            }
            alt="Story image"
            className="slider-image"
          />
        </div>

        {/* News list on the right side */}
        <div className="slider-text-container">
          <div className="story-buttons">
            <button
              className={isEditorsChoice ? "active" : ""}
              onClick={() => {
                setIsEditorsChoice(true);
                setCurrentIndex(0); // Reset index on manual switch
              }}
            >
              Editor's Choice
            </button>
            <button
              className={!isEditorsChoice ? "active" : ""}
              onClick={() => {
                setIsEditorsChoice(false);
                setCurrentIndex(0); // Reset index on manual switch
              }}
            >
              Hot Stories
            </button>
          </div>
          <ul className="complete_list">
            {isEditorsChoice
              ? EditorChoice.map((item, index) => (
                  <li
                    key={index}
                    className={currentIndex === index ? "highlighted" : ""}
                  >
                    {item.news}
                  </li>
                ))
              : HotStories.map((item, index) => (
                  <li
                    key={index}
                    className={currentIndex === index ? "highlighted" : ""}
                  >
                    {item.news} <b>(Views: {item.views})</b>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stories;
