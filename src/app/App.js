import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecretSpots from "../pages/SecretSpots";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/secret_spots" component={SecretSpots} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
