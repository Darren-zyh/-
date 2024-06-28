const { MongoClient } = require('mongodb');

const dbURI = "mongodb://localhost:27017/CS5003";
const dbName = "CS5003";

async function initializeDB() {
    const client = new MongoClient(dbURI);
    try {
        await client.connect();
        console.log("Connected successfully to server");
        const db = client.db(dbName);

        const collections = ["users", "runs", "comments", "challenges"];

        for (let collectionName of collections) {

            const collectionExists = await db.listCollections({ name: collectionName }).toArray();
            if (collectionExists.length === 0) {
                await db.createCollection(collectionName);
                console.log(`Collection ${collectionName} created.`);
            } else {
                console.log(`Collection ${collectionName} already exists.`);
            }
        }
    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        await client.close();
    }
}

initializeDB().catch(console.error);
