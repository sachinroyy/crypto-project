/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import { useNavigate } from "react-router-dom";
import UpdateArea from "../../assets/UPLOAD.png";
import "./Airdrop.css";
import Web3 from "web3";
import AirdropContract from "../../contract/Airdrop.json";
import axios from "axios";

function CreateAirdrop({ walletAddress }) {
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenImage, setTokenImage] = useState(null);
  const [website, setWebsite] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [telegram, setTelegram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [tokenAbi, setTokenAbi] = useState(null);

  const [approved, setApproved] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const contractAddress = "0x971D50a4Cf40BcDc4A87ef464a847C641413b03F"; // admin wallet contract address
  const { connected } = useSDK();

  const navigate = useNavigate();

  const apiKey = "3AWMKJIZ6259GYNCNM3BNY47CIXN8QP7M2";

  const fetchAbi = async () => {
    try {
      const url = `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${tokenAddress}&apikey=${apiKey}`;

    // const url = 'https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=0x62a5809C00e0D1719EA5F7f4972F415d44657a1e&apikey=3AWMKJIZ6259GYNCNM3BNY47CIXN8QP7M2'
    
      console.log("Fetching ABI from URL:", url); // Log the URL for debugging

      const res = await axios.get(url);
      console.log("Full response:", res.data); // Log the API response

      // Check if the response has the expected status and result
      if (res.data.status !== "1" || !res.data.result) {
        throw new Error(
          `Invalid response from Etherscan: ${
            res.data.message || "Unknown error"
          }`
        );
      }

      // Parse ABI if valid
      const parsedAbi = JSON.parse(res.data.result);
      console.log("Parsed ABI:", parsedAbi); // Log the parsed ABI for verification

      setTokenAbi(parsedAbi); // Update the state
      return parsedAbi;
    } catch (error) {
      // Detailed error logging
      console.error("Error fetching ABI:", error.message);
      if (error.response) {
        console.error("API Error Response:", error.response.data);
      }
      setErrorMessage(
        "Failed to fetch ABI. Please verify your contract address or check your API key."
      );
    }
  };

  useEffect(() => {
    if (tokenAbi) {
      console.log("Updated tokenAbi:", tokenAbi);
    }
  }, [tokenAbi]);



  const approveContract = async (e) => {
    e.preventDefault();
    if (!walletAddress) {
      setErrorMessage("Please connect your wallet first.");
      return;
    }

    try {
      setLoading(true);
      const abi = await fetchAbi();

      console.log("hi i am " , abi)
      if (!abi) {
        setErrorMessage("ABI fetch failed. Cannot approve contract.");
        setLoading(false);
        return;
      }

      const web3 = new Web3(window.ethereum);
      console.log(web3)
      const tokenContract = new web3.eth.Contract(abi, tokenAddress);
      console.log(tokenContract)

      await tokenContract.methods
        .approve(contractAddress, tokenAmount)
        .send({ from: walletAddress });

      setApproved(true);
      setSuccessMessage(
        "Approval granted successfully! You can now create the airdrop."
      );
      setErrorMessage("");
    } catch (error) {
      console.error("Approval failed:", error.message);
      setErrorMessage("Failed to approve contract. Please try again.");
      setApproved(false);
    } finally {
      setLoading(false);
    }
  };

  const createAirdrop = async (e) => {
    e.preventDefault();
    if (!approved) {
      setErrorMessage(
        "Approval denied. You cannot proceed to create an airdrop."
      );
      return;
    }

    try {
      setLoading(true);

      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(
        AirdropContract.abi,
        contractAddress
      );

      await contract.methods
        .createAirdrop(tokenAddress, tokenAmount)
        .send({ from: walletAddress });

      const formData = new FormData();

      // Append the form fields to FormData
      formData.append("tokenAddress", tokenAddress);
      formData.append("tokenName", tokenImage);
      formData.append("tokenAmount", tokenAmount);
      formData.append("website", website);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("telegram", telegram);
      formData.append("twitter", twitter);
      formData.append("walletAddress", walletAddress); // Adding walletAddress if needed

      // If there is an image, append it
      if (tokenImage) {
        formData.append("tokenImage", tokenImage);
      }

      // Send form data to backend (adjust URL if necessary)
      const response = await fetch("http://localhost:4000/api/create-airdrop", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);

      // Handle response
      if (response.ok) {
        // setModalMessage("Airdrop created successfully!");
        alert("Airdrop created successfully!");
        // setShowModal(true);
      } else {
        // setModalMessage(data.error || "Failed to create airdrop.");
        // setShowModal(true);
        alert("Airdrop not created successfully!");
      }
    } catch (error) {
      console.error("Error saving airdrop data:", error);
      // setModalMessage("An error occurred while saving airdrop data.");
      // setShowModal(true);
    }
  };

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
  //     const contract = new web3.eth.Contract(
  //       AirdropContract.abi,
  //       contractAddress
  //     );

  //     try {
  //       // Approve the token transfer
  //       const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
  //       console.log("Token contract accessed");

  //       console.log(tokenAmount);
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
  //       console.log(tokenAmount);
  //       setTimeout(async () => {
  //         await contract.methods
  //           .createAirdrop(tokenAddress, tokenAmount)
  //           .send({ from: walletAddress });
  //         alert("Airdrop created successfully!");
  //       }, 10000);
  //     } catch (error) {
  //       console.error("Error creating airdrop:", error);
  //       alert("Failed to create airdrop.");
  //     }
  //   };

  const formDetails = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Attempting to create airdrop...");
      console.log(tokenAmount);
      await createAirdrop(); // Ensure ABI is fetched before proceeding
      if (tokenAbi) {
        await saveAirdropData(); // Save airdrop data only if ABI is valid
        resetFormFields();
      }
      setLoading(false);
    } catch (error) {
      console.error("Error creating airdrop:", error);
      resetFormFields();
      setModalMessage("Error creating airdrop.");
      setShowModal(true);
      setLoading(false);
    }
  };

  const resetFormFields = () => {
    setTokenAddress("");
    setTokenAmount("");
    setWebsite("");
    setStartDate("");
    setEndDate("");
    setTelegram("");
    setTwitter("");
    setTokenName("");
    setTokenImage();
  };

  const saveAirdropData = async () => {
    try {
      const formData = new FormData();
      formData.append("tokenAddress", tokenAddress);
      formData.append("tokenName", tokenName);
      formData.append("tokenImage", tokenImage); // Append the file
      formData.append("tokenAmount", tokenAmount);
      formData.append("website", website);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("telegram", telegram);
      formData.append("twitter", twitter);

      const response = await fetch("http://localhost:4000/api/create-airdrop", {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setModalMessage("Airdrop created successfully!");
        setShowModal(true);
      }
      //  else if (response.status === 409) {
      //   setModalMessage(
      //     "Token address is already added. Please use a new token."
      //   );
      //   setShowModal(true);
      // }
      else {
        setModalMessage(data.error || "Failed to create airdrop.");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error saving airdrop data:", error);
      setModalMessage("An error occurred while saving airdrop data.");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const moveTOAddTokens = () => {
    navigate("/addtokens");
  };

  const onImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setTokenImage(file);
    } else {
      setTokenImage(null);
    }
  };

  useEffect(() => {
    return () => {
      if (tokenImage) {
        URL.revokeObjectURL(tokenImage);
      }
    };
  }, [tokenImage]);

  return (
    <div className="airdropbg flex items-center justify-center font-san  ">
      <div className="form text-white rounded-[20px] shadow-2xl p-8 w-[600] h-[574]  my-[3rem] bg-[#1E2046]">
        {/* <button className="font-sans best rounded-[25px] p-1 m-1 pl-2 pr-2 text-blue-950">Best of luck</button> */}
        <h2 className="text-2xl font-bold mb-6 text-center font-sans flex justify-start">
          Create Airdrop
        </h2>

        {connected && walletAddress && (
          <p className="text-center mb-4">
            Connected account: {walletAddress.slice(0, 6)}...
            {walletAddress.slice(-4)}
          </p>
        )}

        {!approved && (
          <form className="space-y-4" onSubmit={approveContract}>
            <h3 className="text-lg font-semibold mb-2">
              Step 1: Approve Contract
            </h3>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Token Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-transparent text-white rounded-[8px]"
                  placeholder="Enter token address"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Token Amount
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-transparent text-white rounded-[8px]"
                  placeholder="Enter token amount"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Approving..." : "Approve"}
            </button>
          </form>
        )}

        {approved && (
          <form className="space-y-4" onSubmit={formDetails}>
            {/* Token Address and Token Amount */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Token Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent text-white rounded-[8px]"
                  placeholder="Enter token address"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                  required
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Token Amount
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                  placeholder="Enter token amount"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Token Image and Token Name */}
            <div className="flex gap-4 ">
              <div className="w-1/2 ">
                <label className="block text-sm font-medium mb-2">
                  Token Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                  placeholder="Enter token address"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                  required
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium mb-2 bg-transparent  border-[0.5px]rounded-[8px] "
                >
                  Token Image
                  <img
                    src={
                      tokenImage ? URL.createObjectURL(tokenImage) : UpdateArea
                    }
                    alt="Upload preview"
                    className="w-[120px] h-[50px] object-cover mt-[10px]"
                  />
                </label>
                <input
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent  rounded-[8px] text-white"
                  // placeholder="Enter token amount"
                  // value={tokenAmount}rounded-[8px]
                  type="file"
                  id="image"
                  accept="image/*"
                  hidden
                  onChange={onImageChange}
                  required
                />
              </div>
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-medium mb-2">Website</label>
              <input
                type="text"
                className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                placeholder="Enter your website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>

            {/* Start Date and End Date */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Twitter and Telegram */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Twitter
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                  placeholder="Enter Twitter handle"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">
                  Telegram
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-[0.5px] bg-transparent rounded-[8px] text-white"
                  placeholder="Enter Telegram link"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Create Airdrop Button */}
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Airdrop"}
            </button>

            <p className="text-center mt-[20px]">
              Already a airdrop creator ?{" "}
              <span
                className="font-bold font-sans text-yellow-500 cursor-pointer"
                onClick={moveTOAddTokens}
              >
                Add Tokens
              </span>
            </p>
          </form>
        )}

        {/* Modal Popup */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#191B3A] to-[#0F1023] bg-opacity-50">
            <div className="bg-white text-black rounded-lg p-6 w-80">
              <h3 className="text-lg font-semibold mb-4">Notification</h3>
              <p className="mb-4">{modalMessage}</p>
              <button
                onClick={closeModal}
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {successMessage && (
          <p className="text-center mt-4 text-green-500">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-center mt-4 text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default CreateAirdrop;
