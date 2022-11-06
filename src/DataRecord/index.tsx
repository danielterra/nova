// DATA RECORD
// Exibe um conjunto de informações em formato JSON
// entity: Legenda que diz o tipo de informação contida
// schema: Objeto JSON informado o schema a ser utilizado para exibir o objeto json
// data: Objeto json a ser exibido
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  TextHeadline1,
  TextSection
} from 'BaseStyles';
import { Section } from './SectionComponent';
import { TextField } from './TextField';
import { CountryField } from './CountryField';
import { AddressField } from './AddressField';
import { DateField } from './DateField';
import { ImageField }  from './ImageField';
import { JsonField } from './JsonField';
import { UrlField } from './UrlField';
import { EmailField } from './EmailField';
import { PhoneField } from './PhoneField';
import { CurrencyField } from './CurrencyField';
import { ReferenceField } from './ReferenceField';

const openUp = keyframes`
from {
    max-height: 0px;
    padding: 0px 20px;
}
to {
    max-height: 50%;
    padding: 20px 20px;
}
`;

const Container = styled.div`
    padding: 20px;
    max-height: 100%;
    max-width: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    background: #00ffe70f;
    border: 1px solid #00ffe714;
    animation: ${openUp} 2s ease-out;
    transition: max-height 2s;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const EntityLabel = styled(TextSection)`
    border-bottom: none;
    margin-bottom: 20px;
`;

const Title = styled(TextHeadline1)`
    margin-top: 0px;
`;

export interface DRField {
    label: string;
    content: string;
}

export interface DRSection {
    title: string;
    fields: DRField[];
}

export interface DataRecordModel {
    title: string;
    sections: DRSection[];
}

export interface DRMessage {
    action: string;
    payload: any;
}

interface DataRecordProps {
    data: any,
    schema: any,
    entity: string
}

export const DataRecord = (props:DataRecordProps) => {
    const {data, schema, entity} = props;
    const [sections, setSections] = useState<string[]>([])

    useEffect(() => {
        if (data && schema) {
            let sections: string[] = [];
            for (let key in schema) {
                if (sections.indexOf(schema[key].section) === -1) {
                    sections.push(schema[key].section);
                }
            };

            setSections(sections);
        }
    },[data, schema]);

    const getTitle = () => {
        for (let key in schema) {
            if (schema[key].isTitle) {
                return data[key];
            }
        }
    }

    const getDataKeysForSection = (section:string) => {
        const fieldsKeys = [];
        for (let key in schema) {
            if (schema[key].section === section) {
                fieldsKeys.push(key);
            }
        }

        return fieldsKeys;
    }

    return (
        <Container>
            <EntityLabel>{entity}</EntityLabel>
            <Title>{getTitle()}</Title>
            { sections.map((section, index) =>
                <Section key={index} title={section}>
                    {getDataKeysForSection(section).map(key => {
                        if (!data[key] || schema[key].isTitle) {
                            return null;
                        }

                        switch(schema[key].type) {
                            case 'short-text':
                                return <TextField key={key} label={schema[key].label} content={data[key]}/>
                            case 'long-text':
                                return <TextField key={key} label={schema[key].label} content={data[key]}/>
                            case 'date':
                                return <DateField key={key} label={schema[key].label} content={data[key]} variant={schema[key].variant}/>
                            case 'country':
                                return <CountryField key={key} label={schema[key].label} content={data[key]}/>
                            case 'address':
                                return <AddressField key={key} label={schema[key].label} content={data[key]}/>
                            case 'image':
                                return <ImageField key={key} label={schema[key].label} content={data[key]} variant={schema[key].variant} size={schema[key].size}/>
                            case 'json':
                                return <JsonField key={key} label={schema[key].label} content={data[key]}/>
                            case 'url':
                                return <UrlField key={key} label={schema[key].label} content={data[key]}/>
                            case 'email':
                                return <EmailField key={key} label={schema[key].label} content={data[key]}/>
                            case 'phone':
                                return <PhoneField key={key} label={schema[key].label} content={data[key]} variant={schema[key].variant}/>
                            case 'currency':
                                return <CurrencyField key={key} label={schema[key].label} content={data[key]} variant={schema[key].variant}/>
                            case 'reference':
                                return <ReferenceField key={key} label={schema[key].label} data={data[key]} schema={schema[key].schema} entity={schema[key].entity}/>
                            default:
                                return <TextField key={key} label={schema[key].label} content={data[key]}/>
                        }
                    })}
                </Section>
            )}
        </Container>
    );
}
