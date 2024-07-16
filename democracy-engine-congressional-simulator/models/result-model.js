const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema({

    chamber1: {
        yes: Number,
        no: Number,
        result: String
    },

    chamber2: {
        yes: Number,
        no: Number,
        result: String
    },

    chamber3: {
        yes: Number,
        no: Number,
        result: String
    },

    vicePres: {
        yes: Number,
        no: Number,
        result: String
    },

    president: {
        yes: Number,
        no: Number,
        result: String
    },

    finalDecision: String // decisionTxt
});

module.exports = ResultSchema;