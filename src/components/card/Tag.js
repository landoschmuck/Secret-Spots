import React from "react";
import styled from "styled-components";

const StyledTag = styled.span`
  background: #0776b8;
  color: white;
  border-radius: 15px;
  padding: 5px;
  margin-right: 5px;
  font-size: 12px;
  margin: 2px;
`;

function Tag(props) {
  return <StyledTag {...props} />;
}

export default Tag;
