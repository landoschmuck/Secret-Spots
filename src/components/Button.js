import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const scales = {
  S: `
    padding: 5px 10px;
    font-size: 14px;
  `,
  M: `
    padding: 10px 20px;
    font-size: 16px;
  `,
  L: `
    padding: 20px 30px;
    font-size: 18px;
  `
};

const kind = outline => (bg, color) => {
  const borderColor = outline ? bg : "transparent";
  const backgroundColor = outline ? "transparent" : bg;

  return `
    background: ${backgroundColor};
    border: 1px solid ${borderColor};
    color: ${outline ? bg : color};
    transition: all .3s;

    &:hover {
      color: ${color};
      background: ${outline ? borderColor : backgroundColor};
    }
  `;
};

const kinds = outline => {
  const get = kind(outline);

  return {
    primary: get("#ABC8C0", "white"),
    secondary: get("#5352ED", "white"),
    cancel: get("#FF4949", "white")
  };
};

const getScale = ({ scale = "M" }) => scales[scale];
const getKind = ({ kind = "primary", outline = false }) => kinds(outline)[kind];

const ButtonStyled = styled.button`
  ${getKind};
  ${getScale};
  cursor: pointer;
  border-radius: 3px;
  margin: 10px;
`;

export const Button = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);

Button.propTypes = {
  scales: PropTypes.oneOf(["S", "M", "L"]),
  kind: PropTypes.oneOf(["primary", "secondary", "cancel"]),
  outline: PropTypes.bool
};

Button.defaultProps = {
  scales: "M",
  kind: "primary",
  outline: false
};

export default Button;
