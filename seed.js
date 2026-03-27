const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });
dotenv.config();

const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

const seedData = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Database connected via native driver.");
    
    // Mongoose default collection name for 'CultureData' is 'culturedatas'
    const db = client.db();
    const collection = db.collection('culturedatas');

    const data = {
      country: "India",
      state: "Andhra Pradesh",
      city: "Nellore",
      famous_foods: [
        {
          name: "Nellore Chepala Pulusu",
          description: "A famous, spicy and tangy fish curry that is synonymous with Nellore cuisine.",
          image_url: ""
        },
        {
          name: "Pulihora",
          description: "A traditional South Indian tamarind rice dish filled with spices and peanuts.",
          image_url: ""
        },
        {
          name: "Gongura Pachadi",
          description: "A vibrant and tangy chutney made from sorrel leaves, very popular in Andhra Pradesh.",
          image_url: ""
        }
      ],
      languages: [
        {
          language: "Telugu",
          phrases: [
            { english: "Hello", local: "Namaskaram" },
            { english: "How are you?", local: "Meeru ela unnaru?" },
            { english: "Thank you", local: "Dhanyavadalu" },
            { english: "Where is the temple?", local: "Gudi ekkada undi?" }
          ]
        }
      ],
      culture_tips: [
        "Remove your shoes before entering temples or homes.",
        "Dress modestly when visiting religious sites.",
        "Locals are very welcoming, learning a few words of Telugu goes a long way!"
      ]
    };

    // Clean up existing data for Nellore
    try { await db.dropCollection('culturedatas'); } catch(e) {}
    
    // Insert test data
    
    // Insert test data
    await collection.insertOne(data);
    console.log("✅ Successfully seeded authentic culture data for Nellore!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  } finally {
    await client.close();
    process.exit(0);
  }
};

seedData();
