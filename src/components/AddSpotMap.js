import React from "react";
import Map from "./Map";
import PropTypes from "prop-types";

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
AddSpotMap.propTypes = {
  spots: PropTypes.string.isRequired,
  center: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  onSetLocation: PropTypes.func.isRequired
};

export default AddSpotMap;
