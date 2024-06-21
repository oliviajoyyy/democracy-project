
// add a session record to the database
async function addSession(session) {
    try {
        await fetch('http://localhost:3000/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(session)
        });
    } catch (e) {
        console.error(e);
    }
}

// get all session records from database
async function getItems() {
    try {
        const response = await fetch('http://localhost:3000/sessions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const sessions = await response.json();
        return sessions;
    } catch (e) {
        console.error(e);
    }
}

function toSchema(engineObj) {
    const session = {
        userConfig: engineObj.forUser,

        // total number of members in each body
        numHouseMembers: engineObj.numHouse,
        numSenateMembers: engineObj.numSenate,
        numVpMembers: engineObj.numPres,
        numPresMembers: engineObj.numVP,

        // number of members in each political party for each body 
        percentChamber1PartyA: engineObj.perDemHouse,
        percentChamber1PartyB: engineObj.perRepHouse,
        percentChamber1PartyC: engineObj.perIndHouse,

        percentChamber2PartyA: engineObj.perDemSenate,
        percentChamber2PartyB: engineObj.perRepSenate,
        percentChamber2PartyC: engineObj.perIndSenate,

        percentVPPartyA: engineObj.perDemVP,
        percentVPPartyB: engineObj.perRepVP,
        percentVPPartyC: engineObj.perIndVP,

        percentPresPartyA: engineObj.perDemPres,
        percentPresPartyB: engineObj.perRepPres,
        percentPresPartyC: engineObj.perIndPres,

        yayThreshPartyA: engineObj.demYaythresh,
        yayThreshPartyB: engineObj.epYaythresh,
        yayThreshPartyC: engineObj.indYaythesh,

        majorityThresh: engineObj.perPass,
        superThresh: engineObj.superThresh,

        result:
        {
            chamber1Yes: engineObj.votingBodyCounts[0][0],
            chamber1No: engineObj.votingBodyCounts[0][1],
            chamber1Result: engineObj.voteResults[0],

            chamber2Yes: engineObj.votingBodyCounts[1][0],
            chamber2No: engineObj.votingBodyCounts[1][1],
            chamber2Result: engineObj.voteResults[1],

            vpYes: engineObj.votingBodyCounts[2][0],
            vpNo: engineObj.votingBodyCounts[2][1],
            vpResult: engineObj.voteResults[2],

            presYes: engineObj.votingBodyCounts[3][0],
            presNo: engineObj.votingBodyCounts[3][1],
            presResult: engineObj.voteResults[3],

            finalDecision: engineObj.decisionTxt
        }

    }

    return session;
}