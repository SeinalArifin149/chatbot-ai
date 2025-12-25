const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { ping } = require ("./chat.js");

// Create a new client instance
const client = new Client();

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
    ping();
});

// When the client received QR-Code
// client.on('qr', (qr) => {
//     console.log('QR RECEIVED', qr);
// });
client.on('qr',qr => {
    qrcode.generate(qr, {small:true})
});

// Start your client
client.initialize();
