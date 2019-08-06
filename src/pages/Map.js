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

function Map({ center, spots, zoom }) {
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
  return (
    <GoogleMap
      defaultZoom={zoom}
      defaultCenter={center}
      defaultOptions={{ styles: mapStyles }}
    >
      {spots.map(spot => (
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

function RenderMap({ center, spots, zoom }) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        center={center}
        spots={spots}
        zoom={zoom}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `90%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default RenderMap;
