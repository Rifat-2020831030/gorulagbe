import React from 'react'
import ReactDOM from 'react-dom/client'
// change the landingPage import to your new page
import Landingpage from './pages/landingPage';
import './index.css'
import UserAuction from './pages/UserAuction';
import CreateAuction from './pages/CreateAuction'
import Dashboard from './pages/dashboard';
import NewCattle from './pages/NewCattle'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<NewCattle/>);
