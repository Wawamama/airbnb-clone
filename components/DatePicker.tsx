import React, { ReactNode, useState } from 'react'
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range'
import Button from './Button'
import GuestNumberField from './header/GuestNumberField'

interface DatePickerProps {
	searchLocation?: string
	setSearchLocation: (input: string) => void
}

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
	const [startDate, setStartDate] = useState<Date | undefined>(new Date())
	const [endDate, setEndDate] = useState<Date | undefined>(new Date())
	const [numberOfGuests, setNumberOfGuests] = useState<number>(1)

	const selectedRange: Range = {
		startDate,
		endDate,
		key: 'selection',
	}

	const handleDateSelection = (rangesByKey: RangeKeyDict) => {
		setStartDate(rangesByKey.selection.startDate)
		setEndDate(rangesByKey.selection.endDate)
	}

	const onCancel = (): void => props.setSearchLocation('')

	const onSearch = (): void => console.log('Location: ' + props.searchLocation)

	return (
		<div className='flex flex-col col-span-3 mx-auto mt-4'>
			<DateRangePicker
				ranges={[selectedRange]}
				minDate={new Date()}
				rangeColors={['#FD5B61']}
				onChange={handleDateSelection}
			/>
			<GuestNumberField
				numberOfGuests={numberOfGuests}
				setNumberOfGuests={setNumberOfGuests}
			/>
			<div className='flex gap-2 md: gap-4 lg:gap-10 xl:gap-20'>
				<Button
					rounded
					title='Cancel'
					onClick={onCancel}
					bgColor='bg-gray-300'
					txColor='text-gray-700'
				/>
				<Button rounded title='Search' onClick={onSearch} />
			</div>
		</div>
	)
}

export default DatePicker
