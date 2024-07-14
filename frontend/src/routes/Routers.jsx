// router.js
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import Dashboard from '../pages/dashboard';
import ErrorPage from '../components/error/Error';
import CustomerFeed from '../pages/CustomerFeed';
import Details from '../pages/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    exact: true,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/customer-feed",
    element: <CustomerFeed />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cattle-details/:id",
    element: <Details />,
  },
  {
    path: "/redirect",
    element: <Navigate to="/details/3" />
  }
]);

export default router;

