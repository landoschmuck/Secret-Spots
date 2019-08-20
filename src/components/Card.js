import React from "react";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Map from "./Map";
import Divider from "./Divider";
import Tag from "./card/Tag";
import {
  Bookmark,
  TagList,
  StyledCard,
  MapContainer,
  Text,
  Img,
  ImgContainer,
  DeletButton
} from "./card/components";

function Card({
  title,
  text,
  tags,
  headImg,
  bookmarked,
  onBookmark,
  onDelete,
  location,
  height,
  width,
  ...props
}) {
  const spots = [{ _id: "id", location }];

  function renderTag(tag) {
    return <Tag key={tag}>{tag}</Tag>;
  }

  return (
    <>
      <StyledCard>
        <DeletButton onClick={onDelete} icon="fa-trash-alt" />
        <Bookmark active={bookmarked} onClick={onBookmark} icon="fa-star" />
        <ImgContainer>
          <Img src={headImg} />
        </ImgContainer>
        <Headline size="S">{title}</Headline>
        <Text>{text}</Text>
        {tags && tags.length && <TagList>{tags.map(renderTag)}</TagList>}
        {(!tags || !tags.length) && <TagList>-</TagList>}
        <MapContainer>
          <Map
            center={location}
            height="100%"
            width="100%"
            zoom={7}
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
  headImg: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool.isRequired,
  onBookmark: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default Card;
