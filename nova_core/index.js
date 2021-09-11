// This is a node.js application that initalize NOVA CORE
const express = require('express');
const { Server } = require("socket.io");
const http = require('http');
const app = express();
const server = http.createServer(app);
const executeCommand = require('./execute');

const io = require("socket.io")(server, {
    cors: {
      origin: "*"
    }
});

io.on('connection', (socket) => {
    socket.on('execute', (command) => {
        executeCommand(command, 
            (stdout) => {
                console.log(stdout.toString());
                const output = stdout.toString();
                socket.emit(`executeResponse`, {
                    command,
                    stdout: output
                });
            },
            (stderr) => {
                socket.emit(`executeResponse`, {
                    command,
                    stderr
                });
            },
            (err) => {
                socket.emit(`executeResponse`, {
                    command,
                    err
                });
            },
            (close) => {
                socket.emit(`executeResponse`, {
                    command,
                    close
                });
            }
        )
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(8080, () => {
    console.log('listening on *:8080');
});