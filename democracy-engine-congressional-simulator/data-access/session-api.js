
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

