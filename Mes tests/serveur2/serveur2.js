const express = require('express');
const http = require('http');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const hostname = '127.0.0.1';
const port = 3000;


// Version SANS express =>
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


// Version AVEC express =>
const app = express();
const server = http.createServer(app);
server.listen(port);

app.use(express.static(__dirname)); // pour avoir tout, css, js, ...
app.use(bodyParser.json()); // pour supporter les json encoded bodies
app.use(bodyParser.text()); // ''
app.use(bodyParser.urlencoded({extended: true})); // ''

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'index.html'))
});
