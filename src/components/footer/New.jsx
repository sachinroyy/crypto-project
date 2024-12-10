// import React from 'react'
// import PlayStore from "../../assets/play-store-badge.svg";
// import AppStore from "../../assets/app-store-badge.svg";
import Insta from "../../assets/instagram (1).png";
import Fb from "../../assets/communication.png";
// import Telegram from "../../assets/telegram.png";
import Twitter from "../../assets/twitter (1).png";
import Yt from "../../assets/youtube.png";
import { Link } from "react-router-dom";
// import { useState } from "react";

const New = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // const handleClick = () => {
  //   setShowPopup(true);
  //   setTimeout(() => {
  //     setShowPopup(false); // Automatically hide the popup after 2 seconds
  //   }, 1000);
  // };

  return (
    <>
      <div className="bg-zinc-800 p-[2rem] text-white font-sans">

        <div className="hidden md:flex w-[90%] m-auto flex-row justify-between items-center">
          <div className="w-[20%] flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[10px]">
              <p className="opacity-[0.6]">FOLLOW US</p>
              <div className="flex flex-row items-center gap-[10px]">
              <Link to="https://www.instagram.com/cryptoventureworld/"><img className="w-[30px] h-[30px]" src={Insta} alt="" /></Link>
                <Link to="https://www.facebook.com/cryptoventureworld"><img className="w-[30px] h-[30px]" src={Fb} alt="" /></Link>
                <Link to="https://www.youtube.com/@cryptoVentureworld"><img className="w-[30px] h-[30px]" src={Yt} alt="" /></Link>
                <Link to="https://x.com/CryptoV17905"><img className="w-[30px] h-[30px]" src={Twitter} alt="" /></Link>
              </div>
            </div>

            <div>
              <p className="opacity-[0.6]">
                Terms of services and Privacy policy
              </p>
              <p className="opacity-[0.6]">© CryptoVentures 2024</p>
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[10px]">
              <p className="opacity-[0.6]">CRYPTOVENTURES NEWSLETTER</p>
              <div className="flex flex-row items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[80%] py-[12px] px-[10px] text-black border-0 border-none  bg-zinc-700"
                />
                <button className="bg-yellow-500 py-[12px] px-[10px] text-black font-bold">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="opacity-[0.6]">
                Crypto Ventures covers fintech, blockchain and Bitcoin bringing
                you the latest crypto news and analyses on the future of money.
              </p>
            </div>
          </div>

          {/* <div className="w-[20%] flex flex-col gap-[1.5rem] mb-[3rem]">
            <p className="opacity-[0.6]">MOBILE APPS</p>
            <div className="flex flex-row items-center gap-[10px]">
              <img className="w-[50%] cursor-pointer" src={PlayStore} alt="" onClick={handleClick}/>
              <img className="w-[50%] cursor-pointer" src={AppStore} alt="" onClick={handleClick}/>
            </div>
          </div>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-md shadow-lg">
                <p className="text-lg text-center text-black">Launching soon</p>
              </div>
            </div>
          )} */}
        </div>

        <div className="flex md:hidden flex-col gap-[2rem]">
          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[10px]">
              <p className="opacity-[0.6]">CRYPTOVENTURES NEWSLETTER</p>
              <div className="flex flex-row items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[80%] py-[12px] px-[10px] text-black border-0 border-none  bg-zinc-700"
                />
                <button className="bg-yellow-500 py-[12px] px-[10px] text-black font-bold">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="opacity-[0.6]">
                Crypto Ventures covers fintech, blockchain and Bitcoin bringing
                you the latest crypto news and analyses on the future of money.
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col gap-[1.5rem]">
            <p className="opacity-[0.6]">MOBILE APPS</p>
            <div className="flex flex-row items-center gap-[10px]">
              <img className="w-[50%]" src={PlayStore} alt="" onClick={handleClick}/>
              <img className="w-[50%]" src={AppStore} alt="" onClick={handleClick}/>
            </div>
          </div> */}

          {/* {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-md shadow-lg">
                <p className="text-lg text-center text-black">Launching soon</p>
              </div>
            </div>
          )} */}

          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[10px]">
              <p className="opacity-[0.6]">FOLLOW US</p>
              <div className="flex flex-row items-center gap-[10px]">
                <Link to="https://www.instagram.com/cryptoventureworld/"><img className="w-[30px] h-[30px]" src={Insta} alt="" /></Link>
                <Link to="https://www.facebook.com/cryptoventureworld"><img className="w-[30px] h-[30px]" src={Fb} alt="" /></Link>
                <Link to="https://www.youtube.com/@cryptoVentureworld"><img className="w-[30px] h-[30px]" src={Yt} alt="" /></Link>
                <Link to="https://x.com/CryptoV17905"><img className="w-[30px] h-[30px]" src={Twitter} alt="" /></Link>
                
                
                
               
              </div>
            </div>

            <div>
              <p className="opacity-[0.6]">
                Terms of services and Privacy policy
              </p>
              <p className="opacity-[0.6]">© Crypto Ventures 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
