const { partialDeepStrictEqual } = require('assert');
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carName: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    modelYear: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    mileage: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
});
module.exports= mongoose.model('Car',carSchema);