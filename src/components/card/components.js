import styled from "styled-components";
import ActionButton from "../ActionButton";

export const Bookmark = styled(ActionButton)`
  position: absolute;
  right: 9px;
  top: 6px;
  background: white;
  transition: all 0.4s ease;
  color: ${props => (props.active ? "gold" : "grey")};
`;

export const StyledTags = styled.span`
  /* border: 3px solid grey; */
  display: flex;
  padding: 0px 10px;
  border-radius: 15px;
  background: #0776b8;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  height: 23px;
  margin-bottom: 15px;
`;

export const StyledCard = styled.div`
  /* background-image: url("https://cdn.pixabay.com/photo/2017/01/29/13/11/scrapbook-2017957_1280.jpg"); */
  padding: 25px;
  border: 0.5px solid whitesmoke;
  border-radius: 15px;
  overflow: auto;
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
