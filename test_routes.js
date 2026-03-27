try {
  console.log("Checking places..."); require('./routes/places');
  console.log("Checking restaurants..."); require('./routes/restaurants');
  console.log("Checking culture..."); require('./routes/culture');
  console.log("Checking translate..."); require('./routes/translate');
  console.log("Checking assistant..."); require('./routes/assistant');
  console.log("Checking quests..."); require('./routes/quests');
  console.log("Checking stories..."); require('./routes/stories');
  console.log("Checking safety..."); require('./routes/safety');
  console.log("All routes loaded!");
} catch (e) {
  console.error("FAILED to load a route:", e.message);
  console.error(e.stack);
}
