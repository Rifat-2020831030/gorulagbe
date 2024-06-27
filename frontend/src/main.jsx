import React from 'react'
import ReactDOM from 'react-dom/client'
// change the landingPage import to your new page
import Landingpage from './pages/landingPage';
import './index.css'
import CreateAuction from './pages/CreateAuction';
import AuctionCustomer from './pages/AuctionCustomer';
import Dashboard from './pages/dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Dashboard/>);
