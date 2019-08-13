import React from "react";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Map from "./Map";
import Divider from "./Divider";
import {
  Bookmark,
  StyledTags,
  StyledCard,
  MapContainer,
  Text,
  Img,
  ImgContainer,
  TagContainer
} from "./card/components";

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
  const spots = [{ _id: "id", location }];

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
