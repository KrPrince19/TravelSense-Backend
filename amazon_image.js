const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://zimzam:XepFqC1cxvoM08yc@cluster0.hvjpj7c.mongodb.net/TravelSenseDB";

async function fix() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    
    // Explicitly update Pudikiya's image URL with the Amazon image provided by the user
    await db.collection('cultural_insights').updateOne(
      { city: /thawe/i, "famous_foods.name": /Pudikiya/i },
      { $set: { "famous_foods.$.image_url": "https://m.media-amazon.com/images/I/71uDIivzy-L.jpg" } }
    );
    
    console.log("✅ Successfully mapped Amazon image directly to AI's Pudikiya item for Thawe.");
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
fix();
