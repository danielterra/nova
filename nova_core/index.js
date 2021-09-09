// This is a node.js application that initalize NOVA CORE
const { spawn } = require("child_process");
const fs = require('fs');
const http = require('http');
const functionReader = require('./functionReader');

// 1. Install dependencies
const installDependencies = () => {
    const npmInstallProcess = spawn("npm", ["install","--loglevel=error"]);
    const log = (text) => {
        console.log(`installDependencies: ${text}`);
    }

    npmInstallProcess.stdout.on("data", data => {
        log(`stdout: ${data}`);
    });

    npmInstallProcess.stderr.on("data", data => {
        log(`stderr: ${data}`);
    });

    npmInstallProcess.on('error', (error) => {
        log(`error: ${error.message}`);
    });

    npmInstallProcess.on("close", code => {
        if (code === 0) {
            log("Dependencies instalation successfull");
            buildUI();
            return;
        }

        log(`Dependencies instalation error ${code}`);
    });
}

// 2. Build the UI files
const buildUI = () => {
    const buildUIProcess = spawn("npm", ["run","build"]);
    const log = (text) => {
        console.log(`buildUI: ${text}`);
    }

    buildUIProcess.stdout.on("data", data => {
        log(`stdout: ${data}`);
    });

    buildUIProcess.stderr.on("data", data => {
        log(`stderr: ${data}`);
    });

    buildUIProcess.on('error', (error) => {
        log(`error: ${error.message}`);
    });

    buildUIProcess.on("close", code => {
        if (code === 0) {
            log("UI build successfull");
            startServer();
            return;
        }

        log(`UI build error ${code}`);
    });
}

// 3. Serve the interface
const startServer = () => {
    http.createServer(function (req, res) {
        console.log(req.url);
        // This kind of url will be handled as a command to nova core
        if (req.url.startsWith("/?command=")) {
            handleCommandRequest(req,res);
            return;
        }

        // If else it will be a static file
        let filename = req.url;
        if (req.url === "/") {
            filename = "/index.html"
        }

        fs.readFile(`${__dirname}/../build/` + filename, function (err,data) {
          if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
          }
          res.writeHead(200);
          res.end(data);
        });
      }).listen(8080);
}

// 4. Handle commands from the Front End
const handleCommandRequest = async (req,res) => {
    const command = req.url.replace("/?command=","").split("%20");

    console.log(command);
    if (command[0] === "function") {
        const result = await functionReader(command);
        res.writeHead(200);
        res.end(result);
        return;
    }
}

// installDependencies();
startServer();