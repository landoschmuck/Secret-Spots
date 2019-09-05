import styled from "styled-components";
import ActionButton from "../../components/ActionButton";
import { keyframes } from "styled-components";

export const SearchBox = styled.div`
  height: 40px;
  width: 100%;
  grid-column: 2 / 3;
  align-self: flex-end;
  margin-bottom: 15px;
  margin-top: ${props => props.marginTop};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  transition: all 0.1s;
`;

const searchSlide = keyframes`
  from {
    width: 0;
    opacity: 0;
    }
  to {
    width: -30%;
    opacity: 1;
    }
`;

export const SearchInput = styled.input`
  position: absolute;
  right: 168px;
  top: 8px;
  z-index: 2;
  width: -40%;
  height: 30px;
  padding: 10px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  font-size: 14px;
  background-color: lightgray;
  animation: ${searchSlide} 0.5s ease;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const SearchButton = styled(ActionButton).attrs({
  icon: "fa-search"
})`
  top: 0;
  right: 330px;
  z-index: 1;
  width: 40px;
  height: 40px;
  margin-top: 4px;
  position: absolute;
  color: white;
  outline: none;

  @media(min-width: 500px){
    right: 1870px;
  }
`;

export const CardContainer = styled.div`
  overflow: auto;
  margin: 0 auto;
`;

export const BookmarkButton = styled(ActionButton).attrs({ icon: "fa-star" })`
  top: 0;
  right: 7px;
  z-index: 1;
  width: 40px;
  height: 40px;
  margin-top: 4px;
  position: absolute;
`;
