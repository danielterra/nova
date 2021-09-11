const { spawn } = require("child_process");

const executeCommand = (args, onStdout, onStdErr, onErr, onClose) => {
    args = args.split(' ');
    const command = args.shift();
    const commandProcess = spawn(command, args);

    commandProcess.stdout.on("data", onStdout);
    commandProcess.stderr.on("data", onStdErr);
    commandProcess.on('error', onErr);
    commandProcess.on("close", onClose);
}

module.exports = executeCommand;