import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  color: ${props => (props.active ? "goldenrod" : "white")};
  background: black;
  font-size: 10px;
  cursor: pointer;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

function NavButton({ icon, active, onClick, ...props }) {
  return (
    <StyledButton active={active} onClick={onClick} {...props}>
      <i className={`fas ${icon}`} />
    </StyledButton>
  );
}

ActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

ActionButton.defaultProps = {
  active: false
};

export default NavButton;
