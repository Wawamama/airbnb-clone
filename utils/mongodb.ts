import { MongoClient, ObjectId } from 'mongodb'

export const connectToDb = async () => {
	const DATABASE_URL: string = process.env.DATABASE_URL as string
	const client = await MongoClient.connect(DATABASE_URL)
	if (!client) throw new Error('DB connection failed')
	return client
}
