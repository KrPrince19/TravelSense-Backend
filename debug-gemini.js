require('dotenv').config({ path: '.env' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function test() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  
  try {
    const list = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await list.generateContent("test");
    console.log("SUCCESS:", result.response.text());
  } catch (err) {
    console.log("ERROR STATUS:", err.status);
    console.log("ERROR MESSAGE:", err.message);
    if (err.response) {
      console.log("RESPONSE DATA:", await err.response.text());
    }
  }
}
test();
