const https = require('https');
require('dotenv').config({ path: '.env' });

const API_KEY = process.env.GEMINI_API_KEY;
const data = JSON.stringify({
  contents: [{ parts: [{ text: "hello" }] }]
});

const options = {
  hostname: 'generativelanguage.googleapis.com',
  path: `/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('STATUS:', res.statusCode);
    console.log('BODY:', body);
  });
});

req.on('error', (e) => {
  console.log('ERROR:', e.message);
});

req.write(data);
req.end();
