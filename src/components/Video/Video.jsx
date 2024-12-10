// import React from 'react';
import Player from "../Main/Player.jsx";
import data from "./VideoData.js"; // Adjust the path according to your folder structure

const Video = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((video) => (
          <Player key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Video;
