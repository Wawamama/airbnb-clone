import React from 'react'
import footerElements from './../data/footer'

import Header from '../components/header/Header'
import Footer from '../components/Footer'

interface SearchProps {
	location: string
}

const SearchPage: React.FC<SearchProps> = ({ location }) => {
	return (
		<>
			<Header />
			<main className='flex'>
				<section className='flex-grow px-10 pt-12'>
					<p className='text-xs'>300+ Stays for 4 guests</p>
					<h1 className='text-2xl font-bold mt-2 mb-4'>Stays in New York</h1>
					<div className='hidden lg:inline-flex mb-4 space-x-3 text-gray-800 whitespace-nowrap'>
						<p className='button'>Cancellation flexibility</p>
						<p className='button'>Type of place</p>
						<p className='button'>Price</p>
						<p className='button'>Rooms and beds</p>
						<p className='button'>More filters</p>
					</div>
				</section>
			</main>
			<Footer footerElements={footerElements.elements} />
		</>
	)
}

export default SearchPage
