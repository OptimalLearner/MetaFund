const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CampaignSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    count:{
        type: Number,
        required: true,
    },
    goal:{
        type: mongoose.Decimal128,
        required: true,
    },  
    deadline:{
        type: Number,
        required: true,
    },  
    raised:{
        type: mongoose.Decimal128,
        required: true,
    },    
    category: {
        type: String,
        required: true
    },
    createdby: {
        type: String
    }
}, {
    collection: 'campaign'
})

module.exports = mongoose.model('Campaign', CampaignSchema)