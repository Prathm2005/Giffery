import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GifProvider from "./context/Contextapi"; 
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifProvider>
      <App />
      <Footer/>
    </GifProvider>
  </React.StrictMode>
);
