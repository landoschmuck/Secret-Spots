import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecretSpots from "../pages/SecretSpots";
import FooterNavigation from "../components/Footer";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/secret_spots" component={SecretSpots} />
        </Switch>
        <FooterNavigation
          links={[
            { to: "/", icon: "fa-map-marker-alt" },
            { to: "/secret_spots", icon: "fa-list-ul" },
            { to: "/add_spots", icon: "fa-plus-circle" }
          ]}
        />
      </Router>
    </>
  );
}

export default App;
