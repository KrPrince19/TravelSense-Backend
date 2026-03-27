const fs = require('fs');
const path = require('path');
const controllers = fs.readdirSync('./controllers');

controllers.forEach(c => {
  try {
    console.log(`[TEST] Requiring controller: ${c}...`);
    require(`./controllers/${c}`);
    console.log(`[PASS] ${c} loaded.`);
  } catch (err) {
    console.error(`[FAIL] ${c} failed!`);
    console.error(`Error: ${err.message}`);
    // console.error(err.stack);
  }
});
