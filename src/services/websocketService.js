const io = require("socket.io")(4001);
const axios = require("axios");
const encryption = require('./encryptionService');
const redis = require('redis');

module.exports = {

    socketServer:function () {
        //Data requesting to simulation edge (Dweet.io) using axios lib and then emiting using socket
        const getApiAndEmit = async socket => {
        try {
            const res = await axios.get(
              "https://dweet.io/get/latest/dweet/for/socketThingname"
             );

             //Data encryption
             let dataencr = encryption.encrypt(JSON.stringify(res.data.with[0].content.temp));
             socket.emit("FromAPI", dataencr); // Emitting a new message. It will be consumed by the client
             console.log("Websocket Sending Message packet "+dataencr);
          } catch (error) {
          console.error(`Error: ${error.code}`);
          }
        };

        //Socket connection and emit for every 10 seconds interval
        let interval;
        io.on("connection", socket => {
          console.log("New Websocket client connected");
        if (interval) {
          clearInterval(interval);
        }
        interval = setInterval(() => getApiAndEmit(socket), 10000);
        socket.on("disconnect", () => {
          console.log("Websocket Client disconnected");
        });
      }); 
    }
};