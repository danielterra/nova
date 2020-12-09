import styled from "styled-components";

export const primaryColor = "rgb(0, 221, 255)";
export const primaryColor2 = "rgba(0, 221, 255, 0.2)";
export const secondaryColor = "rgb(255, 255, 255)";
export const secondaryColor2 = "rgba(255, 255, 255, 0.2)";
export const actionColor = "rgb(255, 98, 0)";
export const actionColor2 = "rgba(255, 98, 0, 0.2)";

export const TextHeadline1 = styled.h1`
    font-size: 32px;
    color: ${secondaryColor};
    font-weight: 500;
`;

export const TextSection = styled.h2`
    font-size: 12px;
    color: ${primaryColor};
    border-bottom: 1px solid;
    padding-bottom: 2px;
    font-weight: 700;
`;

export const TextFieldLabel = styled.label`
    color: ${primaryColor2};
    font-size: 10px;
    font-weight: 700;
`;

export const TextBody1 = styled.p`
    color: ${secondaryColor};
    font-size: 14px;
`;

export const TextBody2 = styled.label`
    color: ${secondaryColor2};
    font-size: 10px;
`;