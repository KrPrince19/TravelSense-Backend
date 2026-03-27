const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://zimzam:XepFqC1cxvoM08yc@cluster0.hvjpj7c.mongodb.net/TravelSenseDB";

async function addSweet() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    
    // First guarantee Thawe exists
    const url = 'http://localhost:5000/api/culture?city=Thawe&state=Bihar&country=India';
    console.log("Fetching Thawe to generate baseline data...");
    await fetch(url);
    
    // Now push the specific sweet WITH A VALID IMAGE
    const result = await db.collection('cultural_insights').updateOne(
      { city: /thawe/i },
      { $addToSet: { famous_foods: { name: "Pedakiya / Gujiya", description: "A famous festive crisp sweet with a delicious stuffed filling.", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gujiya_Indian_sweet.jpg/500px-Gujiya_Indian_sweet.jpg" } } }
    );
    
    if (result.matchedCount > 0) {
      console.log("✅ Successfully injected Pedakiya / Gujiya into Thawe's database profile!");
    } else {
      console.log("❌ Failed to find Thawe in the database even after fetching.");
    }
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
addSweet();
