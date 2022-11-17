const functions  = require('../utils');
const formidable = require("formidable");

const connectWallet = (req, res) => {
    
}

const uploadFile = async (req, res) => {
    try {
        var form = new formidable.IncomingForm()
        form.parse(req, async function (err, fields, files) {
            hash = await functions.uploadFileToIPFS(files.image.filepath);
            return res.status(200).json({hash: hash});
        });
    } catch (e) {
        throw Error(e);
    }
}

const getFile = async (req, res) => {
    try {
        let encryptedHash = req.body.hash;
        decryptedURL = functions.getFileFromIPFS(encryptedHash);
        return res.status(200).json({fileURL: decryptedURL});
    } catch (e) {
        throw Error(e);
    }
}

module.exports = { connectWallet, uploadFile, getFile };