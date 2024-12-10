// import React from 'react';
import "./ClaimAirdrop.css";

const CompletedAirdrop = () => {
  const completedData = [
    {
      id: 1,
      name: "BitMart X WEN",
      type: "Airdrop pool",
      reward: "3,000,000 WEN",
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F2ec2f2eb-14b5-4729-adc7-c023505e345b.jpg&w=1920&q=75",
      link: "https://airdrop.io/airdrop/bitmart-x-wen",
    },
    {
      id: 2,
      name: "PAPA",
      type: "Airdrop pool",
      reward: "$10,000 worth of PAPA",
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F00a47020-4025-4721-8d24-7ebe7d202add.jpg&w=1920&q=75",
      link: "https://airdrop.io/airdrop/papa",
    },
    {
      id: 3,
      name: "BitMart X BCHAT",
      type: "Airdrop pool",
      reward: "500 BCHAT",
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Fa2284d01-a53f-4638-908e-ce2162ccef9d.jpg&w=1920&q=75",
      link: "https://airdrop.io/airdrop/bitmart-x-bcha",
    },
    {
      id: 4,
      name: "Bitget X RoOLZ",
      type: "Airdrop pool",
      reward: "480,000 GODL",
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F7e689b4e-91ef-4db7-9c12-0885931d28b2.jpg&w=1920&q=75",
      link: "https://airdrop.io/airdrop/bitget-x-roolz",
    },
    {
      id: 5,
      name: "BitMart X RDT",
      type: "Airdrop pool",
      reward: "80,000 RDT",
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F910bc008-2003-430e-961b-7f8e8de0232e.jpg&w=1920&q=75",
      link: "https://airdrop.io/airdrop/bitmart-x-rdt",
    },
    {
      id: 6,
      name: "Skate Passport",
      type: "Airdrop pool",
      reward: "Token & Points",
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F283ce436-45c6-4967-811a-d4f97a277aa6.jpg&w=1920&q=75",
      link: "https://airdrop.io/airdrop/skate-passport",
    },
    {
      id: 7,
      name: "BitMart X ABRA",
      type: "Airdrop pool",
      reward: "60,000 ABRA",
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F6673d199-b55c-4cba-bd70-f98f32c76056.jpg&w=1920&q=75",
      link: "https://airdrop.io/airdrop/bitmart-x-abra",
    },
    {
      id: 8,
      name: "MooCoin",
      type: "Airdrop pool",
      reward: "$130,000 worth of MOO",
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F53e77157-a465-4c00-86a5-d0b2d16fec21.jpg&w=1920&q=75",
      link: "https://airdrop.io/airdrop/moocoin",
    },
    {
      id: 9,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Fcb6c417a-f88e-4f00-9933-b88e741b0c63.jpg&w=1920&q=75",
      name: "TON Station",
      link: "https://airdrop.io/airdrop/ton-stationone",
    },
    {
      id: 10,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F3203ab44-1f25-4f8f-a054-a170ff21276c.jpg&w=1080&q=75",
      name: "Lake",
      link: "https://airdrop.io/airdrop/lake",
    },
    {
      id: 11,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F75a0d28e-5b26-425d-8119-4e209f8d75bb.png&w=1080&q=75",
      name: "Corn Battles",
      link: "https://airdrop.io/airdrop/corn-battles",
    },
    {
      id: 12,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Fe918f4b4-ed2d-4361-8be3-de776b8286ed.jpg&w=1080&q=75",
      name: "BIRDS",
      link: "https://airdrop.io/airdrop/birds",
    },
    {
      id: 13,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F39aa7fd0-54ad-4b16-aa96-f9e2184c5235.jpg&w=1080&q=75",
      name: "TrustaTON",
      link: "https://airdrop.io/airdrop/trustaton",
    },
    {
      id: 14,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F3f98052a-3495-4ab8-a2fa-eeed5e7cf5c3.png&w=1080&q=75",
      name: "Bitget x xempiregame",
      link: "https://airdrop.io/airdrop/bitget-x-xempiregame-8bddfcab-cbae-40f7-915e-f30b56a46e91",
    },
    {
      id: 15,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F4304cd8f-aa72-4d87-9db1-cad58c1c7cff.jpg&w=1080&q=75",
      name: "Navis War",
      link: "https://airdrop.io/airdrop/navis-wario",
    },
    {
      id: 16,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Fbe9970ec-a514-47b5-b1d6-5ee2f365e353.jpg&w=1080&q=75",
      name: "BANANA",
      link: "https://airdrop.io/airdrop/bananaio",
    },
  ];

  return (
    <div className="claimTokensbg">
      <h2 className="text-white font-sans font-bold text-[48px] p-[20px]">
        Completed
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {completedData.map((airdrop) => (
          <div
            key={airdrop.id}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            <a href={airdrop.link} target="_blank" rel="noopener noreferrer">
              <img
                src={airdrop.img}
                alt={airdrop.name}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-center text-xl font-bold p-4">
                {airdrop.name}
              </h3>

              <button className="bg-[#5E65DC] w-[100%] text-black text-[20px] py-[10px] px-[30px] font-bold ">
                <a
                  href={airdrop.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Claim
                </a>
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedAirdrop;
