import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecretSpots from "../pages/SecretSpots";
import AddSpots from "../pages/Add-spots";
import FooterNavigation from "../components/Footer";
import mockCards from "../pages/__Mock__/cards";

function App() {
  const [cards, setCards] = React.useState(mockCards);
  const [showBookmarked, setShowBookmarked] = React.useState(false);

  function handleCreate(card) {
    setCards([card, ...cards]);
    console.log(cards);
  }

  function handleToggleBookmark(id) {
    const index = cards.findIndex(card => card._id === id);
    const card = cards[index];
    const newCards = cards.slice();
    newCards[index] = { ...card, bookmarked: !card.bookmarked };
    setCards(newCards);
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
          <Route
            path="/secret_spots"
            render={props => (
              <SecretSpots
                showBookmarked={showBookmarked}
                onToggleBookmark={handleToggleBookmark}
                cards={cards}
                onShowBookmarks={handleShowBookmarked}
                {...props}
              />
            )}
          />
          <Route
            path="/add_spots"
            render={props => <AddSpots onCreate={handleCreate} {...props} />}
          />
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
