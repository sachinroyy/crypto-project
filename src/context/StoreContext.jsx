/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [blog_list, setBlogList] = useState([]);

  // const url = "https://crypto-venture-backend.onrender.com";
  // const url = "http://localhost:4000/api/posts";
  const url = "https://crypto-venture-backend.onrender.com/api/posts";

  const fetchBlogList = async () => {
    const response = await axios.get(url);

    console.log("I am response", response.data);
    setBlogList(response.data);
  };

  useEffect(() => {
    async function loadData() {
      await fetchBlogList();
    }

    loadData();
  }, []);

  console.log("I Am blog list", blog_list);

  const contextValue = {
    blog_list,
    url,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
