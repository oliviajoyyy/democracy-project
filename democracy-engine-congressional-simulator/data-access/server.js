
const express = require('express');
const mongoose = require("mongoose"); // mongoose used for mongodb schema
const cors = require('cors'); // allows for requests to be sent btwn servers
// const https = require('https'); // on server
// const fs = require('fs'); // on server

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
//const mongoDB = "mongodb://demConfigDesk:democracyProj_sim2024@cha-cweb-dma2.sjsu.edu:27017/democracy-project";
const mongoDB = "mongodb://localhost:27017/democracy-project"
const Session = require("../models/session-model"); // the file for the session schema
const run = async() => {
mongoose.connect(mongoDB); // connect to the database
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

// update the document
app.patch('/sessions/update', async (req, res) => {
    try {
    const { uniqueID, updatedField } = req.body;
    console.log('Session to update:', uniqueID);
    console.log('Updated fields:', updatedField);
    const updatedSession = await Session.findOneAndUpdate(
        { uniqueID },
        { $set: updatedField },
        { new: true }
    );
    if (!updatedSession) {
        return res.status(404).json({ error: 'Session not found' });
      }
    res.json(updatedSession);
    } catch (e) {
        console.log(e);
    }
});

// Local version
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server listening on port ${' + PORT + '}');
})


/* On server
// GETTING NODE TO USE SSL CERT
const httpsServer = https.createServer({
    cert: fs.readFileSync('/etc/ssl/certs/cha-cweb-dma2.sjsu.edu.cer'),
    key: fs.readFileSync('/etc/ssl/private/cha-cweb-dma2.sjsu.edu.key')
}, app);

httpsServer.listen(8080, () => {
    console.log('HTTPS Server running on port 8080');
})
*/

