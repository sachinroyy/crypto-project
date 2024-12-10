/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // WalletButton Component

// import { useState, useRef } from "react";
// // import walletlogo from "../../assets/wallet02.png";
// import getProvider from "../../utils/getProvider";
// // import { FaChevronDown, FaCopy, FaTimes } from "react-icons/fa";
// import { useSDK } from "@metamask/sdk-react";
// import './Wallet.css'

// // Import wallet icons
// import phantomIcon from "../../assets/phantom.png";
// import metamaskIcon from "../../assets/metamask.png";
// import coinbaseIcon from "../../assets/conbase.png"; // Coinbase icon

// const WalletButton = ({ isModalOpen, setIsModalOpen }) => {
//   const { sdk } = useSDK();
//   const [pubKey, setPublicKey] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [activeWallet, setActiveWallet] = useState(null);
//   const phantom_provider = getProvider();
//   const buttonRef = useRef(null);

//   const connectMetaMask = async () => {
//     try {
//       const accounts = await sdk?.connect();
//       setPublicKey(accounts?.[0]);
//       setActiveWallet("metamask");
//       setIsModalOpen(false);
//     } catch (err) {
//       console.warn("Failed to connect to MetaMask", err);
//     }
//   };

//   const handlePhantomWalletClick = async () => {
//     try {
//       const response = await phantom_provider.connect();
//       setPublicKey(response.publicKey.toString());
//       setActiveWallet("phantom");
//       localStorage.setItem("isDisconnected", "false");
//       setIsModalOpen(false);
//     } catch (err) {
//       console.log("Error connecting to Phantom wallet", err);
//     }
//   };

//   const handleDisconnect = async () => {
//     await phantom_provider.disconnect();
//     setPublicKey(null);
//     setShowDetails(false);
//     setActiveWallet(null);
//     localStorage.setItem("isDisconnected", "true");
//   };

//   const copyToClipboard = () => {
//     if (pubKey) {
//       navigator.clipboard.writeText(pubKey);
//       alert("Address copied to clipboard!");
//     }
//   };

//   // const walletIcon = activeWallet === "metamask" ? metamaskIcon : phantomIcon;

//   return (
//     <div className="flex justify-end z-[1000] relative">
//       {/* {!pubKey ? (
//         <button
//           onClick={() => setIsModalOpen(true)}
//           ref={buttonRef}
//           className="wallet-button-class text-black px-4 py-2 rounded-lg flex items-center gap-2 h-14 w-44"
//         >
//           <img src={walletlogo} alt="Wallet Logo" className="w-32" />
//         </button>
//       ) : (
//         <button
//           onClick={() => setShowDetails(!showDetails)}
//           ref={buttonRef}
//           className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-4 h-14 w-80"
//         >
//           <img src={walletIcon} alt="Connected Wallet Icon" className="w-8 h-8 rounded-full" />
//           <span className="truncate">{pubKey.slice(0, 6)}...{pubKey.slice(-6)}</span>
//           <FaChevronDown className="ml-auto" />
//         </button>
//       )} */}

//       {showDetails && (
//         <div
//           className="absolute bg-white shadow-lg rounded-lg p-5 w-80"
//           style={{
//             top: buttonRef.current?.getBoundingClientRect().bottom + 10,
//             left: buttonRef.current?.getBoundingClientRect().left,
//           }}
//         >
//           <button
//             onClick={() => setShowDetails(false)}
//             className="absolute top-2 right-2 text-black hover:text-red-500"
//           >
//             <FaTimes />
//           </button>
//           <div className="bg-gray-100 p-4 rounded-lg mb-4">
//             <p className="break-words">{pubKey}</p>
//             <button onClick={copyToClipboard} className="text-black hover:text-black ml-2">
//               <FaCopy />
//             </button>
//           </div>
//           <button
//             onClick={handleDisconnect}
//             className="w-full py-2 bg-black text-white rounded-md hover:bg-slate-600 transition uppercase"
//           >
//             Disconnect
//           </button>
//         </div>
//       )}

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <div className="w-96 p-6 rounded-lg shadow-lg bg-black relative">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-2 right-2 text-gray-100 hover:text-red-500"
//             >
//               ✕
//             </button>
//             <h2 className="text-2xl font-semibold mb-4 text-center text-white uppercase">
//               Select Wallet
//             </h2>
//             <div className="space-y-4">
//               <WalletOption
//                 name="Phantom"
//                 icon={phantomIcon}
//                 setting="Auto Confirm"
//                 onClick={handlePhantomWalletClick}
//               />
//               <WalletOption
//                 name="MetaMask"
//                 icon={metamaskIcon}
//                 setting="Auto Approve"
//                 onClick={connectMetaMask}
//               />
//               <WalletOption
//                 name="CoinBase"
//                 icon={coinbaseIcon}
//                 onClick={() => alert("CoinBase Wallet Coming Soon!")}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const WalletOption = ({ name, icon, setting, onClick }) => (
//   <button
//     onClick={onClick}
//     className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 w-full transition"
//   >
//     <div className="flex items-center gap-2">
//       {icon && <img src={icon} alt={`${name} Icon`} className="w-6 h-6" />}
//       <span className="font-medium uppercase">{name}</span>
//     </div>
//     {setting && <span className="text-sm text-gray-500">{setting}</span>}
//   </button>
// );

