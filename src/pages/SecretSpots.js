import Card from "../components/Card";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ActionButton from "../components/ActionButton";
import { keyframes } from "styled-components";

const SearchBox = styled.div`
  height: 40px;
  width: 100%;
  grid-column: 2 / 3;
  align-self: flex-end;
  margin-bottom: 15px;
  margin-top: ${props => props.marginTop};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  transition: all 0.1s;
`;

const searchSlide = keyframes`
  from {
    width: 0;
    opacity: 0;
    }
  to {
    width: -30%;
    opacity: 1;
    }
`;

const SearchInput = styled.input`
  position: absolute;
  right: 168px;
  top: 8px;
  z-index: 2;
  width: -40%;
  height: 30px;
  padding: 10px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  font-size: 14px;
  background-color: lightgray;
  animation: ${searchSlide} 0.5s ease;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SearchButton = styled(ActionButton)`
  top: 1;
  right: 330px;
  z-index: 1;
  width: 40px;
  height: 40px;
  margin-top: 4px;
  position: absolute;
  color: white;
  outline: none;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const BookmarkButton = styled(ActionButton)`
  top: 0;
  right: 7px;
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
  onDeleteCard,
  showBookmarked,
  onShowBookmarks
}) {
  const [show, setShow] = React.useState(null);
  const [searchResult, setSearchResult] = React.useState(spots);
  console.log(searchResult);

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
        {filteredSpots.map(spot => renderCard(spot))}
      </CardContainer>
    </>
  );
}

export default SecretSpots;
