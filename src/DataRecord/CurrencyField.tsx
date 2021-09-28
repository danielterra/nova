import React from "react";
import styled from "styled-components";
import { TextFieldLabel, TextBody1 } from "BaseStyles";

export interface CurrencyFieldProps {
    label: string;
    content: string;
    variant: string;
}

const FieldContainer = styled.div``;

export const CurrencyField = (props: CurrencyFieldProps) => {
    const {label, content, variant} = props;

    return (
        <FieldContainer>
            <TextFieldLabel>{label}</TextFieldLabel>
            <TextBody1>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: variant}).format(parseFloat(content))}</TextBody1>
        </FieldContainer>
    )
}