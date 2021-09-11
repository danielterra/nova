import React from "react";
import styled from "styled-components";
import { TextFieldLabel, TextBody1, actionColor } from "BaseStyles";
import { Googlemaps } from "@styled-icons/simple-icons/Googlemaps";

export interface AddressFieldProps {
    label: string;
    content: string;
}

const FieldContainer = styled.div`

`;

const OpenMapAction = styled(Googlemaps) `
    color: ${actionColor};
    cursor: pointer;
    margin-left: 10px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const AddressField = (props: AddressFieldProps) => {
    const {label, content} = props;

    const openInGoogleMaps = () => {
        window.open(`https://www.google.com/maps/place/${encodeURIComponent(content)}`, '_blank');
    }

    return (
        <FieldContainer>
            <TextFieldLabel>{label}</TextFieldLabel>
            <Row>
                <TextBody1>{content}</TextBody1>
                <OpenMapAction onClick={openInGoogleMaps} size={20} />
            </Row>
        </FieldContainer>
    )
}