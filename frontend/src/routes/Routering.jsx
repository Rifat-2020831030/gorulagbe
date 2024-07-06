import { Route, BrowserRouter,Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import LandingPage from "../pages/landingPage";


function Routering() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={LandingPage} />
        <Route path="/dashboard" element={Dashboard} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routering;
