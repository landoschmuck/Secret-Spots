import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Map from "./Map";

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

const StyledTags = styled.span`
  /* border: 3px solid grey; */
  display: flex;
  padding: 0px 10px;
  border-radius: 15px;
  background: teal;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledCard = styled.div`
  /* background-image: url("https://cdn.pixabay.com/photo/2017/01/29/13/11/scrapbook-2017957_1280.jpg"); */
  padding: 25px;
  border: 0.5px solid whitesmoke;
  border-radius: 15px;
  overflow: auto;
  height: 500px;
  margin: 10px;
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: black;
  background: white;
  box-shadow: 7px 10px 9px -5px rgba(235, 235, 235, 1);
`;

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  /* border: solid 1px black; */
  margin-top: 5px;
  height: 300px;
`;

const Text = styled.p``;
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  /* border: solid 1px black; */
  margin-top: 5px;
  border-radius: 15px;
`;

const TagContainer = styled.div`
  display: flex;
  margin: 0px;
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
  location,
  height,
  width,
  ...props
}) {
  const spots = [{ location }];

  return (
    <>
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
          <Map
            center={location}
            height="100%"
            width="100%"
            zoom={10}
            spots={spots}
          />
        </MapContainer>
      </StyledCard>
    </>
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
