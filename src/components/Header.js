import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";

const StyledHeader = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 1;
  border-bottom: solid 1px white;
`;

const StyledHeadline = styled(Headline)`
  color: white;
`;

function Header({ title, ...props }) {
  return (
    <StyledHeader {...props}>
      <StyledHeadline size="L">{title}</StyledHeadline>
    </StyledHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
