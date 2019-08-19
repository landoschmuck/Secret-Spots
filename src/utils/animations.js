import { keyframes } from "styled-components";

export const fadeInFromCorner = keyframes`
from{
  opacity: 0;
  transform: translate3d(-35px, -40px, -150px) rotate3d(1, -1, 0, 35deg);
}
to{
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

export const fadeIn = keyframes`
  from{
    opacity: 0;
    transform: translate3d(0, -15px, 0);
  }

  
  to{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadePage = keyframes`
  from{
    opacity: 0;
    transform: translate3d(100px,0,0);
  }

  
  to{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
