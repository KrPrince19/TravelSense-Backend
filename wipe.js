const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://zimzam:XepFqC1cxvoM08yc@cluster0.hvjpj7c.mongodb.net/TravelSenseDB";
async function wipe() {
  const client = new MongoClient(uri);
  await client.connect();
  await client.db().collection('cultural_insights').deleteMany({});
  console.log("✅ Wiped old data stubs. Database is clean!");
  process.exit();
}
wipe();
