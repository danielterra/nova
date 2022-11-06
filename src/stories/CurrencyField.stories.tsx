import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CurrencyField } from 'DataRecord/CurrencyField';
import 'Nova.css';

export default {
    title: 'Campo de valor monetário',
    component: CurrencyField
} as ComponentMeta<typeof CurrencyField>;

const Template: ComponentStory<typeof CurrencyField> = (args) => <CurrencyField {...args} />

export const Padrao = Template.bind({});

Padrao.args = {
    label: 'Preço',
    content: '1000.99'
}