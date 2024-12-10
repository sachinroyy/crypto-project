import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDesc.css";

const BlogDesc = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { blog_list } = useContext(StoreContext);

  const decodedTitle = decodeURIComponent(name).replace(/-/g, " ");
  const item = blog_list.find(
    (blog) => blog.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  const onBlogClick = () => {
    navigate("/blog");
  };

  const timeAgo = (date) => {
    const now = new Date();
    const createdAt = new Date(date);
    const diffInSeconds = Math.floor((now - createdAt) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  };

  // console.log("desc : " ,  item.description)

  return (
    <div className="blogDescPageBg pt-[2rem] pb-[4rem]">
      <p
        className="text-yellow-600 font-bold font-sans flex justify-center"
        onClick={onBlogClick}
      >
        CryptoVenture Blog
      </p>

      {item ? (
        <div className="flex flex-col w-[70%] m-auto justify-center">


          <div className="billionCardStyle p-[1rem] mt-[20px]">
            <h2 className="font-[800] text-[48px] leading-[72px] font-sans text-white mt-[2rem]">
              {item.title}
            </h2>

            <div className="flex justify-between mt-[2rem]">
              <div>
                <p className="text-white font-sans font-bold">WRITTEN BY</p>
                <p className="text-white font-sans font-bold">
                  {item.nameOfTheBlogger}
                </p>
              </div>

              <h2 className="text-white font-sans font-bold text-[20px]">
                {timeAgo(item.createdAt)}
              </h2>
            </div>

            <img
              className="mt-[2rem] h-[400px] mx-auto rounded-[10%]" 
              // w-[100%]
              src={item.image}
              alt={item.title}
            />
          </div>

          {/* Render the sanitized HTML content */}
          <div
            className="content_danger mt-[2rem] text-white text-[21px] leading-[30px] font-sans font-[400]"
            dangerouslySetInnerHTML={{ __html: item?.content }}
          >
            {/* {item.description} */}
            {/* dangerouslySetInnerHTML={{__html: item?.description }} */}
          </div>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

export default BlogDesc;
