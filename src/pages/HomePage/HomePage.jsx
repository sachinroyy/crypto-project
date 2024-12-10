
import Billionaire from "../../components/Billionaire/Billionaire";
import Testing from "../../Testing";
import Slider2 from "../MainSlider/Slider2";
import Chatbot from "../../components/Chatbot/Chatbot";
import { Aboutus } from "../../components/AboutUs/Aboutus";
import Faq from "../../components/Faq/Faq";
import homeBannerImg1 from "../../assets/homePageCompany1.png";
import homeBannerImg2 from "../../assets/homePageComapny2.png";
import homeBannerImg4 from "../../assets/homePageCompany4.png";
import walletConnect from "../../assets/WalletConnect.png";
import Metamask from "../../assets/MetaMask (2).png";
import Ledger from '../../assets/Ledger (2).png'
import Binance from '../../assets/Binance.png'
import Electrum from '../../assets/Electrum.png'
import AdComponent  from "../../components/adscomponents/ads";
import A16Z from '../../assets/a16z.png';
import SASMUNGNEXT from '../../assets/sasmung-next.png';
import JUMP from '../../assets/jump.png';
import COINVENTURE  from '../../assets/coinventure.png';


import "./HomePage.css";
import Blogs from "../Blogs/Blogs";
import NewsPage from "../News/NewsPageForHome";
import Fear from "../../components/FearComponent/Fear";

const HomePage = () => {
  return (
    <div className="">
      <AdComponent/>
      <Fear />
      <Chatbot />
      <div className="xl:m-auto">
        {/* <Stories /> */}

        {/* <NewSlider /> */}

        <Slider2 />

        <NewsPage />

        {/* <Slider /> */}
        <div className="bg-[#0F1023]">
          <Testing query="cryptocurrency" />
        </div>

        <Billionaire />

        <Blogs />






        <div className="hidden mg:flex logo-slider bg-[#0F1023] overflow-hidden items-center py-[3rem] px-[2rem]">
          <div className="logo-slider-track flex gap-[5rem] items-center">
            <img src={homeBannerImg1} alt="Logo 1" className="w-[250px]" />
            {/* <img src={homeBannerImg2} alt="Logo 2" className="w-[250px]" /> */}
            {/* <img src={homeBannerImg3} alt="Logo 3" className="w-[250px] h-[100px]" /> */}
            <img src={homeBannerImg4} alt="Logo 4"  className="w-[250px]" />
            {/* <img src={Oak} alt="Logo 1" className="w" /> */}
            <img src={Metamask} alt="Logo 2"  className="w-[250px]"/>
            <img src={A16Z} alt="Logo 2"  className="h-12 w-[250px]"/>

            <img src={COINVENTURE} alt="Logo 2"  className=" font-bold h-24  w-[350px]"/>
            <img src={SASMUNGNEXT} alt="Logo 2"  className="h-12 w-[250px]"/>
            <img src={JUMP} alt="Logo 2"  className=" h-20 w-[250px]"/>


            {/* <img src={walletConnect} alt="Logo 2"  className="w-[250px]"/> */}
            {/* <img src={Ledger} alt="Logo 2"  className="w-[250px]"/> */}
            <img src={Binance} alt="Logo 2"  className="w-[250px]"/>
            <img src={Electrum} alt="Logo 2"  className="w-[250px]"/>
          </div>
        </div>

        <div className="flex flex-col gap-[5rem] mg:hidden logo-slider bg-[#141414] overflow-hidden items-center py-[3rem] px-[2rem]">
          {/* <div className="logo-slider-track flex gap-[5rem] items-center"> */}
            <img src={homeBannerImg1} alt="Logo 1" className="w-[250px]" />
            <img src={homeBannerImg2} alt="Logo 2" className="w-[250px]" />
            {/* <img src={homeBannerImg3} alt="Logo 3" className="w-[250px] h-[100px]" /> */}
            <img src={homeBannerImg4} alt="Logo 4"  className="w-[250px]" />
            {/* <img src={Oak} alt="Logo 1" className="w" /> */}
            <img src={Metamask} alt="Logo 2"  className="w-[250px]"/>
            {/* <img src={walletConnect} alt="Logo 2"  className="w-[250px]"/> */}
            {/* <img src={Ledger} alt="Logo 2"  className="w-[250px]"/> */}
            {/* <img src={Binance} alt="Logo 2"  className="w-[250px]"/> */}
            <img src={Electrum} alt="Logo 2"  className="w-[250px]"/>
          </div>
        {/* </div> */}

        

        <Aboutus />

        {/* <Testimonial /> */}

        <Faq />
      </div>
    </div>
  );
};

export default HomePage;
