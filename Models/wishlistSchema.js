const mongoose = require('mongoose')

const wishlistSchem = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    }
    ,
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
    foodDescription: {
        type: Array,
        required: true
    },

    stayimage: {
        type: Array,
        required: true
    },
    stayDescription: {
        type: Array,
        required: true
    },
    activityimages: {
        type: Array,
        required: true
    },
    activityDescription: {
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

    custId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const wishlists = mongoose.model('wishlists', wishlistSchem)
module.exports = wishlists
