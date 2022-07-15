import { MongoClient } from 'mongodb';

// /api/add-product
// POST /api/add-product

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		const client = await MongoClient.connect(process.env.MONGOLAB_URI);
		const db = client.db();

		const productsCollection = db.collection('products');

		const result = await productsCollection.insertOne(data);
		console.log(result);

		client.close();

		res.status(201).json({ message: 'Product inserted!' });
	}
}

export default handler;
