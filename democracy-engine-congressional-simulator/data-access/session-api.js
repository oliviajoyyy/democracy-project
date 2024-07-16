
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

// create session record from the engine object
function toSchema(engineObj) {
    const session = {

        config: {
            numLegislativeBodies: engineObj.numLegislativeBodies,
            numParties: engineObj.numParties,

            chamber1: {
                totalMembers: engineObj.numHouse,
                numPartyA: engineObj.perDemHouse,
                numPartyB: engineObj.perRepHouse,
                numPartyC: engineObj.perIndHouse
            },

            chamber2: {
                totalMembers: engineObj.numHouse2,
                numPartyA: engineObj.perDemHouse2,
                numPartyB: engineObj.perRepHouse2,
                numPartyC: engineObj.perIndHouse2
            },

            chamber3: {
                totalMembers: engineObj.numSenate,
                numPartyA: engineObj.perDemSenate,
                numPartyB: engineObj.perRepSenate,
                numPartyC: engineObj.perIndSenate
            },

            vicePres: {
                totalMembers: engineObj.numVP,
                numPartyA: engineObj.perDemVP,
                numPartyB: engineObj.perRepVP,
                numPartyC: engineObj.perIndVP
            },

            president: {
                totalMembers: engineObj.numPres,
                numPartyA: engineObj.perDemPres,
                numPartyB: engineObj.perRepPres,
                numPartyC: engineObj.perIndPres
            },

            threshold: {
                supermajority: engineObj.superThresh,
                majority: engineObj.perPass,
                yayPartyA: engineObj.demYaythresh,
                yayPartyB: engineObj.epYaythresh,
                yayPartyC: engineObj.indYaythesh
            },

            // result properties
            result: {
                chamber1: {
                    yes: engineObj.votingBodyCounts[0][0],
                    no: engineObj.votingBodyCounts[0][1],
                    result: engineObj.voteResults[0]
                },

                chamber2: {
                    yes: engineObj.votingBodyCounts[1][0],
                    no: engineObj.votingBodyCounts[1][1],
                    result: engineObj.voteResults[1]
                },

                chamber3: {
                    yes: engineObj.votingBodyCounts[2][0],
                    no: engineObj.votingBodyCounts[2][1],
                    result: engineObj.voteResults[2]
                },

                vicePres: {
                    yes: engineObj.votingBodyCounts[3][0],
                    no: engineObj.votingBodyCounts[3][1],
                    result: engineObj.voteResults[3]
                },

                president: {
                    yes: engineObj.votingBodyCounts[4][0],
                    no: engineObj.votingBodyCounts[4][1],
                    result: engineObj.voteResults[4]
                },

                finalDecision: engineObj.decisionTxt
            }
        }

    }

    return session;
}