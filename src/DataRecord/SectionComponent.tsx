import React, { useState } from "react";
import styled from "styled-components";

import {
  primaryColor2,
  TextSection,
  actionColor,
  TextFieldLabel
} from "BaseStyles";

const Container = styled.div`
    margin: 0px 0px 30px 0px;
`;

const Header = styled.div`
  border-bottom: 1px solid ${primaryColor2};
`;

const Body = styled.div<{ hidden?: boolean }>`
  height: ${(props) => props.hidden ? "0px" : "auto"};
  overflow: hidden;
`;

const TestButton = styled(TextFieldLabel)`
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
  expanded?: boolean;
}

export const Section = (props: SectionProps) => {
  const { title, expanded } = props;
  const [isHidden, setIsHidden] = useState<boolean>(title !== undefined);

  return (
    <Container>
      <Header>
        {title && 
          <CustomTextSection>
            {title}
            <TestButton onClick={() => setIsHidden(!isHidden)}>{isHidden ? 'expand' : 'minimize'}</TestButton>
          </CustomTextSection>
        }
      </Header>
      <Body hidden={isHidden}>
        {props.children}
      </Body>
    </Container>
  )
}