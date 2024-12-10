/* eslint-disable react/prop-types */
import cn from "../../lib/utils.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  console.log(items.image);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-[2.5rem] m-auto mt-[20px] gap-[32px]",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          // to={`/blog/${item.title}`} // updated to match BlogDesc route
          to={`/blog/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
          key={item._id}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          // onClick={handleClick}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <img
              // src={
              //   "https://crypto-venture-backend.onrender.com" +
              //   // "http://localhost:4000" +
              //   "/images/" +
              //   item.image
              // }
              src={item.image}
              // src={`https://crypto-venture-2.onrender.com/images/` + item.image}
              alt={item.title}
              className="w-full h-[223px] object-cover rounded-2xl"
            />

            <div className="px-[24px] pt-[20px] pb-[40px]">
            <h2 className="text-[#008659] bg-[#EFF0FD] w-fit font-bold leading-[20px] rounded-[32px] border-[#86E588] border px-[12px] py-[4px]">{timeAgo(item.createdAt)}</h2>

              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {item.shortDesc.slice(0, 80)}...
              </CardDescription>
              
                {/* <Link to={`/blog/${item._id}`} className="text-blue-500 mt-4 inline-block">
              Read More
            </Link> */}
                <h2 className="text-blue-500 font-bold mt-[24px]">{item.nameOfTheBlogger}</h2>
              
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-[#1E2046] border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-[#EFF0FD] text-[24px] leading-[31px] font-medium mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 text-[1rem] leading-[20px]",
        className
      )}
    >
      {children}
    </p>
  );
};
