// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import activities from '../../data/activities.json'

export interface Activity {
	img: string
	title: string
}

export type ActivityData = Activity[]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ActivityData>
) {
	res.status(200).json(activities)
}
