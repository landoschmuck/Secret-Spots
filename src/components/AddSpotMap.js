import React from "react";
import Map from "./Map";

function AddSpotMap({ width, height, spots, center, onSetLocation }) {
  return (
    <Map
      spots={spots}
      center={center}
      width={width}
      height={height}
      zoom={3}
      onMapClick={onSetLocation}
    />
  );
}

export default AddSpotMap;
