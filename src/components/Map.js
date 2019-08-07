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
      onMapClick({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  }

  return (
    <GoogleMap
      defaultZoom={zoom}
      defaultCenter={center}
      defaultOptions={{ styles: mapStyles }}
      onClick={handleMapClick}
    >
      {spots &&
        spots.map(spot => (
          <Marker
            key={spot._id}
            position={spot.location}
            onClick={() => {
              setSelectedSpot(spot);
            }}
          />
        ))}

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
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

function RenderMap(props) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
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
