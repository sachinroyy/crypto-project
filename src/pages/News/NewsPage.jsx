/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./News.css";


// const NewsImage = ({ imageUrl, title }) => {
//   const [validImageUrl, setValidImageUrl] = useState(imageUrl);

//   useEffect(() => {
//     const testImage = new Image();
//     testImage.src = imageUrl;

//     testImage.onload = () => setValidImageUrl(imageUrl);
//     testImage.onerror = () =>
//       setValidImageUrl(
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnvISVTYopMAy17o3mB2lfSPeEjoKfAdV2w&s"
//       );
//   }, [imageUrl]);

//   return (
//     <img
//       src={validImageUrl}
//       alt={title || "Title Not Available"}
//       className="w-full h-48 object-cover"
//     />
//   );
// };

const NewsPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(
          "https://crypto-venture-backend.onrender.com/api/news",
          // "https://localhost:4000/api/news",
          {
            params: { q: category },
          }
        );

        const sortedNews = response.data.articles.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
        const filterNews = sortedNews.filter((item) => item.urlToImage); // Remove items without images

        console.log(filterNews);
        setNews(filterNews);
      } catch (error) {
        setError(true);
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading news</div>;

  return (
    <div className="NewspageBg">
      {/* <Dropdowns /> */}
      <div className="container mx-auto p-4 xl:w-[80%]">
        <h1 className="text-3xl font-bold text-center mb-4 text-white mt-8">
          {category.toUpperCase()} NEWS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[2rem]">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-[#1E2046] rounded-lg shadow-md overflow-hidden"
            >
              {/* <NewsImage imageUrl={item.urlToImage} title={item.title} /> */}
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
      </div>
    </div>
  );
};

export default NewsPage;
