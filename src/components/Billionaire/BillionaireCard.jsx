/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // import React from "react";

// const BillionaireCard = ({ billionaire, isFeatured, isHighlighted }) => {
//   return (
//     <div
//       className={`${
//         isFeatured
//           ? "w-[70%] bg-gray-800 text-white shadow-xl transform scale-110 m-auto"
//           : "w-fit h-fit bg-gray-800 text-white"
//       } rounded-lg p-4 flex flex-col items-center transition-all duration-700 ${
//         isHighlighted ? "border-4 border-yellow-400 scale-x-125 mx-[2rem]" : ""
//       }`}
//     >
//       {isFeatured ? (
//         <div className="w-[100%] flex flex-row justify-center items-center">
//           <div className="w-[50%] flex justify-center">
//             <img
//               src={billionaire.image}
//               alt={billionaire.name}
//               className="w-[80%] h-[20rem] object-cover"
//             />
//           </div>
//           <div className="w-[50%] flex flex-col font-sans">
//             <h3 className="text-[3rem] font-[700] mb-[10px]">
//               {billionaire.name}
//             </h3>
//             <p className="whitespace-nowrap mb-[10px] text-[20px] font-semibold">
//               {billionaire.company}
//             </p>
//             <p className="font-bold mt-[10px] text-yellow-500 text-[2rem]">
//               {billionaire.net_worth}
//             </p>
//             <p className="mt-2 text-gray-400 text-[20px] text-left">
//               {billionaire.description}
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center">
//           <img
//             src={billionaire.image}
//             alt={billionaire.name}
//             className="w-[8rem] h-[8rem] rounded-full mb-4 object-cover"
//           />
//           <h3 className="text-xl font-semibold whitespace-nowrap mb-[10px]">
//             {billionaire.name}
//           </h3>
//           <p className="whitespace-nowrap mb-[10px] text-[16px]">
//             {billionaire.company}
//           </p>
//           <p className="font-bold mt-[10px] text-yellow-500 text-[1.5rem]">
//             {billionaire.net_worth}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BillionaireCard;

import "./Billionaire.css";
import CardBg1 from "../../assets/jdImg1.png";
// import CardBg2 from '../../assets/jdImg2.png'
import CardBg3 from "../../assets/CareerPagebg.png";
import CardBg2 from "../../assets/jdImg2.png";

