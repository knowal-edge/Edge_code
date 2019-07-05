var express = require('express');
var router = express.Router();
var mqttService = require('../src/services/mqttServices');
var websocket = require('../src/services/websocketService');

websocket.socketServer();
mqttService.mqttPublisher();
/* GET Webscoket page. */
router.get('/websocket', function(req, res, next) {
 
});

/* GET MQTT page. */
router.get('/mqtt', function(req, res, next) {
  
});

module.exports = router;
