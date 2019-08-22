import React from "react";
import styled from "styled-components";
import Fullscreen from "../components/Fullscreen";
import BackgroundImage from "../components/Backgroundimage";
import Logo from "../components/Logo";
import { fadeIn, fadeInFromCorner } from "../utils/animations";
import Title from "../components/Title";
import Divider from "../components/Divider";
import ScrollTo from "../components/ScrollTo";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  color: grey;
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

function Landing() {
  return (
    <>
      <Fullscreen>
        <BackgroundImage src="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_1280.jpg" />
        <LogoContainer>
          <AnimatedLogo />
          <AnimatedTitle data-cy="page-title-text">Secret Spots</AnimatedTitle>
        </LogoContainer>
        <ScrollTo to="about">Scroll Down</ScrollTo>
      </Fullscreen>
      <Subtitle id="about">About Secret Spots</Subtitle>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est
      </p>
      <Divider />
    </>
  );
}
export default Landing;
