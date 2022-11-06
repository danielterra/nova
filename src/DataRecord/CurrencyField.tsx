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

    if (!content || !variant || variant.length < 3) {
        return (
            <FieldContainer>
                <TextFieldLabel>Erro</TextFieldLabel>
                <TextBody1>O valor ou variante informada não são válidos</TextBody1>
            </FieldContainer>
        )
    }

    return (
        <FieldContainer>
            <TextFieldLabel>{label}</TextFieldLabel>
            <TextBody1>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: variant}).format(parseFloat(content))}</TextBody1>
        </FieldContainer>
    )
}