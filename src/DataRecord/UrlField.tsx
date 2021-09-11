import React from "react";
import styled from "styled-components";
import { TextFieldLabel, TextBody1, actionColor } from "BaseStyles";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";

export interface UrlFieldProps {
    label: string;
    content: string;
}

const FieldContainer = styled.div`

`;

const OpenLinkAction = styled(LinkExternal) `
    color: ${actionColor};
    cursor: pointer;
    margin-left: 10px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const UrlField = (props: UrlFieldProps) => {
    const {label, content} = props;

    const openUrl = () => {
        window.open(content);
    }

    return (
        <FieldContainer>
            <TextFieldLabel>{label}</TextFieldLabel>
            <Row>
                <TextBody1>{content}</TextBody1>
                <OpenLinkAction onClick={openUrl} size={20} />
            </Row>
        </FieldContainer>
    )
}