// export default WalletButton;

// CODE 2
// import { useState, useRef } from "react";
// // import walletlogo from '../../assets/wallet04.png';
// import getProvider from "../../utils/getProvider";
// import { FaChevronDown, FaCopy, FaTimes } from 'react-icons/fa';
// import { useSDK } from "@metamask/sdk-react";

// import phantomIcon from '../../assets/phantom.png';
// import metamaskIcon from '../../assets/metamask.png';
// import coinbaseIcon from '../../assets/conbase.png';

// const WalletButton = () => {
//   const { sdk } = useSDK();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [pubKey, setPublicKey] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [activeWallet, setActiveWallet] = useState(null);
//   const phantom_provider = getProvider();
//   const buttonRef = useRef(null);

//   const connectMetaMask = async () => {
//     try {
//       const accounts = await sdk?.connect();
//       setPublicKey(accounts?.[0]);
//       setActiveWallet('metamask');
//       setIsModalOpen(false);
//     } catch (err) {
//       console.warn("Failed to connect to MetaMask", err);
//     }
//   };

//   const handlePhantomWalletClick = async () => {
//     try {
//       const response = await phantom_provider.connect();
//       setPublicKey(response.publicKey.toString());
//       setActiveWallet('phantom');
//       localStorage.setItem('isDisconnected', 'false');
//       setIsModalOpen(false);
//     } catch (err) {
//       console.log("Error connecting to Phantom wallet", err);
//     }
//   };

//   const handleDisconnect = async () => {
//     await phantom_provider.disconnect();
//     setPublicKey(null);
//     setShowDetails(false);
//     setActiveWallet(null);
//     localStorage.setItem('isDisconnected', 'true');
//   };

//   const copyToClipboard = () => {
//     if (pubKey) {
//       navigator.clipboard.writeText(pubKey);
//       alert("Address copied to clipboard!");
//     }
//   };

//   const walletIcon = activeWallet === 'metamask' ? metamaskIcon : phantomIcon;

//   console.log(pubKey)

//   return (
//     <div className="flex justify-end  mt-2 p-2 relative">
//       {!pubKey ? (
//         <button
//           onClick={() => setIsModalOpen(true)}
//           ref={buttonRef}
//           className="px-4 py-2 rounded-lg flex items-center gap-2 h-12  text-white uppercase flex justify-center font-bold "
//         >
//           {/* <img src={walletlogo} alt="Wallet Logo" className="w-32" /> */}
//           connect wallet
//         </button>
//       ) : (
//         <button
//           onClick={() => setShowDetails(!showDetails)}
//           ref={buttonRef}
//           className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-4 h-14 w-80"
//         >
//           <img src={walletIcon} alt="Connected Wallet Icon" className="w-8 h-8 rounded-full" />
//           <span className="truncate">{pubKey.slice(0, 6)}...{pubKey.slice(-6)}</span>
//           <FaChevronDown className="ml-auto" />
//         </button>
//       )}

