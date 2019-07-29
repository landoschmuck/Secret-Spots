import Card from "../components/Card";
import React from "react";
import styled from "styled-components";
import mockCards from "./__Mock__/cards";
import Header from "../components/Header";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

function SecretSpots() {
  const [cards, setCards] = React.useState(mockCards);

  function handleToggleBookmark(id) {
    const index = cards.findIndex(card => card._id === id);
    const card = cards[index];
    const newCards = cards.slice();
    newCards[index] = { ...card, bookmarked: !card.bookmarked };
    setCards(newCards);
  }

  function renderCard(card) {
    return (
      <Card
        key={card._id}
        headImg={card.headImg}
        title={card.title}
        text={card.text}
        tags={card.tags}
        mapImg={card.mapImg}
        bookmarked={card.bookmarked}
        onBookmark={() => handleToggleBookmark(card._id)}
      />
    );
  }

  return (
    <>
      <Header title="My Secret Spots" icon="fa-map-marker-alt" />

      <CardContainer>{cards.map(card => renderCard(card))}</CardContainer>
    </>
  );
}

export default SecretSpots;
