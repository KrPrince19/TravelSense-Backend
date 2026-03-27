const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

async function listAllModels() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing in .env");
    return;
  }

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  
  try {
    // In newer versions of the SDK, listModels might be on the genAI instance or require a different approach.
    // Actually, the listModels method might not be exposed on the main class in some versions.
    // Let's try to use the fetch API directly if the listModels is not found.
    
    console.log("Listing models...");
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.models) {
        console.log("Available Models:");
        data.models.forEach(m => console.log(`- ${m.name} (${m.displayName})`));
    } else {
        console.log("No models found or error:", data);
    }
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listAllModels();
