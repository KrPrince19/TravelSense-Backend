const dotenv = require("dotenv");
dotenv.config();

async function testV1() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing in .env");
    return;
  }

  try {
    console.log("Testing gemini-1.5-flash with v1 API...");
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: "Hello" }] }]
        })
    });
    
    const data = await response.json();
    if (data.candidates) {
        console.log("Success with v1 API!");
        console.log("Response:", data.candidates[0].content.parts[0].text);
    } else {
        console.log("Failed with v1 API:", JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.error("Error with v1 API:", error);
  }
}

testV1();
