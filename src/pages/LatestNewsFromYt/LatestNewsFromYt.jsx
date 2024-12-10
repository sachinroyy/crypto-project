import { useState, useEffect } from "react";
import axios from "axios";

const LatestNewsFromYt = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState(
    "News related to crypto currency"
  ); // Default search query






  const fetchVideos = async (query, regionCode) => {
    try {
      // Make a request to the backend proxy instead of YouTube API directly
      const response = await axios.get('http://localhost:4000/api/youtube', {
        params: {
          q: query,
          regionCode: regionCode, // Optional country filter
        },
      });
      setVideos(response.data.items);
    } catch (err) {
      setError("Failed to fetch videos");
      console.error(err);
    }
  };
  

  // console.log(videos);

  // Fetch videos on component mount and whenever the search query or country changes
  useEffect(() => {
    fetchVideos(searchQuery);
  }, [searchQuery]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      {/* Search and Filter Section */}

      {/* <form onSubmit={handleSearch} className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search for news..."
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          className="border border-gray-400 p-2 rounded-lg w-full max-w-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>

      
        <select
          value={country}
          onChange={handleCountryChange}
          className="border border-gray-400 p-2 rounded-lg ml-2"
        >
          <option value="">All Countries</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="IN">India</option>
          <option value="JP">Japan</option>
          <option value="CA">Canada</option>
          <option value="DE">Germany</option>
        </select>
      </form> */}

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.length === 0 ? (
          <p className="col-span-1 sm:col-span-2 lg:col-span-3 text-center">
            Loading...
          </p>
        ) : (
          videos.map((video) => (
            <div
              key={video.id.videoId}
              className="bg-white rounded-lg shadow-custom-inset overflow-hidden transition-transform transform hover:scale-105"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                // target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    {video.snippet.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {video.snippet.description.slice(0, 100)}...
                  </p>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LatestNewsFromYt;
