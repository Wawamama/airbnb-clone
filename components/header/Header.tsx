import React, { useState } from 'react'
import Image from 'next/image'
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import DatePicker from '../DatePicker'
import { useRouter } from 'next/router'
import { Dates } from './dates.types'

const LOGO_URL =
	'https://res.cloudinary.com/daxjdptqt/image/upload/v1657294921/airbnb-clone/580b57fcd9996e24bc43c513_wj4wyq.png'

interface HeaderProps {
	searchBarPlaceholder?: string
}

const Header: React.FC<HeaderProps> = ({ searchBarPlaceholder }) => {
	const [searchInput, setSearchInput] = useState<string>('')
	const [searchDates, setSearchDates] = useState<Dates>({
		startDate: new Date(),
		endDate: new Date(),
	})
	const { startDate, endDate } = searchDates
	const router = useRouter()

	const onCancel = (): void => {
		setSearchInput('')
	}

	const onSearch = ({ startDate, endDate, nbGuests }: Dates): void => {
		router.push({
			pathname: '/search',
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toDateString(),
				nbGuests,
			},
		})
		setSearchInput('')
	}

	const onDateSelection = ({ startDate, endDate }: Dates): void => {
		setSearchDates({ startDate, endDate })
	}

	return (
		<header className='sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10 bg-white'>
			<div
				onClick={() => router.push('/')}
				className='relative flex items-center h-10 cursor-pointer my-auto'
			>
				<Image
					src={LOGO_URL}
					layout='fill'
					objectFit='contain'
					objectPosition='left'
				/>
			</div>
			<div className='flex items-center md:border-2 rounded-full justify-between p-2 md:shadow-sm justify-self-stretch'>
				<input
					className='bg-transparent outline-none flex-grow text-gray-500 placeholder-gray-400 md:ml-2'
					type='text'
					placeholder={searchBarPlaceholder || 'search here'}
					value={searchInput}
					onChange={e => setSearchInput(e.target.value)}
				/>
				<SearchIcon className=' hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer ml-2' />
			</div>
			<div className='flex space-x-4 items-center justify-end text-gray-600'>
				<p className='hidden md:inline cursor-pointer'>Become a host</p>
				<GlobeAltIcon className='h-6' />
				<div className='flex border-2 rounded-full items-center space-x-2 p-2 cursor-pointer md:shadow-sm'>
					<MenuIcon className='h-6' />
					<UserCircleIcon className='h-6' />
				</div>
			</div>

			{searchInput && (
				<DatePicker
					onCancel={onCancel}
					onSearch={onSearch}
					onDateSelection={onDateSelection}
				/>
			)}
		</header>
	)
}

export default Header
