import "./Header.css";
import { useEffect, useState } from "react";
import { data1, data3, airdrops , Features } from "../footer/Footer";
// import Cancel from "../../assets/cancel.png";
import { Link } from "react-router-dom";
import WalletButton from "../Wallet/Wallet";
import Dropdown from "./Dropdowns";
import NewLogo from "../../assets/NewColorLogoWebsite.png";
import MobileLogo from "../../assets/NewColorLogoWebsite.png";
import MobileHamburger from "../../assets/FinalNewMobileham.png";
import ChevronBlack from "../../assets/IconForOpeningSidbarListBlack.png";
import ChevronWhite from "../../assets/IconForOpeningSidebarListWhite.png";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false); // State to track News section open/close
  const [isToolsOpen, setIsToolsOpen] = useState(false); // State to track Tools section open/close
  const [isAirdropsOpen, setIsAirdropsOpen] = useState(false); // State to track Airdrops section open/close
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false); // State to track Features section open/close
  // const [search, setSearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const navigate = useNavigate();

  // const closeSearch = () => {
  //   setSearch(false);
  // };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [chevronColor, setChevronColor] = useState(ChevronWhite); // Default white chevron

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setSidebarVisible(!sidebarVisible);
    // setChevronColor(isSidebarOpen ? ChevronWhite : ChevronBlack); // Toggle Chevron color
  };

  const toggleNewsDrawer = () => {
    setIsNewsOpen(!isNewsOpen);
    setIsToolsOpen(false); // Close Tools when News is opened
    setIsAirdropsOpen(false); // Close Airdrops when News is opened
    setIsFeaturesOpen(false)
  };

  const toggleToolsDrawer = () => {
    setIsToolsOpen(!isToolsOpen);
    setIsNewsOpen(false); // Close News when Tools is opened
    setIsAirdropsOpen(false); // Close Airdrops when Tools is opened
    setIsFeaturesOpen(false)
  };

  const toggleAirdropsDrawer = () => {
    setIsAirdropsOpen(!isAirdropsOpen);
    setIsNewsOpen(false); // Close News when Airdrops is opened
    setIsToolsOpen(false); // Close Tools when Airdrops is opened
    setIsFeaturesOpen(false)
  };

  const toggleFeaturessDrawer = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
    setIsNewsOpen(false); // Close News when Airdrops is opened
    setIsToolsOpen(false); // Close Tools when Airdrops is opened
    setIsAirdropsOpen(false);
  };

  // const onBLogClick = () => {
  //   navigate("/blog");
  // };
  // const toggleModal = () => {
  //   setIsModalOpen((prev) => !prev);
  // };

  // Disable background scrolling when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            src={NewLogo}
            alt="Logo"
            className="w-[250px]"
            // onClick={iframeFucntion}
          />
        </Link>

        {/* <RatesSlider /> */}
        <Dropdown />

        <div className="select_wrapper">
          {/* <h2
            className="text-white bg-blue-600 py-[5px] px-[10px] font-bold font-sans rounded-[5px] cursor-pointer"
            onClick={toggleModal}
          >
            Wallet
          </h2> */}
          <h2>
            {" "}
            <WalletButton />{" "}
          </h2>
          {/* <h2 className="advertise">Advertise</h2> */}
        </div>
      </div>
      {/* Wallet Modal Component */}
      {isModalOpen && (
        <WalletButton
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {/* <Dropdowns /> */}
      <nav className="flex mg:hidden bg-[#5E65DC] h-[84px] py-[12px] pl-[12px] pr-[16px] flex-row justify-between items-center">
        {/* <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-fg-primaryDefault md:text-fg-default md:group-hover:text-common-white"
          onClick={toggleSidebar}
        >
          <path
            d="M21 18.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v1zm0-6a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v1zm0-6a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v1z"
            fill="#FABC2C"
          ></path>
        </svg> */}

        <Link to="/">
          <img src={MobileLogo} alt="" className="w-[150px]" />
        </Link>

        <img
          src={MobileHamburger}
          alt=""
          className="w-[24px] h-[24px]"
          onClick={toggleSidebar}
        />
      </nav>

      {sidebarVisible && (
        <div className={`sidebar_content ${sidebarVisible ? "show" : ""}`}>
          <div className="flex flex-col p-[2rem] gap-[1.5rem] overflow-y-scroll w-[100%]">


            {/* News Section */}
            <div className="border-[#E8E9FC] border-b-[1px] border-t-[1px] px-[20px] py-[16px]">
              {isNewsOpen ? (
                <div
                  className="flex flex-row justify-between items-center bg-[#6B71E9] text-[#0F1023] rounded-[12px] px-[20px] py-[16px] font-bold"
                  onClick={toggleNewsDrawer}
                >
                  <h2 className="text-[16px] leading-[28px]">News</h2>
                  <img
                    src={ChevronBlack}
                    alt="Chevron"
                    className="w-[14px] h-[10px]"
                  />
                </div>
              ) : (
                <div
                  className="flex flex-row justify-between items-center"
                  onClick={toggleNewsDrawer}
                >
                  <h2 className="text-[#E8E9FC] text-[16px] leading-[28px] font-[400]">
                    News
                  </h2>
                  <img
                    src={ChevronWhite}
                    alt="Chevron"
                    className="w-[14px] h-[14px]"
                  />
                </div>
              )}
              {/* Sidebar Drawer */}
              <div
                className={`sidebar_lists transition-all duration-300 px-[40px] py-[16px] ${
                  isNewsOpen
                    ? "max-h-[500px] overflow-auto block "
                    : "max-h-0 overflow-hidden hidden"
                }`}
              >
                {data1.map((item, index) => (
                  <div className="" key={index}>
                    <Link
                      to={`/news${item.link}`}
                      onClick={handleSidebarToggle}
                    >
                      <h1
                        className="text-[#C8CBF7] opacity-[0.8] text-[16px] leading-[28px] font-[400] mb-[20px]"
                        onClick={handleSidebarToggle}
                      >
                        {item.name}
                      </h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div className="border-[#E8E9FC] border-b-[1px] px-[20px] pb-[16px]">
              {isToolsOpen ? (
                <div
                  className="flex flex-row justify-between items-center bg-[#6B71E9] text-[#0F1023] rounded-[12px] px-[20px] py-[16px] font-bold"
                  onClick={toggleToolsDrawer}
                >
                  <h2 className="text-[16px] leading-[28px]">Tools</h2>
                  <img
                    src={ChevronBlack}
                    alt="Chevron"
                    className="w-[14px] h-[10px]"
                  />
                </div>
              ) : (
                <div
                  className="flex flex-row justify-between items-center"
                  onClick={toggleToolsDrawer}
                >
                  <h2 className="text-[#E8E9FC] text-[16px] leading-[28px] font-[400]">
                    Tools
                  </h2>
                  <img
                    src={ChevronWhite}
                    alt="Chevron"
                    className="w-[14px] h-[14px]"
                  />
                </div>
              )}
              {/* Sidebar Drawer */}
              <div
                className={`sidebar_lists transition-all duration-300 px-[40px] py-[16px] ${
                  isToolsOpen
                    ? "max-h-[500px] overflow-auto block"
                    : "max-h-0 overflow-hidden hidden"
                }`}
              >
                {data3.map((item, index) => (
                  <div className="" key={index}>
                    <Link
                      to={item.link ? item.link : "https://dune.com/home"}
                      onClick={handleSidebarToggle}
                    >
                      <h1
                        onClick={handleSidebarToggle}
                        className="text-[#C8CBF7] opacity-[0.8] text-[16px] leading-[28px] font-[400] mb-[20px]"
                      >
                        {item.name}
                      </h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Airdrops Section */}
            <div className="border-[#E8E9FC] border-b-[1px] px-[20px] pb-[16px]">
              {isAirdropsOpen ? (
                <div
                  className="flex flex-row justify-between items-center bg-[#6B71E9] text-[#0F1023] rounded-[12px] px-[20px] py-[16px] font-bold"
                  onClick={toggleAirdropsDrawer}
                >
                  <h2 className="text-[16px] leading-[28px]">Airdrops</h2>
                  <img
                    src={ChevronBlack}
                    alt="Chevron"
                    className="w-[14px] h-[10px]"
                  />
                </div>
              ) : (
                <div
                  className="flex flex-row justify-between items-center"
                  onClick={toggleAirdropsDrawer}
                >
                  <h2 className="text-[#E8E9FC] text-[16px] leading-[28px] font-[400]">
                    Airdrops
                  </h2>
                  <img
                    src={ChevronWhite}
                    alt="Chevron"
                    className="w-[14px] h-[10px]"
                  />
                </div>
              )}

              {/* Sidebar Drawer */}
              <div
                className={`sidebar_lists transition-all duration-300 px-[40px] py-[16px] ${
                  isAirdropsOpen
                    ? "max-h-[500px] overflow-auto block"
                    : "max-h-0 overflow-hidden hidden"
                }`}
              >
                {airdrops.map((item, index) => (
                  <div className="" key={index}>
                    <Link to={item.link} onClick={handleSidebarToggle}>
                      <h1
                        onClick={handleSidebarToggle}
                        className="text-[#C8CBF7] opacity-[0.8] text-[16px] leading-[28px] font-[400] mb-[20px]"
                      >
                        {item.name}
                      </h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/*  Features Section */}
             <div className="border-[#E8E9FC] border-b-[1px] px-[20px] pb-[16px]">
              {isFeaturesOpen ? (
                <div
                  className="flex flex-row justify-between items-center bg-[#6B71E9] text-[#0F1023] rounded-[12px] px-[20px] py-[16px] font-bold"
                  onClick={toggleFeaturessDrawer}
                >
                  <h2 className="text-[16px] leading-[28px]">Features</h2>
                  <img
                    src={ChevronBlack}
                    alt="Chevron"
                    className="w-[14px] h-[10px]"
                  />
                </div>
              ) : (
                <div
                  className="flex flex-row justify-between items-center"
                  onClick={toggleFeaturessDrawer}
                >
                  <h2 className="text-[#E8E9FC] text-[16px] leading-[28px] font-[400]">
                  Features
                  </h2>
                  <img
                    src={ChevronWhite}
                    alt="Chevron"
                    className="w-[14px] h-[10px]"
                  />
                </div>
              )}

              {/* Sidebar Drawer */}
              <div
                className={`sidebar_lists transition-all duration-300 px-[40px] py-[16px] ${
                  isFeaturesOpen
                    ? "max-h-[500px] overflow-auto block"
                    : "max-h-0 overflow-hidden hidden"
                }`}
              >
                {Features.map((item, index) => (
                  <div className="" key={index}>
                    <Link to={item.link} onClick={handleSidebarToggle}>
                      <h1
                        onClick={handleSidebarToggle}
                        className="text-[#C8CBF7] opacity-[0.8] text-[16px] leading-[28px] font-[400] mb-[20px]"
                      >
                        {item.name}
                      </h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional sections (Career) */}
            <div className="border-[#E8E9FC] border-b-[1px] px-[20px] pb-[16px]">
              <Link to="/career">
                <h2
                  className="text-[#E8E9FC] text-[16px] leading-[28px] font-[400]"
                  onClick={handleSidebarToggle}
                >
                  Career
                </h2>
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* {search && (
        <div className="flex px-[1rem] py-[0rem] border border-solid border-slate-600 h-[40px] items-center">
          🔍
          <input
            type="text"
            placeholder="Search"
            className="w-[100%] outline-none"
          />
          <img src={Cancel} alt="" onClick={closeSearch} />
        </div>
      )} */}
    </>
  );
};

export default Header;
