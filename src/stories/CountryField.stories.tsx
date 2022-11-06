import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CountryField } from 'DataRecord/CountryField';
import 'Nova.css';

export default {
    title: 'Campo de País',
    component: CountryField
} as ComponentMeta<typeof CountryField>;

const Template: ComponentStory<typeof CountryField> = (args) => <CountryField {...args} />

export const Padrao = Template.bind({});

Padrao.args = {
    label: 'País de nascimento',
    content: 'BR'
}