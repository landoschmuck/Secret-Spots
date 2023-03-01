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
  location
}) {
  function renderTag(tag) {
    return <Tag key={tag}>{tag}</Tag>;
  }

  return (
    <>
      <StyledCard>
        <DeletButton onClick={onDelete} />
        <Bookmark active={bookmarked} onClick={onBookmark} />
        <ImgContainer>
          <Img src={headImg} />
        </ImgContainer>
        <Headline size="S">{title}</Headline>
        <Text>{text}</Text>
        {tags && tags.length && <TagList>{tags.map(renderTag)}</TagList>}
        <MapContainer>
          <Map
            center={location}
            height="100%"
            width="100%"
            zoom={7}
            spots={[{ _id: "id", location }]}
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
