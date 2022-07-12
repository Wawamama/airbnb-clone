import React from 'react'
import Image from 'next/image'

interface LargeCardProps {
	img: string
	title: string
	description: string
	buttonTxt: string
}

const LargeCard: React.FC<LargeCardProps> = ({
	img,
	title,
	description,
	buttonTxt,
}) => {
	console.log('img', img)
	return (
		<section className='relative py-12 cursor-pointer'>
			<div className='relative h-96 min-w-[300px]'>
				<Image
					src={img}
					layout='fill'
					objectFit='cover'
					className='rounded-xl'
				/>
			</div>
			<div className='absolute top-32 left-12'>
				<h3 className='text-4xl mb-3 w-64'>{title}</h3>
				<p>{description}</p>
				<button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:scale-105 transition transform duration-200 ease-in-out'>
					{buttonTxt}
				</button>
			</div>
		</section>
	)
}

export default LargeCard
