import { connectDataBase, insertDocument } from "../../helpers/db-util";
//client side validation on Emails

async function heandler(req, res) {
  if (req.method === "POST") {
    //mongodb dataBase insert msg
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "User Invalide Email" });
      return;
    }
    let client;
    try {
      client = await connectDataBase();
    } catch (error) {
      res.status(500).json({ message: " Msg DataBase will Failed" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Insetion  will Failed" });
      return;
    }

    res.status(201).json({ message: "Signe-Up" });
  }
}
export default heandler;
