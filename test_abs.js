const path = require('path');
const absPath = path.resolve(__dirname, 'controllers', 'restaurantsController.js');
console.log("Absolute path:", absPath);
try {
  const mod = require(absPath);
  console.log("Successfully loaded with absolute path!");
} catch (e) {
  console.error("FAILED with absolute path:", e.message);
  console.error(e.stack);
}
