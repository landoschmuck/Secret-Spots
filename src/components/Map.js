import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tag from "./card/Tag";
import { TagList } from "./card/components";

const Title = styled.h3``;

const Text = styled.p`
  font-size: 14px;
`;

const TextContainer = styled.div`
  width: 150x;
  font-size: 10px;
`;

const InfoWindowImg = styled.img`
  max-height: 140px;
  width: auto;
`;

const MAP_URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
  process.env.REACT_APP_GOOGLE_KEY
}`;

function Map({ center, spots, zoom, onMapClick }) {
  const [selectedSpot, setSelectedSpot] = React.useState(null);
  const [newSpot, setNewSpot] = React.useState(false);

  React.useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedSpot(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  function handleMapClick(event) {
    if (onMapClick) {
      const clickLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      onMapClick(clickLocation);
      newMarker(clickLocation);
    }
  }

  function newMarker(clickLocation) {
    setNewSpot(clickLocation);
  }
  function renderTag(tag) {
    return <Tag key={tag}>{tag}</Tag>;
  }

  return (
    <GoogleMap
      defaultZoom={zoom}
      defaultCenter={center}
      defaultOptions={{ styles: mapStyles }}
      onClick={handleMapClick}
    >
      {spots.map(spot => {
        return (
          <Marker
            key={spot._id}
            position={spot.location}
            onClick={() => {
              setSelectedSpot(spot);
            }}
            icon={{
              url: "/mapMarker/blueMapMarker.jpg",
              scaledSize: new window.google.maps.Size(50, 50)
            }}
          />
        );
      })}

      {newSpot && (
        <Marker
          icon={{
            url: "/mapMarker/greyMapMarker.png",
            scaledSize: new window.google.maps.Size(30, 50)
          }}
          position={newSpot}
        />
      )}

      {selectedSpot && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedSpot(null);
          }}
          position={selectedSpot.location}
        >
          <div>
            <InfoWindowImg src={selectedSpot.headImg} />
            <Title>{selectedSpot.title}</Title>
            <TextContainer>
              <Text>{selectedSpot.text}</Text>
            </TextContainer>
            {selectedSpot.tags && selectedSpot.tags.length && (
              <TagList>{selectedSpot.tags.map(renderTag)}</TagList>
            )}
            {!selectedSpot.tags || !selectedSpot.tags.length}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

function RenderMap({ width, height, ...props }) {
  return (
    <div style={{ width, height }}>
      <MapWrapped
        {...props}
        googleMapURL={MAP_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `95%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  spots: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  onMapClick: PropTypes.func
};

export default RenderMap;
