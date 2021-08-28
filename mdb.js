const MongoClient = require('mongodb').MongoClient;
/* let clientCollection; */
const uri = "mongodb+srv://725:13111995@725week4.ghoce.mongodb.net/725Portfolio?retryWrites=true&w=majority"
let client = new MongoClient(uri, {useNewUrlParser: true})


client.connect ((err,db) => {
        
        if(!err) {
            console.log("MongoDB connected.");
        }
        else {
            console.log("MongoDB error.", err);
            process.exit(1);
        }
    })

exports.client = client;

/* const insertClients = (client,callback) => {
      clientCollection.insert(client,callback);
 }
 const getClients = (callback) => {
     clientCollection.find({}).toArray(callback);
 } */