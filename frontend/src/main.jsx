import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// change the landingPage import to your new page
import Router from "./routes/Routers";
import CustomerFeed from "./pages/CustomerFeed";
import LandingPage from "./pages/landingPage";


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <Routering /> */}
//     {/* <LandingPage /> */}
//   </React.StrictMode>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
