import { useState } from "react";
import "./Faq.css";
// import AdsBanner from "../../assets/ads06.webp"; // Add your ad image here

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  // const [isAdVisible, setIsAdVisible] = useState(true); // Control ad visibility

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // const handleCloseAd = () => {
  //   setIsAdVisible(false); // Hide ad when close button is clicked
  // };

  const items = [
    {
      title: "Top 10 Crypto Coins YOU MUST BUY Before the 2025 Bitcoin BOOM!?",
      content:
        "Distributed with on-chain governance: Proof of Staked Authority (PoSA) brings in decentralization and community participants. As the native token, BNB will serve as both the gas of smart contract execution and tokens for staking.",
    },
    {
      title:
        "Bitcoin boom is amazing but I want to become a billionaire without spending 1 million?",
      content:
        "Invest in early-stage altcoins, stake your crypto for passive income, and explore opportunities in Web3 projects.",
    },
    {
      title: "What is BNB Smart Chain relies on a system of 55 validators?",
      content:
        "BNB Smart Chain uses Proof of Staked Authority (PoSA) with 55 validators for decentralization and fast transaction processing.",
    },
    {
      title: "Why Choose Crypto Ventures?",
      content:
        "Crypto Ventures simplifies complex crypto trends, offering insights and opportunities to maximize your investment potential.",
    },
    {
      title:
        "What is the best way to use Crypto Ventures so that I become a millionaire?",
      content:
        "Follow investment insights, explore DeFi strategies, and utilize tools provided by Crypto Ventures to make informed decisions.",
    },
  ];

  return (
    <div className="bgforfaq">
      {/* Ad Banner */}
      {/* {isAdVisible && (
        <div
          className="relative bg-white rounded-lg shadow-md p-1 mb-6 text-center w-[90%] mx-auto h-[300px]"
          style={{
            position: "relative",
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "3px",
          }}
        >
          <h2 className="flex justify-start font-bold pl-6 ">Ads</h2>
          <button
            onClick={handleCloseAd}
            style={{
              position: "absolute",
              top: "2px",
              right: "5px",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#888",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
          <a
            href="https://aurealone.com/?gad_source=1&gclid=Cj0KCQiAo5u6BhDJARIsAAVoDWt08tZeJARJlzwMLPat0pU2nwxF1NuwP2JNnJwJCFb-aj9xUtIwI0MaAiMtEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={AdsBanner}
              alt="Ad Banner"
              style={{
                width: "100%",
                height: "90%",
                borderRadius: "5px",
              }}
            />
            <h3 style={{ marginTop: "1px", fontSize: "18px", color: "#333" }}>
              Check out our latest crypto offer!
            </h3>
          </a>
        </div>
      )} */}
         
         {/* FAQ SECTION */}
      <div className="w-[100%] mg:w-[80%] container mx-auto py-[2rem] px-[1rem]">
        <h2 className="text-[32px] leading-[35px] mg:text-[48px] mg:leading-[52px] font-bold text-left ml-[15px] mg:ml-[0px] mb-6 text-white">
          Let us answer <br /> some question.
        </h2>
        {items.map((item, index) => (
          <div key={index} className="border-b-2 border-white rounded mb-4">
            {/* Accordion Header */}
            <button
              className="w-full flex justify-between items-center p-4 text-left text-white transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold text-[16px] mg:text-[24px]">{item.title}</span>
              <span className="text-2xl font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Accordion Content */}
            {openIndex === index && (
              <div className="p-4 text-white transition-all text-[14px] font-light mg:font-normal mg:text-[20px]">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
