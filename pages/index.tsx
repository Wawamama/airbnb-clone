import type { NextPage, GetStaticProps } from 'next'
import axios from 'axios'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { LocationData } from './api/explore'
import SmallCard from '../components/SmallCard'
import { ActivityData } from './api/activities'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import footerElements from './../data/footer'

interface HomeProps {
	locations: LocationData
	activities: ActivityData
}

const Home: NextPage<HomeProps> = ({ locations, activities }) => {
	return (
		<div className=''>
			<Head>
				<title>Fake Airbnb</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Banner />
			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section className='py-6'>
					<h2 className='text-4xl pb-5 font-semibold text-gray-900'>
						Explore Nearby
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						{locations?.map(location => (
							<SmallCard location={location} key={location.img} />
						))}
					</div>
				</section>
				<section className='py-6'>
					<h2 className='text-4xl pb-5 font-semibold text-gray-900'>
						Live Anywhere
					</h2>
					<div className='flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3'>
						{activities?.map(activity => (
							<MediumCard activity={activity} key={activity.img} />
						))}
					</div>
				</section>
				<LargeCard
					img='https://res.cloudinary.com/daxjdptqt/image/upload/v1657635569/airbnb-clone/illustration_qu5odg.webp'
					title='The Greatest Natural Homes'
					description='Wishlist curated by Airbnb.'
					buttonTxt='Get Inspired'
				/>
			</main>
			<Footer footerElements={footerElements.elements} />
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const exploreURL =
		'https://res.cloudinary.com/daxjdptqt/raw/upload/v1657724461/airbnb-clone/expore_ouyvld.json'
	const activitiesURL =
		'https://res.cloudinary.com/daxjdptqt/raw/upload/v1657724471/airbnb-clone/activities_dt3dlr.json'
	const { data: locations } = await axios(exploreURL)
	const { data: activities } = await axios(activitiesURL)
	return {
		props: {
			locations,
			activities,
		},
	}
}

export default Home
