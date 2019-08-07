import React from "react";
import styled from "styled-components";
import Map from "../components/Map";

function Overview({ spots, center, onSetLocation }) {
  return (
    <Map spots={spots} center={center} zoom={3} onMapClick={onSetLocation} />
  );
}

export default Overview;
