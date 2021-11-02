import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./Components/SignUp";
import Shop from "./pages/Shop";
import { Redirect } from "react-router";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <SignUp />}</Route>
        <Route path="/signup">{user ? <Redirect to="/" /> : <SignUp />}</Route> */}
      </Switch>
    </Router>
  );
}

export default App;
