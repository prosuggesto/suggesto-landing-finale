export default async function handler(req, res) {
    // Vérifier que c'est une requête POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Créer un timeout controller
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 secondes

        // Faire la requête vers le webhook n8n avec les headers nécessaires
        const response = await fetch('https://n8n.srv862127.hstgr.cloud/webhook/nettoyage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'nettoyage.01': 'nettoyage.suggesto.01'
            },
            body: JSON.stringify(req.body),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`Webhook returned ${response.status}`);
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Cleanup webhook error:', error);

        if (error.name === 'AbortError') {
            return res.status(504).json({
                error: 'Gateway timeout',
                message: 'Le serveur met trop de temps à répondre'
            });
        }

        return res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
}
