// file: session-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResultSchema = require('./result-model');

const SessionSchema = new Schema({
    timestamp: {type: Date, default: Date.now()},

    // user configuration properties
    userConfig: Boolean,

    // total number of members in each body
    numHouseMembers: Number, // numHouse
    numSenateMembers: Number, // numSenate
    numVpMembers: Number, // numPres
    numPresMembers: Number, // numVP

    numParties: Number, // userNumParties

    // number of members in each political party for each body 
    percentChamber1PartyA: Number,  // democratic party for default config      // perDemHouse
    percentChamber1PartyB: Number,  // republican party for default config      // perRepHouse
    percentChamber1PartyC: Number,  // independent party for default config     // perIndHouse

    percentChamber2PartyA: Number, // perDemSenate, engine's val is decimal percent
    percentChamber2PartyB: Number, // perRepSenate
    percentChamber2PartyC: Number, // perIndSenate

    percentVPPartyA: Number, // perDemVP
    percentVPPartyB: Number, // perRepVP
    percentVPPartyC: Number, // perIndVP

    percentPresPartyA: Number, // perDemPres
    percentPresPartyB: Number, // perRepPres
    percentPresPartyC: Number, // perIndPres

    yayThreshPartyA: Number, // demYaythresh, engine's val is decimal present
    yayThreshPartyB: Number, // repYaythresh
    yayThreshPartyC: Number, // indYaythesh

    majorityThresh: Number, // perPass
    superThresh: Number // superThresh
    
    // result properties
    //result: 

});

module.exports = mongoose.model("Session", SessionSchema, "sessions");
// name of model w/in application, schema model var, name of collection in the db