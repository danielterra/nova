// This is a node.js application that initalize NOVA CORE
const express = require('express');
const { Server } = require("socket.io");
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(8080, () => {
    console.log('listening on *:8080');
});