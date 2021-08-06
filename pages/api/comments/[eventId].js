import {
  connectDataBase,
  insertDocument,
  getAllDocument,
} from "../../../helpers/db-util";

async function hendler(req, res) {
  const eventId = req.query.eventId;
  let client;
  try {
    client = await connectDataBase();
  } catch (error) {
    res.status(500).json({ message: "connecting Data Base Failed" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      //add server-side
      res.status(422).json({ message: "Invalide Input" });
      return;
    }

    const newcomment = {
      email,
      name,
      text,
      eventId,
    };
    const db = client.db();
    let result;
    try {
      result = await insertDocument(client, "comments", newcomment);
      newcomment._id = result.insertedId;
      res.status(201).json({ message: "Add-new-Comment", comment: newcomment });
    } catch (error) {
      res.status(500).json({ message: "Inserting Comment failed" });
      client.close();
    }
  }
  if (req.method === "GET") {
    try {
      const documents = await getAllDocument(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting Comment failde" });
    }
  }
  client.close();
}

export default hendler;
