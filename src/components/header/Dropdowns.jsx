// import Arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { tools1, tools2 } from "./Tools";
import { useState } from "react";
// import Header from "./Header";

const Dropdowns = () => {
  const navigate = useNavigate();

  const [showAll, setShowAll] = useState(false);

  // Determine the number of items to show based on 'showAll' state
  const itemsToDisplay = showAll ? tools1 : tools1.slice(0, 4);
  false;

  const handleCategoryClick = (category) => {
    navigate(`/news/${category}`);
  };

  // const handleToolClick = (link) => {
  //   setSelectedTool(link); // Set the selected tool link for the iframe
  //   setIsIframeOpen(true);
  // };

  return (
    <div className="dropdown_complete">

      <div className="dropdown_complete_first">
        <div className="drop_item_heading">
          <h2 className="flex flex-row items-center gap-[5px] text-[18px] text-white">
            News{" "}
            <svg
              data-v-9493e270=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="arrow"
              className="arrow_of_item text-fg-default rotate-270 group-hover:rotate-90 group-hover:text-fg-inverted transition text-uiMWeak"
            >
              <path
                data-v-9493e270=""
                d="M9.08 3.61a.2.2 0 01.284 0l.777.779a.2.2 0 010 .283L6.944 7.868a.2.2 0 000 .283l3.196 3.197a.2.2 0 010 .283l-.777.778a.2.2 0 01-.283 0L4.822 8.15a.2.2 0 010-.283l4.259-4.257z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </h2>
        </div>

        <div className="dropdown_menus">
          <ul>
            <li onClick={() => handleCategoryClick("cryptocurrencies")}>
              CRYPTO CURRENCIES
            </li>
            <li onClick={() => handleCategoryClick("nft")}>NFT NEWS</li>
            <li onClick={() => handleCategoryClick("ai")}>AI NEWS</li>
            <li onClick={() => handleCategoryClick("metaverse")}>META VERSE</li>
            {/* <Link to="/policyandregulations">
              {" "}
              <li>POLICY AND REGULATIONS</li>
            </Link> */}
          </ul>
        </div>
      </div>

      <div className="dropdown_complete_first">
        <div className="drop_item_heading">
          <h2 className="flex flex-row items-center gap-[5px] text-[18px] text-white">
            Tools
            <svg
              data-v-9493e270=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="arrow"
              className="arrow_of_item text-fg-default rotate-270 group-hover:rotate-90 group-hover:text-fg-inverted transition text-uiMWeak"
            >
              <path
                data-v-9493e270=""
                d="M9.08 3.61a.2.2 0 01.284 0l.777.779a.2.2 0 010 .283L6.944 7.868a.2.2 0 000 .283l3.196 3.197a.2.2 0 010 .283l-.777.778a.2.2 0 01-.283 0L4.822 8.15a.2.2 0 010-.283l4.259-4.257z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </h2>
        </div>
        <div className="dropdown_menus">
          <div>
            <h2 className="text-gray-600 font-bold font-sans text-[20px] mb-[2rem]">
              Crypto Tools
            </h2>
            <ul>
              {itemsToDisplay.map((item, id) => (
                <Link
                  className="text-[16px] font-bold font-sans"
                  key={id}
                  to={item.link}
                >
                  {item.name}
                </Link>
              ))}
            </ul>

            {!showAll && tools1.length > 4 && (
              <button
                onClick={() => setShowAll(true)}
                className="text-blue-500 mt-2"
              >
                Read More
              </button>
            )}
            {showAll && tools1.length > 4 && (
              <button
                onClick={() => setShowAll(false)}
                className="text-blue-500 mt-2"
              >
                Show Less
              </button>
            )}
          </div>

          <div>
            <h2 className="text-gray-600 font-bold font-sans text-[20px] mb-[2rem]">
              NFT Tools
            </h2>
            <ul>
              {tools2.map((item, id) => (
                <Link
                  className="text-[16px] font-bold font-sans"
                  key={id}
                  to={item.link}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="dropdown_complete_first">
        <div className="drop_item_heading">
          <h2 className="flex flex-row items-center gap-[5px] text-[18px] text-white">
            Features
            <svg
              data-v-9493e270=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="arrow"
              className="arrow_of_item text-fg-default rotate-270 group-hover:rotate-90 group-hover:text-fg-inverted transition text-uiMWeak"
            >
              <path
                data-v-9493e270=""
                d="M9.08 3.61a.2.2 0 01.284 0l.777.779a.2.2 0 010 .283L6.944 7.868a.2.2 0 000 .283l3.196 3.197a.2.2 0 010 .283l-.777.778a.2.2 0 01-.283 0L4.822 8.15a.2.2 0 010-.283l4.259-4.257z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </h2>
        </div>

        <div className="dropdown_menus">
          <ul>
            <Link to="/events">
              <li>Crypto Events</li>
            </Link>
            <Link to="/campus">
              <li>Crypto Campus</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="dropdown_complete_first">
        <div className="drop_item_heading">
          <h2 className="flex flex-row items-center gap-[5px] text-[18px] text-white">
            Airdrops
            <svg
              data-v-9493e270=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="arrow"
              className="arrow_of_item text-fg-default rotate-270 group-hover:rotate-90 group-hover:text-fg-inverted transition text-uiMWeak"
            >
              <path
                data-v-9493e270=""
                d="M9.08 3.61a.2.2 0 01.284 0l.777.779a.2.2 0 010 .283L6.944 7.868a.2.2 0 000 .283l3.196 3.197a.2.2 0 010 .283l-.777.778a.2.2 0 01-.283 0L4.822 8.15a.2.2 0 010-.283l4.259-4.257z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </h2>
        </div>

        <div className="dropdown_menus">
          <ul>
            <Link to="/createairdrop">
              <li>Create Airdrops</li>
            </Link>
            <Link to="/claimairdrop">
              <li>Claim Airdrops</li>
            </Link>
            {/* <Link to="">
              <li>Upcoming Airdrops</li>
            </Link> */}
            <Link to="/completedAirdrop">
              <li>Ended Airdrops</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="dropdown_complete_first">
        <div className="drop_item_heading">
          <Link to="/career">
            <h2 className="flex flex-row items-center gap-[5px] text-[18px] text-white">
              Careers
            </h2>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Dropdowns;
