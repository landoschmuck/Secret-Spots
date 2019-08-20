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

const TextContainer = styled.div`
  width: 150px;
  font-size: 10px;
`;

const InfoWindowImg = styled.img`
  max-height: 100px;
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
      let clickLocation = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      onMapClick({ lat: event.latLng.lat(), lng: event.latLng.lng() });
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
              url: "/android-marker-icon-4.jpg",
              scaledSize: new window.google.maps.Size(50, 50)
            }}
          />
        );
      })}

      {newSpot && (
        <Marker
          icon={{
            url: "/clipart193878.png",
            scaledSize: new window.google.maps.Size(30, 50)
          }}
          Key="new"
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
              <p>{selectedSpot.text}</p>
            </TextContainer>
            {selectedSpot.tags && selectedSpot.tags.length && (
              <TagList>{selectedSpot.tags.map(renderTag)}</TagList>
            )}
            {(!selectedSpot.tags || !selectedSpot.tags.length) && (
              <TagList>-</TagList>
            )}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

function RenderMap(props) {
  const wi = props.width;
  const he = props.height;
  return (
    <div style={{ width: wi, height: he }}>
      <MapWrapped
        {...props}
        googleMapURL={MAP_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `90%` }} />}
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
