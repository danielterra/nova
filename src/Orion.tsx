import React from "react";
import styled from "styled-components";

const OrionContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  >*{
    margin: 20px;
  }
`;

interface OrionProps {
  children: any   
}

export const Orion = (props:OrionProps) => {
  return (
    <OrionContainer>
      {props.children}
    </OrionContainer>
  )
}