import React, { useState } from "react";
import styled from "styled-components";
import { NovaCoreConnection } from "NovaCoreConnection";
import { DataRecordDoc } from "DataRecordDoc";
import { Socket } from "socket.io-client";

const OrionContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    >*{
        margin: 20px;
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
            <DataRecordDoc/>
        </OrionContainer>
    )
}