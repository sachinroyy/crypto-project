// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <StoreContextProvider>
        <MetaMaskProvider
          debug={false}
          sdkOptions={{
            dappMetadata: {
              name: "Example React Dapp",
              url: window.location.href,
            },
            infuraAPIKey: import.meta.env.VITE_INFURA_API_KEY,
            // Other options.
          }}
        >
          <App />
        </MetaMaskProvider>
      </StoreContextProvider>
    </BrowserRouter>
  </HelmetProvider>
);
