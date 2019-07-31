import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const move = keyframes`
  from{
    transform: rotate(-90deg) translateX(10px);
  }
  
  50%{
    transform: rotate(-90deg) translateX(0);
  }

  to{
    transform: rotate(-90deg) translateX(10px);
  }
`;

const Link = styled.a`
  position: absolute;
  bottom: 100px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  animation: ${move} 6s ease infinite;
`;

function ScrollTo({ children, to }) {
  return <Link href={`#${to}`}>{children}</Link>;
}

ScrollTo.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default ScrollTo;
