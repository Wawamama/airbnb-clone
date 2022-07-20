import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
export interface LocationInfo {
	image: string
	title: string
	summary: string
	score: number
	price: number
}

interface InfoCardProps {
	locationInfo: LocationInfo
	nbDays: number
}

const InfoCard: React.FC<InfoCardProps> = ({ locationInfo, nbDays }) => {
	const { title, summary, score, image, price } = locationInfo
	const totalPrice = price * nbDays

	return (
		<div className='flex flex-col md:flex-row py-7 px-2 hover:shadow-lg hover:opacity-80 cursor-pointer transition duration-200 ease-out first:border-t border-b last:border-none'>
			<div className='relative h-52 w-80 flex-shrink-0 ml-4 mb-4 md:ml-0 md:mb-0'>
				<Image
					src={image}
					layout='fill'
					objectFit='cover'
					className='rounded-xl'
				/>
			</div>
			<div className='flex flex-col flex-grow pl-5'>
				<div className='flex justify-between'>
					<h3 className='text-xl'>{title}</h3>
					<HeartIcon className='h-7 cursor-pointer' />
				</div>
				<div className='border-b w-10 pt-2 mb-2'></div>
				<p className='text-sm text-gray-700 flex-grow'>{summary}</p>
				<div className='flex justify-between items-end pt-5'>
					<p className='flex items-center'>
						<StarIcon className='h-5 text-red-400 mr-1' />
						{score || 'not rated yet'}
					</p>
					<div>
						<p className='text-lg font-semibold pb-2 lg:text-2xl'>
							{price}€ / night
						</p>
						<p className='text-right font-extralight text-gray-800'>
							{totalPrice}€ total
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoCard
