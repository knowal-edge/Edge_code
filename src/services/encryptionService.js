const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');


module.exports = {
     /*******************************Encryption********************************************/

     encrypt:function(text){
        const encryptedString = cryptr.encrypt(text);
        return encryptedString;
        },

    /*******************************END********************************** */

    /*******************************Decryption********************************************/
    decrypt:function(text){
        const decryptedString = cryptr.decrypt(text);
        return decryptedString;
        },
   
    /*******************************END********************************** */

};