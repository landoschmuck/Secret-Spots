import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";

const StyledHeader = styled.div`
  background: linear-gradient(
    90deg,
    rgba(9, 9, 9, 1) 0%,
    rgba(20, 20, 20, 1) 49%,
    rgba(34, 36, 34, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 1;
  border-bottom: solid 1px grey;
`;

const StyledLogo = styled.span`
  color: white;
  font-size: 20px;
  padding-right: 5px;
  margin-top: 4px;
  background: #abc8c0;
`;

const StyledHeadline = styled(Headline)`
  color: white;
`;

function Header({ title, icon, ...props }) {
  return (
    <StyledHeader {...props}>
      <StyledLogo>
        <i className={`fas ${icon}`} />
      </StyledLogo>
      <StyledHeadline size="L">{title} </StyledHeadline>
    </StyledHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
