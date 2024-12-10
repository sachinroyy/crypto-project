/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const Player = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likes, setLikes] = useState(0); // Like state

  const handleVideoPlay = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleLike = () => {
    setLikes(likes + 1); // Increment likes
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg bg-gray-300 hover:shadow-xl transition-shadow duration-300"
      onClick={handleVideoPlay}
    >
      <video
        ref={videoRef}
        src={video.img}
        className="w-full h-auto"
        controls={false}
        preload="metadata"
      />
      <div className="p-4">
        <h4 className="font-bold text-lg">{video.name}</h4>

        <div className="flex flex-row justify-between mt-[1rem] px-[10px]">
          <p className="text-[18px] text-black font-bold font-sans">
            By: {video.by}
          </p>
          <p className="text-sm text-gray-500">{video.time}</p>
        </div>

        {/* Social Media Features */}
        <div className="mt-4 flex justify-between items-center border-t pt-2 border-gray-400">
          {/* Likes */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleLike}
              className="flex flex-col items-center text-black hover:text-blue-500 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-1 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656l-6.364 6.364a1 1 0 01-1.414 0l-6.364-6.364a4 4 0 010-5.656z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {likes} Likes
            </button>
          </div>

          {/* Comments */}
          <div className="flex items-center space-x-2">
            <button className="flex flex-col items-center text-black hover:text-blue-500 transition-colors duration-200">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h2m8 0V4a2 2 0 00-2-2H7a2 2 0 00-2 2v4h12zm-4 4h6"
                ></path>
              </svg>
              5 Comments
            </button>
          </div>

          {/* Shares */}
          <div className="flex items-center space-x-2">
            <button className="flex flex-col items-center text-black hover:text-blue-500 transition-colors duration-200">
              <svg
                className="w-5 h-5 mr-1 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 8l6 6m0 0l-6 6m6-6H9m0 0a6 6 0 01-6-6"
                ></path>
              </svg>
              Share
            </button>
          </div>

          {/* Views */}
          <div className="flex items-center space-x-2">
            {/* <span className="text-gray-600">1.2k Views</span> */}
            <button className="flex flex-col items-center text-black hover:text-blue-500 transition-colors duration-200">
              <p className="text-blue-800">1.2k</p>
              <p>Views</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
