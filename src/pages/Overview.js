import React from "react";
import Map from "../components/Map";
import FooterNavigation from "../components/Footer";

function Overview({ spots, center }) {
  return (
    <>
      <Map
        spots={spots}
        center={center}
        zoom={3}
        height="100vh"
        width="100vw"
      />
      <FooterNavigation
        links={[
          { to: "/", icon: "fa-home" },
          { to: "/map", icon: "fa-globe-americas" },
          { to: "/secretSpots", icon: "fa-list-ul" },
          { to: "/addSpots", icon: "fa-plus-circle" }
        ]}
      />
    </>
  );
}

export default Overview;
