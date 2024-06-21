
const express = require('express');
const mongoose = require("mongoose"); // mongoose used for mongodb schema
const cors = require('cors'); // allows for requests to be sent btwn servers

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://Cluster70600:W3FEU0d0aXZe@cluster70600.stuctmh.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster70600"; // the mongodb cloud database
const Session = require("../models/session-model"); // the file for the session schema
mongoose.connect(mongoDB); // connect to the cloud database

// get all records in Sessions collection
app.get('/sessions', async (req, res) => {
    const sessions = await Session.find({});
    res.json(sessions);
});

// save the data object to the db
app.post('/sessions', cors(), async (req, res, next) => {
    const session = new Session(req.body);
    await session.save();
    res.json(session);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server listening on port ${' + PORT + '}');
})




