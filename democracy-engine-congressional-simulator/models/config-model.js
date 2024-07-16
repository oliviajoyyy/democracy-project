const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResultSchema = require('./result-model');

const ConfigSchema = new Schema({

    numLegislativeBodies: Number,
    numParties: Number,

    chamber1: {
        totalMembers: Number,
        pctPartyA: Number,
        pctPartyB: Number,
        pctPartyC: Number
    },

    chamber2: {
        totalMembers: Number,
        pctPartyA: Number,
        pctPartyB: Number,
        pctPartyC: Number
    },

    chamber3: {
        totalMembers: Number,
        pctPartyA: Number,
        pctPartyB: Number,
        pctPartyC: Number
    },

    vicePres: {
        totalMembers: Number,
        pctPartyA: Number,
        pctPartyB: Number,
        pctPartyC: Number
    },

    president: {
        totalMembers: Number,
        pctPartyA: Number,
        pctPartyB: Number,
        pctPartyC: Number
    },

    threshold: {
        supermajority: Number,
        majority: Number,
        yayPartyA: Number,
        yayPartyB: Number,
        yayPartyC: Number
    },

    // result properties
    result: [ResultSchema] 

});

module.exports = ConfigSchema;