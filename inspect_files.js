const fs = require('fs');
const files = fs.readdirSync('./controllers');
files.forEach(f => {
  console.log(`'${f}' length: ${f.length} [${f.split('').map(c => c.charCodeAt(0)).join(',')}]`);
});
