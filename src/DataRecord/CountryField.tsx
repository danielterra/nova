import styled from "styled-components";
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { TextFieldLabel, TextBody1 } from "BaseStyles";
import { getName } from'country-list';

export interface CountryFieldProps {
    label: string;
    content: string;
}

const FieldContainer = styled.div`

`;

export const CountryField = (props: CountryFieldProps) => {
    const {label, content} = props;

    if (!content || content.length < 2 || content.length > 2) {
        return (
            <FieldContainer>
                <TextFieldLabel>{label}</TextFieldLabel>
                <TextBody1>O Código de País informado é inválido.</TextBody1>
            </FieldContainer>
        )
    }

    return (
        <FieldContainer>
            <TextFieldLabel>{label}</TextFieldLabel>
            <TextBody1>{getUnicodeFlagIcon(content)} {getName(content)}</TextBody1>
        </FieldContainer>
    )
}