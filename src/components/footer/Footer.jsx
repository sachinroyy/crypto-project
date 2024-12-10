// import { data1 } from "./Footer.js";
// import { tools1, tools2 } from "../header/Tools.js";
// import "./Footer.css";
// // import FooterLogo from "../../assets/websiteNewLogo.png";
// import FooterLogo from "../../assets/NewColorLogoWebsite.png";
// import { Link } from "react-router-dom";
// import Twitter from "../../assets/twitter.png";
// // import Telegram from "../../assets/telegram.png";
// import Yt from "../../assets/youtube.png";
// import Fb from "../../assets/communication.png";
// import Insta from "../../assets/instagram (1).png";
// import { useState } from "react";

// const Footer = () => {
//   const [showAll, setShowAll] = useState(false);

//   // Determine the number of items to show based on 'showAll' state
//   const itemsToDisplay = showAll ? tools1 : tools1.slice(0, 4);

//   return (
//     <div className="bg-[#5E65DC]">
//       <div className="complete_footer flex-col mg:flex-row bg-[#5E65DC] rounded-tl-[64px] rounded-tr-[64px]">
//         <div className="flex-1 flex flex-col justify-center items-start gap-[2rem] mg:gap-[8rem] text-white">
//           <img src={FooterLogo} alt="" className="w-[256px]" />

//           <p>
//             Crypto Ventures covers fintech, blockchain and Bitcoin bringing you
//             the latest crypto news and analyses on the future of money.
//           </p>
//         </div>

//         <div className="mt-[32px] mg:mt-0 flex-1 flex flex-col justify-center items-end gap-[4rem]">
//           <div className="flex flex-row flex-wrap list-none items-start justify-between mg:justify-center text-white gap-[2rem] xl:gap-[4rem]">
//             <div>
//               <h2 className="font-bold font-sans text-[24px] leading-[30px] mb-[20px]">
//                 Crypto Tools
//               </h2>
//               {itemsToDisplay.map((item, id) => (
//                 <Link key={id} to={item.link}>
//                   <li className="text-[14px] font-[300] leading-[21px] font-sans mb-[5px]">
//                     {item.name}
//                   </li>
//                 </Link>
//               ))}

//               {!showAll && tools1.length > 4 && (
//                 <button
//                   onClick={() => setShowAll(true)}
//                   className="text-red-500 mt-2"
//                 >
//                   Read More
//                 </button>
//               )}
//               {showAll && tools1.length > 4 && (
//                 <button
//                   onClick={() => setShowAll(false)}
//                   className="text-blue-500 mt-2"
//                 >
//                   Show Less
//                 </button>
//               )}
//             </div>

//             <div>
//               <h2 className="font-bold font-sans text-[24px] leading-[30px] mb-[20px]">
//                 NFT Tools
//               </h2>
//               {tools2.map((item, id) => (
//                 <Link key={id} to={item.link}>
//                   <li className="text-[14px] font-[300] leading-[21px] font-sans mb-[5px]">
//                     {item.name}
//                   </li>
//                 </Link>
//               ))}
//             </div>

//             <div>
//               <h2 className="font-bold font-sans text-[24px] leading-[30px] mb-[20px]">
//                 Latest News
//               </h2>
//               {data1.map((item, id) => (
//                 <Link key={id} to={`/news${item.link}`}>
//                   <li className="text-[14px] font-[300] leading-[21px] font-sans mb-[5px]">
//                     {item.name}
//                   </li>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-row gap-[20px] w-[100%] mg:w-auto justify-evenly mg:justify-center ">
//             <Link to="https://www.instagram.com/cryptoventureworld/">
//               <img className="w-[30px] h-[30px]" src={Insta} alt="" />
//             </Link>
//             <Link to="https://www.facebook.com/cryptoventureworld">
//               <img className="w-[30px] h-[30px]" src={Fb} alt="" />
//             </Link>
//             <Link to="https://www.youtube.com/@cryptoVentureworld">
//               <img className="w-[30px] h-[30px]" src={Yt} alt="" />
//             </Link>
//             <Link to="https://x.com/CryptoV17905">
//               <img className="w-[30px] h-[30px]" src={Twitter} alt="" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
// Footer.jsx

import { useState } from "react";
import { data1 } from "./Footer.js";
import { tools1, tools2 } from "../header/Tools.js";
import "./Footer.css";
import FooterLogo from "../../assets/websiteNewLogo.png";
import { Link } from "react-router-dom";
import Twitter from "../../assets/twitter.png";
import Yt from "../../assets/youtube.png";
import Fb from "../../assets/communication.png";
import Insta from "../../assets/instagram (1).png";

