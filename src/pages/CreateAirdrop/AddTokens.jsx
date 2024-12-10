/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Web3 from "web3";

// const AddTokens = ({walletAddress}) => {
//   const [tokenAddress, setTokenAddress] = useState("");
//   const [tokenAmount, setTokenAmount] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [tokenAbi, setTokenAbi] = useState(null);
//   const navigate = useNavigate();



//   const apiKey = "3AWMKJIZ6259GYNCNM3BNY47CIXN8QP7M2";

//   const fetchAbi = async () => {
//     try {
//       const url = `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${tokenAddress}&apikey=${apiKey}`;
//       const res = await axios.get(url);
//       if (res.data.status !== "1" || !res.data.result) {
//         throw new Error("Invalid ABI response from Etherscan.");
//       }
//       const parsedAbi = JSON.parse(res.data.result);
//       setTokenAbi(parsedAbi);
//       return parsedAbi;
//     } catch (error) {
//       setErrorMessage(
//         error.message,
//         "Failed to fetch ABI. Please verify your contract address."
//       );
//     }
//   };

//   useEffect(() => {
//     if (tokenAbi) {
//       console.log("Updated tokenAbi:", tokenAbi);
//     }
//   }, [tokenAbi]);

//   const approveContract = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const abi = await fetchAbi();
//       if (!abi) {
//         setLoading(false);
//         return;
//       }

//       if (!window.ethereum) {
//         throw new Error("MetaMask not found. Please install it.");
//       }

//       const web3 = new Web3(window.ethereum);
//       const tokenContract = new web3.eth.Contract(abi, tokenAddress);
//       await tokenContract.methods
//         .approve(contractAddress, tokenAmount)
//         .send({ from: walletAddress });

//       setApproved(true);
//       setSuccessMessage(
//         "Approval granted successfully! You can now create the airdrop."
//       );
//     } catch (error) {
//       setErrorMessage(
//         error.message,
//         "Failed to approve contract. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };




//   // Function to handle form submission
//   const formDetails = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // API call to check and update token amount
//       const response = await fetch("http://localhost:4000/api/add-tokens", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           tokenAddress,
//           tokenAmount,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Token amount updated successfully
//         // alert(data.message);
//         toast.success(data.message);

//         resetFormFields();
//       } else if (response.status === 404) {
//         // Token address not found
//         // alert("Token address not found. Please create a new account for this token.");
//         toast.error(data.error);

//         setTimeout(() => {
//             moveToCreateAirdrop();
//         }, 4000);
//       } else {
//         alert(data.error || "Failed to add tokens.");
//       }
//     } catch (error) {
//       console.error("Error adding tokens:", error);
//       alert("An error occurred while adding tokens.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to reset form fields
//   const resetFormFields = () => {
//     setTokenAddress("");
//     setTokenAmount("");
//   };

//   // Navigate to the CreateAirdrop page
//   const moveToCreateAirdrop = () => {
//     navigate("/createairdrop");
//   };

//   return (
//     <div className="airdropbg flex items-center justify-center bg-gray-800">
//       <div className="text-white rounded-lg shadow-lg p-8 w-full max-w-md my-[3rem] bg-[#1E2046]">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Add Tokens
//         </h2>

//         {walletAddress && (
//           <p className="text-center mb-4">
//             Connected account: {walletAddress.slice(0, 6)}...
//             {walletAddress.slice(-4)}
//           </p>
//         )}

//         <form className="space-y-4" onSubmit={formDetails}>
//           {/* Token Address Input */}
//           <div>
//             <label
//               className="block text-sm font-medium mb-2"
//               htmlFor="tokenAddress"
//             >
//               Token Address
//             </label>
//             <input
//               type="text"
//               id="tokenAddress"
//               className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter token address"
//               value={tokenAddress}
//               onChange={(e) => setTokenAddress(e.target.value)}
//               required
//             />
//           </div>

