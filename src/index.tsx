import React from 'react';
import ReactDOM from 'react-dom';
import { io } from "socket.io-client";

import { Orion } from "./Orion";
import { DataRecord } from './DataRecord';
import exampleData from './me.json';
import './Nova.css';

const socket = io("http://localhost:8080",{
  reconnection: true
});

const tryReconnect = () => {
  setTimeout(() => {
    socket.io.open((err) => {
      if (err) {
        tryReconnect();
      }
    });
  }, 2000);
}

socket.io.on("close", tryReconnect);

ReactDOM.render(
  <React.StrictMode>
    <Orion>
      <DataRecord data={exampleData} />
    </Orion>
  </React.StrictMode>,
  document.getElementById('root')
);