// router.js
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import Dashboard from '../pages/dashboard';
import ErrorPage from '../components/error/Error';
import CustomerFeed from '../pages/CustomerFeed';

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
  }
]);

export default router;

