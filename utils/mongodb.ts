import { MongoClient, ObjectId } from 'mongodb'

export const connectToDb = async () => {
	// const DATABASE_URL: string = process.env.DATABASE_URL as string
	const DATABASE_URL: string =
		'mongodb+srv://wawamama:test1234@testcluster0.zi9ufub.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
	const client = await MongoClient.connect(DATABASE_URL)
	if (!client) throw new Error('DB connection failed')
	return client
}
