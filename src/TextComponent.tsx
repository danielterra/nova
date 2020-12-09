import React from "react";
import styled from "styled-components";
import { TextFieldLabel, TextBody1 } from "BaseStyles";

export interface LabeledTextProps {
    label: string;
    content: string;
}

const FieldContainer = styled.div`

`;

export const LabeledText = (props: LabeledTextProps) => {
    const {label, content} = props;

    return (
        <FieldContainer>
            <TextFieldLabel>{label}</TextFieldLabel>
            <TextBody1>{content}</TextBody1>
        </FieldContainer>
    )
}