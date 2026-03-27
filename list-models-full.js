const https = require('https');
require('dotenv').config({ path: '.env' });

const API_KEY = process.env.GEMINI_API_KEY;

https.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log(JSON.stringify(json, null, 2));
    } catch (e) {
      console.log("PARSING ERROR:", data);
    }
  });
}).on('error', (err) => {
  console.log("ERROR:", err.message);
});
