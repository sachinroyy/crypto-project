/* eslint-disable no-unused-vars */
// src/components/CryptoComparison.jsx
import { useState } from "react";
import RamboChart from "./RamboChart";

const CryptoComparison = () => {
  const [selectedCryptos, setSelectedCryptos] = useState([
    "bitcoin",
    "ethereum",
  ]);

  const addCrypto = (crypto) => {
    setSelectedCryptos([...selectedCryptos, crypto]);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">Compare Cryptocurrencies</h2>
      <div className="flex space-x-4">
        {selectedCryptos.map((crypto) => (
          <RamboChart key={crypto} crypto={crypto} />
        ))}
      </div>
      {/* <button
        onClick={() => addCrypto('litecoin')}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Add Litecoin
      </button> */}
    </div>
  );
};

export default CryptoComparison;
