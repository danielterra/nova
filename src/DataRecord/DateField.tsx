import styled from "styled-components";
import moment from "moment";
import 'moment/locale/pt-br';
import { TextFieldLabel, TextBody1 } from "BaseStyles";

moment.locale('pt-br');

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
                    <TextBody1>{moment(content).format("DD/MM/YYYY HH:mm")} ({moment(content).fromNow()})</TextBody1>
                </FieldContainer>
            )
        default:
            return (
                <FieldContainer>
                    <TextFieldLabel>{label}</TextFieldLabel>
                    <TextBody1>{moment(content).format("DD/MM/YYYY HH:mm")}</TextBody1>
                </FieldContainer>
            )
    }

}