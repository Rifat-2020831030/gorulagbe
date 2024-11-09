import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
// change the landingPage import to your new page

import Router from "./routes/Routers";

// ReactDOM.createRoot(document.getElementById('root'))
// .render(
//   <React.StrictMode>
//     {/* <Routering /> */}
//     {/* <LandingPage /> */}
//   </React.StrictMode>
// );
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    {/* <CustomerFeed /> */}
  </React.StrictMode>
);
