import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterNavigation from "../components/Footer";
import AddSpots from "../pages/Add-spots";
import Landing from "../pages/Landing";
import Overview from "../pages/Overview";
import SecretSpots from "../pages/SecretSpots";
import { getSpots, postSpot } from "../services";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [spots, setSpots] = React.useState([]);
  const [showBookmarked, setShowBookmarked] = React.useState(false);
  const [userLocation, setUserLocation] = React.useState(null);
  const [newLocation, setNewLocation] = React.useState("");

  async function loadSpots() {
    setSpots(await getSpots());
  }

  React.useEffect(() => {
    loadSpots();
  }, []);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const postionCoordinates = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      setUserLocation(postionCoordinates);
    });
  }, []);

  function handleCreate(spot) {
    postSpot(spot).then(result => setSpots([result, ...spots]));
  }

  function handleToggleBookmark(id) {
    const index = spots.findIndex(spot => spot._id === id);
    const spot = spots[index];
    const newSpots = spots.slice();
    newSpots[index] = { ...spot, bookmarked: !spot.bookmarked };
    setSpots(newSpots);
  }

  function handleShowBookmarked() {
    setShowBookmarked(!showBookmarked);
  }
  function handleSetLocation(location) {
    setNewLocation(location);
    console.log(newLocation);
  }
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route
            path="/map"
            exact
            render={props => (
              <Overview
                {...props}
                spots={spots}
                onSetLocation={handleSetLocation}
                center={userLocation}
              />
            )}
          />
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
            render={props => (
              <AddSpots
                spots={spots}
                onSetLocation={handleSetLocation}
                center={userLocation}
                onCreate={handleCreate}
                handleSetLocation={handleSetLocation}
                userLocation={userLocation}
                newLocation={newLocation}
                {...props}
              />
            )}
          />
        </Switch>
        <FooterNavigation
          links={[
            { to: "/", icon: "fa-map-marker-alt" },
            { to: "/map", icon: "fa-globe-americas" },
            { to: "/secret-spots", icon: "fa-list-ul" },
            { to: "/add-spots", icon: "fa-plus-circle" }
          ]}
        />
      </Router>
    </>
  );
}

export default App;
