export default async function handler(req, res) {
    const { q = 'ServiceNow' } = req.query;
    const apiKey = process.env.GNEWS_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: "API Key not configured in Vercel" });
    }

    const url = `https://gnews.io/api/v4/search?q=${q}&lang=en&max=10&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Add CORS headers just in case
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch news from GNews" });
    }
}
