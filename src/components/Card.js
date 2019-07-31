import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";

const Bookmark = styled.div`
  position: absolute;
  right: 12px;
  top: -6px;
  width: 20px;
  height: 15px;
  background: ${props => (props.active ? "#98c2e0" : "black")};
  transition: all 0.4s ease;

  &:after {
    transition: all 0.4s ease;
    position: absolute;
    display: block;
    top: 100%;
    content: "";
    border: 10px solid ${props => (props.active ? "#98c2e0" : "black")};
    border-bottom-color: transparent;
  }
`;

const StyledTags = styled.span``;

const StyledCard = styled.div`
  /* background-image: url("https://cdn.pixabay.com/photo/2013/05/15/06/10/fall-foliage-111315_1280.jpg"); */
  background: #9da2ab;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 15px;
  overflow: auto;
  height: 500px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;
`;

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  border: solid 1px black;
  margin-top: 5px;
  height: 150px;
`;

const Text = styled.p``;
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const MapImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  border: solid 1px black;
  margin-top: 5px;
  border-radius: 15px;
`;

const TagContainer = styled.div`
  display: flex;
  margin: 0px;
  border: black solid 1px;
  height: 35px;
  width: 100%;
  padding: 2.1px;
  font-size: 24px;
`;

function Card({
  title,
  text,
  tags,
  headImg,
  mapImg,
  bookmarked,
  onBookmark,
  ...props
}) {
  return (
    <StyledCard>
      <Bookmark active={bookmarked} onClick={onBookmark} />
      <ImgContainer>
        <Img src={headImg} />
      </ImgContainer>
      <Headline size="S">{title}</Headline>
      <Text>{text}</Text>
      <TagContainer>
        <StyledTags>{tags}</StyledTags>
      </TagContainer>
      <MapContainer>
        <MapImg src={mapImg} />
      </MapContainer>
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  bookmarked: PropTypes.bool,
  onBookmark: PropTypes.func
};

export default Card;
