// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import explore from '../../data/expore.json'

export interface Location {
	img: string
	location: string
	distance: string
}

export type LocationData = Location[]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<LocationData>
) {
	res.status(200).json(explore)
}
