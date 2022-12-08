const mongoose = require('mongoose');

const carAppSchema = new mongoose.Schema(
{
    year: Number,
    make: String,
    model: String,
    price: Number,
    image: String,
    availableToPurchase: Boolean
});

const Cars = mongoose.model('Car', carAppSchema);

module.exports = Cars;