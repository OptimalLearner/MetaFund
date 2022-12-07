const functions  = require('../utils');
const formidable = require("formidable");

let Campaign = require('../models/Campaign.model');


const getCampaigns = async (req, res) => {
    try {
        let students;
        students = await Campaign.find();
        console.log(students)
        return res.json({campaigns: students});
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}

const getCampaignsWithCategory = async (req, res) => {
    try {
        let students;
        students = await Campaign.find();
        return res.json({campaigns: students});
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}


const addCampaigns = async (req, res) => {
    var form = new formidable.IncomingForm()
        form.parse(req, async function (err, fields, files) {
            console.log(fields);
            if(fields.category == '') {
                c = 'Health';
            } else {
                c = fields.category;
            }
            const newRecord = new Campaign({title: fields.title, description: fields.description, count: 0, goal: fields.goal, deadline: fields.deadline, raised: 0, category: c, createdby: fields.createdby});
            await newRecord.save();
            return res.status(200).json({message: "success"});
        });
        
}

const updateCampaign = async (req, res) => {
    console.log('log')
    console.log(req.body.id)

    findRes = await Campaign.find({_id: req.body.id});
    console.log(findRes)
    let a = Number(findRes.raised);
    let b = Number(req.body.value);
    let c = a + b;
    await Campaign.updateOne(
        { _id: req.body.id }, // filter part
        { $set: {
            count: findRes.count + 1,
            raised: {'$numberDecimal': c}
        } }, // update part
        function (err, raw) { // call back
            if (err) {
                res.send(err);
            }
        }
    );
    return res.status(200).json({message: "success"});

            //  await Campaign.findById(req.body.id, function(err, p) {
            //     if (!p)
            //       return next(new Error('Could not load Document'));
            //     else {
            //       // do your updates here
            //       p.count = p.count + 1
            //       p.raised = p.raised + req.body.value
              
            //       p.save(function(err) {
            //         if (err)
            //           console.log('error')
            //         else
            //           console.log('success')
            //       });
            //     }
        //     return res.status(200).json({message: "success"});
        // });
        
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

module.exports = {  uploadFile, getFile, getCampaigns, getCampaignsWithCategory, addCampaigns, updateCampaign };