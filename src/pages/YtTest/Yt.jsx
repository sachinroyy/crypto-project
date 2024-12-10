import { useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromApi";

const Yt = () => {
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [videos, setVideos] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setVideos(null); // Clear videos while loading new search results
    setError(null); // Reset error for each new search

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        if (data && data.items && data.items.length > 0) {
          setVideos(data.items);
        } else {
          setVideos([]); // Set to an empty array if no results
          setError("No results found for this search.");
        }
      })
      .catch(() => setError("An error occurred while fetching data."));
  }, [selectedCategory]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setSelectedCategory(searchTerm);
    }
  };

  console.log(videos);

  return (
    <div>
      {/* Search bar */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", width: "200px" }}
        />
        <button onClick={handleSearch} style={{ padding: "10px", marginLeft: "10px" }}>
          Search
        </button>
      </div>

      {/* <h1>
        {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
      </h1> */}

      {/* Display error message if there is one */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Conditional rendering to check if videos have been loaded */}
      {videos ? (
        videos.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              padding: "20px",
            }}
          >
            {videos.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                  backgroundColor: "#fff",
                }}
              >
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${item.id.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div style={{ padding: "15px" }}>
                  <h2 style={{ fontSize: "1.1em", marginBottom: "10px" }}>{item.snippet.title}</h2>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !error && <p>Loading...</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Yt;
