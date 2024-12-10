/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import { useSDK } from "@metamask/sdk-react";
// import { useNavigate } from "react-router-dom";
// // import UpdateArea from "../../../../admin/src/assets/upload_area.png";
// // import { useSDK } from "@metamask/sdk-react";

// import UpdateArea from "../../assets/UPLOAD.png";
// import "./Airdrop.css";
// import Web3 from "web3";
// import AirdropContract from "../../contract/Airdrop.json";
// import axios from "axios";

// function CreateAirdrop({ walletAddress }) {
//   const [tokenAddress, setTokenAddress] = useState("");
//   const [tokenAmount, setTokenAmount] = useState("");
//   const [tokenName, setTokenName] = useState("");
//   const [tokenImage, setTokenImage] = useState(null);
//   const [website, setWebsite] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [telegram, setTelegram] = useState("");
//   const [twitter, setTwitter] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [tokenAbi, setTokenAbi] = useState(null);

//   const contractAddress = "0x971D50a4Cf40BcDc4A87ef464a847C641413b03F"; // admin wallet contract address
//   const { connected } = useSDK();

//   const navigate = useNavigate();

//     const fetchAbi = async () => {
//     try {
//       const url = `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${tokenAddress}&apikey=${apiKey}`;
//       const res = await axios.get(url);

//       console.log("Full response:", res);
//       if (res.data.status !== "1" || !res.data.result) {
//         throw new Error("Invalid ABI response from Etherscan.");
//       }

//       const parsedAbi = JSON.parse(res.data.result);
//       setTokenAbi(parsedAbi);
//       return parsedAbi;
//     } catch (error) {
//       console.error("Error fetching ABI:", error.message);
//       setErrorMessage(
//         "Failed to fetch ABI. Please verify your contract address."
//       );
//     }
//   };

//   useEffect(() => {
//     if (tokenAbi) {
//       console.log("Updated tokenAbi:", tokenAbi);
//     }
//   }, [tokenAbi]);

//   const apiKEy = '3AWMKJIZ6259GYNCNM3BNY47CIXN8QP7M2'

//   const url = `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${tokenAddress}&apikey=${apiKEy}`;

//   const getAbi = async () => {
//     try {
//       const res = await axios.get(url);
//       if (res.data.status !== "1" || !res.data.result) {
//         throw new Error("Invalid ABI response from Etherscan.");
//       }
//       setTokenAbi(JSON.parse(res.data.result));
//     } catch (error) {
//       console.error("Error fetching ABI:", error.message);
//       alert("Failed to fetch ABI. Please verify your contract address.");
//       setTokenAbi(null); // Ensure tokenAbi is reset on failure
//     }
//   };

//   const createAirdropFunc = async () => {
//     if (!walletAddress) {
//       alert("Please connect your wallet first.");
//       return;
//     }

//     // Ensure ABI is fetched before proceeding
//     await getAbi();

//     // if (!tokenAbi) {
//     //   alert("Please verify your contract. ABI file is unavailable.");
//     //   return;
//     // }

//     const web3 = new Web3(window.ethereum); // Initialize Web3 instance
//     const contract = new web3.eth.Contract(AirdropContract.abi, contractAddress);

//     try {
//       // Approve the token transfer
//       const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
//       console.log("Token contract accessed");

//       console.log(tokenAmount)
//       await tokenContract.methods
//         .approve(contractAddress, tokenAmount)
//         .send({ from: walletAddress });
//       console.log("Token approval completed");
//     } catch (error) {
//       console.error("Failed to approve contract:", error);
//       alert("Failed to approve contract.");
//       return;
//     }

//     try {
//       // Create the airdrop
//       console.log("Creating airdrop...");
//       console.log(tokenAmount)
//       setTimeout(async () => {
//         await contract.methods
//         .createAirdrop(tokenAddress, tokenAmount)
//         .send({ from: walletAddress });
//       alert("Airdrop created successfully!");
//       }, 10000);
//     } catch (error) {
//       console.error("Error creating airdrop:", error);
//       alert("Failed to create airdrop.");
//     }
//   };

//   const formDetails = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       console.log("Attempting to create airdrop...");
//       console.log(tokenAmount)
//       await createAirdropFunc(); // Ensure ABI is fetched before proceeding
//       if (tokenAbi) {
//         await saveAirdropData(); // Save airdrop data only if ABI is valid
//         resetFormFields();
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error("Error creating airdrop:", error);
//       resetFormFields();
//       setModalMessage("Error creating airdrop.");
//       setShowModal(true);
//       setLoading(false);
//     }
//   };

