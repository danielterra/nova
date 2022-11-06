import React from "react";
import styled from "styled-components";
import { TextFieldLabel } from "BaseStyles";

export interface ImageFieldProps {
    label: string;
    content: string;
    variant: string;
    size: number;
}

const FieldContainer = styled.div`

`;

const AvatarDisplay = styled.div<{src: string, size: number}>`
    display: block;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background: url(${props => props.src});
    background-size: cover;
    border-radius: ${props => props.size}px;
`;

const ImageDisplay = styled(AvatarDisplay)`
    border-radius: 0px;
`;

export const ImageField = (props: ImageFieldProps) => {
    const {label, content, variant, size} = props;

    switch(variant) {
        case "avatar":
            return (
                <FieldContainer>
                    <TextFieldLabel>{label}</TextFieldLabel>
                    <AvatarDisplay src={content} size={size} />
                </FieldContainer>
            )
        default:
            return (
                <FieldContainer>
                    <TextFieldLabel>{label}</TextFieldLabel>
                    <ImageDisplay src={content} size={size} />
                </FieldContainer>
            )
    }

}