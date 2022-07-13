import React from 'react'
import { Activity } from './../data/activities.types'
import Image from 'next/image'

interface MediumCardProps {
	activity: Activity
}

const MediumCard: React.FC<MediumCardProps> = ({ activity }) => {
	return (
		<div className='cursor-pointer hover:scale-105 transform transition duration-200 ease-out'>
			<div className='relative h-80 w-80'>
				<Image
					src={activity.img}
					layout='fill'
					className='rounded-xl cursor-pointer'
				/>
			</div>
			<h3 className='text-2xl lg:text-xl mt-3'>{activity.title}</h3>
		</div>
	)
}

export default MediumCard
