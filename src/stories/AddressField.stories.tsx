import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddressField } from 'DataRecord/AddressField';
import 'Nova.css';

export default {
    title: 'Campo de endereço',
    component: AddressField
} as ComponentMeta<typeof AddressField>;

const Template: ComponentStory<typeof AddressField> = (args) => <AddressField {...args} />

export const Padrao = Template.bind({});

Padrao.args = {
    label: 'Endereço da sua casa',
    content: 'Rua Lagoa Panema, 145 - Vila Guilherme, São Paulo, SP'
}