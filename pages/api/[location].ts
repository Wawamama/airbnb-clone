import { connectToDb } from '../../utils/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { toTitleCase } from '../../utils/toTitleCase'
import { LocationInfo } from '../../components/InfoCard'

export const getLocationFlats = async (location: string) => {
	const client = await connectToDb()
	const db = client.db()
	const collection = db.collection('listingsAndReviews')
	const results = await collection
		.find(
			{ 'address.market': toTitleCase(location) },
			{
				projection: {
					name: 1,
					summary: 1,
					price: 1,
					address: 1,
					images: 1,
					review_scores: 1,
				},
			}
		)
		.limit(10)
		.toArray()
	return results.map(
		(result): LocationInfo => ({
			title: result.name,
			summary: result.summary,
			score: result.review_scores.review_scores_rating,
			image: result.images.picture_url,
			price: +result.price,
		})
	)
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const location = String(req.query.location).replace('+', ' ')
	const result = await getLocationFlats(location)
	res.status(200).json(result)
}
