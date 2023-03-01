import styled, { keyframes } from "styled-components";

const move = keyframes`
  from{
    opacity: 0;
    transform: translate3d(-35px, -40px, -150px); 
  }
  30% {
    opacity: 1;
  }
  to{
    transform: translate3d(0, 0, 0);
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  height: calc(90% + 150px);
  width: calc(100% + 150px);
  object-fit: cover;
  filter: grayscale(0.2) brightness(0.8) saturate(0.7);
  animation: ${move} 8s ease-out 1 both;
`;

export default BackgroundImage;