//   const resetFormFields = () => {
//     setTokenAddress("");
//     setTokenAmount("");
//     setWebsite("");
//     setStartDate("");
//     setEndDate("");
//     setTelegram("");
//     setTwitter("");
//     setTokenName("");
//     setTokenImage();
//   };

//   const saveAirdropData = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("tokenAddress", tokenAddress);
//       formData.append("tokenName", tokenName);
//       formData.append("tokenImage", tokenImage); // Append the file
//       formData.append("tokenAmount", tokenAmount);
//       formData.append("website", website);
//       formData.append("startDate", startDate);
//       formData.append("endDate", endDate);
//       formData.append("telegram", telegram);
//       formData.append("twitter", twitter);

//       const response = await fetch("http://localhost:4000/api/create-airdrop", {
//         method: "POST",
//         // headers: {
//         //   "Content-Type": "multipart/form-data",
//         // },
//         body: formData,
//       });

//       const data = await response.json();
//       console.log(data);
//       if (response.ok) {
//         setModalMessage("Airdrop created successfully!");
//         setShowModal(true);
//       }
//       //  else if (response.status === 409) {
//       //   setModalMessage(
//       //     "Token address is already added. Please use a new token."
//       //   );
//       //   setShowModal(true);
//       // }
//       else {
//         setModalMessage(data.error || "Failed to create airdrop.");
//         setShowModal(true);
//       }
//     } catch (error) {
//       console.error("Error saving airdrop data:", error);
//       setModalMessage("An error occurred while saving airdrop data.");
//       setShowModal(true);
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const moveTOAddTokens = () => {
//     navigate("/addtokens");
//   };

//   const onImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setTokenImage(file);
//     } else {
//       setTokenImage(null);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (tokenImage) {
//         URL.revokeObjectURL(tokenImage);
//       }
//     };
//   }, [tokenImage]);

//   return (

//     <div className="airdropbg flex items-center justify-center font-san  ">
//       <div className="form text-white rounded-[20px] shadow-2xl p-8 w-[600] h-[574]  my-[3rem] bg-[#1E2046]">
//         {/* <button className="font-sans best rounded-[25px] p-1 m-1 pl-2 pr-2 text-blue-950">Best of luck</button> */}
//         <h2 className="text-2xl font-bold mb-6 text-center font-sans flex justify-start">
//           Create Airdrop
//         </h2>

//         {connected && walletAddress && (
//           <p className="text-center mb-4">
//             Connected account: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
//           </p>
//         )}

//         <form className="space-y-4" onSubmit={formDetails}>
//           {/* Token Address and Token Amount */}
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label className="block text-sm font-medium mb-2">
//                 Token Address
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border-[0.5px] bg-transparent text-white rounded-[8px]"
//                 placeholder="Enter token address"
//                 value={tokenAddress}
//                 onChange={(e) => setTokenAddress(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="w-1/2">
//               <label className="block text-sm font-medium mb-2">
//                 Token Amount
//               </label>
//               <input
//                 type="number"
//                 className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
//                 placeholder="Enter token amount"
//                 value={tokenAmount}
//                 onChange={(e) => setTokenAmount(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Token Image and Token Name */}
//           <div className="flex gap-4 ">
//             <div className="w-1/2 ">
//               <label className="block text-sm font-medium mb-2">
//                 Token Name
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
//                 placeholder="Enter token address"
//                 value={tokenName}
//                 onChange={(e) => setTokenName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="w-1/2">
//               <label
//                 htmlFor="image"
//                 className="block text-sm font-medium mb-2 bg-transparent  border-[0.5px]rounded-[8px] "
//               >
//                 Token Image
//                 <img
//                   src={
//                     tokenImage ? URL.createObjectURL(tokenImage) : UpdateArea
//                   }
//                   alt="Upload preview"
//                   className="w-[120px] h-[50px] object-cover mt-[10px]"
//                 />
//               </label>
//               <input
//                 className="w-full px-4 py-2 border-[0.5px] bg-transparent  rounded-[8px] text-white"
//                 // placeholder="Enter token amount"
//                 // value={tokenAmount}rounded-[8px]
//                 type="file"
//                 id="image"
//                 accept="image/*"
//                 hidden
//                 onChange={onImageChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Website */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Website</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
//               placeholder="Enter your website"
//               value={website}
//               onChange={(e) => setWebsite(e.target.value)}
//               required
//             />
//           </div>

//           {/* Start Date and End Date */}
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label className="block text-sm font-medium mb-2">
//                 Start Date
//               </label>
//               <input
//                 type="date"
//                 className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-sm font-medium mb-2">End Date</label>
//               <input
//                 type="date"
//                 className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Twitter and Telegram */}
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label className="block text-sm font-medium mb-2">Twitter</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
//                 placeholder="Enter Twitter handle"
//                 value={twitter}
//                 onChange={(e) => setTwitter(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-sm font-medium mb-2">Telegram</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
//                 placeholder="Enter Telegram link"
//                 value={telegram}
//                 onChange={(e) => setTelegram(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Create Airdrop Button */}
//           <button
//             type="submit"
//             className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none ${
//               loading ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Creating..." : "Create Airdrop"}
//           </button>

//           <p className="text-center mt-[20px]">
//             Already a airdrop creator ?{" "}
//             <span
//               className="font-bold font-sans text-yellow-500 cursor-pointer"
//               onClick={moveTOAddTokens}
//             >
//               Add Tokens
//             </span>
//           </p>
//         </form>

//         {/* Modal Popup */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#191B3A] to-[#0F1023] bg-opacity-50">
//             <div className="bg-white text-black rounded-lg p-6 w-80">
//               <h3 className="text-lg font-semibold mb-4">Notification</h3>
//               <p className="mb-4">{modalMessage}</p>
//               <button
//                 onClick={closeModal}
//                 className="w-full bg-blue-600 text-white py-2 rounded-lg"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>

//   );
// }

// export default CreateAirdrop;

import { useEffect, useState } from "react";
import Web3 from "web3";
import AirdropContract from "../../contract/Airdrop.json";
import axios from "axios";
import "./Airdrop.css";
import UpdateArea from "../../assets/UPLOAD.png";
import { useNavigate } from "react-router-dom";
// import { ethers } from "ethers";

function CreateAirdrop({ walletAddress }) {
  const navigate = useNavigate();

  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [approved, setApproved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [tokenAbi, setTokenAbi] = useState(null);

  const [airdropName, setAirdropName] = useState("");
  const [airdropImage, setAirdropImage] = useState(null);
  const [website, setWebsite] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [telegramLink, setTelegramLink] = useState("");
  const [weiAmount, setWeiAmount] = useState("");

  const contractAddress = "0x971D50a4Cf40BcDc4A87ef464a847C641413b03F";
  const apiKey = "3AWMKJIZ6259GYNCNM3BNY47CIXN8QP7M2";

  const fetchAbi = async () => {
    try {
      const url = `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${tokenAddress}&apikey=${apiKey}`;
      const res = await axios.get(url);
      if (res.data.status !== "1" || !res.data.result) {
        throw new Error("Invalid ABI response from Etherscan.");
      }
      const parsedAbi = JSON.parse(res.data.result);
      setTokenAbi(parsedAbi);
      return parsedAbi;
    } catch (error) {
      setErrorMessage(
        error.message,
        "Failed to fetch ABI. Please verify your contract address."
      );
    }
  };

  useEffect(() => {
    if (tokenAbi) {
      console.log("Updated tokenAbi:", tokenAbi);
    }
  }, [tokenAbi]);

  // const handleConvert = (amount) => {
  //   try {
  //     const wei = ethers.utils.parseEther(amount);
  //     console.log(wei.toString());
  //     setWeiAmount(wei.toString());
  //   } catch (error) {
  //     console.error("Error converting Ether to Wei:", error);
  //     setWeiAmount("Invalid input");
  //   }
  // };

  const approveContract = async (e) => {

    e.preventDefault();
    try {
      setLoading(true);
      const abi = await fetchAbi();
      if (!abi) {
        setLoading(false);
        return;
      }

      if (!window.ethereum) {
        throw new Error("MetaMask not found. Please install it.");
      }

      const web3 = new Web3(window.ethereum);
      const tokenContract = new web3.eth.Contract(abi, tokenAddress);
      await tokenContract.methods
        .approve(contractAddress, tokenAmount)
        .send({ from: walletAddress });

      console.log(tokenAmount);
      setApproved(true);
      setSuccessMessage(
        "Approval granted successfully! You can now create the airdrop."
      );
    } catch (error) {
      setErrorMessage(
        error.message,
        "Failed to approve contract. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const createAirdrop = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (!window.ethereum) {
        throw new Error("MetaMask not found. Please install it.");
      }

      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(
        AirdropContract.abi,
        contractAddress
      );

      await contract.methods
        .createAirdrop(tokenAddress, tokenAmount)
        .send({ from: walletAddress });

      const formData = new FormData();
      formData.append("tokenAddress", tokenAddress);
      formData.append("airdropName", airdropName);
      formData.append("tokenAmount", tokenAmount);
      formData.append("website", website);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("telegramLink", telegramLink);
      formData.append("twitterHandle", twitterHandle);

      if (airdropImage) {
        formData.append("airdropImage", airdropImage);
      } else {
        console.error("Airdrop image is not set.");
      }

      // Debugging: Log FormData entries
      console.log("FormData entries:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await fetch("https://crypto-venture-backend.onrender.com/create-airdrop", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert("Airdrop created successfully!");
        resetFormFields();
      } else {
        setErrorMessage(data.error || "Failed to create airdrop.");
        console.log("I m an error", data.error);
      }
    } catch (error) {
      setErrorMessage(
        error.message,
        "An error occurred while creating the airdrop."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetFormFields = () => {
    setTokenAddress("");
    setTokenAmount("");
    setAirdropName("");
    setAirdropImage(null);
    setWebsite("");
    setStartDate("");
    setEndDate("");
    setTwitterHandle("");
    setTelegramLink("");
    setApproved(false);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    setAirdropImage(file);
  };

  useEffect(() => {
    return () => {
      if (airdropImage) {
        URL.revokeObjectURL(airdropImage);
      }
    };
  }, [airdropImage]);

  const goToAddTokens = () => {
    navigate("/addtokens");
  };

  return (
    <div className="airdropbg flex items-center justify-center font-san">
      <div className="form text-white rounded-[20px] shadow-2xl p-8 w-[600px] bg-[#1E2046] my-[4rem]">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Airdrop</h2>
        {walletAddress && (
          <p className="text-center mb-4">
            Connected account: {walletAddress.slice(0, 6)}...
            {walletAddress.slice(-4)}
          </p>
        )}

        {!approved && (
          <form onSubmit={approveContract}>
            <h3 className="text-lg font-semibold mb-2">
              Step 1: Approve Contract
            </h3>
            <div className="mb-4">
              <label>Token Address:</label>
              <input
                type="text"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                required
                // className="form-input"
                className="mt-[1rem] w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
              />
            </div>
            <div className="mb-4">
              <label>Token Amount:</label>
              <input
                type="number"
                value={tokenAmount}
                onChange={(e) => {
                  setTokenAmount(e.target.value);
                }}
                required
                // className="form-input"
                className="mt-[1rem] w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-[1rem] hover:bg-blue-700"
            >
              {loading ? "Approving..." : "Approve"}
            </button>

            <p className="flex flex-row justify-center mt-[20px] gap-[10px]">
              Already have a token ?{" "}
              <p
                className="text-red-500 cursor-pointer"
                onClick={goToAddTokens}
              >
                Add Amount
              </p>{" "}
            </p>
          </form>
        )}

        {approved && (
          <form onSubmit={createAirdrop}>
            <h3 className="text-lg font-semibold mb-2">
              Step 2: Airdrop Details
            </h3>

            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Airdrop Name:
                </label>
                <input
                  type="text"
                  value={airdropName}
                  onChange={(e) => setAirdropName(e.target.value)}
                  required
                  // className="form-input"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Token Address:
                </label>
                <input
                  type="text"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                  required
                  // className="form-input"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Token Amount:
                </label>
                <input
                  type="text"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(e.target.value)}
                  required
                  // className="form-input"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium mb-2"
                >
                  Airdrop Image:
                  <img
                    src={
                      airdropImage
                        ? URL.createObjectURL(airdropImage)
                        : UpdateArea
                    }
                    alt="Upload preview"
                    className="w-[120px] h-[50px] object-cover mt-[10px]"
                  />
                </label>
                <input
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px]"
                  type="file"
                  name="airdropImage"
                  id="image"
                  accept="image/*"
                  hidden
                  onChange={onImageChange}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Website:</label>
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                // className="form-input"
                className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
              />
            </div>

            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Start Date:
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  // className="form-input"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  End Date:
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  // className="form-input"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Twitter Handle:
                </label>
                <input
                  type="text"
                  value={twitterHandle}
                  onChange={(e) => setTwitterHandle(e.target.value)}
                  // className="form-input"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Telegram Link:
                </label>
                <input
                  type="text"
                  value={telegramLink}
                  onChange={(e) => setTelegramLink(e.target.value)}
                  // className="form-input"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Creating..." : "Create Airdrop"}
            </button>
          </form>
        )}

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </div>
    </div>
  );
}

export default CreateAirdrop;
