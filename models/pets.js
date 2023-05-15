const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pet_type: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 1,
        required: true,
        min: 0,
        max: 20
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    visits: [
        {
            visit_date: {
                type: Date,
                default: Date.now,
            },
            reason: {
                type: String,
                required: true,
            },
            vet: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Vet'
            }
        }
    ]
} 
);

const Pet = mongoose.model("Pet", petsSchema);
module.exports = Pet;