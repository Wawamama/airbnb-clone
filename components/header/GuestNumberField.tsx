import React, { useState } from 'react'
import { UsersIcon } from '@heroicons/react/solid'

interface GuestNumberFieldProps {
	numberOfGuests: number
	setNumberOfGuests: (value: number) => void
}

const GuestNumberField: React.FC<GuestNumberFieldProps> = ({
	numberOfGuests,
	setNumberOfGuests,
}) => {
	const handleInput = (value: number) => {
		if (value <= 0) return
		setNumberOfGuests(value)
	}

	return (
		<div className='flex items-center border-b mb-4 pb-1'>
			<h2 className='text-xl flex-grow font-semibold'>Number of guests</h2>
			<UsersIcon className='h-5 w-5' />
			<input
				type='number'
				className='w-12 pl-2 text-lg outline-none text-red-300'
				value={numberOfGuests}
				onChange={e => handleInput(+e.target.value)}
				min={1}
			/>
		</div>
	)
}

export default GuestNumberField
