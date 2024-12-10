// import { useState, useEffect } from "react";
// import Bg2 from "../../assets/Bg6.jpeg";
// import Bg3 from "../../assets/Bg7.jpeg";
// import Bg4 from "../../assets/Bg8.jpeg";
// import Bg5 from "../../assets/Bg9.jpeg";
// import Bg6 from "../../assets/bg_new.jpg";
// import Bg7 from "../../assets/bg_new2.jpg";
// import axios from "axios";
// // import Dropdowns from "../../components/header/Dropdowns";
// import NoImage from "../../assets/No_image.png";
// import NewSlider from "../../components/NewSlider/NewSlider";
// // import useGlobalState from "../../states/Global";

// const ImageSlider = () => {
//   const slides = [Bg2, Bg6, Bg3, Bg4, Bg5, Bg7];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [newsData, setNewsData] = useState([]);

//   // const {videos} = useGlobalState();

//   // console.log(videos)

//   const prevSlide = () => {
//     const newIndex =
//       currentIndex === 0 ? newsData.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const newIndex =
//       currentIndex === newsData.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   // Fetch news data from the API
//   const fetchCryptoNews = async () => {
//     try {
//       const response = await axios.get(
//         "https://crypto-venture-backend.onrender.com/api/news",
//         { params: { q: "crypto currency" } }
//       );

//       if (response.status === 200) {
//         const sortedNews = response.data.articles.sort(
//           (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
//         );

//         // Cache the sorted news data with a timestamp
//         localStorage.setItem(
//           "newsData",
//           JSON.stringify({
//             data: sortedNews,
//             timestamp: Date.now(),
//           })
//         );

//         setNewsData(sortedNews);
//       } else {
//         console.error(`Error: Received status ${response.status}`);
//       }
//     } catch (error) {
//       console.error("Error fetching news:", error.message);
//     }
//   };

//   // Load news data from cache or fetch if not present or outdated
//   useEffect(() => {
//     const cachedNewsData = localStorage.getItem("newsData");
//     if (cachedNewsData) {
//       const { data, timestamp } = JSON.parse(cachedNewsData);
//       const oneHour = 60 * 60 * 1000;

//       // Use cached data if it's less than an hour old
//       if (Date.now() - timestamp < oneHour) {
//         setNewsData(data);
//       } else {
//         fetchCryptoNews();
//       }
//     } else {
//       fetchCryptoNews();
//     }
//   }, []);

//   // Auto-play for the slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   if (newsData.length === 0) return <div>Loading...</div>;

//   return (
//     <>
//       {/* news slider for desktop screen */}
//       <div className="relative w-full mx-auto hidden mg:block">
//         <NewSlider />

