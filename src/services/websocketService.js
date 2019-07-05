const socketIOClient = require("socket.io-client");
const io = require("socket.io")(4001);
const axios = require("axios");

var encryption = require('./encryptionService');

module.exports = {

    socketServer:function () {
        //Data requesting to simulation edge (Dweet.io) using axios lib and then emiting using socket
const getApiAndEmit = async socket => {
    try {
      const res = await axios.get(
        "https://dweet.io/get/latest/dweet/for/socketThingname"
      ); // Getting the data from Dweeti.io
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
    console.log("New client connected");
    if (interval) {
      clearInterval(interval);
    }
    
    interval = setInterval(() => getApiAndEmit(socket), 10000);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
  
    }
        

};