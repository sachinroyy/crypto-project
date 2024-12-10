import { useState, useEffect } from "react";
import {
  techData,
  opsData,
  dmData,
  contentData,
  anchorData,
} from "./CareerData";
import applyIcon from "../../assets/EasyApplyArrow.png";
// import RightArrow from "../../assets/RightArrow.png";
import RightArrowNew from "../../assets/backArrowForCareer.png";
// import { useNavigate } from "react-router-dom";
import Form from "./Form";
import CareerBgImg from "../../assets/CareerPagebg.png";
import ExploreIcon from "../../assets/CareerExploreIcon.png";
import DmIcon from "../../assets/DmJobIcon.png";
import TechIcon from "../../assets/TechJobIcon.png";
import opsIcon from '../../assets/OperationsIconNew.png'
import RadioIcon from '../../assets/RadioNewIcon.png'
import ContentIcon from '../../assets/ContentIconNew.png'

import JdImg1 from "../../assets/jdImg1.png";
import JdImg2 from "../../assets/jdImg2.png";
import JdImg3 from "../../assets/jdImg3.png";
// import JdImg4 from '../../assets/jdImg4.png'
import Jd4 from "../../assets/jbImg4.png";
import Globe from "../../components/newglove/glove";
// import ImageForCareerPagemain from '../../assets/imageForCareerPageMobile.png'

