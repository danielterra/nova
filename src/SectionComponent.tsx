import React from "react";
import styled from "styled-components";
import { LabeledTextProps } from "TextComponent";
import { 
    primaryColor,
    TextSection
  } from "BaseStyles";

const Container = styled.div`
  margin: 10px 0px;
`;

const Header = styled.div`
  border-bottom: 1px solid ${primaryColor};
`;

const Body = styled.div`
  border-bottom: 1px solid ${primaryColor};
`;

export interface SectionProps {
    title: string;
    children?: any;
    fields?: LabeledTextProps[];
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