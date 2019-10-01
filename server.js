var express = require('express');
var cors = require('cors');
var app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors());
var port = process.env.PORT || 4000;
const server = require('http').createServer(app);
//var router = express.Router();
const subscriptionController = require('./api/controllers/subscriptionController')();
app.use('/', subscriptionController);
server.listen(port);

console.log('Subscription RESTful API (CORS-enabled web server) started on: ' + port);