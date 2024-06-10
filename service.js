const server = require("./server");
const app = require("./app");
const config = require("./src/config");

const main = async () => {
    await config.Connection();

}