const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tech");
  const [selectedJob, setSelectedJob] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  const categories = [
    { value: "Tech", label: "Tech Related Jobs", img: TechIcon },
    { value: "Operations", label: "Operations Jobs", img: opsIcon },
    {
      value: "Digital Marketing",
      label: "Digital Marketing Jobs",
      img: DmIcon,
    },
    { value: "Content", label: "Content Writer Jobs", img: ContentIcon },
    { value: "Anchor", label: "Broadcast Anchor Jobs", img: RadioIcon },
  ];

  //  Load the applied job IDs from local storage on component mount

  useEffect(() => {
    const storedAppliedJobIds =
      JSON.parse(localStorage.getItem("appliedJobIds")) || [];
    setAppliedJobIds(storedAppliedJobIds);
  }, []);

  console.log(typeof appliedJobIds);

  // Function to get the job data based on the selected category
  const getJobData = () => {
    switch (selectedCategory) {
      case "Tech":
        return techData;
      case "Operations":
        return opsData;
      case "Digital Marketing":
        return dmData;
      case "Content":
        return contentData;
      case "Anchor":
        return anchorData;
      default:
        return techData;
    }
  };

  const jobData = getJobData();

  const allJobs = [
    ...techData,
    ...opsData,
    ...dmData,
    ...contentData,
    ...anchorData,
  ];
  // Function to handle the "Easy Apply" button click
  const applyNow = (id) => {
    const clickedJob = allJobs.find((job) => job.id === id);
    setSelectedJob(clickedJob); // Set the clicked job

    // Update the applied job IDs in local storage and state
    // const updatedAppliedJobIds = [...appliedJobIds, id];
    // setAppliedJobIds(updatedAppliedJobIds);
    // localStorage.setItem("appliedJobIds", JSON.stringify(updatedAppliedJobIds));
  };

  const redirectToForm = () => {
    // navigate("/careerForm");
    setPopupVisible(true);
    // setSelectedJob(null)
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="careerBg">
      <div className="container mx-auto px-4 py-8 w-[100%] mg:w-[70%]">
        {/* <h2 className="text-3xl font-bold text-center mb-6">
        Join Our Journey: Shape the Future with Us
      </h2> */}

        <div className="flex-col mg:flex-row flex justify-center items-center">
          
          <div>
            <h2 className="text-[32px] leading-[35px] mg:text-[48px] font-bold font-sans text-[#0F1023]">
              {allJobs.length} Jobs <span className="text-white">For You</span>
            </h2>
            <p className="text-white text-[14px] mg:text-[16px] mt-[10px]">
              Join our dynamic team and shape the future of innovation. We value
              creativity, collaboration, and growth, empowering you to achieve
              your career aspirations
            </p>
            <button className="mt-[10px] bg-[#0F1023] px-[32px] py-[12px] text-white rounded-[26px] flex justify-center items-center gap-[10px] ">
              Explore{" "}
              <img
                className="w-[16px] h-[16px] mt-[5px]"
                src={ExploreIcon}
                alt=""
              />
            </button>
          </div >
         <div> <Globe/></div>
          {/* <img src={CareerBgImg} alt="" className=""/> */}

          {/* <img src={ImageForCareerPagemain} alt="" className="block mg:hidden w-[188px] h-[188px]"/> */}
        </div>

        {/* Dropdown for Job Category Selection */}
        {/* {!selectedJob && (
          <div className="mb-6 flex justify-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Tech">Tech Related Jobs</option>
              <option value="Operations">Operations Jobs</option>
              <option value="Digital Marketing">Digital Marketing Jobs</option>
              <option value="Content">Content Writer Jobs</option>
              <option value="Anchor">Broadcast Anchor Jobs</option>
            </select>
          </div>
        )} */}
        {!selectedJob && (
          <div className="mg:flex flex-col mt-[2rem] hidden">
            <h2 className="text-[24px] mg:text-[48px] font-bold font-sans text-white text-center mb-[20px]">
              Explore More <span className="text-[#5E65DC]">Jobs</span>
            </h2>
            <div className="mb-6 flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <div
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex justify-center items-center flex-col px-6 py-4 rounded-lg shadow cursor-pointer ${
                    selectedCategory === category.value
                      ? " text-white"
                      : " text-gray-600"
                  } hover:shadow-lg`}
                >
                  <img src={category.img} alt="" className="w-[74px] h-[74px]"/>
                  <p className="font-semibold">{category.label}</p>
                </div>
              ))}
              {/* <div className="mt-4 text-gray-700">
              <strong>Selected Category:</strong> {selectedCategory}
            </div> */}
            </div>
          </div>
        )}



        {!selectedJob && (
          <div className="flex flex-col mt-[2rem] mg:hidden">
            <h2 className="text-[24px] mg:text-[48px] font-bold font-sans text-white text-center mb-[20px]">
              Explore More <span className="text-[#5E65DC]">Jobs</span>
            </h2>
            <div className="mb-6 flex overflow-x-scroll gap-[1.5rem]">
              {categories.map((category) => (
                <div
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex justify-center items-center flex-col px-[0.5rem] py-4 rounded-lg shadow cursor-pointer ${
                    selectedCategory === category.value
                      ? " text-white"
                      : " text-gray-600"
                  } hover:shadow-lg`}
                >
                  <img src={category.img} alt="" className="w-[74px] h-[74px]"/>
                  <p className="font-semibold whitespace-nowrap">{category.label}</p>
                </div>
              ))}
              {/* <div className="mt-4 text-gray-700">
              <strong>Selected Category:</strong> {selectedCategory}
            </div> */}
            </div>
          </div>
        )}

        {/* If a job is selected, show only that job with its description */}
        {selectedJob ? (
          <>
            <img
              src={RightArrowNew}
              alt=""
              onClick={() => setSelectedJob(null)}
              className="w-[30px] h-[30px] mb-[20px] cursor-pointer transform rotate-180"
            />

            <div className="flex flex-col mg:flex-row gap-6">
              {/* Selected Job Card */}
              <div className="p-6 bg-[#1E2046] shadow-md rounded-tr-[3.5rem] rounded-bl-[3.5rem] text-white w-[100%] mg:w-[40%] h-fit">
                <h3 className="text-xl font-semibold mb-2">
                  Job id : {selectedJob.id}
                </h3>
                <h3 className="text-xl font-semibold mb-2">
                  {selectedJob.title}
                </h3>
                <p className=" text-[#ffc93f] font-sans font-semibold text-[20px] mb-2">
                  Crypto Venture
                </p>
                <p className=" mb-1">
                  <strong>Location:</strong> {selectedJob.location}
                </p>
                <p className="">&#x2022; {selectedJob.description1}</p>
                <p className=" mt-[5px]">&#x2022; {selectedJob.description2}</p>

                <button
                  className="flex flex-row justify-center items-center bg-black text-white gap-[10px] mt-[1rem] rounded-[10px] py-[5px] px-[10px]"
                  onClick={() => applyNow(selectedJob.id)}
                >
                  Easy Apply
                  <img className="w-[20px] h-[20px]" src={applyIcon} alt="" />
                </button>
              </div>

              {/* Job Description */}
              {/* <div className="careerPageJd flex-1">
                <h2 className="text-2xl font-bold mb-4">{selectedJob.title}</h2>

                <button
                  className="whitespace-nowrap flex justify-center items-center py-[0.5rem] px-[1rem] font-sans font-bold bg-blue-500 text-white rounded-lg gap-[10px] mb-[1rem]"
                  onClick={redirectToForm}
                >
                  Apply Now{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    role="img"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="w-[1rem] h-[1rem] mt-[5px] css-1jid7dy eac13zx0"
                  >
                    <path d="M11.5 3a.5.5 0 00-.5.5v.502a.5.5 0 00.5.5h2.938l-7.533 7.532a.5.5 0 000 .708l.353.353a.5.5 0 00.708 0L15.5 5.56V8.5a.5.5 0 00.5.5h.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z"></path>
                    <path d="M5 3.002a2 2 0 00-2 2V15a2 2 0 002 2h9.998a2 2 0 002-2v-3.5a.5.5 0 00-.5-.5H16a.5.5 0 00-.5.5v4h-11v-11h4A.5.5 0 009 4v-.498a.5.5 0 00-.5-.5H5z"></path>
                  </svg>
                </button>

                <p className="mb-2">
                  <strong>Location:</strong> {selectedJob.location}
                </p>

                <h2 className="font-bold font-sans text-[20px] mb-[10px] ">
                  About Company
                </h2>
                <p className="mb-[10px]">
                  <span className="font-bold font-sans">Crypto Venture</span> is
                  the world’s first video news platform focused on real-time
                  updates for Bitcoin prices, crypto news, and the latest in
                  crypto coins. We simplify complex cryptocurrency news,
                  delivering expert insights on Crypto, AI, NFTs, and exclusive
                  Airdrop services. Stay informed about trending Airdrop
                  opportunities, digital assets, and emerging technologies. With
                  expert analysis and updates, we keep you ahead of the
                  trends—all in one place.
                </p>

                <h2 className="font-bold font-sans text-[20px] mb-[10px] ">
                  Job Description
                </h2>
                <p className="mb-2">
                  {selectedJob.jobDescription +
                    " . " +
                    selectedJob.description2 +
                    " . " +
                    selectedJob.description1}
                </p>
                <div>
                  {selectedJob.requirements.map((requirement, index) => (
                    <p key={index} className="mb-2">
                      &#x2022; {requirement}
                    </p>
                  ))}
                </div>

                <h2 className="font-bold font-sans text-[20px] mb-[10px] mt-[10px]">
                  Good to have
                </h2>

                <div>
                  {selectedJob.additionalSkills.map((requirement, index) => (
                    <p key={index} className="mb-2">
                      &#x2022; {requirement}
                    </p>
                  ))}
                </div>

                <h2 className="font-bold font-sans text-[20px] mb-[10px] mt-[10px]">
                  **Terms and Conditions**
                </h2>
                <div>
                  <ul>
                    <li className="mb-[10px]">
                      {" "}
                      &#x2022; Must be able to give 400-450 hours a month.
                    </li>
                    <li className="mb-[10px]">
                      &#x2022; Must have 6 months of experience in your desired
                      field.
                    </li>
                    <li className="mb-[10px]">
                      &#x2022; Intern must be available for minimum 6 months and
                      maximum depending upon your skills and performance.
                    </li>
                    <li className="mb-[10px]">
                      &#x2022; Upon completion you will be sure shot eligible
                      for the{" "}
                      <span className="text-red-700 font-bold">
                        airdrop(minimum $1000 to no limits)
                      </span>
                      .
                    </li>
                    <li className="mb-[10px]">
                      &#x2022; Opportunity to transition into a full-time role
                      based on performance.
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className="flex-1 relative z-10">
                {/* Background Images */}
                <div className="absolute inset-0 z-0">
                  <div className="flex flex-wrap justify-around items-center">
                    <img
                      src={JdImg1}
                      alt="Background 1"
                      className="bounce-animation w-1/3 h-auto opacity-100 absolute top-[-1%] mg:top-[-6%] left-[-6%]"
                    />
                    <img
                      src={JdImg3}
                      alt="Background 2"
                      className="bounce-animation w-1/3 h-auto opacity-100 absolute bottom-[-50px] mg:bottom-[-70px] right-[0%] mg:right-[-13%]"
                    />
                    <img
                      src={JdImg2}
                      alt="Background 3"
                      className="bounce-animation w-1/3 h-auto opacity-100 absolute top-[-3%] mg:top-[-7%] right-[0%] mg:right-[-15%] transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <img
                      src={Jd4}
                      alt="Background 3"
                      className="bounce-animation w-1/3 h-auto opacity-100 absolute top-[95%] mg:top-[90%] right-[70%] mg:right-[80%] transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>

                {/* Glassmorphic JD Section */}
                <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 shadow-lg text-white">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedJob.title}
                  </h2>

                  <button
                    className="whitespace-nowrap flex justify-center items-center py-2 px-4 font-sans font-bold bg-blue-500 text-white rounded-lg gap-2 mb-4"
                    onClick={redirectToForm}
                  >
                    Apply Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                      role="img"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="w-4 h-4 mt-1"
                    >
                      <path d="M11.5 3a.5.5 0 00-.5.5v.502a.5.5 0 00.5.5h2.938l-7.533 7.532a.5.5 0 000 .708l.353.353a.5.5 0 00.708 0L15.5 5.56V8.5a.5.5 0 00.5.5h.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z"></path>
                      <path d="M5 3.002a2 2 0 00-2 2V15a2 2 0 002 2h9.998a2 2 0 002-2v-3.5a.5.5 0 00-.5-.5H16a.5.5 0 00-.5.5v4h-11v-11h4A.5.5 0 009 4v-.498a.5.5 0 00-.5-.5H5z"></path>
                    </svg>
                  </button>

                  <p className="mb-2">
                    <strong>Location:</strong> {selectedJob.location}
                  </p>

                  <h2 className="font-bold font-sans text-lg mb-2">
                    About Company
                  </h2>
                  <p className="mb-4">
                    <span className="font-bold font-sans">Crypto Venture</span>{" "}
                    is the world’s first video news platform focused on
                    real-time updates for Bitcoin prices, crypto news, and the
                    latest in crypto coins. We simplify complex cryptocurrency
                    news, delivering expert insights on Crypto, AI, NFTs, and
                    exclusive Airdrop services.
                  </p>

                  <h2 className="font-bold font-sans text-lg mb-2">
                    Job Description
                  </h2>
                  <p className="mb-2">
                    {selectedJob.jobDescription +
                      " . " +
                      selectedJob.description2 +
                      " . " +
                      selectedJob.description1}
                  </p>
                  <div>
                    {selectedJob.requirements.map((requirement, index) => (
                      <p key={index} className="mb-2">
                        &#x2022; {requirement}
                      </p>
                    ))}
                  </div>

                  <h2 className="font-bold font-sans text-lg mb-2 mt-4">
                    Good to have
                  </h2>
                  <div>
                    {selectedJob.additionalSkills.map((requirement, index) => (
                      <p key={index} className="mb-2">
                        &#x2022; {requirement}
                      </p>
                    ))}
                  </div>

                  <h2 className="font-bold font-sans text-lg mb-2 mt-4">
                    Terms and Conditions
                  </h2>
                  <div>
                    <ul>
                      <li className="mb-2">
                        {" "}
                        &#x2022; Must be able to give 100-150 hours a month.
                      </li>
                      {/* <li className="mb-2">
                        &#x2022; Must have 6 months of experience.
                      </li> */}
                      <li className="mb-2">
                        &#x2022; Intern must be available for a minimum of 3
                        months.
                      </li>
                      <li className="mb-2">
                        &#x2022; Upon completion, you will be sureshot eligible
                        for the airdrop
                        {/* <span className="text-red-700 font-bold">
                          airdrop(minimum $1000 to no limits)
                        </span> */}
                        .
                      </li>
                      <li className="mb-2">
                        &#x2022; Opportunity to transition into a full-time
                        role.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Job Cards Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobData.map((job, index) => (
              <div
                key={index}
                onClick={() => applyNow(job.id)}
                className="p-6 bg-[#1E2046] cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow rounded-tr-[3.5rem] rounded-bl-[3.5rem] text-white"
              >
                <h2>Job Id : {job.id}</h2>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-[#ffc93f] mb-2 font-sans font-semibold text-[20px]">
                  Crypto Venture
                </p>
                <p className="mb-1">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="">&#x2022; {job.description1}</p>
                <p className=" mt-[5px]">&#x2022; {job.description2}</p>

                {appliedJobIds.includes(job.id) ? (
                  <h2 className="text-green-500 font-semibold mt-4">Applied</h2>
                ) : (
                  <button
                    className="flex flex-row justify-center items-center bg-black text-white gap-[10px] mt-[1rem] rounded-[10px] py-[5px] px-[10px]"
                    onClick={() => applyNow(job.id)}
                  >
                    Easy Apply
                    <img className="w-[20px] h-[20px]" src={applyIcon} alt="" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Popup Form */}
        {popupVisible && (
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="relative formBgColor p-6 rounded-lg shadow-lg w-[90%] sm:w-[50%]">
              <button
                className="absolute top-2 right-2 text-red-500 font-bold text-lg"
                onClick={closePopup}
              >
                X
              </button>
              <Form
                setPopupVisible={setPopupVisible}
                setSelectedJob={setSelectedJob}
                selectedJob={selectedJob.id}
                selectedJobTitle={selectedJob.title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;
