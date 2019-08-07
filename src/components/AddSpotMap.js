import React from "react";
import Map from "./Map";

function AddSpotMap({ spots, center, onSetLocation }) {
  return (
    <Map spots={spots} center={center} zoom={3} onMapClick={onSetLocation} />
  );
}

export default AddSpotMap;
