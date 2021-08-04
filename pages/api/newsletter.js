import {MongoClient} from 'mongodb'
async function heandler(req,res){
    if(req.method ==='POST')
    {
        const userEmail =req.body.email
        if(!userEmail ||!userEmail.includes('@')){
            res.status(422).json({message:'User Invalide Email'})
            return 
        }
       const client = await MongoClient.connect('mongodb+srv://sr:110483@cluster0.fvr3o.mongodb.net/mynewsletter?retryWrites=true&w=majority')
           const db = client.db()
          await  db.collection('emails').insertOne({email:userEmail})
        res.status(201).json({message:'Signe-Up'})
        client.close();
    }
}
export default heandler