// This function takes an array of arguments and try to find a file with the first and pass the latter as parameters
const fs = require("fs");
const vm = require('vm');
const { spawn } = require("child_process");

const functionReader = async (command) => {
    console.log(`File to load ${command[1]}`);

    // 1. Try to find the file
    const code = await fs.readFileSync(`${__dirname}/` + command[1] + ".js", 'utf-8');
    const context = { command, spawn, response: {} };
    vm.createContext(context);
    vm.runInContext(code, context);
    console.log(context);

    return JSON.stringify(context);
}

module.exports = functionReader;