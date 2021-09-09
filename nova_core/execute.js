// command, response and spawn is available on the global scope
const executeCommand = (args, callback) => {
    const command = args.shift();
    const commandProcess = spawn(command, args);
    const stdout=[];
    const stderr=[];

    const log = (text) => {
        console.log(`buildUI: ${text}`);
    }

    commandProcess.stdout.on("data", data => {
        stdout.push(data);
    });

    commandProcess.stderr.on("data", data => {
        stderr.push(data);
    });

    commandProcess.on('error', (error) => {
        log(`error: ${error.message}`);
    });

    commandProcess.on("close", code => {
        callback(stdout, stderr);
    });
}

const clearCommand = command.splice(0,2);
executeCommand(clearCommand, (stdout, stderr) => {
    response = {stdout,stderr};
    return response;
});