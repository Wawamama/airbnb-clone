// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import explore from '../../data/expore.json'
import { LocationData } from '../../data/explore.types'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<LocationData>
) {
	res.status(200).json(explore)
}
