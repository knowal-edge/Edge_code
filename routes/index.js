var express = require('express');
var router = express.Router();
var mqttService = require('../src/services/mqttServices');
var websocket = require('../src/services/websocketService');
var encryption = require('../src/services/encryptionService');
var mailService = require('../src/services/mailService');

mqttService.mqttPublisher("30");
//websocket.socketServer();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
 // mqttService.mqttSubscriber();

});

 
 

module.exports = router;
