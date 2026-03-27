const { GoogleGenerativeAI } = require("@google/generative-ai");

const GEMINI_API_KEY = "AIzaSyDKDBH0dDU7ot2ZA2-Vk_ZVT1p7HNkyU0Q";
const city = "Chittoor", state = "Andhra Pradesh", country = "India";
const prompt = `Provide exactly 8 authentic famous local foods, up to 4 local languages or dialects spoken in the region (with exactly 4 traveler English-to-Local phrases each), and 3 specific culture tips for a traveler visiting the city of ${city}, in ${state}, ${country}.
Respond ONLY in valid JSON format matching this exact structure containing no markdown wrappers, no markdown codeblocks, just the raw JSON:
{
  "famous_foods": [ { "name": "...", "description": "...", "image_url": "" } ],
  "languages": [ { "language": "...", "phrases": [ { "english": "...", "local": "..." } ] } ],
  "culture_tips": [ "...", "..." ]
}`;

async function test() {
  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    console.log("SDK Success:", result.response.text().substring(0, 300));
  } catch (e) {
    console.log("SDK Error:", e);
  }
}
test();
