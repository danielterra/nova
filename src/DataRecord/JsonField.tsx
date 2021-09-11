import React from "react";
import styled from "styled-components";
import { TextFieldLabel, Code } from "BaseStyles";

export interface JsonFieldProps {
    label: string;
    content: string;
}

const FieldContainer = styled.div`

`;

export const JsonField = (props: JsonFieldProps) => {
    const {label, content} = props;

    return (
        <FieldContainer>
            <TextFieldLabel>{label}</TextFieldLabel>
            <Code>{JSON.stringify(content, null, 4)}</Code>
        </FieldContainer>
    )
}