const BillionaireCard = ({ billionaire, isFeatured, isHighlighted }) => {
  return (
    // <div
    //   className={`${
    //     isFeatured
    //       ? "relative w-[70%] bg-black text-white shadow-xl transform scale-110 m-auto"
    //       : "shadow-custom-negative w-fit h-fit text-white"
    //   } rounded-lg p-4 flex flex-col items-center transition-all duration-700 ${
    //     isHighlighted ? "border-4 border-yellow-400 scale-x-125 mx-[2rem]" : ""
    //   }`}
    // >

    //       {/* Background Images */}
    //   {isFeatured && (
    //     <div className="absolute inset-0 z-0">
    //       <img
    //         src={CardBg1}
    //         alt="Background 1"
    //         className="w-[200px] h-[200px] absolute top-[-30px] left-[-30px] opacity-50"
    //       />
    //       <img
    //         src={CardBg3}
    //         alt="Background 2"
    //         className="w-[300px] h-[300px] absolute bottom-[-50px] right-[-50px] opacity-50"
    //       />
    //     </div>
    //   )}

    //   {isFeatured ? (
    //     <div className="w-[100%] flex flex-row justify-center items-center">
    //       <div className="w-[50%] flex justify-center">
    //         <img
    //           src={billionaire.image}
    //           alt={billionaire.name}
    //           className="w-[80%] h-[20rem] object-cover rounded-lg"
    //         />
    //       </div>
    //       <div className="w-[50%] flex flex-col font-sans">
    //         <h3 className="text-[3rem] font-[700] mb-[10px]">
    //           {billionaire.name}
    //         </h3>
    //         <p className="whitespace-nowrap mb-[10px] text-[20px] font-semibold">
    //           {billionaire.company}
    //         </p>
    //         <p className="font-bold mt-[10px] text-yellow-500 text-[2rem]">
    //           {billionaire.net_worth}
    //         </p>
    //         <p className="mt-2 text-gray-400 text-[20px] text-left">
    //           {billionaire.description}
    //         </p>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="relative flex flex-col items-center">
    //       <img
    //         src={billionaire.image}
    //         alt={billionaire.name}
    //         className="w-[8rem] h-[8rem] rounded-full mb-4 object-cover"
    //       />
    //       <h3 className="text-xl font-semibold whitespace-nowrap mb-[10px]">
    //         {billionaire.name}
    //       </h3>
    //       <p className="whitespace-nowrap mb-[10px] text-[16px]">
    //         {billionaire.company}
    //       </p>
    //       <p className="font-bold mt-[10px] text-yellow-500 text-[1.5rem]">
    //         {billionaire.net_worth}
    //       </p>
    //     </div>
    //   )}

    // </div>

    <div
      className={`${
        isFeatured
          ? "billionCardStyleNew relative w-[320px] mg:w-[800px] text-white shadow-xl transform scale-110 m-auto rounded-[24px] pb-[64px] mg:px-[32px] pt-[32px]"
          : "shadow-custom-negative w-fit h-fit text-white backdrop-blur-md bg-[#1E2046] rounded-[40px] p-[20px]"
      } p-4 flex flex-col items-center transition-all duration-700 ${
        isHighlighted ? "" : ""
      }`}
    >
      {/* Background Images */}
      {isFeatured && (
        <div className="absolute inset-0 z-0">
          <img
            src={CardBg1}
            alt="Background 1"
            className="w-[150px] h-[150px] mg:w-[200px] mg:h-[200px] absolute top-[-30px] left-[-30px] opacity-100"
          />
          <img
            src={CardBg3}
            alt="Background 2"
            className="w-[150px] h-[150px] mg:w-[300px] mg:h-[300px] absolute bottom-[-50px] right-0 mg:right-[-50px] opacity-100"
          />
          <img
            src={CardBg2}
            alt="Background 2"
            className="hidden mg:absolute w-[150px] h-[150px] mg:w-[300px] mg:h-[300px] bottom-[-50px] right-[5px] opacity-50"
          />
        </div>
      )}

      {/* Content */}
      {isFeatured ? (
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <img
              src={billionaire.image}
              alt={billionaire.name}
              className="w-[288px] mg:w-[736px] h-[250px] mg:h-[400px] object-cover rounded-[8px]"
            />
          </div>
          <div className="flex flex-col font-sans">
            <h3 className="text-[24px] leading-[28px] mg:text-[32px] font-[700] mg:leading-[40px] mt-[32px]">
              {billionaire.name}
            </h3>
            <div className="flex flex-row justify-between items-center mt-[10px]">
              <p className="whitespace-nowrap leading-[24px] text-[16px] font-[400]">
                {billionaire.company}
              </p>
              <p className="font-bold mt-[10px] leading-[24px] text-[16px] mg:text-[32px] mg:leading-[40px] text-[#9297EF]">
                {billionaire.net_worth}
              </p>
            </div>
            <p className="mt-[16px] mg:mt-[32px] text-[#FFFFFF] text-[16px] mg:text-[24px] font-[400] leading-[24px] mg:leading-[33px] text-left">
              {billionaire.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-[100%] mg:w-[500px] mg:h-[287px] relative z-10 flex flex-col items-center">
          <div className="flex flex-row justify-between items-center gap-[2rem]">
            <h3 className="text-[24px] leading-[28px] mg:text-[32px] mg:leading-[40px] font-bold whitespace-break-spaces mg:mb-[10px]">
              {billionaire.name}
            </h3>
            <img
              src={billionaire.image}
              alt={billionaire.name}
              className="w-[4rem] h-[4rem] mg:w-[6rem] mg:h-[6rem] rounded-full mb-4 object-cover"
            />
          </div>

          <div className="flex flex-row justify-between items-center w-[90%]">
            <p className="whitespace-nowrap mg:mb-[10px] text-[18px] mg:leading-[24px]">
              {billionaire.company}
            </p>
            <p className="font-bold mg:mt-[10px] text-[#9297EF] text-[18px] mg:text-[32px] mg:leading-[40px]">
              {billionaire.net_worth}
            </p>
          </div>

          <p className="text-[16px] leading-[24px] mg:text-[24px] font-[300] mg:font-medium mg:leading-[33px] mt-[16px]">
            {billionaire.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default BillionaireCard;
