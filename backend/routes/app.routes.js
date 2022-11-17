const express = require('express');
const router = express.Router();
let AppController = require('../controllers/app.controller');

router.get('/connectWallet', AppController.connectWallet);
router.post('/addFileToIPFS', AppController.uploadFile);
router.get('/getFileFromIPFS', AppController.getFile);

module.exports = router;