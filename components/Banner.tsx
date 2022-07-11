import React from 'react'
import Image from 'next/image'

const Banner: React.FC = ({}) => {
	return (
		<div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
			<Image
				src='https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
				layout='fill'
				objectFit='cover'
				objectPosition='50% 70%'
			/>
			<div className='absolute top-1/2 w-full text-center'>
				<p className='text-sm text-white sm:text-lg md:text-xl lg:text-2xl'>
					Not sure where to go? No problem.
				</p>
				<button className='text-purple-700 bg-white rounded-full px-10 py-4 shadow-md font-bold my-3 hover:text-purple-600 active:scale-90 transition duration-100'>
					I'm flexible
				</button>
			</div>
		</div>
	)
}

export default Banner
