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

const InfoWindowImg = styled.img`
  height: auto;
  width: 100%;
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
          />
        );
      })}

      {newSpot && <Marker Key="new" position={newSpot} />}

      {selectedSpot && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedSpot(null);
          }}
          position={selectedSpot.location}
        >
          <div>
            <InfoWindowImg src={selectedSpot.headImg} />
            <h2>{selectedSpot.title}</h2>
            <p>{selectedSpot.text}</p>
            <p>{selectedSpot.tags}</p>
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

export default RenderMap;
/*props geben und auf addspots und secretSpots auf 100% bei addspots
      height auf ca. 120%*/
