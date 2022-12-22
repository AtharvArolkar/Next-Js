import mongoose from "mongoose";

export async function initMangoose(){
    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }
    return await mongoose.connect(process.env.MONGODB_URL);
}


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://atharv:atharv@cluster0.hs90bfl.mongodb.net/Demo-Poc?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// export async function initMangoose(){
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// }
