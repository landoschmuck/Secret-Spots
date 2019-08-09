import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";

const StyledHeader = styled.div`
  background: teal;
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
  background: teal;
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
