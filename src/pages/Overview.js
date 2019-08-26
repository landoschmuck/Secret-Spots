import React from "react";
import Map from "../components/Map";
import FooterNavigation from "../components/Footer";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 0.1px auto 63px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
`;

function Overview({ spots, center }) {
  return (
    <Grid>
      <div />
      <Map
        spots={spots}
        center={center}
        zoom={3}
        height="105.2%"
        width="100%"
      />
      <FooterNavigation
        links={[
          { to: "/", icon: "fa-home" },
          { to: "/map", icon: "fa-globe-americas" },
          { to: "/secretSpots", icon: "fa-list-ul" },
          { to: "/addSpots", icon: "fa-plus-circle" }
        ]}
      />
    </Grid>
  );
}

export default Overview;
