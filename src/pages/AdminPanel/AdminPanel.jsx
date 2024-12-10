import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";
// import Web3 from "web3";
// import AirdropContract from "../../contract/Airdrop.json";

const AdminPanel = () => {
  const [airdrops, setAirdrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [claimableAmount, setClaimableAmount] = useState("");
  const [claimFee, setClaimFee] = useState("");
  const [selectedTokenAddress, setSelectedTokenAddress] = useState("");

  // const myWalletAddress = localStorage.getItem("publicKey");

  // Fetch airdrops from the API
  const fetchAirdrops = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/airdrop-list"
      );
      setAirdrops(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Handle setting claim fee and claimable amount
  const handleSetClaimData = async () => {
    try {
      // Validate inputs
      if (!selectedTokenAddress || !claimableAmount || !claimFee) {
        alert("Please fill in all fields!");
        return;
      }

      // Update the API
      await axios.put(`http://localhost:4000/api/claimable-updates`, {
        tokenAddress: selectedTokenAddress,
        claimableAmount,
        claimFee,
      });

      // Update the local state to reflect the changes
      setAirdrops((prevAirdrops) =>
        prevAirdrops.map((airdrop) =>
          airdrop.tokenAddress === selectedTokenAddress
            ? { ...airdrop, claimableAmount, claimableFees: claimFee }
            : airdrop
        )
      );

      alert("Claimable data updated successfully!");
      setClaimableAmount("");
      setClaimFee("");
      setSelectedTokenAddress("");
    } catch (error) {
      console.error("Error updating claim data:", error);
      alert("Failed to update claim data.");
    }
  };

  useEffect(() => {
    fetchAirdrops();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 mt-8">Error: {error}</div>;

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div className="py-6 px-[3.5rem] adminPanelbg">
      <h2 className="font-bold text-white text-[48px]">Welcome Admin .....</h2>

      {/* Form to set claimable amount and fee */}
      <div className="text-white rounded-lg shadow-lg p-8 w-full my-[3rem] m-auto">
        <form className="space-y-6 max-w-lg mx-auto p-6 bg-gray-800 rounded-lg">
          <div className="flex flex-col">
            <label
              htmlFor="tokenAddress"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Token Address
            </label>
            <input
              type="text"
              id="tokenAddress"
              value={selectedTokenAddress}
              readOnly
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Token address"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="claimableAmount"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Set Claimable Amount
            </label>
            <input
              type="text"
              id="claimableAmount"
              value={claimableAmount}
              onChange={(e) => setClaimableAmount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter claimable amount"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="claimFee"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Set Claim Fee
            </label>
            <input
              type="text"
              id="claimFee"
              value={claimFee}
              onChange={(e) => setClaimFee(e.target.value)}
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter claim fee"
              required
            />
          </div>

          <button
            type="button"
            onClick={handleSetClaimData}
            className="w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:outline-none"
          >
            Update Claim Data
          </button>
        </form>
      </div>

      {/* Airdrop Cards */}
      {airdrops.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {airdrops.map((airdrop) => (
            <div
              key={airdrop._id}
              className="bg-[#1E2046] text-white rounded-lg shadow-lg border hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={airdrop.airdropImage || "/placeholder.png"}
                  alt={airdrop.airdropName}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[20px] font-bold mb-2">
                  {airdrop.airdropName}
                </h3>
                <p
                  className="text-sm cursor-pointer hover:underline"
                  onClick={() => {
                    setSelectedTokenAddress(airdrop.tokenAddress);
                    alert("Token Address selected!");
                  }}
                >
                  <strong>Address:</strong> {airdrop.tokenAddress}
                </p>
                <p className="text-sm mt-[10px]">
                  <strong>Amount:</strong> {airdrop.tokenAmount}
                </p>

                <div className="flex flex-row justify-between items-center mt-[10px]">
                  <p>Start: {formatDate(airdrop.startDate)}</p>
                  <p>End: {formatDate(airdrop.endDate)}</p>
                </div>

                <div className="flex flex-row justify-between items-center mt-[10px]">
                  <p>Claimable Amount: {airdrop.claimableAmount}</p>
                  <p>Claim Fee: {airdrop.claimableFees}</p>
                </div>

                <p className="font-sans mt-[20px] text-sm border text-white border-[#5E65DC] rounded-[26px] px-[32px] py-[12px] text-center">
                  <a
                    href={airdrop.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Visit Website</strong>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No airdrops available.</div>
      )}
    </div>
  );
};

export default AdminPanel;
