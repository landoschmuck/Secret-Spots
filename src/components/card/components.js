import styled from "styled-components";
import ActionButton from "../ActionButton";

export const TagList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0;
`;

export const DeletButton = styled(ActionButton)`
  position: absolute;
  left: -5px;
  top: -4px;
  background: transparent;
  transition: all 0.4s ease;
  color: grey;
  outline: none;
`;

export const Bookmark = styled(ActionButton)`
  position: absolute;
  right: -5px;
  top: -4px;
  background: transparent;
  transition: all 0.4s ease;
  color: ${props => (props.active ? "gold" : "grey")};
  outline: none;
`;

export const StyledCard = styled.div`
  padding: 25px;
  border: 0.5px solid whitesmoke;
  border-radius: 15px;
  min-width: 350px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: black;
  background: white;
  box-shadow: 1px 4px 10px 4px rgba(214, 211, 214, 1);

  @media (min-width: 500px) {
    width: 350px;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  /* border: solid 1px black; */
  margin-top: 5px;
  height: 300px;
  max-height: 130px;
`;

export const Text = styled.p`
  font-size: 16px;
`;
export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  min-height: 150px;
  /* border: solid 1px black; */
  margin-top: 5px;
  max-height: 200px;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 2px 8px 8px -3px rgba(214, 211, 214, 1);
`;

export const TagContainer = styled.div`
  display: flex;
  margin: 0px;
  height: 35px;
  width: 100%;
  padding: 2.1px;
  font-size: 24px;
`;
