import React from "react";
import Map from "./Map";
import PropTypes from "prop-types";

function AddSpotMap({ width, height, spots, center, onSetLocation }) {
  console.log(spots);
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
AddSpotMap.propTypes = {
  spots: PropTypes.array.isRequired,
  center: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  onSetLocation: PropTypes.func.isRequired
};

export default AddSpotMap;
