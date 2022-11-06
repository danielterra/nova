import { useState } from "react";
import styled, {keyframes} from "styled-components";

import {
  TextSection,
  actionColor,
  TextFieldLabel
} from "BaseStyles";

const openUp = keyframes`
from {
    max-height: 0px;
}
to {
    max-height: 100%;
}
`;

const closeDown = keyframes`
from {
    max-height: 100%;
}
to {
    max-height: 0px;
}
`;

const Container = styled.div`
    margin: 20px 0px 0px 0px;
`;

const Header = styled.div`
    margin: 0 0 10px 0;
`;

const Body = styled.div<{ shouldHide: boolean }>`
  max-height: ${ props => props.shouldHide ? "0px" : "100%"};
  overflow: hidden;
  animation: ${ props => props.shouldHide ? closeDown : openUp} 2s;
`;

const FoldButton = styled(TextFieldLabel)`
  color: ${actionColor};
  cursor: pointer;
`;

const CustomTextSection = styled(TextSection)`
  display: flex;
  justify-content: space-between;
`;

export interface SectionProps {
  title: string;
  children?: any;
}

export const Section = (props: SectionProps) => {
  const { title } = props;
  const [isHidden, setIsHidden] = useState<boolean>(title !== undefined);

  const toggle = () => {
    setIsHidden(!isHidden);
  }

  return (
    <Container>
      <Header>
        {title && 
          <CustomTextSection>
            {title}
            <FoldButton onClick={toggle}>{isHidden ? 'expand' : 'minimize'}</FoldButton>
          </CustomTextSection>
        }
      </Header>
      <Body shouldHide={isHidden}>
        {props.children}
      </Body>
    </Container>
  )
}