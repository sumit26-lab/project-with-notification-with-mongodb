import React from 'react'
import {MongoClient} from 'mongodb'
// import {connectDataBase,insertdocument,getAllDocument} from '../../../helpers/db-util'

async function hendler(req,res) {
   const eventId= req.query.eventId
   if(req.method ==='POST')
   const{email,name,text}=req.body;

   if(!email.includes('@')|| 
   !name || 
   name.trim() ===!text
     ||text.trim()==='')
   //add server-side 
   {
      res.status(422).json({message:'Invalide Input'})
      return ;

   }
   console.log(email,name,text)
   const newcomment={
      id: new Date().toISOString(),
      email,
      name,
      text
   }
   console.log(newcomment)
   res.status(201).json({message:'Add-new-Comment',comment:newcomment})
   if(req.method ==='GET')
   {
      const dummyList=[
         {
            id:'c1',name: "Max",email:"text@text.com", text:'new comment'
         }
      ] 
      res.status(200).json({comment:dummyList})
   }

}

export default hendler
