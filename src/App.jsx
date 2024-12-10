// import React from 'react'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.jsx";
// import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FearAndGreed from "./pages/FearAndGreed/FearAndGreed.jsx";
import CompleteRambo from "./pages/RamboChart/CompleteRambo.jsx";
import Blog from "./pages/Blogs/Blogs.jsx";
import Policy from "./pages/Policy/Policy.jsx";
import NewsPage from "./pages/News/NewsPage.jsx";
import Scroll from "./components/ScrollToTop/Scroll.jsx";
import Testing from "./Testing.jsx";
import AllTokens from "./pages/AllTokens/AllTokens.jsx";
import Slider from "./pages/MainSlider/Slider.jsx";
import Slider2 from "./pages/MainSlider/Slider2.jsx";
import BlogDesc from "./pages/BlogDesc/BlogDesc.jsx";
import WalletButton from "./components/Wallet/Wallet.jsx";
// import CreateAirdrop from "./pages/CreateAirdrop/CreateAirdrop.jsx";
 
// import NewAir from './pages/CreateAirdrop/NewAir.jsx'

import Fear from "./components/FearComponent/Fear.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTokens from "./pages/CreateAirdrop/AddTokens.jsx";
import Career from "./pages/Career/Career.jsx";
import Form from "./pages/Career/Form.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import AdminPanel from "./pages/AdminPanel/AdminPanel.jsx";

import Cube from "./components/CustomCube/Cube.jsx";

import ClaimAirdrop from "./pages/ClaimAirdrop/ClaimAirdrop.jsx";
import CompletedAirdrop from "./pages/ClaimAirdrop/CompletedAirsrop.jsx";
import CreateAirdrop from "./pages/CreateAirdrop/CreateAirdrop.jsx";


import Dummy from "./pages/Career/DummyForm.jsx";
import Event from "./pages/EventsPage/Event.jsx";
import Campus from "./pages/Campus/Campus.jsx";
import ADVERTISEPRIME from'../../front/src/components/Advertise/Advertiseprime.jsx';
import FIRSTGLOVE from '../../front/src/components/newglove/glove.jsx'
const App = () => {

   const walletAddress = localStorage.getItem("publicKey");

   console.log(walletAddress)

  return (
    <>
      <ToastContainer />
      {/* <ScrollToTop
        smooth={true}
        top="20"
        color="black"
        height="20"
        width="20"
        style={{
          borderRadius: "90px",
          backgroundColor: "#FABC2C",
          display: "flex",
          justifyContent: "center",
          fontWeight: "700",
          alignItems: "center",
        }}
      /> */}

      {/* Popup Window */}

      <Header />
      {/* <NewSlider / > */}

      {/* <> */}
      <Scroll />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/fearandgreed" element={<FearAndGreed />} />
        <Route path="/rambochart" element={<CompleteRambo />} />
        {/* <Route path="/form" element={<Form />} /> */}
        <Route path="/policyandregulations" element={<Policy />} />
        <Route path="/news/:category" element={<NewsPage />} />
        <Route path="/test" element={<Testing />} />
        {/* <Route path="/cryptoVc" element={<CryptoVC />} /> */}
        <Route path="/alltokens" element={<AllTokens />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/slide" element={<Slider />} />
        <Route path="/slide2" element={<Slider2 />} />
        <Route path="/blog/:name" element={<BlogDesc />} />
        <Route path="/wallet" element={<WalletButton />} />
        {/* <Route path="/createairdrop" element={<NewAir walletAddress = {walletAddress}/>} /> */}
        <Route path="/createairdrop" element={<CreateAirdrop walletAddress = {walletAddress}/>} />
        <Route path="/newFear" element={<Fear />} />
        <Route path="/addtokens" element={<AddTokens walletAddress = {walletAddress}/>} />
        <Route path="/career" element={<Career />} />
        <Route path="/careerForm/" element={<Form />} />
        <Route
          path="/admin"
          element={<PrivateRoute Component={AdminPanel} />}
        />
        <Route path="/cube" element={<Cube />} />
        <Route path="/claimairdrop" element={<ClaimAirdrop />} />
        <Route path="/completedAirdrop" element={<CompletedAirdrop />} />
        <Route path="/dummy" element={<Dummy />} />

        <Route path="/events" element={<Event />} />

        <Route path="/campus" element={<Campus />} />
        <Route path="/GLOVE" element={<FIRSTGLOVE />} />

        <Route path="/Advertiseprime" element={<ADVERTISEPRIME />} />
      </Routes>
      {/* </> */}

      {/* <Review /> */}
      <Footer />
    </>
  );
};

export default App;



