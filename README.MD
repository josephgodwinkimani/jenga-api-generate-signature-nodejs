### Generate Signature using NodeJS

To generate the signature, you will need create a key pair of private key and public key. You will share the public key with Finserve and use the private key to generate the signature.

### Why Signature?

To ensure the security of your transactions or requests, Finserve have implemented security controls that ensure that transactions can only be initiated by you and no one else. 

### Get Started

If you don't have a key pair run `node index.js` and open your browser at `http://127.0.0.1:1337`:

1. To generate your key pair - Public and Private key, 
2. Save your keys separately in current directory,
3. Build a String of concatenated values of the request fields with the following order: e.g. `countryCode`, `accountId` for *Account balance*,
4. Sign the result with previously created Private Key and Base64 encoded

If you have a key pair run `node gensignature.js` and open your browser at `http://127.0.0.1:1337`:

1. Build a String of concatenated values of the request fields with the following order: e.g. `countryCode`, `accountId` for *Account balance*,
2. Sign the result with previously created Private Key and Base64 encoded


