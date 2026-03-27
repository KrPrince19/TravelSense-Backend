const fs = require('fs');
const content = fs.readFileSync('./routes/restaurants.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('require')) {
    console.log(`Line ${i}: '${l}' length: ${l.length}`);
    console.log(`Codes: [${l.split('').map(c => c.charCodeAt(0)).join(',')}]`);
  }
});
