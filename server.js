require('dotenv').config();

const http = require('http');
const app = require('./lib/app');
const mongodb = require('./lib/mongodb');


mongodb.connect(process.env.MONGODB_URI)
    .then(() => console.log('mongo connected', process.env.MONGODB_URI))    //eslint-disable-line
    .catch((err) => console.log('error detected',err)); //eslint-disable-line

const server = http.createServer((req, res) => {
    res.end('server.js is executing.');
});
const PORT = process.env.port || 3000;

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);      //eslint-disable-line
});