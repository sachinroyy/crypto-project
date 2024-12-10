/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// HORIZONATAL VIDEO SLIDER

// import { useEffect, useState } from "react";
// import axios from "axios";
// import moment from "moment";
// import { FaEye, FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
// import Heart from "./assets/Heart.png";
// // import NewSlider from './components/NewSlider/NewSlider'

// const CACHE_KEY = "cachedVideos";
// const CACHE_EXPIRATION = 60 * 60 * 1000; // 1 hour in milliseconds

// const Testing = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [playingVideoId, setPlayingVideoId] = useState(null);

//   // Function to fetch videos from the API or cache
//   const fetchVideos = async () => {
//     setLoading(true);

//     // Check if we have cached data
//     const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
//     const isCacheValid =
//       cachedData &&
//       new Date().getTime() - cachedData.timestamp < CACHE_EXPIRATION;

//     if (isCacheValid) {
//       // Use cached data if valid
//       setVideos(cachedData.data);
//       setLoading(false);
//       return;
//     }

//     // Fetch new data from the API
//     try {
//       const response = await axios.get(
//         "https://crypto-venture-backend.onrender.com/api/youtube",
//         {
//           params: { regionCode: "US" },
//         }
//       );

//       const videosWithCustomStats = response.data.items.map((video) => ({
//         ...video,
//         customStats: {
//           views: Math.floor(Math.random() * 10000) + 500,
//           likes: Math.floor(Math.random() * 1000) + 50,
//           comments: Math.floor(Math.random() * 500) + 10,
//           shares: Math.floor(Math.random() * 500) + 10,
//           liked: false,
//         },
//       }));

//       const sortedVideos = videosWithCustomStats.sort(
//         (a, b) =>
//           new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
//       );

//       // Save to state
//       setVideos(sortedVideos);

