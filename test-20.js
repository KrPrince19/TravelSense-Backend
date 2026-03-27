const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

async function test20() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing in .env");
    return;
  }

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  
  try {
    console.log("Testing gemini-2.0-flash...");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent("Hello");
    console.log("Success with gemini-2.0-flash!");
    console.log("Response:", result.response.text());
  } catch (error) {
    console.error("Error with gemini-2.0-flash:", error.message);
  }
}

test20();
