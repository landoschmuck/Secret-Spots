import React from "react";
import Map from "../components/Map";

function Overview({ width, height, spots, center, onSetLocation }) {
  return (
    <Map
      spots={spots}
      center={center}
      zoom={3}
      height={height}
      width={width}
      onMapClick={onSetLocation}
    />
  );
}

export default Overview;
