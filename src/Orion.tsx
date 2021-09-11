import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import { DataRecord } from './DataRecord/';

const schema = {
  title: {
    type: 'text',
    label: 'title',
    isTitle: true
  },
  id: {
    type: 'text',
    label: 'id'
  }
};

const socket = io("http://localhost:8080",{
  reconnection: true
});

const tryReconnect = () => {
  setTimeout(() => {
    socket.io.open((err) => {
      if (err) {
        tryReconnect();
        return;
      }

      console.log("CONNECTED");
    });
  }, 2000);
}

socket.io.on("close", tryReconnect);

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
  const [socketData, setSocketData] = useState<any>();

  socket.on("connect", () => {
    console.log(socket.id);
    socket.emit("message","Wake up Neo");
    setSocketData({
      title: "Socket connection",
      id: socket.id
    });
  });

  console.log("SocketData",socketData);

  return (
    <OrionContainer>
      {socketData && <DataRecord data={socketData} schema={schema}/>}
    </OrionContainer>
  )
}