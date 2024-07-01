import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Landingpage from "../pages/landingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
