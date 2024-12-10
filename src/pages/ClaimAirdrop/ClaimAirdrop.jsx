// import React from 'react';
import './ClaimAirdrop.css'

const ClaimAirdrop = () => {

  const ClaimAirdropData = [
    {
      id: 1,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F3a9fb0f4-1ebe-4068-a89d-655759bb675b.jpg&w=1920&q=75",
      name: "Pigeon",
      link: "https://airdrop.io/airdrop/pigeon-56b8bfc8-189d-4847-bc58-80d5fa4f9556",
    },
    {
      id: 2,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Fc54233e1-92b5-4f5b-be29-db8930dab1d6.jpg&w=1920&q=75",
      name: "Schrodinger's Cat",
      link: "https://airdrop.io/airdrop/schrodinger's-cat",
    },
    {
      id: 3,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F910bc008-2003-430e-961b-7f8e8de0232e.jpg&w=1920&q=75",
      name: "BitMart X RDT",
      link: "https://airdrop.io/airdrop/genius-ai",
    },
    {
      id: 4,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F2%2F14b8e5d6-a77a-4549-b141-39f4dfb295fb.png&w=1920&q=75",
      name: "Genius AI",
      link: "https://airdrop.io/airdrop/iton-exchange",
    },
    {
      id: 5,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Fd1762c36-8159-4093-99cd-0049789d4992.jpg&w=1920&q=75",
      name: "BOME AI",
      link: "https://airdrop.io/airdrop/bome-ai",
    },
    {
      id: 6,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Fcb2e3360-747f-4687-9f3a-2a0b5f71b61b.png&w=1920&q=75",
      name: "TravelFrog",
      link: "https://airdrop.io/airdrop/travelfrog",
    },
    {
      id: 7,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Ff034e506-03f4-40d9-91f2-df0b663ecdb9.png&w=1920&q=75",
      name: "JackToken",
      link: "https://airdrop.io/airdrop/jacktoken",
    },
    {
      id: 8,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Fe3e49155-d355-440f-b93f-f90c78cdbae7.png&w=1920&q=75",
      name: "MovieBloc",
      link: "https://airdrop.io/airdrop/moviebloc-3b5b7aa7-4c7d-4f64-bc27-e84b5f7e8a17",
    },
    {
      id: 9,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F8142f653-2258-46a5-bff4-913002e83e12.jpg&w=1080&q=75",
      name: "Parachute App",
      link: "https://airdrop.io/airdrop/parachute-app",
    },
    {
      id: 10,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F0e0ed387-b9a5-4f89-8ce7-9540e0c55154.png&w=1080&q=75",
      name: "CSPR.fans",
      link: "https://airdrop.io/airdrop/cspr.fans",
    },
    {
      id: 11,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F7f244b81-a4ec-4b4a-82a0-55f3095e022f.jpg&w=1080&q=75",
      name: "MultipleNetwork",
      link: "https://airdrop.io/airdrop/multiplenetwork",
    },
    {
      id: 12,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F938bd6a2-3762-4698-98e0-7eaae1d24d75.jpg&w=1080&q=75",
      name: "SideFans",
      link: "https://airdrop.io/airdrop/sidefans",
    },
    {
      id: 13,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F5e8b8ee3-aaf0-44d8-964b-b4c5d5e62ca1.jpg&w=1080&q=75",
      name: "Spell Wallet",
      link: "https://airdrop.io/airdrop/spell-wallet",
    },
    {
      id: 14,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Fdaca3510-d680-4a5b-8df8-21aaaa9dc749.jpg&w=1080&q=75",
      name: "BETON",
      link: "https://airdrop.io/airdrop/beton",
    },
    {
      id: 15,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F145b3148-1cac-445e-b1c0-73d6adc6b582.jpg&w=1080&q=75",
      name: "Etaku",
      link: "https://airdrop.io/airdrop/etaku",
    },
    {
      id: 16,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Fab274488-cfa3-45b0-9adf-5c0ffb314bea.jpg&w=1080&q=75",
      name: "SEED",
      link: "https://airdrop.io/airdrop/seed",
    },
    {
      id: 17,
      img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2Ffe506b83-8bfb-4ed8-a4e6-ab7111feaee9.jpg&w=1080&q=75",
      name: "VOOI",
      link: "https://airdrop.io/airdrop/vooi",
    },
    // {
    //   id: 18,
    //   img: "https://airdrop.io/_next/image?url=https%3A%2F%2Fs3.eu-central-003.backblazeb2.com%2Fcontests%2F650%2F1edc4a8d-fd2f-4939-b035-b5298f57fffd.jpg&w=1080&q=75",
    //   name: "CryptoDID",
    //   link: "https://airdrop.io/airdrop/cryptodid",
    // },
  ];
  

  return (

    <div className='claimTokensbg'>
    <h2 className='text-white font-sans font-bold text-[48px] p-[20px]'>Featured</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {ClaimAirdropData.map((airdrop) => (
        <div key={airdrop.id} className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
          <a href={airdrop.link} target="_blank" rel="noopener noreferrer">
            <img src={airdrop.img} alt={airdrop.name} className="w-full h-40 object-cover" />
            <h3 className="text-center text-xl font-bold p-4">{airdrop.name}</h3>

            <button className='bg-[#5E65DC] w-[100%] text-black text-[20px] py-[10px] px-[30px] font-bold '><a href={airdrop.link} target="_blank" rel="noopener noreferrer">Claim</a></button>
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ClaimAirdrop;
