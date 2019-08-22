import React from "react";
import Map from "../components/Map";

function Overview({ spots, center }) {
  return (
    <Map spots={spots} center={center} zoom={3} height="100vh" width="100vw" />
  );
}

export default Overview;
