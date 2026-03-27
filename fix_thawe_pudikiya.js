const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://zimzam:XepFqC1cxvoM08yc@cluster0.hvjpj7c.mongodb.net/TravelSenseDB";

async function fix() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    
    await db.collection('cultural_insights').updateOne(
      { city: /thawe/i, "famous_foods.name": /Pudikiya/i },
      { $set: { "famous_foods.$.image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gujiya_Indian_sweet.jpg/500px-Gujiya_Indian_sweet.jpg" } }
    );
    
    await db.collection('cultural_insights').updateOne(
      { city: /thawe/i },
      { $pull: { famous_foods: { name: "Pedakiya / Gujiya" } } }
    );
    
    console.log("✅ Successfully mapped authentic wikipedia image directly to AI's Pudikiya and scrubbed duplicates.");
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
fix();
