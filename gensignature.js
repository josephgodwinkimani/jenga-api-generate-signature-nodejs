const http = require('http'); 
const crypto = require('crypto');
const sign = crypto.createSign('SHA256');
const fs = require('fs');

http.createServer((request, response) => {

    sign.write('KE0550123456789'); //String of concatenated values of the request fields
    sign.end();

    const jengakey = fs.readFileSync('jenga.pem');
    signature_base64 = sign.sign(jengakey, 'base64');

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write(signature_base64); //return the signature

    console.log(signature_base64);

    response.end();

}).listen(1337); // port server is running on: node index.js
