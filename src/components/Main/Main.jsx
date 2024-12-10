/* eslint-disable react/no-unescaped-entities */
// import React, { useState, useEffect } from 'react';
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { newData } from "./MainData.js"; // Make sure to import your data
import "./Main.css"; // Add the CSS below
import Player from "./Player.jsx";

const Main = () => {
  const [items, setItems] = useState(newData.slice(0, 6)); // Initially load 6 items
  const [hasMore, setHasMore] = useState(true);

  // Initialize AOS for animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
      delay: 0,
    });
  }, []);

  // Function to load more items (simulate infinite scroll)
  const fetchMoreData = () => {
    if (items.length >= newData.length) {
      setHasMore(false); // No more items to load
      return;
    }

    // Simulate fetching more data
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...newData.slice(prevItems.length, prevItems.length + 5), // Load 5 more items
      ]);
    });
  };

  console.log(items);

  return (
    <InfiniteScroll
      dataLength={items.length} // This is the length of the currently loaded data
      next={fetchMoreData} // Function to load more data
      hasMore={hasMore} // Flag to indicate whether there are more items to load
      loader={<h4>Loading...</h4>} // Loader component
      endMessage={
        <p style={{ textAlign: "center" }}>You've reached the end!</p>
      } // End message
    >

      <div className="card_container">
        {newData.map((video) => (
          <div key={video.id} className="card" data-aos="fade-up">
            <Player key={video.id} video={video} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Main;
