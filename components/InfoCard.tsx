import React from 'react'

export interface LocationInfo {
	image: string
	title: string
	summary: string
	score: number
}

interface InfoCardProps {
	locationInfo: LocationInfo
}

const InfoCard: React.FC<InfoCardProps> = ({ locationInfo }) => {
	console.log('locationInfo', locationInfo)
	return (
		<>
			<p>{locationInfo.title}</p>
			<p>{locationInfo.score}</p>
		</>
	)
}

export default InfoCard
