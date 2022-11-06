import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReferenceField } from 'DataRecord/ReferenceField';
import 'Nova.css';

export default {
    title: 'Campo de referência',
    component: ReferenceField
} as ComponentMeta<typeof ReferenceField>;

const Template: ComponentStory<typeof ReferenceField> = (args) => <ReferenceField {...args} />

export const Padrao = Template.bind({});
Padrao.args = {
    label: 'Extrato',
    entity: 'Transação',
    data: [
        {
            value: 100,
            date: "2022-10-24 22:00:00"
        },
        {
            value: 37,
            date: "2022-10-24 22:10:00"
        }
    ],
    schema: {
        value: {
            type: "currency",
            variant: "BRL",
            label: "Valor"
        },
        date: {
            type: "date",
            label: "Data"
        }
    }
}