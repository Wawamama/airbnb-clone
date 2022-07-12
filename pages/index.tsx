import type { NextPage, GetStaticProps } from 'next'
import axios from 'axios'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { LocationData } from './api/explore'
import SmallCard from '../components/SmallCard'

interface HomeProps {
	locations: LocationData
}

const Home: NextPage<HomeProps> = ({ locations }) => {
	return (
		<div className=''>
			<Head>
				<title>Fake Airbnb</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Banner />
			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section className='pt-6'>
					<h2 className='text-4xl pb-5 font-semibold text-gray-900'>
						Explore Nearby
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						{locations?.map(location => (
							<SmallCard location={location} key={location.img} />
						))}
					</div>
				</section>
			</main>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: locations } = await axios(`${process.env.API_URL}/explore`)
	return {
		props: {
			locations,
		},
	}
}

export default Home