//           {/* Token Amount Input */}
//           <div>
//             <label
//               className="block text-sm font-medium mb-2"
//               htmlFor="tokenAmount"
//             >
//               Token Amount
//             </label>
//             <input
//               type="number"
//               id="tokenAmount"
//               className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter token amount"
//               value={tokenAmount}
//               onChange={(e) => setTokenAmount(e.target.value)}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none ${
//               loading ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Adding..." : "Add Tokens"}
//           </button>


//           <p className="flex flex-row justify-center mt-[20px] gap-[10px]">
//               Already have a tokens ?{" "}
//               <p className="text-red-500 cursor-pointer" onClick={moveToCreateAirdrop}>
//                 Add Amount
//               </p>{" "}
//             </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddTokens;














import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Web3 from "web3";

const AddTokens = ({ walletAddress }) => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [tokenAbi, setTokenAbi] = useState(null);
  const navigate = useNavigate();
  const apiKey = "3AWMKJIZ6259GYNCNM3BNY47CIXN8QP7M2";

  const fetchAbi = async () => {
    try {
      const url = `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${tokenAddress}&apikey=${apiKey}`;
      const res = await axios.get(url);
      if (res.data.status !== "1" || !res.data.result) {
        throw new Error("Invalid ABI response from Etherscan.");
      }
      const parsedAbi = JSON.parse(res.data.result);
      console.log(parsedAbi)
      setTokenAbi(parsedAbi);
      return parsedAbi;
    } catch (error) {
      throw new Error("Failed to fetch ABI. Please verify your contract address.");
    }
  };

  const approveContract = async (abi) => {
    try {
      if (!window.ethereum) {
        throw new Error("MetaMask not found. Please install it.");
      }

      const web3 = new Web3(window.ethereum);
      const tokenContract = new web3.eth.Contract(abi, tokenAddress);
      const contractAddress = "0x971D50a4Cf40BcDc4A87ef464a847C641413b03F"; // Replace with your contract address

      await tokenContract.methods
        .approve(contractAddress, tokenAmount)
        .send({ from: walletAddress });

      toast.success("Approval granted successfully!");
    } catch (error) {
      throw new Error("Failed to approve contract. Please try again.");
    }
  };

  const formDetails = async () => {
    try {
      const response = await fetch("https://crypto-venture-backend.onrender.com/api/add-tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tokenAddress,
          tokenAmount,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        resetFormFields();
      } else if (response.status === 404) {
        toast.error(data.error);
        setTimeout(() => moveToCreateAirdrop(), 4000);
      } else {
        throw new Error(data.error || "Failed to add tokens.");
      }
    } catch (error) {
      throw new Error("An error occurred while adding tokens.");
    }
  };

  const handleAddTokens = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Fetch ABI
      const abi = await fetchAbi();

      // Step 2: Approve Contract
      await approveContract(abi);

      // Step 3: Call formDetails
      await formDetails();

      toast.success("Token added successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetFormFields = () => {
    setTokenAddress("");
    setTokenAmount("");
  };

  const moveToCreateAirdrop = () => {
    navigate("/createairdrop");
  };

  return (
    <div className="airdropbg flex items-center justify-center">
      <div className="text-white rounded-lg shadow-lg p-8 w-full max-w-md my-[3rem] bg-[#1E2046]">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Tokens</h2>

        {walletAddress && (
          <p className="text-center mb-4">
            Connected account: {walletAddress.slice(0, 6)}...
            {walletAddress.slice(-4)}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleAddTokens}>
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="tokenAddress"
            >
              Token Address
            </label>
            <input
              type="text"
              id="tokenAddress"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter token address"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="tokenAmount"
            >
              Token Amount
            </label>
            <input
              type="number"
              id="tokenAmount"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter token amount"
              value={tokenAmount}
              onChange={(e) => setTokenAmount(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Add Tokens"}
          </button>

          <p className="flex flex-row justify-center mt-[20px] gap-[10px]">
            Want to create a new Airdrop?{" "}
            <p
              className="text-red-500 cursor-pointer"
              onClick={moveToCreateAirdrop}
            >
              Create Airdrop
            </p>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddTokens;
