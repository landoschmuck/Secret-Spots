import Card from "../components/Card";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ActionButton from "../components/ActionButton";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const BookmarkButton = styled(ActionButton)`
  position: fixed;
  top: 0;
  right: 20px;
  z-index: 1;
  width: 38px;
  height: 38px;
  margin-top: 4px;
`;

function SecretSpots({
  history,
  cards,
  onToggleBookmark,
  showBookmarked,
  onShowBookmarks
}) {
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
        onBookmark={() => onToggleBookmark(card._id)}
      />
    );
  }

  const filteredCards = showBookmarked
    ? cards.filter(card => card.bookmarked)
    : cards;

  return (
    <>
      <Header title="My Secret Spots" icon="fa-map-marker-alt" />
      <BookmarkButton
        icon="fa-star"
        active={showBookmarked}
        onClick={onShowBookmarks}
      />
      <CardContainer>
        {filteredCards.map(card => renderCard(card))}
      </CardContainer>
    </>
  );
}

export default SecretSpots;
