import Card from "../components/Card";
import React from "react";
import styled from "styled-components";
import cards from "./__Mock__/cards";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function SecretSpots() {
  const [bookmarked, setBookmarked] = React.useState(false);
  // const [cards, setCards] = React.useState([mockCards]);

  // function handleToggleBookmark(id) {
  //   const index = cards.findIndex(card => card._id === id);
  //   const card = cards[index];
  //   const newCards = cards.slice();
  //   newCards[index] = { ...cards, bookmarked: !card.bookmarked };
  //   setCards(newCards);
  // }

  function onToggleBookmark(event) {
    event.preventDefault();
    console.log("handle Show");
    setBookmarked(!bookmarked);
    console.log(!bookmarked);
  }

  function renderCard(card) {
    console.log(card._id);
    return (
      <Card
        key={card._id}
        headImg={card.headImg}
        title={card.title}
        text={card.text}
        tags={card.tags}
        mapImg={card.mapImg}
        onBookmark={onToggleBookmark}
        bookmarked={card.bookmarked}
        // onBookmark={() => onToggleBookmark(card._id)}
        // onToggleBookmark={handleToggleBookmark}
        // onShowBookmarks={handleShowBookmarked}
      />
    );
  }

  // const filteredCards = bookmarked
  //   ? cards.filter(card => card.bookmarked)
  //   : cards;

  return (
    <>
      <CardContainer>{cards.map(card => renderCard(card))}</CardContainer>
    </>
  );
}

export default SecretSpots;
