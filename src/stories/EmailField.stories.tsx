import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmailField } from 'DataRecord/EmailField';
import 'Nova.css';

export default {
    title: 'Campo de Email',
    component: EmailField
} as ComponentMeta<typeof EmailField>;

const Template: ComponentStory<typeof EmailField> = (args) => <EmailField {...args} />

export const Padrao = Template.bind({});
Padrao.args = {
    label: 'Seu melhor e-mail',
    content: 'contato@novaassistente.com.br'
}