//       {showDetails && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
//           <div className="bg-white shadow-lg rounded-lg p-5 w-80 relative">
//             <button
//               onClick={() => setShowDetails(false)}
//               className="absolute top-2 right-2 text-black hover:text-red-500"
//             >
//               <FaTimes />
//             </button>
//             <div className="bg-gray-100 p-4 rounded-lg mb-4">
//               <p className="break-words">{pubKey}</p>
//               <button onClick={copyToClipboard} className="text-black hover:text-black ml-2">
//                 <FaCopy />
//               </button>
//             </div>
//             <button
//               onClick={handleDisconnect}
//               className="w-full py-2 bg-black text-white rounded-md hover:bg-slate-600 transition uppercase"
//             >
//               Disconnect
//             </button>
//           </div>
//         </div>
//       )}

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40">
//           <div className="w-96 p-6 rounded-lg shadow-lg bg-black relative">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-2 right-2 text-gray-100 hover:text-red-500"
//             >
//               ✕
//             </button>
//             <h2 className="text-2xl font-semibold mb-4 text-center text-white uppercase">
//               Select Wallet
//             </h2>
//             <div className="space-y-4">
//               <WalletOption
//                 name="Phantom"
//                 icon={phantomIcon}
//                 setting="Auto Confirm"
//                 onClick={handlePhantomWalletClick}
//               />
//               <WalletOption
//                 name="MetaMask"
//                 icon={metamaskIcon}
//                 setting="Auto Approve"
//                 onClick={connectMetaMask}
//               />
//               <WalletOption
//                 name="CoinBase"
//                 icon={coinbaseIcon}
//                 onClick={() => alert("CoinBase Wallet Coming Soon!")}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const WalletOption = ({ name, icon, setting, onClick }) => (
//   <button
//     onClick={onClick}
//     className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 w-full transition"
//   >
//     <div className="flex items-center gap-2">
//       {icon && <img src={icon} alt={`${name} Icon`} className="w-6 h-6" />}
//       <span className="font-medium uppercase">{name}</span>
//     </div>
//     {setting && <span className="text-sm text-gray-500">{setting}</span>}
//   </button>
// );

// export default WalletButton;

// code 3

import { useState, useEffect, useRef } from "react";
// import walletlogo from '../../assets/WalletImg.jpeg';
// import getProvider from "../../utils/getProvider";
import { FaChevronDown, FaCopy, FaTimes } from "react-icons/fa";
import { useSDK } from "@metamask/sdk-react";
// import { useNavigate } from "react-router-dom";

import phantomIcon from "../../assets/phantom.png";
import metamaskIcon from "../../assets/metamask.png";
// import coinbaseIcon from "../../assets/conbase.png";
// import WalletConnect from "../../assets/walletIconconnect.png";
// import WalletConnect from "../../assets/walletIconconnect.png";
import NewWalletIcon from "../../assets/NewWalletIcon.png";

