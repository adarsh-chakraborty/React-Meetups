import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method != 'POST') return;

  const { title, image, address, description } = req.body;
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const result = await meetupsCollection.insertOne({
    title,
    image,
    address,
    description
  });

  client.close();
  res.status(201).json({ message: 'Meetup Inserted' });
}

export default handler;
