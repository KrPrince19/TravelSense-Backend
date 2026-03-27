const { MongoClient } = require('mongodb');

// Use the exact URI from .env
const uri = "mongodb+srv://zimzam:XepFqC1cxvoM08yc@cluster0.hvjpj7c.mongodb.net/TravelSenseDB";

const seedData = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB via native driver.");
    
    const db = client.db();
    const collection = db.collection('cultural_insights');

    const data = {
      country: "India",
      state: "Andhra Pradesh",
      city: "Penumuru",
      famous_foods: [
        { name: "Penumuru Chepala Pulusu", description: "Spicy fish curry.", image_url: "" },
        { name: "Pulihora", description: "Tamarind rice.", image_url: "" }
      ],
      languages: [
        { language: "Telugu", phrases: [{ english: "Hello", local: "Namaskaram" }] }
      ],
      culture_tips: [ "Remove shoes." ]
    };

    await collection.deleteMany({ city: "Penumuru" });
    await collection.insertOne(data);
    
    console.log("✅ FINALLY SEEDED NATIVE!!!");
  } catch (error) {
    console.error("❌ FULL ERROR:", error);
  } finally {
    await client.close();
  }
};

seedData();
