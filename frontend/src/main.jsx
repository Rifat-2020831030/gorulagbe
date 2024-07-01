import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// change the landingPage import to your new page
// import App from "./routes/Router";
import router from "./routes/Routers";
import CustomerFeed from "./pages/CustomerFeed";
import LandingPage from "./pages/landingPage";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <RouterProvider router={router} /> */}
  //   <CustomerFeed />
  // </React.StrictMode>
  <CustomerFeed />
  // <LandingPage />
);
