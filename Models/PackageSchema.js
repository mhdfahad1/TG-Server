const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
    packagename: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    foodimage: {
        type: Array,
        required: true
    },
    foodDescription:{
        type: Array,
        required: true
    },
    
    stayimage: {
        type: Array,
        required: true
    },
    stayDescription:{
        type: Array,
        required: true
    },
    activityimages: {
        type: Array,
        required: true
    },
    activityDescription:{
        type: Array,
        required: true
    },
    placename: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    custId:{
        type: String,
        required: true
    }

})
const packages = mongoose.model('packages', packageSchema)
module.exports = packages