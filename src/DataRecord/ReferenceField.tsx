import React from "react";
import { OrionColumn, TextFieldLabel } from "BaseStyles";
import { DataRecord } from "DataRecord";

export interface ReferenceFieldProps {
    label: string;
    entity: string;
    data: any;
    schema: any;
}

export const ReferenceField = (props: ReferenceFieldProps) => {
    const { entity, label, data, schema } = props;

    return (
        <>
            <TextFieldLabel>{label}</TextFieldLabel>
            <OrionColumn>
                {Array.isArray(data) && data.map((item:any, index:number) => {
                    return <DataRecord key={index} data={item} schema={schema} entity={entity}/>
                })}
                {!Array.isArray(data) && 
                    <DataRecord data={data} schema={schema} entity={entity}/>
                }
            </OrionColumn>
        </>
    )
}
