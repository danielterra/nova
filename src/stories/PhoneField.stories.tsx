import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PhoneField } from 'DataRecord/PhoneField';
import 'Nova.css';

export default {
    title: 'Campo Telefone',
    component: PhoneField
} as ComponentMeta<typeof PhoneField>;

const Template: ComponentStory<typeof PhoneField> = (args) => <PhoneField {...args} />

export const Padrao = Template.bind({});
Padrao.args = {
    label: 'Objeto JSON',
    content: '+5511963900771'
}

export const Whatsapp = Template.bind({});
Whatsapp.args = {
    label: 'Objeto JSON',
    content: '+5511963900771',
    variant: 'whatsapp'
}