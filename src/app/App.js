import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterNavigation from "../components/Footer";
import AddSpots from "../pages/Add-spots";
import Landing from "../pages/Landing";
import Overview from "../pages/Overview";
import SecretSpots from "../pages/SecretSpots";
import { getSpots, postSpot, deleteSpot, patchSpot } from "../services";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [spots, setSpots] = React.useState([]);
  const [showBookmarked, setShowBookmarked] = React.useState(false);
  const [userLocation, setUserLocation] = React.useState({
    lat: 53.551086,
    lng: 9.993682
  });
  const [newLocation, setNewLocation] = React.useState("");

  async function loadSpots() {
    const foundSpots = await getSpots();
    setSpots(foundSpots.data);
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

  async function handleCreate(spot) {
    const createdSpot = await postSpot(spot);

    setSpots([createdSpot.data, ...spots]);
  }

  function updateSpotInState(data) {
    const index = spots.findIndex(spot => spot._id === data._id);
    setSpots([...spots.slice(0, index), data, ...spots.slice(index + 1)]);
  }

  async function handleToggleBookmark(id) {
    const spot = spots.find(spot => spot._id === id);
    const toogledBookmark = await patchSpot(
      { bookmarked: !spot.bookmarked },
      spot._id
    );
    console.log(toogledBookmark.data);
    updateSpotInState(toogledBookmark.data);
  }

  function handleShowBookmarked() {
    setShowBookmarked(!showBookmarked);
  }

  function handleSetLocation(location) {
    setNewLocation(location);
  }

  function handleDeleteCard(id) {
    deleteSpot(id);
    const index = spots.findIndex(spot => spot._id === id);
    setSpots([...spots.slice(0, index), ...spots.slice(index + 1)]);
  }

  return (
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
              width="100vw"
              height="103vh"
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
              onDeleteCard={handleDeleteCard}
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
          { to: "/", icon: "fa-home" },
          { to: "/map", icon: "fa-globe-americas" },
          { to: "/secret-spots", icon: "fa-list-ul" },
          { to: "/add-spots", icon: "fa-plus-circle" }
        ]}
      />
    </Router>
  );
}

export default App;
