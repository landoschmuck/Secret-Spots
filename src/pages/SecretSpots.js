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
  history,
  spots,
  onToggleBookmark,
  onDeleteCard,
  showBookmarked,
  onShowBookmarks
}) {
  const [show, setShow] = React.useState(null);
  const [searchResult, setSearchResult] = React.useState("");

  function handleFilter(event) {
    const { value } = event.target;
    setSearchResult(
      spots.filter(spot =>
        spot.title.toLowerCase().includes(value.toLowerCase())
      )
    );
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

  const filteredSpots = showBookmarked
    ? spots.filter(spot => spot.bookmarked)
    : spots;

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
            icon="fa-search"
            onClick={handleClick}
            ani="none"
            type="search"
            transform="scale(1)"
            boxShadow="0px"
          />
        </SearchBox>
        <BookmarkButton
          icon="fa-star"
          active={showBookmarked}
          onClick={onShowBookmarks}
        />
      </Header>
      <CardContainer>
        {searchResult
          ? searchResult.map(spot => renderCard(spot))
          : filteredSpots.map(spot => renderCard(spot))}
      </CardContainer>
    </>
  );
}

export default SecretSpots;
