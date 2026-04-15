export default async function handler(req, res) {
    try {
        const apiKey = process.env.GNEWS_API_KEY;
        if (!apiKey) return res.status(500).json({ error: "API Key Missing" });

        // Removed 'expand' for now to ensure maximum compatibility with free keys
        const url = `https://gnews.io/api/v4/search?q=ServiceNow&lang=en&max=50&apikey=${apiKey}`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json(data);
    } catch (error) {
        console.error("Backend Error:", error);
        return res.status(500).json({ error: error.message });
    }
}
