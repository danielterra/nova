import styled from "styled-components";

export const primaryColor = "rgb(0, 221, 255)";
export const primaryColor2 = "rgba(0, 221, 255, 0.6)";
export const secondaryColor = "rgb(255, 255, 255)";
export const secondaryColor2 = "rgba(255, 255, 255, 0.2)";
export const actionColor = "rgb(255, 98, 0)";
export const actionColor2 = "rgba(255, 98, 0, 0.2)";

export const TextHeadline1 = styled.h1`
    color: ${secondaryColor};
    font-size: 24px;
    font-weight: 500;
    text-shadow: 2px 2px black;
`;

export const TextSection = styled.h2`
    font-size: 14px;
    color: ${primaryColor2};
    border-bottom: 1px solid;
    padding-bottom: 2px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const TextFieldLabel = styled.label`
    color: ${primaryColor2};
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const TextBody1 = styled.p`
    color: ${secondaryColor};
    font-size: 14px;
    font-weight: 500;
    white-space: pre-line;
`;

export const TextBody2 = styled.label`
    color: ${secondaryColor2};
    font-size: 10px;
`;

export const Code = styled.pre`
    font-family: monospace;
    color: ${secondaryColor};
    font-size: 10px;
`;

export const OrionColumn = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
    >*{
        flex-shrink: 0;
        margin-bottom: 20px;
    }
`;