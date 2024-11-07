// router.js
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import Dashboard from '../pages/dashboard';
import ErrorPage from '../components/error/Error';
import CustomerFeed from '../pages/CustomerFeed';
import Details from '../pages/Details';
import Navbar from '../components/navbar/Navbar';
import AuthController from '../components/auth/Auth';
import Layout from '../pages/Layout';
import Checkout from '../components/Checkout/Checkout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><LandingPage /></Layout>,
    exact: true,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <Layout><Dashboard /></Layout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/customer-feed",
    element: <Layout><CustomerFeed /></Layout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cattle-details/:id",
    element: <Layout><Details /></Layout>,
  },
  {
    path: "/",
    element: <Navigate to="/customer-feed" />
  },
  {
    path: "/profile",
    element: <Navigate to="/dashboard" />
  },
  {
    path: "/checkout",
    element: <Layout><Checkout /></Layout>,
  }
]);

export default router;
