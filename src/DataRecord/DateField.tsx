import React from "react";
import styled from "styled-components";
import moment from "moment";
import { TextFieldLabel, TextBody1 } from "BaseStyles";

export interface DateFieldProps {
    label: string;
    content: string;
    variant: string;
}

const FieldContainer = styled.div`

`;

export const DateField = (props: DateFieldProps) => {
    const {label, content, variant} = props;

    switch(variant) {
        case "age":
            return (
                <FieldContainer>
                    <TextFieldLabel>{label}</TextFieldLabel>
                    <TextBody1>{moment(content).fromNow(true)}</TextBody1>
                </FieldContainer>
            )
        case "countdown":
            return (
                <FieldContainer>
                    <TextFieldLabel>{label}</TextFieldLabel>
                    <TextBody1>{moment(content).format("dddd, MMMM Do YYYY HH:mm")} ({moment(content).fromNow()})</TextBody1>
                </FieldContainer>
            )
        default:
            return (
                <FieldContainer>
                    <TextFieldLabel>{label}</TextFieldLabel>
                    <TextBody1>{moment(content).format("dddd, MMMM Do YYYY HH:mm")}</TextBody1>
                </FieldContainer>
            )
    }

}