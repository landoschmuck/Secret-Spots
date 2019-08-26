import React from "react";
import styled from "styled-components";
import Fullscreen from "../components/Fullscreen";
import BackgroundImage from "../components/Backgroundimage";
import Logo from "../components/Logo";
import { fadeIn, fadeInFromCorner } from "../utils/animations";
import Title from "../components/Title";
import FooterNavigation from "../components/Footer";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  color: white;
  margin: 53px;
  text-align: center;
`;

const AnimatedTitle = styled(Title)`
  animation: ${fadeIn} 1s ease-out 1 both;
  animation-delay: 1.2s;
  color: white;
  text-shadow: 0 -1px black, 1px 0 black, 0 1px black, -1px 0;
`;
const AnimatedLogo = styled(Logo)`
  animation: ${fadeInFromCorner} 1s ease-out 1 both;
  animation-delay: 0.2s;
`;
const Grid = styled.div`
  display: grid;
  grid-template-rows: 0px auto 63.3px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
`;

function Landing() {
  return (
    <Grid>
      <div />
      <Fullscreen>
        <BackgroundImage src="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_1280.jpg" />
        <LogoContainer>
          <AnimatedLogo />
          <AnimatedTitle data-cy="page-title-text">Secret Spots</AnimatedTitle>
        </LogoContainer>
        <Subtitle>
          {" "}
          Mit Secret-Spots kannst du deine LieblingsSpots speichern und wieder
          besuchen!
        </Subtitle>
      </Fullscreen>
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
export default Landing;