//       // Cache the data in localStorage
//       localStorage.setItem(
//         CACHE_KEY,
//         JSON.stringify({ data: sortedVideos, timestamp: new Date().getTime() })
//       );
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const handleLike = (videoId) => {
//     setVideos((prevVideos) =>
//       prevVideos.map((video) => {
//         if (video.id.videoId === videoId && !video.customStats.liked) {
//           return {
//             ...video,
//             customStats: {
//               ...video.customStats,
//               likes: video.customStats.likes + 1,
//               liked: true,
//             },
//           };
//         }
//         return video;
//       })
//     );
//   };

//   const timeAgo = (date) => {
//     return moment(date).fromNow();
//   };

//   const handleVideoClick = (videoId) => {
//     setPlayingVideoId((prev) => (prev === videoId ? null : videoId));
//   };

//   if (loading) {
//     return <div className="text-center mt-8">Loading...</div>;
//   }

//    console.log(videos)

//   return (
//     <div className="p-4 pt-[0rem]">

//         {/* <NewSlider /> */}

//       <div className="flex overflow-x-scroll space-x-4 p-2 no-scrollbar mt-[2rem] pb-[2rem]">
//         {videos.map((video) => (
//           <div
//             key={video.id.videoId}
//             className="flex-shrink-0 w-80 bg-white border-[2px] border-gray-400 rounded-lg overflow-hidden transform transition-transform duration-200 cursor-pointer"
//             onClick={() => handleVideoClick(video.id.videoId)}
//           >
//             {playingVideoId === video.id.videoId ? (
//               <iframe
//                 width="100%"
//                 height="200"
//                 src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             ) : (
//               <img
//                 className="w-full h-48 object-cover"
//                 src={video.snippet.thumbnails.high.url}
//                 alt={video.snippet.title}
//               />
//             )}

//             <div className="p-4">
//               <h3 className="font-bold text-lg mb-2">
//                 {video.snippet.title.slice(0, 20)}
//               </h3>
//               <p className="text-red-600 font-bold mb-3">
//                 Uploaded: {timeAgo(video.snippet.publishedAt)}
//               </p>

//               <div className="flex justify-between items-center mt-4 text-black space-x-4">
//                 <div className="flex items-center">
//                   <FaEye className="mr-2" />
//                   <span className="font-bold">{video.customStats.views}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaShare className="mr-2" />
//                   <span>{video.customStats.shares}</span>
//                 </div>
//                 <p
//                   className={`flex items-center cursor-pointer ${
//                     video.customStats.liked ? "text-red-500" : "text-black"
//                   }`}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleLike(video.id.videoId);
//                   }}
//                 >
//                   {video.customStats.liked ? (
//                     <>
//                       <img src={Heart} alt="Liked" className="w-6 h-6 mr-1" />
//                       <span className="font-bold">
//                         {video.customStats.likes}
//                       </span>
//                     </>
//                   ) : (
//                     <>
//                       <FaThumbsUp className="mr-2" />
//                       <span className="font-bold">
//                         {video.customStats.likes}
//                       </span>
//                     </>
//                   )}
//                 </p>
//                 <div className="flex items-center">
//                   <FaComment className="mr-2" />
//                   <span>{video.customStats.comments}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testing;

// GRID LAYOUT WITH LOAD MORE BUTTON

// GRID LAYOUT WITH LOAD MORE BUTTON














// import { useEffect, useState } from "react";
// import axios from "axios";
// import moment from "moment";
// import RightArrow from "./assets/arrow-right-videos.png";
// import Arrow from './assets/Arrow up-right.png'

// const CACHE_KEY = "cachedVideos";
// const CACHE_EXPIRATION = 60 * 60 * 1000; // 1 hour in milliseconds
// const ITEMS_PER_LOAD = 6; // Number of videos to load per click

// const Testing = ({ query }) => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [playingVideoId, setPlayingVideoId] = useState(null);
//   const [visibleVideos, setVisibleVideos] = useState(ITEMS_PER_LOAD);

//   // Function to fetch videos from the API or cache
//   const fetchVideos = async () => {
//     setLoading(true);

//     // Check if cached data exists and is still valid
//     const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
//     const isCacheValid =
//       cachedData &&
//       new Date().getTime() - cachedData.timestamp < CACHE_EXPIRATION;

//     if (isCacheValid) {
//       setVideos(cachedData.data);
//       setLoading(false);
//       return;
//     }

//     try {
//       // Fetch new data from the API
//       const response = await axios.get(
//         "https://crypto-venture-backend.onrender.com/api/youtube",
//         {
//           params: { regionCode: "US", q: query },
//         }
//       );

//       console.log(response.data);

//       // Map response to include custom stats
//       const videosWithStats = response.data.items.map((video) => ({
//         id: video.id,
//         snippet: video.snippet,
//         customStats: {
//           views: parseInt(video.statistics.viewCount, 10) || 0,
//           likes: parseInt(video.statistics.likeCount, 10) || 0,
//           comments: parseInt(video.statistics.commentCount, 10) || 0,
//           liked: false, // Default liked state
//         },
//       }));

//       // Sort videos by publish date (newest first)
//       const sortedVideos = videosWithStats.sort(
//         (a, b) =>
//           new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
//       );

//       // Update state with sorted videos
//       setVideos(sortedVideos);

//       // Cache the data
//       localStorage.setItem(
//         CACHE_KEY,
//         JSON.stringify({ data: sortedVideos, timestamp: new Date().getTime() })
//       );
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch videos on component mount or query change
//   useEffect(() => {
//     fetchVideos();
//   }, [query]);

//   // Utility function to format dates as time ago
//   const timeAgo = (date) => moment(date).fromNow();

//   // Toggle video playback
//   const handleVideoClick = (videoId) => {
//     setPlayingVideoId((prev) => (prev === videoId ? null : videoId));
//   };

//   // Load more videos
//   const loadMoreVideos = () =>
//     setVisibleVideos((prev) => prev + ITEMS_PER_LOAD);

//   // Utility function to format large numbers
//   const formatNumber = (number) =>
//     number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number;

//   if (loading) {
//     return <div className="text-center mt-8">Loading...</div>;
//   }

//   return (
//     <div className="p-4 pt-[2rem] w-[100%] sm:w-[80%] m-auto">
//       <div className="flex justify-start items-center gap-[20px]">
//         <img
//           src={RightArrow}
//           className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] mt-[8px]"
//           alt=""
//         />
//         <h2 className="text-white text-[24px]  mg:text-[48px] sm:text-[2rem] font-bold font-sans">
//           Top Crypto YouTubers Shaping the Industry
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[2rem] pb-[2rem]">
//         {videos.slice(0, visibleVideos).map((video) => (
//           <div
//             key={video.id}
//             className="bg-[#1E2046] rounded-[1rem] overflow-hidden transform transition-transform duration-200 cursor-pointer"
//             onClick={() => handleVideoClick(video.id)}
//           >
//             {playingVideoId === video.id ? (
//               <iframe
//                 width="400px"
//                 height="223"
//                 src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             ) : (
//               <img
//                 className="w-full h-48 object-cover"
//                 src={video.snippet.thumbnails.high.url}
//                 alt={video.snippet.title}
//               />
//             )}

//             <div className="pt-[20px] pr-[24px] pb-[40px] pl-[24px]">
//               <p className="leading-[20px] font-bold text-[14px] text-[#008659] mb-3 bg-[#EFF0FD] w-fit p-[7px] rounded-[32px] border border-[#86E588]">
//                 {timeAgo(video.snippet.publishedAt)}
//               </p>

//               <h3 className="font-medium leading-[31.2px] text-[24px] mb-2 text-white">
//                 {video.snippet.title.slice(0, 40)}
//               </h3>

//               <div className="flex items-center text-[#E8E9FC] font-[400] mt-[20px] space-x-1">
//                 <span className="text-[14px]">
//                   {formatNumber(video.customStats.views)} views
//                 </span>
//                 <span>|</span>
//                 <span
//                   className={`cursor-pointer ${
//                     video.customStats.liked ? "text-red-500" : "text-[#E8E9FC]"
//                   }`}
//                 >
//                   {formatNumber(video.customStats.likes)} likes
//                 </span>
//                 <span>|</span>
//                 <span className="text-[14px]">
//                   {formatNumber(video.customStats.comments)} comments
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {visibleVideos < videos.length && (
//         <div className="text-center mt-4">
//           <button
//             onClick={loadMoreVideos}
//             className="m-auto flex flex-row justify-center items-center border border-[#0F1023] text-white rounded-[26px] px-[32px] py-[12px] transition"
//           >
//            View More <img src={Arrow} alt="" className="w-[20px] h-[20px]" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Testing;
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import RightArrow from "./assets/arrow-right-videos.png";
import Arrow from "./assets/Arrow up-right.png";

const CACHE_KEY = "cachedVideos";
const CACHE_EXPIRATION = 60 * 60 * 1000; // 1 hour in milliseconds
const ITEMS_PER_LOAD = 6; // Number of videos to load per click

const Testing = ({ query }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [visibleVideos, setVisibleVideos] = useState(ITEMS_PER_LOAD);

  // Function to fetch videos from the API or cache
  const fetchVideos = async () => {
    setLoading(true);

    // Check if cached data exists and is still valid
    const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
    const isCacheValid =
      cachedData &&
      new Date().getTime() - cachedData.timestamp < CACHE_EXPIRATION;

    if (isCacheValid) {
      setVideos(cachedData.data);
      setLoading(false);
      return;
    }

    try {
      // Fetch new data from the API
      const response = await axios.get(
        "https://crypto-venture-backend.onrender.com/api/youtube",
        {
          params: { regionCode: "US", q: query },
        }
      );

      console.log(response.data);

      // Map response to include custom stats
      const videosWithStats = response.data.items.map((video) => ({
        id: video.id,
        snippet: video.snippet,
        customStats: {
          views: parseInt(video.statistics.viewCount, 10) || 0,
          likes: parseInt(video.statistics.likeCount, 10) || 0,
          comments: parseInt(video.statistics.commentCount, 10) || 0,
          liked: false, // Default liked state
        },
      }));

      // Sort videos by publish date (newest first)
      const sortedVideos = videosWithStats.sort(
        (a, b) =>
          new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
      );

      // Update state with sorted videos
      setVideos(sortedVideos);

      // Cache the data
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ data: sortedVideos, timestamp: new Date().getTime() })
      );
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch videos on component mount or query change
  useEffect(() => {
    fetchVideos();
  }, [query]);

  // Utility function to format dates as time ago
  const timeAgo = (date) => moment(date).fromNow();

  // Toggle video playback
  const handleVideoClick = (videoId) => {
    setPlayingVideoId((prev) => (prev === videoId ? null : videoId));
  };

  // Load more videos
  const loadMoreVideos = () =>
    setVisibleVideos((prev) => prev + ITEMS_PER_LOAD);

  // Utility function to format large numbers
  const formatNumber = (number) =>
    number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number;

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="p-4 pt-[2rem] w-[100%] sm:w-[80%] m-auto">
      <div className="flex justify-start items-center gap-[20px]">
        <img
          src={RightArrow}
          className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] mt-[8px]"
          alt=""
        />
        <h2 className="text-white text-[24px]  mg:text-[48px] sm:text-[2rem] font-bold font-sans">
          Top Crypto YouTubers Shaping the Industry
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[2rem] pb-[2rem]">
        {videos.slice(0, visibleVideos).map((video) => (
          <div
            key={video.id}
            className="bg-[#1E2046] rounded-[1rem] overflow-hidden transform transition-transform duration-200 cursor-pointer"
            onClick={() => handleVideoClick(video.id)}
          >
            {playingVideoId === video.id ? (
              <iframe
                width="400px"
                height="223"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                className="w-full h-48 object-cover"
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
              />
            )}

            <div className="pt-[20px] pr-[24px] pb-[40px] pl-[24px]">
              <p className="leading-[20px] font-bold text-[14px] text-[#008659] mb-3 bg-[#EFF0FD] w-fit p-[7px] rounded-[32px] border border-[#86E588]">
                {timeAgo(video.snippet.publishedAt)}
              </p>

              <h3 className="font-medium leading-[31.2px] text-[24px] mb-2 text-white">
                {video.snippet.title.slice(0, 40)}
              </h3>
  
              <div className="flex items-center text-[#E8E9FC] font-[400] mt-[20px] space-x-1">
                <span className="text-[14px]">
                  {formatNumber(video.customStats.views)} views
                </span>
                <span>|</span>
                <span
                  className={`cursor-pointer ${
                    video.customStats.liked ? "text-red-500" : "text-[#E8E9FC]"
                  }`}
                >
                  {formatNumber(video.customStats.likes)} likes
                </span>
                <span>|</span>
                <span className="text-[14px]">
                  {formatNumber(video.customStats.comments)} comments
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleVideos < videos.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMoreVideos}
            className="m-auto flex flex-row justify-center items-center border border-[#0F1023] text-white rounded-[26px] px-[32px] py-[12px] transition"
          >
            View More <img src={Arrow} alt="" className="w-[20px] h-[20px]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Testing;
