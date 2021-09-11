import React from "react";
import styled from "styled-components";
import { TextBody1, actionColor, actionColor2 } from "BaseStyles";

export interface ReferenceFieldProps {
    label: string;
    data: any;
    schema: any;
}

const FieldContainer = styled.div`
    padding: 5px 10px;
    border: 1px solid ${actionColor};
    background-color: ${actionColor2};
    margin: 5px 0;
    cursor: pointer;
`;

export const ReferenceField = (props: ReferenceFieldProps) => {
    const {label, data, schema} = props;
    let childWindow;

    const handleMessageRecieved = (evt: MessageEvent) => {
        console.log(`ReferenceField =>`,evt);

        if (!evt) {
            return;
        }

        if (!evt.data || !evt.data.event) {
            // Ignore
            return;
        }

        const {event, id} = evt.data;

        if (id !== label) {
            console.log("not the right id, ignoring...", id);
            return;
        }

        if (event === 'WAITING_DATA') {
            if (!(evt.source instanceof MessagePort) && !(evt.source instanceof ServiceWorker)) {
                evt.source?.postMessage({
                    action: "SHOW_RECORD",
                    payload: data,
                    schema
                },evt.origin);
                console.log("SHOW_RECORD SENT.");
            }
        }
    }

    const open = () => {
        childWindow = window.open(`./?id=${encodeURIComponent(label)}`);
        childWindow?.addEventListener("message", handleMessageRecieved, false);
    }

    return (
        <FieldContainer onClick={open}>
            <TextBody1>{label}</TextBody1>
        </FieldContainer>
    )
}
