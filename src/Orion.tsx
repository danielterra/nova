import React, { useState } from "react";
import styled from "styled-components";
import { DataRecord } from 'DataRecord';
// import { NovaCoreConnection } from "NovaCoreConnection";
import { Socket } from "socket.io-client";
// import {Youtube} from "./Youtube";

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

// const OrionBackground = styled.div`
//     width: 100%;
//     height: 100%;
//     position: fixed;
//     background: url(https://loremflickr.com/${window.screen.width}/${window.screen.height}/night/all);
//     background-repeat: no-repeat;
//     background-size: cover;
//     z-index: 0;
//     margin: -20px;
//     top: 0;
//     left: 0;
//     opacity: 0.6;
//     filter: blur(10px);
// `;

export const Orion = () => {
    const [socket, setSocket] = useState<Socket | undefined>();
    
    const handleSocketConnected = (socket:Socket) => {
        socket.emit('execute', 'ifconfig');
        setSocket(socket);
    }

    const handleSocketDisconnected = (socket:Socket) => {
        setSocket(socket);
    }

    return (
        <OrionContainer>
            {/* <OrionBackground /> */}
            {/* <NovaCoreConnection 
                handleSocketConnected={handleSocketConnected}
                handleSocketDisconnected={handleSocketDisconnected}/> */}
            <DataRecord data={novaDoc.data} schema={novaDoc.schema} entity={novaDoc.entity}/>
            {okrs.data.map((okr, index) => {
                return <DataRecord key={index} data={okr} schema={okrsSchema.schema} entity={okrsSchema.entity}/>
            })}
            <DataRecord data={dataExplorerDoc.data} schema={componentDocumentationSchema.schema} entity={componentDocumentationSchema.entity}/>
            <DataRecord data={dataRecordDoc.data} schema={componentDocumentationSchema.schema} entity={componentDocumentationSchema.entity}/>
            {/* <Youtube/> */}
        </OrionContainer>
    )
}