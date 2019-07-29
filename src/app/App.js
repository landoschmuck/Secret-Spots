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
            { to: "/", title: "Home" },
            { to: "/secret_spots", title: "My Secret Spots" },
            { to: "/create_spots", title: "Add New Spots" }
          ]}
        />
      </Router>
    </>
  );
}

export default App;
