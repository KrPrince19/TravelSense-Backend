const { GoogleGenerativeAI } = require("@google/generative-ai");

/**
 * Fetch Safety & Health information for a location
 */
const getSafetyInfo = async (req, res) => {
  try {
    const { city, lat, lon } = req.query;
    if (!city) return res.status(400).json({ error: 'City is required' });

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `You are a real-time Safety & Health officer for travelers in ${city}.
    Current Coordinates: ${lat}, ${lon}. Time: ${new Date().toLocaleTimeString()}.
    
    Synthesize local knowledge and provide:
    1. Safety Status (Safe, Moderate, or Caution)
    2. A short safety tip (e.g., 'Area is well-lit but keep belongings close')
    3. Health Alert (e.g., 'UV index is 8, wear sunscreen')
    4. Emergency Contact (Local police/medical)
    
    Return ONLY a JSON object:
    {
      "status": "Safe" | "Moderate" | "Caution",
      "safetyTip": "string",
      "healthAlert": "string",
      "emergency": "string"
    }`;

    const result = await model.generateContent(prompt);
    let text = result.response.text();
    text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    const safetyData = JSON.parse(text);

    res.status(200).json(safetyData);
  } catch (error) {
    console.error('Safety Service Error:', error);
    res.status(500).json({ error: 'Failed to fetch safety info' });
  }
};

module.exports = { getSafetyInfo };
