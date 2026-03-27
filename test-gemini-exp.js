require('dotenv').config({ path: '.env' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function test() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.1-flash-exp" });
    const result = await model.generateContent("hello");
    console.log("SUCCESS:", result.response.text());
  } catch (err) {
    console.log("ERROR STATUS:", err.status);
    console.log("ERROR MESSAGE:", err.message);
  }
}
test();
