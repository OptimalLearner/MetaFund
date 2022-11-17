require('dotenv').config()

const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const secret_key = Buffer.from(process.env.CRYPTO_SECRET_KEY);
const init_vector = Buffer.from(process.env.CRYPTO_INIT_VECTOR);

const IPFS = require('ipfs-api');
const ipfs = new IPFS(process.env.IPFS_HOST, process.env.IPFS_PORT, { protocol: process.env.IPFS_PROTOCOL});

let encrypt = (text) => {
    let cipher = crypto.createCipheriv(algorithm, secret_key, init_vector);
    let encryptedData = cipher.update(text, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}

let decrypt = (text) => {
    let decipher = crypto.createDecipheriv(algorithm, secret_key, init_vector);
    let decryptedData = decipher.update(text, 'hex', 'utf-8');
    decryptedData += decipher.final('utf-8');
    return decryptedData;
}

let uploadFileToIPFS = async (file) => {
    let buff;
    if(!Buffer.isBuffer(file.data)) {
        let content = fs.readFileSync(file);
        buff = Buffer.from(content);
    } else {
        buff = file.data;
    }
    let fileAdded = await ipfs.add(buff);
    console.log(fileAdded[0].hash)
    let encryptedHash = encrypt(fileAdded[0].hash);
    return encryptedHash;
}

let getFileFromIPFS = (hash) => {
    url = process.env.IPFS_PROTOCOL + '://' + process.env.IPFS_HOST + ':8082/' + 'ipfs/';
    decryptedFile = decrypt(hash);
    console.log(decryptedFile)
    return url + decryptedFile;
}

module.exports = { encrypt, decrypt, uploadFileToIPFS, getFileFromIPFS }