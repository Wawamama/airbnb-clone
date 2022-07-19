import { connectToDb } from '../../utils/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await connectToDb()
	const db = client.db()
	const collection = db.collection('listingsAndReviews')
	const result = await collection.find({}).limit(10).toArray()
	res.status(200).json(result)
}
