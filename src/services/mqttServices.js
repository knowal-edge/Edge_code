var mqtt = require('mqtt');
var url = require('url');
require('dotenv').config()
const axios = require("axios");

var options={
    retain:true,
    qos:1};

var client  = mqtt.connect(process.env.MQTTURL);
var edTopic=process.env.EDGETOPIC;


module.exports = {
     /*******************************MQTT PUBLISHER METHOD********************************************/

     mqttPublisher:function(){

        client.on("connect",function(){	
            console.log("MQTT connected  "+ client.connected);
        })

        //handle errors
        client.on("error",function(error){
            console.log("MQTT Can't connect" + error);
            process.exit(1)
        });
             client.publish(edTopic,"50",options); //Publishing sensor data to server
            },

    /*******************************END********************************** */

};