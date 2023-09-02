const express = require('express');
const cors = require('cors');
const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "paste_your_connection_string_here";

// Connect to your Atlas cluster
const client = new MongoClient(url);

// Provide the name of the database and collection you want to use.
// If the database and/or collection do not exist, the driver and Atlas
// will create them automatically when you first write data.
const dbName = "business-loan-app";
const collectionName = "balance-sheet";

let database;
let collection;

async function connectToMongo() {
    try {
        await client.connect();
        database = client.db(dbName);
        collection = database.collection(collectionName);
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
}

connectToMongo().then(() => {
    const app = express();
    
    app.use(express.json());
    app.use(cors());

    app.get('/api/balance-sheet/:accountingProvider', async (req, res) => {
        try {
            const accountingProvider = req.params.accountingProvider;
            const document = await collection.findOne({"accounting_provider": accountingProvider})
            const sheet = document.sheet
            res.json(sheet)
        }
        catch(err) {
            console.log(err);
        }
    })

    const PORT = 5000
    
    app.listen(PORT, () => {
        console.log(`app listening on port http://localhost:${PORT}`)
    })
})