import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  TextHeadline1
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

const Container = styled.div`
    padding: 20px;
    max-height: 100%;
    max-width: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    background: #00ffe724;
    border: 1px solid #00ffe740;
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
    schema: any
}

export const DataRecord = (props:DataRecordProps) => {
    const {data, schema} = props;
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

    const getReferenceLabel = (schemaRef:any, dataRef:any) => {
        for (let key in schemaRef) {
            if (schemaRef[key].isTitle) {
                return dataRef[key];
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
            <TextHeadline1>{getTitle()}</TextHeadline1>
            { sections.map(section =>
                <Section key={section} title={section}>
                    {getDataKeysForSection(section).map(key => {
                        if (!data[key]) {
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
                            case 'data-record':
                                return <ReferenceField key={key} label={getReferenceLabel(schema[key].schema, data[key])} data={data[key]} schema={schema[key].schema}/>
                            default:
                                return <TextField key={key} label={schema[key].label} content={data[key]}/>
                        }
                    })}
                </Section>
            )}
        </Container>
    );
}
