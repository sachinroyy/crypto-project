/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";
import Arrow from "../../assets/Arrow up-right.png";

const categories = ["Crypto", "NFT", "AI News", "Metaverse"];

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(3); // Number of visible items
  const [loading, setLoading] = useState(false); // Overall loading state
  const [loadingCategory, setLoadingCategory] = useState(false); // Loading for category change
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Crypto");

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    setVisibleNewsCount(3); // Reset visible items when category changes
    setLoadingCategory(true); // Start showing loader for new category
  };

  const handleViewMore = () => {
    setVisibleNewsCount((prevCount) => prevCount + 3); // Show 3 more items
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://crypto-venture-backend.onrender.com/api/news",
          {
            params: { q: selectedCategory.toLowerCase() },
          }
        );

        // Filter out news items without an image
        const filteredNews = response.data.articles
          .filter((item) => item.urlToImage) // Remove items without images
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)); // Sort by date

        setNews(filteredNews);
      } catch (error) {
        setError(true);
        console.error("Error fetching news:", error);
      }

      setLoading(false);
      setLoadingCategory(false); // Stop showing category loader
    };

    fetchNews();
  }, [selectedCategory]);

  if (error) return <div>Error loading news</div>;

  return (
    <div className="NewspageBg">
      <div className="container mx-auto p-4 xl:w-[80%]">
        <div className="flex flex-col-reverse mg:flex-row-reverse justify-between items-center">
          {/* Category Navigation */}
          <div className="flex justify-center mg:space-x-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-[16px] font-[400] leading-[28px] ${
                  selectedCategory === cat
                    ? "bg-[#0f1023] text-white rounded-[100px]"
                    : "text-white"
                } transition`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Page Header */}
          <h1 className="text-3xl font-bold text-center mb-4 text-white mt-8">
            {selectedCategory.toUpperCase()} NEWS
          </h1>
        </div>

        {/* Loader Above News Grid */}
        {loadingCategory && (
          <div className="flex justify-center my-4">
            <div className="loader"></div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[2rem]">
          {news.slice(0, visibleNewsCount).map((item, index) => (
            <div
              key={index}
              className="bg-[#1E2046] rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.urlToImage}
                alt={item.title || "Title Not Available"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-white">
                  {item.title !== "[removed]"
                    ? item.title
                    : "Title Not Available"}
                </h2>
                <p className="text-gray-100 mb-4">
                  {item.description !== "[removed]"
                    ? item.description
                    : "Description Not Available"}
                </p>
                <div className="flex flex-row justify-between my-[1rem]">
                  {/* <p className="text-red-700">
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </p> */}

                  <a
                    href={item.url}
                    className="text-blue-500 underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Read more
                  </a>

                  <p className="text-green-700">{item.source.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleNewsCount < news.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleViewMore}
              className="flex flex-row justify-center items-center border border-[#0F1023] text-white rounded-[26px] px-[32px] py-[12px] transition"
            >
              View More <img src={Arrow} alt="" className="w-[20px] h-[20px]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
