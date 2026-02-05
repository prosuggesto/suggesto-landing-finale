export default async function handler(req, res) {
    // Vérifier que c'est une requête POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Faire la requête vers le webhook n8n avec les headers nécessaires
        const response = await fetch('https://n8n.srv862127.hstgr.cloud/webhook/message_web', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'web.message': 'web.message.01'
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (error) {
        console.error('Contact webhook error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
