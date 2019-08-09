import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Map from "./Map";
import Divider from "./Divider";
import ActionButton from "./ActionButton";

const Bookmark = styled(ActionButton)`
  position: absolute;
  right: 9px;
  top: 6px;
  background: white;
  transition: all 0.4s ease;
  color: ${props => (props.active ? "gold" : "grey")};
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
  font-size: 12px;
  height: 23px;
  margin-bottom: 15px;
`;

const StyledCard = styled.div`
  /* background-image: url("https://cdn.pixabay.com/photo/2017/01/29/13/11/scrapbook-2017957_1280.jpg"); */
  padding: 25px;
  border: 0.5px solid whitesmoke;
  border-radius: 15px;
  overflow: auto;
  height: 500px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: black;
  background: white;
  box-shadow: 1px 4px 10px 4px rgba(214, 211, 214, 1);

  @media (min-width: 500px) {
    width: 350px;
  }
`;

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  /* border: solid 1px black; */
  margin-top: 5px;
  height: 300px;
`;

const Text = styled.p`
  font-size: 16px;
`;
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
  margin-bottom: 15px;
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
        <Bookmark active={bookmarked} onClick={onBookmark} icon="fa-star" />
        <ImgContainer>
          <Img src={headImg} />
        </ImgContainer>
        <Headline size="S">{title}</Headline>
        <Text>{text}</Text>
        {tags[0].length > 0 && (
          <TagContainer>
            <StyledTags>{tags}</StyledTags>
          </TagContainer>
        )}
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
      <Divider />
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
