var express = require('express');
var router = express.Router();
var mqttService = require('../src/services/mqttServices');
var websocket = require('../src/services/websocketService');

websocket.socketServer();
mqttService.mqttPublisher();


module.exports = router;
