 import { MongoClient } from "mongodb"
 export async function connectDataBase(){
    const client = await MongoClient.connect('mongodb+srv://sr:110483@cluster0.fvr3o.mongodb.net/events?retryWrites=true&w=majority')
    return client

}
export async function insertDocument(client,collection,document){
    const db = client.db()
    const result =await  db.collection(collection).insertOne(document)
    return result;

}
export async function getAllDocument(client,collection,sort)
{
    const db =client.db()
      const documents= await 
      db.collection(collection)
      .find()
      .sort(sort)
      .toArray();
      
      return documents
      res.status(200).json({comments:documents})
}