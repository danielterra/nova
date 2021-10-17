import styled from "styled-components";
import { DataRecord } from 'DataRecord';
import {DataExplorer} from "./DataExplorer";

// DOCS
import novaDoc from './Docs/Nova.json';
import dataRecordDoc from './Docs/DataRecordDoc.json';
import componentDocumentationSchema from './Schemas/ComponentDocumentation.json';
import okrs from './Docs/OKRs.json';
import okrsSchema from './Schemas/OKR.json';
import dataExplorerDoc from './Docs/DataExplorerDoc.json';

const OrionContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: top;
    overflow-x: auto;
    >*{
        margin: 20px;
        flex-shrink: 0;
        z-index: 1;
    }
`;

export const Orion = () => {
    return (
        <OrionContainer>
            <DataExplorer />
            <DataRecord data={novaDoc.data} schema={novaDoc.schema} entity={novaDoc.entity}/>
            {okrs.data.map((okr, index) => {
                return <DataRecord key={index} data={okr} schema={okrsSchema.schema} entity={okrsSchema.entity}/>
            })}
            <DataRecord data={dataExplorerDoc.data} schema={componentDocumentationSchema.schema} entity={componentDocumentationSchema.entity}/>
            <DataRecord data={dataRecordDoc.data} schema={componentDocumentationSchema.schema} entity={componentDocumentationSchema.entity}/>
        </OrionContainer>
    )
}