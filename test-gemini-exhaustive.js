require('dotenv').config({ path: '.env' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function test() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) { console.log('API Key missing'); return; }

  const models = ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-1.5-pro", "gemini-1.0-pro", "gemini-pro"];
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  for (const modelName of models) {
    try {
      console.log(`Testing model: ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("test");
      console.log(`SUCCESS with ${modelName}:`, result.response.text());
      return;
    } catch (err) {
      console.log(`FAILED with ${modelName}: ${err.message}`);
    }
  }
}

test();
