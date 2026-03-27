const https = require('https');
require('dotenv').config({ path: '.env' });

const API_KEY = process.env.GEMINI_API_KEY;

https.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.models) {
        console.log("AVAILABLE MODELS:");
        json.models.forEach(m => console.log(m.name));
      } else {
        console.log("API RESPONSE:", data);
      }
    } catch (e) {
      console.log("PARSING ERROR:", data);
    }
  });
}).on('error', (err) => {
  console.log("ERROR:", err.message);
});
