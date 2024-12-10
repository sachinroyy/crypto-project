import axios from "axios";
import { useEffect, useState } from "react";

const NewsUpdates = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get("http://localhost:4000/api/news", {
          params: { q: "Crypto Currency" },
        });

        // Sort news articles by published date
        const sortedNews = response.data.articles.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );

        // Filter out articles with the title "[Removed]"
        const filteredArticles = sortedNews.filter(
          (article) => article.title !== "[Removed]"
        );

        // Set state with filtered articles, limit to 5
        setNewsArticles(filteredArticles.slice(0, 5));
      } catch (error) {
        setError(true);
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading news</div>;

  return (
    <div className="bg-black p-4 shadow-md rounded-lg mt-8">
      <h2 className="text-xl font-bold text-white">Latest Market News</h2>
      <ul className="mt-4 space-y-8">
        {newsArticles.length === 0 ? (
          <p className="text-gray-500">No news updates available.</p>
        ) : (
          newsArticles.map((article, index) => (
            <li key={index}>
              <a
                href={article.url}
                // target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {article.title}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NewsUpdates;
