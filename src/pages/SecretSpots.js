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
  spots,
  onToggleBookmark,
  showBookmarked,
  onShowBookmarks
}) {
  function renderCard(spot) {
    return (
      <Card
        key={spot._id}
        headImg={spot.headImg}
        title={spot.title}
        text={spot.text}
        tags={spot.tags}
        mapImg={spot.mapImg}
        bookmarked={spot.bookmarked}
        onBookmark={() => onToggleBookmark(spot._id)}
      />
    );
  }

  const filteredSpots = showBookmarked
    ? spots.filter(spot => spot.bookmarked)
    : spots;

  return (
    <>
      <Header icon="fa-list-ul" title="My Secret Spots" />
      <BookmarkButton
        icon="fa-star"
        active={showBookmarked}
        onClick={onShowBookmarks}
      />
      <CardContainer>
        {filteredSpots.map(spot => renderCard(spot))}
      </CardContainer>
    </>
  );
}

export default SecretSpots;
