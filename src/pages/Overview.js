import React from "react";
import Map from "../components/Map";
import styled from "styled-components";
import { fadePage } from "../utils/animations";

const FadeContainer = styled.div`
  animation: ${fadePage} 0.5s ease both;
`;

function Overview({ width, height, spots, center, onSetLocation }) {
  return (
    <FadeContainer>
      <Map
        spots={spots}
        center={center}
        zoom={3}
        height={height}
        width={width}
        onMapClick={onSetLocation}
      />
    </FadeContainer>
  );
}

export default Overview;
