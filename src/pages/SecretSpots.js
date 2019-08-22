import Card from "../components/Card";
import React from "react";
import Header from "../components/Header";

import {
  SearchBox,
  SearchInput,
  SearchButton,
  CardContainer,
  BookmarkButton
} from "./secretSpots/components";

function SecretSpots({
  spots,
  onToggleBookmark,
  onDeleteCard,
  showBookmarked,
  onShowBookmarks
}) {
  const [show, setShow] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");

  function handleFilter(event) {
    const { value } = event.target;
    setSearchValue(value);
  }

  function handleClick() {
    setShow(!show);
  }

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
        onDelete={() => onDeleteCard(spot._id)}
      />
    );
  }

  const filteredSpots = spots
    .filter(spot => (showBookmarked ? spot.bookmarked : true))
    .filter(spot =>
      spot.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Header icon="fa-list-ul" title="My Secret Spots">
        <SearchBox>
          {show && (
            <SearchInput
              placeholder="Suche nach Orten..."
              onChange={handleFilter}
            />
          )}
          <SearchButton
            onClick={handleClick}
            ani="none"
            type="search"
            transform="scale(1)"
            boxShadow="0px"
          />
        </SearchBox>
        <BookmarkButton active={showBookmarked} onClick={onShowBookmarks} />
      </Header>
      <CardContainer>{filteredSpots.map(renderCard)}</CardContainer>
    </>
  );
}

export default SecretSpots;
