// ORION
// Gerencia a renderização dos componentes
import styled from "styled-components";
import { DataRecord } from 'DataRecord';

// DOCS
import dataRecordDoc from './Docs/DataRecordDoc.json';
import componentDocumentationSchema from './Schemas/ComponentDocumentation.json';

const OrionContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
            <DataRecord data={dataRecordDoc.data} schema={componentDocumentationSchema.schema} entity={componentDocumentationSchema.entity}/>
        </OrionContainer>
    )
}