const {MongoClient} =  require("mongodb");
const url = "mongodb://localhost:27017";
const database = "ncu_db";
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('customers');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();