import React from "react";
import styled from "styled-components";
import { TextFieldLabel, TextBody1, actionColor } from "BaseStyles";
import { Email } from "@styled-icons/material-rounded/Email";
import { Copy } from '@styled-icons/boxicons-regular/Copy';

export interface EmailFieldProps {
    label: string;
    content: string;
}

const FieldContainer = styled.div`

`;

const SendEmailAction = styled(Email) `
    color: ${actionColor};
    cursor: pointer;
    margin-left: 10px;
`;

const CopyAction = styled(Copy) `
    color: ${actionColor};
    cursor: pointer;
    margin-left: 10px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Actions = styled.div``;

export const EmailField = (props: EmailFieldProps) => {
    const {label, content} = props;

    const sendEmail = () => {
        window.open(`mailto:${content}`);
    }

    const copyToClipboard = () => {
        if (!navigator.clipboard) {
            // Clipboard API not available
            return;
        }
        try {
            navigator.clipboard.writeText(content);
        } catch (err) {
            console.error('Failed to copy!', err)
        }
        // alert('Email copied');
    }

    return (
        <FieldContainer>
            <TextFieldLabel>{label}</TextFieldLabel>
            <Row>
                <TextBody1>{content}</TextBody1>
                <Actions>
                    <CopyAction onClick={copyToClipboard} size={20} />
                    <SendEmailAction onClick={sendEmail} size={20} />
                </Actions>
            </Row>
        </FieldContainer>
    )
}