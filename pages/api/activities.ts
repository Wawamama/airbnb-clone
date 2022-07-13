// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import activities from '../../data/activities.json'
import { ActivityData } from '../../data/activities.types'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ActivityData>
) {
	res.status(200).json(activities)
}
