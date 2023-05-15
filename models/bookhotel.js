const mongoose = require('mongoose');
var DateOnly = require('mongoose-dateonly')(mongoose);
const Schema = mongoose.Schema;

const hotelSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    pets: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet",
      },
    firstdate: 
    {
        type: Date,
        required: true
    },
    lastdate: 
    {
        type: Date,
        required: true
    }
}, 
);

const BookHotel = mongoose.model("BookHotel", hotelSchema);
module.exports = BookHotel;