//         <div className="overflow-hidden bg-black">
//           <div
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {newsData.map((news, index) => (
//               <div
//                 key={index}
//                 className="min-w-full h-[85vh] relative"
//                 style={{
//                   backgroundImage: `url(${slides[index % slides.length]})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div className="absolute pt-4 pb-[3rem] px-[4rem] rounded flex flex-row justify-between w-[100%] items-center gap-[2rem] h-[100%]">
//                   <div className="flex flex-col justify-center items-start gap-4 flex-1">
//                     <h2 className="text-white text-[2.5rem] xl:text-[3.5rem] leading-[45px] xl:leading-[65px] font-semibold mb-4">
//                       {news.title}
//                     </h2>
//                     <p className="text-white font-sans text-[20px]">
//                       {news.description}
//                     </p>
//                     <a
//                       href={news.url}
//                       className="bg-blue-500 text-white p-2 hover:underline rounded-lg"
//                       rel="noopener noreferrer"
//                     >
//                       Read more
//                     </a>
//                   </div>

//                   <img
//                     src={news.urlToImage ? news.urlToImage : NoImage}
//                     alt=""
//                     className="w-full md:w-1/3 rounded-lg shadow-lg h-[350px] xl:h-[400px] border-4 border-white flex-2"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-[1rem] transform -translate-y-1/2 bg-white text-black rounded-full p-2"
//         >
//           &#10094;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-[1rem] transform -translate-y-1/2 bg-white text-black  rounded-full p-2"
//         >
//           &#10095;
//         </button>
//         {/* Dots */}
//         <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
//           {newsData.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-1 h-1 rounded-full ${
//                 index === currentIndex ? "bg-gray-800" : "bg-white"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>

//       {/* news slider for mobile screen */}
//       <div className="relative w-full mx-auto mg:hidden">
//         <NewSlider />
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {newsData.map((news, index) => (
//               <div
//                 key={index}
//                 className="min-w-full h-[100vh] relative"
//                 // style={{
//                 //   backgroundImage: `url(${slides[index % slides.length]})`,
//                 //   backgroundSize: "cover",
//                 //   backgroundPosition: "center",
//                 // }}
//               >
//                 <div className="absolute pt-4 pb-[3rem] px-[1rem] rounded flex flex-col justify-between w-[100%] items-center gap-[2rem] h-[100%]">
//                   <img
//                     src={news.urlToImage ? news.urlToImage : NoImage}
//                     alt=""
//                     className="w-full md:w-[100%] rounded-lg shadow-lg h-[200px] border-4 border-white flex-2"
//                   />

//                   <div className="flex flex-col justify-center items-center gap-4 flex-1">
//                     <h2 className="text-white text-[1.5rem] px-[1rem] text-center  sm:text-[2.5rem] font-bold">
//                       {news.title}
//                     </h2>
//                     <p className="text-white font-sans text-[16px] text-center">
//                       {news.description}
//                     </p>
//                     <a
//                       href={news.url}
//                       className="bg-blue-500 text-white p-2 hover:underline rounded-lg"
//                       rel="noopener noreferrer"
//                     >
//                       Read more
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-[0.5rem] transform -translate-y-1/2 bg-white text-black rounded-full px-[0.3rem] py-[0.1rem]"
//         >
//           &#10094;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-[0.5rem] transform -translate-y-1/2 bg-white text-black  rounded-full px-[0.3rem] py-[0.1rem]"
//         >
//           &#10095;
//         </button>
//       </div>
//     </>
//   );
// };

// export default ImageSlider;

import { useState, useEffect } from "react";
import axios from "axios";
import "./Slider2.css";
import SliderIcon1 from "../../assets/SliderIconLeft.png";
import SliderIcon2 from "../../assets/SliderIconRight.png";

import HomePageBgImg1 from "../../assets/CareerPagebg.png";
import HomePageBgImg2 from "../../assets/jdImg2.png";
import HomePageBgImg3 from "../../assets/jdImg1.png";
// import NoImage from "../../assets/No_image.png";
import NewSlider from "../../components/NewSlider/NewSlider";
// import Ads01 from "../../assets/ads.jpg";
import Arrow from "../../assets/Arrow up-right-mobile.png";
import AdsGif from "../../assets/AdsGif.gif";
import AdsGif2 from "../../assets/GifAd2.gif";

const CACHE_KEY = "cryptoNewsCache"; // Key for localStorage
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds

const Slider2 = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAd, setShowAd] = useState(true); // State to toggle ad visibility

  const [currentAd, setCurrentAd] = useState(0);

  const adsGif = [
    {
      id: 1,
      img: AdsGif,
      link: "https://stake.mba/?tab=register&modal=auth&offer=bitc200bondisplay&c=xXhQPcYz&clickId=SAwgiSoja65d1nPC2oTjCg&utm_medium=cpc&utm_campaign=sb_bitc",
    },
    {
      id: 2,
      img: AdsGif2,
      link: "https://bcgame.li/?i=107cx8vto&utm_source=107cx8vto",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevIndex) => (prevIndex + 1) % adsGif.length);
    }, 60000); // 60000 ms = 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [adsGif.length]);

  const currentShowingAd = adsGif[currentAd];

  const fetchCryptoNews = async () => {
    // Check if cached data is available and valid
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      const isCacheValid = Date.now() - timestamp < CACHE_EXPIRY;

      if (isCacheValid) {
        setNewsData(data);
        return;
      }
    }

    // Fetch new data if no valid cache exists
    try {
      const response = await axios.get(
        "https://crypto-venture-backend.onrender.com/api/news",
        { params: { q: "crypto currency" } }
      );

      if (response.status === 200) {
        const filteredNews = response.data.articles.filter(
          (item) => item.urlToImage
        );

        const sortedNews = filteredNews.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );

        // Cache the fetched data with a timestamp
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: sortedNews, timestamp: Date.now() })
        );

        setNewsData(sortedNews);
      } else {
        console.error(`Error: Received status ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching news:", error.message);
    }
  };

  useEffect(() => {
    fetchCryptoNews();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (newsData.length === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide, newsData]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % newsData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  if (newsData.length === 0) return <div>Loading...</div>;

  // const timeAgo = (date) => {
  //   const now = new Date();
  //   const createdAt = new Date(date);
  //   const diffInSeconds = Math.floor((now - createdAt) / 1000);

  //   if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  //   const diffInMinutes = Math.floor(diffInSeconds / 60);
  //   if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
  //   const diffInHours = Math.floor(diffInMinutes / 60);
  //   if (diffInHours < 24) return `${diffInHours} hours ago`;
  //   const diffInDays = Math.floor(diffInHours / 24);
  //   return `${diffInDays} days ago`;
  // };

  // console.log(newsData);

  return (
    <>
      <NewSlider />

      {/* Ad Banner */}
      {showAd && (
        <div className="ads flex items-center justify-center p-2">
          <div className="relative p-1 rounded-lg shadow-lg max-w-[80%]">
            {/* Close Button */}
            {/* <h1 className="flex justify-start font-bold pl-7 absolute text-red-700">
              Ads
            </h1> */}
            <button
              onClick={() => setShowAd(false)} // Hide the ad when clicked
              className="absolute top-2 right-2 bg-gray-200 rounded-lg py-[1px] px-[5px]"
            >
              ✕
            </button>

            <a
              href={currentShowingAd.link}
              key={currentShowingAd.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={currentShowingAd.img}
                alt="Advertisement"
                className="w-full h-[4rem] sm:h-auto rounded-md"
              />
            </a>
          </div>
        </div>
      )}

      <div className="slider-container2 relative hidden mg:flex">
        {/* Background Images */}
        <div className="slider-background">
          <img
            src={HomePageBgImg3}
            alt="Background 1"
            className="background-image top-left"
          />
          <img
            src={HomePageBgImg2}
            alt="Background 2"
            className="background-image bottom-right"
          />
          <img
            src={HomePageBgImg1}
            alt="Background 3"
            className="background-image center"
          />
        </div>

        {/* News Slider */}
        {newsData.length > 0 && (
          <div className="glassmorphic-slider relative">
            <div className="flex flex-row items-center justify-between w-full h-full">
              {/* Text Content (Left) */}
              <div className="w-1/2 p-6">
                <h3 className="slider-title text-[48px] leading-[52px] font-bold mb-4 text-white">
                  {newsData[currentSlide].title}
                </h3>
                <p className="slider-description text-lg text-gray-200 mb-8">
                  {newsData[currentSlide].description}
                </p>

                {/* <p className="mb-[2rem] text-[24px] text-white font-sans font-semibold">
                  {timeAgo(newsData[currentSlide].publishedAt)}
                </p> */}
                <a
                  href={newsData[currentSlide].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E8E9FC] border border-[#0a17ff] px-[32px] py-[12px] rounded-[26px] text-lg"
                >
                  Read More
                </a>
              </div>

              {/* Image Content (Right) */}
              <div className="w-1/2 p-6 flex justify-end">
                <img
                  src={newsData[currentSlide].urlToImage}
                  alt={newsData[currentSlide].title}
                  className="slider-image w-[400px] h-[360px] rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="slider-button prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#282A5D] text-gray-800 rounded-full p-2 shadow-md"
              onClick={handlePrev}
            >
              <img
                src={SliderIcon1}
                alt="Previous"
                className="w-[12px] h-[12px]"
              />
            </button>
            <button
              className="slider-button next absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#282A5D] text-gray-800 rounded-full p-2 shadow-md"
              onClick={handleNext}
            >
              <img src={SliderIcon2} alt="Next" className="w-[12px] h-[12px]" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {newsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1 h-1 rounded-full ${
                    index === currentSlide
                      ? "bg-gray-800"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="slider-container2 relative flex mg:hidden">
        {/* Background Images */}
        <div className="slider-background">
          <img
            src={HomePageBgImg3}
            alt="Background 1"
            className="absolute opacity-[1] w-[250px] h-[250px] top-[32%] left-[-3%]"
          />
          <img
            src={HomePageBgImg2}
            alt="Background 2"
            className="absolute opacity-[1] w-[250px] h-[250px] top-[-4%] right-[-6%]"
          />
          <img
            src={HomePageBgImg1}
            alt="Background 3"
            className="absolute opacity-[1] w-[250px] h-[250px] bottom-[-7%] right-[20%]"
          />
        </div>

        {/* News Slider */}
        {newsData.length > 0 && (
          <div className="glassmorphic-slider mx-[20px] w-[100%] z-10 relative">
            <div className="flex flex-col items-center justify-between w-full h-full">
              {/* Image Content (Right) */}
              <div className="flex justify-end mb-[32px]">
                <img
                  src={newsData[currentSlide].urlToImage}
                  alt={newsData[currentSlide].title}
                  className="w-[318px] h-[250px] rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Text Content (Left) */}
              <div className="">
                <h3 className="text-[24px] leading-[28px] font-bold mb-4 text-white">
                  {newsData[currentSlide].title}
                </h3>
                <p className="text-[20px] font-[400] leading-[26px] text-gray-200 mb-4 opacity-[0.8]">
                  {newsData[currentSlide].description}
                </p>

                {/* <p className="mb-[2rem] text-[16px] text-white font-sans font-semibold">
                  {timeAgo(newsData[currentSlide].publishedAt)}
                </p> */}
                <button className="flex flex-row justify-center items-center text-[#E8E9FC] border border-[#0a17ff] px-[32px] py-[12px] rounded-[26px] w-[100%]">
                  <a
                    href={newsData[currentSlide].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row justify-center items-center gap-[10px] text-lg"
                  >
                    Read More{" "}
                    <img src={Arrow} className="w-[16px] h-[16px]" alt="" />
                  </a>
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            {/* <button
              className="slider-button prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#282A5D] text-gray-800 rounded-full p-2 shadow-md"
              onClick={handlePrev}
            >
              <img
                src={SliderIcon1}
                alt="Previous"
                className="w-[12px] h-[12px]"
              />
            </button>
            <button
              className="slider-button next absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#282A5D] text-gray-800 rounded-full p-2 shadow-md"
              onClick={handleNext}
            >
              <img src={SliderIcon2} alt="Next" className="w-[12px] h-[12px]" />
            </button> */}

            {/* Dots */}
            {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {newsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1 h-1 rounded-full ${
                    index === currentSlide
                      ? "bg-gray-800"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                ></button>
              ))}
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Slider2;
