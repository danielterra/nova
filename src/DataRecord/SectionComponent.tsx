import React from "react";
import styled from "styled-components";

import { 
    primaryColor2,
    TextSection
  } from "BaseStyles";

const Container = styled.div`
    margin: 0px 0px 30px 0px;
`;

const Header = styled.div`
  border-bottom: 1px solid ${primaryColor2};
`;

const Body = styled.div`
  
`;

export interface SectionProps {
    title: string;
    children?: any;
}

export const Section = (props: SectionProps) => {
    const {title} = props;

    return (
        <Container>
          <Header>
            <TextSection>{title}</TextSection>
          </Header>
          <Body>
            {props.children}
          </Body>
      </Container>
    )
}