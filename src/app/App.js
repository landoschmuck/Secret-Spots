import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecretSpots from "../pages/SecretSpots";
import AddSpots from "../pages/Add-spots";
import FooterNavigation from "../components/Footer";
import mockSpots from "../pages/__Mock__/cards";
import Landing from "../pages/Landing";

function App() {
  const [spots, setSpots] = React.useState(mockSpots);
  const [showBookmarked, setShowBookmarked] = React.useState(false);

  function handleCreate(spot) {
    setSpots([spot, ...spots]);
    console.log(spots);
  }

  function handleToggleBookmark(id) {
    const index = spots.findIndex(spot => spot._id === id);
    const spot = spots[index];
    const newSpots = spots.slice();
    newSpots[index] = { ...spot, bookmarked: !spot.bookmarked };
    setSpots(newSpots);
  }

  function handleShowBookmarked() {
    console.log("handle Show");
    setShowBookmarked(!showBookmarked);
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact render={props => <Landing {...props} />} />
          <Route
            path="/secret-spots"
            exact
            render={props => (
              <SecretSpots
                showBookmarked={showBookmarked}
                onToggleBookmark={handleToggleBookmark}
                spots={spots}
                onShowBookmarks={handleShowBookmarked}
                {...props}
              />
            )}
          />
          <Route
            path="/add-spots"
            exact
            render={props => <AddSpots onCreate={handleCreate} {...props} />}
          />
        </Switch>
        <FooterNavigation
          links={[
            { to: "/", icon: "fa-map-marker-alt" },
            { to: "/secret-spots", icon: "fa-list-ul" },
            { to: "/add-spots", icon: "fa-plus-circle" }
          ]}
        />
      </Router>
    </>
  );
}

export default App;
