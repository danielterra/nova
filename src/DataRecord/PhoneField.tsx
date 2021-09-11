import React from "react";
import styled from "styled-components";
import { TextFieldLabel, TextBody1, actionColor } from "BaseStyles";
import { PhoneOutgoing } from "@styled-icons/boxicons-regular/PhoneOutgoing";
import { Copy } from '@styled-icons/boxicons-regular/Copy';
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';

export interface PhoneFieldProps {
    label: string;
    content: string;
    variant?: string;
}

const FieldContainer = styled.div`

`;

const CallAction = styled(PhoneOutgoing) `
    color: ${actionColor};
    cursor: pointer;
    margin-left: 10px;
`;

const CopyAction = styled(Copy) `
    color: ${actionColor};
    cursor: pointer;
    margin-left: 10px;
`;

const WhatsappAction = styled(Whatsapp) `
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

export const PhoneField = (props: PhoneFieldProps) => {
    const {label, content, variant} = props;

    const callPhone = () => {
        window.open(`tel:${content}`);
    }

    const sendWhatsappMessage = () => {
        window.open(`https://api.whatsapp.com/send?phone=${content}`);
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
        alert('Phone number copied');
    }

    switch (variant) {
        case 'whatsapp':
            return (
                <FieldContainer>
                    <TextFieldLabel>{label}</TextFieldLabel>
                    <Row>
                        <TextBody1>{content}</TextBody1>
                        <Actions>
                            <CopyAction onClick={copyToClipboard} size={20} />
                            <WhatsappAction onClick={sendWhatsappMessage} size={20} />
                        </Actions>
                    </Row>
                </FieldContainer>
            )
        default:
            return (
                <FieldContainer>
                    <TextFieldLabel>{label}</TextFieldLabel>
                    <Row>
                        <TextBody1>{content}</TextBody1>
                        <Actions>
                            <CopyAction onClick={copyToClipboard} size={20} />
                            <CallAction onClick={callPhone} size={20} />
                        </Actions>
                    </Row>
                </FieldContainer>
            )
    }

}