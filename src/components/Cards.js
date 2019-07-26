import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCard = styled.div`
  background: #637081;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5%;
  overflow: auto;
  height: 500px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  border: solid 1px black;
  margin-top: 5px;
  height: 150px;
`;

const Text = styled.p``;
const Tags = styled.div``;
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  border: solid 1px black;
  margin-top: 5px;
  border-radius: 5%;
`;

const TagContainer = styled.div`
  display: flex;
  margin: 0px;
  border: black solid 1px;
  height: 35px;
  width: 100%;
  padding: 2.1px;
  font-size: 24px;
`;

function Cards() {
  return (
    <CardContainer>
      <StyledCard>
        <ImgContainer>
          <Img src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg" />
        </ImgContainer>
        <Headline size="S">Meine erster Spot</Headline>
        <Text> Lorem imspum tralalala</Text>
        <TagContainer>Wasser, Sonne, Schatten</TagContainer>
        <MapContainer>
          <Img src="https://cdn.pixabay.com/photo/2019/07/19/09/54/map-4348394_1280.png" />
        </MapContainer>
      </StyledCard>
      <StyledCard>
        <ImgContainer>
          <Img src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg" />
        </ImgContainer>
        <Headline size="S">Meine erster Spot</Headline>
        <Text> Lorem imspum tralalala</Text>
        <TagContainer>Wasser, Sonne, Schatten</TagContainer>
        <MapContainer>
          <Img src="https://cdn.pixabay.com/photo/2019/07/19/09/54/map-4348394_1280.png" />
        </MapContainer>
      </StyledCard>
      <StyledCard>
        <ImgContainer>
          <Img src="https://cdn.pixabay.com/photo/2019/07/19/19/52/mountains-4349525_1280.jpg" />
        </ImgContainer>
        <Headline size="S">Meine erster Spot</Headline>
        <Text> Lorem imspum tralalala</Text>
        <TagContainer>Wasser, Sonne, Schatten</TagContainer>
        <MapContainer>
          <Img src="https://cdn.pixabay.com/photo/2019/07/19/09/54/map-4348394_1280.png" />
        </MapContainer>
      </StyledCard>
    </CardContainer>
  );
}

export default Cards;
