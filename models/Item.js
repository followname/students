const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    third_name: {
        type: String,
        required: true,
    },
    birth_date: {
        type: Date,
        required: true,
    },
    math: {
        type: Number,
        required: true,
    },
    phylosophy: {
        type: Number,
        required: true,
    },
    russian: {
        type: Number,
        required: true,
    },
    english: {
        type: Number,
        required: true,
    },
    chinese: {
        type: Number,
        required: true,
    }
});

module.exports = Item = mongoose.model("item", ItemSchema, 'studentsdb')