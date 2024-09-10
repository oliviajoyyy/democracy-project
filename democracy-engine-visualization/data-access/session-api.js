
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
async function getSessions() {
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

// update session for a field based on the id
async function updateSessionField(sID, updatedField) {
    if (!updatedField || typeof updatedField !== 'object') {
        console.error('Invalid updatedFields object');
        return;
      }

    try {
        const response = await fetch('http://localhost:3000/sessions/update', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uniqueID: sID,
                updatedField
            })
        });
        const sessions = await response.json();
        console.log('Item partially updated:', sessions);
    } catch (e) {
        console.error(e);
    }
}

