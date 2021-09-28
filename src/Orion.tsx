import React, { useState } from "react";
import styled from "styled-components";
import { DataRecord } from 'DataRecord';
import { NovaCoreConnection } from "NovaCoreConnection";
import { Socket } from "socket.io-client";

// DOCS
import dataRecordDoc from './Docs/DataRecordDoc.json';
import novaDoc from './Docs/Nova.json';

const OrionContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: top;
    overflow-x: auto;
    >*{
        margin: 20px;
        width: 500px;
        flex-shrink: 0;
    }
`;

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
            <NovaCoreConnection 
                handleSocketConnected={handleSocketConnected}
                handleSocketDisconnected={handleSocketDisconnected}/>
            <DataRecord data={novaDoc.data} schema={novaDoc.schema}/>
            <DataRecord data={dataRecordDoc.data} schema={dataRecordDoc.schema}/>
        </OrionContainer>
    )
}