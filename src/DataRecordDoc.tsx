import React, { useEffect, useState } from 'react';
import { DataRecord } from 'DataRecord';
import { io, Socket } from "socket.io-client";
import moment from 'moment';
import styled from 'styled-components';
import { schema, data} from './DataRecordDoc.json';

const Container = styled.div`
    max-height: 100%;
    width: 500px;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const DataRecordDoc = () => {
    return (
        <Container>
            <DataRecord data={data} schema={schema}/>
        </Container>
    )
}