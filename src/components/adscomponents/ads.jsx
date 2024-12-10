
import { useState, useEffect } from "react";
import Ads1 from '../../assets/AdNew1.jpeg'
import Ads2 from '../../assets/AdNew2.jpeg'
import Ads3 from '../../assets/AdNew3.jpeg'
import Ads4 from '../../assets/AdNew4.jpeg'
import Ads5 from '../../assets/AdNew5.jpeg'
import Ads6 from '../../assets/AdNew6.jpeg'

const AdComponent = () => {
  // Static ad data
  const ads = [
    {
      id: 1,
      img: Ads1,
      link: "https://xapp.folks.finance/?utm_source=Cryptorank&utm_campaign=Cryptorank2&utm_code=izb8gbeSGyCK&utm_medium=HotEventsCard&utm_content=BlackFridayBonus"
    },
    {
      id: 2,
      img: Ads2,
      link: "https://tap.chaingpt.org/?utm_source=cryptorank&utm_medium=partnership&utm_campaign=tapcgpt&utm_content=popup"
    },
    {
      id: 3,
      img: Ads3,
      link: "https://app.freewallet.org/auth/registration"
    },
    {
      id: 4,
      img: Ads4,
      link: "https://noone.io/?utm_source=cointelegraph&utm_medium=banner&utm_campaign=coin_telegraph"
    },
    {
      id: 5,
      // name: "Double Folks Points",
      // title: "Earn Double Folks Points Now! Interaction AI Founder and Earn $CGPT",
      img: Ads5,
      link: "https://web3antivirus.io/?utm_source=cointelegraph&utm_medium=banner&utm_campaign=secure-investments&utm_content=1080-1080"
    },
    {
      id: 6,
      // name: "Double Folks Points",
      // title: "Earn Double Folks Points Now! Interaction AI Founder and Earn $CGPT",
      img: Ads6,
      link: "https://hitbtc.com/wallet"
    },
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // State for ad visibility

  // Rotate ads every hour
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length); // Cycle through ads
    }, 36000); // 1 hour in milliseconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [ads.length]);

  // Close ad handler
  const handleCloseAd = () => {
    setIsVisible(false);
  };

  const currentAd = ads[currentAdIndex];

  return (
    isVisible && ( // Render only if the ad is visible
      <div
        style={{
          position: "fixed",
          bottom: "-30px",
          left: "2px",
          zIndex: 90,
          // backgroundColor: "white",
          borderRadius: "10px",
          // boxShadow: "0 2px 2px rgba(0,0,0,0.2)",
          padding: "11px",
          textAlign: "center",
          width: "20rem",
          transition: "all 0.3s ease-in-out",
          color:"black",
          cursor:"pointer",
          overflow:"hidden",
        }}
      >
        {/* Close Button */}
        {/* <h1 className="flex justify-start pl-7 font-bold absolute text-red-700 ">Ads</h1> */}
        <button
          onClick={handleCloseAd}
          style={{
            position: "absolute",
            top: "1px",
            right: "20px",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "29px",
            cursor: "pointer",
            color: "white",
          }}
        >
          &times;
        </button>
        
        {/* Ad Content */}
        <a href={currentAd.link} target="_blank" rel="noopener noreferrer">
          <img
            src={currentAd.img}
            alt={currentAd.name}
            style={{ width: "290px", height: "200px", borderRadius: "5px", margin: "auto" }}
          />
          <h4 style={{ margin: "30px 0", whiteSpace: "wrap",color:"black" }}>{currentAd.title}</h4>
        </a>
      </div>
    )
  );
};

export default AdComponent;