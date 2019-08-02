import React from "react";
import styled from "styled-components";
// import Header from "../components/Header";
import Fullscreen from "../components/Fullscreen";
import BackgroundImage from "../components/Backgroundimage";
import Logo from "../components/Logo";
import { fadeIn, fadeInFromCorner } from "../utils/animations";
import Title from "../components/Title";
import Divider from "../components/Divider";
import Content from "../components/Content";
import Section from "../components/Section";
import ScrollTo from "../components/ScrollTo";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  color: white;
`;

const AnimatedTitle = styled(Title)`
  animation: ${fadeIn} 1s ease-out 1 both;
  animation-delay: 1.2s;
`;

const AnimatedLogo = styled(Logo)`
  animation: ${fadeInFromCorner} 1s ease-out 1 both;
  animation-delay: 0.2s;
`;

function Landing() {
  return (
    <>
      {/* <Header title="Home" icon="fa-map-marker-alt" /> */}
      <Fullscreen>
        <BackgroundImage src="https://cdn.pixabay.com/photo/2019/06/30/11/56/istanbul-4307896_1280.jpg" />
        <LogoContainer>
          <AnimatedLogo />
          <AnimatedTitle>Secret Spots</AnimatedTitle>
        </LogoContainer>
        <ScrollTo to="about">Scroll Down</ScrollTo>
      </Fullscreen>
      <Section>
        <Subtitle id="about">About Secret Spots</Subtitle>
        <Divider />
        <Content>
          <p>
            Impressum
            <br />
            Kontakt
            <br />
            About
            <br />
            <br />
            <br />
            <br />
          </p>
          <Divider />
        </Content>
      </Section>
    </>
  );
}
export default Landing;