const Footer = () => {
  const [showAllTools1, setShowAllTools1] = useState(false);
  const [showAllTools2, setShowAllTools2] = useState(false);

  // Determine the number of items to show based on 'showAll' states
  const displayedTools1 = showAllTools1 ? tools1 : tools1.slice(0, 4);
  const displayedTools2 = showAllTools2 ? tools2 : tools2.slice(0, 3);

  return (
    // <div className="">
      <div className="complete_footer flex-col mg:flex-row bg-[#1E2046] rounded-top[50px]">
        <div className="mt-[1%] ml-[1%] sm:ml-[7%] flex-1 flex flex-col justify-center items-start mg:gap-[1rem] text-white">
          <img
            src={FooterLogo}
            alt=""
            className="mb-[3%] mt-[-3%] w-[160px] h-[80px] sm:w-[300px] sm:h-[150px]"
          />
          <p className="text-left overflow-hidden text-ellipsis break-words w-full sm:max-w-[60%]">
            Crypto Ventures covers fintech, blockchain, and Bitcoin bringing you
            the latest crypto news and analyses on the future of money.
          </p>
        </div>

        <div className="mt-[32px] mg:mt-0 flex-1 flex flex-col justify-center items-end gap-[4rem]">
          <div className="flex flex-row flex-wrap list-none items-start justify-between mg:justify-center text-white gap-[2rem] xl:gap-[4rem]">
            <div>
              <h2 className="font-bold font-sans text-[1.5rem] leading-[30px]">
                Tools
              </h2>
              <h2 className="font-bold font-sans text-[1rem] leading-[30px]">
                Crypto Tools
              </h2>
              {displayedTools1.map((item, id) => (
                <Link key={id} to={item.link}>
                  <li className="text-[14px] font-[300] leading-[21px] font-sans mb-[5px]">
                    {item.name}
                  </li>
                </Link>
              ))}
              {tools1.length > 4 && (
                <button
                  onClick={() => setShowAllTools1(!showAllTools1)}
                  className="text-blue-500 mt-1"
                >
                  {showAllTools1 ? "See Less" : "See More"}
                </button>
              )}

              <h2 className="font-bold font-sans text-[1rem] leading-[30px]">
                NFT Tools
              </h2>
              {displayedTools2.map((item, id) => (
                <Link key={id} to={item.link}>
                  <li className="text-[14px] font-[300] leading-[21px] font-sans mb-[5px]">
                    {item.name}
                  </li>
                </Link>
              ))}
              {tools2.length > 3 && (
                <button
                  onClick={() => setShowAllTools2(!showAllTools2)}
                  className="text-blue-500 mt-1"
                >
                  {showAllTools2 ? "See Less" : "See More"}
                </button>
              )}
            </div>

            <div>
              <h2 className="font-bold font-sans text-[24px] leading-[30px] mb-[2%]">
                About Us
              </h2>
              {data1.map((item, id) => (
                <Link key={id} to={`/news${item.link}`}>
                  <li className="text-[14px] font-[300] leading-[21px] font-sans mb-[5px]">
                    {item.name}
                  </li>
                </Link>
              ))}
            </div>

            <div>
              <h2 className="font-bold font-sans text-[24px] leading-[30px] mb-[2%]">
                News
              </h2>
              {data1.map((item, id) => (
                <Link key={id} to={`/news${item.link}`}>
                  <li className="text-[14px] font-[300] leading-[21px] font-sans mb-[5px]">
                    {item.name}
                  </li>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-[20px] w-[100%] mg:w-auto justify-center sm:justify-evenly mg:justify-center mt-[-20%]">
            <Link to="https://www.instagram.com/cryptoventureworld/">
              <img className="w-[30px] h-[30px]" src={Insta} alt="" />
            </Link>
            <Link to="https://www.facebook.com/cryptoventureworld">
              <img className="w-[30px] h-[30px]" src={Fb} alt="" />
            </Link>
            <Link to="https://www.youtube.com/@cryptoVentureworld">
              <img className="w-[30px] h-[30px]" src={Yt} alt="" />
            </Link>
            <Link to="https://x.com/CryptoV17905">
              <img className="w-[30px] h-[30px]" src={Twitter} alt="" />
            </Link>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Footer;


