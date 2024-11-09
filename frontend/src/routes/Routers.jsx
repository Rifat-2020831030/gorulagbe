// router.js
import { createBrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Dashboard from "../pages/dashboard";
import ErrorPage from "../components/error/Error";
import CustomerFeed from "../pages/CustomerFeed";
import Details from "../pages/Details";
import Navbar from "../components/navbar/Navbar";
import AuthController from "../components/auth/Auth";
import Layout from "../pages/Layout";
import Checkout from "../components/Checkout/Checkout";
import AuctionDetails from "../pages/UserAuction2";
import UserAuction from "../pages/UserAuction";
import CreateAuction from "../pages/CreateAuction";
import CreateCattle from "../pages/NewCattle";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <LandingPage />
      </Layout>
    ),
    exact: true,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/customer-feed",
    element: (
      <Layout>
        <CustomerFeed />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/cattle-details/:id",
    element: (
      <Layout>
        <Details />
      </Layout>
    ),
  },
  {
    path: "/",
    element: <Navigate to="/customer-feed" />,
  },
  {
    path: "/profile",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/create-auction",
    element: <CreateAuction />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/auction",
    element: <UserAuction />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auction/:auction_id",
    element: <AuctionDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-cattle",
    element: <CreateCattle />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/checkout",
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

export default router;
