import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateField } from 'DataRecord/DateField';
import 'Nova.css';

export default {
    title: 'Campo de Data',
    component: DateField
} as ComponentMeta<typeof DateField>;

const Template: ComponentStory<typeof DateField> = (args) => <DateField {...args} />

export const Idade = Template.bind({});

Idade.args = {
    label: 'Idade',
    content: '1988-10-24',
    variant: 'age'
}

export const ContagemRegressiva = Template.bind({});
ContagemRegressiva.args = {
    label: 'Contagem regressiva',
    content: '2100-01-01',
    variant: 'countdown'
}

export const Contagem = Template.bind({});
Contagem.args = {
    label: 'Contagem',
    content: '1988-01-01',
    variant: 'countdown'
}

export const Padrao = Template.bind({});
Padrao.args = {
    label: 'Data',
    content: '1988-01-01'
}