import React, { useEffect, useState } from 'react';
import { DataRecord } from 'DataRecord';
import { io, Socket } from "socket.io-client";
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
    max-height: 100%;
    overflow: auto;
`;

const schema = {
    title: {
        type: 'text',
        label: 'title',
        section: 'meta',
        isTitle: true
    },
    id: {
        type: 'text',
        label: 'id',
        section: 'meta'
    },
    state: {
        type: 'text',
        label: 'state',
        section: 'meta'
    },
    reason: {
        type: 'text',
        label: 'disconnected reason',
        section: 'meta'
    }
};

interface SocketComponentProps {
    handleSocketConnected: (socket:Socket)=>void,
    handleSocketDisconnected: (socket:Socket)=>void
}

export const NovaCoreConnection = (props:SocketComponentProps) => {
    const [socketData, setSocketData] = useState<any>({
        title: 'Nova Core',
        state: 'disconnected'
    });
    const [log, setLog] = useState<string[]>([]);
    
    useEffect(() => {
        const socket = io("http://localhost:8080");

        socket.on("connect", () => {
            props.handleSocketConnected(socket);
            updateSocketData(socket);
            addToLog(`Connected`);
        });

        socket.on("executeResponse", (data) => {
            if (data.stdout) {
                addToLog(`executeResponse: ${data.command}\n${data.stdout}`);
            }
        });

        socket.on("disconnect", (reason:string) => {
            props.handleSocketDisconnected(socket);
            updateSocketData(socket);
            addToLog(`Disconnected with reason: ${reason}`);
        })
    }, []);

    const updateSocketData = (socket:Socket, opt?:any) => {
        const newSocketData:any = {
            title: "Nova Core",
            id: socket.id,
            state: socket.connected? 'connected': 'disconnected'
        };

        if (opt && opt.reason) {
            newSocketData.reason = opt.reason;
        }

        setSocketData(newSocketData);
    }

    const addToLog = (text:string) => {
        setLog(oldLog => [...oldLog, `${moment().format('HH:mm:ss')}: ${text}`]);
    }

    return (
        <Container>
            {socketData && <DataRecord data={socketData} schema={schema}/>}
            {log && 
                <DataRecord 
                    data={{
                        title: 'LOGS',
                        log: log.join('\n')
                    }}
                    schema={{ 
                        title: {
                            type: 'text',
                            label: 'title',
                            category: 'meta',
                            isTitle: true
                        },
                        log: {
                            type: 'text',
                            label: 'log',
                            category: 'data'
                        }
                    }}/>
            }
        </Container>
    )
}