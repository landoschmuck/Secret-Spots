import Card from "../components/Card";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ActionButton from "../components/ActionButton";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const BookmarkButton = styled(ActionButton)`
  top: 0;
  right: 20px;
  z-index: 1;
  width: 40px;
  height: 40px;
  margin-top: 4px;
  position: absolute;
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
        bookmarked={spot.bookmarked}
        location={spot.location}
        onBookmark={() => onToggleBookmark(spot._id)}
      />
    );
  }

  const filteredSpots = showBookmarked
    ? spots.filter(spot => spot.bookmarked)
    : spots;

  return (
    <>
      <Header icon="fa-list-ul" title="My Secret Spots">
        <BookmarkButton
          icon="fa-star"
          active={showBookmarked}
          onClick={onShowBookmarks}
        />
      </Header>
      <CardContainer>
        {filteredSpots.map(spot => renderCard(spot))}
      </CardContainer>
    </>
  );
}

export default SecretSpots;
