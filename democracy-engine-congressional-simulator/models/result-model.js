const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
    chamber1Yes: Number, // votingBodyCounts[0][0], [0][1]
    chamber1No: Number, 
    chamber1Result: String, // voteResults[0]

    chamber2Yes: Number, // votingBodyCounts[1][0], [1][1]
    chamber2No: Number,
    chamber2Result: String, // voteResults[1]

    vpYes: Number,
    vpNo: Number,
    vpResult: String,

    presYes: Number,
    presNo: Number,
    presResult: String,

    finalDecision: String // decisionTxt
});

module.exports = ResultSchema;