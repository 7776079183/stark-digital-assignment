//importing required packages
const http = require('http');
const express= require('express');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
//importing config 
const config = require('./_config/config');

server.listen(config.PORT);

app.set('server',server);

app.use(bodyParser.json({
    limit: '20mb'
}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb',
}));

//importing routes
require('./_routes/routes')(app);

console.log("Node Server is Running...");
console.log("Host : localhost");
console.log("Port : " + config.PORT);
console.log("API Base URL : http://localhost:" + config.PORT + "/api/");



