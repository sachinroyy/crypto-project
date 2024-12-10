// import React from 'react'

import AdminPanel from "../../pages/AdminPanel/AdminPanel";
import HomePage from "../../pages/HomePage/HomePage";

const PrivateRoute = () => {
  const connectedAddress = localStorage.getItem("publicKey");

  console.log(connectedAddress);

  const checking =
    connectedAddress === "0x17dc3b9f73b8206587ad198d29ad34953199a1a6";

 

  return checking ? <AdminPanel /> : <HomePage />;
};

export default PrivateRoute;
