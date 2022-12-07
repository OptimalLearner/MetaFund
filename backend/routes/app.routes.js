const express = require('express');
const router = express.Router();
let AppController = require('../controllers/app.controller');

router.post('/addFileToIPFS', AppController.uploadFile);
router.get('/getFileFromIPFS', AppController.getFile);
router.get('/getCampaigns',AppController.getCampaigns);
router.get('/getCampaignsWithCategory',AppController.getCampaignsWithCategory);
router.post('/addStudent', AppController.addCampaigns);
router.put('/updateCampaign', AppController.updateCampaign);

module.exports = router;