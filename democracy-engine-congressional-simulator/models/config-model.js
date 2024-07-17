const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResultSchema = require('./result-model');

const ConfigSchema = new Schema({

    timestamp: {type: Date, default: Date.now()},

    numLegislativeBodies: Number,
    numParties: Number,

    chamber1: {
        totalMembers: Number,
        partyA: Number,
        partyB: Number,
        partyC: Number
    },

    chamber2: {
        totalMembers: Number,
        partyA: Number,
        partyB: Number,
        partyC: Number
    },

    chamber3: {
        totalMembers: Number,
        partyA: Number,
        partyB: Number,
        partyC: Number
    },

    vicePres: {
        totalMembers: Number,
        partyA: Number,
        partyB: Number,
        partyC: Number
    },

    president: {
        totalMembers: Number,
        partyA: Number,
        partyB: Number,
        partyC: Number
    },

    percentMajority: Number,
    percentSupermajority: Number,

    probabilityYesVote: {
        partyA: Number,
        partyB: Number,
        partyC: Number
    },

    // result properties
    simResults: [ResultSchema] 

});

module.exports = ConfigSchema;