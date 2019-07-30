import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  color: ${props => (props.active ? "#98c2e0" : "white")};
  background: black;
  font-size: 20px;
  cursor: pointer;
`;

function ActionButton({ icon, active, onClick, ...props }) {
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

export default ActionButton;
