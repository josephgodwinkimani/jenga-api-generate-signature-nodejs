const http = require('http'); // Loads the http module 
const crypto = require('crypto'); // Loads the crypto module
const sign = crypto.createSign('SHA256');
const fs = require('fs');

http.createServer((request, response) => {

    // Generates your key pair    
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });

    sign.write('KE0550123456789'); //String of concatenated values of the request fields
    sign.end();

    signature_b64 = sign.sign(privateKey, 'base64');
    
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
   
    response.write(signature_b64); //return the signature

    fs.writeFileSync("publickey.pem", publicKey);

    fs.writeFileSync("jenga.pem", privateKey);

    console.log(publicKey)
  
    response.end();

}).listen(1337); // port server is running on: node index.js
