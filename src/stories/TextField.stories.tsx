import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from 'DataRecord/TextField';
import 'Nova.css';

export default {
    title: 'Campo de texto',
    component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const TextoCurto = Template.bind({});

TextoCurto.args = {
    label: 'Nome',
    content: 'Steve Jobs'
}

export const TextoLongo = Template.bind({});

TextoLongo.args = {
    label: 'Biografia',
    content: 'Steven Paul Jobs (São Francisco, 24 de fevereiro de 1955 — Palo Alto, 5 de outubro de 2011)[2] foi um inventor, empresário e magnata americano no setor da informática. Notabilizou-se como co-fundador, presidente e diretor executivo da Apple Inc.[6] e por revolucionar seis indústrias: computadores pessoais, filmes de animação, música, telefones, tablets e publicações digitais.[7] Além de sua ligação com a Apple, foi diretor executivo da empresa de animação por computação gráfica Pixar e acionista individual máximo da The Walt Disney Company.[8] Morreu no dia 5 de outubro de 2011, aos 56 anos de idade, devido a um câncer pancreático.[2]'
}