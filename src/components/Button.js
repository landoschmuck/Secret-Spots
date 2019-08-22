import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #0776b8;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
`;

export const Button = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);

export default Button;
