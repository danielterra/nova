import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageField } from 'DataRecord/ImageField';
import 'Nova.css';

export default {
    title: 'Campo de Imagem',
    component: ImageField
} as ComponentMeta<typeof ImageField>;

const Template: ComponentStory<typeof ImageField> = (args) => <ImageField {...args} />

export const Padrao = Template.bind({});
Padrao.args = {
    label: 'Steve Jobs',
    content: 'https://investidorsardinha.r7.com/wp-content/uploads/2020/09/steve-jobs-vida-e-carreira-do-empresario-a-frente-da-apple-1024x576.jpg.webp',
    size: 300
}

export const Avatar = Template.bind({});
Avatar.args = {
    label: 'Steve Jobs',
    content: 'https://investidorsardinha.r7.com/wp-content/uploads/2020/09/steve-jobs-vida-e-carreira-do-empresario-a-frente-da-apple-1024x576.jpg.webp',
    size: 300,
    variant: 'avatar'
}