import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";

const RightIconContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 4px;
`;

const StyledHeader = styled.div`
  background: linear-gradient(
    90deg,
    rgba(3, 86, 135, 1) 0%,
    rgba(7, 118, 184, 1) 49%,
    rgba(7, 150, 235, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  top: 0;
  width: 100vw;
  z-index: 0;
  border-bottom: solid 1px grey;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 55px;
`;

const StyledLogo = styled.span`
  color: white;
  font-size: 20px;
  padding-right: 5px;
  margin-top: 7px;
  background: transparent;
`;

const StyledHeadline = styled(Headline)`
  color: white;
`;

function Header({ title, icon, children, ...props }) {
  return (
    <StyledHeader {...props}>
      <StyledLogo>
        <i className={`fas ${icon}`} />
      </StyledLogo>
      <StyledHeadline data-cy="header-title" size="L">
        {title}{" "}
      </StyledHeadline>
      {children && <RightIconContainer>{children}</RightIconContainer>}
    </StyledHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  icon: PropTypes.string.isRequired
};

export default Header;
