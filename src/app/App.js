import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddSpots from "../pages/addSpots/AddSpots";
import Landing from "../pages/Landing";
import Overview from "../pages/Overview";
import SecretSpots from "../pages/secretSpots/SecretSpots";
import { getSpots, postSpot, deleteSpot, patchSpot } from "../services";
import GlobalStyles from "./GlobalStyles";

const defaultLocation = {
  lat: 53.551086,
  lng: 9.993682
};

function App() {
  const [spots, setSpots] = React.useState([]);
  const [showBookmarked, setShowBookmarked] = React.useState(false);
  const [userLocation, setUserLocation] = React.useState(defaultLocation);
  const [newLocation, setNewLocation] = React.useState("");

  React.useEffect(() => {
    async function loadSpots() {
      const foundSpots = await getSpots();
      setSpots(foundSpots.data);
    }

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

  async function handleCreate(spot) {
    const { data } = await postSpot(spot);
    setSpots([data, ...spots]);
  }

  function updateSpotInState(spot) {
    const index = spots.findIndex(item => item._id === spot._id);
    setSpots([...spots.slice(0, index), spot, ...spots.slice(index + 1)]);
  }

  async function handleToggleBookmark(id) {
    const spot = spots.find(spot => spot._id === id);
    const toogledBookmark = await patchSpot(
      { bookmarked: !spot.bookmarked },
      spot._id
    );
    updateSpotInState(toogledBookmark.data);
  }

  function handleShowBookmarked() {
    setShowBookmarked(!showBookmarked);
  }

  function handleSetLocation(location) {
    setNewLocation(location);
  }

  async function handleDeleteCard(id) {
    const {
      data: { success }
    } = await deleteSpot(id);

    if (success) {
      const index = spots.findIndex(spot => spot._id === id);
      setSpots([...spots.slice(0, index), ...spots.slice(index + 1)]);
    }
  }

  return (
    <Router>
      <GlobalStyles />

      <Switch>
        <Route
          path="/map"
          render={props => (
            <Overview
              {...props}
              spots={spots}
              center={userLocation}
              width="100vw"
              height="100vh"
            />
          )}
        />

        <Route
          path="/secretSpots"
          render={props => (
            <SecretSpots
              showBookmarked={showBookmarked}
              onToggleBookmark={handleToggleBookmark}
              onDeleteCard={handleDeleteCard}
              spots={spots}
              onShowBookmarks={handleShowBookmarked}
              {...props}
            />
          )}
        />
        <Route
          path="/addSpots"
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
        <Route path="/" exact component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
