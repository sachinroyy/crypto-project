/* eslint-disable react/no-unescaped-entities */
import Boxes from "../ui/background-boxes";
import classNames from "classnames"; // Replace `cn` with `classnames`
// import CubeComponent from "./Cube";
import AboutAi from '../../assets/about-ai.png'
import AboutBit from '../../assets/about-bitcoin.png'
import AboutAir from '../../assets/About-airdrop.png'
import AboutNews from '../../assets/about-world-news.png'
import AboutExpert from '../../assets/about-commander.png'




import Cube from '../CustomCube/Cube'

export function Aboutus() {

  const data = [
    {
      id: 1,
      icon: AboutBit,
      title: "Bitcoin & Altcoin Updates",
    },
    {
      id: 2,
      icon: AboutNews,
      title: "Real-Time News",
    },
    {
      id: 3,
      icon: AboutExpert,
      title: "Expert Insights",
    },
    {
      id: 4,
      icon: AboutAi,
      title: "NFT and AI Revolution",
    },
    {
      id: 5,
      icon: AboutAir,
      title: "Airdrop Services",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#0F1023] flex flex-col items-center justify-center p-[2rem]">
      {/* Mask effect over the background */}
      <div className="absolute inset-0 w-full h-full bg-[#0F1023] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Background boxes */}
      <Boxes />

      {/* Text content */}
      <h2
        className={classNames("md:text-4xl text-[32px] font-bold text-white relative z-20 mb-10 mt-[2rem]")}
      >
        About Us: Transforming the Crypto Landscape{" "}
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        {/* Left Side: Cube Component */}
        <div className="w-full md:w-[50%] mb-10 md:mb-0">
          {/* <CubeComponent /> */}

          <Cube />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-[50%] text-white px-0  md:px-12">
          <p className="mb-4 font-bold">
            Welcome to Crypto Venture, the world's first video platform
            dedicated to providing real-time news and expert insights into the
            dynamic world of cryptocurrency, NFTs, and AI. Crypto Venture is
            your trusted partner for staying ahead in the ever-evolving digital
            economy.
          </p>

          <p className="mb-4 font-bold">
            At Crypto Venture, our mission is to simplify complex cryptocurrency
            news, making it accessible and actionable for enthusiasts,
            investors, and innovators alike. Whether you’re tracking the latest
            Bitcoin price today, exploring updates on popular coins like Shiba
            Inu, or delving into the transformative potential of blockchain and
            AI technologies, we bring you accurate and timely information.
          </p>

          <div className="flex flex-row flex-wrap gap-[2rem]">
            {data.map((item) => (
              <div key={item.id} className="flex items-center border-solid border-2 border-gray-400 p-4 mb-4 rounded-lg">
                <img src={item.icon} alt="" className="w-[30px] h-[30px] mr-4" />
                <h2 className="text-lg">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}