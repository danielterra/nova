import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Section } from 'DataRecord/SectionComponent';
import { DataRecord } from 'DataRecord';
import 'Nova.css';

const data = {
    name: "Steve Jobs",
    birthday: "1955-02-24",
    avatar: "https://investidorsardinha.r7.com/wp-content/uploads/2020/09/steve-jobs-vida-e-carreira-do-empresario-a-frente-da-apple-1024x576.jpg.webp"
}

const schema = {
    avatar: {
        type: "image",
        variant: "avatar",
        size: 100
    },
    name: {
        type: "text",
        label: "nome"
    },
    birthday: {
        type: "date",
        variant: "countdown",
        label: "Nascimento"
    }
}

export default {
    title: 'Seção de dados',
    component: Section
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
    <Section {...args}>
        <DataRecord entity="cadastro" data={data} schema={schema} />
    </Section>
);

export const Padrao = Template.bind({});
Padrao.args = {
    title: "Sobre Steve Jobs"
}