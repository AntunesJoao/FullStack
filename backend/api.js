const serverless = require("serverless-http");
const app = require("../app"); // ajuste o caminho se necessário

module.exports.handler = serverless(app);
