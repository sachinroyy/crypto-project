// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import "./Blog.css";
// import { HoverEffect } from "../../components/ui/card-hover-effect";
// import BgForBlog1 from "../../assets/CareerPagebg.png";
// import BgForBlog2 from "../../assets/jdImg2.png";
// import BgForBlog3 from "../../assets/jdImg1.png";
// import TrendingBlogImg from "../../assets/TrendingBlog.png";
// import { useNavigate } from "react-router-dom";

// const Blogs = () => {
//   const navigate = useNavigate();
//   const { blog_list } = useContext(StoreContext);
//   console.log(blog_list);
//   // Safely handle undefined or null `blog_list`
//   const blogs = Array.isArray(blog_list) ? [...blog_list].reverse() : [];

//   // Get the first blog
//   const firstBlog = blogs.length > 0 ? blogs[0] : null;

//   const remainingBlogs = blogs.slice(1); // Exclude the first blog

//   const timeAgo = (date) => {
//     const now = new Date();
//     const createdAt = new Date(date);
//     const diffInSeconds = Math.floor((now - createdAt) / 1000);

//     if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
//     const diffInMinutes = Math.floor(diffInSeconds / 60);
//     if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
//     const diffInHours = Math.floor(diffInMinutes / 60);
//     if (diffInHours < 24) return `${diffInHours} hours ago`;
//     const diffInDays = Math.floor(diffInHours / 24);
//     return `${diffInDays} days ago`;
//   };

//   const openBlog = () =>{
//     navigate(`/blog/${firstBlog.title.replace(/\s+/g, '-').toLowerCase()}`)
//   }

//   return (
//     <div className="blogListingBg pb-[4rem] px-[0rem]">
//       {/* Show loader if blog_list is undefined */}
//       <div className="w-[85%] m-auto">
//         {!blog_list && (
//           <div className="text-center text-white">Loading blogs...</div>
//         )}

//         {blog_list && (
//           <div className="relative m-auto pt-[4rem] pb-[4rem]">
//             {/* Background Images */}
//             <div className="absolute inset-0 z-0">
//               <img
//                 src={BgForBlog1}
//                 alt="Background 2"
//                 className="absolute w-[300px] h-[300px] top-[68%] left-[30%] opacity-100"
//               />
//               <img
//                 src={BgForBlog2}
//                 alt="Background 1"
//                 className="absolute w-[300px] h-[300px] top-[-2%] left-[-10%] rotate-[-35%] opacity-100"
//               />
//               <img
//                 src={BgForBlog3}
//                 alt="Background 3"
//                 className="absolute w-[250px] h-[250px] bottom-[65%] right-[-5%] opacity-100"
//               />
//             </div>

//             {/* Featured Blog */}
//             {firstBlog && (
//               <div className="relative z-10 billionCardStyle backdrop-blur-lg rounded-[80px] p-6 flex justify-evenly items-center flex-row">
//                 <div className="w-[50%]">
//                   <p className="flex flex-row items-center gap-[5px] text-[#ec4d49] font-[600] text-[18px] mb-[5px]">
//                     Trending{" "}
//                     <img
//                       src={TrendingBlogImg}
//                       className="w-[30px] h-[30px]"
//                       alt=""
//                     />
//                   </p>
//                   <h2 className="text-[48px] font-bold leading-[52px] text-white mb-4">
//                     {firstBlog.title}
//                   </h2>
//                   <p className="text-white text-[24px] leading-[33px] font-[300] mb-4">{firstBlog.shortDesc}</p>

//                   <button onClick={openBlog} className="bg-transparent border-[#5E65DC] border border-solid text-white rounded-[26px] px-[32px] py-[12px]">
//                     Read More
//                   </button>

//                   <div className="mt-[20px] flex gap-[20px] text-white font-[600] text-[24px] mb-[64px]">
//                     <p>By {firstBlog.nameOfTheBlogger}</p>
//                     <p>{timeAgo(firstBlog.createdAt)}</p>
//                   </div>
//                 </div>

//                 <div>
//                   <img
//                     className="w-[400px] h-[400px] rounded-[20px]"
//                     src={firstBlog.image}
//                     alt=""
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Render remaining blogs */}
//         <h2 className="text-white text-[32px] font-sans font-bold mt-[20px]">
//           Latest Blogs
//         </h2>

//         {blog_list && <HoverEffect items={remainingBlogs} />}
//       </div>
//     </div>
//   );
// };

// export default Blogs;

//THIS IS A WORKING BLOG PAGE WITH ALL THE DESIGN IMPLEMENTED.









import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Blog.css";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import Arrow from '../../assets/Arrow up-right.png'

const Blogs = () => {
  const { blog_list } = useContext(StoreContext);
  const [visibleCount, setVisibleCount] = useState(3); // Set the initial number of visible blogs

  // Safely handle undefined or null `blog_list`
  const blogs = Array.isArray(blog_list) ? [...blog_list].reverse() : [];

  // Handle showing more blogs
  const loadMoreBlogs = () => {
    setVisibleCount(visibleCount + 3); // Increase by 3 when "Load More" is clicked
  };

  return (
    <div className="blogListingBg pb-[4rem] px-[0rem]">
      <div className="w-[85%] m-auto">
        {!blog_list && (
          <div className="text-center text-white">Loading blogs...</div>
        )}

        <h2 className="text-white text-[24px] sm:text-[36px] mg:text-[48px] py-[2rem] leading-[26px] mg:leading-[52px] font-sans font-bold">
          Latest Blogs
        </h2>

        {/* Show initial set of blogs */}
        {blog_list && <HoverEffect items={blogs.slice(0, visibleCount)} />}

        {/* "Load More" button */}
        {visibleCount < blogs.length && (
          <div className="text-center mt-[2rem]">
            <button
              onClick={loadMoreBlogs}
              className="flex flex-row justify-center items-center border border-[#0F1023] text-white rounded-[26px] px-[32px] py-[12px] transition m-auto"
            >
              View More <img src={Arrow} alt="" className="w-[20px] h-[20px]"/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
