
const express = require('express');
const mongoose = require("mongoose"); // mongoose used for mongodb schema
const cors = require('cors'); // allows for requests to be sent btwn servers

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
const mongoDB = "mongodb://demConfigDesk:democracyProj_sim2024@cha-cweb-dma2.sjsu.edu:27017/democracy-project";
const Session = require("../models/session-model"); // the file for the session schema
const run = async() => {
mongoose.connect(mongoDB); // connect to the cloud database
console.log("connected to DB");
}
run().catch((err) => console.error(err));

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




