import React from 'react'
import type { GetServerSideProps } from 'next'
import footerElements from './../data/footer'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import axios from 'axios'
import { getLocationFlats } from './api/[location]'
import { toTitleCase } from '../utils/toTitleCase'
import InfoCard, { LocationInfo } from '../components/InfoCard'
import intervalToDuration from 'date-fns/intervalToDuration'
import { start } from 'repl'

interface SearchProps {
	searchResultsString: string
}

const SearchPage: React.FC<SearchProps> = ({ searchResultsString }) => {
	const router = useRouter()
	const { location, startDate, endDate, nbGuests } = router.query
	const searchResults = JSON.parse(searchResultsString)

	const formattedStartDate: string = format(
		new Date(startDate as string),
		'dd MMMM yy'
	)
	const formattedEndDate: string = format(
		new Date(endDate as string),
		'dd MMMM yy'
	)
	const rangeDates: string = `${formattedStartDate} - ${formattedEndDate}`
	const nbResults: number = searchResults ? searchResults.length : 0
	const capitalizedLocation: string = toTitleCase(location as string)

	const getNbDays = () => {
		const interval = intervalToDuration({
			start: new Date(startDate as string),
			end: new Date(endDate as string),
		})
		return interval.days as number
	}

	return (
		<>
			<Header
				searchBarPlaceholder={`${location} | ${rangeDates} | ${nbGuests} guests`}
			/>
			<main className='flex'>
				<section className='flex-grow px-10 pt-12'>
					{nbResults > 0 && (
						<p className='text-xs'>
							{nbResults}+ stays on {rangeDates} - for {nbGuests} guests
						</p>
					)}
					{!nbResults && (
						<p className='text-md'>
							Sorry, there is no stay available in {capitalizedLocation} on{' '}
							{rangeDates}
						</p>
					)}
					<h1 className='text-2xl font-bold mt-2 mb-4'>
						Stays in {capitalizedLocation}
					</h1>
					<div className='hidden lg:inline-flex mb-4 space-x-3 text-gray-800 whitespace-nowrap'>
						<p className='button'>Cancellation flexibility</p>
						<p className='button'>Type of place</p>
						<p className='button'>Price</p>
						<p className='button'>Rooms and beds</p>
						<p className='button'>More filters</p>
					</div>
					<div className='flex flex-col'>
						{searchResults.map((result: LocationInfo) => (
							<InfoCard
								locationInfo={result}
								key={result.image}
								nbDays={getNbDays()}
							/>
						))}
					</div>
				</section>
			</main>
			<Footer footerElements={footerElements.elements} />
		</>
	)
}

export default SearchPage

export const getServerSideProps: GetServerSideProps = async context => {
	const location = context.query.location as string
	const searchResults = await getLocationFlats(location)
	return {
		props: {
			searchResultsString: JSON.stringify(searchResults),
		},
	}
}
