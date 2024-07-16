// file: session-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ResultSchema = require('./result-model');
const ConfigSchema = require('./config-model');

const SessionSchema = new Schema({
    timestamp: {type: Date, default: Date.now()},

    uniqueID: String,

    // user configuration properties
    config: [ConfigSchema] 

});

module.exports = mongoose.model("Session", SessionSchema, "sessions");
// name of model w/in application, schema model var, name of collection in the db