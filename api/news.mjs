export default async function handler(req, res) {
    const { q = 'ServiceNow' } = req.query;
    const apiKey = process.env.GNEWS_API_KEY;

    // Check if key exists
    if (!apiKey) {
        return res.status(500).json({ error: "API Key missing in Vercel settings" });
    }

    // Clean query - ensure no spaces at ends
    const cleanQuery = encodeURIComponent(q.trim());
    const url = `https://gnews.io/api/v4/search?q=ServiceNow&lang=en&max=50&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // GNews sometimes sends a 403 if the key is over limit
        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json(data);
    } catch (error) {
        console.error("Fetch Error:", error);
        return res.status(500).json({ error: "Internal Server Error during fetch" });
    }
}
