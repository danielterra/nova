import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JsonField } from 'DataRecord/JsonField';
import 'Nova.css';

export default {
    title: 'Campo JSON',
    component: JsonField
} as ComponentMeta<typeof JsonField>;

const Template: ComponentStory<typeof JsonField> = (args) => <JsonField {...args} />

export const Padrao = Template.bind({});
Padrao.args = {
    label: 'Objeto JSON',
    content: {
        any:"json",
        with: {
            any: "nested parameters"
        }
    }
}