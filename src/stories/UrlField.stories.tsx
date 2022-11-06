import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UrlField } from 'DataRecord/UrlField';
import 'Nova.css';

export default {
    title: 'Campo de URL',
    component: UrlField
} as ComponentMeta<typeof UrlField>;

const Template: ComponentStory<typeof UrlField> = (args) => <UrlField {...args} />

export const Padrao = Template.bind({});

Padrao.args = {
    label: 'Perfil no Linkedin',
    content: 'https://www.linkedin.com/in/danielterra/'
}