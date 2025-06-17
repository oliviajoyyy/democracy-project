
const express = require('express');
const mongoose = require("mongoose"); // mongoose used for mongodb schema
const cors = require('cors'); // allows for requests to be sent btwn servers
// const https = require('https');
// const http = require('http');
// const fs = require('fs');

// const httpsOptions = {
//     cert: fs.readFileSync('/etc/ssl/certs/cha-cweb-dma2.sjsu.edu.cer'),
//     key: fs.readFileSync('/etc/ssl/private/cha-cweb-dma2.sjsu.edu.key')
// };
// const httpsServer = https.createServer(httpsOptions, (req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Connection is secured<h1>');
// });
// httpsServer.listen(443, 'cha-cweb-dma2.sjsu.edu');

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

// Session.updateMany({}, { $set: { version: 'ICA kiosk v1.0' } })
//   .then(result => console.log('All documents updated:', result))
//   .catch(err => console.error('Error updating documents:', err));

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

// const httpServer = http.createServer(app);
// httpServer.listen(80, () => {
//     console.log('HTTP Server running on port 80');
// });
// const httpsServer = https.createServer({
//     cert: fs.readFileSync('/etc/ssl/certs/cha-cweb-dma2.sjsu.edu.cer'),
//     key: fs.readFileSync('/etc/ssl/private/cha-cweb-dma2.sjsu.edu.key')
// }, app);

// httpsServer.listen(443, () => {
//     console.log('HTTPS Server running on port 443');
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server listening on port ${' + PORT + '}');
})

/* FOR TESTING
const s = new Session({
    timestamp: Date.now(),

    uniqueID: "testing_XXX",

    // user configuration properties
    configHistory: [{"numLegislativeBodies": 2,
        "numParties": 2,

        "chamber1": {
                "totalMembers": 432,
                "partyA": 220,
                "partyB": 212,
                "partyC": 0
        },

        "chamber2": {
                "totalMembers": 100,
                "partyA": 49,
                "partyB": 51,
                "partyC": 0
        },

        "chamber3": {
                "totalMembers": 0,
                "partyA": 0,
                "partyB": 0,
                "partyC": 0
        },

        "vicePres": {
            "totalMembers": 1,
            "partyA": 0,
            "partyB": 1,
            "partyC": 0
        },

        "president": {
            "totalMembers": 1,
            "partyA": 0,
            "partyB": 1,
            "partyC": 0
        },

        "percentMajority": 50,
        "percentSupermajority": 67,

        "probabilityYesVote": {
            "partyA": 70,
            "partyB": 30,
            "partyC": 50
        }}],

    finalConfig: { }
    });

s.save();
*/