const WalletButton = () => {
  const { sdk } = useSDK();
  // const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pubKey, setPublicKey] = useState(
    localStorage.getItem("publicKey") || null
  );
  const [showDetails, setShowDetails] = useState(false);
  const [activeWallet, setActiveWallet] = useState(
    localStorage.getItem("activeWallet") || null
  );
  // const phantom_provider = getProvider();
  const buttonRef = useRef(null);

  useEffect(() => {
    // Attempt to reconnect to Phantom if previously connected
    if (activeWallet === "phantom") {
      // phantom_provider
      //   .connect({ onlyIfTrusted: true })
      //   .then((response) => {
      //     setPublicKey(response.publicKey.toString());
      //   })
      //   .catch((err) =>
      //     console.log("Error reconnecting to Phantom wallet", err)
      //   );
    }

    // Attempt to reconnect to MetaMask if previously connected
    if (activeWallet === "metamask") {
      sdk
        ?.connect({ onlyIfTrusted: true })
        .then((accounts) => {
          if (accounts?.[0]) {
            setPublicKey(accounts[0]);
          }
        })
        .catch((err) => console.log("Error reconnecting to MetaMask", err));
    }
  }, [sdk, activeWallet]);

  const connectMetaMask = async () => {
    try {
      const accounts = await sdk?.connect();
      if (accounts?.[0]) {
        setPublicKey(accounts[0]);
        setActiveWallet("metamask");
        localStorage.setItem("publicKey", accounts[0]);
        localStorage.setItem("activeWallet", "metamask");
        setIsModalOpen(false);
      }
    } catch (err) {
      console.warn("Failed to connect to MetaMask", err);
    }
  };

  // const handlePhantomWalletClick = async () => {
  //   try {
  //     const response = await phantom_provider.connect();
  //     const publicKey = response.publicKey.toString();
  //     setPublicKey(publicKey);
  //     setActiveWallet("phantom");
  //     localStorage.setItem("publicKey", publicKey);
  //     localStorage.setItem("activeWallet", "phantom");
  //     setIsModalOpen(false);
  //   } catch (err) {
  //     console.log("Error connecting to Phantom wallet", err);
  //   }
  // };

  const handleDisconnect = () => {
    // if (activeWallet === "phantom") {
    //   phantom_provider.disconnect();
    // }
    setPublicKey(null);
    setShowDetails(false);
    setActiveWallet(null);
    localStorage.removeItem("publicKey");
    localStorage.removeItem("activeWallet");
  };

  const copyToClipboard = () => {
    if (pubKey) {
      navigator.clipboard.writeText(pubKey);
      alert("Address copied to clipboard!");
    }
  };

  const walletIcon = activeWallet === "metamask" ? metamaskIcon : phantomIcon;

  // const tocreateairdrop = () => {
  //   navigate("/createairdrop");
  // };

  return (
    <div className="flex justify-end mt-2 p-2 relative">
      {!pubKey ? (
        <button
          onClick={() => setIsModalOpen(true)}
          ref={buttonRef}
          className="px-4 py-2 rounded-lg items-center gap-2 h-12 text-white uppercase flex justify-center font-bold"
        >
          {/* <img src={walletlogo} alt="Wallet Logo" className="w-32" /> */}
          <div className="flex justify-center items-center gap-[10px] rounded-[26px] bg-[#1E2046] text-white px-[32px] py-[12px]">
            <img src={NewWalletIcon} alt="" className="w-[20px] h-[20px]" />
            <h2>Connect Wallet</h2>
          </div>
        </button>
      ) : (
        <button
          onClick={() => setShowDetails(!showDetails)}
          ref={buttonRef}
          className="bg-[#1E2046] font-bold text-white px-4 py-2 rounded-lg flex items-center gap-4 h-14 w-80"
        >
          <img
            src={walletIcon}
            alt="Connected Wallet Icon"
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">
            {pubKey.slice(0, 6)}...{pubKey.slice(-6)}
          </span>
          <FaChevronDown className="ml-auto" />
        </button>
      )}

      {showDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white shadow-lg rounded-lg p-5 w-80 relative">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-2 right-2 text-black hover:text-red-500"
            >
              <FaTimes />
            </button>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="break-words">{pubKey}</p>
              <button
                onClick={copyToClipboard}
                className="text-black hover:text-black ml-2"
              >
                <FaCopy />
              </button>
            </div>
            <button
              onClick={handleDisconnect}
              className="w-full py-2 bg-black text-white rounded-md hover:bg-slate-600 transition uppercase"
            >
              Disconnect
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40">
          <div className="w-96 p-6 rounded-lg shadow-lg bg-[#1E2046] relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-100 hover:text-red-500"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center text-white uppercase">
              Select Wallet
            </h2>
            <div className="space-y-4">
              {/* <WalletOption
                name="Phantom"
                icon={phantomIcon}
                setting="Auto Confirm"
                onClick={handlePhantomWalletClick}
              /> */}
              <WalletOption
                name="MetaMask"
                icon={metamaskIcon}
                setting="Auto Approve"
                onClick={connectMetaMask}
              />
              {/* <WalletOption
                name="CoinBase"
                icon={coinbaseIcon}
                onClick={() => alert("CoinBase Wallet Coming Soon!")}
              /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const WalletOption = ({ name, icon, setting, onClick }) => (
  <button
    onClick={onClick}
    className="flex justify-between items-center p-3 bg-transparent border border-solid border-white rounded-lg shadow-sm w-full transition"
  >
    <div className="flex items-center gap-2">
      {icon && <img src={icon} alt={`${name} Icon`} className="w-6 h-6" />}
      <span className="font-medium uppercase text-white">{name}</span>
    </div>
    {setting && <span className="text-sm text-gray-500">{setting}</span>}
  </button>
);

export default WalletButton;
